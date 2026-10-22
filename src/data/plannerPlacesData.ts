export interface PlaceOption {
  id: string;
  name: string;
  region: string;
  tagline: string;
  icon: string;
  accentColor: string;
  recommendedMinDays: number;
  highlightMonument: string;
  aveTransitNote: string;
}

export interface DayItineraryTemplate {
  subDayNumber: number;
  city: string;
  region: string;
  theme: string;
  morning: { time: string; place: string; activity: string };
  afternoon: { time: string; place: string; activity: string };
  evening: { time: string; place: string; activity: string };
  transit: string;
  phrase: { spanish: string; english: string; phonetic: string };
  landmarkTag: string;
  visitorTip: string;
}

export interface RoutePackage {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  placeIds: string[];
  suggestedDays: number;
  description: string;
}

export const AVAILABLE_PLACES: PlaceOption[] = [
  {
    id: 'madrid',
    name: 'Madrid',
    region: 'Comunidad de Madrid',
    tagline: 'Capital imperial, pinacotecas del arte y tabernas castizas',
    icon: 'Landmark',
    accentColor: '#A51E2D',
    recommendedMinDays: 2,
    highlightMonument: 'Museo Nacional del Prado y Plaza Mayor',
    aveTransitNote: 'Núcleo central Renfe AVE (Km 0 peninsular desde Atocha)'
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    region: 'Cataluña',
    tagline: 'Modernismo de Gaudí, mar Mediterráneo y Barrio Gótico',
    icon: 'Sparkles',
    accentColor: '#1D4ED8',
    recommendedMinDays: 2,
    highlightMonument: 'Basílica de la Sagrada Família y Park Güell',
    aveTransitNote: '2h 45m en AVE de alta velocidad desde Madrid-Atocha'
  },
  {
    id: 'sevilla',
    name: 'Sevilla',
    region: 'Andalucía',
    tagline: 'Cuna del flamenco, Real Alcázar y aroma a flor de azahar',
    icon: 'Sun',
    accentColor: '#BA6649',
    recommendedMinDays: 2,
    highlightMonument: 'Real Alcázar de Sevilla y La Giralda',
    aveTransitNote: '2h 30m en AVE directo desde Madrid'
  },
  {
    id: 'granada',
    name: 'Granada',
    region: 'Andalucía',
    tagline: 'La Alhambra nazarí al pie de las nieves de Sierra Nevada',
    icon: 'Castle',
    accentColor: '#52634D',
    recommendedMinDays: 2,
    highlightMonument: 'Palacios Nazaríes de la Alhambra y Generalife',
    aveTransitNote: '3h 30m en AVE desde Madrid / 2h 20m Avant desde Sevilla'
  },
  {
    id: 'valencia',
    name: 'Valencia',
    region: 'Comunitat Valenciana',
    tagline: 'Cuna de la paella, Ciudad de las Ciencias y brisa mediterránea',
    icon: 'Utensils',
    accentColor: '#E2B342',
    recommendedMinDays: 1,
    highlightMonument: 'Ciudad de las Artes y las Ciencias y Lonja de la Seda',
    aveTransitNote: '1h 50m en AVE desde Madrid-Chamartín'
  },
  {
    id: 'cordoba',
    name: 'Córdoba',
    region: 'Andalucía',
    tagline: 'Bosque de 850 columnas en la Mezquita y patios floridos',
    icon: 'Compass',
    accentColor: '#854D0E',
    recommendedMinDays: 1,
    highlightMonument: 'Mezquita-Catedral y Calleja de las Flores',
    aveTransitNote: '1h 45m en AVE desde Madrid / 45m desde Sevilla'
  },
  {
    id: 'toledo',
    name: 'Toledo',
    region: 'Castilla-La Mancha',
    tagline: 'La Ciudad Imperial de las Tres Culturas ceñida por el río Tajo',
    icon: 'Shield',
    accentColor: '#7C2D12',
    recommendedMinDays: 1,
    highlightMonument: 'Catedral Primada gótica y Mirador del Valle',
    aveTransitNote: '33 min en tren Avant desde Madrid-Atocha'
  },
  {
    id: 'san_sebastian',
    name: 'San Sebastián (Donostia)',
    region: 'País Vasco',
    tagline: 'Bahía de la Concha y capital gastronómica mundial del pintxo',
    icon: 'Waves',
    accentColor: '#0E7490',
    recommendedMinDays: 2,
    highlightMonument: 'Playa de la Concha y Parte Vieja gastronómica',
    aveTransitNote: 'Trenes Alvia de alta velocidad desde Madrid (4h 45m)'
  },
  {
    id: 'santiago',
    name: 'Santiago de Compostela',
    region: 'Galicia',
    tagline: 'Meta milenaria del Camino, nieblas atlánticas y granito',
    icon: 'MapPin',
    accentColor: '#0369A1',
    recommendedMinDays: 1,
    highlightMonument: 'Catedral de Santiago y Plaza del Obradoiro',
    aveTransitNote: '3h 15m en tren AVE directo desde Madrid-Chamartín'
  },
  {
    id: 'segovia',
    name: 'Segovia',
    region: 'Castilla y León',
    tagline: 'Acueducto romano bimilenario y alcázar de cuento de hadas',
    icon: 'Arch',
    accentColor: '#B45309',
    recommendedMinDays: 1,
    highlightMonument: 'Acueducto Romano de granito sin cemento y Alcázar',
    aveTransitNote: '27 min en tren Avant cruzando el túnel de Guadarrama'
  },
  {
    id: 'salamanca',
    name: 'Salamanca',
    region: 'Castilla y León',
    tagline: 'Universidad dorada de 1218 y la plaza barroca más bella',
    icon: 'BookOpen',
    accentColor: '#D97706',
    recommendedMinDays: 1,
    highlightMonument: 'Fachada plateresca de la Universidad y Plaza Mayor',
    aveTransitNote: '1h 35m en tren Alvia desde Madrid'
  },
  {
    id: 'malaga',
    name: 'Málaga',
    region: 'Andalucía',
    tagline: 'Costa del Sol, Museo Picasso y espetos de sardinas frente al mar',
    icon: 'Sun',
    accentColor: '#EA580C',
    recommendedMinDays: 1,
    highlightMonument: 'Alcazaba árabe, Teatro Romano y Muelle Uno',
    aveTransitNote: '2h 35m en AVE directo desde Madrid-Atocha'
  },
  {
    id: 'ronda',
    name: 'Ronda & Pueblos Blancos',
    region: 'Andalucía',
    tagline: 'El impresionante Tajo de piedra y caseríos encalados en la roca',
    icon: 'Mountain',
    accentColor: '#4D7C0F',
    recommendedMinDays: 1,
    highlightMonument: 'Puente Nuevo sobre el desfiladero de 100 m',
    aveTransitNote: 'Enlace Avant / Media Distancia desde Sevilla o Málaga'
  },
  {
    id: 'bilbao',
    name: 'Bilbao',
    region: 'País Vasco',
    tagline: 'Titanio del Guggenheim, ría navegable y vanguardia norteña',
    icon: 'Building2',
    accentColor: '#334155',
    recommendedMinDays: 1,
    highlightMonument: 'Museo Guggenheim Bilbao y Casco Viejo',
    aveTransitNote: 'Tren Alvia directo desde Madrid / 1h bus desde San Sebastián'
  },
  {
    id: 'mallorca',
    name: 'Palma de Mallorca',
    region: 'Islas Baleares',
    tagline: 'Catedral gótica sobre el mar, calas turquesas y patios mallorquines',
    icon: 'Sailboat',
    accentColor: '#0284C7',
    recommendedMinDays: 2,
    highlightMonument: 'Catedral-Basílica de Santa María (La Seu)',
    aveTransitNote: 'Conexión en ferry rápido desde Valencia/Barcelona o vuelo'
  }
];

export const ROUTE_PACKAGES: RoutePackage[] = [
  {
    id: 'clasica',
    title: 'Ruta Clásica Peninsular',
    subtitle: 'Madrid · Barcelona · Sevilla · Granada',
    icon: 'Landmark',
    placeIds: ['madrid', 'barcelona', 'sevilla', 'granada'],
    suggestedDays: 7,
    description: 'La travesía española imprescindible: capital imperial, modernismo catalán y el esplendor andalusí en trenes de alta velocidad AVE.'
  },
  {
    id: 'andalucia',
    title: 'Al-Ándalus y Sur Flamenco',
    subtitle: 'Sevilla · Córdoba · Granada · Málaga · Ronda',
    icon: 'Flame',
    placeIds: ['sevilla', 'cordoba', 'granada', 'malaga', 'ronda'],
    suggestedDays: 8,
    description: 'Naranjos en flor, mezquitas omeyas, fortalezas nazaríes, espetos de sardina y tablaos de cante jondo.'
  },
  {
    id: 'mediterraneo',
    title: 'Arco Mediterráneo & Vanguardia',
    subtitle: 'Barcelona · Valencia · Palma de Mallorca',
    icon: 'Waves',
    placeIds: ['barcelona', 'valencia', 'mallorca'],
    suggestedDays: 6,
    description: 'Brisa marina, paella de la huerta, mosaicos de Gaudí y calas cristalinas en las islas Baleares.'
  },
  {
    id: 'patrimonio_castilla',
    title: 'Castilla Imperial & Patrimonio UNESCO',
    subtitle: 'Madrid · Toledo · Segovia · Salamanca',
    icon: 'Castle',
    placeIds: ['madrid', 'toledo', 'segovia', 'salamanca'],
    suggestedDays: 5,
    description: 'Acueductos romanos, murallas medievales, catedrales góticas y la universidad más antigua del mundo hispánico.'
  },
  {
    id: 'norte_verde',
    title: 'Norte Verde & Gastronomía Cantábrica',
    subtitle: 'San Sebastián · Bilbao · Santiago de Compostela',
    icon: 'Compass',
    placeIds: ['san_sebastian', 'bilbao', 'santiago'],
    suggestedDays: 6,
    description: 'La capital mundial del pintxo, el titanio del Guggenheim y la devoción atlántica del Camino de Santiago.'
  },
  {
    id: 'gran_tour',
    title: 'Gran Tour de Toda España',
    subtitle: '10 Destinos Cumbre Peninsulares',
    icon: 'Crown',
    placeIds: ['madrid', 'toledo', 'barcelona', 'valencia', 'cordoba', 'sevilla', 'granada', 'san_sebastian', 'santiago', 'segovia'],
    suggestedDays: 14,
    description: 'La expedición definitiva de norte a sur por las 10 ciudades con mayor riqueza cultural de España.'
  }
];

// Curated daily itinerary activities per place (supports multi-day stays per place)
export const PLACE_DAY_TEMPLATES: Record<string, DayItineraryTemplate[]> = {
  madrid: [
    {
      subDayNumber: 1,
      city: 'Madrid',
      region: 'Comunidad de Madrid',
      theme: 'Paseo del Arte y Corazón de los Austrias',
      morning: {
        time: '09:30 - 13:00',
        place: 'Museo Nacional del Prado',
        activity: 'Admira «Las Meninas» de Velázquez, las Pinturas Negras de Goya y camina por el arbolado Paseo del Prado (Paisaje de la Luz, UNESCO).'
      },
      afternoon: {
        time: '14:00 - 17:30',
        place: 'Plaza Mayor y Mercado de San Miguel',
        activity: 'Almuerzo tradicional de menú del día o clásico bocadillo de calamares. Paseo por la calle Mayor y el mirador del Palacio Real.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Parque de El Retiro y Chocolatería San Ginés',
        activity: 'Paseo en barca por el estanque de El Retiro, visita al Palacio de Cristal de 1887 y merienda de churros crujientes con chocolate caliente.'
      },
      transit: 'Metro de Madrid (Líneas 1 y 2) y paseos peatonales por el centro histórico.',
      phrase: {
        spanish: '«¿A qué hora abre el Museo del Prado mañana?»',
        english: 'What time does the Prado Museum open tomorrow?',
        phonetic: 'Ah keh OH-rah AH-breh ehl moo-SEH-oh dehl PRAH-doh mah-NYAH-nah?'
      },
      landmarkTag: 'Museo del Prado & Retiro',
      visitorTip: 'El Museo del Prado ofrece entrada gratuita de lunes a sábado de 18:00 a 20:00 h. Llega 30 minutos antes para acceder sin demoras.'
    },
    {
      subDayNumber: 2,
      city: 'Madrid',
      region: 'Comunidad de Madrid',
      theme: 'Palacio Real, Templo de Debod y Barrio de las Letras',
      morning: {
        time: '09:30 - 13:00',
        place: 'Palacio Real y Catedral de la Almudena',
        activity: 'Recorre el salón del trono rococó, la armería real histórica y los jardines de Sabatini con vistas al valle del Manzanares.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'Barrio de las Letras (Huertas)',
        activity: 'Almuerzo en tabernas castizas donde vivieron Miguel de Cervantes y Lope de Vega. Citas literarias grabadas en letras doradas sobre el pavimento.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Templo de Debod y Gran Vía',
        activity: 'Atardecer frente al auténtico templo egipcio del siglo II a.C. regalado a España y paseo nocturno bajo las marquesinas neoclásicas de Gran Vía.'
      },
      transit: 'Líneas de metro 5 y 10, y cómodos trayectos a pie.',
      phrase: {
        spanish: '«¿Dónde está la entrada para los jardines del Palacio Real?»',
        english: 'Where is the entrance to the Royal Palace gardens?',
        phonetic: 'DOHN-deh ehs-TAH lah ehn-TRAH-dah PAH-rah lohs hahr-DEE-nehs?'
      },
      landmarkTag: 'Palacio Real & Debod',
      visitorTip: 'El atardecer en el Templo de Debod es el mirador fotográfico gratuito más codiciado de la capital.'
    },
    {
      subDayNumber: 3,
      city: 'Madrid',
      region: 'Comunidad de Madrid',
      theme: 'Reina Sofía («Guernica»), Malasaña y Mercado de la Paz',
      morning: {
        time: '10:00 - 13:00',
        place: 'Museo Nacional Centro de Arte Reina Sofía',
        activity: 'Encuentro cara a cara con el monumental «Guernica» de Pablo Picasso y las visiones surrealistas de Salvador Dalí y Joan Miró.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'Barrio de Malasaña y Plaza del Dos de Mayo',
        activity: 'Ruta de tapas creativas, cafés de especialidad, librerías independientes y tiendas de artesanía española moderna.'
      },
      evening: {
        time: '18:30 - 23:00',
        place: 'Azotea del Círculo de Bellas Artes',
        activity: 'Cóctel al atardecer sobre la confluencia de la calle Alcalá y Gran Vía con vistas panorámicas 360° de toda la meseta madrileña.'
      },
      transit: 'Metro línea 1 (Estación del Arte) y línea 2 (Sevilla).',
      phrase: {
        spanish: '«¿Nos trae dos copas de vino tinto de la casa, por favor?»',
        english: 'Could you bring us two glasses of house red wine, please?',
        phonetic: 'Nohs TRAH-eh dohs KOH-pahs deh VEE-noh TEEN-toh deh lah KAH-sah?'
      },
      landmarkTag: 'Reina Sofía & Bellas Artes',
      visitorTip: 'La terraza del Círculo de Bellas Artes cobra una pequeña entrada de acceso a la azotea, pero la panorámica es inigualable.'
    }
  ],

  barcelona: [
    {
      subDayNumber: 1,
      city: 'Barcelona',
      region: 'Cataluña',
      theme: 'Gaudí, Brisa Mediterránea y Modernismo',
      morning: {
        time: '09:00 - 12:30',
        place: 'Passeig de Gràcia (Casa Batlló y La Pedrera)',
        activity: 'Admira la fachada ondulante inspirada en el dragón de Sant Jordi en Casa Batlló y las chimeneas guerreras de terracota en La Pedrera.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'Basílica de la Sagrada Família',
        activity: 'Entrada reservada para contemplar el bosque arbóreo de columnas de piedra de Antoni Gaudí y los vitrales que refractan la luz de la tarde.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Park Güell y Barrio de Gràcia',
        activity: 'Vistas panorámicas sobre la costa desde el banco ondulante de trencadís y cena de tapas creativas en las plazas de Gràcia.'
      },
      transit: 'Metro T-casual de Barcelona (Líneas L3 verde y L2 lila).',
      phrase: {
        spanish: '«Tengo una reserva confirmada para las dos en punto.»',
        english: 'I have a confirmed reservation for two o’clock sharp.',
        phonetic: 'TEHN-goh OO-nah reh-SEHR-vah kohn-feer-MAH-dah PAH-rah lahs dohs ehn POON-toh'
      },
      landmarkTag: 'Sagrada Família & Gaudí',
      visitorTip: 'Reserva tus entradas a la Sagrada Família con al menos 2 semanas de antelación para no quedarte sin franja horaria.'
    },
    {
      subDayNumber: 2,
      city: 'Barcelona',
      region: 'Cataluña',
      theme: 'Barrio Gótico, Santa Maria del Mar y Frente Marítimo',
      morning: {
        time: '09:30 - 13:00',
        place: 'Barri Gòtic y Catedral de Santa Eulàlia',
        activity: 'Pérdida voluntaria entre callejuelas de piedra medieval, la Plaça del Rei y el claustro gótico con trece ocas blancas.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'El Born y Basílica de Santa Maria del Mar',
        activity: 'La imponente basílica gótica de los pescadores construida por los vecinos en el siglo XIV y tiendas de diseño artesanal.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Playa de la Barceloneta y Cena Marinera',
        activity: 'Paseo al atardecer frente al mar Mediterráneo y cena de arroz a banda o fideuá con alioli en una terraza marinera.'
      },
      transit: 'Metro L4 (amarilla) y paseos a pie por la rambla del mar.',
      phrase: {
        spanish: '«¿Nos trae una ración de pan con tomate y fideuá?»',
        english: 'Could you bring us bread with tomato and fideuá?',
        phonetic: 'Nohs TRAH-eh OO-nah rah-SYOHN deh pahn kohn toh-MAH-teh ee fee-deh-WAH?'
      },
      landmarkTag: 'Barri Gòtic y Barceloneta',
      visitorTip: 'El pan con tomate (pa amb tomàquet) se frota en mesa con tomate de colgar, ajo y aceite virgen extra.'
    },
    {
      subDayNumber: 3,
      city: 'Barcelona',
      region: 'Cataluña',
      theme: 'Colina de Montjuïc, Fundación Miró y Fuentes Mágicas',
      morning: {
        time: '10:00 - 13:30',
        place: 'Fundació Joan Miró y Castillo de Montjuïc',
        activity: 'Sube en teleférico hasta la cima del monte para contemplar el puerto comercial y las obras abstractas de Miró en un museo bañado por luz blanca.'
      },
      afternoon: {
        time: '14:00 - 17:30',
        place: 'Poble Espanyol y Mercat de la Boqueria',
        activity: 'Explora réplicas arquitectónicas de toda España y degusta jamón ibérico de bellota y zumos de frutas frescas en las paradas de La Boqueria.'
      },
      evening: {
        time: '18:30 - 22:00',
        place: 'Plaça d’Espanya y Mirador de Las Arenas',
        activity: 'Vistas crepusculares desde la antigua plaza de toros reconvertida y cena de tapas catalanas.'
      },
      transit: 'Teleférico de Montjuïc y funicular integrado en la red TMB.',
      phrase: {
        spanish: '«¿Dónde se toma el teleférico para subir a Montjuïc?»',
        english: 'Where do we take the cable car to go up Montjuïc?',
        phonetic: 'DOHN-deh seh TOH-mah ehl teh-leh-FEH-ree-koh PAH-rah soo-BEER ah mohn-ZHOO-eek?'
      },
      landmarkTag: 'Montjuïc & La Boqueria',
      visitorTip: 'El funicular de Montjuïc tiene el mismo precio que un billete de metro estándar de la zona 1.'
    }
  ],

  sevilla: [
    {
      subDayNumber: 1,
      city: 'Sevilla',
      region: 'Andalucía',
      theme: 'Real Alcázar, Naranjos en Flor y Pasión Flamenca',
      morning: {
        time: '09:30 - 13:00',
        place: 'Real Alcázar de Sevilla',
        activity: 'El palacio real en uso más antiguo de Europa: arquerías mudéjares talladas, azulejos polícromos y jardines con pavos reales y arrayanes.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'La Giralda, Catedral y Barrio de Santa Cruz',
        activity: 'Subida por las 35 rampas de la torre almohade para contemplar toda Sevilla y paseo bajo la sombra de los naranjos amargos.'
      },
      evening: {
        time: '18:30 - 23:00',
        place: 'Plaza de España y Espectáculo de Flamenco',
        activity: 'Paseo en barca por los canales de azulejos de la Plaza de España y asistencia a un tablao de cante jondo, toque y baile flamenco puro.'
      },
      transit: 'Tranvía MetroCentro y paseos peatonales por Santa Cruz.',
      phrase: {
        spanish: '«Quisiera dos entradas para el espectáculo flamenco de esta noche.»',
        english: 'I would like two tickets for tonight’s flamenco show.',
        phonetic: 'Kee-SYEH-rah dohs ehn-TRAH-dahs PAH-rah ehl ehs-pehk-TAH-koo-loh flah-MEHN-koh'
      },
      landmarkTag: 'Plaza de España & Alcázar',
      visitorTip: 'En verano, Sevilla vive de noche. Las familias salen a pasear a partir de las 21:00 h cuando refresca la brisa del Guadalquivir.'
    },
    {
      subDayNumber: 2,
      city: 'Sevilla',
      region: 'Andalucía',
      theme: 'Barrio de Triana, Torre del Oro y Las Setas',
      morning: {
        time: '09:30 - 12:30',
        place: 'Puente de Isabel II y Barrio de Triana',
        activity: 'Cruza el río Guadalquivir hacia la cuna de los ceramistas y alfareros. Visita el Centro de la Cerámica de Triana y el mercado de abastos.'
      },
      afternoon: {
        time: '13:00 - 17:00',
        place: 'Torre del Oro y Paseo de Colón',
        activity: 'Almorzar raciones de pescaíto frito en la calle Betis con vistas a la Torre del Oro del siglo XIII y la Maestranza.'
      },
      evening: {
        time: '18:00 - 22:30',
        place: 'Metropol Parasol («Las Setas de Sevilla»)',
        activity: 'Camina por las pasarelas sinuosas de la mayor estructura de madera del mundo al caer el sol y cena de tapas por la Alameda de Hércules.'
      },
      transit: 'Paseos a pie a lo largo de las riberas del río Guadalquivir.',
      phrase: {
        spanish: '«¿Tiene pescaíto frito variado y salmorejo?»',
        english: 'Do you have mixed fried fish and salmorejo?',
        phonetic: 'TYEH-neh pehs-kah-EE-toh FREE-toh vah-RYAH-doh ee sahl-moh-REH-hoh?'
      },
      landmarkTag: 'Triana & Las Setas',
      visitorTip: 'Sube a Las Setas justo media hora antes de la puesta de sol para disfrutar de la iluminación interactiva nocturna.'
    }
  ],

  granada: [
    {
      subDayNumber: 1,
      city: 'Granada',
      region: 'Andalucía',
      theme: 'La Fortaleza Roja de la Alhambra y el Generalife',
      morning: {
        time: '09:00 - 13:30',
        place: 'Palacios Nazaríes de la Alhambra',
        activity: 'El Patio de los Leones, la Sala de Dos Hermanas y mocárabes que simulan estalactitas celestiales en la joya culmen del arte islámico peninsular.'
      },
      afternoon: {
        time: '14:00 - 17:30',
        place: 'Jardines del Generalife y Ruta de la Tapa Gratis',
        activity: 'Acequias cantarinas entre cipreses y rosales de los sultanes, seguido del tradicional tapeo granadino gratuito con cada consumición.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Mirador de San Nicolás en el Albaicín',
        activity: 'La puesta de sol más célebre de España viendo teñirse de rosa bermejo los muros de la Alhambra con el telón de nieve de Sierra Nevada.'
      },
      transit: 'Microbús urbano C30/C32 hacia la Alhambra y paseos a pie.',
      phrase: {
        spanish: '«Por favor, ¿la tapa viene incluida con la consumición?»',
        english: 'Please, is the tapa included with the drink?',
        phonetic: 'Pohr fah-VOHR, lah TAH-pah VYEH-neh een-kloo-EE-dah kohn lah kohn-soo-mee-SYOHN?'
      },
      landmarkTag: 'La Alhambra bajo Sierra Nevada',
      visitorTip: 'La entrada a los Palacios Nazaríes tiene hora estricta impresa en el billete; no te dejarán entrar si llegas ni un minuto tarde.'
    },
    {
      subDayNumber: 2,
      city: 'Granada',
      region: 'Andalucía',
      theme: 'Cuevas del Sacromonte, Alcaicería y Baños Árabes',
      morning: {
        time: '09:30 - 13:00',
        place: 'Cuevas del Sacromonte',
        activity: 'Visita a las viviendas trogloditas encaladas en la roca, cuna de las zambras gitanas y museo etnográfico de tradiciones flamencas.'
      },
      afternoon: {
        time: '13:30 - 17:00',
        place: 'La Alcaicería y Carrera del Darro',
        activity: 'El antiguo bazar de la seda con teterías árabes donde degustar té verde a la hierbabuena con dulces de almendra y miel.'
      },
      evening: {
        time: '18:00 - 21:30',
        place: 'Baños Árabes Hammam Al Ándalus',
        activity: 'Sesión de relajación en termas de agua caliente y templada bajo bóvedas estrelladas de ladrillo y aceites aromáticos de azahar.'
      },
      transit: 'Paseos a pie junto al murmullo del río Darro.',
      phrase: {
        spanish: '«Un té verde con hierbabuena y piñones, por favor.»',
        english: 'A green tea with mint and pine nuts, please.',
        phonetic: 'Oon teh VEHR-deh kohn yehr-bah-BWEH-nah ee pee-NYOH-nehs, pohr fah-VOHR'
      },
      landmarkTag: 'Albaicín y Sacromonte',
      visitorTip: 'El paseo de la Carrera del Darro a los pies de la colina de la Alhambra es uno de los caminos románticos más bellos de Europa.'
    }
  ],

  valencia: [
    {
      subDayNumber: 1,
      city: 'Valencia',
      region: 'Comunitat Valenciana',
      theme: 'Cuna de la Paella y Vanguardia de las Ciencias',
      morning: {
        time: '09:00 - 12:30',
        place: 'Ciudad de las Artes y las Ciencias',
        activity: 'Pasea entre las estructuras futuristas de Santiago Calatrava: el Hemisfèric, el Museo de las Ciencias y los estanques turquesas de agua salina.'
      },
      afternoon: {
        time: '13:00 - 17:30',
        place: 'Playa de la Malvarrosa y Arrozales de la Albufera',
        activity: 'Degustación de la auténtica paella valenciana con pollo, conejo, judía verde (bajoqueta) y azafrán en una arrocería tradicional junto al mar.'
      },
      evening: {
        time: '18:30 - 22:00',
        place: 'Mercado Central y Lonja de la Seda',
        activity: 'Cúpulas modernistas de hierro y cristal del mercado, arquitectura gótica civil de la Lonja (UNESCO) y degustación de horchata artesanal con fartons.'
      },
      transit: 'Tranvía de Valencia hacia la playa y paseos por el Jardín del Turia.',
      phrase: {
        spanish: '«Queremos una auténtica paella valenciana con azafrán, por favor.»',
        english: 'We would like an authentic Valencian paella with saffron, please.',
        phonetic: 'keh-REH-mohs OO-nah ow-TEHN-tee-kah pah-EH-yah vah-lehn-SYAH-nah kohn ah-sah-FRAHN'
      },
      landmarkTag: 'Ciudad de las Ciencias & Paella',
      visitorTip: 'La auténtica paella valenciana nunca lleva marisco ni chorizo; sus ingredientes canónicos son arroz bomba, pollo, conejo y verduras de la huerta.'
    }
  ],

  cordoba: [
    {
      subDayNumber: 1,
      city: 'Córdoba',
      region: 'Andalucía',
      theme: 'El Bosque de Columnas y Patios de Azahar',
      morning: {
        time: '09:00 - 12:30',
        place: 'Mezquita-Catedral de Córdoba',
        activity: 'Entrada en el bosque hipóstilo de más de 850 columnas de jaspe, mármol y arcos bicolores de herradura del califato omeya.'
      },
      afternoon: {
        time: '13:00 - 17:30',
        place: 'Judería y Calleja de las Flores',
        activity: 'Laberinto andalusí con macetas de gitanillas azules en paredes encaladas. Almuerzo de salmorejo cordobés y berenjenas crujientes con miel de caña.'
      },
      evening: {
        time: '18:30 - 22:00',
        place: 'Puente Romano sobre el Guadalquivir',
        activity: 'Paseo crepuscular con la vista iluminada de la Mezquita reflejada en el río y visita a la Torre de la Calahorra.'
      },
      transit: 'Trayectos a pie por el casco histórico protegido por la UNESCO.',
      phrase: {
        spanish: '«¿Dónde está la entrada principal a la Mezquita-Catedral?»',
        english: 'Where is the main entrance to the Mosque-Cathedral?',
        phonetic: 'DOHN-deh ehs-TAH lah ehn-TRAH-dah preen-see-PAHL ah lah mehs-KEE-tah kah-teh-DRAHL?'
      },
      landmarkTag: 'Mezquita de Córdoba',
      visitorTip: 'El Patio de los Naranjos tiene entrada pública gratuita; es un lugar idóneo para descansar a la sombra de sus árboles.'
    }
  ],

  toledo: [
    {
      subDayNumber: 1,
      city: 'Toledo',
      region: 'Castilla-La Mancha',
      theme: 'La Ciudad Imperial de las Tres Culturas',
      morning: {
        time: '09:30 - 13:30',
        place: 'Catedral Primada de Santa María',
        activity: 'Contempla la sillería del coro tallada, la custodia de oro de Enrique de Arfe y la pintura cumbre de El Greco: «El entierro del Conde de Orgaz».'
      },
      afternoon: {
        time: '14:00 - 17:30',
        place: 'Judería y Sinagoga de Santa María la Blanca',
        activity: 'Paseo entre arcos de herradura moriscos y talleres de espadas toledanas y damasquinado en hilo de oro artesanal.'
      },
      evening: {
        time: '18:30 - 22:00',
        place: 'Mirador del Valle',
        activity: 'Panorámica fotográfica universal de Toledo abrazada por el meandro del río Tajo al caer el sol y degustación de mazapán tradicional toledano.'
      },
      transit: 'Tren Avant de Renfe (33 min desde Madrid) y microbuses urbanos.',
      phrase: {
        spanish: '«Quisiera un billete de ida y vuelta para el tren de Toledo, por favor.»',
        english: 'I would like a round-trip ticket for the Toledo train, please.',
        phonetic: 'Kee-SYEH-rah oon bee-YEH-teh deh EE-dah ee VWEHL-tah PAH-rah ehl trehn deh Toh-LEH-doh'
      },
      landmarkTag: 'Toledo y Río Tajo',
      visitorTip: 'El mazapán de los conventos de clausura toledanos se elabora desde el siglo XIII solo con almendras y azúcar.'
    }
  ],

  san_sebastian: [
    {
      subDayNumber: 1,
      city: 'San Sebastián',
      region: 'País Vasco',
      theme: 'Bahía de la Concha y la Ruta del Pintxo',
      morning: {
        time: '09:30 - 12:30',
        place: 'Paseo de la Concha y Monte Igueldo',
        activity: 'Camina por la barandilla modernista más célebre de España con vistas a la isla de Santa Clara y sube en el funicular centenario.'
      },
      afternoon: {
        time: '13:00 - 17:30',
        place: 'Parte Vieja Donostiarra',
        activity: 'El templo del txikiteo: degusta gildas de anchoa y guindilla, solomillo al foie, txangurro y tarta de queso de La Viña regados con txakoli frío.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Peine del Viento de Eduardo Chillida',
        activity: 'Esculturas de hierro ancladas en las rocas batidas por las olas del Cantábrico y paseo crepuscular por el Kursaal de Moneo.'
      },
      transit: 'Paseos a pie y autobuses urbanos Dbus.',
      phrase: {
        spanish: '«¿Nos recomienda un par de pintxos calientes de la casa?»',
        english: 'Could you recommend a couple of house hot pintxos for us?',
        phonetic: 'Nohs reh-koh-MYEHN-dah oon pahr deh PEEN-chohs kah-LYEHN-tehs deh lah KAH-sah?'
      },
      landmarkTag: 'Bahía de la Concha & Pintxos',
      visitorTip: 'En los bares de pintxos tradicionales donostiarras, los pintxos fríos se toman directamente de la barra y los calientes se piden al camarero.'
    }
  ],

  santiago: [
    {
      subDayNumber: 1,
      city: 'Santiago de Compostela',
      region: 'Galicia',
      theme: 'Plaza del Obradoiro, Botafumeiro y Pulpo Gallego',
      morning: {
        time: '09:00 - 12:30',
        place: 'Catedral de Santiago de Compostela',
        activity: 'Abrazo a la estatua del Apóstol Santiago, contemplación del Pórtico de la Gloria tallado por el Maestro Mateo y la misa del peregrino con el Botafumeiro.'
      },
      afternoon: {
        time: '13:00 - 17:00',
        place: 'Mercado de Abastos y Rúa do Franco',
        activity: 'Festín gallego en el mercado con marisco recién pescado: pulpo a feira con pimentón de la Vera, empanada de zamburiñas y vino Albariño.'
      },
      evening: {
        time: '18:00 - 22:00',
        place: 'Parque de la Alameda y Vista de las Torres',
        activity: 'Fotografía de la fachada barroca de la catedral entre robles centenarios y cena con la legendaria tarta de almendras de Santiago.'
      },
      transit: 'Paseos a pie por las losas de granito del casco histórico.',
      phrase: {
        spanish: '«¡Buen Camino! ¿Dónde se sellan las credenciales del peregrino?»',
        english: 'Good Way! Where are pilgrim credentials stamped?',
        phonetic: 'BWEHN kah-MEE-noh! DOHN-deh seh SEH-yahn lahs kreh-dehn-SYAH-lehs?'
      },
      landmarkTag: 'Catedral de Santiago & Obradoiro',
      visitorTip: 'El vuelo del Botafumeiro (enorme incensario de plata de 53 kg) no se realiza en todas las misas; consulta el horario litúrgico matutino.'
    }
  ],

  segovia: [
    {
      subDayNumber: 1,
      city: 'Segovia',
      region: 'Castilla y León',
      theme: 'Ingeniería Romana Bimilentenaria y Alcázar de Cuento',
      morning: {
        time: '09:00 - 13:00',
        place: 'Acueducto Romano de Segovia',
        activity: 'Maravíllate con los 167 arcos de bloques de granito encajados sin una gota de mortero que han resistido dos milenios intactos.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'Mesón Tradicional y Alcázar de Segovia',
        activity: 'Degustación del cochinillo asado crujiente cortado con el borde de un plato y visita a la fortaleza con torres cónicas que inspiró a Walt Disney.'
      },
      evening: {
        time: '18:00 - 21:30',
        place: 'Catedral de Segovia («Dama de las Catedrales»)',
        activity: 'Paseo por la judería y la plaza mayor antes de tomar el tren de alta velocidad de regreso.'
      },
      transit: 'Tren de Alta Velocidad Avant (27 min desde Madrid-Chamartín).',
      phrase: {
        spanish: '«Este acueducto romano se mantiene en pie sin cemento desde hace dos mil años.»',
        english: 'This Roman aqueduct has stood without mortar for two thousand years.',
        phonetic: 'EHS-teh ah-kweh-DOOK-toh roh-MAH-noh seh mahn-TYEH-neh ehn pyeh seen seh-MEHN-toh'
      },
      landmarkTag: 'Acueducto y Alcázar de Segovia',
      visitorTip: 'Prueba el postre típico segoviano llamado «Ponche Segoviano», un bizcocho empapado en almíbar cubierto de mazapán tostado.'
    }
  ],

  salamanca: [
    {
      subDayNumber: 1,
      city: 'Salamanca',
      region: 'Castilla y León',
      theme: 'Universidad Dorada de Arenisca y Plaza Mayor Barroca',
      morning: {
        time: '09:00 - 13:00',
        place: 'Universidad Histórica de Salamanca (1218)',
        activity: 'Busca la célebre rana de la suerte en la fachada plateresca tallada en piedra de Villamayor y visita las aulas donde enseñó Fray Luis de León.'
      },
      afternoon: {
        time: '13:30 - 17:00',
        place: 'Casa de las Conchas y Catedrales Gemelas',
        activity: 'Palacio renacentista adornado con más de 300 conchas jacobeas y subida a las torres medievales de Ieronimus.'
      },
      evening: {
        time: '18:00 - 22:00',
        place: 'Plaza Mayor de Salamanca Iluminada',
        activity: 'Una de las plazas barrocas más armónicas del mundo, repleta de estudiantes universitarios y cafés centenarios.'
      },
      transit: 'Tren Alvia de alta velocidad (1h 35m desde Madrid).',
      phrase: {
        spanish: '«¿Has encontrado ya la rana en la fachada de la universidad?»',
        english: 'Have you found the frog on the university facade yet?',
        phonetic: 'Ahs ehn-kohn-TRAH-doh yah lah RRAH-nah ehn lah fah-CHAH-dah?'
      },
      landmarkTag: 'Plaza Mayor de Salamanca',
      visitorTip: 'La piedra arenisca de Villamayor contiene hierro, lo que hace que brille con un deslumbrante resplandor dorado con la luz del atardecer.'
    }
  ],

  malaga: [
    {
      subDayNumber: 1,
      city: 'Málaga',
      region: 'Andalucía',
      theme: 'Picasso, Alcazaba y Pescado al Espeto',
      morning: {
        time: '09:00 - 13:00',
        place: 'Alcazaba árabe y Museo Picasso',
        activity: 'Visita la fortaleza palaciega musulmana del siglo XI y el Museo Picasso en el palacio renacentista de Buenavista en su ciudad natal.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'Chiringuitos del Pedregalejo',
        activity: 'Almuerzo playero de sardinas asadas a la brasa en cañas de madera de olivo (espeto tradicional) frente a las olas del Mediterráneo.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Muelle Uno y Teatro Romano',
        activity: 'Paseo contemporáneo junto a yates y veleros con vistas al castillo de Gibralfaro iluminado en la colina.'
      },
      transit: 'Tren AVE (2h 35m desde Madrid) y paseos marítimos.',
      phrase: {
        spanish: '«¿Nos prepara dos espetos de sardinas a la brasa?»',
        english: 'Could you prepare two grilled sardine skewers for us?',
        phonetic: 'Nohs preh-PAH-rah dohs ehs-PEH-tohs deh sahr-DEE-nahs ah lah BRAH-sah?'
      },
      landmarkTag: 'Alcazaba y Puerto de Málaga',
      visitorTip: 'La mejor temporada para comer espetos de sardinas en Málaga es en los meses que no tienen la letra «R» (mayo a agosto).'
    }
  ],

  ronda: [
    {
      subDayNumber: 1,
      city: 'Ronda',
      region: 'Andalucía',
      theme: 'El Tajo Monumental y Casas Colgadas',
      morning: {
        time: '08:30 - 12:30',
        place: 'Serranía de Ronda y Puente Nuevo',
        activity: 'Excursión por los espectaculares tajos de piedra de más de 100 metros de profundidad que dividen la ciudad milenaria de Ronda.'
      },
      afternoon: {
        time: '13:00 - 17:00',
        place: 'Pueblos Blancos (Setenil de las Bodegas)',
        activity: 'Almuerzo serrano y visita a casas cueva excavadas directamente bajo inmensas rocas naturales en la cornisa andaluza.'
      },
      evening: {
        time: '18:00 - 21:30',
        place: 'Cata de Vinos de la Serranía y Miradores',
        activity: 'Degustación de vinos tintos de altura de bodegas boutique y vistas infinitas al atardecer sobre el valle.'
      },
      transit: 'Tren regional Avant o autobús panorámico serrano.',
      phrase: {
        spanish: '«Esta panorámica desde el puente sobre el tajo es sobrecogedora.»',
        english: 'This panoramic view from the bridge over the gorge is breathtaking.',
        phonetic: 'EHS-tah pah-noh-RAH-mee-kah DEHS-deh ehl PWEHN-teh SOH-breh ehl TAH-hoh ehs soh-breh-koh-heh-DOH-rah'
      },
      landmarkTag: 'Puente Nuevo de Ronda',
      visitorTip: 'Baja por el sendero peatonal de los Molinos para fotografiar el Puente Nuevo desde su base con el agua del río Guadalevín.'
    }
  ],

  bilbao: [
    {
      subDayNumber: 1,
      city: 'Bilbao',
      region: 'País Vasco',
      theme: 'Vanguardia del Guggenheim y Casco Viejo',
      morning: {
        time: '09:30 - 13:00',
        place: 'Museo Guggenheim Bilbao',
        activity: 'Admira el titanio sinuoso de Frank Gehry, el cachorro floral Puppy de Jeff Koons y la monumental araña Maman de Louise Bourgeois.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'Casco Viejo («Las Siete Calles»)',
        activity: 'Tapeo de pintxos y cazuelitas de bacalao al pil-pil o a la vizcaína en la Plaza Nueva y paseo junto a la Ría de Bilbao.'
      },
      evening: {
        time: '18:00 - 22:00',
        place: 'Funicular de Artxanda',
        activity: 'Sube al mirador para contemplar la transformación arquitectónica de toda la ciudad entre verdes montañas vascas.'
      },
      transit: 'Tranvía de Bilbao (Euskotren) y Metro diseñado por Norman Foster.',
      phrase: {
        spanish: '«¿Dónde está la pasarela Zubizuri de Calatrava?»',
        english: 'Where is the Zubizuri footbridge by Calatrava?',
        phonetic: 'DOHN-deh ehs-TAH lah pah-sah-REH-lah zoo-bee-ZOO-ree?'
      },
      landmarkTag: 'Guggenheim & Ría de Bilbao',
      visitorTip: 'El metro de Bilbao es conocido popularmente como «los fosteritos» en honor a su arquitecto Norman Foster.'
    }
  ],

  mallorca: [
    {
      subDayNumber: 1,
      city: 'Palma de Mallorca',
      region: 'Islas Baleares',
      theme: 'Catedral del Mar y Patios Señoriales',
      morning: {
        time: '09:30 - 13:00',
        place: 'Catedral-Basílica de Santa María (La Seu)',
        activity: 'El templo gótico que mira al mar, con el enorme rosetón del «Ojo del Gótico» y las intervenciones artísticas de Gaudí y Miquel Barceló.'
      },
      afternoon: {
        time: '13:30 - 17:30',
        place: 'Castell de Bellver y Casco Antiguo',
        activity: 'El único castillo de planta circular de España, en lo alto de un pinar con vistas a la bahía de Palma y degustación de ensaimada mallorquina.'
      },
      evening: {
        time: '18:30 - 22:30',
        place: 'Paseo del Borne y Lonja de Palma',
        activity: 'Paseo entre palacios de patios de piedra arenisca y cena de sobrasada artesanal con miel y pescado fresco a la mallorquina.'
      },
      transit: 'Autobuses EMT Palma y paseos peatonales por las murallas renacentistas.',
      phrase: {
        spanish: '«Quisiéramos probar una ensaimada tradicional mallorquina, por favor.»',
        english: 'We would like to try a traditional Mallorcan ensaimada, please.',
        phonetic: 'kee-SYEH-rah-mohs proh-BAHR OO-nah ehn-sah-ee-MAH-dah trah-dee-syoh-NAHL'
      },
      landmarkTag: 'La Seu de Palma de Mallorca',
      visitorTip: 'El rosetón mayor de la catedral de Palma es uno de los más grandes del mundo gótico, con 13 metros de diámetro y 1.236 cristales.'
    }
  ]
};

/**
 * Intelligent Itinerary Generation Engine
 * Given any number of days (1 to 30+) and a set of selected places,
 * it creates an ordered, coherent day-by-day itinerary visiting those places!
 */
export function generateItineraryForDaysAndPlaces(
  totalDays: number,
  selectedPlaceIds: string[]
): DayItineraryTemplate[] {
  const safeDays = Math.max(1, Math.min(30, totalDays));
  // Fallback to classic cities if none selected
  const activePlaces = selectedPlaceIds.length > 0 ? selectedPlaceIds : ['madrid', 'barcelona', 'sevilla'];

  // 1. Calculate how many days each selected place receives
  const placeDaysCount: Record<string, number> = {};
  activePlaces.forEach((pid) => {
    placeDaysCount[pid] = 0;
  });

  // Distribute days across places sequentially and proportionally
  for (let d = 0; d < safeDays; d++) {
    const targetPlace = activePlaces[d % activePlaces.length];
    placeDaysCount[targetPlace] = (placeDaysCount[targetPlace] || 0) + 1;
  }

  // 2. Build the day-by-day plan sequentially place by place
  const result: DayItineraryTemplate[] = [];
  let currentOverallDay = 1;

  for (let i = 0; i < activePlaces.length; i++) {
    const placeId = activePlaces[i];
    const daysForThisPlace = placeDaysCount[placeId] || 0;
    if (daysForThisPlace === 0) continue;

    const templates = PLACE_DAY_TEMPLATES[placeId] || PLACE_DAY_TEMPLATES['madrid'];

    for (let dayIndex = 0; dayIndex < daysForThisPlace; dayIndex++) {
      // Use template cyclically if place has fewer templates than allotted days
      const baseTemplate = templates[dayIndex % templates.length];
      const cycleNumber = Math.floor(dayIndex / templates.length) + 1;

      // Deep clone and format for this specific overall day
      const dayPlan: DayItineraryTemplate = {
        ...baseTemplate,
        subDayNumber: currentOverallDay,
        theme: cycleNumber > 1 ? `${baseTemplate.theme} (Inmersión Profunda Parte ${cycleNumber})` : baseTemplate.theme,
        // If this is the first day arriving at a new place (and not the very first day of the trip), add transit header
        transit: (currentOverallDay > 1 && dayIndex === 0)
          ? `Traslado en AVE / Avant hacia ${baseTemplate.city}: ${baseTemplate.transit}`
          : baseTemplate.transit
      };

      result.push(dayPlan);
      currentOverallDay++;
    }
  }

  return result;
}
