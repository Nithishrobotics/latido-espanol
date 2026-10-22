import { ANDALUCIA_DISHES } from './culinary/andalucia';
import { CATALUNYA_DISHES } from './culinary/catalunya';
import { MADRID_CENTRO_DISHES } from './culinary/madridycentro';
import { NORTE_DISHES } from './culinary/norte';
import { CASTILLA_Y_LEON_DISHES } from './culinary/castillayleon';
import { CASTILLA_LA_MANCHA_DISHES } from './culinary/castillalamancha';
import { GALICIA_DISHES } from './culinary/galicia';
import { MEDITERRANEO_DISHES } from './culinary/mediterraneo';
import { PANHISPANICOS_DISHES } from './culinary/panhispanicos';
import { ISLAS_Y_RESTO_DISHES } from './culinary/islasyresto';

export interface HistoryAndOrigins {
  eraOrCentury: string;
  narrative: string;
  culturalEvolution: string;
  anecdoteOrLegend?: string;
}

export interface TraditionalMethodStep {
  stepNumber: number;
  title: string;
  description: string;
  artisanTip: string;
}

export interface ProcessPhoto {
  title: string;
  subtitle: string;
  imageUrl: string;
  caption: string;
}

export interface CulinaryTerm {
  term: string;
  definition: string;
}

export interface CulinaryHeritageDish {
  id: string;
  name: string;
  spanishTitle: string;
  category:
    | 'Arroces'
    | 'Cuchara y Puchero'
    | 'Asados y Fuegos'
    | 'Tapeo y Bocados'
    | 'Sopas Frías'
    | 'Dulces y Postres'
    | 'Mar y Costas';
  originType: 'city' | 'region' | 'panhispanic';
  originLocation: string;
  originBadge: string;
  historicalRoot: string;
  historyAndOrigins: HistoryAndOrigins;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  photoTag: string;
  description: string;
  ingredients: string[];
  traditionalMethod: TraditionalMethodStep[];
  processPhotos: ProcessPhoto[];
  culinaryTerms: CulinaryTerm[];
  pairing: {
    beverage: string;
    regionDO: string;
    note: string;
  };
  culturalRitual: {
    title: string;
    description: string;
  };
  keyPhrase: {
    spanish: string;
    english: string;
    phonetic: string;
  };
}

// Complete exhaustive compilation of Spain's authentic culinary heritage dishes
export const CULINARY_HERITAGE_DISHES: CulinaryHeritageDish[] = [
  ...PANHISPANICOS_DISHES,
  ...ANDALUCIA_DISHES,
  ...CATALUNYA_DISHES,
  ...MADRID_CENTRO_DISHES,
  ...NORTE_DISHES,
  ...CASTILLA_Y_LEON_DISHES,
  ...CASTILLA_LA_MANCHA_DISHES,
  ...GALICIA_DISHES,
  ...MEDITERRANEO_DISHES,
  ...ISLAS_Y_RESTO_DISHES
];

// Helper to get all dishes sorted A-Z by name
export const CULINARY_HERITAGE_DISHES_SORTED_AZ: CulinaryHeritageDish[] = [
  ...CULINARY_HERITAGE_DISHES
].sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));

// Helper function to find a dish by its ID
export function getDishById(id: string): CulinaryHeritageDish | undefined {
  return CULINARY_HERITAGE_DISHES.find((d) => d.id === id);
}

export const CULINARY_PILLARS = [
  {
    title: 'El Aceite de Oliva Virgen Extra (AOVE)',
    subtitle: 'El oro líquido milenario',
    description:
      'España es el mayor productor y custodio mundial de aceite de oliva. Variedades como Picual de Jaén, Hojiblanca de Córdoba y Arbequina de Cataluña constituyen la grasa sagrada que une todas las cocinas peninsulares.',
    detail:
      'Más de 260 millones de olivos y 32 Denominaciones de Origen Protegidas garantizan un zumo de fruta natural prensado en frío con aromas de hierba fresca, tomatera y almendra verde.'
  },
  {
    title: 'El Cerdo Ibérico y la Dehesa',
    subtitle: 'Ecosistema único en el mundo',
    description:
      'El jamón 100% ibérico de bellota procede de animales criados en libertad en las dehesas de encinas y alcornoques de Extremadura, Guijuelo, Jabugo y Los Pedroches.',
    detail:
      'Durante la montanera, el cerdo camina hasta 14 km diarios alimentándose de bellotas ricas en ácido oleico, confiriendo a la carne sus vetas nacaradas que se funden a temperatura corporal.'
  },
  {
    title: 'El Rito Sagrado de la Sobremesa',
    subtitle: 'La conversación como bien inmaterial',
    description:
      'En España la comida no concluye al tragar el último bocado. La sobremesa es el periodo reposado que transcurre tras el café o el digestivo, donde familiares y amigos debaten sin mirar el reloj.',
    detail:
      'Un rasgo sociológico protegido por la UNESCO dentro de la Dieta Mediterránea que antepone la convivencia humana a la prisa productiva moderna.'
  }
];
