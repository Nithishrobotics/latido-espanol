import React, { useEffect } from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  History,
  Lightbulb,
  MapPin,
  Sparkles,
  X
} from 'lucide-react';
import type { SpanishFestival } from '../data/festivalsData';
import { FestivalPhoto } from './FestivalPhoto';

interface FestivalHeritageModalProps {
  festival: SpanishFestival | null;
  onClose: () => void;
  onSelectPrevious: () => void;
  onSelectNext: () => void;
}

export const FestivalHeritageModal: React.FC<FestivalHeritageModalProps> = ({
  festival,
  onClose,
  onSelectPrevious,
  onSelectNext
}) => {
  useEffect(() => {
    if (!festival) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onSelectPrevious();
      if (event.key === 'ArrowRight') onSelectNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [festival, onClose, onSelectNext, onSelectPrevious]);

  if (!festival) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="festival-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#121110]/90 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-8"
    >
      <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#171513] text-[#FBF8F1] shadow-2xl ring-1 ring-white/10">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#E2B342]">
            <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">Fiestas y tradiciones de España</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onSelectPrevious}
              aria-label="Fiesta anterior"
              className="rounded-full p-2 text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B342]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onSelectNext}
              aria-label="Fiesta siguiente"
              className="rounded-full p-2 text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B342]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar historia de la fiesta"
              className="rounded-full p-2 text-white/75 transition hover:bg-[#A51E2D] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B342]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="relative h-64 sm:h-[26rem]">
          <FestivalPhoto festival={festival} className="absolute inset-0" imageClassName="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-9">
            <div className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold text-[#F4D780] backdrop-blur">
              {festival.community}
            </div>
            <h1 id="festival-modal-title" className="max-w-4xl font-serif text-3xl font-black leading-tight text-white drop-shadow sm:text-5xl">
              {festival.name}
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
              {festival.summary}
            </p>
          </div>
        </div>

        <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-white/10 pb-5 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#E2B342]" aria-hidden="true" />{festival.place}</span>
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#E2B342]" aria-hidden="true" />{festival.season}</span>
            </div>

            <section aria-labelledby="festival-history-heading" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E2B342]">
                <History className="h-4 w-4" aria-hidden="true" />
                <h2 id="festival-history-heading">Historia</h2>
              </div>
              <p className="max-w-3xl text-base leading-7 text-white/85 sm:text-lg">{festival.history}</p>
            </section>

            <section aria-labelledby="festival-highlights-heading" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E2B342]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <h2 id="festival-highlights-heading">Qué ver y cómo se celebra</h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {festival.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A51E2D] ring-2 ring-[#A51E2D]/25" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-[#E2B342]/20 bg-[#E2B342]/[0.08] p-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#E2B342]">
                <Lightbulb className="h-4 w-4" aria-hidden="true" />
                <h2>Consejo para visitantes</h2>
              </div>
              <p className="text-sm leading-6 text-white/85">{festival.visitorNote}</p>
            </div>

            <a
              href={festival.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-between gap-3 rounded-xl bg-[#A51E2D] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#bd2938] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B342] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171513]"
            >
              <span>Consultar fuente oficial</span>
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
            <p className="text-xs leading-5 text-white/50">Las fechas son orientativas. Confirma el programa de cada año con la organización local.</p>
          </aside>
        </div>
      </article>
    </div>
  );
};
