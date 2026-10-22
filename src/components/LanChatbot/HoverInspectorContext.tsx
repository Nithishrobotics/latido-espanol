import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import {
  explainSpanishText,
  getInstantExplanation,
  ExplanationResult,
  playSpanishAudio,
  SupportedLanguage,
  SUPPORTED_LANGUAGES
} from '../../services/languageAssistantService';

export interface SavedWordItem {
  spanish: string;
  translation: string;
  meaning: string;
  partOfSpeech: string;
  pronunciation: string;
  category: string;
  targetLang?: string;
  savedAt: number;
}

interface HoverInspectorContextType {
  isHoverEnabled: boolean;
  setIsHoverEnabled: (enabled: boolean) => void;
  targetLanguage: SupportedLanguage;
  setTargetLanguage: (lang: SupportedLanguage) => void;
  hoveredData: ExplanationResult | null;
  tooltipPos: { top: number; left: number; placement: 'top' | 'bottom' } | null;
  isChatbotOpen: boolean;
  setIsChatbotOpen: (open: boolean) => void;
  activeChatQuery: string | null;
  setActiveChatQuery: (query: string | null) => void;
  savedWords: SavedWordItem[];
  saveWord: (item: ExplanationResult) => void;
  removeSavedWord: (spanish: string) => void;
  isWordSaved: (spanish: string) => boolean;
  askAboutText: (text: string) => void;
  pinnedExplanation: ExplanationResult | null;
  setPinnedExplanation: (item: ExplanationResult | null) => void;
  isAudioPlaying: boolean;
  speakSpanish: (phrase: string) => void;
  closeTooltip: () => void;
  isActivelyHovering: boolean;
  isDockMinimized: boolean;
  setIsDockMinimized: (minimized: boolean) => void;
  isTouchDevice: boolean;
}

const HoverInspectorContext = createContext<HoverInspectorContextType | null>(null);

const STORAGE_SAVED_KEY = 'rumbo-saved-spanish-words-v1';
const STORAGE_HOVER_TOGGLE_KEY = 'rumbo-hover-inspector-enabled';
const STORAGE_TARGET_LANG_KEY = 'rumbo-lan-target-language';

export const HoverInspectorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHoverEnabled, setIsHoverEnabledState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_HOVER_TOGGLE_KEY);
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  const [targetLanguage, setTargetLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_TARGET_LANG_KEY) as SupportedLanguage;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.id === saved)) {
        return saved;
      }
    } catch {}
    return 'en';
  });

  const [hoveredData, setHoveredData] = useState<ExplanationResult | null>(null);
  const [pinnedExplanation, setPinnedExplanation] = useState<ExplanationResult | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number; placement: 'top' | 'bottom' } | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);
  const [activeChatQuery, setActiveChatQuery] = useState<string | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isActivelyHovering, setIsActivelyHovering] = useState<boolean>(false);
  const [isDockMinimized, setIsDockMinimized] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const [savedWords, setSavedWords] = useState<SavedWordItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SAVED_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        spanish: 'Sobremesa',
        translation: 'Table conversation after meal',
        meaning: 'Lingering at the dining table chatting and relaxing after lunch.',
        partOfSpeech: 'Noun',
        pronunciation: 'soh-breh-MEH-sah',
        category: 'Cultura',
        savedAt: Date.now() - 3600000
      },
      {
        spanish: 'Tapeo',
        translation: 'Going for tapas',
        meaning: 'Hopping from bar to bar sharing tapas with friends.',
        partOfSpeech: 'Ritual',
        pronunciation: 'tah-PEH-oh',
        category: 'Comida',
        savedAt: Date.now() - 7200000
      }
    ];
  });

  // Detect touch capability
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const setTargetLanguage = useCallback((lang: SupportedLanguage) => {
    setTargetLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_TARGET_LANG_KEY, lang);
    } catch {}

    const activeText = hoveredData?.sourceText || pinnedExplanation?.sourceText;
    if (activeText) {
      explainSpanishText(activeText, lang).then((res) => {
        setHoveredData(res);
        setPinnedExplanation(res);
      });
    }
  }, [hoveredData, pinnedExplanation]);

  const setIsHoverEnabled = useCallback((enabled: boolean) => {
    setIsHoverEnabledState(enabled);
    try {
      localStorage.setItem(STORAGE_HOVER_TOGGLE_KEY, String(enabled));
    } catch {}
    if (!enabled) {
      setHoveredData(null);
      setTooltipPos(null);
      setIsActivelyHovering(false);
    }
  }, []);

  const saveWord = useCallback((item: ExplanationResult) => {
    setSavedWords((prev) => {
      const exists = prev.some((w) => w.spanish.toLowerCase() === item.sourceText.toLowerCase());
      if (exists) return prev;
      const updated: SavedWordItem[] = [
        {
          spanish: item.sourceText,
          translation: item.translation,
          meaning: item.meaning,
          partOfSpeech: item.partOfSpeech,
          pronunciation: item.pronunciation,
          category: item.category,
          targetLang: item.targetLang,
          savedAt: Date.now()
        },
        ...prev
      ];
      try {
        localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const removeSavedWord = useCallback((spanish: string) => {
    setSavedWords((prev) => {
      const updated = prev.filter((w) => w.spanish.toLowerCase() !== spanish.toLowerCase());
      try {
        localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const isWordSaved = useCallback((spanish: string): boolean => {
    return savedWords.some((w) => w.spanish.toLowerCase() === spanish.toLowerCase());
  }, [savedWords]);

  const speakSpanish = useCallback((phrase: string) => {
    setIsAudioPlaying(true);
    playSpanishAudio(phrase, () => setIsAudioPlaying(false));
  }, []);

  const askAboutText = useCallback((text: string) => {
    const langObj = SUPPORTED_LANGUAGES.find((l) => l.id === targetLanguage);
    const langLabel = langObj ? langObj.name : 'English';
    setActiveChatQuery(`Please explain the Spanish expression or word «${text}» and how it is used in Spain (Explain in ${langLabel}).`);
    setIsChatbotOpen(true);
  }, [targetLanguage]);

  const closeTooltip = useCallback(() => {
    setHoveredData(null);
    setTooltipPos(null);
    setIsActivelyHovering(false);
  }, []);

  const debounceTimerRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);
  const activeElementRef = useRef<HTMLElement | null>(null);
  const targetLanguageRef = useRef<SupportedLanguage>(targetLanguage);

  useEffect(() => {
    targetLanguageRef.current = targetLanguage;
  }, [targetLanguage]);

  // Global Mouse Hover Detection (for Desktop) + Tap to Translate (for Mobile)
  useEffect(() => {
    if (!isHoverEnabled) return;

    const processElementText = (textElement: HTMLElement, isUserTap = false) => {
      const rawText = (textElement.innerText || textElement.textContent || '').trim();
      if (!rawText || rawText.length < 2 || rawText.length > 250) return;
      if (/^[\d\s.,:;–—/\\()#*+\-%€$]+$/.test(rawText)) return;

      activeElementRef.current = textElement;

      let candidate = rawText;
      if (candidate.length > 60 && candidate.includes('.')) {
        const sentences = candidate.split('.');
        candidate = sentences[0].trim();
      }

      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }

      // 1. INSTANT 0ms ZERO-LAG DISPLAY: Show immediate translation immediately!
      const instantResult = getInstantExplanation(candidate, targetLanguageRef.current);
      setHoveredData(instantResult);
      setPinnedExplanation(instantResult);
      setIsActivelyHovering(true);
      setIsDockMinimized(false);

      // If on mobile tap, give brief visual feedback
      if (isUserTap) {
        textElement.classList.add('lan-mobile-highlight');
        window.setTimeout(() => textElement.classList.remove('lan-mobile-highlight'), 1200);
      }

      // 2. Background AI enrichment (adds cultural nuance without delaying user UI)
      if (!instantResult.isAiGenerated && !instantResult.culturalNote) {
        explainSpanishText(candidate, targetLanguageRef.current).then((enriched) => {
          if (activeElementRef.current === textElement) {
            setHoveredData(enriched);
            setPinnedExplanation(enriched);
          }
        });
      }
    };

    // 1. Mouseover for Desktop: stays open while cursor is on text
    const handlePointerMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.closest('#lan-chatbot-root') ||
        target.closest('[data-chatbot]') ||
        target.closest('.lan-no-hover') ||
        target.matches('input, textarea, select, option, audio, video')
      ) {
        return;
      }

      const textElement = target.closest('p, h1, h2, h3, h4, h5, h6, span, a, button, li, dt, dd, blockquote, figcaption') as HTMLElement | null;
      if (!textElement) return;

      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }

      if (activeElementRef.current && (activeElementRef.current === textElement || activeElementRef.current.contains(textElement))) {
        setIsActivelyHovering(true);
        return;
      }

      if (debounceTimerRef.current) {
        window.clearTimeout(debounceTimerRef.current);
      }

      // Ultra-fast 20ms debounce for instant feedback with zero perceived lag
      debounceTimerRef.current = window.setTimeout(() => {
        processElementText(textElement, false);
      }, 20);
    };

    // 2. Mouseout: DO NOT close until cursor actually leaves the text
    const handlePointerOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;

      // Keep open if moving within the text element or its children
      if (activeElementRef.current && related && (activeElementRef.current === related || activeElementRef.current.contains(related))) {
        return;
      }

      // Keep open if moving into the translation dock or chatbot
      if (related?.closest('#lan-chatbot-root') || related?.closest('[data-chatbot]')) {
        return;
      }

      // If moving directly into another text element, let pointerover handle it smoothly
      if (related?.closest('p, h1, h2, h3, h4, h5, h6, span, li, dt, dd, blockquote, figcaption')) {
        return;
      }

      if (debounceTimerRef.current) {
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }

      // When cursor leaves the text, promptly close/shrink the box
      idleTimerRef.current = window.setTimeout(() => {
        activeElementRef.current = null;
        setIsActivelyHovering(false);
      }, 250);
    };

    // 3. Click / Tap for Mobile & Touch Devices
    const handleTouchClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // DO NOT intercept any button, link, tab, navigation CTA, or form input!
      // This ensures all buttons on phones immediately open their respective pages or actions!
      if (target.closest('button, a, [role="button"], [role="tab"], [role="menuitem"], input, select, textarea, label, summary, [onclick], .leaflet-container, .cursor-pointer, [data-interactive]')) {
        return;
      }

      if (
        target.closest('#lan-chatbot-root') ||
        target.closest('[data-chatbot]') ||
        target.closest('.lan-no-hover')
      ) {
        return;
      }

      // Only inspect plain reading text elements on mobile
      const textElement = target.closest('p, h1, h2, h3, h4, h5, h6, dt, dd, blockquote, figcaption') as HTMLElement | null;
      if (!textElement) return;

      // Double-check: ensure the text element itself is not inside any interactive parent
      if (textElement.closest('button, a, [role="button"], [role="tab"], [role="menuitem"], nav')) {
        return;
      }

      processElementText(textElement, true);
    };

    document.addEventListener('mouseover', handlePointerMove);
    document.addEventListener('mouseout', handlePointerOut);
    document.addEventListener('click', handleTouchClick, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handlePointerMove);
      document.removeEventListener('mouseout', handlePointerOut);
      document.removeEventListener('click', handleTouchClick);
      if (debounceTimerRef.current) window.clearTimeout(debounceTimerRef.current);
      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    };
  }, [isHoverEnabled]);

  return (
    <HoverInspectorContext.Provider
      value={{
        isHoverEnabled,
        setIsHoverEnabled,
        targetLanguage,
        setTargetLanguage,
        hoveredData,
        tooltipPos,
        isChatbotOpen,
        setIsChatbotOpen,
        activeChatQuery,
        setActiveChatQuery,
        savedWords,
        saveWord,
        removeSavedWord,
        isWordSaved,
        askAboutText,
        pinnedExplanation,
        setPinnedExplanation,
        isAudioPlaying,
        speakSpanish,
        closeTooltip,
        isActivelyHovering,
        isDockMinimized,
        setIsDockMinimized,
        isTouchDevice
      }}
    >
      {children}
    </HoverInspectorContext.Provider>
  );
};

export function useHoverInspector(): HoverInspectorContextType {
  const context = useContext(HoverInspectorContext);
  if (!context) {
    throw new Error('useHoverInspector must be used within a HoverInspectorProvider');
  }
  return context;
}
