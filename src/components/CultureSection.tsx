import React, { useCallback, useMemo, useState } from 'react';
import { ArrowUpDown, CalendarDays, ChevronRight, ExternalLink, MapPin, Search, Sparkles, X } from 'lucide-react';
import { FESTIVAL_COMMUNITIES, SPANISH_FESTIVALS } from '../data/festivalsData';
import { FestivalHeritageModal } from './FestivalHeritageModal';
import { FestivalPhoto } from './FestivalPhoto';

export const CultureSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [communityFilter, setCommunityFilter] = useState('Todas las comunidades');
  const [isSortedAZ, setIsSortedAZ] = useState(false);
  const [selectedFestivalId, setSelectedFestivalId] = useState<string | null>(null);

  const displayedFestivals = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase('es');
    let festivals = SPANISH_FESTIVALS.filter((festival) => {
      const matchesCommunity = communityFilter === 'Todas las comunidades' || festival.community === communityFilter;
      const searchableText = [festival.name, festival.community, festival.place, festival.season, festival.summary]
        .join(' ')
        .toLocaleLowerCase('es');
      return matchesCommunity && (!query || searchableText.includes(query));
    });

    if (isSortedAZ) {
      festivals = [...festivals].sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));
    }

    return festivals;
  }, [communityFilter, isSortedAZ, searchQuery]);

  const selectedFestival = selectedFestivalId
    ? SPANISH_FESTIVALS.find((festival) => festival.id === selectedFestivalId) || null
    : null;

  const handleCloseModal = useCallback(() => setSelectedFestivalId(null), []);

  const selectAdjacentFestival = useCallback((direction: -1 | 1) => {
    setSelectedFestivalId((currentId) => {
      if (!currentId) return currentId;
      const index = SPANISH_FESTIVALS.findIndex((festival) => festival.id === currentId);
      const nextIndex = (index + direction + SPANISH_FESTIVALS.length) % SPANISH_FESTIVALS.length;
      return SPANISH_FESTIVALS[nextIndex].id;
    });
  }, []);

  const handleSelectPrevious = useCallback(() => selectAdjacentFestival(-1), [selectAdjacentFestival]);
  const handleSelectNext = useCallback(() => selectAdjacentFestival(1), [selectAdjacentFestival]);

  return (
    <div className="space-y-10 sm:space-y-14">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#52634D]">
          <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#A51E2D]" aria-hidden="true" />FIESTAS Y TRADICIONES DE ESPAÑA</span>
          <span aria-hidden="true">·</span>
          <span>{FESTIVAL_COMMUNITIES.length} COMUNIDADES AUTÓNOMAS</span>
        </div>
        <div className="max-w-4xl space-y-3">
          <h1 className="font-serif text-4xl font-black leading-[1.08] text-[#222522] sm:text-5xl lg:text-6xl">
            España celebra todo el año
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#222522]/80 sm:text-lg">
            Descubre fiestas de todo el país: su historia, qué sucede y cómo disfrutarlas como visitante. Selecciona una imagen para abrir su guía.
          </p>
          <p className="max-w-3xl text-sm leading-6 text-[#52634D]">
            Esta selección reúne {SPANISH_FESTIVALS.length} celebraciones de las {FESTIVAL_COMMUNITIES.length} comunidades autónomas. España tiene muchas más fiestas locales; consulta el calendario oficial para ampliar la búsqueda. Las fechas pueden variar cada año.
          </p>
        </div>
      </header>

      <section aria-label="Buscar y filtrar fiestas" className="grid gap-3 rounded-2xl border border-[#222522]/10 bg-white/75 p-3 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,18rem)_auto] sm:p-4">
        <label className="relative block">
          <span className="sr-only">Buscar por fiesta, lugar o fecha</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#52634D]" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Buscar fiesta, lugar o mes…"
            className="w-full rounded-xl border border-[#222522]/15 bg-white py-3 pl-10 pr-10 text-sm text-[#222522] outline-none transition placeholder:text-[#222522]/45 focus:border-[#A51E2D] focus:ring-2 focus:ring-[#A51E2D]/15"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Borrar búsqueda"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#52634D] hover:bg-[#222522]/5 hover:text-[#A51E2D]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </label>

        <label>
          <span className="sr-only">Filtrar por comunidad autónoma</span>
          <select
            value={communityFilter}
            onChange={(event) => setCommunityFilter(event.target.value)}
            className="w-full rounded-xl border border-[#222522]/15 bg-white px-3.5 py-3 text-sm text-[#222522] outline-none focus:border-[#A51E2D] focus:ring-2 focus:ring-[#A51E2D]/15"
          >
            <option>Todas las comunidades</option>
            {FESTIVAL_COMMUNITIES.map((community) => <option key={community}>{community}</option>)}
          </select>
        </label>

        <button
          type="button"
          onClick={() => setIsSortedAZ((current) => !current)}
          aria-pressed={isSortedAZ}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D] ${isSortedAZ ? 'bg-[#A51E2D] text-white' : 'border border-[#222522]/15 bg-white text-[#222522] hover:border-[#A51E2D]/50 hover:text-[#A51E2D]'}`}
        >
          <ArrowUpDown className="h-4 w-4" aria-hidden="true" />
          <span>{isSortedAZ ? 'Orden: A–Z' : 'Ordenar A–Z'}</span>
        </button>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#222522]/10 pb-3">
        <p aria-live="polite" className="text-sm font-medium text-[#52634D]">
          {displayedFestivals.length} {displayedFestivals.length === 1 ? 'fiesta' : 'fiestas'}
          {communityFilter !== 'Todas las comunidades' ? ` en ${communityFilter}` : ''}
        </p>
        <p className="text-xs text-[#222522]/55">Pulsa una tarjeta para conocer su historia</p>
      </div>

      {displayedFestivals.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedFestivals.map((festival) => (
            <button
              key={festival.id}
              type="button"
              onClick={() => setSelectedFestivalId(festival.id)}
              aria-label={`Abrir historia de ${festival.name}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#222522]/10 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#A51E2D]/25 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D] focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[16/10] w-full">
                <FestivalPhoto festival={festival} className="absolute inset-0" imageClassName="transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/20" />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {festival.community}
                </span>
                <span className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs font-medium text-white/95">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0 text-[#F4D780]" aria-hidden="true" />
                  <span className="line-clamp-1">{festival.season}</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#52634D]">
                  <MapPin className="h-3.5 w-3.5 text-[#A51E2D]" aria-hidden="true" />
                  <span className="line-clamp-1">{festival.place}</span>
                </span>
                <h2 className="font-serif text-xl font-bold leading-snug text-[#222522] transition-colors group-hover:text-[#A51E2D]">
                  {festival.name}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#222522]/70">{festival.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#A51E2D]">
                  Ver historia <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#222522]/20 bg-white/50 px-5 py-14 text-center">
          <Search className="mx-auto h-6 w-6 text-[#52634D]" aria-hidden="true" />
          <h2 className="mt-3 font-serif text-xl font-bold text-[#222522]">No encontramos esa fiesta</h2>
          <p className="mt-1 text-sm text-[#222522]/65">Prueba con otro nombre, lugar o comunidad.</p>
        </div>
      )}

      <footer className="flex flex-col gap-2 border-t border-[#222522]/10 pt-5 text-sm text-[#52634D] sm:flex-row sm:items-center sm:justify-between">
        <p>Comprueba las fechas y las normas de visita antes de organizar el viaje.</p>
        <a
          href="https://www.spain.info/en/query/spanish-fiestas/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-[#A51E2D] hover:underline"
        >
          Ver calendario oficial de fiestas <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </footer>

      <FestivalHeritageModal
        festival={selectedFestival}
        onClose={handleCloseModal}
        onSelectPrevious={handleSelectPrevious}
        onSelectNext={handleSelectNext}
      />
    </div>
  );
};
