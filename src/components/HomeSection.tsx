import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavTab } from './Header';
import { AudioPronounceButton } from './AudioPronounceButton';
import { Tooltip } from './Tooltip';
import { MONUMENTS_AND_NATURE, MonumentOrNature } from '../data/monumentsAndNatureData';
import { MonumentModal } from './MonumentModal';
import {
  ArrowRight,
  Sparkles,
  Camera,
  Landmark,
  Train,
  Info,
  Compass
} from 'lucide-react';

interface HomeSectionProps {
  onSelectTab: (tab: NavTab) => void;
  onSelectCity: (cityId: string) => void;
}

// Living rituals of Spain
const LIVING_RITUALS = [
  {
    id: 'sobremesa',
    title: 'La Sagrada Sobremesa',
    subtitle: 'El tiempo suspendido tras el almuerzo',
    desc: 'Una hora o más conversando pausadamente tras terminar los postres y el café, donde el reloj se detiene y la compañía es el único propósito vital.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Mesa con copas de vino, café y sobremesa animada bajo luz de tarde'
  },
  {
    id: 'tapeo',
    title: 'El Paseo del Tapeo',
    subtitle: 'Nómadas del bocado y la barra',
    desc: 'Ir de taberna en taberna de pie ante el mostrador, pidiendo una caña y una tapa diferente en cada parada: de la gilda al torrezno crujiente.',
    imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Barra de bar tradicional con tapas variadas y copas de vino'
  },
  {
    id: 'paseo',
    title: 'El Paseo Vespertino',
    subtitle: 'El reencuentro cívico al atardecer',
    desc: 'Al caer la tarde cuando el sol afloja, pueblos y avenidas se llenan de familias y paseantes que salen a saludar a los vecinos y ver la vida pasar.',
    imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Calles empedradas con gente paseando al caer la tarde dorada'
  },
  {
    id: 'tertulia',
    title: 'La Tertulia Viva',
    subtitle: 'La pasión por la palabra',
    desc: 'El calor de la conversación viva, el debate apasionado y la hospitalidad cordial que acoge al forastero como a un amigo de toda la vida.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Grupo de amigos compartiendo charla y risas en terraza mediterránea'
  }
];

// Highlighted featured destinations for direct discovery
const FEATURED_CITY_GATEWAYS = [
  {
    id: 'madrid',
    name: 'Madrid',
    region: 'Comunidad de Madrid',
    badge: 'Capital Imperial',
    trainTime: 'Hub radial AVE España',
    highlight: 'Gran Vía y Triángulo del Arte',
    desc: 'Palacios de los Austrias, pinacotecas supremas y el rito del vermú de grifo con gildas.',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    region: 'Catalunya',
    badge: 'Vanguardia Modernista',
    trainTime: '2h 30m desde Madrid en AVE',
    highlight: 'Sagrada Família y Barrio Gótico',
    desc: 'Las ondulaciones gaudinianas, las brisas del Mediterráneo y el mercado de La Boqueria.',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sevilla',
    name: 'Sevilla',
    region: 'Andalucía',
    badge: 'Cuna del Duende',
    trainTime: '2h 20m desde Madrid en AVE',
    highlight: 'Plaza de España y Giralda',
    desc: 'Patios de naranjos en flor, azulejos de Triana y la pasión honda del cante flamenco.',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'san-sebastian',
    name: 'San Sebastián',
    region: 'País Vasco (Euskadi)',
    badge: 'Templo Gastronómico',
    trainTime: 'Conexión Alvia directa',
    highlight: 'Playa de la Concha y Parte Vieja',
    desc: 'La bahía más aristocrática del Cantábrico y la mayor densidad de estrellas Michelin del planeta.',
    imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80'
  }
];

const SLIDE_INTERVAL_MS = 5000; // 5 seconds per slide

export const HomeSection: React.FC<HomeSectionProps> = ({
  onSelectTab,
  onSelectCity
}) => {
  const [dailyPhraseRevealed, setDailyPhraseRevealed] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMonument, setSelectedMonument] = useState<MonumentOrNature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Swipe / Drag tracking references
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const dragStartXRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const hasMovedRef = useRef<boolean>(false);

  // Navigate forward
  const handleNext = useCallback(() => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % MONUMENTS_AND_NATURE.length);
  }, []);

  // Navigate backward
  const handlePrev = useCallback(() => {
    setActiveSlideIndex(
      (prevIndex) => (prevIndex - 1 + MONUMENTS_AND_NATURE.length) % MONUMENTS_AND_NATURE.length
    );
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    if (isPaused || isModalOpen) return;

    const interval = setInterval(() => {
      handleNext();
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, handleNext]);

  const activeMonument: MonumentOrNature =
    MONUMENTS_AND_NATURE[activeSlideIndex] || MONUMENTS_AND_NATURE[0];

  // Open modal on image click (unless dragging)
  const handleImageClick = () => {
    if (hasMovedRef.current) return;
    setSelectedMonument(activeMonument);
    setIsModalOpen(true);
  };

  // Touch Swipe Handlers (Mobile & Tablet)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
    hasMovedRef.current = false;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
    if (touchStartXRef.current !== null && Math.abs(e.touches[0].clientX - touchStartXRef.current) > 12) {
      hasMovedRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diffX = touchStartXRef.current - touchEndXRef.current;
      if (diffX > 40) {
        // Swiped Left -> Move forward
        handleNext();
      } else if (diffX < -40) {
        // Swiped Right -> Move back
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
    setIsPaused(false);
  };

  // Mouse Drag Handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartXRef.current = e.clientX;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || dragStartXRef.current === null) return;
    if (Math.abs(e.clientX - dragStartXRef.current) > 12) {
      hasMovedRef.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDraggingRef.current && dragStartXRef.current !== null) {
      const diffX = dragStartXRef.current - e.clientX;
      if (diffX > 40) {
        handleNext();
      } else if (diffX < -40) {
        handlePrev();
      }
    }
    isDraggingRef.current = false;
    dragStartXRef.current = null;
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    dragStartXRef.current = null;
    setIsPaused(false);
  };

  return (
    <div className="space-y-20 lg:space-y-28 text-[#222522]">
      {/* 1. BORDERLESS HERO CAROUSEL (MONUMENTS, MOUNTAINS & NATURE ONLY · SWIPE-ONLY · NO ARROWS · NO TEXT OVERLAYS) */}
      <section aria-label="Carrusel fotográfico de monumentos y naturaleza de España">
        <div
          role="region"
          aria-label="Galería táctil deslizable de monumentos españoles. Haz clic para ver información."
          onClick={handleImageClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-3xl overflow-hidden bg-[#121110] select-none cursor-grab active:cursor-grabbing group focus:outline-none focus:ring-2 focus:ring-[#A51E2D] shadow-xl"
          title={`Haz clic para abrir la reseña histórica de ${activeMonument.name}`}
        >
          <div className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] w-full flex flex-col justify-end">
            {/* Pure, Clean Full-Bleed Images with Smooth CSS Crossfade (No Text Overlays, No Buttons Inside) */}
            {MONUMENTS_AND_NATURE.map((item, idx) => {
              const isActive = idx === activeSlideIndex;
              const isNearby =
                Math.abs(idx - activeSlideIndex) <= 1 ||
                (activeSlideIndex === 0 && idx === MONUMENTS_AND_NATURE.length - 1) ||
                (activeSlideIndex === MONUMENTS_AND_NATURE.length - 1 && idx === 0);
              if (!isActive && !isNearby) return null;

              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    className={`w-full h-full object-cover pop-aesthetic-filter transition-transform duration-[6000ms] ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
              );
            })}

            {/* Subtle Sun Glare */}
            <div className="pop-sun-glare z-10 pointer-events-none" />

            {/* Minimal Smooth Progress Line at bottom edge */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-white/15 z-20 overflow-hidden">
              <div
                key={activeSlideIndex}
                className="h-full bg-gradient-to-r from-[#E2B342] to-[#E2B342] animate-slide-progress"
                style={{ animationDuration: `${SLIDE_INTERVAL_MS}ms` }}
              />
            </div>
          </div>
        </div>

        {/* 2. DYNAMIC MINIMAL TEXT BLOCK DIRECTLY BELOW CAROUSEL (ON THE PURE WHITE CANVAS) */}
        <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-6 py-4 px-2 sm:px-4 border-b border-gray-100 pb-8">
          <div className="space-y-1.5 max-w-3xl">
            {/* Monument Name and Location Tag */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
              <Landmark className="w-3.5 h-3.5 text-[#A51E2D]" />
              <span>{activeMonument.name}</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#52634D] font-semibold">
                {activeMonument.location} ({activeMonument.region})
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-500 font-normal">{activeMonument.category}</span>
            </div>

            {/* 1 to 2-line description of the active photo */}
            <p className="text-base sm:text-lg text-[#222522]/90 font-serif leading-relaxed">
              {activeMonument.shortDescription}
            </p>
          </div>

          {/* Interactive Info Action & Slide Indicator */}
          <div className="flex items-center gap-4 self-start md:self-auto shrink-0">
            {/* Slide Dots / Indicator */}
            <div className="flex items-center gap-1.5">
              {MONUMENTS_AND_NATURE.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlideIndex(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    dotIdx === activeSlideIndex
                      ? 'w-6 bg-[#A51E2D]'
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a diapositiva ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Open Detail Modal Trigger */}
            <button
              onClick={() => {
                setSelectedMonument(activeMonument);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#222522] hover:bg-[#A51E2D] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
              aria-label={`Abrir información de ${activeMonument.name}`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Reseña Histórica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Clean borderless modal for clicked carousel image */}
      <MonumentModal
        monument={selectedMonument}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 3. ACCESO RÁPIDO A CIUDADES EMBLEMÁTICAS (DIRECT ACCESS TO DESTINATIONS) */}
      <section className="space-y-8" aria-labelledby="destinos-gateway-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold">
              <Compass className="w-4 h-4 text-[#A51E2D]" />
              <span>DIRECTORIO COMPLETO · 50 CAPITALES PROVINCIALES Y GRANDES HITOS</span>
            </div>
            <h2 id="destinos-gateway-heading" className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
              Grandes Enclaves Peninsulares
            </h2>
            <p className="text-sm text-[#222522]/80 max-w-2xl font-sans">
              Descubre las capitales históricas de España con sus guías monográficas, mapas GPS, fotografías de alta precisión y dossieres de viaje.
            </p>
          </div>

          <button
            onClick={() => onSelectTab('destinos')}
            className="text-xs font-bold text-[#A51E2D] hover:underline inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>Ver mapa y directorio en Destinos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Open Borderless Destination Gateway Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURED_CITY_GATEWAYS.map((city) => (
            <div
              key={city.id}
              onClick={() => {
                onSelectCity(city.id);
                onSelectTab('destinos');
              }}
              className="group space-y-3 cursor-pointer"
            >
              {/* Borderless Photo Spread */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121110]">
                <img
                  src={city.imageUrl}
                  alt={`Guía de viaje de ${city.name}`}
                  className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
                />
                <div className="pop-sun-glare" />
                <div className="pop-film-fade" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs font-mono text-[#E2B342] font-bold uppercase drop-shadow">
                    {city.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                  <span className="font-serif font-bold text-lg block drop-shadow-md">{city.name}</span>
                  <span className="text-xs text-white/90 font-sans">{city.region}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs font-mono text-[#A51E2D] font-semibold">
                  <Train className="w-3 h-3" />
                  <span>{city.trainTime}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#222522] group-hover:text-[#A51E2D] transition-colors">
                  {city.highlight}
                </h3>
                <p className="text-xs text-[#222522]/75 leading-relaxed line-clamp-2 font-sans">
                  {city.desc}
                </p>
                <div className="pt-1">
                  <span className="text-xs font-bold text-[#A51E2D] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                    <span>Explorar {city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BORDERLESS EDITORIAL "FRASE DEL DÍA" WITH AUDIO */}
      <section className="py-12 px-6 sm:px-12 text-center space-y-6 max-w-4xl mx-auto rounded-3xl bg-gray-50/70 border border-gray-100">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A51E2D] font-bold">
          <Sparkles className="w-4 h-4 text-[#E2B342]" />
          <span>Frase del Día para el Viajero</span>
        </div>

        <h3 className="text-3xl sm:text-5xl font-serif font-black text-[#222522] leading-tight">
          «Una mesa para dos en la terraza, por favor.»
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
          <AudioPronounceButton
            phrase="Una mesa para dos en la terraza, por favor"
            size="md"
            label="Escuchar pronunciación"
            spanishPrompt="«¡Escucha el acento castellano! 🎙️»"
          />

          <button
            onClick={() => setDailyPhraseRevealed(!dailyPhraseRevealed)}
            className="text-xs font-bold text-[#52634D] hover:text-[#A51E2D] underline underline-offset-4 transition-colors cursor-pointer"
          >
            {dailyPhraseRevealed ? 'Ocultar traducción' : 'Ver traducción y fonética'}
          </button>
        </div>

        {dailyPhraseRevealed && (
          <div className="pt-4 max-w-md mx-auto text-sm space-y-1 animate-in fade-in duration-200">
            <p className="font-serif italic text-lg text-[#A51E2D]">
              «A table for two on the terrace, please.»
            </p>
            <p className="text-xs font-mono text-[#52634D]">
              Fonética: OO-nah MEH-sah PAH-rah dohs ehn lah tehr-RAH-sah, pohr fah-VOHR
            </p>
          </div>
        )}
      </section>

      {/* 5. FIVE VIBRANT MAGAZINE PHOTO ESSAYS */}
      <section className="space-y-10">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold">
            CUADERNO DE VIAJE · EXPEDICIÓN PENINSULAR
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
            Cinco Dimensiones de la Experiencia Española
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Spread 1: Destinos */}
          <div className="group space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121110]">
              <img
                src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80"
                alt="Madrid Gran Vía"
                className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
              />
              <div className="pop-sun-glare" />
              <div className="pop-film-fade" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E2B342] font-bold block mb-1 drop-shadow">
                  CAPÍTULO 01 · GEOGRAFÍA
                </span>
                <span className="font-serif font-bold text-lg block drop-shadow-md">50 Provincias y Capitales</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#222522] group-hover:text-[#A51E2D] transition-colors">
                Destinos Históricos
              </h3>
              <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">
                De las murallas romanas de Lugo y el acueducto de Segovia a la Alhambra nazarí, los alcázares de Toledo y la vanguardia de Bilbao.
              </p>
              <button
                onClick={() => onSelectTab('destinos')}
                className="text-xs font-bold text-[#A51E2D] inline-flex items-center gap-1.5 pt-1 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                <span>Explorar ciudades</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Spread 2: Sabores */}
          <div className="group space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121110]">
              <img
                src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80"
                alt="Paella valenciana tradicional a leña"
                className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
              />
              <div className="pop-sun-glare" />
              <div className="pop-film-fade" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E2B342] font-bold block mb-1 drop-shadow">
                  CAPÍTULO 02 · GASTRONOMÍA
                </span>
                <span className="font-serif font-bold text-lg block drop-shadow-md">Herencia Culinaria Viva</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#222522] group-hover:text-[#A51E2D] transition-colors">
                Sabores y Fogón Tradicional
              </h3>
              <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">
                La técnica artesanal de la paella sobre leña de naranjo, el cuajado de la tortilla de patata y el escanciado de la sidra asturiana.
              </p>
              <button
                onClick={() => onSelectTab('sabores')}
                className="text-xs font-bold text-[#A51E2D] inline-flex items-center gap-1.5 pt-1 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                <span>Descubrir patrimonio culinario</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Spread 3: Cultura */}
          <div className="group space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121110]">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
                alt="Bailaora de flamenco con mantón"
                className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
              />
              <div className="pop-sun-glare" />
              <div className="pop-film-fade" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E2B342] font-bold block mb-1 drop-shadow">
                  CAPÍTULO 03 · TRADICIONES
                </span>
                <span className="font-serif font-bold text-lg block drop-shadow-md">Fallas, Fuego & Flamenco</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#222522] group-hover:text-[#A51E2D] transition-colors">
                Fiestas y Arte Vivo
              </h3>
              <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">
                Las Fallas purificadas por el fuego en Valencia, el frenesí de la Tomatina, la devoción de Semana Santa y el duende flamenco andaluz.
              </p>
              <button
                onClick={() => onSelectTab('cultura')}
                className="text-xs font-bold text-[#A51E2D] inline-flex items-center gap-1.5 pt-1 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                <span>Conocer tradiciones</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Spread 4: Deportes */}
          <div className="group space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121110]">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
                alt="Campo de fútbol preparado para un partido"
                className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
              />
              <div className="pop-sun-glare" />
              <div className="pop-film-fade" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E2B342] font-bold block mb-1 drop-shadow">CAPÍTULO 04 · JUEGO E HISTORIA</span>
                <span className="font-serif font-bold text-lg block drop-shadow-md">Del frontón al estadio</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#222522] group-hover:text-[#A51E2D] transition-colors">Deportes y juegos</h3>
              <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">Pelota vasca, pilota valenciana y lucha canaria: conoce los juegos que cuentan la historia de cada región.</p>
              <button onClick={() => onSelectTab('deportes')} className="text-xs font-bold text-[#A51E2D] inline-flex items-center gap-1.5 pt-1 group-hover:translate-x-1.5 transition-transform cursor-pointer">
                <span>Explorar deportes</span><ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Spread 5: Literatura */}
          <div className="group space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121110]">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
                alt="Estanterías de una biblioteca llena de libros"
                className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
              />
              <div className="pop-sun-glare" />
              <div className="pop-film-fade" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E2B342] font-bold block mb-1 drop-shadow">CAPÍTULO 05 · LIBROS Y LENGUAS</span>
                <span className="font-serif font-bold text-lg block drop-shadow-md">De Mio Cid a nuestros días</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#222522] group-hover:text-[#A51E2D] transition-colors">Literatura española</h3>
              <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">Recorre sus épocas y géneros, y descubre las voces que escriben en las lenguas de España.</p>
              <button onClick={() => onSelectTab('literatura')} className="text-xs font-bold text-[#A51E2D] inline-flex items-center gap-1.5 pt-1 group-hover:translate-x-1.5 transition-transform cursor-pointer">
                <span>Descubrir libros y autores</span><ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMMERSIVE VISUAL ESSAY: "EL ARTE DE VIVIR EN ESPAÑA" */}
      <section className="space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
            FILOSOFÍA COTIDIANA
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
            El Arte de Vivir en España: Cuatro Rituales
          </h3>
          <p className="text-sm text-[#52634D] font-sans">
            Costumbres genuinas que estructuran el día a día en la península ibérica
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIVING_RITUALS.map((ritual, idx) => (
            <div key={ritual.id} className="space-y-3 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#121110]">
                <img
                  src={ritual.imageUrl}
                  alt={ritual.imageAlt}
                  className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
                />
                <div className="pop-sun-glare" />
                <div className="pop-film-fade" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs font-mono text-[#E2B342] font-bold drop-shadow">
                    0{idx + 1}. RITUAL
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                  <span className="font-serif font-bold text-base block drop-shadow-md">{ritual.title}</span>
                  <span className="text-xs text-white/90 font-sans italic">{ritual.subtitle}</span>
                </div>
              </div>

              <p className="text-xs text-[#222522]/80 leading-relaxed pt-1 font-sans">
                {ritual.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
