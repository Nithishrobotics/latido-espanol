import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export interface HeritageDetailSection {
  label: string;
  text: string;
}

export interface HeritageDetail {
  eyebrow: string;
  title: string;
  sections: HeritageDetailSection[];
}

interface HeritageCardDetailsProps {
  detail: HeritageDetail | null;
  closeLabel: string;
  onClose: () => void;
}

export const HeritageCardDetails: React.FC<HeritageCardDetailsProps> = ({ detail, closeLabel, onClose }) => {
  useEffect(() => {
    if (!detail) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [detail, onClose]);

  if (!detail) return null;

  return createPortal((
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="heritage-detail-title"
      style={{ position: 'fixed', inset: 0, zIndex: 120 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[120] flex items-end justify-center overflow-y-auto bg-[#171513]/75 p-3 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <article className="my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-[#FBF8F1] text-[#222522] shadow-2xl ring-1 ring-black/10">
        <header className="flex items-start justify-between gap-4 border-b border-[#222522]/10 px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A51E2D]">{detail.eyebrow}</p>
            <h2 id="heritage-detail-title" className="mt-2 font-serif text-2xl font-black leading-tight sm:text-3xl">{detail.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="shrink-0 rounded-full p-2 text-[#52634D] transition hover:bg-[#A51E2D]/10 hover:text-[#A51E2D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>
        <div className="space-y-4 px-5 py-5 sm:px-7 sm:py-6">
          {detail.sections.map((section, index) => (
            <section key={`${section.label}-${index}`} className="rounded-2xl border border-[#222522]/10 bg-white p-4 sm:p-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#52634D]">{section.label}</h3>
              <p className="mt-2 text-sm leading-6 text-[#222522]/85 sm:text-base sm:leading-7">{section.text}</p>
            </section>
          ))}
          <button
            type="button"
            onClick={onClose}
            className="mt-1 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#A51E2D] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#861A27] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D] focus-visible:ring-offset-2"
          >
            {closeLabel}
          </button>
        </div>
      </article>
    </div>
  ), document.body);
};
