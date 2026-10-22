import { lookupSpanishMeaning, DictionaryEntry, quickTranslatePhrase } from '../data/spanishDictionary';

export type SupportedLanguage = 'en' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'zh';

export interface LanguageOption {
  id: SupportedLanguage;
  name: string;
  flag: string;
  label: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { id: 'en', name: 'English', flag: '🇬🇧', label: 'EN' },
  { id: 'fr', name: 'Français', flag: '🇫🇷', label: 'FR' },
  { id: 'de', name: 'Deutsch', flag: '🇩🇪', label: 'DE' },
  { id: 'it', name: 'Italiano', flag: '🇮🇹', label: 'IT' },
  { id: 'pt', name: 'Português', flag: '🇵🇹', label: 'PT' },
  { id: 'ja', name: '日本語', flag: '🇯🇵', label: 'JA' },
  { id: 'zh', name: '中文', flag: '🇨🇳', label: 'ZH' }
];

export interface ExplanationResult {
  sourceText: string;
  translation: string;
  meaning: string;
  partOfSpeech: string;
  pronunciation: string;
  category: string;
  culturalNote?: string;
  breakdown?: { word: string; meaning: string }[];
  targetLang?: string;
  isAiGenerated?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  highlightedPhrase?: string;
  suggestedFollowUps?: string[];
}

const CACHE_KEY_PREFIX = 'rumbo-lan-explain-cache:';
const memoryCache = new Map<string, ExplanationResult>();

export function playSpanishAudio(phrase: string, onEnd?: () => void): boolean {
  if (!('speechSynthesis' in window)) return false;
  try {
    window.speechSynthesis.cancel();
    const clean = phrase.replace(/[«»"]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'es-ES';
    utterance.rate = 0.88; // gentle, clear pace for learners
    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }
    window.speechSynthesis.speak(utterance);
    return true;
  } catch {
    return false;
  }
}

/**
 * Instant synchronous translation resolver (0ms) for Spanish text,
 * guaranteeing zero time-lag feedback when hovering or tapping.
 */
export function getInstantExplanation(text: string, targetLang: string = 'en'): ExplanationResult {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      sourceText: '',
      translation: '',
      meaning: '',
      partOfSpeech: '',
      pronunciation: '',
      category: 'General',
      targetLang
    };
  }

  const cacheKey = `${CACHE_KEY_PREFIX}${targetLang}:${trimmed.toLowerCase().slice(0, 100)}`;

  // 1. Instant Memory Cache (0ms)
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey)!;
  }

  // 2. Instant Local Dictionary Check (0ms)
  const localMatch: DictionaryEntry | null = lookupSpanishMeaning(trimmed);
  if (localMatch) {
    const translation = (localMatch.translations && localMatch.translations[targetLang]) || localMatch.translation;
    const res: ExplanationResult = {
      sourceText: trimmed,
      translation,
      meaning: localMatch.meaning,
      partOfSpeech: localMatch.partOfSpeech,
      pronunciation: localMatch.pronunciation,
      category: localMatch.category,
      culturalNote: localMatch.culturalNote,
      targetLang,
      isAiGenerated: false
    };
    memoryCache.set(cacheKey, res);
    return res;
  }

  // 3. Local storage cache check (0ms)
  try {
    const cached = window.localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      const res = { ...parsed, sourceText: trimmed, targetLang };
      memoryCache.set(cacheKey, res);
      return res;
    }
  } catch {
    // Ignore storage errors
  }

  // 4. Instant smart synthesizer (0ms)
  const synthesized = quickTranslatePhrase(trimmed, targetLang);
  const provisional: ExplanationResult = {
    sourceText: trimmed,
    translation: synthesized.translation,
    meaning: synthesized.meaning,
    partOfSpeech: 'Spanish phrase',
    pronunciation: generateBasicPhonetics(trimmed),
    category: synthesized.category,
    targetLang,
    isAiGenerated: false
  };
  memoryCache.set(cacheKey, provisional);
  return provisional;
}

/**
 * Intelligent explanation engine for Spanish text hovered anywhere on the website,
 * with full multi-language conversion support and zero-latency caching.
 */
export async function explainSpanishText(text: string, targetLang: string = 'en'): Promise<ExplanationResult> {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      sourceText: '',
      translation: '',
      meaning: '',
      partOfSpeech: '',
      pronunciation: '',
      category: 'General',
      targetLang
    };
  }

  const cacheKey = `${CACHE_KEY_PREFIX}${targetLang}:${trimmed.toLowerCase().slice(0, 100)}`;

  // 1. Instant Memory Cache (0ms)
  if (memoryCache.has(cacheKey) && memoryCache.get(cacheKey)!.isAiGenerated) {
    return memoryCache.get(cacheKey)!;
  }

  // 2. Instant Local Dictionary Check (0ms)
  const localMatch: DictionaryEntry | null = lookupSpanishMeaning(trimmed);
  if (localMatch) {
    const translation = (localMatch.translations && localMatch.translations[targetLang]) || localMatch.translation;
    const res: ExplanationResult = {
      sourceText: trimmed,
      translation,
      meaning: localMatch.meaning,
      partOfSpeech: localMatch.partOfSpeech,
      pronunciation: localMatch.pronunciation,
      category: localMatch.category,
      culturalNote: localMatch.culturalNote,
      targetLang,
      isAiGenerated: false
    };
    memoryCache.set(cacheKey, res);
    return res;
  }

  // 3. Local storage cache check (0ms)
  try {
    const cached = window.localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      const res = { ...parsed, sourceText: trimmed, targetLang };
      memoryCache.set(cacheKey, res);
      return res;
    }
  } catch {
    // Ignore storage errors
  }

  // 4. Query backend API with targetLang
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch('/api/language-assistant/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: trimmed, targetLang }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.translation) {
        const result: ExplanationResult = {
          sourceText: trimmed,
          translation: data.translation,
          meaning: data.meaning || data.translation,
          partOfSpeech: data.partOfSpeech || 'Spanish expression',
          pronunciation: data.pronunciation || generateBasicPhonetics(trimmed),
          category: data.category || 'Viajes y Cultura',
          culturalNote: data.culturalNote || undefined,
          breakdown: data.breakdown || undefined,
          targetLang,
          isAiGenerated: true
        };

        memoryCache.set(cacheKey, result);
        try {
          window.localStorage.setItem(cacheKey, JSON.stringify(result));
        } catch {}

        return result;
      }
    }
  } catch {
    // Fall back to heuristic breakdown
  }

  // 5. Client-side heuristic breakdown fallback (0ms)
  const fallback = generateHeuristicExplanation(trimmed, targetLang);
  memoryCache.set(cacheKey, fallback);
  return fallback;
}

function generateBasicPhonetics(text: string): string {
  return text
    .toLowerCase()
    .replace(/ll/g, 'y')
    .replace(/ñ/g, 'ny')
    .replace(/j/g, 'h')
    .replace(/z/g, 'th')
    .replace(/ce/g, 'the')
    .replace(/ci/g, 'thee')
    .replace(/qu/g, 'k')
    .replace(/h/g, '');
}

function generateHeuristicExplanation(text: string, targetLang: string): ExplanationResult {
  const isQuestion = text.includes('?') || text.includes('¿');
  const isExclamation = text.includes('!') || text.includes('¡');

  let partOfSpeech = 'Spanish text';
  let category = 'Español general';

  if (isQuestion) {
    partOfSpeech = 'Pregunta / Question';
    category = 'Conversación';
  } else if (isExclamation) {
    partOfSpeech = 'Exclamación / Exclamation';
    category = 'Expresiones';
  } else if (text.split(' ').length === 1) {
    partOfSpeech = 'Palabra española / Word';
  } else {
    partOfSpeech = 'Frase descriptiva / Phrase';
  }

  const langObj = SUPPORTED_LANGUAGES.find((l) => l.id === targetLang);
  const langLabel = langObj ? langObj.name : 'Selected Language';

  return {
    sourceText: text,
    translation: `«${text}»`,
    meaning: `Spanish term from Rumbo España. (Translating into ${langLabel}).`,
    partOfSpeech,
    pronunciation: generateBasicPhonetics(text),
    category,
    culturalNote: 'Use Lan Chatbot for detailed grammar breakdown, regional nuances, and conversational tips.',
    targetLang,
    isAiGenerated: false
  };
}

/**
 * Sends a message to the Lan Chatbot AI assistant with target language support.
 */
export async function sendChatMessage(
  messages: { role: 'user' | 'assistant'; content: string }[],
  activeHoverText?: string,
  targetLang: string = 'en'
): Promise<{ reply: string; followUps: string[] }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const response = await fetch('/api/language-assistant/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, activeHoverText, targetLang }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.reply) {
        return {
          reply: data.reply,
          followUps: data.suggestedPrompts || [
            '¿Cómo se pronuncia en España?',
            'Dame un ejemplo cotidiano',
            'Explícame la diferencia cultural'
          ]
        };
      }
    }
  } catch {
    // Backend unavailable or error; use local AI tutor fallback
  }

  // Graceful local Spanish conversational tutor response
  return generateLocalChatbotResponse(messages[messages.length - 1]?.content || '', activeHoverText, targetLang);
}

function generateLocalChatbotResponse(
  userPrompt: string,
  activeHoverText?: string,
  targetLang: string = 'en'
): { reply: string; followUps: string[] } {
  const lower = userPrompt.toLowerCase();
  const langObj = SUPPORTED_LANGUAGES.find((l) => l.id === targetLang);
  const langLabel = langObj ? langObj.name : 'English';

  if (activeHoverText && (lower.includes('hover') || lower.includes('este texto') || lower.includes('significa') || lower.includes('explain') || lower.includes('what does'))) {
    const lookup = lookupSpanishMeaning(activeHoverText);
    if (lookup) {
      return {
        reply: `Certainly! In Spanish, **«${lookup.spanish}»** translates to **"${lookup.translation}"** in ${langLabel}.\n\n📖 **Meaning & Context:** ${lookup.meaning}\n\n🗣️ **Pronunciation Guide:** /${lookup.pronunciation}/\n\n💡 **Cultural Insight:** ${lookup.culturalNote || 'An essential part of daily life and social rituals in Spain.'}`,
        followUps: [
          `How do I use «${lookup.spanish}» in a sentence?`,
          'Are there similar expressions in Spain?',
          'How do locals pronounce this?'
        ]
      };
    }
    return {
      reply: `Regarding **«${activeHoverText}»**: This is an authentic Spanish term from our journey across Spain, describing regional culture, travel connections, or gastronomy. Would you like to know how to use it in everyday conversation?`,
      followUps: [
        'How do I order food politely in a Spanish bar?',
        'Explain the tradition of tapas and tapeo',
        'Useful phrases for taking the train in Spain'
      ]
    };
  }

  if (lower.includes('hola') || lower.includes('hello') || lower.includes('hi') || lower.includes('buenos dias')) {
    return {
      reply: `¡Hola! 👋 I'm **Lola**, your personal Spanish language companion and cultural guide for *Rumbo España*.\n\n✨ **Hover Translation:** Simply move your mouse over any Spanish text on the website to see its live translation and pronunciation in **${langLabel}** down in the inspector dock.\n\nYou can ask me anything about Spanish vocabulary, ordering tapas, grammar (like ser vs estar), or travel tips. What would you like to explore today?`,
      followUps: [
        'What does «Sobremesa» mean in Spain?',
        'How do I order a beer and tapas like a local?',
        'Difference between «por» and «para»'
      ]
    };
  }

  if (lower.includes('tapa') || lower.includes('comer') || lower.includes('order') || lower.includes('food') || lower.includes('beer')) {
    return {
      reply: `¡Qué rico! Tapas dining is one of Spain's greatest cultural pleasures! 🥘 Here is how to order like an authentic local in Madrid, Seville, or Barcelona:\n\n1. **For a small draft beer:** *«Una caña, por favor»* (/OO-nah KAH-nyah, por fah-VOR/) — poured cold with a rich foam collar.\n2. **To order shared plates:** *«¿Nos pone una ración de tortilla y unas patatas bravas?»* ('Could we have a portion of potato omelette and spicy potatoes?').\n3. **Asking for the check:** *«La cuenta cuando pueda, por favor»* ('The bill whenever you can, please').\n\n💡 In southern cities like Granada and Jaén, tapas are free with every drink you order!`,
      followUps: [
        'What is a sobremesa?',
        'How is authentic paella eaten?',
        'Difference between tapa, pincho and ración'
      ]
    };
  }

  if (lower.includes('ser') && lower.includes('estar')) {
    return {
      reply: `One of the most famous Spanish grammar questions! \n\n• **SER** is used for permanent identity, origin, professions, and inherent characteristics:\n  — *«Madrid **es** la capital de España»* (Madrid is the capital).\n  — *«Soy viajero»* (I am a traveler).\n\n• **ESTAR** is used for physical location and temporary conditions/states:\n  — *«La Alhambra **está** en Granada»* (The Alhambra is in Granada).\n  — *«El café **está** caliente»* (The coffee is hot right now).\n\n💡 **Golden Rule:** Whenever you refer to where something is located on a map, always use **ESTAR**!`,
      followUps: [
        'Give an example of «ser rico» vs «estar rico»',
        'When do I use «haber» vs «estar»?',
        'Quiz me on ser and estar'
      ]
    };
  }

  return {
    reply: `That's a fantastic question! Spanish is a warm, expressive language deeply connected to daily rituals and local culture. \n\nRemember that you can **hover over any word or phrase on this page** to inspect its translation into **${langLabel}** instantly. Would you like to practice a dialogue, learn travel phrases, or discover more about Spain's traditions?`,
    followUps: [
      'What are 5 essential phrases for traveling in Spain?',
      'How to greet people according to time of day?',
      'Which cities should I visit on my first trip?'
    ]
  };
}
