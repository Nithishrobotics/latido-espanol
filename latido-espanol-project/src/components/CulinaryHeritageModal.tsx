import React, { useEffect, useState } from 'react';
import { CulinaryHeritageDish, ProcessPhoto } from '../data/culinaryHeritageData';
import { AudioPronounceButton } from './AudioPronounceButton';
import {
  X,
  Flame,
  Sparkles,
  BookOpen,
  Wine,
  Clock,
  Compass,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle2,
  Heart,
  Landmark,
  ScrollText
} from 'lucide-react';

interface CulinaryHeritageModalProps {
  dish: CulinaryHeritageDish | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPrevDish?: () => void;
  onSelectNextDish?: () => void;
}

export const CulinaryHeritageModal: React.FC<CulinaryHeritageModalProps> = ({
  dish,
  isOpen,
  onClose,
  onSelectPrevDish,
  onSelectNextDish
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // Reset active photo index when dish changes
  useEffect(() => {
    setActivePhotoIndex(0);
  }, [dish?.id]);

  // Keyboard navigation: Escape closes modal, Left/Right arrow cycles process photos
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (dish && dish.processPhotos.length > 0) {
          setActivePhotoIndex((prev) => (prev + 1) % dish.processPhotos.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (dish && dish.processPhotos.length > 0) {
          setActivePhotoIndex((prev) => (prev - 1 + dish.processPhotos.length) % dish.processPhotos.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, dish, onClose]);

  if (!isOpen || !dish) return null;

  const currentProcessPhoto: ProcessPhoto | undefined = dish.processPhotos[activePhotoIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Proceso tradicional y patrimonio de ${dish.name}`}
      className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-md overflow-y-auto animate-fadeIn text-[#FBF8F1]"
    >
      {/* Lightbox Shell Container */}
      <div className="min-h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-between">
        {/* 1. Modal Top Bar */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E2B342]">
              <Sparkles className="w-3.5 h-3.5 text-[#E2B342]" />
              <span>PATRIMONIO GASTRONÓMICO · PROCESO TRADICIONAL</span>
              <span className="text-white/40">·</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#A51E2D]/40 text-[#FBF8F1] font-bold">
                {dish.originBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#FBF8F1]">
              {dish.name}
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#E2B342]/90">
              «{dish.spanishTitle}»
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onSelectPrevDish && (
              <button
                onClick={onSelectPrevDish}
                aria-label="Plato anterior"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Plato anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {onSelectNextDish && (
              <button
                onClick={onSelectNextDish}
                aria-label="Plato siguiente"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Plato siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Cerrar modal de patrimonio"
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#A51E2D] text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 2. Process Photography Lightbox Carousel (2 to 3 Authentic Preparation Photos) */}
        <div className="my-8 space-y-4">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] min-h-[280px] sm:min-h-[400px] bg-[#1a1816]">
            {currentProcessPhoto && (
              <>
                <img
                  key={currentProcessPhoto.imageUrl}
                  src={currentProcessPhoto.imageUrl}
                  alt={currentProcessPhoto.title}
                  className="w-full h-full object-cover pop-aesthetic-filter transition-all duration-700 ease-out"
                />
                <div className="pop-sun-glare" />
                <div className="pop-film-fade-hero" />

                {/* Floating Photo Information */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#121110]/85 backdrop-blur-md text-[#E2B342] text-xs font-mono font-bold flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-[#E2B342]" />
                    <span>FASE {activePhotoIndex + 1} DE {dish.processPhotos.length}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#121110]/85 backdrop-blur-md text-white/80 text-xs font-mono">
                    {currentProcessPhoto.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-end justify-between gap-4">
                  <div className="max-w-2xl space-y-1">
                    <h4 className="text-xl sm:text-2xl font-serif font-black text-white drop-shadow-md">
                      {currentProcessPhoto.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#FBF8F1]/90 leading-relaxed drop-shadow-sm font-sans">
                      {currentProcessPhoto.caption}
                    </p>
                  </div>

                  {/* Photo Switcher Navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev - 1 + dish.processPhotos.length) % dish.processPhotos.length)}
                      aria-label="Foto anterior de preparación"
                      className="p-2 rounded-full bg-[#121110]/80 hover:bg-[#A51E2D] text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-white/80 px-2">
                      {activePhotoIndex + 1} / {dish.processPhotos.length}
                    </span>
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev + 1) % dish.processPhotos.length)}
                      aria-label="Foto siguiente de preparación"
                      className="p-2 rounded-full bg-[#121110]/80 hover:bg-[#A51E2D] text-white transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-3 gap-3">
            {dish.processPhotos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                className={`relative rounded-xl overflow-hidden aspect-[16/7] text-left transition-all cursor-pointer ${
                  activePhotoIndex === idx
                    ? 'ring-2 ring-[#E2B342] opacity-100 scale-[1.01]'
                    : 'opacity-50 hover:opacity-85'
                }`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover pop-aesthetic-filter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2 flex flex-col justify-end">
                  <span className="text-xs font-mono text-[#E2B342] uppercase tracking-wider block">
                    Paso {idx + 1}
                  </span>
                  <span className="text-xs font-serif font-bold text-white truncate">
                    {photo.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. NUEVO MÓDULO EDITORIAL: 'HISTORIA Y ARRAIGO' (Antes del Proceso de Cocinado) */}
        {/* Beautifully typeset narrative section so users learn the why and where before the how */}
        <section className="my-6 p-6 sm:p-8 rounded-3xl bg-[#171513] border border-[#E2B342]/20 relative overflow-hidden" aria-labelledby="historia-arraigo-heading">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E2B342]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#E2B342] font-bold">
                <Landmark className="w-4 h-4 text-[#E2B342]" />
                <span id="historia-arraigo-heading">HISTORIA Y ARRAIGO CULTURAL</span>
              </div>
              <span className="text-xs font-mono text-[#E2B342] px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
                {dish.historyAndOrigins.eraOrCentury}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#FBF8F1] leading-tight">
                Génesis, Memoria y Raíces de {dish.name}
              </h3>
              <p className="text-base sm:text-lg text-[#FBF8F1]/90 font-serif leading-relaxed italic pt-1">
                {dish.historyAndOrigins.narrative}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs text-white/80">
              <div className="space-y-1.5">
                <span className="font-mono uppercase text-[#E2B342] font-bold block text-xs tracking-wider">
                  Huella & Evolución Histórica:
                </span>
                <p className="font-sans leading-relaxed text-[#FBF8F1]/85 text-xs sm:text-sm">
                  {dish.historyAndOrigins.culturalEvolution}
                </p>
              </div>

              {dish.historyAndOrigins.anecdoteOrLegend && (
                <div className="space-y-1.5">
                  <span className="font-mono uppercase text-[#E2B342] font-bold block text-xs tracking-wider">
                    Leyenda y Tradición Popular:
                  </span>
                  <p className="font-sans leading-relaxed text-[#FBF8F1]/85 text-xs sm:text-sm">
                    {dish.historyAndOrigins.anecdoteOrLegend}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. Editorial Step-by-Step Artisanal Method & Culinary Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-6 items-start">
          {/* Left Column (7 cols): Step-by-Step Traditional Method */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E2B342] font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>MÉTODO ARTESANAL PASO A PASO</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF8F1]">
                La Receta Canónica y sus Secretos
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                {dish.historicalRoot}
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-6 pt-2">
              {dish.traditionalMethod.map((step) => (
                <div
                  key={step.stepNumber}
                  className="relative pl-10 border-l border-white/15 space-y-2 group"
                >
                  {/* Step Marker */}
                  <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-[#121110] border border-[#E2B342] text-[#E2B342] text-xs font-mono font-bold flex items-center justify-center">
                    {step.stepNumber}
                  </span>

                  <h4 className="text-lg font-serif font-bold text-[#FBF8F1] group-hover:text-[#E2B342] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed font-sans">
                    {step.description}
                  </p>

                  <div className="text-xs font-sans text-[#E2B342] flex items-start gap-1.5 pt-1">
                    <span className="font-mono uppercase font-bold text-xs tracking-wider text-white/60">
                      Consejo del maestro:
                    </span>
                    <span>{step.artisanTip}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Authentic Protected Ingredients */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#E2B342] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E2B342]" />
                <span>Ingredientes Canónicos (Sin Sucedáneos)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-white/85">
                {dish.ingredients.map((ing, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-1 border-b border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E2B342]" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Native Terms, Wine Pairing, and Table Rituals */}
          <div className="lg:col-span-5 space-y-8">
            {/* Native Culinary Vocabulary Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E2B342] font-bold">
                <ScrollText className="w-4 h-4 text-[#E2B342]" />
                <span>Vocabulario Castizo del Fogón</span>
              </div>

              <div className="space-y-3">
                {dish.culinaryTerms.map((term, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="font-serif font-bold text-sm text-[#FBF8F1] block">
                      {term.term}
                    </span>
                    <p className="text-xs text-white/70 leading-relaxed font-sans">
                      {term.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wine Pairing & D.O. */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E2B342] font-bold">
                <Wine className="w-4 h-4 text-[#E2B342]" />
                <span>Maridaje Geográfico de Origen</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-serif font-bold text-[#FBF8F1]">
                  {dish.pairing.beverage}
                </h4>
                <span className="text-xs font-mono text-[#E2B342] block">
                  {dish.pairing.regionDO}
                </span>
                <p className="text-xs text-white/75 leading-relaxed font-sans pt-1">
                  {dish.pairing.note}
                </p>
              </div>
            </div>

            {/* Cultural Ritual & Table Customs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E2B342] font-bold">
                <Heart className="w-4 h-4 text-[#E2B342]" />
                <span>Ritual de Mesa y Costumbres</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-serif font-bold text-[#FBF8F1]">
                  {dish.culturalRitual.title}
                </h4>
                <p className="text-xs text-white/75 leading-relaxed font-sans">
                  {dish.culturalRitual.description}
                </p>
              </div>
            </div>

            {/* Native Ordering Phrase with Audio */}
            <div className="p-6 rounded-2xl bg-[#A51E2D]/20 border border-[#A51E2D]/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E2B342] font-bold">
                  Cómo Pedirlo en la Taberna
                </span>
                <AudioPronounceButton
                  phrase={dish.keyPhrase.spanish}
                  size="sm"
                  spanishPrompt={`«¡Aprende a pedir ${dish.name}! 🎙️»`}
                />
              </div>
              <p className="text-lg font-serif font-bold text-[#FBF8F1]">
                {dish.keyPhrase.spanish}
              </p>
              <p className="text-xs text-white/60 font-mono">
                {dish.keyPhrase.english} · <span className="text-[#E2B342]">{dish.keyPhrase.phonetic}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
