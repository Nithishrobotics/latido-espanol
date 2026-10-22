import React from 'react';
import { GUIDE_LANGUAGES, GuideLanguage } from '../data/heritageGuidesData';

interface GuideLanguageSwitchProps {
  language: GuideLanguage;
  onChange: (language: GuideLanguage) => void;
}

export const GuideLanguageSwitch: React.FC<GuideLanguageSwitchProps> = ({ language, onChange }) => (
  <div className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#222522]/10 bg-white p-1 shadow-sm" aria-label="Idioma de la guía">
    {GUIDE_LANGUAGES.map((option) => (
      <button
        key={option.id}
        type="button"
        onClick={() => onChange(option.id)}
        aria-pressed={language === option.id}
        className={`rounded-lg px-3 py-2 text-xs font-bold transition-colors ${language === option.id ? 'bg-[#A51E2D] text-white shadow-sm' : 'text-[#52634D] hover:bg-[#52634D]/10'}`}
      >
        {option.label}
      </button>
    ))}
  </div>
);
