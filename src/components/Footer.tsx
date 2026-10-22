import React from 'react';
import { NavTab } from './Header';
import { Tooltip } from './Tooltip';
import { ArrowUp, Compass, Heart, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: NavTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121110] text-[#FBF8F1] pt-16 pb-28 sm:pb-32 mt-24 border-t border-white/5">
      <div className="h-0.5 w-full bg-gradient-to-r from-[#A51E2D] via-[#E2B342] to-[#0284C7] mb-12 -mt-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand & Editorial Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#A51E2D] to-[#BA6649] text-[#FBF8F1] flex items-center justify-center font-serif font-black text-sm">
                RE
              </div>
              <span className="text-2xl font-serif font-black tracking-tight text-[#FBF8F1]">
                RUMBO ESPAÑA
              </span>
            </div>
            <p className="font-serif italic text-lg text-[#E2B342]">
              «No solo visites España. Siéntela.»
            </p>
            <p className="text-sm text-[#FBF8F1]/75 leading-relaxed max-w-md">
              Publicación digital independiente concebida para acercar al viajero a la autenticidad peninsular: arquitectura, gastronomía, fiestas, juegos tradicionales, literatura y aprendizaje vivo del español.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E2B342] font-mono pt-1">
              <span>Alta Velocidad AVE</span>
              <span aria-hidden="true">·</span>
              <span>Patrimonio UNESCO</span>
              <span aria-hidden="true">·</span>
              <span>Gastronomía Mediterránea</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E2B342] font-bold">
              Secciones Principales
            </h4>
            <ul className="space-y-2 text-sm text-[#FBF8F1]/80">
              <li>
                <button
                  onClick={() => handleSelectTab('inicio')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Portada Editorial y Red Ferroviaria
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('destinos')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Destinos: Madrid, Barcelona, Sevilla y Granada
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('sabores')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Sabores y Simulador de Comanda de Tapas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('cultura')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Cultura: Fallas, Tomatina y Flamenco
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('sonidos')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Sonidos de España: Guitarra, Flamenco y Paisajes Sonoros
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('deportes')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Deportes: juegos tradicionales e historia deportiva
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('literatura')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Literatura: épocas, géneros y lenguas de España
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('planifica')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Planificador de Itinerario a Medida y Presupuesto Renfe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('idioma')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Habla Español: Frases con Audio y Cuestionario
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectTab('mundo')}
                  className="hover:text-[#E2B342] transition-colors"
                >
                  Más Allá: culturas del mundo hispanohablante
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E2B342] font-bold">
              Enfoque Cultural
            </h4>
            <p className="text-xs text-[#FBF8F1]/70 leading-relaxed">
              Distinguiendo siempre la diversidad regional de España: la sobriedad castellana de Madrid, la arquitectura modernista catalana, las huertas de Valencia y la pasión flamenca y mudéjar de Andalucía.
            </p>
            <div className="pt-2 text-xs text-[#FBF8F1]/60">
              <span className="text-[#E2B342] font-semibold block mb-1">Fuentes Verificadas:</span>
              <span>Turespaña · Renfe Operadora · UNESCO · Patronato de la Alhambra</span>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF8F1]/60">
          <div className="flex items-center gap-2">
            <span>© 2026 Rumbo España</span>
            <span aria-hidden="true">·</span>
            <span>Edición Digital de Viajes y Cultura Española</span>
          </div>

          <Tooltip
            spanishPrompt="«¡Hacia arriba! ⬆️»"
            content="Smoothly scroll back to the top of the page"
          >
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FBF8F1]/10 hover:bg-[#FBF8F1]/20 text-[#FBF8F1] rounded-lg text-xs font-bold transition-colors"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};
