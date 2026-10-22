import React, { useState } from 'react';
import { SPAIN_REGIONS, RegionData } from '../data/regionsData';
import { Tooltip } from './Tooltip';
import {
  Compass,
  MapPin,
  Utensils,
  Landmark,
  Languages,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SpainRegionalMapProps {
  onSelectCity?: (cityId: string) => void;
  selectedCityId?: string;
}

const REGION_GEOMETRY: Record<string, { path: string; labelPos: { x: number; y: number } }> = {
  galicia: {
    path: 'M 100,60 L 210,50 L 220,130 L 190,190 L 140,210 L 120,200 L 90,130 Z',
    labelPos: { x: 150, y: 120 }
  },
  asturias: {
    path: 'M 210,50 L 330,55 L 340,110 L 220,130 Z',
    labelPos: { x: 275, y: 85 }
  },
  cantabria: {
    path: 'M 330,55 L 420,60 L 415,115 L 340,110 Z',
    labelPos: { x: 375, y: 88 }
  },
  'pais-vasco': {
    path: 'M 420,60 L 490,75 L 480,135 L 415,115 Z',
    labelPos: { x: 450, y: 98 }
  },
  navarra: {
    path: 'M 480,75 L 560,90 L 530,165 L 480,135 Z',
    labelPos: { x: 515, y: 125 }
  },
  'la-rioja': {
    path: 'M 415,115 L 480,135 L 450,170 L 390,145 Z',
    labelPos: { x: 435, y: 145 }
  },
  aragon: {
    path: 'M 530,90 L 680,120 L 690,260 L 610,320 L 550,280 L 530,165 Z',
    labelPos: { x: 610, y: 210 }
  },
  cataluna: {
    path: 'M 680,120 L 820,135 L 800,270 L 690,260 Z',
    labelPos: { x: 740, y: 195 }
  },
  'castilla-y-leon': {
    path: 'M 220,130 L 340,110 L 415,115 L 390,145 L 450,170 L 450,280 L 360,330 L 260,330 L 225,230 L 190,190 Z',
    labelPos: { x: 320, y: 220 }
  },
  madrid: {
    path: 'M 410,290 L 460,280 L 470,330 L 425,350 L 405,320 Z',
    labelPos: { x: 438, y: 315 }
  },
  'castilla-la-mancha': {
    path: 'M 360,330 L 450,280 L 550,280 L 610,320 L 610,430 L 530,470 L 420,470 L 370,410 Z',
    labelPos: { x: 485, y: 395 }
  },
  'comunitat-valenciana': {
    path: 'M 610,320 L 690,260 L 710,380 L 660,460 L 610,430 Z',
    labelPos: { x: 655, y: 370 }
  },
  'islas-baleares': {
    path: 'M 780,310 L 840,300 L 860,330 L 810,350 Z M 870,290 L 910,285 L 905,305 L 865,300 Z M 740,345 L 770,340 L 760,365 L 735,360 Z',
    labelPos: { x: 820, y: 325 }
  },
  extremadura: {
    path: 'M 260,330 L 370,330 L 370,480 L 270,480 L 260,380 Z',
    labelPos: { x: 315, y: 405 }
  },
  andalucia: {
    path: 'M 250,480 L 420,470 L 530,470 L 610,430 L 620,530 L 520,630 L 380,630 L 270,590 Z',
    labelPos: { x: 440, y: 550 }
  },
  'region-de-murcia': {
    path: 'M 580,450 L 650,450 L 640,510 L 570,500 Z',
    labelPos: { x: 610, y: 475 }
  },
  canarias: {
    path: 'M 40,680 L 90,675 L 85,715 L 35,710 Z M 110,685 L 150,680 L 145,715 L 105,710 Z',
    labelPos: { x: 95, y: 695 }
  }
};

const DEFAULT_GEOM = {
  path: 'M 400,300 L 450,300 L 450,350 L 400,350 Z',
  labelPos: { x: 425, y: 325 }
};

export const SpainRegionalMap: React.FC<SpainRegionalMapProps> = ({
  onSelectCity,
  selectedCityId
}) => {
  const defaultRegionId = selectedCityId === 'madrid'
    ? 'madrid'
    : selectedCityId === 'barcelona'
    ? 'cataluna'
    : 'andalucia';

  const [selectedRegionId, setSelectedRegionId] = useState<string>(defaultRegionId);
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const selectedRegion = SPAIN_REGIONS.find((r) => r.id === selectedRegionId) || SPAIN_REGIONS[0];
  const hoveredRegion = SPAIN_REGIONS.find((r) => r.id === hoveredRegionId);

  const handleRegionClick = (region: RegionData) => {
    setSelectedRegionId(region.id);
  };

  return (
    <div className="w-full space-y-8">
      {/* Editorial Header (Borderless) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold mb-1">
            <Compass className="w-4 h-4 text-[#A51E2D]" />
            <span>Cartografía Territorial · 17 Comunidades Autónomas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
            Mapa Cultural de las Regiones de España
          </h2>
          <p className="text-sm sm:text-base text-[#222522]/80 mt-1 max-w-2xl leading-relaxed">
            Pasa el cursor sobre cualquier región para descubrir su esencia cultural o haz clic para consultar su capital, gastronomía emblemática y patrimonio.
          </p>
        </div>

        {/* Legend Indicator (Borderless) */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#52634D] self-start md:self-auto">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#E2B342]" />
            <span className="text-[#222522] font-bold">Seleccionada</span>
          </div>
          <span className="text-[#222522]/30">·</span>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EDE5D8]" />
            <span className="text-[#222522]/80">17 Comunidades</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Seamless SVG Map Canvas + Regional Spotlight Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Stylized SVG Map (Sitting Directly on Page Background) */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] flex items-center justify-center select-none">
          <svg
            viewBox="0 0 1000 780"
            className="w-full h-full select-none"
            aria-label="Mapa interactivo de las 17 comunidades autónomas de España"
          >
            <defs>
              <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#A51E2D" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Ocean labels */}
            <text x="320" y="45" fontSize="14" fill="#1D4ED8" opacity="0.45" className="font-serif italic font-bold">
              Mar Cantábrico
            </text>
            <text x="70" y="320" fontSize="14" fill="#1D4ED8" opacity="0.45" className="font-serif italic font-bold">
              Océano Atlántico
            </text>
            <text x="820" y="490" fontSize="14" fill="#1D4ED8" opacity="0.45" className="font-serif italic font-bold">
              Mar Mediterráneo
            </text>

            {/* Stylized Portugal (Solid hairline, no dashed lines) */}
            <g opacity="0.85">
              <path
                d="M 140,230 L 225,230 L 225,320 L 260,330 L 280,380 L 270,440 L 260,540 L 250,650 L 170,620 L 140,480 L 120,340 Z"
                fill="#EDE5D8"
                stroke="#222522"
                strokeWidth="0.9"
              />
              <text x="180" y="430" fontSize="17" fill="#52634D" opacity="0.5" className="font-serif italic font-bold">
                Portugal
              </text>
            </g>

            {/* Stylized France / Pyrenees Border line (Solid line, no dashed) */}
            <g opacity="0.6">
              <path
                d="M 530,75 L 610,95 L 690,125 L 820,135"
                fill="none"
                stroke="#222522"
                strokeWidth="1.2"
              />
              <text x="660" y="75" fontSize="14" fill="#52634D" opacity="0.55" className="font-serif italic font-bold">
                Francia (Pirineos)
              </text>
            </g>

            {/* Canarias Inset (Clean borderless, no dashed box) */}
            <g>
              <text x="50" y="650" fontSize="11" fill="#A51E2D" fontWeight="bold" className="font-mono uppercase tracking-wider">
                Islas Canarias · Atlántico
              </text>
            </g>

            {/* The 17 Autonomous Communities Paths */}
            {SPAIN_REGIONS.map((region) => {
              const isSelected = selectedRegionId === region.id;
              const isHovered = hoveredRegionId === region.id;
              const geom = REGION_GEOMETRY[region.id] || DEFAULT_GEOM;

              return (
                <g key={region.id}>
                  <path
                    d={geom.path}
                    tabIndex={0}
                    role="button"
                    aria-label={`Comunidad Autónoma de ${region.name}. ${region.culturalHighlight}`}
                    aria-pressed={isSelected}
                    onClick={() => handleRegionClick(region)}
                    onMouseEnter={() => setHoveredRegionId(region.id)}
                    onMouseLeave={() => setHoveredRegionId(null)}
                    onFocus={() => setHoveredRegionId(region.id)}
                    onBlur={() => setHoveredRegionId(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleRegionClick(region);
                      }
                    }}
                    fill={
                      isSelected
                        ? '#E2B342'
                        : isHovered
                        ? '#FDE68A'
                        : region.featuredCityId
                        ? '#F0E8DC'
                        : '#E8DFC8'
                    }
                    stroke={isSelected ? '#A51E2D' : isHovered ? '#A51E2D' : '#222522'}
                    strokeWidth={isSelected ? '2.5' : isHovered ? '2' : '1'}
                    filter={isSelected || isHovered ? 'url(#mapGlow)' : undefined}
                    className="cursor-pointer transition-all duration-200 outline-none hover:opacity-95"
                  />

                  {/* Region Centroid Marker & Name */}
                  <g
                    className="pointer-events-none select-none transition-transform duration-200"
                    transform={isSelected ? `translate(0, -1)` : undefined}
                  >
                    <circle
                      cx={geom.labelPos.x}
                      cy={geom.labelPos.y}
                      r={isSelected ? 4 : 2.5}
                      fill={isSelected ? '#A51E2D' : '#222522'}
                      opacity={isSelected ? 1 : 0.6}
                    />
                    <text
                      x={geom.labelPos.x}
                      y={geom.labelPos.y - 7}
                      textAnchor="middle"
                      fontSize={isSelected ? '14' : '11.5'}
                      fontWeight={isSelected ? 'bold' : '600'}
                      fill={isSelected ? '#A51E2D' : '#222522'}
                      className="font-serif tracking-tight"
                    >
                      {region.name}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* Vintage Compass Rose (Solid hairline, no dashed lines) */}
            <g transform="translate(880, 80)" className="pointer-events-none opacity-85">
              <circle cx="0" cy="0" r="24" fill="#FBF8F1" stroke="#222522" strokeWidth="1" />
              <polygon points="0,-20 4,-5 0,0 -4,-5" fill="#A51E2D" />
              <polygon points="0,20 4,5 0,0 -4,5" fill="#52634D" />
              <polygon points="-20,0 -5,-4 0,0 -5,4" fill="#52634D" />
              <polygon points="20,0 5,-4 0,0 5,4" fill="#52634D" />
              <circle cx="0" cy="0" r="2.5" fill="#E2B342" />
              <text x="0" y="-24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#A51E2D" className="font-mono">
                N
              </text>
            </g>
          </svg>

          {/* Floating Hover Annotation */}
          {hoveredRegion && (
            <div className="absolute bottom-4 right-4 bg-[#222522] text-[#FBF8F1] rounded-xl px-4 py-2.5 max-w-sm pointer-events-none z-20">
              <div className="flex items-center justify-between gap-2 pb-1 mb-1">
                <span className="font-serif font-bold text-sm text-[#E2B342]">
                  {hoveredRegion.name}
                </span>
                <span className="text-xs font-mono text-[#FBF8F1]/70 uppercase">
                  Cap: {hoveredRegion.capital}
                </span>
              </div>
              <p className="text-xs font-serif italic text-[#FBF8F1] leading-snug">
                «{hoveredRegion.culturalHighlight}»
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Selected Region Cultural Spotlight Panel (Sitting Directly on Background) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E2B342]" />
              <span>FICHA REGIONAL ACTIVA · ESPAÑA 2026</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
              {selectedRegion.name}
            </h3>
            <p className="text-xs font-mono text-[#52634D] font-semibold">
              {selectedRegion.officialName} · Capital: <strong className="text-[#222522]">{selectedRegion.capital}</strong>
            </p>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#A51E2D]">
            «{selectedRegion.tagline}»
          </p>

          {/* Cultural Highlights (Clean Typographic Hierarchy, No Boxes) */}
          <div className="space-y-4 pt-2 text-xs">
            <div className="flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#E2B342] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#222522] block text-xs uppercase font-mono tracking-wider">Esencia Cultural:</span>
                <p className="text-sm text-[#222522]/80 leading-relaxed font-sans mt-0.5">
                  {selectedRegion.culturalHighlight}
                </p>
                <p className="text-xs text-[#52634D] italic font-serif mt-0.5">
                  {selectedRegion.englishHighlight}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Landmark className="w-4 h-4 text-[#A51E2D] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#222522] block text-xs uppercase font-mono tracking-wider">Monumento Emblemático:</span>
                <span className="text-sm text-[#222522]/85">{selectedRegion.notableLandmark}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Utensils className="w-4 h-4 text-[#52634D] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#222522] block text-xs uppercase font-mono tracking-wider">Plato Bandera:</span>
                <span className="text-sm text-[#222522]/85">{selectedRegion.iconicDish}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Languages className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#222522] block text-xs uppercase font-mono tracking-wider">Idiomas Oficiales:</span>
                <span className="text-sm text-[#222522]/85">{selectedRegion.languages}</span>
              </div>
            </div>
          </div>

          {/* Action to Jump to Featured Destination */}
          <div className="pt-2">
            {selectedRegion.featuredCityId ? (
              <Tooltip
                spanishPrompt={`«¡Explorar ${selectedRegion.featuredCityId.toUpperCase()}! 🏛️»`}
                content={`Jump directly to the in-depth city guide and attractions for ${selectedRegion.featuredCityId.toUpperCase()}`}
              >
                <button
                  onClick={() => onSelectCity && onSelectCity(selectedRegion.featuredCityId!)}
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#A51E2D] text-[#FBF8F1] rounded-xl text-xs font-bold hover:bg-[#861A27] transition-colors"
                >
                  <span>Ver Guía Completa de {selectedRegion.featuredCityId.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2B342]" />
                </button>
              </Tooltip>
            ) : (
              <p className="text-xs text-[#222522]/70 italic">
                Comunidad histórica de España. Selecciona otra región en el mapa para explorar ciudades monográficas.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Region Fast Selector Strip (Minimalist, No Card Boxes) */}
      <div className="pt-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#52634D] font-bold block mb-3">
          Acceso Rápido a las 17 Comunidades Autónomas:
        </span>
        <div className="flex flex-wrap gap-2">
          {SPAIN_REGIONS.map((region) => {
            const isSelected = selectedRegionId === region.id;
            return (
              <button
                key={region.id}
                onClick={() => handleRegionClick(region)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#A51E2D] text-[#FBF8F1] font-bold'
                    : 'text-[#222522]/75 hover:text-[#222522] hover:bg-[#222522]/5'
                }`}
              >
                {region.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
