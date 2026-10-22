import React, { useState, useMemo } from 'react';
import {
  CULINARY_HERITAGE_DISHES,
  CULINARY_PILLARS,
  CulinaryHeritageDish
} from '../data/culinaryHeritageData';
import { CulinaryHeritageModal } from './CulinaryHeritageModal';
import { AudioPronounceButton } from './AudioPronounceButton';
import { Tooltip } from './Tooltip';
import {
  Utensils,
  Flame,
  Sparkles,
  Wine,
  Compass,
  BookOpen,
  Camera,
  MapPin,
  Eye,
  Coffee,
  CheckCircle2,
  ChevronRight,
  Info,
  Search,
  ArrowUpDown,
  X
} from 'lucide-react';

type FilterCategory =
  | 'todos'
  | 'ciudad'
  | 'region'
  | 'cuchara'
  | 'arroces'
  | 'asados'
  | 'tapeo'
  | 'mar'
  | 'dulces';

export const FoodSection: React.FC = () => {
  const [activeDishId, setActiveDishId] = useState<string>('paella-valenciana');
  const [filter, setFilter] = useState<FilterCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSortedAZ, setIsSortedAZ] = useState<boolean>(false);
  const [modalDish, setModalDish] = useState<CulinaryHeritageDish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Filter, Search & Deduplicate dishes
  const displayedDishes = useMemo(() => {
    let list = CULINARY_HERITAGE_DISHES.filter((dish) => {
      // Category filter
      if (filter === 'ciudad' && dish.originType !== 'city') return false;
      if (
        filter === 'region' &&
        dish.originType !== 'region' &&
        dish.originType !== 'panhispanic'
      )
        return false;
      if (filter === 'cuchara' && dish.category !== 'Cuchara y Puchero') return false;
      if (filter === 'arroces' && dish.category !== 'Arroces') return false;
      if (filter === 'asados' && dish.category !== 'Asados y Fuegos') return false;
      if (
        filter === 'tapeo' &&
        dish.category !== 'Tapeo y Bocados' &&
        dish.category !== 'Sopas Frías'
      )
        return false;
      if (filter === 'mar' && dish.category !== 'Mar y Costas') return false;
      if (filter === 'dulces' && dish.category !== 'Dulces y Postres') return false;

      // Text Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesTitle = dish.spanishTitle.toLowerCase().includes(query);
        const matchesOrigin = dish.originLocation.toLowerCase().includes(query);
        const matchesRoot = dish.historicalRoot.toLowerCase().includes(query);
        const matchesBadge = dish.originBadge.toLowerCase().includes(query);
        const matchesIngredients = dish.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        return (
          matchesName ||
          matchesTitle ||
          matchesOrigin ||
          matchesRoot ||
          matchesBadge ||
          matchesIngredients
        );
      }

      return true;
    });

    if (isSortedAZ) {
      list = [...list].sort((a, b) =>
        a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
      );
    }

    // Ensure distinct dishes by id so users see the full variety without repetition
    const seen = new Set<string>();
    const uniqueList: CulinaryHeritageDish[] = [];
    for (const item of list) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        uniqueList.push(item);
      }
    }

    return uniqueList;
  }, [filter, searchQuery, isSortedAZ]);

  const activeDish: CulinaryHeritageDish =
    CULINARY_HERITAGE_DISHES.find((d) => d.id === activeDishId) ||
    CULINARY_HERITAGE_DISHES[0];

  const handleOpenModal = (dish: CulinaryHeritageDish) => {
    setActiveDishId(dish.id);
    setModalDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevDishInModal = () => {
    if (!modalDish) return;
    const currentIndex = CULINARY_HERITAGE_DISHES.findIndex((d) => d.id === modalDish.id);
    const prevIndex =
      (currentIndex - 1 + CULINARY_HERITAGE_DISHES.length) % CULINARY_HERITAGE_DISHES.length;
    const prevDish = CULINARY_HERITAGE_DISHES[prevIndex];
    setModalDish(prevDish);
    setActiveDishId(prevDish.id);
  };

  const handleNextDishInModal = () => {
    if (!modalDish) return;
    const currentIndex = CULINARY_HERITAGE_DISHES.findIndex((d) => d.id === modalDish.id);
    const nextIndex = (currentIndex + 1) % CULINARY_HERITAGE_DISHES.length;
    const nextDish = CULINARY_HERITAGE_DISHES[nextIndex];
    setModalDish(nextDish);
    setActiveDishId(nextDish.id);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. Editorial Header (Borderless & Authentic Cultural Heritage Focus) */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D]">
          <span>CAPÍTULO III · ENCICLOPEDIA CULINARIA</span>
          <span aria-hidden="true">·</span>
          <span>SABORES Y TRADICIÓN IBÉRICA</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#A51E2D] font-bold">PATRIMONIO INMATERIAL (A-Z)</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-4xl space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#222522] leading-[1.1]">
              El Fogón Español: Memoria, Tierra y Convivencia
            </h1>
            <p className="text-base sm:text-lg text-[#222522]/85 leading-relaxed">
              En España la cocina es un acto de amor a la tierra y a los tiempos pausados. Lejos de la prisa comercial, cada plato guarda un origen geográfico sagrado —desde ciudades amuralladas con hornos morunos centenarios hasta valles cantábricos de puchero, marismas atlánticas y huertas mediterráneas a fuego de sarmiento. Haz clic en cualquier especialidad para abrir su <em>Historia, Arraigo Cultural y Proceso Tradicional paso a paso</em>.
            </p>
          </div>

        </div>
      </div>

      {/* 2. Interactive Search & Quick Controls Strip */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#222522]/[0.03] border border-[#222522]/10">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#222522]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por plato, ingrediente, ciudad (Madrid, Segovia, Valls, Córdoba...) o región..."
            className="w-full pl-10 pr-10 py-2.5 bg-white/80 border border-[#222522]/15 rounded-xl text-xs sm:text-sm font-sans placeholder:text-[#222522]/40 focus:outline-none focus:ring-2 focus:ring-[#A51E2D]/30 focus:border-[#A51E2D] text-[#222522]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#222522]/50 hover:text-[#222522] transition-colors"
              title="Borrar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* A-Z Sort Toggle */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            onClick={() => setIsSortedAZ(!isSortedAZ)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
              isSortedAZ
                ? 'bg-[#A51E2D] text-white shadow-sm'
                : 'bg-white/80 border border-[#222522]/15 text-[#222522]/70 hover:text-[#222522]'
            }`}
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>{isSortedAZ ? 'Orden: A–Z Activo' : 'Ordenar A–Z'}</span>
          </button>
        </div>
      </div>

      {/* 3. Granular Origin Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 border-b border-[#222522]/10 pb-4 overflow-x-auto">
        <button
          onClick={() => setFilter('todos')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'todos'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>TODOS</span>
          {filter === 'todos' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('ciudad')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'ciudad'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>RAÍZ MUNICIPAL</span>
          {filter === 'ciudad' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('region')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'region'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>RAÍZ REGIONAL</span>
          {filter === 'region' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('cuchara')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'cuchara'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>CUCHARA</span>
          {filter === 'cuchara' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('arroces')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'arroces'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>ARROCES</span>
          {filter === 'arroces' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('asados')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'asados'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>ASADOS & FUEGOS</span>
          {filter === 'asados' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('tapeo')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'tapeo'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>TAPEO & BOCADOS</span>
          {filter === 'tapeo' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('mar')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'mar'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>MAR & COSTAS</span>
          {filter === 'mar' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>

        <button
          onClick={() => setFilter('dulces')}
          className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
            filter === 'dulces'
              ? 'text-[#A51E2D] font-bold'
              : 'text-[#222522]/70 hover:text-[#222522]'
          }`}
        >
          <span>DULCES & POSTRES</span>
          {filter === 'dulces' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A51E2D] rounded-full" />
          )}
        </button>
      </div>

      {/* 4. The Comprehensive Culinary Specialties Grid */}
      {displayedDishes.length === 0 ? (
        <div className="text-center py-16 space-y-3">
          <p className="text-lg font-serif text-[#222522]/60">
            No se encontraron especialidades tradicionales con el término «{searchQuery}».
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilter('todos');
            }}
            className="px-4 py-2 rounded-full bg-[#A51E2D] text-white text-xs font-mono font-bold"
          >
            Restablecer búsqueda
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {displayedDishes.map((dish) => {
            const isSelected = activeDishId === dish.id;
            const isCityOrigin = dish.originType === 'city';

            return (
              <Tooltip
                key={dish.id}
                spanishPrompt={`«¡Descubrir el proceso y raíces de ${dish.name}! 🥘»`}
                content={`Abrir Historia y Arraigo, método tradicional paso a paso y fotografías de ${dish.name}`}
              >
                <div
                  onClick={() => handleOpenModal(dish)}
                  className="w-full text-left space-y-3 group cursor-pointer"
                >
                  {/* Dish Photo Thumbnail with Pop Glare (Borderless) */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#121110]">
                    <img
                      src={dish.imageUrl}
                      alt={dish.imageAlt}
                      className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="pop-sun-glare" />
                    <div className="pop-film-fade" />

                    {/* Granular Origin Badge (City vs Region) */}
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold tracking-wider backdrop-blur-md ${
                        isCityOrigin
                          ? 'bg-[#A51E2D]/90 text-white shadow-sm'
                          : 'bg-[#121110]/85 text-[#E2B342]'
                      }`}
                    >
                      {dish.originBadge}
                    </span>

                    {/* Heritage Process Hover Pill */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-[#222522] text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Flame className="w-3.5 h-3.5 text-[#A51E2D]" />
                        <span>Historia & Proceso →</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-[#52634D]">
                      <span>{dish.category}</span>
                      <span className="truncate max-w-[140px] text-right">
                        {dish.originLocation.split('(')[0]}
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-serif font-bold transition-colors leading-snug ${
                        isSelected
                          ? 'text-[#A51E2D]'
                          : 'text-[#222522] group-hover:text-[#A51E2D]'
                      }`}
                    >
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[#222522]/75 leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>

                    <div className="pt-1 flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[#A51E2D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Historia & Proceso</span>
                        <span aria-hidden="true">→</span>
                      </span>
                      <span className="text-xs text-[#222522]/40">
                        {dish.traditionalMethod.length} pasos
                      </span>
                    </div>
                  </div>
                </div>
              </Tooltip>
            );
          })}
        </div>
      )}

      {/* 5. Featured Cultural Monograph Spread (Borderless Cinematic Showcase) */}
      <div className="space-y-8 pt-6 border-t border-[#222522]/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#52634D]">
              MONOGRAFÍA EDITORIAL DESTACADA
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
              {activeDish.name}
            </h2>
            <p className="font-serif italic text-lg text-[#A51E2D]">
              «{activeDish.spanishTitle}»
            </p>
          </div>

          <button
            onClick={() => handleOpenModal(activeDish)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A51E2D] text-white text-xs font-bold font-mono tracking-wider hover:bg-[#861A27] transition-all cursor-pointer shadow-sm"
          >
            <Flame className="w-4 h-4 text-[#E2B342]" />
            <span>Abrir Historia y Proceso Tradicional</span>
          </button>
        </div>

        {/* Full Panoramic Hero Banner (Clicking opens Lightbox) */}
        <div
          onClick={() => handleOpenModal(activeDish)}
          className="relative w-full min-w-0 rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[24/9] min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-[#121110] cursor-pointer group"
          title="Haz clic para ver la historia, arraigo y método tradicional"
        >
          <img
            key={activeDish.id}
            src={activeDish.imageUrl}
            alt={activeDish.imageAlt}
            className="w-full h-full object-cover pop-aesthetic-filter group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="pop-sun-glare" />
          <div className="pop-film-fade-hero" />

          {/* Top Origin Tag */}
          <div className="absolute top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 z-10 flex flex-col items-start sm:flex-row sm:flex-wrap gap-2">
            <span className="min-w-0 max-w-full px-3.5 py-1.5 rounded-full bg-[#121110]/85 backdrop-blur-md text-[#E2B342] text-xs font-mono font-bold flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-[#E2B342]" />
              <span className="min-w-0 truncate">{activeDish.photoTag}</span>
            </span>
            <span className="max-w-full px-3.5 py-1.5 rounded-full bg-[#A51E2D]/90 text-white text-xs font-mono font-bold truncate">
              {activeDish.originBadge}
            </span>
          </div>

          {/* Bottom Captions & Prompt */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-wrap items-end justify-between gap-3 sm:gap-4 text-white">
            <div className="space-y-1.5 max-w-2xl">
              <p className="font-serif italic text-xl sm:text-3xl text-[#FBF8F1] drop-shadow-md">
                «{activeDish.imageCaption}»
              </p>
              <p className="text-[0.65rem] sm:text-xs font-mono text-[#FBF8F1]/85 uppercase tracking-wider">
                Raíz Cultural: {activeDish.originLocation} · {activeDish.category}
              </p>
            </div>

            <span className="max-w-full px-3 sm:px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#222522] text-[0.65rem] sm:text-xs font-mono font-bold backdrop-blur-md transition-all flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="truncate">Ver historia · {activeDish.processPhotos.length} fotos</span>
            </span>
          </div>
        </div>

        {/* Monograph Narrative Breakdown (Clean Borderless Typography) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
          {/* Left Column: Cultural Lore, History & Ingredients */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#52634D] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#A51E2D]" />
                <span>HISTORIA Y ARRAIGO CULTURAL ({activeDish.historyAndOrigins.eraOrCentury})</span>
              </div>
              <p className="text-base sm:text-lg text-[#222522]/90 leading-relaxed font-serif italic">
                {activeDish.historyAndOrigins.narrative}
              </p>
              <p className="text-sm text-[#222522]/80 leading-relaxed">
                {activeDish.historyAndOrigins.culturalEvolution}
              </p>
            </div>

            {/* Authentic Protected Ingredients */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#222522] font-bold">
                Ingredientes Protegidos de la Receta Original:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeDish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#222522]/5 rounded-xl text-xs font-medium text-[#222522]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Preparation Summary Preview */}
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A51E2D] font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                <span>Pasos del Método Canónico:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#222522]/80">
                {activeDish.traditionalMethod.slice(0, 4).map((step) => (
                  <div key={step.stepNumber} className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#A51E2D]">
                      0{step.stepNumber}.
                    </span>
                    <div>
                      <strong className="text-[#222522] font-serif block">
                        {step.title}
                      </strong>
                      <span className="line-clamp-2 text-[#222522]/70">
                        {step.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ordering Courtesy Phrase with Audio */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-mono uppercase text-[#A51E2D] font-bold block">
                Frase de cortesía para pedir en la taberna tradicional:
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#222522]/[0.03]">
                <div>
                  <p className="text-lg font-serif font-bold text-[#222522]">
                    {activeDish.keyPhrase.spanish}
                  </p>
                  <p className="text-xs text-[#52634D] italic font-serif">
                    {activeDish.keyPhrase.english}
                  </p>
                  <p className="text-xs font-mono text-[#52634D] pt-0.5">
                    Fonética: {activeDish.keyPhrase.phonetic}
                  </p>
                </div>
                <AudioPronounceButton
                  phrase={activeDish.keyPhrase.spanish}
                  size="md"
                  label="Pronunciar"
                  spanishPrompt="«¡Pídelo con acento castizo! 🥘»"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Pairing, Ritual & Glossary Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pairing / Maridaje Card */}
            <div className="space-y-2 p-6 rounded-3xl bg-[#222522]/[0.03]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#A51E2D]">
                <Wine className="w-4 h-4" />
                <span>Maridaje Geográfico (D.O.)</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-[#222522]">
                {activeDish.pairing.beverage}
              </h4>
              <span className="text-xs font-mono text-[#52634D] uppercase block">
                {activeDish.pairing.regionDO}
              </span>
              <p className="text-xs text-[#222522]/80 leading-relaxed font-sans pt-1">
                {activeDish.pairing.note}
              </p>
            </div>

            {/* Cultural Ritual & Customs */}
            <div className="space-y-2 p-6 rounded-3xl bg-[#222522]/[0.03]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#52634D]">
                <Compass className="w-4 h-4" />
                <span>Costumbre Popular y Convivencia</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-[#222522]">
                {activeDish.culturalRitual.title}
              </h4>
              <p className="text-xs text-[#222522]/80 leading-relaxed font-sans pt-1">
                {activeDish.culturalRitual.description}
              </p>
            </div>

            {/* Key Native Culinary Term Spotlight */}
            <div className="space-y-2 p-6 rounded-3xl bg-[#222522]/[0.03]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#222522]">
                <BookOpen className="w-4 h-4 text-[#A51E2D]" />
                <span>Término Castizo Destacado</span>
              </div>
              {activeDish.culinaryTerms.slice(0, 2).map((term, i) => (
                <div key={i} className="pt-1">
                  <span className="font-serif italic font-bold text-base text-[#A51E2D] block">
                    «{term.term}»
                  </span>
                  <p className="text-xs text-[#222522]/75 leading-relaxed font-sans">
                    {term.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Los Tres Pilares Sagrados de la Mesa Ibérica (Editorial Section) */}
      <div className="space-y-8 pt-12 border-t border-[#222522]/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D]">
            <span>FUNDAMENTOS DE LA DIETA MEDITERRÁNEA</span>
            <span aria-hidden="true">·</span>
            <span>PATRIMONIO UNESCO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
            Los Tres Pilares Sagrados de la Mesa Ibérica
          </h2>
          <p className="text-sm sm:text-base text-[#222522]/80 max-w-3xl leading-relaxed">
            Más allá de las recetas individuales, la gastronomía española se erige sobre tres pilares identitarios que han nutrido generaciones y modelado el paisaje peninsular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CULINARY_PILLARS.map((pillar, idx) => (
            <div key={idx} className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#A51E2D] uppercase tracking-wider block">
                Pilar 0{idx + 1} · {pillar.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#222522]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#222522]/85 leading-relaxed font-sans">
                {pillar.description}
              </p>
              <p className="text-xs text-[#52634D] italic font-serif leading-relaxed pt-1">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Native Culinary Glossary & Techniques (Traveler Vocabulary) */}
      <div className="space-y-6 pt-12 border-t border-[#222522]/10">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-[#52634D]">
            LÉXICO PARA EL VIAJERO
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#222522]">
            Vocabulario Castizo del Fogón y la Taberna
          </h3>
          <p className="text-xs sm:text-sm text-[#222522]/75">
            Comprende los términos que los taberneros y cocineros españoles emplean a diario:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <h4 className="font-serif italic font-bold text-base text-[#A51E2D]">
              «Sofrito»
            </h4>
            <p className="text-xs text-[#222522]/80 leading-relaxed font-sans">
              La base omnipresente: cebolla, ajo, pimiento y tomate pochados pacientemente en aceite virgen extra hasta caramelizar.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-serif italic font-bold text-base text-[#A51E2D]">
              «Socarrat»
            </h4>
            <p className="text-xs text-[#222522]/80 leading-relaxed font-sans">
              El tesoro crujiente de la paella: los granos inferiores tostados en los últimos minutos que concentran todo el caldo.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-serif italic font-bold text-base text-[#A51E2D]">
              «Compango»
            </h4>
            <p className="text-xs text-[#222522]/80 leading-relaxed font-sans">
              Los embutidos curados y ahumados (chorizo, morcilla, tocino y lacón) que otorgan personalidad a los potajes del norte.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-serif italic font-bold text-base text-[#A51E2D]">
              «La Sobremesa»
            </h4>
            <p className="text-xs text-[#222522]/80 leading-relaxed font-sans">
              La conversación relajada y comunitaria tras el postre o café, considerada una de las mayores virtudes sociales españolas.
            </p>
          </div>
        </div>
      </div>

      {/* 8. The Heritage Lightbox Modal (Proceso Tradicional + Historia y Arraigo) */}
      <CulinaryHeritageModal
        dish={modalDish}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectPrevDish={handlePrevDishInModal}
        onSelectNextDish={handleNextDishInModal}
      />
    </div>
  );
};
