import React, { useRef } from 'react';
import { Volume2, Bookmark, BookmarkCheck, MessageSquare, Sparkles, X, Languages } from 'lucide-react';
import { useHoverInspector } from './HoverInspectorContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../services/languageAssistantService';

export const HoverMeaningTooltip: React.FC = () => {
  const {
    isHoverEnabled,
    hoveredData,
    tooltipPos,
    targetLanguage,
    setTargetLanguage,
    saveWord,
    removeSavedWord,
    isWordSaved,
    askAboutText,
    speakSpanish,
    isAudioPlaying,
    closeTooltip
  } = useHoverInspector();

  const tooltipRef = useRef<HTMLDivElement>(null);

  if (!isHoverEnabled || !hoveredData || !tooltipPos) {
    return null;
  }

  const isSaved = isWordSaved(hoveredData.sourceText);
  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.id === targetLanguage) || SUPPORTED_LANGUAGES[0];

  const handleToggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSaved) {
      removeSavedWord(hoveredData.sourceText);
    } else {
      saveWord(hoveredData);
    }
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakSpanish(hoveredData.sourceText);
  };

  const handleAskInChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    askAboutText(hoveredData.sourceText);
    closeTooltip();
  };

  const handleSelectLanguage = (e: React.MouseEvent, langId: SupportedLanguage) => {
    e.stopPropagation();
    setTargetLanguage(langId);
  };

  return (
    <div
      id="lan-hover-tooltip-root"
      ref={tooltipRef}
      role="tooltip"
      aria-live="polite"
      className="fixed z-50 pointer-events-auto transition-all duration-150 animate-in fade-in zoom-in-95"
      style={{
        top: `${tooltipPos.top}px`,
        left: `${tooltipPos.left}px`,
        width: '360px',
        maxWidth: 'calc(100vw - 2rem)',
      }}
      onMouseEnter={() => {
        // Keeps tooltip open while hovered
      }}
      onMouseLeave={() => {
        closeTooltip();
      }}
    >
      <div className="bg-[#1C201D] text-[#FBF8F1] rounded-2xl shadow-2xl p-4 border-2 border-[#E2B342]/60 backdrop-blur-xl ring-2 ring-black/50">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2B342] animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[#E2B342] font-bold text-[11px]">
              {hoveredData.category || 'Español'}
            </span>
            {hoveredData.isAiGenerated && (
              <span className="flex items-center gap-0.5 text-[9px] bg-white/15 text-white/90 px-1.5 py-0.5 rounded-full font-mono">
                <Sparkles className="w-2.5 h-2.5 text-[#E2B342]" />
                Gemini
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleSpeak}
              title="Escuchar pronunciación nativa (Audio)"
              aria-label="Escuchar pronunciación"
              className={`p-1.5 rounded-lg transition-colors ${
                isAudioPlaying
                  ? 'bg-[#A51E2D] text-white animate-pulse'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Volume2 className="w-4 h-4 text-[#E2B342]" />
            </button>

            <button
              onClick={handleToggleSave}
              title={isSaved ? 'Guardado en Cuaderno' : 'Guardar palabra'}
              aria-label={isSaved ? 'Guardado' : 'Guardar palabra'}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-[#E2B342]" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={closeTooltip}
              aria-label="Cerrar"
              className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Spanish Source Word / Phrase */}
        <div className="mb-2.5">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-serif font-black text-white tracking-wide leading-tight line-clamp-2">
              «{hoveredData.sourceText}»
            </h4>
          </div>
          {hoveredData.pronunciation && (
            <p className="text-[11px] font-mono text-[#E2B342]/90 mt-0.5">
              🗣️ /{hoveredData.pronunciation}/
            </p>
          )}
        </div>

        {/* MULTI-LANGUAGE SELECTOR PILLS */}
        <div className="mb-2 pt-1 border-t border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/60 flex items-center gap-1">
              <Languages className="w-3 h-3 text-[#E2B342]" />
              <span>Traducir a:</span>
            </span>
            <span className="text-[10px] font-bold text-[#E2B342]">
              {currentLangObj.flag} {currentLangObj.name}
            </span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = targetLanguage === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={(e) => handleSelectLanguage(e, lang.id)}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#E2B342] text-[#222522] shadow-sm font-extrabold ring-1 ring-white/50'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* HIGH-VISIBILITY TRANSLATION & MEANING BOX */}
        <div className="bg-[#262C27] rounded-xl p-3 mb-2.5 border border-[#E2B342]/40 shadow-inner">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#E2B342] mb-1 font-bold">
            <span>Significado / Translation</span>
            <span>{currentLangObj.flag} {currentLangObj.id.toUpperCase()}</span>
          </div>
          <p className="text-base sm:text-lg font-black text-[#FFE082] leading-snug drop-shadow-sm font-sans mb-1">
            {hoveredData.translation}
          </p>
          <p className="text-xs text-white/90 leading-relaxed font-sans line-clamp-3">
            {hoveredData.meaning}
          </p>
        </div>

        {/* Cultural / Context Note */}
        {hoveredData.culturalNote && (
          <div className="text-[10px] text-white/75 italic leading-snug mb-3 border-l-2 border-[#E2B342] pl-2 line-clamp-2 bg-white/5 py-1 pr-1 rounded-r">
            💡 {hoveredData.culturalNote}
          </div>
        )}

        {/* Footer Quick Action */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAskInChat}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold bg-[#A51E2D] hover:bg-[#851622] text-[#FBF8F1] py-2 px-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Preguntar a Lan Bot</span>
          </button>
        </div>
      </div>
    </div>
  );
};
