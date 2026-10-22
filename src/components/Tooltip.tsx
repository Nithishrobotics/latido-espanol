import React, { useState } from 'react';

export interface TooltipProps {
  spanishPrompt?: string; // Fun, conversational, engaging Spanish prompt
  content: string;        // Clear English explanation of what it does
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  spanishPrompt,
  content,
  children,
  position = 'top',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-[70] pointer-events-none transition-all duration-200 animate-in fade-in zoom-in-95 ${
            position === 'top'
              ? 'bottom-full mb-2 left-1/2 -translate-x-1/2'
              : position === 'bottom'
              ? 'top-full mt-2 left-1/2 -translate-x-1/2'
              : position === 'left'
              ? 'right-full mr-2 top-1/2 -translate-y-1/2'
              : 'left-full ml-2 top-1/2 -translate-y-1/2'
          }`}
        >
          <div className="bg-[#222522] text-[#FBF8F1] rounded-xl shadow-xl px-4 py-3 border border-white/10 ring-1 ring-[#E2B342]/25 w-max max-w-[min(20rem,calc(100vw-2rem))] min-w-[12rem] text-left backdrop-blur-md">
            {spanishPrompt && (
              <div className="text-sm font-serif italic text-[#E2B342] font-semibold pb-1.5 border-b border-white/15 mb-2 leading-snug">
                {spanishPrompt}
              </div>
            )}
            <div className="text-sm font-sans font-medium text-[#FBF8F1]/90 leading-snug">
              {content}
            </div>

            {/* Tooltip Arrow */}
            <div
              className={`absolute w-0 h-0 border-4 border-transparent ${
                position === 'top'
                  ? 'top-full left-1/2 -translate-x-1/2 border-t-[#222522]'
                  : position === 'bottom'
                  ? 'bottom-full left-1/2 -translate-x-1/2 border-b-[#222522]'
                  : position === 'left'
                  ? 'left-full top-1/2 -translate-y-1/2 border-l-[#222522]'
                  : 'right-full top-1/2 -translate-y-1/2 border-r-[#222522]'
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
