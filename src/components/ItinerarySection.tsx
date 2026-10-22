import React, { useState, useMemo } from 'react';
import { AudioPronounceButton } from './AudioPronounceButton';
import { Tooltip } from './Tooltip';
import {
  AVAILABLE_PLACES,
  ROUTE_PACKAGES,
  generateItineraryForDaysAndPlaces,
  DayItineraryTemplate,
  PlaceOption
} from '../data/plannerPlacesData';
import {
  Train,
  Clock,
  MapPin,
  Calendar,
  Calculator,
  RotateCcw,
  Sparkles,
  Ticket,
  Plus,
  Minus,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  Sun,
  Bed,
  Utensils,
  Compass,
  Check,
  CheckCircle2,
  Copy,
  Printer,
  ListOrdered,
  LayoutGrid
} from 'lucide-react';

export const ItinerarySection: React.FC = () => {
  // 1. User-configurable days: Any number from 1 to 30
  const [totalDays, setTotalDays] = useState<number>(7);
  const [daysInputValue, setDaysInputValue] = useState<string>('7');

  // 2. User-selected places: Array of place IDs
  const [selectedPlaceIds, setSelectedPlaceIds] = useState<string[]>([
    'madrid',
    'barcelona',
    'sevilla',
    'granada'
  ]);

  // Active day index in detailed view
  const [activeDayNumber, setActiveDayNumber] = useState<number>(1);

  // View mode: 'single' for focused single-day or 'all' for full chronological timeline
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');

  // Copy itinerary feedback
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  // Budget Calculator state
  const [travelers, setTravelers] = useState<number>(2);
  const [lodgingTier, setLodgingTier] = useState<'hostel' | 'mid' | 'luxury'>('mid');
  const [diningTier, setDiningTier] = useState<'tapas' | 'standard' | 'gourmet'>('standard');
  const [trainTier, setTrainTier] = useState<'standard' | 'comfort'>('standard');
  const [includeMonuments, setIncludeMonuments] = useState<boolean>(true);

  // Quick duration presets (from 1 day up to 30 days)
  const presets = [
    { days: 1, label: '1 Día', sub: 'Exprés' },
    { days: 2, label: '2 Días', sub: 'Fin de Semana' },
    { days: 4, label: '4 Días', sub: 'Puente Festivo' },
    { days: 7, label: '7 Días', sub: 'Semana Clásica' },
    { days: 10, label: '10 Días', sub: 'Gran Ruta' },
    { days: 14, label: '14 Días', sub: 'Odisea Ibérica' },
    { days: 21, label: '21 Días', sub: 'Inmersión Total' },
    { days: 30, label: '30 Días', sub: 'Mes Peninsular' }
  ];

  // Dynamic day-by-day itinerary generated for exact days and chosen places
  const activeItinerary = useMemo(() => {
    return generateItineraryForDaysAndPlaces(totalDays, selectedPlaceIds);
  }, [totalDays, selectedPlaceIds]);

  // Ensure active day stays within range when days change
  const currentDay: DayItineraryTemplate = useMemo(() => {
    const found = activeItinerary.find((d) => d.subDayNumber === activeDayNumber);
    return found || activeItinerary[0] || ({} as DayItineraryTemplate);
  }, [activeItinerary, activeDayNumber]);

  // List of unique places in the active itinerary in order of appearance
  const routePlacesSummary = useMemo(() => {
    const placeMap = new Map<string, { city: string; region: string; daysCount: number }>();
    activeItinerary.forEach((d) => {
      const entry = placeMap.get(d.city);
      if (entry) {
        entry.daysCount++;
      } else {
        placeMap.set(d.city, { city: d.city, region: d.region, daysCount: 1 });
      }
    });
    return Array.from(placeMap.values());
  }, [activeItinerary]);

  // Update days safely with input sync
  const handleSetDays = (days: number) => {
    const clamped = Math.min(30, Math.max(1, days));
    setTotalDays(clamped);
    setDaysInputValue(clamped.toString());
    if (activeDayNumber > clamped) {
      setActiveDayNumber(clamped);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDaysInputValue(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 30) {
      setTotalDays(parsed);
      if (activeDayNumber > parsed) {
        setActiveDayNumber(parsed);
      }
    }
  };

  const handleInputBlur = () => {
    const parsed = parseInt(daysInputValue, 10);
    if (isNaN(parsed) || parsed < 1) {
      handleSetDays(1);
    } else if (parsed > 30) {
      handleSetDays(30);
    } else {
      handleSetDays(parsed);
    }
  };

  // Toggle place selection
  const handleTogglePlace = (placeId: string) => {
    if (selectedPlaceIds.includes(placeId)) {
      if (selectedPlaceIds.length > 1) {
        setSelectedPlaceIds(selectedPlaceIds.filter((id) => id !== placeId));
      }
    } else {
      setSelectedPlaceIds([...selectedPlaceIds, placeId]);
    }
    setActiveDayNumber(1);
  };

  // Apply route package preset
  const handleApplyRoutePackage = (pkg: (typeof ROUTE_PACKAGES)[0]) => {
    setSelectedPlaceIds(pkg.placeIds);
    handleSetDays(pkg.suggestedDays);
    setActiveDayNumber(1);
  };

  const handleSelectAllPlaces = () => {
    setSelectedPlaceIds(AVAILABLE_PLACES.map((p) => p.id));
    setActiveDayNumber(1);
  };

  const handleResetToClassicPlaces = () => {
    setSelectedPlaceIds(['madrid', 'barcelona', 'sevilla', 'granada']);
    handleSetDays(7);
    setActiveDayNumber(1);
  };

  // Budget calculations
  const lodgingCostPerPersonNight = lodgingTier === 'hostel' ? 35 : lodgingTier === 'mid' ? 75 : 150;
  const diningCostPerPersonDay = diningTier === 'tapas' ? 30 : diningTier === 'standard' ? 55 : 90;
  const trainLegsCount = Math.max(1, routePlacesSummary.length);
  const trainCostPerPerson = (trainTier === 'standard' ? 45 : 70) * trainLegsCount;
  const monumentCostPerPerson = includeMonuments ? Math.min(180, 16 * totalDays) : 0;

  const nightsCount = Math.max(1, totalDays > 1 ? totalDays - 1 : 1);
  const totalLodging = lodgingCostPerPersonNight * nightsCount * travelers;
  const totalDining = diningCostPerPersonDay * totalDays * travelers;
  const totalTransit = trainCostPerPerson * travelers;
  const totalMonuments = monumentCostPerPerson * travelers;
  const grandTotal = totalLodging + totalDining + totalTransit + totalMonuments;
  const perPersonTotal = grandTotal / travelers;
  const perPersonPerDay = perPersonTotal / totalDays;

  const handleReset = () => {
    setTotalDays(7);
    setDaysInputValue('7');
    setSelectedPlaceIds(['madrid', 'barcelona', 'sevilla', 'granada']);
    setActiveDayNumber(1);
    setTravelers(2);
    setLodgingTier('mid');
    setDiningTier('standard');
    setTrainTier('standard');
    setIncludeMonuments(true);
  };

  const handleCopyItinerary = () => {
    const textLines = [
      `RUMBO ESPAÑA — ITINERARIO PERSONALIZADO`,
      `«No solo visites España. Siéntela.»`,
      `Duración: ${totalDays} días (${nightsCount} noches)`,
      `Lugares a visitar: ${routePlacesSummary.map((p) => `${p.city} (${p.daysCount} d)`).join(' ➔ ')}`,
      `Presupuesto estimado: €${grandTotal.toFixed(2)} para ${travelers} viajero(s)\n`
    ];

    activeItinerary.forEach((day) => {
      textLines.push(
        `--- DÍA 0${day.subDayNumber}: ${day.city} (${day.region}) ---`,
        `Tema: ${day.theme}`,
        `1. Mañana (${day.morning.time}): ${day.morning.place} - ${day.morning.activity}`,
        `2. Tarde (${day.afternoon.time}): ${day.afternoon.place} - ${day.afternoon.activity}`,
        `3. Noche (${day.evening.time}): ${day.evening.place} - ${day.evening.activity}`,
        `Transporte: ${day.transit}`,
        `Frase en Español: ${day.phrase.spanish} (${day.phrase.english})`,
        `Consejo local: ${day.visitorTip}\n`
      );
    });

    navigator.clipboard.writeText(textLines.join('\n'));
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Editorial Header (Completely Borderless) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D]">
          <span>CAPÍTULO V · PLANIFICADOR PERSONALIZADO</span>
          <span aria-hidden="true">·</span>
          <span>DURACIÓN Y LUGARES A TU MEDIDA</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#222522] leading-[1.1]">
          Planificador Inteligente de Viaje por España
        </h1>
        <p className="text-base sm:text-lg text-[#222522]/85 max-w-3xl leading-relaxed">
          Configura libremente el <strong>número exacto de días</strong> de tu viaje (de 1 a 30 días) y <strong>selecciona los lugares y ciudades</strong> que deseas descubrir. El planificador distribuye tu estancia, coordina las rutas de trenes AVE y genera tu itinerario día a día con actividades, frases y presupuesto.
        </p>
      </div>

      {/* SECTION 1: DURATION CONTROLLER (BORDERLESS EDITORIAL) */}
      <section className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-[#A51E2D]" />
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
                1. ¿Cuántos días durará tu viaje?
              </h2>
            </div>
            <p className="text-sm text-[#222522]/75 leading-relaxed">
              Introduce cualquier número de días (1 a 30 días) escribiéndolo en el campo numérico, moviendo el control deslizante o usando los selectores directos.
            </p>
          </div>

          {/* Steppers & Number Input (Borderless) */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="custom-days-input" className="text-xs font-mono font-bold text-[#52634D] uppercase">
                Días:
              </label>
              <input
                id="custom-days-input"
                type="number"
                min={1}
                max={30}
                value={daysInputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-16 h-11 text-center font-serif font-black text-2xl text-[#A51E2D] bg-transparent focus:outline-none"
                aria-label="Introducir número de días del viaje"
              />
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSetDays(totalDays - 1)}
                disabled={totalDays <= 1}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#222522] hover:bg-[#222522]/10 disabled:opacity-30 transition-colors font-bold"
                aria-label="Disminuir un día"
              >
                <Minus className="w-4 h-4" />
              </button>

              <div className="px-2 text-center min-w-[100px]">
                <span className="text-2xl font-serif font-black text-[#A51E2D] block leading-none tabular-nums">
                  {totalDays} {totalDays === 1 ? 'DÍA' : 'DÍAS'}
                </span>
                <span className="text-xs font-mono text-[#52634D] font-semibold block mt-1">
                  {totalDays === 1 ? 'Escapada exprés' : `${nightsCount} noches`}
                </span>
              </div>

              <button
                onClick={() => handleSetDays(totalDays + 1)}
                disabled={totalDays >= 30}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#222522] hover:bg-[#222522]/10 disabled:opacity-30 transition-colors font-bold"
                aria-label="Aumentar un día"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center justify-between text-xs font-mono text-[#52634D]">
            <span>1 Día</span>
            <span className="font-bold text-[#A51E2D]">{totalDays} Días Seleccionados</span>
            <span>30 Días</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={totalDays}
            onChange={(e) => handleSetDays(parseInt(e.target.value, 10))}
            className="w-full accent-[#A51E2D] h-1.5 bg-[#222522]/15 rounded-lg cursor-pointer"
            aria-label="Control deslizante para los días del viaje"
          />
        </div>

        {/* Quick Duration Preset Tabs (Minimalist Typography, No Boxes) */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#52634D] font-bold block">
            Acceso Rápido a Duraciones Frecuentes:
          </span>
          <div className="flex flex-wrap gap-3">
            {presets.map((preset) => {
              const isSelected = totalDays === preset.days;
              return (
                <button
                  key={preset.days}
                  onClick={() => handleSetDays(preset.days)}
                  className={`py-2 px-3.5 rounded-lg text-left transition-all ${
                    isSelected
                      ? 'bg-[#A51E2D] text-[#FBF8F1] font-bold'
                      : 'text-[#222522]/70 hover:text-[#222522] hover:bg-[#222522]/5'
                  }`}
                >
                  <span className="text-xs font-serif font-black block">
                    {preset.label}
                  </span>
                  <span className={`text-xs block ${isSelected ? 'text-[#FBF8F1]/85' : 'text-[#52634D]'}`}>
                    {preset.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: PLACES SELECTION (BORDERLESS EDITORIAL) */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#A51E2D]" />
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
                2. Selecciona los Lugares y Ciudades de tu Ruta
              </h2>
            </div>
            <p className="text-sm text-[#222522]/75 mt-1 max-w-2xl leading-relaxed">
              Marca o desmarca los destinos españoles que quieras incluir en tu itinerario. Tus <strong>{totalDays} días</strong> se distribuirán automáticamente entre los lugares seleccionados.
            </p>
          </div>

          {/* Quick Package Toggles */}
          <div className="flex items-center gap-3 self-start md:self-auto text-xs font-bold">
            <button
              onClick={handleSelectAllPlaces}
              className="text-[#52634D] hover:text-[#A51E2D] underline underline-offset-4"
            >
              Seleccionar Todas ({AVAILABLE_PLACES.length})
            </button>
            <span className="text-[#222522]/30">·</span>
            <button
              onClick={handleResetToClassicPlaces}
              className="text-[#52634D] hover:text-[#A51E2D] underline underline-offset-4"
            >
              Ruta Clásica (4 Ciudades)
            </button>
          </div>
        </div>

        {/* Thematic Route Packages (Minimal Text Spreads) */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#52634D] font-bold block">
            Paquetes Temáticos Recomendados:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROUTE_PACKAGES.map((pkg) => {
              const isFullyActive = pkg.placeIds.every((id) => selectedPlaceIds.includes(id)) && selectedPlaceIds.length === pkg.placeIds.length;
              return (
                <div
                  key={pkg.id}
                  onClick={() => handleApplyRoutePackage(pkg)}
                  className="space-y-1 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-serif font-bold group-hover:text-[#A51E2D] transition-colors ${
                      isFullyActive ? 'text-[#A51E2D]' : 'text-[#222522]'
                    }`}>
                      {pkg.title}
                    </span>
                    <span className="text-xs font-mono text-[#A51E2D] font-bold">
                      {pkg.suggestedDays} días sug.
                    </span>
                  </div>
                  <p className="text-xs text-[#52634D] font-semibold">
                    {pkg.subtitle}
                  </p>
                  <p className="text-xs text-[#222522]/70 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>
                  <span className={`text-xs font-bold pt-1 block ${isFullyActive ? 'text-[#A51E2D]' : 'text-[#52634D]'}`}>
                    {isFullyActive ? '✓ Ruta activa' : 'Aplicar paquete →'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 15 Individual Place Selection (Open Borderless Grid) */}
        <div className="space-y-3 pt-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#52634D] font-bold block">
            Elige los destinos específicos ({selectedPlaceIds.length} seleccionados):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AVAILABLE_PLACES.map((place) => {
              const isSelected = selectedPlaceIds.includes(place.id);
              return (
                <div
                  key={place.id}
                  onClick={() => handleTogglePlace(place.id)}
                  className="cursor-pointer group space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-[#A51E2D]' : 'bg-[#222522]/30'}`} />
                      <span className={`text-base font-serif font-bold transition-colors ${
                        isSelected ? 'text-[#A51E2D]' : 'text-[#222522] group-hover:text-[#A51E2D]'
                      }`}>
                        {place.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#52634D]">
                      {place.region}
                    </span>
                  </div>

                  <p className="text-xs text-[#222522]/75 line-clamp-1">
                    {place.tagline}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#A51E2D]">
                    <span className="truncate max-w-[200px]">{place.highlightMonument}</span>
                    <span className="text-[#52634D] font-mono text-xs">{place.recommendedMinDays}d sug.</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Route Flow Summary */}
        <div className="pt-4 space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-mono uppercase font-bold text-[#A51E2D] mr-2">
              Ruta generada para {totalDays} días:
            </span>
            {routePlacesSummary.map((item, idx) => (
              <span key={idx} className="inline-flex items-center font-bold text-[#222522]">
                <span>{item.city}</span>
                <span className="ml-1 text-xs text-[#A51E2D] font-mono">({item.daysCount}d)</span>
                {idx < routePlacesSummary.length - 1 && (
                  <span className="mx-2 text-[#A51E2D]">➔</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleCopyItinerary}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A51E2D] hover:underline"
            >
              {copiedSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700">¡Itinerario copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A51E2D]" />
                  <span>Copiar Itinerario</span>
                </>
              )}
            </button>
            <span className="text-[#222522]/30">·</span>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#52634D] hover:underline"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: DYNAMIC DAY-BY-DAY SCHEDULE EXPLORER */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#A51E2D]" />
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
                3. Itinerario Día por Día ({totalDays} Días Generados)
              </h2>
            </div>
            <p className="text-sm text-[#222522]/70 mt-0.5">
              Plan detallado de mañana, tarde y noche, adaptado a tus lugares y conexiones de trenes.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-4 text-xs font-bold">
            <button
              onClick={() => setViewMode('single')}
              className={`transition-colors ${viewMode === 'single' ? 'text-[#A51E2D] underline underline-offset-4' : 'text-[#222522]/60 hover:text-[#222522]'}`}
            >
              Día a Día
            </button>
            <span className="text-[#222522]/30">·</span>
            <button
              onClick={() => setViewMode('all')}
              className={`transition-colors ${viewMode === 'all' ? 'text-[#A51E2D] underline underline-offset-4' : 'text-[#222522]/60 hover:text-[#222522]'}`}
            >
              Ver Todos ({totalDays})
            </button>
          </div>
        </div>

        {/* Day Selector Tabs (for Single Day View) */}
        {viewMode === 'single' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {activeItinerary.map((day) => {
                const isActive = currentDay.subDayNumber === day.subDayNumber;
                return (
                  <button
                    key={day.subDayNumber}
                    onClick={() => setActiveDayNumber(day.subDayNumber)}
                    className={`relative py-1.5 px-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all ${
                      isActive ? 'text-[#A51E2D]' : 'text-[#222522]/60 hover:text-[#222522]'
                    }`}
                  >
                    <span>Día {day.subDayNumber} ({day.city})</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E2B342] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Single Day Feature */}
            {currentDay && currentDay.morning && (
              <div className="space-y-8 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D]">
                    <span>DÍA {currentDay.subDayNumber} DE {totalDays}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A51E2D] font-bold">{currentDay.region}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-[#222522]">{currentDay.transit}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#222522]">
                    {currentDay.city} — {currentDay.theme}
                  </h3>
                </div>

                {/* Three Timeline Periods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Morning */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#52634D]">
                      <span className="font-bold text-[#A51E2D] uppercase">1. Mañana</span>
                      <span>{currentDay.morning.time}</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-[#222522]">
                      {currentDay.morning.place}
                    </h4>
                    <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">
                      {currentDay.morning.activity}
                    </p>
                  </div>

                  {/* Afternoon */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#52634D]">
                      <span className="font-bold text-[#A51E2D] uppercase">2. Tarde</span>
                      <span>{currentDay.afternoon.time}</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-[#222522]">
                      {currentDay.afternoon.place}
                    </h4>
                    <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">
                      {currentDay.afternoon.activity}
                    </p>
                  </div>

                  {/* Evening */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#52634D]">
                      <span className="font-bold text-[#A51E2D] uppercase">3. Noche</span>
                      <span>{currentDay.evening.time}</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-[#222522]">
                      {currentDay.evening.place}
                    </h4>
                    <p className="text-sm text-[#222522]/80 leading-relaxed font-sans">
                      {currentDay.evening.activity}
                    </p>
                  </div>
                </div>

                {/* Useful Spanish Phrase with Native Audio */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase text-[#A51E2D] font-bold block">
                      Frase esencial para el Día {currentDay.subDayNumber} en {currentDay.city}:
                    </span>
                    <p className="text-xl font-serif font-bold text-[#222522]">
                      {currentDay.phrase.spanish}
                    </p>
                    <p className="text-xs text-[#52634D] italic font-serif">
                      {currentDay.phrase.english} · <span className="font-mono not-italic text-[#222522]/60">({currentDay.phrase.phonetic})</span>
                    </p>
                  </div>
                  <AudioPronounceButton
                    phrase={currentDay.phrase.spanish}
                    size="md"
                    label="Escuchar Frase"
                    spanishPrompt={`«¡Frase de viaje en ${currentDay.city}! 🎙️»`}
                  />
                </div>

                {/* Insider Cultural Tip */}
                {currentDay.visitorTip && (
                  <div className="pt-2 text-sm text-[#222522]/85">
                    <strong className="text-[#A51E2D] font-bold">Consejo de experto: </strong>
                    <span>{currentDay.visitorTip}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Full Chronological Timeline View */}
        {viewMode === 'all' && (
          <div className="space-y-12">
            {activeItinerary.map((day) => (
              <div key={day.subDayNumber} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
                      DÍA {day.subDayNumber} · {day.region}
                    </span>
                    <h3 className="text-2xl font-serif font-black text-[#222522]">
                      {day.city} — {day.theme}
                    </h3>
                  </div>
                  <span className="text-xs text-[#52634D] font-semibold font-mono">
                    {day.transit}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#A51E2D] font-bold uppercase block">
                      1. Mañana ({day.morning.time})
                    </span>
                    <strong className="font-serif block text-base text-[#222522]">{day.morning.place}</strong>
                    <p className="text-xs text-[#222522]/80">{day.morning.activity}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#A51E2D] font-bold uppercase block">
                      2. Tarde ({day.afternoon.time})
                    </span>
                    <strong className="font-serif block text-base text-[#222522]">{day.afternoon.place}</strong>
                    <p className="text-xs text-[#222522]/80">{day.afternoon.activity}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#A51E2D] font-bold uppercase block">
                      3. Noche ({day.evening.time})
                    </span>
                    <strong className="font-serif block text-base text-[#222522]">{day.evening.place}</strong>
                    <p className="text-xs text-[#222522]/80">{day.evening.activity}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <div>
                    <span className="font-bold text-[#A51E2D] mr-2">Frase:</span>
                    <strong className="text-[#222522]">{day.phrase.spanish}</strong>
                    <span className="text-[#52634D] italic ml-2">({day.phrase.english})</span>
                  </div>
                  <AudioPronounceButton
                    phrase={day.phrase.spanish}
                    size="sm"
                    label="Escuchar"
                    spanishPrompt={`«¡Frase en ${day.city}! 🎙️»`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 4: DYNAMIC BUDGET CALCULATOR (BORDERLESS EDITORIAL) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#A51E2D]" />
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
                Calculadora de Presupuesto para {totalDays} {totalDays === 1 ? 'Día' : 'Días'} en Euros (€)
              </h3>
            </div>
            <p className="text-sm text-[#222522]/75 mt-1">
              Cálculo estimado en tiempo real según el número de días ({totalDays} d), {routePlacesSummary.length} lugares seleccionados y viajeros.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="text-xs font-bold text-[#52634D] hover:text-[#A51E2D] underline underline-offset-4 inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer</span>
          </button>
        </div>

        {/* Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Travelers */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#222522] block uppercase font-mono">
              Viajeros:
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setTravelers(num)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                    travelers === num
                      ? 'bg-[#A51E2D] text-[#FBF8F1]'
                      : 'text-[#222522]/70 hover:text-[#222522] hover:bg-[#222522]/5'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Lodging Tier */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#222522] block uppercase font-mono">
              Alojamiento ({nightsCount} noches):
            </label>
            <select
              value={lodgingTier}
              onChange={(e) => setLodgingTier(e.target.value as any)}
              className="w-full text-xs font-semibold p-2 bg-transparent text-[#222522] focus:outline-none cursor-pointer"
            >
              <option value="hostel">Hostal / Albergue (~€35 / noche)</option>
              <option value="mid">Hotel 3★ Céntrico (~€75 / noche)</option>
              <option value="luxury">Parador / Hotel Boutique (~€150 / noche)</option>
            </select>
          </div>

          {/* Dining Style */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#222522] block uppercase font-mono">
              Comidas ({totalDays} días):
            </label>
            <select
              value={diningTier}
              onChange={(e) => setDiningTier(e.target.value as any)}
              className="w-full text-xs font-semibold p-2 bg-transparent text-[#222522] focus:outline-none cursor-pointer"
            >
              <option value="tapas">Tapeo y Menú del Día (~€30 / día)</option>
              <option value="standard">Restaurantes Estándar (~€55 / día)</option>
              <option value="gourmet">Cocina de Autor (~€90 / día)</option>
            </select>
          </div>

          {/* Rail Ticket Class */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#222522] block uppercase font-mono">
              Trenes AVE ({trainLegsCount} etapas):
            </label>
            <select
              value={trainTier}
              onChange={(e) => setTrainTier(e.target.value as any)}
              className="w-full text-xs font-semibold p-2 bg-transparent text-[#222522] focus:outline-none cursor-pointer"
            >
              <option value="standard">Básico / Estándar (~€45 / trayecto)</option>
              <option value="comfort">Confort / Prémium (~€70 / trayecto)</option>
            </select>
          </div>
        </div>

        {/* Checkbox for Monument entries */}
        <div>
          <label className="flex items-center gap-2 text-xs font-semibold text-[#222522] cursor-pointer">
            <input
              type="checkbox"
              checked={includeMonuments}
              onChange={(e) => setIncludeMonuments(e.target.checked)}
              className="rounded text-[#A51E2D] focus:ring-[#A51E2D]"
            />
            <span>Incluir entradas a museos y monumentos del itinerario (~€{monumentCostPerPerson} por persona para {totalDays} días)</span>
          </label>
        </div>

        {/* Live Calculation Results (Clean Editorial Typography, No Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-baseline pt-4">
          <div className="text-xs space-y-1">
            <span className="text-[#52634D] font-semibold block">Hospedaje ({nightsCount} noches, {travelers} p.):</span>
            <span className="font-mono font-bold text-lg text-[#222522]">€{totalLodging.toFixed(2)}</span>
          </div>

          <div className="text-xs space-y-1">
            <span className="text-[#52634D] font-semibold block">Comidas ({totalDays} días, {travelers} p.):</span>
            <span className="font-mono font-bold text-lg text-[#222522]">€{totalDining.toFixed(2)}</span>
          </div>

          <div className="text-xs space-y-1">
            <span className="text-[#52634D] font-semibold block">Trenes AVE & Museos:</span>
            <span className="font-mono font-bold text-lg text-[#222522]">€{(totalTransit + totalMonuments).toFixed(2)}</span>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs font-mono uppercase text-[#A51E2D] font-bold block">
              TOTAL ESTIMADO ({totalDays} DÍAS)
            </span>
            <div className="text-3xl font-mono font-black text-[#A51E2D] tabular-nums">
              €{grandTotal.toFixed(2)}
            </div>
            <span className="text-xs text-[#52634D] font-mono block">
              (€{perPersonTotal.toFixed(2)} / persona)
            </span>
          </div>
        </div>
      </section>

      {/* Practical Travel Etiquette & Cultural Tips (Clean Borderless Spreads) */}
      <section className="space-y-6">
        <h3 className="text-2xl font-serif font-black text-[#222522]">
          Consejos de Etiqueta y Logística Peninsular
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#222522]/80 leading-relaxed">
          <div className="space-y-1">
            <span className="font-serif font-bold text-[#A51E2D] block text-base">1. Sincroniza con el Ritmo Español</span>
            <p className="text-xs">
              El almuerzo ocurre de 14:00 a 16:00 h y la cena a partir de las 21:00 h. Si viajas pocos días, ajusta tu reloj biológico desde el primer día para disfrutar de los restaurantes abiertos.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif font-bold text-[#A51E2D] block text-base">2. Reservas de Tren y Monumentos</span>
            <p className="text-xs">
              Los billetes de Renfe AVE y entradas de alta demanda como la Alhambra de Granada o la Sagrada Família en Barcelona agotan sus cupos con semanas de antelación. Reserva tu franja antes de partir.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif font-bold text-[#A51E2D] block text-base">3. Flexibilidad y Paseos</span>
            <p className="text-xs">
              Las mejores memorias en España surgen en las plazas secundarias, escuchando músicos callejeros o probando la tapa del día. No sobrecargues cada hora de tu agenda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
