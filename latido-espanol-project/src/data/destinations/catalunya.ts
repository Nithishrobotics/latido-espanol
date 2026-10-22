import { UnifiedDestination } from '../unifiedDestinationsData';

export const CATALUNYA_DESTINATIONS: UnifiedDestination[] = [
  {
    id: 'barcelona',
    name: 'Barcelona',
    officialName: 'Catalunya / Cataluña',
    capital: 'Barcelona',
    region: 'Cataluña · Costa Mediterránea',
    coordinates: [41.4036, 2.1744],
    badge: 'Modernismo UNESCO',
    accentColor: '#1D4ED8',
    tagline: '«Vanguardia arquitectónica, mar latino y paseos modernistas»',
    photoTag: 'BARCELONA · SAGRADA FAMÍLIA',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Basílica de la Sagrada Família de Antoni Gaudí en Barcelona',
    imageCaption: 'Modernismo de Gaudí y costa mediterránea catalana',
    intro: 'Bañada por el mar Mediterráneo, Barcelona es un lienzo arquitectónico donde la genialidad orgánica de Antoni Gaudí transformó la ciudad. Capital de Cataluña, posee una identidad cultural bilingüe, una gastronomía marina inigualable, barrios góticos medievales y bulevares modernistas como el Paseo de Gracia.',
    culturalHighlight: 'Modernismo de Antoni Gaudí, Barrio Gótico, Costa Brava y la fusión mar y montaña',
    englishHighlight: 'Antoni Gaudí modernisme masterpieces, Gothic Quarter & Mediterranean seaside',
    iconicDish: 'Pa amb tomàquet con embutidos catalanes, escalivada a la leña y crema catalana',
    languages: 'Catalán y Castellano',
    notableLandmark: 'Basílica de la Sagrada Família y Park Güell',
    visitorTip: 'Reserva tus entradas a la Sagrada Família a última hora de la tarde para ver cómo los rayos del sol poniente tiñen las vidrieras de naranja y rojo.',
    spanishPhrase: {
      spanish: '«¿Por dónde se va a la Sagrada Família?»',
      english: 'Which way is the Sagrada Família?',
      phonetic: 'pohr DOHN-deh seh vah ah lah sah-GRAH-dah fah-MEE-lyah'
    },
    travelConnection: 'Conexión AVE con Madrid (2h 30m), Girona (38m) y enlaces directos con París en TGV.',
    officialLink: {
      label: 'Portal Oficial de Turismo de Barcelona',
      url: 'https://www.barcelonaturisme.com'
    },
    attractions: [
      {
        name: 'Basílica de la Sagrada Família',
        desc: 'El templo expiatorio concebido por Gaudí en 1882, célebre por sus columnas arborescentes de piedra y vitrales policromáticos.',
        highlight: 'Monumento más visitado de España y Patrimonio UNESCO'
      },
      {
        name: 'Park Güell y Carmel',
        desc: 'Parque público con bancadas ondulantes de cerámica fragmentada (trencadís) y miradores panorámicos sobre el Mediterráneo.',
        highlight: 'Fusión sublime de naturaleza y fantasía'
      },
      {
        name: 'Barrio Gótico y Santa María del Mar',
        desc: 'Laberinto medieval de calzadas romanas, palacetes góticos y la majestuosa basílica de Santa María del Mar.',
        highlight: 'Núcleo fundacional romano de Barcino'
      }
    ],
    gallery: [
      {
        id: 'bcn-1',
        title: 'Basílica de la Sagrada Família',
        subtitle: 'Las torres arborescentes elevándose hacia el cielo del Mediterráneo',
        photoTag: 'BARCELONA · GAUDÍ MODERNISMO',
        imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Sagrada Família en Barcelona'
      },
      {
        id: 'bcn-2',
        title: 'Park Güell y Banco de Trencadís',
        subtitle: 'Bancos ondulantes de mosaico cerámico con la silueta de Barcelona y el mar al fondo',
        photoTag: 'PARK GÜELL · TRENCADÍS UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Park Güell en Barcelona'
      },
      {
        id: 'bcn-3',
        title: 'Casa Batlló en el Paseo de Gracia',
        subtitle: 'Fachada marina de vidrio policromado y piedra arenisca ondulada inspirada en la leyenda de San Jorge',
        photoTag: 'PASEO DE GRACIA · CASA BATLLÓ',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Casa Batlló de Gaudí en Barcelona'
      },
      {
        id: 'bcn-4',
        title: 'Puente del Obispo en el Barrio Gótico',
        subtitle: 'Pasaje neogótico con calavera de mármol que une la Generalitat con la Casa dels Canonges',
        photoTag: 'BARRIO GÓTICO · PUENTE DEL OBISPO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente del Obispo en el Barrio Gótico de Barcelona'
      },
      {
        id: 'bcn-5',
        title: 'La Pedrera (Casa Milà)',
        subtitle: 'Edificio esculpido como una cantera de piedra ondulada con chimeneas guerreras en la azotea',
        photoTag: 'CASA MILÀ · LA PEDRERA',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Casa Milà La Pedrera en Barcelona'
      },
      {
        id: 'bcn-6',
        title: 'Basílica de Santa María del Mar',
        subtitle: 'La «Catedral del Mar» levantada en el siglo XIV por los pescadores y estibadores del Born',
        photoTag: 'EL BORN · SANTA MARÍA DEL MAR',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Interior de Santa María del Mar en Barcelona'
      },
      {
        id: 'bcn-7',
        title: 'Mercado de La Boquería en Las Ramblas',
        subtitle: 'El templo gastronómico de hierro forjado con frutas exóticas, marisco vivo y jamón ibérico',
        photoTag: 'LAS RAMBLAS · LA BOQUERÍA',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Mercado de la Boquería en Barcelona'
      }
    ],
    secretSpots: [
      {
        id: 'besalu',
        name: 'Besalú',
        distance: '130 km · 1h 25 min',
        description: 'Pueblo medieval con un icónico puente fortificado románico del siglo XI sobre el río Fluvià y miqvé judío.',
        photoTag: 'PUENTE FORTIFICADO · LA GARROTXA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'siurana',
        name: 'Siurana (El Priorat)',
        distance: '140 km · 1h 40 min',
        description: 'Aldea sobre un acantilado de roca calcárea que fue el último reducto sarraceno de Cataluña, rodeada de viñedos.',
        photoTag: 'EL PRIORAT · ACANTILADO Y VIÑAS',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hoteles modernistas en el Eixample Dreta o palacetes señoriales medievales rehabilitados en el Born.',
      hotelZones: [
        { title: 'El Born / Sant Pere', desc: 'Boutiques de diseño, museos (Picasso) y restaurantes junto al mar.' },
        { title: 'Eixample Modernista', desc: 'Avenida ajardinada y tranquila, a pasos de las casas de Gaudí.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€95 – €195', usd: '$103 – $210', note: 'Habitación doble en hotel boutique' },
        dining: { eur: '€32 – €58', usd: '$35 – $63', note: 'Tapeo marinero, paella de marisco y menús de autor' },
        transit: { eur: '€8 – €18', usd: '$9 – $20', note: 'Tarjeta Hola BCN o billetes T-Casual de metro' },
        total: { eur: '€135 – €271', usd: '$147 – $293' }
      }
    }
  },
  {
    id: 'girona',
    name: 'Girona',
    officialName: 'Província de Girona · Catalunya',
    capital: 'Girona',
    region: 'Cataluña · Costa Brava y Pirineos',
    coordinates: [41.9794, 2.8214],
    badge: 'La Ciudad de los Cuatro Ríos',
    accentColor: '#DC2626',
    tagline: '«Las casas de colores del río Onyar, la nave gótica más ancha del mundo y el laberinto del Call Jueu»',
    photoTag: 'GIRONA · CASAS DEL ONYAR Y CATEDRAL',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Casas de colores pastel del río Onyar reflejadas en el agua con la Catedral de Girona al fondo',
    imageCaption: 'Las casas pintadas del río Onyar y la torre de la Catedral de Girona',
    intro: 'Ciudad amurallada milenaria donde el río Onyar divide el casco antiguo del moderno. Sus fachadas de colores ocre, teja y albero colgadas sobre el agua constituyen una de las estampas más fotografiadas de España. Su Catedral posee la nave gótica sin columnas más ancha del planeta (23 metros) y su barrio judío —El Call— es uno de los mejor conservados de Europa.',
    culturalHighlight: 'Casas del Onyar, Catedral de Santa María, El Call Jueu, Baños Árabes románicos y Puente Eiffel',
    englishHighlight: 'Vibrant riverfront houses, world widest Gothic nave cathedral & best preserved Jewish Call',
    iconicDish: 'Xuixo de crema frito con azúcar, butifarra dulce y ternera con setas (bolets)',
    languages: 'Catalán y Castellano',
    notableLandmark: 'Casas del Onyar y Catedral de Girona',
    visitorTip: 'Prueba un auténtico xuixo de crema recién elaborado en las pastelerías centenarias de la Rambla de la Llibertat.',
    spanishPhrase: {
      spanish: '«Un xuixo de Girona recién hecho y un café solo, por favor.»',
      english: 'A freshly made Girona xuixo pastry and an espresso, please.',
      phonetic: 'oon CHOO-choh deh zhee-ROH-nah reh-THYEHN EH-choh ee oon kah-FEH SOH-loh'
    },
    travelConnection: 'AVE directo desde Barcelona Sants en solo 38 minutos y desde Madrid en 3h 15m.',
    officialLink: {
      label: 'Turismo de Girona',
      url: 'https://www.girona.cat/turisme'
    },
    attractions: [
      {
        name: 'Casas del Río Onyar',
        desc: 'Hilera de casas de colores cálidos colgadas sobre el cauce del río unidas por puentes peatonales.',
        highlight: 'Puente de las Pescaderías Viejas de hierro rojo diseñado por Gustave Eiffel'
      },
      {
        name: 'Catedral de Santa María de Girona',
        desc: 'Construcción que asombra por su escalinata barroca de 90 peldaños y su colosal nave gótica de 23 metros de luz.',
        highlight: 'Custodia el Tapiz de la Creación románico del siglo XI'
      },
      {
        name: 'El Call Jueu (Barrio Judío)',
        desc: 'Laberinto de callejuelas empedradas, pasadizos con bóvedas y patios que albergaron a la comunidad cabalística medieval.',
        highlight: 'El barrio judío medieval más intacto de Europa'
      }
    ],
    gallery: [
      {
        id: 'gir-1',
        title: 'Casas del Onyar y Puente Eiffel',
        subtitle: 'El puente de hierro rojo de la compañía Eiffel enmarcando las casas de colores y la basílica de Sant Feliu',
        photoTag: 'GIRONA · RÍO ONYAR',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Casas del Onyar en Girona'
      },
      {
        id: 'gir-2',
        title: 'Escalinata y Fachada de la Catedral',
        subtitle: 'Noventa escalones de piedra que ascienden hacia la fachada barroca y el campanario románico de Carlomagno',
        photoTag: 'CATEDRAL · ESCALINATA MONUMENTAL',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Escalinata de la Catedral de Girona'
      },
      {
        id: 'gir-3',
        title: 'Callejones empedrados del Call Jueu',
        subtitle: 'Calles en cuesta con arcos de piedra medievales que transportan al siglo XIII',
        photoTag: 'EL CALL JUEU · BARRIO JUDÍO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Call Jueu de Girona'
      },
      {
        id: 'gir-4',
        title: 'Baños Árabes Románicos',
        subtitle: 'Edificio del siglo XII con cúpula octogonal sostenida por finas columnas sobre la piscina de agua templada',
        photoTag: 'BAÑOS ÁRABES · SIGLO XII',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Baños Árabes de Girona'
      },
      {
        id: 'gir-5',
        title: 'Muralla Carolingia y Paseo Arqueológico',
        subtitle: 'Murallas de piedra caliza con torreones desde donde se divisan los Pirineos nevados',
        photoTag: 'MURALLAS DE GIRONA · MIRADOR',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Murallas de Girona'
      },
      {
        id: 'gir-6',
        title: 'Monasterio de Sant Pere de Galligants',
        subtitle: 'Abadía benedictina del siglo XII con ábside románico y claustro escultórico',
        photoTag: 'SANT PERE DE GALLIGANTS',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Monasterio de Sant Pere de Galligants en Girona'
      }
    ],
    secretSpots: [
      {
        id: 'pals',
        name: 'Pals (Baix Empordà)',
        distance: '42 km · 40 min',
        description: 'Pueblo gótico amurallado sobre una colina con torre del homenaje románica y arrozales tradicionales.',
        photoTag: 'BAIX EMPORDÀ · PUEBLO GÓTICO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'peratallada',
        name: 'Peratallada',
        distance: '38 km · 35 min',
        description: 'Villa tallada en la roca viva con foso excavado de ocho metros y enredaderas floridas sobre los sillares.',
        photoTag: 'PIEDRA TALLADA · MEDIEVAL',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hoteles boutique históricos en el Barri Vell como el Hotel Historic o el Nord 1901 frente al río.',
      hotelZones: [
        { title: 'Barri Vell', desc: 'Calles enlosadas en silencio nocturno a pasos de la Catedral y El Call.' },
        { title: 'Plaza de la Independencia', desc: 'Plaza neoclásica porticada repleta de terrazas y vida nocturna.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€70 – €150', usd: '$75 – $162', note: 'Habitación doble en hotel boutique' },
        dining: { eur: '€25 – €50', usd: '$27 – $54', note: 'Cocina gerundense de mar y montaña y xuixos' },
        transit: { eur: '€4 – €10', usd: '$4 – $11', note: 'Ciudad 100% peatonal a pie' },
        total: { eur: '€99 – €210', usd: '$106 – $227' }
      }
    }
  },
  {
    id: 'tarragona',
    name: 'Tarragona',
    officialName: 'Província de Tarragona · Catalunya',
    capital: 'Tarragona',
    region: 'Cataluña · Costa Daurada',
    coordinates: [41.1189, 1.2445],
    badge: 'Tarraco Imperial',
    accentColor: '#B45309',
    tagline: '«El anfiteatro romano besado por las olas del Mediterráneo y el Balcón de Europa»',
    photoTag: 'TARRAGONA · ANFITEATRO ROMANO Y MEDITERRÁNEO',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Anfiteatro romano de Tarragona con vistas a las aguas azules del mar Mediterráneo',
    imageCaption: 'El Anfiteatro romano de Tarraco edificado sobre el litoral en el siglo II',
    intro: 'La antigua Tarraco fue la capital de la provincia romana Hispania Citerior y una de las metrópolis más brillantes del Imperio Romano en Occidente. El conjunto arqueológico romano declarado Patrimonio de la Humanidad por la UNESCO se despliega a orillas del mar, con un anfiteatro tallado en la roca sobre las olas y el milenario acueducto de les Ferreres.',
    culturalHighlight: 'Conjunto arqueológico de Tarraco (UNESCO), Anfiteatro Romano, Circo Romano y Acueducto de les Ferreres',
    englishHighlight: 'Seaside Roman amphitheatre, UNESCO Tarraco ruins & Balcó del Mediterrani',
    iconicDish: 'Romesco de pescado y marisco, calçots con salsa romesco y arroz caldoso de galeras',
    languages: 'Catalán y Castellano',
    notableLandmark: 'Anfiteatro Romano de Tarragona y Balcó del Mediterrani',
    visitorTip: 'Acércate al Balcó del Mediterrani al final de la Rambla Nova y cumple la tradición local de «tocar ferro» (tocar la barandilla de hierro forjado) para tener buena suerte.',
    spanishPhrase: {
      spanish: '«Un arroz marinero con salsa romesco y una copa de vino del Priorat.»',
      english: 'Seafood rice with romesco sauce and a glass of Priorat wine.',
      phonetic: 'oon ah-RROHTH mah-ree-NEH-roh kohn SAHL-sah roh-MEHS-koh'
    },
    travelConnection: 'Tren AVE y Euromed directo desde Barcelona Sants en solo 30 minutos.',
    officialLink: {
      label: 'Turismo de Tarragona',
      url: 'https://www.tarragonaturisme.cat'
    },
    attractions: [
      {
        name: 'Anfiteatro Romano de Tarraco',
        desc: 'Recinto oval del siglo II d.C. con capacidad para 14.000 espectadores construido frente a la playa del Miracle.',
        highlight: 'Patrimonio de la Humanidad UNESCO'
      },
      {
        name: 'Circo Romano y Torre del Pretorio',
        desc: 'Uno de los circos romanos urbanos mejor conservados del mundo donde se disputaban carreras de cuadrigas.',
        highlight: 'Galerías subterráneas abovedadas transitables'
      },
      {
        name: 'Acueducto de les Ferreres («Pont del Diable»)',
        desc: 'Puente acueducto romano monumental de 217 metros de longitud y doble orden de arcos de piedra caliza.',
        highlight: 'Se puede caminar sobre el canal superior de agua'
      }
    ],
    gallery: [
      {
        id: 'tar-1',
        title: 'Anfiteatro Romano y Mar Mediterráneo',
        subtitle: 'El graderío de piedra caliza sobre las aguas turquesas del mar de Tarraco',
        photoTag: 'TARRACO · ANFITEATRO ROMANO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Anfiteatro romano de Tarragona'
      },
      {
        id: 'tar-2',
        title: 'Pont del Diable (Acueducto de les Ferreres)',
        subtitle: 'Doble piso de arquerías romanas que salvaban el valle entre pinos mediterráneos',
        photoTag: 'ACUEDUCTO ROMANO · PONT DEL DIABLE',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Acueducto romano de les Ferreres en Tarragona'
      },
      {
        id: 'tar-3',
        title: 'Circo Romano y Bóvedas Subterráneas',
        subtitle: 'Pasadizos de hormigón romano que sustentaban las gradas de las carreras de caballos',
        photoTag: 'CIRCO ROMANO · TARRAGONA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Circo Romano de Tarragona'
      },
      {
        id: 'tar-4',
        title: 'Catedral de Santa Tecla de Tarragona',
        subtitle: 'Transición del románico al gótico con gran rosetón calado y claustro ajardinado',
        photoTag: 'CATEDRAL DE SANTA TECLA',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Tarragona'
      },
      {
        id: 'tar-5',
        title: 'Balcó del Mediterrani',
        subtitle: 'Mirador panorámico sobre el acantilado al final de la Rambla Nova',
        photoTag: 'BALCÓ DEL MEDITERRANI',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Balcó del Mediterrani en Tarragona'
      },
      {
        id: 'tar-6',
        title: 'Barrio Marinero de El Serrallo',
        subtitle: 'Puerto pesquero tradicional con barcas de arrastre y restaurantes de romesco de pescado',
        photoTag: 'EL SERRALLO · PUERTO PESQUERO',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Barrio del Serrallo en Tarragona'
      }
    ],
    secretSpots: [
      {
        id: 'monasterio-poblet',
        name: 'Monasterio Real de Santa María de Poblet',
        distance: '48 km · 40 min',
        description: 'La mayor abadía cisterciense habitada de Europa y panteón real de los Reyes de la Corona de Aragón.',
        photoTag: 'RUTA DEL CÍSTER · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'miravet',
        name: 'Castillo Templario de Miravet',
        distance: '68 km · 55 min',
        description: 'Fortaleza templaria colgada sobre las aguas del río Ebro con paso de barca fluvial sin motor.',
        photoTag: 'TEMPLARIOS · RÍO EBRO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hoteles en el casco antiguo (Part Alta) o con vistas al mar como el H10 Imperial Tarraco.',
      hotelZones: [
        { title: 'Part Alta (Casco Antiguo)', desc: 'Calles enlosadas dentro del recinto amurallado romano y plazas románticas.' },
        { title: 'Rambla Nova', desc: 'Gran bulevar comercial que desemboca en el Balcón del Mediterráneo.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€65 – €140', usd: '$70 – $150', note: 'Habitación doble con vistas al mar' },
        dining: { eur: '€22 – €44', usd: '$24 – $47', note: 'Romesco marinero y pescados de la lonja' },
        transit: { eur: '€4 – €10', usd: '$4 – $11', note: 'Ciudad romana muy accesible a pie' },
        total: { eur: '€91 – €194', usd: '$98 – $208' }
      }
    }
  },
  {
    id: 'lleida',
    name: 'Lleida',
    officialName: 'Província de Lleida · Catalunya',
    capital: 'Lleida',
    region: 'Cataluña · Valle del Segre y Pirineos',
    coordinates: [41.6176, 0.6200],
    badge: 'La Colina de la Seu Vella',
    accentColor: '#EAB308',
    tagline: '«La catedral-fortaleza sobre la colina del Segre y las iglesias románicas del Valle de Boí»',
    photoTag: 'LLEIDA · SEU VELLA Y RÍO SEGRE',
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'La Seu Vella de Lleida alzándose en la cima del cerro sobre la ciudad y el río Segre',
    imageCaption: 'La monumental Seu Vella de Lleida dominando la plana desde el Turó',
    intro: 'Erigida en un promontorio estratégico junto al río Segre en el fértil valle leridano. Lleida está dominada por la Seu Vella, una de las catedrales góticas más singulares de Europa cuyo claustro abierto funciona como un gigantesco balcón sobre toda la comarca. Es el umbral hacia los valles pirenaicos de Boí y Arán.',
    culturalHighlight: 'La Seu Vella («El Campanar»), Castillo de la Suda, Palacio de la Paeria y el románico del Valle de Boí',
    englishHighlight: 'Towering Seu Vella cathedral-fortress & gateway to Pyrenean Romanesque valleys',
    iconicDish: 'Caragols a la llauna con alioli, cassola de tros y fruta dulce de la huerta de Lleida',
    languages: 'Catalán y Castellano',
    notableLandmark: 'La Seu Vella de Lleida',
    visitorTip: 'Sube al claustro de la Seu Vella al atardecer: es uno de los pocos claustros góticos del mundo situados en la fachada frontal de la iglesia con vistas panorámicas.',
    spanishPhrase: {
      spanish: '«Una lata de caragols a la llauna con alioli y salsa picante, por favor.»',
      english: 'A tray of oven-baked snails with alioli and spicy sauce, please.',
      phonetic: 'OO-nah LAH-tah deh kah-rah-GOHLS ah lah LYOW-nah kohn ah-lyee-OH-lee'
    },
    travelConnection: 'AVE directo desde Barcelona Sants en 58 minutos y desde Madrid en 2 horas.',
    officialLink: {
      label: 'Turismo de Lleida',
      url: 'https://turismedelleida.cat'
    },
    attractions: [
      {
        name: 'La Seu Vella de Lleida',
        desc: 'Catedral románico-gótica consagrada en 1278 con esbelto campanario octogonal de 60 metros y claustro calado sobre la llanura.',
        highlight: 'Candidata a Patrimonio de la Humanidad UNESCO'
      },
      {
        name: 'Castillo del Rey (La Suda)',
        desc: 'Antigua alcazaba andalusí y residencia de los condes de Barcelona y reyes de la Corona de Aragón.',
        highlight: 'Donde fue coronado Jaime I el Conquistador en 1214'
      },
      {
        name: 'Palacio de la Paeria',
        desc: 'Sede del ayuntamiento desde el siglo XIII, con fachada románica civil del siglo XII y cárcel subterránea medieval.',
        highlight: 'Uno de los palacios civiles románicos más valiosos de Cataluña'
      }
    ],
    gallery: [
      {
        id: 'lle-1',
        title: 'La Seu Vella en la cima de la colina',
        subtitle: 'La silueta monumental de la catedral-fortaleza recortada contra los Pirineos',
        photoTag: 'LLEIDA · SEU VELLA',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Seu Vella de Lleida'
      },
      {
        id: 'lle-2',
        title: 'Claustro de la Seu Vella con Vistas a la Plana',
        subtitle: 'Arcadas góticas flamígeras abiertas como un balcón colgado sobre el río Segre',
        photoTag: 'CLAUSTRO GÓTICO · MIRADOR',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Claustro de la Seu Vella en Lleida'
      },
      {
        id: 'lle-3',
        title: 'Torre Campanario de 60 metros',
        subtitle: 'Estructura gótica octogonal con dos campanas históricas del siglo XV',
        photoTag: 'EL CAMPANAR · GÓTICO LERIDANO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Campanario de la Seu Vella en Lleida'
      },
      {
        id: 'lle-4',
        title: 'Palacio de la Paeria y Eje Comercial',
        subtitle: 'Fachada románica del consistorio en la calle Mayor peatonal',
        photoTag: 'LA PAERIA · ROMÁNICO CIVIL',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Palacio de la Paeria en Lleida'
      },
      {
        id: 'lle-5',
        title: 'Puente Viejo sobre el Río Segre',
        subtitle: 'Paso histórico con el Arco del Puente que da acceso al centro antiguo',
        photoTag: 'RÍO SEGRE · PUENTE VIEJO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente Viejo de Lleida'
      },
      {
        id: 'lle-6',
        title: 'Castillo Templario de Gardeny',
        subtitle: 'Complejo militar de los caballeros templarios del siglo XII emplazado en la colina vecina',
        photoTag: 'GARDENY · ORDEN DEL TEMPLE',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Castillo de Gardeny en Lleida'
      }
    ],
    secretSpots: [
      {
        id: 'val-boi',
        name: 'Iglesias Románicas de la Vall de Boí',
        distance: '130 km · 1h 45 min',
        description: 'Conjunto de nueve iglesias románicas lombardas Patrimonio UNESCO con estilizados campanarios de torre.',
        photoTag: 'PIRINEOS · ROMÁNICO UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'congo-montrebei',
        name: 'Congost de Mont-rebei',
        distance: '75 km · 1h 10 min',
        description: 'Desfiladero virgen esculpido por el río Noguera Ribagorzana con paredes de roca vertical de 500 metros.',
        photoTag: 'CAÑÓN VIRGEN · DESFILADERO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Lleida (en el antiguo Convento del Roser del siglo XVII) o el Hotel Zenit Lleida.',
      hotelZones: [
        { title: 'Entorno Seu Vella', desc: 'Calles con historia, conventos rehabilitados y vistas a la colina monumental.' },
        { title: 'Eje Comercial Calle Mayor', desc: 'Arteria peatonal de tiendas y tabernas donde degustar caragols.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€55 – €120', usd: '$60 – $130', note: 'Habitación doble en parador o hotel' },
        dining: { eur: '€20 – €38', usd: '$22 – $41', note: 'Caragols a la llauna y vinos D.O. Costers del Segre' },
        transit: { eur: '€4 – €9', usd: '$4 – $10', note: 'Ascensores panorámicos a la Seu Vella' },
        total: { eur: '€79 – €167', usd: '$86 – $181' }
      }
    }
  },
  {
    id: 'cadaques',
    name: 'Cadaqués',
    officialName: 'Alt Empordà · Girona · Catalunya',
    capital: 'Cadaqués',
    region: 'Cataluña · Costa Brava y Cap de Creus',
    coordinates: [42.2887, 3.2778],
    badge: 'La Joya Blanca de Dalí',
    accentColor: '#06B6D4',
    tagline: '«Casas encaladas frente al Mediterráneo, barcas de pescadores y el universo surrealista de Salvador Dalí»',
    photoTag: 'CADAQUÉS · COSTA BRAVA Y CAP DE CREUS',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Pueblo blanco de Cadaqués con barcas de pescadores fondeadas en la bahía de aguas cristalinas',
    imageCaption: 'Cadaqués, pueblo pesquero de la Costa Brava y hogar de Salvador Dalí',
    intro: 'Aislado históricamente del resto del continente por la sierra de Rodes y el viento de tramuntana. Cadaqués es un santuario de casas blancas con persianas azules reflejadas en las calas de pizarra negra del Cap de Creus. Fue el refugio de Salvador Dalí en Portlligat, atrayendo a Picasso, Federico García Lorca, Marcel Duchamp y Joan Miró.',
    culturalHighlight: 'Casa-Museo Salvador Dalí en Portlligat, Parque Natural del Cap de Creus y la iglesia de Santa María',
    englishHighlight: 'Whitewashed fishing village, Dalí surrealist home in Portlligat & wild Cap de Creus',
    iconicDish: 'Suquet de peix de roca tradicional de Cadaqués, erizos de mar (garotes) y anchoas de la bahía',
    languages: 'Catalán y Castellano',
    notableLandmark: 'Bahía de Cadaqués e Iglesia de Santa María',
    visitorTip: 'Camina por el sendero litoral de ronda desde la playa de Cadaqués hasta la cala de Portlligat para visitar la casa donde Dalí vivió y pintó.',
    spanishPhrase: {
      spanish: '«Un suquet de pescado de roca con picada de almendras y alioli.»',
      english: 'Rockfish fisherman stew with almond picada and alioli.',
      phonetic: 'oon soo-KEHT deh pehs-KAH-doh deh ROH-kah kohn pee-KAH-dah'
    },
    travelConnection: 'En coche o autobús desde Figueres (50 min, estación AVE) o Girona (1h 15m).',
    officialLink: {
      label: 'Turismo de Cadaqués',
      url: 'https://visitcadaques.org'
    },
    attractions: [
      {
        name: 'Casa-Museo Salvador Dalí (Portlligat)',
        desc: 'Laberinto de cabañas de pescadores unidas por el genio surrealista con su taller de pintura, esculturas y huevos gigantes.',
        highlight: 'El único taller y residencia permanente de Dalí'
      },
      {
        name: 'Parque Natural del Cap de Creus',
        desc: 'El punto más oriental de la península ibérica con formaciones de roca esquistosa esculpidas por el viento de tramuntana.',
        highlight: 'Paisaje geológico lunar que inspiró el surrealismo'
      },
      {
        name: 'Iglesia de Santa María de Cadaqués',
        desc: 'Templo encalado del siglo XVI en la cima del pueblo que alberga un colosal retablo barroco de madera dorada de 23 metros.',
        highlight: 'Retablo barroco de la Escuela de Pau Costa'
      }
    ],
    gallery: [
      {
        id: 'cad-q-1',
        title: 'Bahía de Cadaqués al Mediodía',
        subtitle: 'Casas encaladas y la torre blanca de Santa María sobre las aguas turquesas del mar',
        photoTag: 'CADAQUÉS · BAHÍA MARINERA',
        imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Bahía de Cadaqués'
      },
      {
        id: 'cad-q-2',
        title: 'Casa de Salvador Dalí en Portlligat',
        subtitle: 'Los huevos gigantes de yeso coronando los tejados de piedra y los olivares frente a la cala',
        photoTag: 'PORTLLIGAT · CASA SALVADOR DALÍ',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Casa de Dalí en Portlligat'
      },
      {
        id: 'cad-q-3',
        title: 'Callejones empedrados del Casco Antiguo (Es Rastre)',
        subtitle: 'Suelos de piedras de cantos rodados llamadas rastell y muros cubiertos de buganvillas',
        photoTag: 'CALLEJONES ENCALADOS · ES RASTRE',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calles empedradas de Cadaqués'
      },
      {
        id: 'cad-q-4',
        title: 'Faro del Cap de Creus',
        subtitle: 'El extremo más oriental de España alzado sobre los acantilados de roca negra',
        photoTag: 'CAP DE CREUS · PUNTO ORIENTAL',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Faro del Cap de Creus'
      },
      {
        id: 'cad-q-5',
        title: 'Barcas tradicionales de pescadores',
        subtitle: 'Llaüts de madera varados sobre la orilla de guijarros en la playa de Port Alguer',
        photoTag: 'PORT ALGUER · BARCAS DE MADERA',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Barcas de pescadores en Cadaqués'
      },
      {
        id: 'cad-q-6',
        title: 'Retablo Barroco de Santa María',
        subtitle: 'Retablo de madera dorada tallado en 1725 por Pau Costa que sobrevivió a los corsarios',
        photoTag: 'IGLESIA DE SANTA MARÍA · BARROCO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Interior de la Iglesia de Santa María de Cadaqués'
      }
    ],
    secretSpots: [
      {
        id: 'cala-culip',
        name: 'Cala Culip y Paraje de Tudela',
        distance: '8 km del pueblo',
        description: 'Paisaje surrealista de rocas que inspiraron cuadros de Dalí como El Gran Masturbador.',
        photoTag: 'CAP DE CREUS · PARAXE DE TUDELA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'monasterio-rodes',
        name: 'Monasterio de Sant Pere de Rodes',
        distance: '24 km · 35 min',
        description: 'Monasterio benedictino románico colgado a 520 metros de altitud sobre la bahía de Llançà.',
        photoTag: 'ROMÁNICO LITORAL · SIERRA DE RODES',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel Playa Sol en la bahía de Cadaqués o el Hotel Boutique Villa Gala con vistas al mar.',
      hotelZones: [
        { title: 'Bahía de Cadaqués', desc: 'Vistas panorámicas a la iglesia blanca y acceso directo a la playa.' },
        { title: 'Portlligat', desc: 'Tranquilidad mística frente a la cala de Dalí y los olivares.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€90 – €190', usd: '$98 – $205', note: 'Habitación doble con vistas al mar' },
        dining: { eur: '€30 – €55', usd: '$32 – $60', note: 'Suquet de peix y marisco fresco de la Costa Brava' },
        transit: { eur: '€5 – €15', usd: '$5 – $16', note: 'Paseos a pie y barco taxi' },
        total: { eur: '€125 – €260', usd: '$135 – $281' }
      }
    }
  }
];
