import React, { useRef } from 'react';
import { SecretSpot } from '../data/unifiedDestinationsData';
import { Compass, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';

interface RinconesSecretosCarouselProps {
  destinationName: string;
  spots: SecretSpot[];
}

export const RinconesSecretosCarousel: React.FC<RinconesSecretosCarouselProps> = ({
  destinationName,
  spots
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  if (!spots || spots.length === 0) return null;

  return (
    <div className="space-y-6 pt-4">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
            <Compass className="w-4 h-4 text-[#E2B342]" />
            <span>RINCONES SECRETOS · EXCURSIONES FUERA DE RUTA</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
            Escapadas Cercanas y Pueblos con Encanto
          </h3>
          <p className="text-xs sm:text-sm text-[#222522]/80 max-w-2xl leading-relaxed">
            Lugares auténticos a tiro de piedra de {destinationName} que las guías tradicionales suelen pasar por alto.
          </p>
        </div>

        {/* Minimal Scroll Arrows */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={handleScrollLeft}
            className="p-2 rounded-xl text-[#222522] hover:bg-[#222522]/10 transition-colors"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleScrollRight}
            className="p-2 rounded-xl text-[#222522] hover:bg-[#222522]/10 transition-colors"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Side-Scrolling Carousel Container (Borderless, Zero-Pill) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory focus:outline-none scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {spots.map((spot) => (
          <div
            key={spot.id}
            className="group flex-shrink-0 w-[290px] sm:w-[340px] snap-start space-y-3 cursor-pointer"
          >
            {/* Borderless Photo Vignette with Smooth Hover Zoom */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#121110]">
              <img
                src={spot.imageUrl}
                alt={spot.name}
                className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="pop-sun-glare pointer-events-none" />
              <div className="pop-film-fade pointer-events-none" />

              {/* Minimalist Distance Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-xs font-mono text-[#E2B342] font-bold uppercase tracking-wider bg-[#121110]/80 px-2.5 py-1 rounded-md">
                  {spot.distance}
                </span>
              </div>

              {/* Bottom Village Name on Photo */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                <span className="font-serif font-bold text-lg leading-tight block drop-shadow-sm">
                  {spot.name}
                </span>
              </div>
            </div>

            {/* Brief 1-Sentence Cultural Note Directly on Cream Canvas */}
            <p className="text-xs sm:text-sm text-[#222522]/85 leading-relaxed font-sans">
              {spot.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
