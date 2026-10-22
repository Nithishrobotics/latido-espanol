import React, { useState, useMemo, useRef } from 'react';
import {
  Sparkles,
  Search,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Music,
  Heart,
  BookOpen,
  MapPin,
  ExternalLink,
  ChevronRight,
  Headphones,
  Sliders,
  X,
  Disc3
} from 'lucide-react';
import { useSoundtrack } from '../../context/SoundtrackContext';
import {
  SOUND_TRACKS,
  SPANISH_INSTRUMENTS,
  MUSICAL_TERMS,
  SoundTrack
} from '../../data/soundsOfSpainData';

export const SoundsOfSpainSection: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    playTrack,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    setVolume,
    audioVisualizerLevels
  } = useSoundtrack();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [selectedLyricTrack, setSelectedLyricTrack] = useState<SoundTrack>(
    SOUND_TRACKS.find((t) => t.lyrics && t.lyrics.length > 0) || SOUND_TRACKS[0]
  );
  const [activeTab, setActiveTab] = useState<'tracks' | 'lyrics' | 'instruments' | 'vocabulary'>('tracks');

  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isHoveringScrubber, setIsHoveringScrubber] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);

  const categories = [
    { id: 'todas', label: 'Todas las obras y canciones' },
    { id: 'flamenco', label: 'Guitarra Clásica & Flamenco' },
    { id: 'cancion', label: 'Canción Popular & Rumba' },
    { id: 'folk', label: 'Folk Regional & Romancero' },
    { id: 'ambiente', label: 'Sonidos de España & Tablao' }
  ];

  const filteredTracks = useMemo(() => {
    return SOUND_TRACKS.filter((track) => {
      const matchesCategory = selectedCategory === 'todas' || track.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        track.title.toLowerCase().includes(q) ||
        track.spanishTitle.toLowerCase().includes(q) ||
        track.composer.toLowerCase().includes(q) ||
        track.region.toLowerCase().includes(q) ||
        track.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const formatTime = (secs: number): string => {
    const totalSecs = Math.max(0, Math.floor(secs));
    const m = Math.floor(totalSecs / 60);
    const s = Math.floor(totalSecs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // YouTube / Spotify Click-to-Seek & Drag Handler
  const handleSeekAtClientX = (clientX: number) => {
    if (!progressBarRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    seek(ratio * duration);
  };

  const handleScrubberMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleSeekAtClientX(e.clientX);
  };

  const handleScrubberMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverTime(ratio * duration);
    if (e.buttons === 1) {
      seek(ratio * duration);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || duration <= 0 || !e.touches[0]) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.touches[0].clientX - rect.left) / rect.width));
    setHoverTime(ratio * duration);
    seek(ratio * duration);
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* 1. EDITORIAL HEADER (Identical to CultureSection & DestinationsSection) */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#52634D]">
          <span className="inline-flex items-center gap-2 font-mono">
            <Sparkles className="h-4 w-4 text-[#A51E2D]" aria-hidden="true" />
            CAPÍTULO V · SONIDOS DE ESPAÑA
          </span>
          <span aria-hidden="true">·</span>
          <span>LA GUITARRA, EL FLAMENCO Y EL CANTO REGIONAL</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#222522] leading-[1.08] tracking-tight">
            El alma sonora de España
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-[#222522]/85 leading-relaxed">
            Canciones reales de España: Sevillanas, Fandangos, Anda Jaleo de Lorca, la Jota aragonesa y obras maestras de la guitarra clásica. Haz clic en cualquier canción para escuchar su grabación real en MP3 con letras bilingües explicadas.
          </p>
        </div>
      </header>

      {/* 2. REFINED EDITORIAL PLAYER CARD (Clean, Professional, Non-Cluttered) */}
      <section
        aria-label="Reproductor principal de música española"
        className="rounded-3xl border border-[#222522]/10 bg-white p-6 sm:p-8 shadow-sm transition-all"
      >
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center lg:items-stretch">
          {/* Track Album Artwork (Natural Editorial Photography) */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shrink-0 shadow-md border border-black/5 bg-[#F4EFE6]">
            <img
              src={currentTrack.imageUrl}
              alt={currentTrack.title}
              className="w-full h-full object-cover pop-aesthetic-filter"
            />
            {currentTrack.audioUrl && (
              <span className="absolute top-2.5 left-2.5 bg-[#A51E2D] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-sm">
                AUDIO REAL
              </span>
            )}
          </div>

          {/* Track Details & YouTube/Spotify Interactive Scrubber */}
          <div className="flex-1 flex flex-col justify-between w-full space-y-4">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-[#52634D] uppercase tracking-wider bg-[#52634D]/10 px-2.5 py-1 rounded-md">
                  {currentTrack.region} · {currentTrack.categoryLabel}
                </span>

                {/* Subtle Equalizer Indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-xs font-mono text-gray-600">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
                  <span>{isPlaying ? 'Sonando' : 'En pausa'}</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#222522] mt-2 leading-tight">
                «{currentTrack.spanishTitle}»
              </h2>

              <p className="text-sm font-semibold text-[#A51E2D] mt-1">
                {currentTrack.composer}
              </p>

              <p className="text-xs sm:text-sm text-[#222522]/75 mt-2 leading-relaxed max-w-2xl font-sans">
                {currentTrack.description}
              </p>
            </div>

            {/* INTERACTIVE TIMELINE SCRUBBER (Click anywhere or drag to seek like YouTube) */}
            <div className="space-y-1.5 pt-2">
              <div
                ref={progressBarRef}
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
                className="relative w-full h-2.5 bg-gray-200 rounded-full cursor-pointer group py-1"
                title="Haz clic o arrastra para mover el segundo de la canción (igual que en YouTube y Spotify)"
              >
                {/* Background bar */}
                <div className="absolute inset-0 bg-gray-200 rounded-full" />

                {/* Filled Progress Bar */}
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="absolute left-0 top-0 bottom-0 bg-[#A51E2D] rounded-full transition-all duration-75 relative"
                >
                  {/* Scrubber Knob */}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-md border-2 border-[#A51E2D] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Hover timestamp tooltip */}
                {isHoveringScrubber && hoverTime !== null && (
                  <div
                    style={{ left: `${(hoverTime / duration) * 100}%` }}
                    className="absolute -top-7 -translate-x-1/2 bg-[#222522] text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow pointer-events-none z-20"
                  >
                    {formatTime(hoverTime)}
                  </div>
                )}
              </div>

              {/* Time display */}
              <div className="flex items-center justify-between text-xs font-mono text-gray-500 font-semibold">
                <span className="text-[#A51E2D] font-bold">{formatTime(currentTime)}</span>
                <span>{currentTrack.duration}</span>
              </div>
            </div>

            {/* Playback Controls (Clean, uncluttered) */}
            <div className="flex items-center justify-between pt-1 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTrack}
                  aria-label="Pista anterior"
                  className="p-2 text-gray-500 hover:text-[#222522] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A51E2D] hover:bg-[#861A27] text-white font-bold text-sm shadow-sm hover:shadow transition-all hover:scale-102 active:scale-98 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>Reproducir</span>
                    </>
                  )}
                </button>

                <button
                  onClick={nextTrack}
                  aria-label="Siguiente pista"
                  className="p-2 text-gray-500 hover:text-[#222522] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVolume(volume === 0 ? 0.75 : 0)}
                  aria-label="Silenciar o activar sonido"
                  className="text-gray-500 hover:text-[#222522] cursor-pointer"
                >
                  {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  aria-label="Control de volumen"
                  className="w-20 sm:w-24 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#A51E2D]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION TABS (Clean underline design matching the site) */}
      <div className="flex border-b border-gray-200 gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('tracks')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
            activeTab === 'tracks'
              ? 'border-[#A51E2D] text-[#A51E2D]'
              : 'border-transparent text-[#222522]/60 hover:text-[#222522]'
          }`}
        >
          <span>Catálogo de Obras y Sonidos</span>
        </button>

        <button
          onClick={() => setActiveTab('lyrics')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
            activeTab === 'lyrics'
              ? 'border-[#A51E2D] text-[#A51E2D]'
              : 'border-transparent text-[#222522]/60 hover:text-[#222522]'
          }`}
        >
          <span>Letras Bilingües y Poesía</span>
        </button>

        <button
          onClick={() => setActiveTab('instruments')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
            activeTab === 'instruments'
              ? 'border-[#A51E2D] text-[#A51E2D]'
              : 'border-transparent text-[#222522]/60 hover:text-[#222522]'
          }`}
        >
          <span>Instrumentos Típicos</span>
        </button>

        <button
          onClick={() => setActiveTab('vocabulary')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
            activeTab === 'vocabulary'
              ? 'border-[#A51E2D] text-[#A51E2D]'
              : 'border-transparent text-[#222522]/60 hover:text-[#222522]'
          }`}
        >
          <span>Vocabulario Musical</span>
        </button>
      </div>

      {/* TAB 1: TRACK CATALOG */}
      {activeTab === 'tracks' && (
        <div className="space-y-6">
          {/* Search & Category Filter Pills (Identical to Destinations / Festivals) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-[#222522]/10">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#A51E2D] text-white shadow-xs'
                        : 'bg-gray-100 hover:bg-gray-200 text-[#222522]/80'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar obra, compositor o estilo…"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-8 py-2 text-xs text-[#222522] focus:outline-none focus:border-[#A51E2D] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Borrar búsqueda"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Clean Editorial Track Table (Spotify style without clutter) */}
          <div className="bg-white rounded-2xl border border-[#222522]/10 overflow-hidden shadow-xs divide-y divide-gray-100">
            {filteredTracks.map((track, idx) => {
              const isSelected = currentTrack.id === track.id;
              const isThisPlaying = isSelected && isPlaying;

              return (
                <div
                  key={track.id}
                  onClick={() => playTrack(track, 0)}
                  className={`group flex items-center justify-between p-3.5 sm:p-4 hover:bg-gray-50/80 transition-colors cursor-pointer ${
                    isSelected ? 'bg-[#A51E2D]/5 font-semibold' : ''
                  }`}
                >
                  {/* Left: Index / Play Icon + Cover + Title */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="w-6 text-center text-xs font-mono text-gray-400 group-hover:text-[#A51E2D] font-bold shrink-0">
                      {isThisPlaying ? (
                        <Pause className="w-4 h-4 text-[#A51E2D] fill-current mx-auto" />
                      ) : (
                        <span className="group-hover:hidden">{idx + 1}</span>
                      )}
                      {!isThisPlaying && (
                        <Play className="w-4 h-4 text-[#A51E2D] fill-current mx-auto hidden group-hover:inline" />
                      )}
                    </span>

                    <img
                      src={track.imageUrl}
                      alt={track.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shrink-0 shadow-xs pop-aesthetic-filter"
                    />

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-serif text-sm sm:text-base leading-tight truncate ${isSelected ? 'text-[#A51E2D] font-bold' : 'text-[#222522]'}`}>
                          {track.spanishTitle}
                        </h3>
                        {track.audioUrl && (
                          <span className="hidden sm:inline-block text-[9px] font-mono uppercase bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded shrink-0">
                            MP3
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-0.5 font-sans">
                        {track.composer} · <span className="text-[#52634D] font-medium">{track.region}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right: Duration + Lyrics Button */}
                  <div className="flex items-center gap-4 shrink-0 pl-3">
                    {track.lyrics && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLyricTrack(track);
                          setActiveTab('lyrics');
                        }}
                        className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#A51E2D] transition-colors font-sans"
                        title="Ver letra en español y traducción"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Letra</span>
                      </button>
                    )}

                    <span className="text-xs font-mono text-gray-500 font-medium">
                      {track.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: BILINGUAL LYRICS */}
      {activeTab === 'lyrics' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-[#222522]/10">
            <div>
              <span className="text-xs font-mono text-[#A51E2D] font-bold uppercase tracking-wider">
                Obra seleccionada
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-black text-[#222522] mt-0.5">
                «{selectedLyricTrack.spanishTitle}»
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Pasa el cursor o pulsa cualquier palabra en español para ver su traducción instantánea.
              </p>
            </div>

            <button
              onClick={() => playTrack(selectedLyricTrack, 0)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A51E2D] hover:bg-[#861A27] text-white text-xs font-bold transition-all shadow-sm cursor-pointer shrink-0"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Escuchar esta canción</span>
            </button>
          </div>

          <div className="space-y-3">
            {selectedLyricTrack.lyrics && selectedLyricTrack.lyrics.length > 0 ? (
              selectedLyricTrack.lyrics.map((verse, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#222522]/10 hover:border-[#E2B342] transition-colors space-y-1.5"
                >
                  <p className="font-serif text-base sm:text-lg font-bold text-[#222522] leading-snug">
                    {verse.spanish}
                  </p>
                  <p className="text-xs sm:text-sm text-[#52634D] italic font-sans">
                    "{verse.translation}"
                  </p>
                  {verse.explanation && (
                    <p className="text-xs text-gray-500 pt-1 border-t border-gray-100 font-sans">
                      <span className="font-bold text-[#A51E2D]">Nota cultural: </span>
                      {verse.explanation}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 p-6 bg-white rounded-2xl border border-gray-200 text-center">
                Esta obra es instrumental. Selecciona *Romanza Española*, *Sevillanas de la Feria*, *Anda Jaleo* o *Eres Alta y Delgada* para ver letras bilingües y notas culturales.
              </p>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: SPANISH INSTRUMENTS */}
      {activeTab === 'instruments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPANISH_INSTRUMENTS.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-3xl border border-[#222522]/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <img
                  src={inst.imageUrl}
                  alt={inst.imageAlt}
                  className="w-full h-48 object-cover pop-aesthetic-filter"
                />
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#A51E2D] font-bold uppercase tracking-wider">
                      {inst.category}
                    </span>
                    <span className="font-mono text-gray-500">{inst.region}</span>
                  </div>

                  <h3 className="font-serif text-xl font-black text-[#222522]">
                    {inst.spanishName}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#222522]/80 leading-relaxed font-sans">
                    {inst.description}
                  </p>

                  <div className="pt-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="font-bold text-[#855D10]">Historia y Tradición: </span>
                    {inst.culturalHeritage}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs text-gray-500 border-t border-gray-100 pt-3 flex items-center justify-between">
                <span>Maestros célebres:</span>
                <span className="font-serif font-bold text-[#A51E2D]">
                  {inst.famousPlayers.join(', ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: MUSICAL VOCABULARY */}
      {activeTab === 'vocabulary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MUSICAL_TERMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#222522]/10 shadow-xs hover:border-[#E2B342] transition-colors space-y-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-gray-100 pb-2">
                  <h3 className="font-serif text-xl font-black text-[#A51E2D]">
                    {item.term}
                  </h3>
                  <span className="text-xs font-mono text-gray-400">/{item.pronunciation}/</span>
                </div>
                <p className="text-xs font-bold text-[#855D10] mt-2 font-sans">
                  → {item.translation}
                </p>
                <p className="text-xs text-[#222522]/80 mt-1 leading-relaxed font-sans">
                  {item.meaning}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 italic font-serif">
                {item.example}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
