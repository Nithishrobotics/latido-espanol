import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { Tooltip } from './Tooltip';

export type NavTab = 'inicio' | 'destinos' | 'sabores' | 'cultura' | 'sonidos' | 'deportes' | 'literatura' | 'planifica' | 'idioma' | 'mundo';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; spanishPrompt: string; englishDesc: string }[] = [
    {
      id: 'inicio',
      label: 'Inicio',
      spanishPrompt: '«¡Bienvenidos a España! ☀️»',
      englishDesc: 'Return to the main editorial cover and railway map'
    },
    {
      id: 'destinos',
      label: 'Destinos',
      spanishPrompt: '«¡Vamos de viaje! 🏛️»',
      englishDesc: 'Explore Madrid, Barcelona, Sevilla & Granada'
    },
    {
      id: 'sabores',
      label: 'Sabores',
      spanishPrompt: '«¡Buen provecho! 🥘»',
      englishDesc: 'Discover authentic tapas, paella & the order simulator'
    },
    {
      id: 'cultura',
      label: 'Cultura',
      spanishPrompt: '«¡Viva la fiesta! 💃»',
      englishDesc: 'Explore Las Fallas, Tomatina & Andalusian Flamenco'
    },
    {
      id: 'sonidos',
      label: 'Sonidos',
      spanishPrompt: '«¡El alma de la música! 🎸»',
      englishDesc: 'Experience the music, flamenco rhythms, and soundscapes of Spain'
    },
    {
      id: 'deportes',
      label: 'Deportes',
      spanishPrompt: '«¡Que empiece el juego! 🏟️»',
      englishDesc: 'Discover regional games and the history of sport in Spain'
    },
    {
      id: 'literatura',
      label: 'Literatura',
      spanishPrompt: '«Una historia en cada página»',
      englishDesc: 'Explore Spanish literature, languages, genres and reading paths'
    },
    {
      id: 'planifica',
      label: 'Planifica',
      spanishPrompt: '«¡A preparar la maleta! 🧳»',
      englishDesc: 'Customizable day-by-day itinerary & travel budget calculator for any duration'
    },
    {
      id: 'idioma',
      label: 'Habla Español',
      spanishPrompt: '«¡Hablemos español! 🗣️»',
      englishDesc: 'Practice travel phrases with audio and interactive quiz'
    },
    {
      id: 'mundo',
      label: 'Más Allá',
      spanishPrompt: '«¡Cruzando el océano! 🌎»',
      englishDesc: 'Explore cultural traditions and language varieties across the Spanish-speaking world'
    }
  ];

  const handleTabClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-colors shadow-xs">
      {/* Spanish tourism color ribbon */}
      <div className="brand-ribbon" />

      <div className="w-full max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-16 sm:h-20">
          {/* Zone 1: Brand wordmark with Mediterranean ceramic seal */}
          <div className="shrink-0 flex items-center mr-2 sm:mr-4">
            <button
              onClick={() => handleTabClick('inicio')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus-visible:outline-none cursor-pointer"
              aria-label="Rumbo España - Portada"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#A51E2D] via-[#BA6649] to-[#E2B342] text-[#FBF8F1] flex items-center justify-center font-serif font-black text-sm group-hover:scale-105 transition-transform overflow-hidden shadow-sm shrink-0">
                <span className="relative z-10">RE</span>
                <div className="absolute inset-0 bg-radial from-[#E2B342]/30 to-transparent pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl xl:text-xl 2xl:text-2xl font-serif font-black tracking-tight text-[#A51E2D] group-hover:text-[#861A27] transition-colors whitespace-nowrap leading-tight">
                  RUMBO ESPAÑA
                </span>
                <span className="text-[10px] tracking-widest text-[#52634D] uppercase font-sans font-bold whitespace-nowrap hidden 2xl:block leading-tight">
                  No solo visites España. Siéntela.
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links with Dual-Language Interactive Tooltips */}
          <nav
            aria-label="Navegación principal"
            className="hidden xl:flex items-center gap-0.5 2xl:gap-1 text-sm font-medium text-[#222522]/80 shrink-0"
          >
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <Tooltip
                  key={item.id}
                  spanishPrompt={item.spanishPrompt}
                  content={item.englishDesc}
                  position="bottom"
                >
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className={`relative py-1.5 px-1.5 2xl:px-2 transition-all whitespace-nowrap shrink-0 text-[11px] 2xl:text-xs font-bold uppercase tracking-wider rounded-md cursor-pointer ${
                      isActive
                        ? 'text-[#A51E2D] bg-[#A51E2D]/5'
                        : 'text-[#222522]/75 hover:text-[#222522] hover:bg-gray-100/70'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-[#A51E2D] rounded-full" />
                    )}
                  </button>
                </Tooltip>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Planificar Viaje CTA - 100% visible, no duplicate chatbot) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto pr-1">
            {/* Planificar Viaje Button - Completely visible with ample room on all screens */}
            <Tooltip
              spanishPrompt="«¡Organiza tu viaje soñado! 🚆»"
              content="Open Flexible Itinerary and Budget Calculator"
              position="bottom"
            >
              <button
                onClick={() => handleTabClick('planifica')}
                aria-label="Planificar viaje"
                className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap shrink-0 bg-[#A51E2D] hover:bg-[#861A27] text-white shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E2B342]" />
                <span className="hidden sm:inline">Planificar Viaje</span>
                <span className="sm:hidden text-xs">Planificar</span>
              </button>
            </Tooltip>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 rounded-lg text-[#222522] hover:bg-gray-100 transition-colors focus-visible:outline-none shrink-0"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white px-4 pt-3 pb-6 border-t border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#A51E2D]/10 text-[#A51E2D] font-bold'
                      : 'text-[#222522] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col text-left">
                    <span>{item.label}</span>
                    <span className="text-xs text-[#52634D] italic font-serif">
                      {item.spanishPrompt}
                    </span>
                  </div>
                  <span className="text-xs text-[#A51E2D] font-medium">➔</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
