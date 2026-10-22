import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Sparkles,
  Volume2,
  X,
  Send,
  RotateCcw,
  Bookmark,
  BookmarkCheck,
  Languages,
  ChevronDown,
  ChevronUp,
  Trash2,
  Power
} from 'lucide-react';
import { useHoverInspector } from './HoverInspectorContext';
import { useSoundtrack } from '../../context/SoundtrackContext';
import { sendChatMessage, ChatMessage, SUPPORTED_LANGUAGES, SupportedLanguage } from '../../services/languageAssistantService';

export const LanChatbot: React.FC = () => {
  const {
    isHoverEnabled,
    setIsHoverEnabled,
    targetLanguage,
    setTargetLanguage,
    pinnedExplanation,
    setPinnedExplanation,
    savedWords,
    saveWord,
    removeSavedWord,
    isWordSaved,
    activeChatQuery,
    setActiveChatQuery,
    isChatbotOpen,
    setIsChatbotOpen,
    speakSpanish,
    isAudioPlaying,
    isActivelyHovering,
    isDockMinimized,
    setIsDockMinimized,
    isTouchDevice
  } = useHoverInspector();

  const [isHoveringDock, setIsHoveringDock] = useState(false);
  let isMiniPlayerOpen = false;
  try {
    const soundtrack = useSoundtrack();
    isMiniPlayerOpen = soundtrack.isMiniPlayerOpen;
  } catch {}
  const [activeTab, setActiveTab] = useState<'chat' | 'saved'>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `¡Hola! 👋 I'm **Lola**, your personal Spanish language tutor and travel companion for *Rumbo España*.\n\n✨ **Live Text Translator:** Hover on PC or tap on mobile any Spanish text on the website to see its translation right above!\n\nYou can **type to me in your own language** (English, French, Hindi, German, etc.) and I will explain Spanish vocabulary, food & tapas, train travel, grammar, and local customs. How can I help you today?`,
      timestamp: Date.now(),
      suggestedFollowUps: [
        'How do I order tapas and a caña like a local?',
        'What does «sobremesa» mean in Spain?',
        'Explain the difference between «por» and «para»'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.id === targetLanguage) || SUPPORTED_LANGUAGES[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab === 'chat') {
      scrollToBottom();
    }
  }, [messages, activeTab]);

  useEffect(() => {
    if (activeChatQuery) {
      handleSendMessage(activeChatQuery);
      setActiveChatQuery(null);
      setActiveTab('chat');
    }
  }, [activeChatQuery]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const chatHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const response = await sendChatMessage(
        chatHistory,
        pinnedExplanation?.sourceText,
        targetLanguage
      );

      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.reply,
        timestamp: Date.now(),
        suggestedFollowUps: response.followUps
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, there was a brief connection hiccup. Please try asking again or check your saved vocabulary tab.',
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: 'Chat refreshed! What new Spanish phrase, food tradition, or grammar topic would you like to explore?',
        timestamp: Date.now(),
        suggestedFollowUps: [
          'How do Spaniards greet according to time of day?',
          'Essential phrases for metro & trains',
          'Explain the tradition of tapeo'
        ]
      }
    ]);
  };

  const isSaved = pinnedExplanation ? isWordSaved(pinnedExplanation.sourceText) : false;

  // Upper box stays open WHILE cursor is placed on text OR over the dock.
  // As soon as the cursor leaves the text (and dock), it closes/collapses!
  // On mobile: Stays open when tapped, until minimized or closed.
  const isExpanded = isTouchDevice
    ? (!isDockMinimized && pinnedExplanation !== null)
    : ((isActivelyHovering || isHoveringDock) && !isDockMinimized && pinnedExplanation !== null);

  const shouldShowCompact = isHoverEnabled && pinnedExplanation !== null && !isExpanded;

  return (
    <div
      id="lan-chatbot-root"
      onMouseEnter={() => setIsHoveringDock(true)}
      onMouseLeave={() => setIsHoveringDock(false)}
      className={`fixed ${isMiniPlayerOpen ? 'bottom-20 sm:bottom-24' : 'bottom-3 sm:bottom-5'} right-3 sm:right-5 z-40 select-none max-w-[calc(100vw-1.5rem)] transition-all duration-300`}
    >
      {/* 1. UPPER BOX: DEDICATED SOLELY FOR DISPLAYING TEXT & TRANSLATION */}
      {!isChatbotOpen && (
        <div className="flex flex-col items-end gap-2 w-full">
          {/* A. If Translator is toggled OFF: Show sleek reactivation badge */}
          {!isHoverEnabled ? (
            <button
              onClick={() => setIsHoverEnabled(true)}
              className="cursor-pointer group flex items-center gap-2 bg-[#1C201D]/95 hover:bg-[#1C201D] text-white px-3.5 py-1.5 rounded-full shadow-lg border border-red-500/60 text-xs backdrop-blur-md transition-all hover:scale-105"
              title="Click to turn text translator back ON"
            >
              <Power className="w-3.5 h-3.5 text-red-400 group-hover:text-red-300" />
              <span className="text-[11px] font-sans text-white/90">
                Traductor: <b className="text-red-400">OFF</b> · Click to Turn ON
              </span>
            </button>
          ) : pinnedExplanation ? (
            <div className="w-full flex flex-col items-end">
              {/* COMPACT / SMALL MODE (When not hovering or when minimized) */}
              {shouldShowCompact ? (
                <div
                  onClick={() => setIsDockMinimized(false)}
                  className="cursor-pointer group flex items-center gap-2 bg-[#1C201D]/95 text-white px-3 py-2 rounded-full shadow-xl border border-[#E2B342]/60 text-xs backdrop-blur-md hover:bg-[#1C201D] transition-all max-w-[340px] sm:max-w-[400px] animate-in fade-in"
                  title="Click to expand text details"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E2B342] animate-pulse shrink-0" />
                  <div className="truncate flex items-baseline gap-1.5 text-xs">
                    <span className="font-serif font-black text-[#FBF8F1] truncate">
                      «{pinnedExplanation.sourceText}»
                    </span>
                    <span className="text-[#FFE082] font-bold truncate">
                      → {pinnedExplanation.translation}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakSpanish(pinnedExplanation.sourceText);
                    }}
                    title="Hear Spanish pronunciation"
                    className="p-1 rounded-full hover:bg-white/10 text-[#E2B342] shrink-0 cursor-pointer"
                  >
                    <Volume2 className="w-3 h-3" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsHoverEnabled(false);
                    }}
                    title="Turn off translator"
                    className="p-1 text-white/60 hover:text-red-400 hover:bg-white/10 rounded-full shrink-0 cursor-pointer"
                  >
                    <Power className="w-3 h-3" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDockMinimized(false);
                    }}
                    title="Expand full view"
                    className="p-1 text-white/60 hover:text-white shrink-0 cursor-pointer"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPinnedExplanation(null);
                    }}
                    title="Dismiss"
                    className="p-1 text-white/50 hover:text-white shrink-0 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                /* EXPANDED TEXT DISPLAY (When hovering over text or expanded) */
                <div className="group flex flex-col bg-[#1C201D]/95 text-white p-3 sm:p-3.5 rounded-2xl shadow-2xl border-2 border-[#E2B342]/70 text-xs backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 w-[340px] sm:w-[400px] max-w-[calc(100vw-1.5rem)]">
                  {/* Row 1: Spanish Text + Audio + Bookmark + Power Off + Minimize */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E2B342] animate-pulse shrink-0" />
                      <span className="font-serif font-black text-sm sm:text-base text-[#FBF8F1] tracking-wide truncate">
                        «{pinnedExplanation.sourceText}»
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(pinnedExplanation.sourceText);
                        }}
                        title="Hear native Spanish pronunciation"
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isAudioPlaying
                            ? 'bg-[#A51E2D] text-white animate-pulse'
                            : 'text-white/80 hover:text-white hover:bg-white/15'
                        }`}
                      >
                        <Volume2 className="w-4 h-4 text-[#E2B342]" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isSaved) removeSavedWord(pinnedExplanation.sourceText);
                          else saveWord(pinnedExplanation);
                        }}
                        title={isSaved ? 'Saved in Notebook' : 'Save word'}
                        className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-4 h-4 text-[#E2B342]" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>

                      {/* Turn Off Translator Toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsHoverEnabled(false);
                        }}
                        title="Turn OFF live translator"
                        className="p-1.5 text-white/60 hover:text-red-400 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                      >
                        <Power className="w-4 h-4 text-red-400/80 hover:text-red-400" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDockMinimized(true);
                        }}
                        title="Minimize box"
                        className="p-1.5 text-white/60 hover:text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPinnedExplanation(null);
                        }}
                        title="Close translation"
                        className="p-1.5 text-white/60 hover:text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Row 2: High-contrast Translation Display */}
                  <div className="py-2.5 flex flex-col gap-0.5">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#E2B342] font-bold">
                      <span>Translation / Meaning</span>
                      <span>{currentLangObj.flag} {currentLangObj.id.toUpperCase()}</span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#FFE082] leading-snug drop-shadow-sm font-sans">
                      {pinnedExplanation.translation}
                    </div>
                    {pinnedExplanation.meaning && pinnedExplanation.meaning !== pinnedExplanation.translation && (
                      <p className="text-[11px] sm:text-xs text-white/80 mt-1 leading-relaxed font-sans line-clamp-2">
                        {pinnedExplanation.meaning}
                      </p>
                    )}
                  </div>

                  {/* Row 3: Multi-language selector chips + Translator Status */}
                  <div className="flex items-center justify-between gap-1 pt-1.5 border-t border-white/10">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                      <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-0.5">
                        <Languages className="w-3 h-3 text-[#E2B342]" />
                        <span>Lang:</span>
                      </span>
                      {SUPPORTED_LANGUAGES.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setTargetLanguage(lang.id);
                          }}
                          className={`px-1.5 py-0.5 rounded text-[9px] font-bold transition-all shrink-0 flex items-center gap-0.5 cursor-pointer ${
                            targetLanguage === lang.id
                              ? 'bg-[#E2B342] text-[#222522] font-black ring-1 ring-white/40'
                              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsHoverEnabled(false);
                      }}
                      title="Turn OFF live translator"
                      className="text-[9px] font-mono text-red-300 hover:text-red-200 bg-red-900/30 hover:bg-red-900/50 px-1.5 py-0.5 rounded border border-red-500/30 shrink-0 cursor-pointer"
                    >
                      Turn OFF
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Empty / Idle State: Gentle hint for Desktop or Mobile */
            <div className="flex items-center gap-2 bg-[#1C201D]/90 text-white px-3.5 py-1.5 rounded-full shadow-lg border border-[#E2B342]/40 text-xs backdrop-blur-md">
              <span className="text-xs">💡</span>
              <span className="text-white/85 font-sans text-[11px]">
                {isTouchDevice ? 'Tap any Spanish text to translate' : 'Hover over any Spanish text to translate'}
              </span>
              <button
                onClick={() => setIsHoverEnabled(false)}
                title="Turn off text translator"
                className="ml-1 p-0.5 text-white/50 hover:text-red-400 rounded transition-colors cursor-pointer"
              >
                <Power className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* 2. LOWER BUTTON: CHAT ASSISTANT (LOLA) */}
          <button
            onClick={() => setIsChatbotOpen(true)}
            aria-label="Open Lola Chat Assistant"
            className="group relative flex items-center gap-2.5 bg-[#A51E2D] hover:bg-[#851622] text-[#FBF8F1] px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20 cursor-pointer"
          >
            <div className="relative">
              <span className="text-xl">💃</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E2B342] rounded-full border-2 border-[#A51E2D]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif font-black text-sm tracking-wide text-white leading-tight">
                Lola
              </span>
              <span className="text-[10px] text-[#FFE082] font-mono leading-tight font-semibold">
                Chat Assistant<span className="hidden sm:inline"> · Ask in any language</span>
              </span>
            </div>

            <div className="ml-1 p-1 bg-white/15 rounded-full group-hover:bg-white/25 transition-colors">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      )}

      {/* 3. EXPANDED CHAT ASSISTANT MODAL (LOLA) */}
      {isChatbotOpen && (
        <div className="flex flex-col w-[350px] sm:w-[420px] max-w-[calc(100vw-1.5rem)] h-[78vh] sm:h-[580px] max-h-[640px] bg-[#FFFFFF] text-[#222522] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-xl animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#1C201D] text-[#FBF8F1] px-4 py-3 border-b border-[#E2B342]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#A51E2D] flex items-center justify-center text-base shadow-inner border border-white/20 shrink-0">
                💃
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-black text-base text-[#FBF8F1] leading-none">
                    Lola
                  </h3>
                  <span className="bg-[#E2B342]/20 text-[#FFE082] text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full border border-[#E2B342]/40">
                    Gemini AI
                  </span>
                </div>
                <p className="text-[10px] text-white/70 font-sans mt-0.5">
                  Ask in your language · Spanish Tutor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Translator Power Toggle */}
              <button
                onClick={() => setIsHoverEnabled(!isHoverEnabled)}
                title={isHoverEnabled ? 'Live translator is ON - Click to turn OFF' : 'Live translator is OFF - Click to turn ON'}
                className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  isHoverEnabled
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-400/40 hover:bg-red-500/30'
                }`}
              >
                <Power className="w-2.5 h-2.5" />
                <span>{isHoverEnabled ? 'Translator: ON' : 'Translator: OFF'}</span>
              </button>

              <div className="flex items-center gap-0.5 bg-white/10 px-2 py-1 rounded-lg">
                <span className="text-xs">{currentLangObj.flag}</span>
                <span className="text-[10px] font-bold text-[#FFE082]">{currentLangObj.id.toUpperCase()}</span>
              </div>

              <button
                onClick={() => setIsChatbotOpen(false)}
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Close Lola"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* If text was inspected, display it in a clean banner */}
          {pinnedExplanation && (
            <div className="bg-[#242A25] text-white px-3.5 py-2 border-b border-[#E2B342]/30 flex items-center justify-between text-xs">
              <div className="truncate mr-2">
                <span className="font-serif font-bold text-[#FFE082]">«{pinnedExplanation.sourceText}»</span>
                <span className="text-white/80 ml-1.5">({pinnedExplanation.translation})</span>
              </div>
              <button
                onClick={() => speakSpanish(pinnedExplanation.sourceText)}
                title="Hear pronunciation"
                className="p-1 text-[#E2B342] hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50/80 px-2 pt-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-2 px-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'chat'
                  ? 'border-[#A51E2D] text-[#A51E2D] bg-white font-bold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat with Lola</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 py-2 px-3 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'saved'
                  ? 'border-[#A51E2D] text-[#A51E2D] bg-white font-bold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved Words ({savedWords.length})</span>
            </button>
          </div>

          {/* Tab 1: Chat Window */}
          {activeTab === 'chat' && (
            <div className="flex-1 flex flex-col min-h-0 bg-white">
              <div className="flex-1 p-3 sm:p-3.5 overflow-y-auto space-y-3 font-sans text-xs sm:text-sm">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.role === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                        msg.role === 'user'
                          ? 'bg-[#A51E2D] text-white rounded-br-none'
                          : 'bg-[#F4F1EA] text-[#222522] rounded-bl-none border border-black/5'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">
                        {msg.content}
                      </div>

                      {msg.role === 'assistant' && (
                        <div className="mt-2 pt-2 border-t border-black/10 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                          <button
                            onClick={() => speakSpanish(msg.content.replace(/[*#]/g, ''))}
                            className="inline-flex items-center gap-1 text-[#A51E2D] hover:underline font-bold cursor-pointer"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Listen in Spanish</span>
                          </button>
                          <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      )}
                    </div>

                    {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[92%]">
                        {msg.suggestedFollowUps.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(chip)}
                            className="text-[11px] font-sans bg-gray-100 hover:bg-[#E2B342]/20 hover:text-[#222522] text-gray-700 px-2.5 py-1 rounded-full border border-gray-200 transition-colors text-left cursor-pointer"
                          >
                            💡 {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 italic p-2 bg-gray-50 rounded-xl w-max">
                    <span className="w-2 h-2 rounded-full bg-[#A51E2D] animate-ping" />
                    <span>Lola is writing…</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-2.5 sm:p-3 border-t border-gray-200 bg-gray-50/90">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <button
                    type="button"
                    onClick={handleClearChat}
                    title="Refresh conversation"
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type in your language (English, French, etc.)..."
                    className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#A51E2D]/30 focus:border-[#A51E2D] text-[#222522]"
                  />

                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-[#A51E2D] disabled:opacity-40 text-white p-2 rounded-xl hover:bg-[#851622] transition-colors shadow-sm cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Tab 2: Saved Words */}
          {activeTab === 'saved' && (
            <div className="flex-1 flex flex-col min-h-0 bg-white p-3.5 sm:p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#222522]">
                    Your Travel Notebook
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    Saved words from hovering or tapping across the site.
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-[#A51E2D] bg-[#A51E2D]/10 px-2 py-0.5 rounded-full">
                  {savedWords.length} saved
                </span>
              </div>

              {savedWords.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <Bookmark className="w-8 h-8 mb-2 stroke-1" />
                  <p className="text-xs font-semibold">No saved words yet</p>
                  <p className="text-[11px] text-gray-500 mt-1 max-w-[220px]">
                    Hover on PC or tap on mobile any Spanish word and click the bookmark icon 🔖 to save it here.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {savedWords.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100/80 border border-gray-200 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-serif font-black text-sm text-[#222522]">
                              {item.spanish}
                            </span>
                            <span className="text-[10px] font-mono text-[#52634D] bg-[#52634D]/10 px-1.5 py-0.5 rounded">
                              {item.category}
                            </span>
                          </div>
                          {item.pronunciation && (
                            <p className="text-[10px] font-mono text-gray-500 mt-0.5">
                              /{item.pronunciation}/
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => speakSpanish(item.spanish)}
                            title="Hear pronunciation"
                            className="p-1 text-gray-500 hover:text-[#A51E2D] rounded hover:bg-white transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => removeSavedWord(item.spanish)}
                            title="Remove from notebook"
                            className="p-1 text-gray-400 hover:text-red-600 rounded hover:bg-white transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-1.5 pt-1.5 border-t border-gray-200/60 text-xs">
                        <p className="font-bold text-[#A51E2D]">
                          {item.translation}
                        </p>
                        <p className="text-[11px] text-gray-600 mt-0.5">
                          {item.meaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
