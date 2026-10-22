import { ANDALUCIA_DESTINATIONS } from './destinations/andalucia';
import { CASTILLA_Y_LEON_DESTINATIONS } from './destinations/castillayleon';
import { CASTILLA_LA_MANCHA_DESTINATIONS } from './destinations/castillalamancha';
import { MADRID_CENTRO_DESTINATIONS } from './destinations/madridycentro';
import { CATALUNYA_DESTINATIONS } from './destinations/catalunya';
import { NORTE_DESTINATIONS } from './destinations/norte';
import { GALICIA_DESTINATIONS } from './destinations/galicia';
import { EXTREMADURA_Y_RESTO_DESTINATIONS } from './destinations/extremadurayresto';
import { MEDITERRANEO_Y_RESTO_DESTINATIONS } from './destinations/mediterraneoyresto';
import { ISLAS_Y_RESTO_DESTINATIONS } from './destinations/islasyresto';

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  photoTag: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SecretSpot {
  id: string;
  name: string;
  distance: string;
  description: string;
  imageUrl: string;
  photoTag: string;
}

export interface TravelDossier {
  recommendedStays: string;
  hotelZones: { title: string; desc: string }[];
  dailyBudget: {
    accommodation: { eur: string; usd: string; note: string };
    dining: { eur: string; usd: string; note: string };
    transit: { eur: string; usd: string; note: string };
    total: { eur: string; usd: string };
  };
}

export interface UnifiedDestination {
  id: string;
  name: string;
  officialName: string;
  capital: string;
  region: string;
  coordinates: [number, number]; // [lat, lng]
  badge: string;
  accentColor: string;
  tagline: string;
  photoTag: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  intro: string;
  culturalHighlight: string;
  englishHighlight: string;
  iconicDish: string;
  languages: string;
  notableLandmark: string;
  visitorTip: string;
  spanishPhrase: {
    spanish: string;
    english: string;
    phonetic: string;
  };
  travelConnection: string;
  officialLink: {
    label: string;
    url: string;
  };
  attractions: {
    name: string;
    desc: string;
    highlight: string;
  }[];
  gallery: GalleryPhoto[];
  secretSpots: SecretSpot[];
  travelDossier: TravelDossier;
}

// Complete exhaustive compilation of Spain's 50 provincial capitals plus major tourist hubs
export const ALL_DESTINATIONS: UnifiedDestination[] = [
  ...MADRID_CENTRO_DESTINATIONS,
  ...CATALUNYA_DESTINATIONS,
  ...ANDALUCIA_DESTINATIONS,
  ...NORTE_DESTINATIONS,
  ...CASTILLA_Y_LEON_DESTINATIONS,
  ...CASTILLA_LA_MANCHA_DESTINATIONS,
  ...GALICIA_DESTINATIONS,
  ...EXTREMADURA_Y_RESTO_DESTINATIONS,
  ...MEDITERRANEO_Y_RESTO_DESTINATIONS,
  ...ISLAS_Y_RESTO_DESTINATIONS
];

// Helper to get all destinations sorted A-Z by name
export const ALL_DESTINATIONS_SORTED_AZ: UnifiedDestination[] = [...ALL_DESTINATIONS].sort((a, b) =>
  a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
);

// Helper function to find by ID
export function getDestinationById(id: string): UnifiedDestination | undefined {
  return ALL_DESTINATIONS.find(d => d.id === id);
}
