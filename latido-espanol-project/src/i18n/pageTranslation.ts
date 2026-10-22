import { useCallback, useEffect, useRef, useState } from 'react';

export type TranslationLanguage = 'en' | 'fr' | 'de' | 'it' | 'pt';

export const TRANSLATION_LANGUAGES: { id: TranslationLanguage; label: string; name: string }[] = [
  { id: 'en', label: 'English', name: 'English' },
  { id: 'fr', label: 'Français', name: 'French' },
  { id: 'de', label: 'Deutsch', name: 'German' },
  { id: 'it', label: 'Italiano', name: 'Italian' },
  { id: 'pt', label: 'Português', name: 'Portuguese' },
];

type TranslationMonitor = {
  addEventListener: (name: 'downloadprogress', callback: (event: { loaded: number }) => void) => void;
};

type NativeTranslatorInstance = {
  translate: (text: string) => Promise<string>;
  destroy?: () => void;
};

type NativeTranslatorApi = {
  create: (options: {
    sourceLanguage: string;
    targetLanguage: string;
    monitor?: (monitor: TranslationMonitor) => void;
  }) => Promise<NativeTranslatorInstance>;
};

export type TranslationStatus = 'idle' | 'checking' | 'unsupported' | 'downloading' | 'ready' | 'error';

const TRANSLATION_CLASS = 'page-line-translation';
const TEXT_BLOCKS = 'p,h1,h2,h3,h4,h5,h6,blockquote,figcaption,dt,dd,th,td,summary,legend,caption,address';
const INLINE_TEXT = 'span,strong,em,b,i,small,code,abbr,time';
const SEMANTIC_TEXT = `${TEXT_BLOCKS},button,a,label,li`;
const CACHE_PREFIX = 'rumbo-page-translation-v1:';

type TranslationTarget = { element: HTMLElement; sourceText: string };

function getNativeTranslator(): NativeTranslatorApi | undefined {
  return (globalThis as typeof globalThis & { Translator?: NativeTranslatorApi }).Translator;
}

function getCacheKey(language: TranslationLanguage, text: string) {
  return `${CACHE_PREFIX}${language}:${text}`;
}

function readCache(language: TranslationLanguage, text: string): string | null {
  try {
    return window.localStorage.getItem(getCacheKey(language, text));
  } catch {
    return null;
  }
}

function writeCache(language: TranslationLanguage, text: string, value: string) {
  try {
    window.localStorage.setItem(getCacheKey(language, text), value);
  } catch {
    // Storage can be unavailable in private browsing; translations still work for this visit.
  }
}

function directText(element: HTMLElement): string {
  return Array.from(element.childNodes)
    .filter((node): node is Text => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent || '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function visibleSourceText(element: HTMLElement): string {
  const copy = element.cloneNode(true) as HTMLElement;
  copy.querySelectorAll(`.${TRANSLATION_CLASS}`).forEach((line) => line.remove());
  return (copy.innerText || copy.textContent || '').replace(/\s+/g, ' ').trim();
}

function getTranslationTargets(root: ParentNode): TranslationTarget[] {
  const candidates = Array.from(root.querySelectorAll<HTMLElement>(`${SEMANTIC_TEXT},${INLINE_TEXT},div,input[placeholder],textarea[placeholder]`));
  return candidates.flatMap((element) => {
    const isField = element.matches('input,textarea');
    if (element.classList.contains(TRANSLATION_CLASS)) return [];
    if (element.closest('[data-translation-exclude="true"]')) return [];
    if (element.closest(`.${TRANSLATION_CLASS}`)) return [];
    if (element.matches('button,a,li') && element.querySelector(TEXT_BLOCKS)) return [];
    if (element.matches('li') && element.querySelector('button,a')) return [];
    const isInlineText = element.matches(INLINE_TEXT);
    const isDiv = element.tagName === 'DIV';
    const isPlaceholder = element.matches('input[placeholder],textarea[placeholder]');
    let text = '';
    if (isPlaceholder) {
      const field = element as HTMLInputElement | HTMLTextAreaElement;
      if (field.value) return [];
      text = field.placeholder.trim();
    } else if (isDiv) {
      text = directText(element);
      if (element.closest(SEMANTIC_TEXT)) return [];
    } else {
      text = visibleSourceText(element);
    }
    if (isInlineText) {
      if (element.closest(SEMANTIC_TEXT)) return [];
      if (element.parentElement?.closest(INLINE_TEXT)) return [];
    }
    if (!text || text.length > 1400) return [];
    if (element.getAttribute('aria-hidden') === 'true') return [];
    const directLine = element.querySelector<HTMLElement>(`:scope > .${TRANSLATION_CLASS}`);
    if (directLine) {
      if (directLine.dataset.sourceText === text) return [];
      directLine.remove();
    }
    const fieldLine = isField && element.nextElementSibling?.classList.contains(TRANSLATION_CLASS)
      ? element.nextElementSibling as HTMLElement
      : null;
    if (fieldLine) {
      if (fieldLine.dataset.sourceText === text) return [];
      fieldLine.remove();
    }
    return [{ element, sourceText: text }];
  });
}

function attachTranslation(element: HTMLElement, sourceText: string, translated: string, language: TranslationLanguage) {
  if (!element.isConnected) return;
  if (!element.matches('input,textarea') && element.querySelector(`:scope > .${TRANSLATION_CLASS}`)) return;
  const line = document.createElement('span');
  line.className = TRANSLATION_CLASS;
  line.dataset.language = language;
  line.dataset.sourceText = sourceText;
  line.textContent = translated;
  line.setAttribute('lang', language);
  line.setAttribute('aria-label', `${TRANSLATION_LANGUAGES.find((item) => item.id === language)?.name ?? 'Translation'}: ${translated}`);
  if (element.matches('input,textarea')) element.insertAdjacentElement('afterend', line);
  else element.append(line);
}

export function usePageTranslation() {
  const [language, setLanguage] = useState<TranslationLanguage>(() => {
    try {
      const saved = window.localStorage.getItem('rumbo-translation-language');
      if (TRANSLATION_LANGUAGES.some((item) => item.id === saved)) return saved as TranslationLanguage;
    } catch {
      // Use English when local storage is unavailable.
    }
    return 'en';
  });
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState<TranslationStatus>('idle');
  const [progress, setProgress] = useState<number | null>(null);
  const translatorRef = useRef<NativeTranslatorInstance | null>(null);
  const currentLanguageRef = useRef<TranslationLanguage>(language);
  const generationRef = useRef(0);
  const cacheRef = useRef(new Map<string, string>());

  const clearLines = useCallback(() => {
    document.querySelectorAll(`.${TRANSLATION_CLASS}`).forEach((element) => element.remove());
  }, []);

  const translatePage = useCallback(async (targetLanguage: TranslationLanguage, instance: NativeTranslatorInstance) => {
    const root = document.body;
    if (!root) return;
    const generation = generationRef.current;
    const elements = getTranslationTargets(root);
    let cursor = 0;
    const workers = Array.from({ length: 4 }, async () => {
      while (cursor < elements.length) {
        const { element, sourceText } = elements[cursor++];
        if (!sourceText || generation !== generationRef.current) continue;
        const memoryKey = `${targetLanguage}\u0000${sourceText}`;
        let translated = cacheRef.current.get(memoryKey) || readCache(targetLanguage, sourceText);
        if (!translated) {
          try {
            translated = await instance.translate(sourceText);
            cacheRef.current.set(memoryKey, translated);
            writeCache(targetLanguage, sourceText, translated);
          } catch {
            continue;
          }
        }
        if (generation === generationRef.current && currentLanguageRef.current === targetLanguage) {
          attachTranslation(element, sourceText, translated, targetLanguage);
        }
      }
    });
    await Promise.all(workers);
  }, []);

  const enable = useCallback(async (targetLanguage: TranslationLanguage = currentLanguageRef.current) => {
    const NativeTranslator = getNativeTranslator();
    if (!NativeTranslator) {
      setEnabled(false);
      setStatus('unsupported');
      clearLines();
      return;
    }

    generationRef.current += 1;
    const generation = generationRef.current;
    translatorRef.current?.destroy?.();
    translatorRef.current = null;
    clearLines();
    currentLanguageRef.current = targetLanguage;
    setLanguage(targetLanguage);
    setEnabled(false);
    setStatus('downloading');
    setProgress(null);
    try {
      window.localStorage.setItem('rumbo-translation-language', targetLanguage);
    } catch {
      // Preferences are optional; the selected language remains active in memory.
    }

    try {
      const instancePromise = NativeTranslator.create({
        sourceLanguage: 'es',
        targetLanguage,
        monitor: (monitor) => {
          monitor.addEventListener('downloadprogress', (event) => {
            if (generation === generationRef.current) setProgress(Math.round(event.loaded * 100));
          });
        },
      });
      const instance = await instancePromise;
      if (generation !== generationRef.current) {
        instance.destroy?.();
        return;
      }
      translatorRef.current = instance;
      setEnabled(true);
      setStatus('ready');
      setProgress(null);
      await translatePage(targetLanguage, instance);
    } catch {
      if (generation === generationRef.current) {
        setEnabled(false);
        setStatus('error');
        setProgress(null);
      }
    }
  }, [clearLines, translatePage]);

  const disable = useCallback(() => {
    generationRef.current += 1;
    translatorRef.current?.destroy?.();
    translatorRef.current = null;
    setEnabled(false);
    setStatus('idle');
    setProgress(null);
    clearLines();
  }, [clearLines]);

  const chooseLanguage = useCallback((targetLanguage: TranslationLanguage) => {
    currentLanguageRef.current = targetLanguage;
    setLanguage(targetLanguage);
    try {
      window.localStorage.setItem('rumbo-translation-language', targetLanguage);
    } catch {
      // Preferences are optional; the selected language remains active in memory.
    }
    if (translatorRef.current) void enable(targetLanguage);
  }, [enable]);

  useEffect(() => {
    if (!enabled || !translatorRef.current) return;
    const root = document.body;
    if (!root) return;
    let timer: number | undefined;
    const observer = new MutationObserver((mutations) => {
      if (mutations.every((mutation) => mutation.type === 'childList' && Array.from(mutation.addedNodes).every((node) => node instanceof HTMLElement && (node.classList.contains(TRANSLATION_CLASS) || node.closest(`.${TRANSLATION_CLASS}`))))) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (translatorRef.current) void translatePage(currentLanguageRef.current, translatorRef.current);
      }, 120);
    });
    const clearPlaceholderLine = (event: Event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        if (target.nextElementSibling?.classList.contains(TRANSLATION_CLASS)) target.nextElementSibling.remove();
      }
    };
    observer.observe(root, { childList: true, characterData: true, subtree: true });
    root.addEventListener('input', clearPlaceholderLine, true);
    return () => {
      observer.disconnect();
      root.removeEventListener('input', clearPlaceholderLine, true);
      window.clearTimeout(timer);
    };
  }, [enabled, translatePage]);

  useEffect(() => () => {
    translatorRef.current?.destroy?.();
  }, []);

  return { language, enabled, status, progress, enable, disable, chooseLanguage };
}
