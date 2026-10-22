import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface AudioPronounceButtonProps {
  phrase: string;
  size?: 'sm' | 'md';
  label?: string;
  spanishPrompt?: string;
}

export const AudioPronounceButton: React.FC<AudioPronounceButtonProps> = ({
  phrase,
  size = 'sm',
  label,
  spanishPrompt = '«¡Escucha y repite! 🗣️»'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const cleanPhrase = phrase.replace(/[«»"]/g, '').trim();

  const handlePronounce = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanPhrase);
    utterance.lang = 'es-ES';
    utterance.rate = 0.85; // Slightly slower for language learners

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Tooltip
      spanishPrompt={spanishPrompt}
      content="Hear native European Spanish pronunciation"
    >
      <button
        onClick={handlePronounce}
        aria-label={`Escuchar pronunciación de: ${cleanPhrase}`}
        className={`inline-flex items-center gap-1.5 font-sans font-semibold rounded-lg transition-all ${
          isPlaying
            ? 'text-[#A51E2D] bg-[#A51E2D]/20 font-bold'
            : 'text-[#A51E2D] bg-[#A51E2D]/10 hover:bg-[#A51E2D] hover:text-[#FBF8F1]'
        } ${size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-xs'}`}
      >
        <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce text-[#A51E2D]' : ''}`} />
        {label && <span>{label}</span>}
      </button>
    </Tooltip>
  );
};
