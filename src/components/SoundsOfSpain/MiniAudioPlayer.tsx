import React, { useRef, useState } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  X,
  Music,
  ExternalLink
} from 'lucide-react';
import { useSoundtrack } from '../../context/SoundtrackContext';

interface MiniAudioPlayerProps {
  onOpenSection?: () => void;
}

export const MiniAudioPlayer: React.FC<MiniAudioPlayerProps> = ({ onOpenSection }) => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMiniPlayerOpen,
    togglePlay,
    pauseTrack,
    nextTrack,
    prevTrack,
    seek,
    setVolume,
    setIsMiniPlayerOpen
  } = useSoundtrack();

  const scrubberRef = useRef<HTMLDivElement>(null);
  const [isHoveringScrubber, setIsHoveringScrubber] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);

  if (!isMiniPlayerOpen) return null;

  const formatTime = (secs: number): string => {
    const total = Math.max(0, Math.floor(secs));
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Interactive YouTube / Spotify Click-to-Seek & Drag Handler
  const handleSeekAtClientX = (clientX: number) => {
    if (!scrubberRef.current || duration <= 0) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    seek(ratio * duration);
  };

  const handleScrubberMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleSeekAtClientX(e.clientX);
  };

  const handleScrubberMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrubberRef.current || duration <= 0) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverTime(ratio * duration);
    if (e.buttons === 1) {
      seek(ratio * duration);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrubberRef.current || duration <= 0 || !e.touches[0]) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.touches[0].clientX - rect.left) / rect.width));
    setHoverTime(ratio * duration);
    seek(ratio * duration);
  };

  return (
    <aside
      id="spotify-bottom-player-bar"
      aria-label="Reproductor de música inferior de estilo Spotify"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#121110]/95 backdrop-blur-md border-t border-white/10 text-[#FBF8F1] shadow-2xl h-18 sm:h-20 select-none transition-transform"
    >
      <div className="max-w-7xl mx-auto h-full px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Artwork, Title, and Region */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[110px] xs:max-w-[140px] sm:max-w-[240px] md:max-w-[280px] shrink-0">
          <img
            src={currentTrack.imageUrl}
            alt={currentTrack.title}
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-cover shrink-0 shadow-md pop-aesthetic-filter border border-white/10"
          />

          <div className="min-w-0">
            <h4 className="font-serif font-black text-[11px] sm:text-sm text-[#FBF8F1] truncate leading-tight">
              «{currentTrack.spanishTitle}»
            </h4>
            <p className="text-[10px] sm:text-[11px] text-[#FFE082] truncate font-sans font-medium mt-0.5">
              {currentTrack.composer} · <span className="text-white/60">{currentTrack.region}</span>
            </p>
          </div>
        </div>

        {/* Center: Playback Controls & Interactive YouTube/Spotify Scrubber */}
        <div className="flex-1 min-w-0 max-w-xl flex flex-col items-center justify-center space-y-0.5 sm:space-y-1">
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTrack}
              aria-label="Pista anterior"
              className="text-white/70 hover:text-white transition-colors cursor-pointer p-1"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
              className="w-9 h-9 rounded-full bg-[#A51E2D] hover:bg-[#861A27] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={nextTrack}
              aria-label="Siguiente pista"
              className="text-white/70 hover:text-white transition-colors cursor-pointer p-1"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Click-to-Seek Scrubber Line (like YouTube / Spotify) */}
          <div className="w-full flex items-center gap-2.5 text-[10px] font-mono text-white/60">
            <span className="w-8 text-right font-bold text-[#FFE082]">
              {formatTime(currentTime)}
            </span>

            <div
              ref={scrubberRef}
              onClick={handleScrubberMouseDown}
              onMouseDown={handleScrubberMouseDown}
              onMouseMove={handleScrubberMouseMove}
              onTouchStart={handleTouchMove}
              onTouchMove={handleTouchMove}
              onMouseEnter={() => setIsHoveringScrubber(true)}
              onMouseLeave={() => {
                setIsHoveringScrubber(false);
                setHoverTime(null);
              }}
              className="relative flex-1 h-2 bg-white/20 rounded-full cursor-pointer group py-1"
              title="Haz clic o arrastra en cualquier punto de la línea para saltar a ese segundo (igual que en YouTube)"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full" />
              <div
                style={{ width: `${progressPercent}%` }}
                className="absolute left-0 top-0 bottom-0 bg-[#E2B342] group-hover:bg-[#FFE082] rounded-full transition-all duration-75 relative"
              >
                {/* Scrubbing thumb on hover */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md border-2 border-[#A51E2D] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Timestamp on hover */}
              {isHoveringScrubber && hoverTime !== null && (
                <div
                  style={{ left: `${(hoverTime / duration) * 100}%` }}
                  className="absolute -top-6 -translate-x-1/2 bg-[#1C201D] text-white text-[9px] font-mono font-bold px-1 py-0.2 rounded border border-white/20 shadow pointer-events-none"
                >
                  {formatTime(hoverTime)}
                </div>
              )}
            </div>

            <span className="w-8 text-left">
              {currentTrack.duration}
            </span>
          </div>
        </div>

        {/* Right: Volume & Section Link */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-xl">
            <button
              onClick={() => setVolume(volume === 0 ? 0.8 : 0)}
              aria-label="Silenciar o activar"
              className="text-white/70 hover:text-white cursor-pointer"
            >
              {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              aria-label="Volumen"
              className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E2B342]"
            />
          </div>

          {/* Jump to Sonidos page */}
          {onOpenSection && (
            <button
              onClick={onOpenSection}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFE082] text-xs font-bold font-sans transition-colors cursor-pointer"
            >
              <Music className="w-3.5 h-3.5" />
              <span>Ver catálogo</span>
            </button>
          )}

          {/* Close button */}
          <button
            onClick={() => {
              pauseTrack();
              setIsMiniPlayerOpen(false);
            }}
            title="Cerrar reproductor"
            className="p-1.5 text-white/50 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
