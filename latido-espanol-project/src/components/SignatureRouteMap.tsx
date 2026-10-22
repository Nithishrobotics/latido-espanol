import React, { useState } from 'react';
import { Train, Clock, MapPin, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface SignatureRouteMapProps {
  onSelectCity?: (cityId: string) => void;
  selectedCityId?: string;
}

interface StationInfo {
  id: string;
  name: string;
  region: string;
  station: string;
  coords: { x: number; y: number };
  aveTime: string;
  distance: string;
  speed: string;
  feature: string;
  tagline: string;
  elevation: string;
  officialRef: string;
}

const STATIONS: StationInfo[] = [
  {
    id: 'madrid',
    name: 'Madrid',
    region: 'Comunidad de Madrid · Meseta Central',
    station: 'Estación Puerta de Atocha - Almudena Grandes',
    coords: { x: 550, y: 430 },
    aveTime: 'Punto Central · Km 0 de la Red',
    distance: 'Centro neurálgico peninsular',
    speed: '310 km/h velocidad crucero',
    feature: 'El Museo del Prado, Gran Vía y Triángulo del Arte',
    tagline: '«Corazón y kilómetro cero de la red radial española»',
    elevation: '657 m s. n. m.',
    officialRef: 'ADIF-AVE 001'
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    region: 'Cataluña · Litoral Mediterráneo',
    station: 'Estació de Barcelona Sants',
    coords: { x: 895, y: 280 },
    aveTime: '2h 30m desde Madrid (AVE Directo)',
    distance: '621 km de trazado electrificado',
    speed: '300 km/h por el corredor del Ebro',
    feature: 'La Sagrada Família, Park Güell y vanguardia modernista',
    tagline: '«Vanguardia arquitectónica mediterránea y mar latino»',
    elevation: '12 m s. n. m.',
    officialRef: 'ADIF-AVE 002'
  },
  {
    id: 'sevilla',
    name: 'Sevilla',
    region: 'Andalucía Occidental · Valle del Guadalquivir',
    station: 'Estación de Sevilla - Santa Justa',
    coords: { x: 420, y: 675 },
    aveTime: '2h 20m desde Madrid (Línea Histórica 1992)',
    distance: '471 km hacia el sur andaluz',
    speed: '300 km/h por Despeñaperros',
    feature: 'Real Alcázar, Giralda y cuna del cante flamenco',
    tagline: '«El embrujo mudéjar, los naranjos y la pasión del sur»',
    elevation: '11 m s. n. m.',
    officialRef: 'ADIF-AVE 003'
  },
  {
    id: 'granada',
    name: 'Granada',
    region: 'Andalucía Oriental · Al pie de Sierra Nevada',
    station: 'Estación de Granada - Chana',
    coords: { x: 610, y: 700 },
    aveTime: '3h 15m desde Madrid · 2h 10m desde Sevilla',
    distance: '568 km vía Antequera Santa Ana',
    speed: '250 km/h trazado de montaña',
    feature: 'La Alhambra nazarí, los jardines del Generalife y Albaicín',
    tagline: '«El último reino poético bajo cumbres nevadas»',
    elevation: '738 m s. n. m.',
    officialRef: 'ADIF-AVE 004'
  }
];

export const SignatureRouteMap: React.FC<SignatureRouteMapProps> = ({
  onSelectCity,
  selectedCityId = 'madrid'
}) => {
  const [activeCityId, setActiveCityId] = useState<string>(selectedCityId);
  const activeStation = STATIONS.find((s) => s.id === activeCityId) || STATIONS[0];

  const handleStationClick = (id: string) => {
    setActiveCityId(id);
    if (onSelectCity) {
      onSelectCity(id);
    }
  };

  return (
    <div className="w-full space-y-10">
      {/* Editorial Header (Completely Borderless) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold">
            <Compass className="w-4 h-4 text-[#A51E2D]" />
            <span>Red Nacional de Alta Velocidad · Renfe AVE</span>
            <span aria-hidden="true">·</span>
            <span>Cartografía Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#222522] leading-tight">
            El Cuadrilátero Histórico Peninsular
          </h2>
          <p className="text-sm sm:text-base text-[#222522]/80 max-w-2xl leading-relaxed">
            La península conectada a más de 300 km/h. Selecciona cualquier nodo ferroviario sobre la cartografía física para consultar tiempos de enlace, kilometraje y acceso directo a la guía monográfica.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto text-xs font-mono text-[#52634D]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A51E2D]" />
          <span className="font-bold text-[#222522]">Líneas Activas AVE</span>
          <span className="text-[#222522]/30">|</span>
          <span className="text-[#A51E2D] font-bold">{activeStation.name.toUpperCase()} SELECCIONADA</span>
        </div>
      </div>

      {/* Main Grid: Realistic Stylized Spain Editorial Map & Typography Column (No Boxes, No Borders) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Highly Realistic Stylized Map of Spain (Zero Boundary Box, Seamless Canvas Blend) */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] flex items-center justify-center select-none">
          <svg
            viewBox="0 0 1000 780"
            className="w-full h-full select-none"
            aria-label="Mapa cartográfico realista y estilizado de España con la red de alta velocidad"
          >
            <defs>
              {/* Soft topographic elevation gradients */}
              <radialGradient id="mesetaGrad" cx="55%" cy="54%" r="45%">
                <stop offset="0%" stopColor="#E6DCB8" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#EDE2C8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F7F1E7" stopOpacity="0" />
              </radialGradient>

              {/* Coastal waters fade into cream canvas */}
              <linearGradient id="oceanSoftGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0D9488" stopOpacity="0.04" />
              </linearGradient>

              {/* Active Route Glow */}
              <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#A51E2D" floodOpacity="0.45" />
              </filter>
              <filter id="stationGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#E2B342" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Subtle maritime geographical annotations */}
            <text x="440" y="55" fontSize="13" fill="#1E3A8A" opacity="0.45" className="font-serif italic font-bold tracking-widest">
              MAR CANTÁBRICO
            </text>
            <text x="80" y="270" fontSize="13" fill="#1E3A8A" opacity="0.4" className="font-serif italic font-bold tracking-widest">
              OCÉANO ATLÁNTICO
            </text>
            <text x="830" y="620" fontSize="13" fill="#1E3A8A" opacity="0.45" className="font-serif italic font-bold tracking-widest">
              MAR MEDITERRÁNEO
            </text>
            <text x="430" y="775" fontSize="10" fill="#1E3A8A" opacity="0.45" className="font-mono font-bold tracking-wider">
              ESTRECHO DE GIBRALTAR
            </text>

            {/* Spain & Iberian Peninsula Realistic Geomorphological Silhouette */}
            {/* 1. Portugal muted territory for authentic geographic realism */}
            <path
              d="M 268,295 
                 C 275,320 282,340 280,370 
                 C 278,400 270,440 268,480 
                 C 265,515 255,550 250,580 
                 C 246,605 240,630 248,655 
                 C 255,670 275,675 305,670 
                 C 335,665 355,672 365,682
                 L 362,630 
                 C 358,580 365,530 362,485
                 C 360,440 375,410 378,380
                 C 382,340 350,320 330,310
                 Z"
              fill="#EDE5D8"
              stroke="#222522"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <text x="295" y="480" fontSize="14" fill="#52634D" opacity="0.45" className="font-serif italic font-bold">
              Portugal
            </text>

            {/* 2. Spain Authentic Continental Landmass */}
            <path
              d="M 725,122 
                 C 700,128 660,118 630,115 
                 C 590,112 550,110 515,106 
                 C 480,102 445,108 410,110 
                 C 380,112 360,98 348,96 
                 C 336,94 325,104 315,115 
                 C 295,130 278,145 272,165 
                 C 264,185 248,198 248,220 
                 C 248,245 260,265 262,285 
                 C 264,295 268,300 268,305 
                 L 330,310 
                 C 350,320 382,340 378,380 
                 C 375,410 360,440 362,485 
                 C 365,530 358,580 362,630 
                 L 365,682 
                 C 385,688 410,690 432,710 
                 C 445,725 450,745 462,758 
                 C 475,770 492,776 505,772 
                 C 525,765 545,750 575,745 
                 C 610,740 645,744 680,735 
                 C 715,725 735,705 750,685 
                 C 765,665 778,635 790,610 
                 C 802,585 825,565 835,550 
                 C 845,535 830,510 820,490 
                 C 810,470 802,445 810,420 
                 C 818,395 840,375 855,360 
                 C 875,340 888,315 902,285 
                 C 915,260 932,235 940,210 
                 C 946,192 935,188 920,192 
                 C 890,200 860,188 830,172 
                 C 800,156 765,138 725,122 Z"
              fill="#F0E8DC"
              stroke="#222522"
              strokeWidth="1.2"
              className="transition-colors duration-500"
            />

            {/* Central Meseta Shading */}
            <ellipse cx="560" cy="420" rx="220" ry="170" fill="url(#mesetaGrad)" />

            {/* Balearic Islands (Islas Baleares) - Realistic geographic placement */}
            {/* Mallorca */}
            <path
              d="M 915,450 C 935,442 958,452 955,472 C 950,488 930,490 915,482 C 905,476 905,456 915,450 Z"
              fill="#EDE5D8"
              stroke="#222522"
              strokeWidth="0.9"
            />
            <text x="935" y="497" fontSize="8.5" fill="#52634D" textAnchor="middle" className="font-serif italic">
              Mallorca
            </text>
            {/* Menorca */}
            <ellipse cx="985" cy="435" rx="14" ry="7" transform="rotate(-25 985 435)" fill="#EDE5D8" stroke="#222522" strokeWidth="0.8" />
            <text x="985" y="448" fontSize="7" fill="#52634D" textAnchor="middle" className="font-serif italic">
              Menorca
            </text>
            {/* Ibiza */}
            <ellipse cx="865" cy="522" rx="12" ry="7" transform="rotate(35 865 522)" fill="#EDE5D8" stroke="#222522" strokeWidth="0.8" />
            <text x="865" y="535" fontSize="7" fill="#52634D" textAnchor="middle" className="font-serif italic">
              Ibiza
            </text>

            {/* Stylized Mountain Relief Ridges (Pirineos, Sistema Central, Sierra Nevada) */}
            <g opacity="0.35" stroke="#52634D" strokeWidth="1" fill="none">
              {/* Pirineos */}
              <path d="M 735,130 Q 780,150 825,170 T 915,195" />
              <path d="M 750,140 Q 800,162 860,180 T 925,200" />
              {/* Cordillera Cantábrica */}
              <path d="M 370,125 Q 470,120 570,128" />
              {/* Sistema Central (Guadarrama / Gredos) */}
              <path d="M 460,390 Q 520,380 580,395 T 640,410" />
              {/* Sierra Morena */}
              <path d="M 440,580 Q 520,570 600,585" />
              {/* Sierra Nevada (Granada) */}
              <path d="M 590,705 Q 640,695 690,715" strokeWidth="1.4" stroke="#A51E2D" opacity="0.6" />
            </g>

            {/* Major Navigable Rivers of Spain (Guadalquivir, Ebro, Tajo) */}
            <g opacity="0.35" stroke="#3B82F6" strokeWidth="0.9" fill="none">
              {/* Río Ebro */}
              <path d="M 620,160 Q 690,260 760,330 T 855,365" />
              {/* Río Tajo */}
              <path d="M 660,380 Q 560,430 460,440 T 360,480" />
              {/* Río Guadalquivir */}
              <path d="M 680,630 Q 560,635 480,660 T 435,720" />
            </g>

            {/* SOLID HIGH-SPEED RAILWAY INFRASTRUCTURE (NO DASHES, NO DOTS) */}
            {/* Corredor 1: Madrid ➔ Zaragoza ➔ Barcelona */}
            <path
              d="M 550,430 Q 720,360 895,280"
              fill="none"
              stroke={activeCityId === 'barcelona' || activeCityId === 'madrid' ? '#A51E2D' : '#78350F'}
              strokeWidth={activeCityId === 'barcelona' ? '3.5' : '2.4'}
              filter={activeCityId === 'barcelona' ? 'url(#routeGlow)' : undefined}
              className="transition-all duration-300"
            />

            {/* Corredor 2: Madrid ➔ Córdoba ➔ Sevilla */}
            <path
              d="M 550,430 Q 480,550 420,675"
              fill="none"
              stroke={activeCityId === 'sevilla' || activeCityId === 'madrid' ? '#A51E2D' : '#78350F'}
              strokeWidth={activeCityId === 'sevilla' ? '3.5' : '2.4'}
              filter={activeCityId === 'sevilla' ? 'url(#routeGlow)' : undefined}
              className="transition-all duration-300"
            />

            {/* Corredor 3: Sevilla ➔ Antequera ➔ Granada */}
            <path
              d="M 420,675 Q 515,690 610,700"
              fill="none"
              stroke={activeCityId === 'granada' || activeCityId === 'sevilla' ? '#D97706' : '#92400E'}
              strokeWidth={activeCityId === 'granada' ? '3.2' : '2.2'}
              filter={activeCityId === 'granada' ? 'url(#routeGlow)' : undefined}
              className="transition-all duration-300"
            />

            {/* Corredor 4: Madrid ➔ Granada Directo (vía Córdoba/Antequera) */}
            <path
              d="M 550,430 Q 580,570 610,700"
              fill="none"
              stroke="#52634D"
              strokeWidth={activeCityId === 'granada' ? '2.8' : '1.8'}
              opacity={activeCityId === 'granada' ? 0.9 : 0.45}
              className="transition-all duration-300"
            />

            {/* Auxiliary Valencia Mediterranean spur */}
            <path
              d="M 550,430 Q 675,470 805,485"
              fill="none"
              stroke="#78350F"
              strokeWidth="1.8"
              opacity="0.4"
            />
            {/* Valencia station node indicator */}
            <circle cx="805" cy="485" r="3" fill="#FBF8F1" stroke="#222522" strokeWidth="1" opacity="0.6" />
            <text x="815" y="489" fontSize="10" fill="#222522" opacity="0.5" className="font-serif">
              Valencia
            </text>

            {/* Zaragoza station node indicator */}
            <circle cx="730" cy="335" r="3" fill="#FBF8F1" stroke="#222522" strokeWidth="1" opacity="0.6" />
            <text x="735" y="330" fontSize="10" fill="#222522" opacity="0.5" className="font-serif">
              Zaragoza
            </text>

            {/* Interactive Station Nodes (Madrid, Barcelona, Sevilla, Granada) */}
            {STATIONS.map((station) => {
              const isActive = activeCityId === station.id;
              return (
                <g
                  key={station.id}
                  className="cursor-pointer group"
                  onClick={() => handleStationClick(station.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Seleccionar estación de alta velocidad en ${station.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleStationClick(station.id);
                    }
                  }}
                >
                  {/* Active glowing beacon ring */}
                  {isActive && (
                    <circle
                      cx={station.coords.x}
                      cy={station.coords.y}
                      r="16"
                      fill="#A51E2D"
                      opacity="0.2"
                      className="animate-ping"
                    />
                  )}

                  {/* Outer Station Marker */}
                  <circle
                    cx={station.coords.x}
                    cy={station.coords.y}
                    r={isActive ? 8.5 : 6}
                    fill={isActive ? '#A51E2D' : '#FBF8F1'}
                    stroke="#222522"
                    strokeWidth={isActive ? '2.5' : '1.8'}
                    filter={isActive ? 'url(#stationGlow)' : undefined}
                    className="transition-all duration-300 group-hover:scale-125"
                  />

                  {/* Core bullseye */}
                  <circle
                    cx={station.coords.x}
                    cy={station.coords.y}
                    r={isActive ? 3.5 : 2.5}
                    fill={isActive ? '#E2B342' : '#A51E2D'}
                  />

                  {/* Typography: Premium Serif City Label matching site */}
                  <text
                    x={station.coords.x}
                    y={station.id === 'granada' ? station.coords.y + 24 : station.coords.y - 14}
                    textAnchor="middle"
                    fontSize={isActive ? '17' : '14'}
                    fontWeight={isActive ? '900' : '700'}
                    fill={isActive ? '#A51E2D' : '#222522'}
                    className="font-serif tracking-tight select-none transition-all duration-300"
                  >
                    {station.name}
                  </text>

                  {/* Subtext elevation / code */}
                  <text
                    x={station.coords.x}
                    y={station.id === 'granada' ? station.coords.y + 36 : station.coords.y - 2}
                    textAnchor="middle"
                    fontSize="9.5"
                    fill={isActive ? '#52634D' : '#222522'}
                    opacity={isActive ? 0.9 : 0.6}
                    className="font-mono uppercase tracking-wider select-none"
                  >
                    {station.elevation}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right Column: Station Editorial Info (100% Borderless, Sitting Directly on Canvas) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Official Registry Badge */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#A51E2D]" />
              <span>{activeStation.officialRef} · Registro Oficial</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
              {activeStation.name}
            </h3>
            <p className="text-xs font-mono text-[#52634D] font-semibold">
              {activeStation.region}
            </p>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#A51E2D] leading-snug">
            {activeStation.tagline}
          </p>

          <p className="text-xs sm:text-sm text-[#222522]/80 leading-relaxed font-sans">
            {activeStation.station}
          </p>

          {/* Key Transit Metrics (Clean Typographic Grid, No Boxes) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#A51E2D] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#222522] block">
                  Velocidad & Duración del Trayecto:
                </span>
                <p className="text-sm text-[#222522]/90 font-medium">
                  {activeStation.aveTime}
                </p>
                <span className="text-xs text-[#52634D] font-mono">
                  {activeStation.speed}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Train className="w-5 h-5 text-[#52634D] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#222522] block">
                  Enlace Ferroviario Directo:
                </span>
                <p className="text-sm text-[#222522]/90 font-medium">
                  {activeStation.distance}
                </p>
                <span className="text-xs text-[#52634D] font-mono">
                  Altitud: {activeStation.elevation}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E2B342] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#222522] block">
                  Hito Cultural Principal:
                </span>
                <p className="text-sm text-[#222522]/90 font-medium">
                  {activeStation.feature}
                </p>
              </div>
            </div>
          </div>

          {/* Action Link to City Monograph (Clean Borderless Button) */}
          <div className="pt-4 flex items-center justify-between gap-4">
            <span className="text-xs text-[#52634D] italic font-serif">
              «Vía de Alta Velocidad Española»
            </span>

            <Tooltip
              spanishPrompt={`«¡Explorar ${activeStation.name}! 🏛️»`}
              content={`Open complete destination guide and attractions for ${activeStation.name}`}
            >
              <button
                onClick={() => onSelectCity && onSelectCity(activeStation.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A51E2D] text-[#FBF8F1] text-xs font-bold rounded-xl hover:bg-[#861A27] transition-colors"
              >
                <span>Ver Guía de {activeStation.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
