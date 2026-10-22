import React, { useState, useRef, useMemo } from 'react';
import {
  ALL_DESTINATIONS,
  ALL_DESTINATIONS_SORTED_AZ,
  UnifiedDestination
} from '../data/unifiedDestinationsData';
import { DestinationLightboxModal } from './DestinationLightboxModal';
import { RinconesSecretosCarousel } from './RinconesSecretosCarousel';
import { MiniTravelDossier } from './MiniTravelDossier';
import { AudioPronounceButton } from './AudioPronounceButton';
import { Tooltip } from './Tooltip';
import {
  Search,
  ExternalLink,
  Sparkles,
  Info,
  Landmark,
  Compass,
  Train,
  Camera,
  Utensils,
  Languages,
  Navigation,
  Maximize2,
  Images,
  MapPin,
  X
} from 'lucide-react';

const DestinationsLeafletMap = React.lazy(() =>
  import('./DestinationsLeafletMap').then(({ DestinationsLeafletMap }) => ({ default: DestinationsLeafletMap }))
);

interface DestinationsSectionProps {
  initialCityId?: string;
}

type RegionCategory =
  | 'todas'
  | 'andalucia'
  | 'castillayleon'
  | 'norte'
  | 'castillalamancha'
  | 'catalunya'
  | 'galicia'
  | 'centro'
  | 'mediterraneo'
  | 'resto';

const REGION_TABS: { id: RegionCategory; label: string; count: number }[] = [
  { id: 'todas', label: 'Todas A–Z', count: 52 },
  { id: 'andalucia', label: 'Andalucía', count: 9 },
  { id: 'castillayleon', label: 'Castilla y León', count: 9 },
  { id: 'norte', label: 'Norte & Cantábrico', count: 8 },
  { id: 'castillalamancha', label: 'Castilla-La Mancha', count: 5 },
  { id: 'catalunya', label: 'Catalunya', count: 5 },
  { id: 'galicia', label: 'Galicia', count: 5 },
  { id: 'centro', label: 'Madrid & Centro', count: 3 },
  { id: 'mediterraneo', label: 'Levante & Aragón', count: 6 },
  { id: 'resto', label: 'Extremadura, Murcia & Islas', count: 7 }
];

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  initialCityId = 'madrid'
}) => {
  const [activeDestinationId, setActiveDestinationId] = useState<string>(initialCityId);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<RegionCategory>('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const monographRef = useRef<HTMLDivElement>(null);

  // Synchronize when initialCityId prop changes (e.g., clicking on the hero carousel)
  React.useEffect(() => {
    if (initialCityId) {
      setActiveDestinationId(initialCityId);
      setActivePhotoIndex(0);
      if (monographRef.current) {
        monographRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [initialCityId]);

  // Active Destination matching the selected city
  const activeDestination: UnifiedDestination = useMemo(() => {
    return (
      ALL_DESTINATIONS.find((d) => d.id === activeDestinationId) ||
      ALL_DESTINATIONS[0]
    );
  }, [activeDestinationId]);

  // Filtered destinations based on region category & search term
  const filteredDestinations = useMemo(() => {
    let list = ALL_DESTINATIONS_SORTED_AZ;

    if (selectedRegion !== 'todas') {
      list = list.filter((dest) => {
        const regLower = dest.region.toLowerCase();
        const offLower = dest.officialName.toLowerCase();
        switch (selectedRegion) {
          case 'andalucia':
            return regLower.includes('andalucía') || offLower.includes('andalucía');
          case 'castillayleon':
            return regLower.includes('castilla y león') || offLower.includes('castilla y león');
          case 'norte':
            return (
              regLower.includes('vasco') ||
              regLower.includes('cantabria') ||
              regLower.includes('asturias') ||
              regLower.includes('navarra') ||
              regLower.includes('rioja') ||
              offLower.includes('euskadi')
            );
          case 'castillalamancha':
            return regLower.includes('mancha') || offLower.includes('mancha');
          case 'catalunya':
            return regLower.includes('catalun') || offLower.includes('catalun');
          case 'galicia':
            return regLower.includes('galicia') || offLower.includes('galicia');
          case 'centro':
            return regLower.includes('madrid') || offLower.includes('madrid');
          case 'mediterraneo':
            return (
              regLower.includes('valencian') ||
              regLower.includes('aragón') ||
              offLower.includes('valenciana') ||
              offLower.includes('aragón')
            );
          case 'resto':
            return (
              regLower.includes('extremadura') ||
              regLower.includes('murcia') ||
              regLower.includes('canarias') ||
              regLower.includes('baleares') ||
              offLower.includes('extremadura') ||
              offLower.includes('canarias') ||
              offLower.includes('balears')
            );
          default:
            return true;
        }
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (dest) =>
          dest.name.toLowerCase().includes(q) ||
          dest.officialName.toLowerCase().includes(q) ||
          dest.region.toLowerCase().includes(q) ||
          dest.badge.toLowerCase().includes(q) ||
          dest.notableLandmark.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedRegion, searchQuery]);

  // Extract distinct first letters for A-Z jump bar
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    ALL_DESTINATIONS_SORTED_AZ.forEach((d) => {
      const letter = d.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')[0].toUpperCase();
      letters.add(letter);
    });
    return Array.from(letters).sort();
  }, []);

  const handleSelectDestination = (destId: string) => {
    setActiveDestinationId(destId);
    setActivePhotoIndex(0);
  };

  const handleSelectAndScroll = (destId: string) => {
    setActiveDestinationId(destId);
    setActivePhotoIndex(0);
    if (monographRef.current) {
      monographRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Google Maps / Apple Maps navigation handoff URL
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${activeDestination.capital || activeDestination.name}, España`
  )}`;

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. EDITORIAL SECTION HEADER (BORDERLESS) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D]">
          <span>CAPÍTULO II · CARTOGRAFÍA Y PATRIMONIO</span>
          <span aria-hidden="true">·</span>
          <span>50 CAPITALES PROVINCIALES Y GRANDES DESTINOS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#222522] leading-[1.1]">
          Directorio Monumental de España
        </h1>
        <p className="text-base sm:text-lg text-[#222522]/85 max-w-3xl leading-relaxed">
          Explora la totalidad de las provincias peninsulares e insulares ({ALL_DESTINATIONS.length} ciudades y capitales históricas). Haz clic en cualquier marcador del mapa Leaflet o selecciona una ciudad del directorio A–Z para desplegar su ficha monográfica, mini-galería de autor, rutas secretas y presupuesto.
        </p>
      </div>

      {/* 2. VISUAL MAP (LEAFLET): BORDERLESS, WARM SEPIA/CREAM FILTER, TERRACOTTA PIN & UTILITY OVERLAY */}
      <section
        className="space-y-4"
        aria-label="Mapa interactivo Leaflet de destinos de España"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
              <Compass className="w-4 h-4 text-[#A51E2D]" />
              <span>MAPA INTERACTIVO OPENSTREETMAP · GEOLOCALIZACIÓN Y GPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
              Puntos Geográficos y Conexiones Territoriales
            </h2>
          </div>

          <div className="text-xs font-mono text-[#52634D] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A51E2D]" />
            <span>Haz clic en un marcador para desplegar su guía (haz clic en el mapa para cerrar la ficha)</span>
          </div>
        </div>

        {/* Leaflet Map Component with Dismiss on Map Click */}
        <React.Suspense fallback={<div className="h-[320px] sm:h-[460px] rounded-3xl bg-[#F7F1E7] flex items-center justify-center text-sm font-semibold text-[#52634D]" role="status" aria-live="polite">Cargando el mapa…</div>}>
          <DestinationsLeafletMap
            destinations={ALL_DESTINATIONS}
            selectedDestination={activeDestination}
            onSelectDestination={handleSelectDestination}
          />
        </React.Suspense>
      </section>

      {/* 3. EXHAUSTIVE CITY EXPANSION: A-Z DIRECTORY & REGIONAL SELECTOR */}
      <section className="space-y-6 pt-2" aria-labelledby="directorio-ciudades-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold">
              <Landmark className="w-4 h-4 text-[#A51E2D]" />
              <span>DIRECTORIO COMPLETO · CIUDADES DE LA A A LA Z</span>
            </div>
            <h2 id="directorio-ciudades-heading" className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
              Explorador de Capitales Peninsulares
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#222522]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar ciudad, provincia o monumento..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-black/5 border border-black/10 text-xs text-[#222522] placeholder-[#222522]/50 focus:outline-none focus:ring-1 focus:ring-[#A51E2D] font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#222522]/50 hover:text-[#222522]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Regional Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-[#222522]/10 pb-4">
          {REGION_TABS.map((tab) => {
            const isActive = selectedRegion === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedRegion(tab.id);
                  setSearchQuery('');
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold transition-all ${
                  isActive
                    ? 'bg-[#A51E2D] text-[#FBF8F1] shadow-sm'
                    : 'text-[#222522]/75 hover:text-[#222522] hover:bg-[#222522]/5'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 text-xs font-mono ${isActive ? 'text-[#E2B342]' : 'text-[#222522]/45'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* A-Z Quick Jump Bar */}
        <div className="flex flex-wrap items-center gap-1 text-xs font-mono font-bold text-[#52634D]">
          <span className="mr-2 uppercase tracking-wider text-xs text-[#222522]/50">Salto A-Z:</span>
          {availableLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => {
                setSelectedRegion('todas');
                const target = ALL_DESTINATIONS_SORTED_AZ.find((d) =>
                  d.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().startsWith(letter)
                );
                if (target) {
                  handleSelectAndScroll(target.id);
                }
              }}
              className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#A51E2D] hover:text-[#FBF8F1] transition-colors"
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Comprehensive Grid of City Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 pt-2 max-h-[380px] overflow-y-auto pr-1">
          {filteredDestinations.map((dest) => {
            const isActive = activeDestination.id === dest.id;
            return (
              <button
                key={dest.id}
                onClick={() => handleSelectAndScroll(dest.id)}
                className={`text-left p-2.5 rounded-xl transition-all border ${
                  isActive
                    ? 'bg-[#A51E2D] text-[#FBF8F1] border-[#A51E2D] shadow-sm scale-[1.02]'
                    : 'bg-[#FBF8F1]/60 border-black/5 hover:border-[#A51E2D]/40 hover:bg-[#FBF8F1] text-[#222522]'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className={`font-serif font-bold text-xs truncate ${isActive ? 'text-white' : 'text-[#222522]'}`}>
                    {dest.name}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E2B342] shrink-0" />}
                </div>
                <span className={`text-xs font-mono block truncate mt-0.5 ${isActive ? 'text-[#E2B342]' : 'text-[#52634D]'}`}>
                  {dest.badge}
                </span>
              </button>
            );
          })}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-8 text-xs font-mono text-[#222522]/60">
            No se encontraron ciudades con el criterio de búsqueda "{searchQuery}".
          </div>
        )}
      </section>

      {/* 4. ACTIVE DESTINATION MONOGRAPH (DYNAMICALLY UPDATES FOR ALL 52 DESTINATIONS) */}
      <div ref={monographRef} className="space-y-10 pt-4">
        {/* Monograph Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
              <span>GUÍA MONOGRÁFICA EN PROFUNDIDAD</span>
              <span className="text-[#222522]/30">·</span>
              <span className="text-[#52634D]">{activeDestination.region}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#222522]">
              {activeDestination.name}
            </h2>
          </div>

          {/* Quick Universal Directions Button directly beside title */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A51E2D] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#861A27] transition-all self-start sm:self-auto group shadow-sm hover:scale-[1.02]"
            aria-label={`Cómo llegar a ${activeDestination.name}`}
          >
            <Navigation className="w-3.5 h-3.5 text-[#E2B342] group-hover:rotate-12 transition-transform" />
            <span>Cómo Llegar en GPS</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/70" />
          </a>
        </div>

        {/* FULL-BLEED PANORAMIC PHOTOGRAPHY SPREAD WITH POP GLARE & FILM FADE (CLICK TO OPEN LIGHTBOX MINI-GALLERY) */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsLightboxOpen(true);
            }
          }}
          className="group relative w-full min-w-0 rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[24/9] min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] bg-[#121110] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A51E2D]"
          aria-label={`Abrir mini-galería monumental de ${activeDestination.name}`}
        >
          <img
            key={activeDestination.id}
            src={activeDestination.imageUrl}
            alt={activeDestination.imageAlt}
            className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Luminous Mediterranean Sun Glare Overlay */}
          <div className="pop-sun-glare" />

          {/* Smooth Bottom-Up Film Fade Gradient */}
          <div className="pop-film-fade-hero" />

          {/* Top Metadata Badges */}
          <div className="absolute top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 z-10 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <span className="min-w-0 max-w-full px-3.5 py-1.5 rounded-full bg-[#121110]/80 backdrop-blur-md text-[#E2B342] text-xs font-mono font-bold flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-[#E2B342]" />
              <span className="min-w-0 truncate">{activeDestination.photoTag}</span>
            </span>

            {/* Expanded Mini-Gallery Badge (6 to 8 photos) */}
            <span className="inline-flex max-w-full items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121110]/80 backdrop-blur-md text-[#FBF8F1] text-xs font-mono font-bold group-hover:bg-[#A51E2D] transition-colors">
              <Images className="w-3.5 h-3.5 text-[#E2B342]" />
              <span className="truncate">Abrir galería · {activeDestination.gallery.length} fotos</span>
            </span>
          </div>

          {/* Bottom Captions Floating Directly over Film Fade */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-wrap items-end justify-between gap-3 sm:gap-4 text-white">
            <div className="space-y-1.5 max-w-3xl">
              <p className="font-serif italic text-xl sm:text-3xl text-[#FBF8F1] drop-shadow-md">
                «{activeDestination.imageCaption}»
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.65rem] sm:text-xs font-mono text-[#FBF8F1]/80 uppercase tracking-wider">
                <span>{activeDestination.region}</span>
                <span>·</span>
                <span>{activeDestination.capital ? `Capital: ${activeDestination.capital}` : 'Territorio Histórico'}</span>
                <span>·</span>
                <span className="text-[#E2B342] flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Abre la galería completa</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Story & Rail/Travel Connections (Borderless) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D]">
              <span>{activeDestination.officialName}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A51E2D] font-bold">{activeDestination.badge}</span>
            </div>

            <p className="font-serif italic text-2xl sm:text-3xl text-[#A51E2D]">
              {activeDestination.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#222522]/85 leading-relaxed pt-1">
              {activeDestination.intro}
            </p>

            {/* Quick Cultural Details directly in narrative */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#A51E2D] font-bold">
                  <Utensils className="w-3.5 h-3.5 text-[#52634D]" />
                  <span>Plato Emblemático:</span>
                </div>
                <p className="text-sm text-[#222522] font-semibold">
                  {activeDestination.iconicDish}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#A51E2D] font-bold">
                  <Languages className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>Idiomas Oficiales:</span>
                </div>
                <p className="text-sm text-[#222522] font-semibold">
                  {activeDestination.languages}
                </p>
              </div>
            </div>
          </div>

          {/* Clean Editorial Rail Connection & Institutional Link */}
          <div className="lg:col-span-4 space-y-4 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A51E2D] font-bold tracking-wider">
                <Train className="w-4 h-4 text-[#A51E2D]" />
                <span>Accesos y Conexión de Transporte</span>
              </div>
              <p className="text-sm text-[#222522]/85 leading-relaxed">
                {activeDestination.travelConnection}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#52634D] font-bold tracking-wider">
                <Compass className="w-4 h-4 text-[#E2B342]" />
                <span>Geolocalización GPS</span>
              </div>
              <p className="text-xs font-mono text-[#222522]/70">
                Coordenadas: {activeDestination.coordinates[0].toFixed(4)}°N, {Math.abs(activeDestination.coordinates[1]).toFixed(4)}°W
              </p>
              <div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#A51E2D] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir ruta en Google Maps / Apple Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Tooltip
                spanishPrompt={`«¡Portal institucional de ${activeDestination.name}! 🌐»`}
                content={`Visit official tourism portal for ${activeDestination.name}`}
              >
                <a
                  href={activeDestination.officialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#52634D] hover:underline"
                >
                  <span>{activeDestination.officialLink.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* THREE ICONIC MONUMENTS / ATTRACTIONS */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold">
            <Landmark className="w-4 h-4 text-[#E2B342]" />
            <span>Tres Monumentos y Lugares Clave de {activeDestination.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeDestination.attractions.map((attraction, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#A51E2D] font-bold">
                  <span>0{idx + 1}. PATRIMONIO</span>
                  <span className="text-xs text-[#52634D] font-semibold">{attraction.highlight}</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-[#222522]">
                  {attraction.name}
                </h4>
                <p className="text-sm text-[#222522]/80 leading-relaxed">
                  {attraction.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* VISITOR TIP & LOCAL SPANISH PHRASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {/* Visitor Tip */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#52634D] font-bold">
              <Info className="w-4 h-4 text-[#52634D]" />
              <span>Consejo Práctico del Viajero en {activeDestination.name}</span>
            </div>
            <p className="text-base text-[#222522]/85 leading-relaxed font-sans">
              {activeDestination.visitorTip}
            </p>
          </div>

          {/* Useful Spanish Phrase with Audio */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A51E2D] font-bold">
                Expresión Viajera en {activeDestination.name}
              </span>
              <AudioPronounceButton
                phrase={activeDestination.spanishPhrase.spanish}
                size="sm"
                spanishPrompt={`«¡Aprende a pronunciar en ${activeDestination.name}! 🗣️»`}
              />
            </div>
            <p className="text-xl font-serif font-bold text-[#222522]">
              {activeDestination.spanishPhrase.spanish}
            </p>
            <p className="text-xs text-[#52634D] italic font-serif">
              {activeDestination.spanishPhrase.english} · <span className="font-mono not-italic">{activeDestination.spanishPhrase.phonetic}</span>
            </p>
          </div>
        </div>

        {/* RINCONES SECRETOS: ESCAPADAS CERCANAS Y PUEBLOS CON ENCANTO */}
        <RinconesSecretosCarousel
          destinationName={activeDestination.name}
          spots={activeDestination.secretSpots}
        />

        {/* MINI TRAVEL DOSSIER: HOTEL & BUDGET SNAPSHOT (DUAL CURRENCY € / $) */}
        <MiniTravelDossier
          destinationName={activeDestination.name}
          dossier={activeDestination.travelDossier}
        />
      </div>

      {/* FULL-SCREEN CURATED PHOTO GALLERY LIGHTBOX MODAL (EXPANDED TO 6-8 PHOTOS PER CITY) */}
      <DestinationLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        destinationName={activeDestination.name}
        destinationRegion={activeDestination.region}
        photos={activeDestination.gallery}
        activePhotoIndex={activePhotoIndex}
        onSelectPhotoIndex={setActivePhotoIndex}
      />
    </div>
  );
};
