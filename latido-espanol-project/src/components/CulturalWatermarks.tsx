import React, { useState } from 'react';
import { X, Sparkles, BookOpen, Volume2 } from 'lucide-react';

interface CulturalSymbol {
  id: string;
  name: string;
  spanishSubtitle: string;
  badge: string;
  historicalContext: string;
  culturalLore: string;
  ritualNote: string;
}

const CULTURAL_SYMBOLS: Record<string, CulturalSymbol> = {
  abanico: {
    id: 'abanico',
    name: 'El Abanico Español',
    spanishSubtitle: 'El lenguaje secreto del varillaje de nácar y encaje',
    badge: 'ARTE Y CÓDIGO SOCIAL',
    historicalContext:
      'Aunque el abanico plegable llegó a la península a través de las rutas comerciales marítimas en el siglo XVI, fue en España —y muy especialmente en la Real Fábrica de Abanicos de Valencia fundada en el siglo XVIII— donde se transformó en una cumbre de la artesanía popular europea. Maestros artesanos del nácar, el hueso, la madera de palisandro y el encaje de bolillos crearon piezas singulares que trascendieron la climatización para convertirse en el accesorio cortesano y popular más codiciado.',
    culturalLore:
      'Durante los siglos XVIII y XIX, las damas españolas crearon en los salones y teatros un auténtico "código secreto del abanico" para sortear la estricta vigilancia de carabinas y acompañantes: sostenerlo sobre el corazón significaba amor sincero; abanicarse muy despacio transmitía indiferencia; apoyarlo cerrado sobre los labios era una invitación al silencio cómplice; y dejarlo caer al suelo expresaba la promesa de pertenecerse.',
    ritualNote: 'Valencia y la localidad de Aldaia conservan el gremio artesano abaniquero más antiguo de Europa continental.'
  },
  toro: {
    id: 'toro',
    name: 'La Silueta del Toro Ibérico',
    spanishSubtitle: 'El guardián mitológico de la dehesa y la tierra agreste',
    badge: 'TÓTEM DEL PAISAJE IBÉRICO',
    historicalContext:
      'Desde las pinturas rupestres de la cueva de Altamira y los verracos de granito esculpidos por los pueblos celtíberos hace más de dos mil años, el toro ha sido el símbolo indiscutible de la fuerza telúrica, la fecundidad y el carácter indómito de la península ibérica. Animal sagrado para íberos y tartessos, su imagen está indisolublemente ligada a la supervivencia de la dehesa, el ecosistema agroforestal de encinas y alcornoques más valioso del sur de Europa.',
    culturalLore:
      'En 1956, la colosal silueta negra de chapa diseñada por el artista Manuel Prieto para recortarse sobre las colinas castellanas y andaluzas junto a las carreteras nacionales trascendió cualquier finalidad publicitaria para convertirse, por sentencia del Tribunal Supremo y clamor popular, en Patrimonio Cultural y Artístico de España, fundiéndose como un perfil mitológico en el horizonte ibérico.',
    ritualNote: 'El toro bravo pasta en régimen extensivo libre en dehesas protegidas de más de 500 hectáreas, garantizando la conservación de la flora autóctona.'
  },
  castanuelas: {
    id: 'castanuelas',
    name: 'Las Castañuelas Españolas',
    spanishSubtitle: '«Palillos» de madera noble que marcan el latido del baile',
    badge: 'INSTRUMENTO ANCESTRAL',
    historicalContext:
      'Conocidas cariñosamente en Andalucía como "palillos", las castañuelas son uno de los instrumentos de percusión de entrechoque más antiguos del Mediterráneo. Introducidas en la península por los comerciantes fenicios hace más de tres milenios (siglo X a.C.), se perfeccionaron a través del folclore rural hasta convertirse en el latido rítmico indispensable de la escuela bolera, el flamenco andaluz y las jotas aragonesas y navarras.',
    culturalLore:
      'Talladas artesanalmente en maderas duras y densas como el ébano, granadillo, nogal o tela prensada con resina, las castañuelas siempre se emparejan en dos tonos distintos: la mano derecha sostiene la castañuela "hembra", con una pequeña muesca superior que emite un trino agudo ("carretilla"), mientras la mano izquierda porta el "macho", de resonancia más grave para marcar el compás fundamental.',
    ritualNote: 'Dominar la "carretilla" o repiqueteo veloz de cuatro dedos sobre la madera requiere años de adiestramiento muscular milimétrico.'
  },
  guitarra: {
    id: 'guitarra',
    name: 'La Guitarra Española',
    spanishSubtitle: 'Seis cuerdas que afinan el duende y la melancolía del alma',
    badge: 'VOZ MUSICAL DE ESPAÑA',
    historicalContext:
      'La guitarra española es el instrumento musical más influyente y universal creado en la península ibérica. Descendiente de la vihuela renacentista y de la guitarra barroca de cinco órdenes, fue el célebre luthier almeriense Antonio de Torres en el siglo XIX quien revolucionó su diseño ensanchando la caja de resonancia y disponiendo el varetaje interno en abanico bajo la tapa de abeto, definiendo el canon acústico de la guitarra clásica y flamenca moderna.',
    culturalLore:
      'La guitarra flamenca se diferencia de la clásica por estar construida con madera de ciprés español más ligera y aros más estrechos, lo que genera un sonido percusivo, brillante, seco y cortante ("golpe"), capaz de sobresalir por encima del taconeo del bailaor y del desgarro vocal del cante jondo. Maestros como Andrés Segovia y Paco de Lucía llevaron su resonancia a las mejores salas de concierto del planeta.',
    ritualNote: 'El "golpeador" de plástico transparente sobre la tapa armónica protege la madera de los impactos rítmicos de los dedos del guitarrista.'
  }
};

export const CulturalWatermarks: React.FC = () => {
  const [activeSymbolId, setActiveSymbolId] = useState<string | null>(null);

  const activeSymbol = activeSymbolId ? CULTURAL_SYMBOLS[activeSymbolId] : null;

  return (
    <>
      {/* ========================================================
          FIXED SUBTLE BACKGROUND SVG WATERMARKS (CLICKABLE)
          ======================================================== */}
      <aside
        aria-label="Marcas de agua culturales interactivas"
        className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      >
        {/* 1. Spanish Folding Fan (Abanico) - Left Upper Margin */}
        <div className="absolute left-2 sm:left-4 lg:left-8 top-32 pointer-events-auto">
          <button
            onClick={() => setActiveSymbolId('abanico')}
            className="group relative p-2.5 rounded-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#A51E2D]/40"
            title="Símbolo Cultural: El Abanico Español (Clic para leer su historia)"
            aria-label="Abrir historia cultural del Abanico Español"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#222522]/15 group-hover:text-[#A51E2D] transition-colors duration-300 drop-shadow-sm">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                {/* Fan semicircular arc */}
                <path d="M 12 70 A 45 45 0 0 1 88 70" />
                <path d="M 22 70 A 35 35 0 0 1 78 70" strokeDasharray="3 3" />
                {/* Fan radiating ribs meeting at pivot */}
                <line x1="50" y1="88" x2="12" y2="70" />
                <line x1="50" y1="88" x2="22" y2="48" />
                <line x1="50" y1="88" x2="36" y2="30" />
                <line x1="50" y1="88" x2="50" y2="25" />
                <line x1="50" y1="88" x2="64" y2="30" />
                <line x1="50" y1="88" x2="78" y2="48" />
                <line x1="50" y1="88" x2="88" y2="70" />
                {/* Fan pivot rivet */}
                <circle cx="50" cy="88" r="3.5" fill="currentColor" />
                {/* Lace scallops */}
                <path d="M 12 70 Q 17 62 22 70 Q 27 62 32 70 Q 37 62 42 70 Q 47 62 50 70 Q 53 62 58 70 Q 63 62 68 70 Q 73 62 78 70 Q 83 62 88 70" />
              </svg>
            </div>
            <span className="sr-only">El Abanico Español</span>
            {/* Minimal label tag on hover */}
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider bg-[#222522] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
              Abanico
            </span>
          </button>
        </div>

        {/* 2. Iberian Bull Silhouette (Toro) - Right Mid Margin */}
        <div className="absolute right-2 sm:right-4 lg:right-8 top-1/3 pointer-events-auto">
          <button
            onClick={() => setActiveSymbolId('toro')}
            className="group relative p-2.5 rounded-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#A51E2D]/40"
            title="Símbolo Cultural: La Silueta del Toro Ibérico (Clic para leer su historia)"
            aria-label="Abrir historia cultural del Toro Ibérico"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#222522]/15 group-hover:text-[#A51E2D] transition-colors duration-300 drop-shadow-sm">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                {/* Bull Profile silhouette */}
                {/* Horns */}
                <path d="M 28 26 C 26 18, 33 12, 38 15 C 35 22, 32 25, 30 30" />
                <path d="M 33 28 C 36 20, 42 16, 45 19 C 41 24, 38 27, 36 31" />
                {/* Head, snout and powerful arched neck */}
                <path d="M 24 38 L 22 46 L 27 48 L 30 42 C 32 46, 36 50, 42 50 C 44 45, 48 38, 54 35 C 64 35, 74 38, 82 42 L 86 54 L 84 76 L 80 76 L 80 58 C 76 60, 72 61, 68 61 L 67 76 L 63 76 L 64 61 C 56 61, 48 60, 44 58 L 42 76 L 38 76 L 40 54 C 34 53, 30 50, 26 46 Z" />
                {/* Arched Tail */}
                <path d="M 82 42 C 88 44, 91 50, 90 58 C 89 64, 86 68, 88 72" />
                <circle cx="88" cy="72" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="sr-only">Toro Ibérico</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider bg-[#222522] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
              Toro
            </span>
          </button>
        </div>

        {/* 3. Castanets (Castañuelas) - Left Lower Margin */}
        <div className="absolute left-2 sm:left-4 lg:left-8 bottom-36 pointer-events-auto">
          <button
            onClick={() => setActiveSymbolId('castanuelas')}
            className="group relative p-2.5 rounded-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#A51E2D]/40"
            title="Símbolo Cultural: Las Castañuelas Españolas (Clic para leer su historia)"
            aria-label="Abrir historia cultural de las Castañuelas"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#222522]/15 group-hover:text-[#A51E2D] transition-colors duration-300 drop-shadow-sm">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                {/* Tied cord at the top "orejillas" */}
                <path d="M 44 22 C 47 16, 53 16, 56 22" />
                <path d="M 38 28 C 44 26, 56 26, 62 28" />
                {/* Outer shell contour */}
                <path d="M 42 26 C 26 32, 22 52, 26 66 C 30 78, 44 84, 52 84 C 60 84, 74 78, 78 66 C 82 52, 78 32, 62 26" />
                {/* Inner heart hollow contour */}
                <path d="M 44 38 C 34 44, 32 58, 36 68 C 40 76, 50 78, 52 78 C 54 78, 64 76, 68 68 C 72 58, 70 44, 60 38" />
                {/* Ribbon knot ties */}
                <line x1="50" y1="18" x2="50" y2="28" />
              </svg>
            </div>
            <span className="sr-only">Castañuelas</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider bg-[#222522] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
              Castañuelas
            </span>
          </button>
        </div>

        {/* 4. Spanish Classical Guitar (Guitarra Española) - Right Lower Margin */}
        <div className="absolute right-2 sm:right-4 lg:right-8 bottom-28 pointer-events-auto">
          <button
            onClick={() => setActiveSymbolId('guitarra')}
            className="group relative p-2.5 rounded-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#A51E2D]/40"
            title="Símbolo Cultural: La Guitarra Española (Clic para leer su historia)"
            aria-label="Abrir historia cultural de la Guitarra Española"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#222522]/15 group-hover:text-[#A51E2D] transition-colors duration-300 drop-shadow-sm">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                {/* Headstock & tuning pegs */}
                <path d="M 44 8 L 56 8 L 55 24 L 45 24 Z" />
                <circle cx="41" cy="12" r="1.5" fill="currentColor" />
                <circle cx="41" cy="18" r="1.5" fill="currentColor" />
                <circle cx="59" cy="12" r="1.5" fill="currentColor" />
                <circle cx="59" cy="18" r="1.5" fill="currentColor" />
                {/* Neck & Fretboard */}
                <path d="M 46 24 L 54 24 L 54 44 L 46 44 Z" />
                <line x1="46" y1="30" x2="54" y2="30" />
                <line x1="46" y1="36" x2="54" y2="36" />
                {/* Figure-eight Acoustic Body */}
                <path d="M 46 44 C 36 44, 30 50, 32 58 C 34 64, 40 66, 40 68 C 40 70, 26 74, 28 84 C 30 92, 42 94, 50 94 C 58 94, 70 92, 72 84 C 74 74, 60 70, 60 68 C 60 66, 66 64, 68 58 C 70 50, 64 44, 54 44 Z" />
                {/* Rosette Soundhole */}
                <circle cx="50" cy="56" r="5" />
                {/* Bridge */}
                <rect x="42" y="80" width="16" height="3" rx="1" fill="currentColor" />
              </svg>
            </div>
            <span className="sr-only">Guitarra Española</span>
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider bg-[#222522] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
              Guitarra
            </span>
          </button>
        </div>
      </aside>

      {/* ========================================================
          ELEGANT POPUP MODAL FOR CULTURAL WATERMARKS
          ======================================================== */}
      {activeSymbol && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="watermark-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveSymbolId(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-5 border border-gray-100 text-[#222522] animate-in zoom-in-95 duration-200"
          >
            {/* Header & Close */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#A51E2D]/10 text-[#A51E2D] border border-[#A51E2D]/20">
                  {activeSymbol.badge}
                </span>
                <h3
                  id="watermark-modal-title"
                  className="text-2xl sm:text-3xl font-serif font-black text-[#222522] pt-1"
                >
                  {activeSymbol.name}
                </h3>
                <p className="text-xs font-serif italic text-[#A51E2D]">
                  «{activeSymbol.spanishSubtitle}»
                </p>
              </div>

              <button
                onClick={() => setActiveSymbolId(null)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-[#222522] transition-colors cursor-pointer"
                aria-label="Cerrar explicación cultural"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Historical Narrative */}
            <div className="space-y-3 text-sm text-[#222522]/85 leading-relaxed font-sans border-t border-gray-100 pt-4">
              <p>{activeSymbol.historicalContext}</p>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs sm:text-sm text-[#222522]/90 space-y-1">
                <span className="font-bold text-[#A51E2D] block uppercase tracking-wider text-xs font-mono">
                  Simbología & Arraigo
                </span>
                <p>{activeSymbol.culturalLore}</p>
              </div>
            </div>

            {/* Practical Cultural Lore Note */}
            <div className="flex items-start gap-2.5 text-xs text-gray-600 font-sans border-t border-gray-100 pt-3">
              <Sparkles className="w-4 h-4 text-[#E2B342] shrink-0 mt-0.5" />
              <p className="leading-snug">{activeSymbol.ritualNote}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
