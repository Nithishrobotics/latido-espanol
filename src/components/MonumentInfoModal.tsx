import React, { useEffect } from 'react';
import { X, Landmark, MapPin, Sparkles, Calendar, BookOpen } from 'lucide-react';
import { MonumentItem } from '../data/monumentsData';

interface MonumentInfoModalProps {
  isOpen: boolean;
  monument: MonumentItem | null;
  onClose: () => void;
}

export const MonumentInfoModal: React.FC<MonumentInfoModalProps> = ({
  isOpen,
  monument,
  onClose
}) => {
  // Close modal on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !monument) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="monument-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white text-[#222522] rounded-3xl shadow-2xl overflow-hidden border border-black/10 transition-all transform scale-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Borderless Top Image Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#121110]">
          <img
            src={monument.imageUrl}
            alt={monument.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white/80 cursor-pointer"
            aria-label="Cerrar información del monumento"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title on image bottom */}
          <div className="absolute bottom-4 left-6 right-6 z-10 space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#A51E2D] text-white text-xs font-mono uppercase tracking-wider font-semibold">
              <Landmark className="w-3 h-3" />
              <span>{monument.category}</span>
            </div>
            <h2
              id="monument-modal-title"
              className="text-2xl sm:text-3xl font-serif font-black text-white leading-tight tracking-tight drop-shadow-sm"
            >
              {monument.name}
            </h2>
          </div>
        </div>

        {/* Modal Body: Elegant Informational Paragraph */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Location & Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-black/60 border-b border-black/5 pb-4">
            <div className="flex items-center gap-1.5 font-medium text-[#222522]">
              <MapPin className="w-3.5 h-3.5 text-[#A51E2D]" />
              <span>{monument.location}, {monument.region}</span>
            </div>
            {monument.historicalPeriod && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#52634D]" />
                <span>{monument.historicalPeriod}</span>
              </div>
            )}
            {monument.architecturalStyle && (
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#BA6649]" />
                <span>{monument.architecturalStyle}</span>
              </div>
            )}
          </div>

          {/* The Informational Paragraph */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg font-serif italic text-black/80 leading-relaxed border-l-2 border-[#E2B342] pl-4">
              «{monument.caption}»
            </p>
            <p className="text-sm sm:text-base font-sans text-[#222522]/90 leading-relaxed">
              {monument.historicalOverview}
            </p>
          </div>

          {/* Curiosity card */}
          {monument.curiosity && (
            <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-black/5 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#E2B342] shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-xs font-sans">
                <span className="font-bold text-[#222522] uppercase tracking-wider block">
                  Dato Singular de Interés
                </span>
                <span className="text-black/70 leading-relaxed block">
                  {monument.curiosity}
                </span>
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#222522] hover:bg-[#A51E2D] text-white text-xs font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Cerrar Reseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
