import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { UnifiedDestination } from '../data/unifiedDestinationsData';
import {
  Navigation,
  ExternalLink,
  MapPin,
  Compass,
  Maximize2,
  Sparkles,
  Train,
  X
} from 'lucide-react';

interface DestinationsLeafletMapProps {
  destinations: UnifiedDestination[];
  selectedDestination: UnifiedDestination;
  onSelectDestination: (destinationId: string) => void;
}

export const DestinationsLeafletMap: React.FC<DestinationsLeafletMapProps> = ({
  destinations,
  selectedDestination,
  onSelectDestination
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const [isCardVisible, setIsCardVisible] = useState(true);

  // Re-open card when selected destination changes
  useEffect(() => {
    setIsCardVisible(true);
  }, [selectedDestination.id]);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Prevent re-initialization

    // Create map with peninsular center
    const map = L.map(mapContainerRef.current, {
      center: [40.0, -3.7],
      zoom: 6,
      minZoom: 5,
      maxZoom: 12,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false
    });

    // Custom OpenStreetMap tile layer with vintage cream filter
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      className: 'leaflet-cream-tiles',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Minimalist zoom control positioned bottom-right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Click anywhere on map canvas outside utility card automatically dismisses the card
    map.on('click', () => {
      setIsCardVisible(false);
    });

    mapInstanceRef.current = map;

    // Small timeout to ensure proper size calculation inside grid/flex layouts
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      clearTimeout(timer);
      map.remove();
      mapInstanceRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  // Sync Markers and Active Pin
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear previous markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    // Create markers for all destinations
    destinations.forEach((dest) => {
      const isSelected = dest.id === selectedDestination.id;

      // Custom sleek Terracotta Pin or minimal dot
      const customIcon = L.divIcon({
        className: 'custom-terracotta-marker-wrapper',
        iconSize: isSelected ? [120, 60] : [28, 28],
        iconAnchor: isSelected ? [60, 48] : [14, 14],
        html: isSelected
          ? `
            <div class="flex flex-col items-center select-none cursor-pointer transform -translate-y-1">
              <div class="relative z-10 filter drop-shadow-[0_4px_8px_rgba(165,42,42,0.45)]">
                <svg viewBox="0 0 24 32" width="34" height="42" fill="none">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 9.2 12 20 12 20s12-10.8 12-20c0-6.627-5.373-12-12-12z" fill="#A51E2D"/>
                  <circle cx="12" cy="11.5" r="5.2" fill="#FBF8F1"/>
                  <circle cx="12" cy="11.5" r="2.8" fill="#E2B342"/>
                </svg>
              </div>
              <div class="mt-0.5 px-2.5 py-0.5 rounded-full bg-[#121110] text-[#E2B342] text-xs font-bold tracking-wider font-mono uppercase whitespace-nowrap shadow-md border border-[#E2B342]/40">
                ${dest.name}
              </div>
            </div>
          `
          : `
            <div class="w-6 h-6 flex items-center justify-center select-none cursor-pointer group" title="${dest.name}">
              <div class="w-3.5 h-3.5 rounded-full bg-[#A51E2D]/85 border border-[#FBF8F1] shadow-sm group-hover:scale-150 group-hover:bg-[#A51E2D] transition-all duration-200"></div>
            </div>
          `
      });

      const marker = L.marker(dest.coordinates, {
        icon: customIcon,
        zIndexOffset: isSelected ? 1000 : 100
      }).addTo(map);

      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        onSelectDestination(dest.id);
        setIsCardVisible(true);
      });

      markersRef.current.set(dest.id, marker);
    });

    // Smoothly fly to selected destination coordinates
    map.flyTo(selectedDestination.coordinates, 7, {
      animate: true,
      duration: 1.1
    });
  }, [destinations, selectedDestination, onSelectDestination]);

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([40.0, -3.7], 6, {
        animate: true,
        duration: 1.0
      });
    }
  };

  // Google Maps / Apple Maps universal turn-by-turn navigation handoff URL
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${selectedDestination.capital || selectedDestination.name}, España`
  )}`;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#F7F1E7] select-none">
      {/* 1. Leaflet Map Viewport with OpenStreetMap and Sepia/Grayscale Cream Filter */}
      <div
        ref={mapContainerRef}
        className="w-full h-[460px] sm:h-[540px] z-0 focus:outline-none"
        aria-label="Mapa interactivo Leaflet de las 17 comunidades de España"
      />

      {/* 2. Top-Left Territorial Label (Borderless) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-[1000] pointer-events-none">
        <div className="bg-[#FBF8F1]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-[#52634D] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A51E2D]" />
          <span>MAPA EDITORIAL LEAFLET · PENÍNSULA E ISLAS</span>
        </div>
      </div>

      {/* 3. Bottom-Left Reset & Peninsula View Controller */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-[1000]">
        <button
          onClick={handleResetView}
          className="bg-[#FBF8F1]/95 hover:bg-white text-[#222522] text-xs font-mono font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 shadow-sm hover:scale-105"
          title="Centrar vista peninsular de España"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#A51E2D]" />
          <span>Vista General España</span>
        </button>
      </div>

      {/* 4. RE-OPEN PILL BUTTON (Shown when card is dismissed by clicking map canvas) */}
      {!isCardVisible && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCardVisible(true);
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[1000] bg-[#121110]/90 hover:bg-[#121110] text-[#E2B342] text-xs font-mono font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-lg border border-[#E2B342]/30 hover:scale-105"
          aria-label={`Ver ficha de ${selectedDestination.name}`}
        >
          <MapPin className="w-3.5 h-3.5 text-[#E2B342]" />
          <span>Ficha: {selectedDestination.name}</span>
        </button>
      )}

      {/* 5. THE UTILITY OVERLAY: Pop-Aesthetic UI Card with Location Name & Bold 'Cómo Llegar' Button */}
      {isCardVisible && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[1000] max-w-[280px] sm:max-w-sm w-full bg-[#121110]/95 backdrop-blur-md text-[#FBF8F1] p-4 sm:p-5 rounded-2xl shadow-xl space-y-3 transition-all duration-300 animate-fadeIn"
        >
          {/* Destination Header Tag with Close Button */}
          <div className="flex items-center justify-between gap-2 text-xs sm:text-xs font-mono uppercase tracking-wider text-[#E2B342]">
            <div className="flex items-center gap-1.5 font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#E2B342]" />
              <span>DESTINO ACTIVO</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60">
                {selectedDestination.coordinates[0].toFixed(2)}°N,{' '}
                {Math.abs(selectedDestination.coordinates[1]).toFixed(2)}°W
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCardVisible(false);
                }}
                className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                title="Cerrar tarjeta"
                aria-label="Cerrar ficha"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Location Name & Capital / Community Subtitle */}
          <div className="space-y-0.5">
            <h4 className="text-xl sm:text-2xl font-serif font-black text-[#FBF8F1] leading-tight">
              {selectedDestination.name}
            </h4>
            <p className="text-xs text-white/75 font-sans font-medium line-clamp-1">
              {selectedDestination.capital ? `Capital: ${selectedDestination.capital}` : selectedDestination.region}
            </p>
          </div>

          {/* Notable Landmark / Highlight preview */}
          <div className="text-xs text-[#FBF8F1]/85 bg-white/5 rounded-lg p-2.5 space-y-1">
            <div className="flex items-center gap-1.5 text-[#E2B342] font-bold text-xs uppercase font-mono">
              <Sparkles className="w-3 h-3" />
              <span>Patrimonio Destacado</span>
            </div>
            <p className="line-clamp-2 leading-relaxed text-white/90">
              {selectedDestination.notableLandmark || selectedDestination.culturalHighlight}
            </p>
          </div>

          {/* High-Speed Rail connection snippet */}
          {selectedDestination.travelConnection && (
            <div className="flex items-center gap-1.5 text-xs text-white/70 font-mono">
              <Train className="w-3 h-3 text-[#A51E2D]" />
              <span className="line-clamp-1">{selectedDestination.travelConnection}</span>
            </div>
          )}

          {/* BOLD 'CÓMO LLEGAR' (GET DIRECTIONS) BUTTON WITH EXTERNAL UNIVERSAL MAP HANDOFF */}
          <div className="pt-1">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#A51E2D] hover:bg-[#861A27] text-[#FBF8F1] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md group hover:scale-[1.02]"
              aria-label={`Cómo llegar a ${selectedDestination.name} en Google Maps`}
            >
              <Navigation className="w-4 h-4 text-[#E2B342] group-hover:rotate-12 transition-transform" />
              <span>Cómo Llegar</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/70 ml-0.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
