import React from 'react';
import { TravelDossier } from '../data/unifiedDestinationsData';
import { Bed, Utensils, Train, Calculator, Sparkles, Building2 } from 'lucide-react';

interface MiniTravelDossierProps {
  destinationName: string;
  dossier: TravelDossier;
}

export const MiniTravelDossier: React.FC<MiniTravelDossierProps> = ({
  destinationName,
  dossier
}) => {
  if (!dossier) return null;

  return (
    <div className="pt-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D] font-bold">
          <Calculator className="w-4 h-4 text-[#A51E2D]" />
          <span>DOSSIER DE VIAJE · LOGÍSTICA EDITORIAL</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
          Estancia Sugerida y Presupuesto en {destinationName}
        </h3>
        <p className="text-xs sm:text-sm text-[#222522]/80 max-w-3xl leading-relaxed">
          Estimaciones realistas de viaje diario basadas en estancias de calidad y gastronomía tradicional peninsular.
        </p>
      </div>

      {/* Mini Dossier Grid: 2 Clean Editorial Columns (No Bulky Cards or Heavy Borders) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-2 border-t border-[#222522]/10">
        {/* Left Column: Estancia Sugerida (Hotel & Neighborhood Strategy) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A51E2D] font-bold">
            <Building2 className="w-4 h-4 text-[#A51E2D]" />
            <span>Estancia Sugerida</span>
          </div>

          <p className="text-sm text-[#222522]/90 leading-relaxed font-sans">
            {dossier.recommendedStays}
          </p>

          <div className="space-y-3 pt-1">
            {dossier.hotelZones.map((zone, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-xs font-serif font-bold text-[#222522]">
                  {zone.title}
                </span>
                <p className="text-xs text-[#222522]/75 leading-relaxed">
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Presupuesto Estimado / Día (Dual Currency € / $ Breakdown) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#52634D] font-bold">
              <Sparkles className="w-4 h-4 text-[#E2B342]" />
              <span>Presupuesto Estimado / Día (Por Persona)</span>
            </div>
            <span className="text-xs font-mono text-[#222522]/60">
              Monedas: EUR (€) · USD ($)
            </span>
          </div>

          {/* Three Expense Categories + Total Strip */}
          <div className="space-y-3">
            {/* 1. Hospedaje */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2 border-b border-[#222522]/5">
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#A51E2D] shrink-0" />
                <span className="text-xs font-bold text-[#222522]">Hospedaje</span>
                <span className="text-xs text-[#222522]/60 hidden sm:inline">
                  ({dossier.dailyBudget.accommodation.note})
                </span>
              </div>
              <div className="text-xs font-mono tabular-nums text-right font-bold text-[#222522]">
                <span>{dossier.dailyBudget.accommodation.eur}</span>
                <span className="text-black/40 mx-2">/</span>
                <span className="text-[#52634D]">{dossier.dailyBudget.accommodation.usd}</span>
              </div>
            </div>

            {/* 2. Tapeo & Comidas */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2 border-b border-[#222522]/5">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#52634D] shrink-0" />
                <span className="text-xs font-bold text-[#222522]">Tapeo y Comidas</span>
                <span className="text-xs text-[#222522]/60 hidden sm:inline">
                  ({dossier.dailyBudget.dining.note})
                </span>
              </div>
              <div className="text-xs font-mono tabular-nums text-right font-bold text-[#222522]">
                <span>{dossier.dailyBudget.dining.eur}</span>
                <span className="text-black/40 mx-2">/</span>
                <span className="text-[#52634D]">{dossier.dailyBudget.dining.usd}</span>
              </div>
            </div>

            {/* 3. Transportes Locales */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2 border-b border-[#222522]/5">
              <div className="flex items-center gap-2">
                <Train className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span className="text-xs font-bold text-[#222522]">Transportes Locales</span>
                <span className="text-xs text-[#222522]/60 hidden sm:inline">
                  ({dossier.dailyBudget.transit.note})
                </span>
              </div>
              <div className="text-xs font-mono tabular-nums text-right font-bold text-[#222522]">
                <span>{dossier.dailyBudget.transit.eur}</span>
                <span className="text-black/40 mx-2">/</span>
                <span className="text-[#52634D]">{dossier.dailyBudget.transit.usd}</span>
              </div>
            </div>

            {/* Total Indicator */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#A51E2D]">
                Total Diario Estimado:
              </span>
              <div className="text-sm font-mono font-black tabular-nums text-right text-[#A51E2D]">
                <span>{dossier.dailyBudget.total.eur}</span>
                <span className="text-[#222522]/40 mx-2">/</span>
                <span className="text-[#52634D]">{dossier.dailyBudget.total.usd}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
