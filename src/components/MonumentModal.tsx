import React, { useEffect } from 'react';
import { X, MapPin, Landmark, Award, Compass } from 'lucide-react';
import { MonumentOrNature } from '../data/monumentsAndNatureData';

interface MonumentModalProps {
  monument: MonumentOrNature | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MonumentModal: React.FC<MonumentModalProps> = ({
  monument,
  isOpen,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !monument) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="monument-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-0 text-[#222522]"
      >
        {/* Borderless Header Image with Pop Glow */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#121110]">
          <img
            src={monument.imageUrl}
            alt={monument.imageAlt}
            className="w-full h-full object-cover pop-aesthetic-filter"
          />
          <div className="pop-sun-glare pointer-events-none" />
          <div className="pop-film-fade pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-[#A51E2D] text-white/90 hover:text-white backdrop-blur-md transition-all shadow-md cursor-pointer"
            aria-label="Cerrar ficha monumental"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Pill on Image */}
          <div className="absolute bottom-4 left-6 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#A51E2D] text-white shadow-sm">
              {monument.categoryBadge}
            </span>
            <span className="text-white/80 text-xs font-mono drop-shadow">
              {monument.location} ({monument.region})
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#A51E2D]" />
              <span>{monument.location}</span>
              <span className="text-gray-300">·</span>
              <span>{monument.region}</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#A51E2D]">{monument.category}</span>
            </div>

            <h2
              id="monument-modal-title"
              className="text-3xl sm:text-4xl font-serif font-black text-[#222522] leading-tight"
            >
              {monument.name}
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-[#A51E2D] leading-relaxed">
              «{monument.shortDescription}»
            </p>
          </div>

          {/* Researched Historical Context Paragraph */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A51E2D] font-bold">
              <Landmark className="w-4 h-4" />
              <span>Memoria e Historia Monumental</span>
            </div>
            <p className="text-sm sm:text-base text-[#222522]/85 leading-relaxed font-sans">
              {monument.fullHistory}
            </p>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#52634D] font-semibold">
                <Compass className="w-3.5 h-3.5 text-[#A51E2D]" />
                <span>Periodo & Época</span>
              </div>
              <p className="text-sm font-semibold text-[#222522]">
                {monument.architecturalEra}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#52634D] font-semibold">
                <Award className="w-3.5 h-3.5 text-[#A51E2D]" />
                <span>Hito Destacado</span>
              </div>
              <p className="text-sm font-semibold text-[#222522]">
                {monument.highlight}
              </p>
            </div>
          </div>

          {monument.unescoStatus && (
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono pt-2 border-t border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#E2B342]" />
              <span>{monument.unescoStatus}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
