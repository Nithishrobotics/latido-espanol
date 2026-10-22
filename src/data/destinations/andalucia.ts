import { UnifiedDestination } from '../unifiedDestinationsData';

export const ANDALUCIA_DESTINATIONS: UnifiedDestination[] = [
  {
    id: 'sevilla',
    name: 'Sevilla',
    officialName: 'Provincia de Sevilla · Andalucía',
    capital: 'Sevilla',
    region: 'Andalucía · Valle del Guadalquivir',
    coordinates: [37.3891, -5.9845],
    badge: 'Cuna del Flamenco',
    accentColor: '#A51E2D',
    tagline: '«Naranjos en flor, arquerías mudéjares y el compás del Guadalquivir»',
    photoTag: 'SEVILLA · PLAZA DE ESPAÑA',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Plaza de España de Sevilla al atardecer bajo el cielo azul ibérico',
    imageCaption: 'Plaza de España y arquerías de cerámica de Aníbal González',
    intro: 'Capital histórica del sur peninsular y puerto del comercio con las Indias durante siglos. Sevilla es un deleite sensorial donde conviven la mayor catedral gótica del mundo, los jardines perfumados del Real Alcázar y el vibrante barrio marinero de Triana.',
    culturalHighlight: 'La Giralda, el Real Alcázar, el flamenco de Triana y la Semana Santa',
    englishHighlight: 'Grand Gothic Cathedral, Moorish royal alcazar & raw flamenco passion',
    iconicDish: 'Espinacas con garbanzos, pescaíto frito y gazpacho sevillano',
    languages: 'Castellano (acento andaluz)',
    notableLandmark: 'Catedral de Sevilla, La Giralda y Real Alcázar',
    visitorTip: 'Sube a la Giralda a través de sus 35 rampas originales diseñadas para que el sultán pudiera ascender a caballo.',
    spanishPhrase: {
      spanish: '«¿Por dónde se cruza el puente hacia Triana?»',
      english: 'Which way across the bridge to Triana?',
      phonetic: 'pohr DOHN-deh seh KROO-thah ehl PWEHN-teh AH-thyah tree-AH-nah'
    },
    travelConnection: 'Conexión AVE con Madrid (2h 20m), Córdoba (42m) y Málaga (55m).',
    officialLink: {
      label: 'Turismo de Sevilla',
      url: 'https://www.visitasevilla.es'
    },
    attractions: [
      {
        name: 'Plaza de España',
        desc: 'Colosal hemiciclo de ladrillo y azulejos con bancadas dedicadas a las provincias de España.',
        highlight: 'Obra maestra de la Exposición Iberoamericana de 1929'
      },
      {
        name: 'Real Alcázar de Sevilla',
        desc: 'El palacio real habitado más antiguo de Europa con yeserías mudéjares y jardines de naranjos.',
        highlight: 'Patrimonio de la Humanidad UNESCO'
      },
      {
        name: 'La Giralda y Catedral',
        desc: 'Antiguo alminar almohade reconvertido en torre campanario sobre la nave mayor gótica.',
        highlight: 'Tumba de Cristóbal Colón'
      }
    ],
    gallery: [
      {
        id: 'sev-1',
        title: 'Plaza de España y Canal',
        subtitle: 'Canal semicircular con puentes de cerámica y torre norte',
        photoTag: 'SEVILLA · PLAZA DE ESPAÑA',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de España en Sevilla'
      },
      {
        id: 'sev-2',
        title: 'La Giralda y Patio de los Naranjos',
        subtitle: 'Antiguo alminar almohade del siglo XII que domina el perfil de la ciudad',
        photoTag: 'CATEDRAL · GIRALDA ALMOHADE',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'La Giralda de Sevilla'
      },
      {
        id: 'sev-3',
        title: 'Patio de las Doncellas en el Alcázar',
        subtitle: 'Estanque central rodeado de arcos polilobulados de yesería mudéjar',
        photoTag: 'REAL ALCÁZAR · PATIO DE LAS DONCELLAS',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Patio de las Doncellas en el Real Alcázar'
      },
      {
        id: 'sev-4',
        title: 'Barrio de Santa Cruz',
        subtitle: 'Callejuelas encaladas con rejas floridas y aroma a azahar',
        photoTag: 'SANTA CRUZ · JUDERÍA HISTÓRICA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Callejón del barrio de Santa Cruz'
      },
      {
        id: 'sev-5',
        title: 'Torre del Oro y Río Guadalquivir',
        subtitle: 'Torre albarrana defensiva del siglo XIII a orillas de la dársena',
        photoTag: 'GUADALQUIVIR · TORRE DEL ORO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Torre del Oro reflejada en el río Guadalquivir'
      },
      {
        id: 'sev-6',
        title: 'Puente de Isabel II (Puente de Triana)',
        subtitle: 'El icónico paso de hierro que conecta el centro con la cuna flamenca',
        photoTag: 'TRIANA · PUENTE HISTÓRICO',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente de Triana iluminado de noche'
      },
      {
        id: 'sev-7',
        title: 'Las Setas de la Encarnación (Metropol Parasol)',
        subtitle: 'La mayor estructura de madera del mundo con pasarela panorámica sobre los tejados',
        photoTag: 'VANGUARDIA · MIRADOR LAS SETAS',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Metropol Parasol Las Setas en Sevilla'
      }
    ],
    secretSpots: [
      {
        id: 'carmona',
        name: 'Carmona',
        distance: '33 km · 30 min',
        description: 'Poblado fortificado sobre los alcores con necrópolis romana y alcázar del rey Don Pedro.',
        photoTag: 'LOS ALCORES · PUERTA DE SEVILLA',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'osuna',
        name: 'Osuna',
        distance: '87 km · 1 hora',
        description: 'Calle San Pedro considerada por la UNESCO como una de las más bellas de Europa por sus palacios barrocos.',
        photoTag: 'VILLA DUCAL · PALACIOS BARROCOS',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Casas palacio reconvertidas en hoteles boutique en el barrio de Santa Cruz o San Lorenzo.',
      hotelZones: [
        { title: 'Santa Cruz', desc: 'A pasos de la Catedral, ambiente romántico y callejuelas peatonales.' },
        { title: 'Triana', desc: 'Sabor popular ribereño, terrazas de flamenco y alfarerías.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€80 – €160', usd: '$86 – $172', note: 'Habitación doble en hotel con encanto' },
        dining: { eur: '€28 – €48', usd: '$30 – $52', note: 'Tapeo de raciones en barra y cañas heladas' },
        transit: { eur: '€6 – €15', usd: '$7 – $16', note: 'Tranvía MetroCentro y paseos a pie' },
        total: { eur: '€114 – €223', usd: '$123 – $240' }
      }
    }
  },
  {
    id: 'granada',
    name: 'Granada',
    officialName: 'Provincia de Granada · Andalucía',
    capital: 'Granada',
    region: 'Andalucía · Sierra Nevada',
    coordinates: [37.1773, -3.5986],
    badge: 'Reino Nazarí',
    accentColor: '#9333EA',
    tagline: '«El suspiro poético de la fortaleza roja bajo las cumbres de Sierra Nevada»',
    photoTag: 'GRANADA · LA ALHAMBRA Y GENERALIFE',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'La Alhambra de Granada con Sierra Nevada nevada al fondo',
    imageCaption: 'Palacios nazaríes de la Alhambra y Generalife frente al Albaicín',
    intro: 'Último bastión del reino nazarí en la península ibérica hasta 1492. Granada custodia la Alhambra, cumbre universal del arte islámico con sus estucos, azulejos alicatados y fuentes rumorosas. Frente a ella se despliega el Albaicín, laberinto de cármenes y miradores.',
    culturalHighlight: 'La Alhambra, jardines del Generalife, cuevas flamencas del Sacromonte y tapas gratuitas',
    englishHighlight: 'The majestic Alhambra fortress, Albaicín alleys & complimentary tapas tradition',
    iconicDish: 'Habas con jamón de Trevélez, tortilla del Sacromonte y piononos de Santa Fe',
    languages: 'Castellano',
    notableLandmark: 'La Alhambra, Generalife y Mirador de San Nicolás',
    visitorTip: 'Reserva tus entradas a los Palacios Nazaríes con meses de antelación para asegurar tu franja horaria exacta.',
    spanishPhrase: {
      spanish: '«¿Nos pone dos cañas con su tapa, por favor?»',
      english: 'Could you bring us two beers with their tapas, please?',
      phonetic: 'nohs POH-neh dohs KAH-nyahs kohn soo TAH-pah, pohr fah-VOHR'
    },
    travelConnection: 'Conexión AVE con Madrid (3h 15m), Sevilla (2h 10m) y Málaga (1h 15m).',
    officialLink: {
      label: 'Turismo de Granada',
      url: 'https://www.granadatur.com'
    },
    attractions: [
      {
        name: 'Palacios Nazaríes de la Alhambra',
        desc: 'El Patio de los Leones y el Salón de Embajadores tallados con caligrafía coránica y mocárabes.',
        highlight: 'Monumento cumbre del arte hispanomusulmán'
      },
      {
        name: 'Jardines del Generalife',
        desc: 'Palacio de recreo estival de los sultanes con acequias cruzadas y surtidores de agua viva.',
        highlight: 'Paraíso sensorial islámico'
      },
      {
        name: 'Mirador de San Nicolás',
        desc: 'El balcón más célebre del Albaicín con vistas a la Alhambra dorada por el sol poniente.',
        highlight: 'El atardecer más bello del mundo según Bill Clinton'
      }
    ],
    gallery: [
      {
        id: 'gra-1',
        title: 'Patio de los Leones',
        subtitle: 'Doce leones de mármol blanco sosteniendo la fuente central entre arcos de filigrana',
        photoTag: 'ALHAMBRA · PATIO DE LOS LEONES',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Patio de los Leones en la Alhambra'
      },
      {
        id: 'gra-2',
        title: 'Mirador de San Nicolás y la Alhambra',
        subtitle: 'La silueta roja nazarí recortada contra la cordillera de Sierra Nevada',
        photoTag: 'ALBAICÍN · ATARDECER MÍTICO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Vistas de la Alhambra desde el Mirador de San Nicolás'
      },
      {
        id: 'gra-3',
        title: 'Acequia del Generalife',
        subtitle: 'Canal de agua flanqueado por surtidores y cipreses centenarios',
        photoTag: 'GENERALIFE · AGUA Y JARDINES',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Jardines del Generalife en Granada'
      },
      {
        id: 'gra-4',
        title: 'Carrera del Darro y Paseo de los Tristes',
        subtitle: 'Paseo empedrado junto al rumor del río Darro bajo las murallas de la Alhambra',
        photoTag: 'RÍO DARRO · PUENTES DE PIEDRA',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Carrera del Darro en Granada'
      },
      {
        id: 'gra-5',
        title: 'Capilla Real y Catedral Renacentista',
        subtitle: 'Mausoleo de mármol de Carrara de los Reyes Católicos Isabel y Fernando',
        photoTag: 'CENTRO HISTÓRICO · CAPILLA REAL',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Capilla Real de Granada'
      },
      {
        id: 'gra-6',
        title: 'Cuevas del Sacromonte',
        subtitle: 'Viviendas excavadas en la colina de Valparaíso donde nació la zambra gitana',
        photoTag: 'SACROMONTE · ZAMBRA GITANA',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Cuevas del Sacromonte en Granada'
      },
      {
        id: 'gra-7',
        title: 'Callejuelas del Albaicín Alto',
        subtitle: 'Paredes blancas de cal, aljibes árabes y enredaderas de jazmín',
        photoTag: 'ALBAICÍN · PATRIMONIO UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calles del Albaicín en Granada'
      }
    ],
    secretSpots: [
      {
        id: 'alpujarras',
        name: 'Capileira y Pampaneira (La Alpujarra)',
        distance: '72 km · 1h 15 min',
        description: 'Pueblos blancos colgados en las laderas sur de Sierra Nevada con tejados planos de terrao y tinaos.',
        photoTag: 'SIERRA NEVADA · ARQUITECTURA BERÉBER',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'montefrio',
        name: 'Montefrío',
        distance: '50 km · 50 min',
        description: 'Pueblo coronado por una iglesia redonda sobre un peñón rocoso, calificado por National Geographic entre las mejores vistas del mundo.',
        photoTag: 'PONIENTE GRANADINO · PEÑÓN',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Cármenes tradicionales con jardín en el Albaicín o el Parador de San Francisco dentro de la Alhambra.',
      hotelZones: [
        { title: 'Albaicín Bajo', desc: 'Vistas directas a la Alhambra, cerca de la Carrera del Darro y teterías.' },
        { title: 'Realejo', desc: 'Antiguo barrio judío con vida de tabernas bohemias y plazas tranquilas.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€65 – €135', usd: '$70 – $145', note: 'Habitación doble en hotel con encanto' },
        dining: { eur: '€20 – €38', usd: '$22 – $41', note: 'Tapas incluidas con cada consumición' },
        transit: { eur: '€5 – €12', usd: '$5 – $13', note: 'Microbuses Alhambra y caminatas' },
        total: { eur: '€90 – €185', usd: '$97 – $199' }
      }
    }
  },
  {
    id: 'cordoba',
    name: 'Córdoba',
    officialName: 'Provincia de Córdoba · Andalucía',
    capital: 'Córdoba',
    region: 'Andalucía · Valle del Guadalquivir',
    coordinates: [37.8882, -4.7794],
    badge: 'Capital Califal',
    accentColor: '#D97706',
    tagline: '«El bosque de arcos rojiblancos de la Mezquita y el frescor de los patios floridos»',
    photoTag: 'CÓRDOBA · MEZQUITA-CATEDRAL',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Interior de la Mezquita de Córdoba con sus arcos de herradura bicolores',
    imageCaption: 'Bosque de 856 columnas y arcos bicolores de la Mezquita de Córdoba',
    intro: 'Antigua capital del Califato Omeya de Occidente que en el siglo X fue la urbe más culta y poblada de Europa. La Mezquita-Catedral es un milagro arquitectónico de arcos de herradura bicolores, rodeada por la Judería y los célebres patios repletos de macetas y geranios.',
    culturalHighlight: 'Mezquita-Catedral, Fiesta de los Patios (UNESCO), Puente Romano y Medina Azahara',
    englishHighlight: 'Grand Mosque-Cathedral forest of arches, historic Jewish quarter & flowering patios',
    iconicDish: 'Salmorejo cordobés, flamenquín de lomo y rabo de toro estofado',
    languages: 'Castellano',
    notableLandmark: 'Mezquita-Catedral y Puente Romano',
    visitorTip: 'Visita los Patios del Alcázar Viejo o compra entradas para el Festival de los Patios en las dos primeras semanas de mayo.',
    spanishPhrase: {
      spanish: '«Un salmorejo con jamón ibérico y huevo picado, por favor.»',
      english: 'A salmorejo with Iberian ham and chopped egg, please.',
      phonetic: 'oon sahl-moh-REH-hoh kohn hah-MOHN ee-BEH-ree-koh ee WEH-voh pee-KAH-doh'
    },
    travelConnection: 'Conexión AVE con Madrid (1h 40m), Sevilla (42m) y Málaga (50m).',
    officialLink: {
      label: 'Turismo de Córdoba',
      url: 'https://www.turismodecordoba.org'
    },
    attractions: [
      {
        name: 'Mezquita-Catedral de Córdoba',
        desc: '856 columnas de jaspe, granito y mármol con arcos dobles de herradura que sustentan la techumbre.',
        highlight: 'Patrimonio de la Humanidad UNESCO'
      },
      {
        name: 'Puente Romano y Torre de la Calahorra',
        desc: 'Paso monumental sobre el río Guadalquivir edificado en el siglo I a.C. con dieciséis arcos.',
        highlight: 'Entrada meridional milenaria'
      },
      {
        name: 'La Judería y Calleja de las Flores',
        desc: 'Callejuela angosta que enmarca al fondo la torre alminar de la Mezquita entre macetas azules.',
        highlight: 'Rincón fotográfico icono de Andalucía'
      }
    ],
    gallery: [
      {
        id: 'cor-1',
        title: 'Arcos bicolores de la Mezquita',
        subtitle: 'Superposición de arcos de medio punto y herradura en piedra caliza y ladrillo rojo',
        photoTag: 'MEZQUITA · BOSQUE DE COLUMNAS',
        imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Arcos de la Mezquita de Córdoba'
      },
      {
        id: 'cor-2',
        title: 'Puente Romano al Anochecer',
        subtitle: 'El puente imperial del siglo I reflejado sobre las aguas mansas del Guadalquivir',
        photoTag: 'PUENTE ROMANO · PUERTA DEL PUENTE',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente Romano de Córdoba'
      },
      {
        id: 'cor-3',
        title: 'Calleja de las Flores',
        subtitle: 'La estrecha calleja andaluza repleta de geranios con la torre campanario al fondo',
        photoTag: 'JUDERÍA · CALLEJA DE LAS FLORES',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calleja de las Flores en Córdoba'
      },
      {
        id: 'cor-4',
        title: 'Patio Cordobés Tradicional',
        subtitle: 'Paredes encaladas cubiertas de tiestos de gitanillas, jazmines y pozos de agua fresca',
        photoTag: 'PATIOS CORDOBESES · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Patio tradicional cordobés'
      },
      {
        id: 'cor-5',
        title: 'Alcázar de los Reyes Cristianos',
        subtitle: 'Fortaleza medieval con murallas cuadrangulares y albercas flanqueadas por cipreses',
        photoTag: 'ALCÁZAR CRISTIANO · JARDINES',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Jardines del Alcázar de los Reyes Cristianos'
      },
      {
        id: 'cor-6',
        title: 'Medina Azahara',
        subtitle: 'La ciudad palatina que el califa Abderramán III erigió a los pies de Sierra Morena',
        photoTag: 'MADINAT AL-ZAHRA · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Ruinas de Medina Azahara en Córdoba'
      }
    ],
    secretSpots: [
      {
        id: 'priego-cordoba',
        name: 'Priego de Córdoba',
        distance: '98 km · 1h 15 min',
        description: 'La cuna del barroco andaluz con la Fuente del Rey de 139 caños y el barrio encalado de la Villa.',
        photoTag: 'SUBBÉTICA CORDOBESA · BARROCO',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'zuheros',
        name: 'Zuheros',
        distance: '75 km · 1 hora',
        description: 'Pueblo blanco aferrado a una peña calcárea en la Sierra Subbética con castillo medieval y quesos artesanos.',
        photoTag: 'SIERRA SUBBÉTICA · PUEBLO BLANCO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hospederías con patio en la Judería o palacetes señoriales junto a la Plaza del Potro.',
      hotelZones: [
        { title: 'Judería', desc: 'A escasos metros de la Mezquita, silencio nocturno y suelo empedrado.' },
        { title: 'San Basilio', desc: 'El epicentro de los patios tradicionales y la tranquilidad vecinal.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€70 – €140', usd: '$75 – $150', note: 'Habitación doble en hotel boutique' },
        dining: { eur: '€22 – €42', usd: '$24 – $45', note: 'Salmorejo, flamenquín y vino Montilla-Moriles' },
        transit: { eur: '€5 – €12', usd: '$5 – $13', note: 'Casco histórico 100% peatonal a pie' },
        total: { eur: '€97 – €194', usd: '$104 – $208' }
      }
    }
  },
  {
    id: 'ronda',
    name: 'Ronda',
    officialName: 'Serranía de Ronda · Málaga',
    capital: 'Ronda',
    region: 'Andalucía · Serranía de Ronda',
    coordinates: [36.7462, -5.1612],
    badge: 'La Ciudad Soñada',
    accentColor: '#B91C1C',
    tagline: '«El vertiginoso tajo sobre el abismo y los ecos de bandoleros y poetas»',
    photoTag: 'RONDA · PUENTE NUEVO SOBRE EL TAJO',
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Puente Nuevo de Ronda cruzando la garganta del Tajo de más de 100 metros',
    imageCaption: 'El colosal Puente Nuevo de sillería sobre el Tajo de Ronda',
    intro: 'Asentada sobre una meseta cortada a cuchillo por el río Guadalevín a más de cien metros de profundidad. Ronda cautivó a Ernest Hemingway, Orson Welles y Rainer Maria Rilke con su Puente Nuevo de sillería dorada, su plaza de toros neoclásica y sus palacios nobiliarios.',
    culturalHighlight: 'El Puente Nuevo, La Plaza de Toros de la Real Maestranza y los Baños Árabes',
    englishHighlight: 'Dramatic cliffside gorge, iconic Puente Nuevo stone bridge & bullfighting heritage',
    iconicDish: 'Rabo de toro a la rondeña, yemas del Tajo y migas serranas',
    languages: 'Castellano',
    notableLandmark: 'Puente Nuevo sobre el Tajo',
    visitorTip: 'Baja al atardecer por el camino de los Molinos del Tajo para contemplar el puente iluminado desde el fondo de la garganta.',
    spanishPhrase: {
      spanish: '«¿Dónde está el mirador hacia el fondo del Tajo?»',
      english: 'Where is the viewpoint overlooking the bottom of the gorge?',
      phonetic: 'DOHN-deh ehs-TAH ehl mee-rah-DOHR AH-thyah ehl FOHN-doh dehl TAH-hoh'
    },
    travelConnection: 'Tren directo con Madrid (3h 50m) y autobuses directos desde Málaga (1h 30m) y Sevilla (1h 45m).',
    officialLink: {
      label: 'Turismo de Ronda',
      url: 'https://turismoderonda.es'
    },
    attractions: [
      {
        name: 'El Puente Nuevo',
        desc: 'Monumento del siglo XVIII de piedra arenisca que une la ciudad antigua con el barrio del Mercadillo sobre 120 metros de abismo.',
        highlight: 'Icono paisajístico de España'
      },
      {
        name: 'Plaza de Toros de la Real Maestranza',
        desc: 'Una de las plazas más antiguas y monumentales del país, levantada en 1785 con arquería de piedra.',
        highlight: 'Cuna de la dinastía de los Romero'
      },
      {
        name: 'Baños Árabes de Ronda',
        desc: 'Termas hispanomusulmanas del siglo XIII excepcionalmente conservadas junto al arroyo de las Culebras.',
        highlight: 'Los baños árabes mejor preservados de España'
      }
    ],
    gallery: [
      {
        id: 'ron-1',
        title: 'El Puente Nuevo desde el fondo del Tajo',
        subtitle: 'El arco central de 98 metros de altura enmarcado por las paredes verticales de roca',
        photoTag: 'RONDA · PUENTE NUEVO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente Nuevo de Ronda sobre el cañón'
      },
      {
        id: 'ron-2',
        title: 'Casas Colgadas al borde del precipicio',
        subtitle: 'Mansiones blancas cuyos balcones se asoman directamente al abismo del Guadalevín',
        photoTag: 'EL TAJO · ABISMO NATURAL',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Casas colgadas sobre el Tajo de Ronda'
      },
      {
        id: 'ron-3',
        title: 'Palacio de Mondragón',
        subtitle: 'Antigua residencia del rey moro Abomelic con patios mudéjares y jardines colgantes',
        photoTag: 'LA CIUDAD · PALACIO DE MONDRAGÓN',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Jardines del Palacio de Mondragón'
      },
      {
        id: 'ron-4',
        title: 'Plaza de Toros de la Maestranza',
        subtitle: 'Círculo de arena de 66 metros rodeado por columnas toscanas de piedra',
        photoTag: 'MAESTRANZA · PATRIMONIO ECUESTRE',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de Toros de Ronda'
      },
      {
        id: 'ron-5',
        title: 'Baños Árabes del arrabal',
        subtitle: 'Bóvedas de cañón con claraboyas estrelladas que filtran la luz en las salas de vapor',
        photoTag: 'BAÑOS ÁRABES · SIGLO XIII',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Interior de los Baños Árabes de Ronda'
      },
      {
        id: 'ron-6',
        title: 'Mirador de Aldehuela',
        subtitle: 'Balcón colgado que ofrece vistas al anfiteatro natural de las sierras malagueñas',
        photoTag: 'SERRANÍA DE RONDA · PANORÁMICA',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Mirador de Aldehuela en Ronda'
      }
    ],
    secretSpots: [
      {
        id: 'setenil',
        name: 'Setenil de las Bodegas',
        distance: '18 km · 20 min',
        description: 'Pueblo blanco excavado bajo gigantescas rocas en el cañón del río Trejo con calles bajo la roca.',
        photoTag: 'PUEBLOS BLANCOS · CASAS CUEVA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'grazalema',
        name: 'Grazalema',
        distance: '32 km · 35 min',
        description: 'Pueblo de alta montaña rodeado por el bosque milenario de pinsapos en el parque natural más lluvioso de España.',
        photoTag: 'SIERRA DE GRAZALEMA · PINSAPAR',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Ronda (antiguo Ayuntamiento al borde del Tajo) o casonas solariegas en la calle Tenorio.',
      hotelZones: [
        { title: 'Borde del Tajo', desc: 'Vistas panorámicas hacia el desfiladero y la puesta de sol.' },
        { title: 'La Ciudad Antigua', desc: 'Paz absoluta entre iglesias góticas y palacetes renacentistas.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€75 – €150', usd: '$80 – $162', note: 'Habitación con vistas al valle' },
        dining: { eur: '€24 – €44', usd: '$26 – $47', note: 'Guisos de la serranía y vinos D.O. Sierras de Málaga' },
        transit: { eur: '€5 – €10', usd: '$5 – $11', note: 'Ciudad compacta enteramente transitable a pie' },
        total: { eur: '€104 – €204', usd: '$111 – $220' }
      }
    }
  },
  {
    id: 'malaga',
    name: 'Málaga',
    officialName: 'Provincia de Málaga · Andalucía',
    capital: 'Málaga',
    region: 'Andalucía · Costa del Sol',
    coordinates: [36.7213, -4.4214],
    badge: 'Capital de la Costa del Sol',
    accentColor: '#0284C7',
    tagline: '«Cuna de Picasso, aroma de espetos de sardina y luz dorada mediterránea»',
    photoTag: 'MÁLAGA · ALCAZABA Y TEATRO ROMANO',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'La Alcazaba de Málaga con el mar Mediterráneo al fondo',
    imageCaption: 'Alcazaba hispanomusulmana y Teatro Romano a los pies de Gibralfaro',
    intro: 'Fundada por los fenicios hace cerca de tres mil años, Málaga se ha transformado en un epicentro cultural mediterráneo de primer orden. Alberga más de treinta museos —entre ellos el Museo Picasso y el Centre Pompidou—, la fortaleza de la Alcazaba y playas donde asar espetos de sardinas a la leña de olivo.',
    culturalHighlight: 'Museo Picasso, La Alcazaba, Castillo de Gibralfaro y los espetos en el Pedregalejo',
    englishHighlight: 'Picasso birthplace, majestic Moorish Alcazaba & beachside sardine espetos',
    iconicDish: 'Espetos de sardinas a la caña, porra antequerana y fritura malagueña',
    languages: 'Castellano',
    notableLandmark: 'La Alcazaba y Catedral «La Manquita»',
    visitorTip: 'Sube al Mirador de Gibralfaro al atardecer para contemplar la plaza de toros de La Malagueta y el puerto iluminado.',
    spanishPhrase: {
      spanish: '«Un espeto de sardinas y una cerveza Victoria bien fría.»',
      english: 'A skewer of grilled sardines and a cold Victoria beer.',
      phonetic: 'oon ehs-PEH-toh deh sahr-DEE-nahs ee OO-nah thehr-BEH-thah veek-TOH-ryah byehn FREE-ah'
    },
    travelConnection: 'AVE directo con Madrid (2h 40m) y Barcelona (5h 30m). Aeropuerto internacional AGP.',
    officialLink: {
      label: 'Turismo de Málaga',
      url: 'https://visita.malaga.eu'
    },
    attractions: [
      {
        name: 'La Alcazaba de Málaga',
        desc: 'Palacio-fortaleza árabe del siglo XI edificado sobre el monte Gibralfaro con arquerías de herradura y fuentes.',
        highlight: 'Una de las fortalezas musulmanas más imponentes de España'
      },
      {
        name: 'Museo Picasso Málaga',
        desc: 'Ubicado en el Palacio de Buenavista del siglo XVI, exhibe más de doscientas obras del genio malagueño.',
        highlight: 'Colección permanente donada por la familia Picasso'
      },
      {
        name: 'Catedral de la Encarnación («La Manquita»)',
        desc: 'Joya renacentista-barroca llamada «La Manquita» por haber quedado inconclusa su torre sur.',
        highlight: 'Techumbre renacentista y coro de Pedro de Mena'
      }
    ],
    gallery: [
      {
        id: 'mal-1',
        title: 'La Alcazaba y Murallas de Gibralfaro',
        subtitle: 'La fortificación escalonada rodeada de buganvillas frente a la bahía',
        photoTag: 'MÁLAGA · ALCAZABA MUSULMANA',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'La Alcazaba de Málaga'
      },
      {
        id: 'mal-2',
        title: 'Teatro Romano a los pies de la colina',
        subtitle: 'Graderío romano del siglo I descubierto fortuitamente en 1951',
        photoTag: 'TEATRO ROMANO · ÉPOCA DE AUGUSTO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Teatro Romano de Málaga'
      },
      {
        id: 'mal-3',
        title: 'Centre Pompidou y Muelle Uno',
        subtitle: 'El cubo translúcido de colores de Daniel Buren sobre el puerto deportivo',
        photoTag: 'MUELLE UNO · ARTE CONTEMPORÁNEO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'El Cubo del Centre Pompidou en Málaga'
      },
      {
        id: 'mal-4',
        title: 'Catedral de Málaga «La Manquita»',
        subtitle: 'La imponente fachada de mármoles polícromos en pleno centro histórico',
        photoTag: 'CATEDRAL · RENACIMIENTO ANDALUZ',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Málaga'
      },
      {
        id: 'mal-5',
        title: 'Espetos al fuego en el Pedregalejo',
        subtitle: 'Sardinas ensartadas en caña de cañaveral asadas sobre barcas de arena marina',
        photoTag: 'PEDREGALEJO · RITUAL DEL ESPETO',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Espetos de sardinas asándose en Málaga'
      },
      {
        id: 'mal-6',
        title: 'Calle Larios en el Centro Histórico',
        subtitle: 'Elegante arteria peatonal con arquitectura decimonónica y suelo de mármol pulido',
        photoTag: 'CALLE LARIOS · CORAZÓN MALAGUEÑO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calle Marqués de Larios en Málaga'
      }
    ],
    secretSpots: [
      {
        id: 'caminito-rey',
        name: 'El Caminito del Rey (Ardales)',
        distance: '58 km · 50 min',
        description: 'Pasarela peatonal colgada a más de 100 metros sobre el desfiladero de los Gaitanes.',
        photoTag: 'DESFILADERO · PASARELA COLGANTE',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'frigiliana',
        name: 'Frigiliana',
        distance: '55 km · 45 min',
        description: 'Considerado el pueblo blanco más puro de Málaga con mosaicos de cerámica que relatan la rebelión morisca.',
        photoTag: 'AXARQUÍA · PUEBLO BLANCO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hoteles en palacetes decimonónicos del centro histórico o resorts frente a la playa de La Malagueta.',
      hotelZones: [
        { title: 'Centro Histórico', desc: 'A pasos del Museo Picasso, el Teatro Romano y tabernas con solera.' },
        { title: 'Soho / Muelle Uno', desc: 'Barrio artístico con galerías urbanas y vistas a la dársena.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€75 – €160', usd: '$81 – $172', note: 'Habitación doble céntrica' },
        dining: { eur: '€25 – €45', usd: '$27 – $48', note: 'Espetos, fritura y vino dulce moscatel' },
        transit: { eur: '€6 – €14', usd: '$6 – $15', note: 'Metro de Málaga y autobuses urbanos' },
        total: { eur: '€106 – €219', usd: '$114 – $235' }
      }
    }
  },
  {
    id: 'cadiz',
    name: 'Cádiz',
    officialName: 'Provincia de Cádiz · Andalucía',
    capital: 'Cádiz',
    region: 'Andalucía · Costa de la Luz',
    coordinates: [36.5271, -6.2886],
    badge: 'La Tacita de Plata',
    accentColor: '#EAB308',
    tagline: '«La ciudad más antigua de Occidente abrazada por las olas del océano Atlántico»',
    photoTag: 'CÁDIZ · CATEDRAL Y MALECÓN',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Catedral de Cádiz con cúpula dorada frente al malecón del Campo del Sur',
    imageCaption: 'La Catedral de Cádiz y el malecón atlántico del Campo del Sur',
    intro: 'Fundada por navegantes fenicios hacia el 1100 a.C. con el nombre de Gadir. Cádiz es una isla unida al continente por una lengua de arena, famosa por su luz atlántica cegadora, sus torres mirador desde donde los comerciantes vigilaban las flotas de ultramar y su carnaval satírico.',
    culturalHighlight: 'La Catedral Nueva, la playa de La Caleta, las torres mirador y el Carnaval de Cádiz',
    englishHighlight: 'Western Europe oldest city, golden cathedral dome & historic Atlantic beaches',
    iconicDish: 'Tortillitas de camarones, cazón en adobo y atún rojo de almadraba',
    languages: 'Castellano (acento gaditano)',
    notableLandmark: 'Catedral de Cádiz y Playa de La Caleta',
    visitorTip: 'Sube a la Torre Tavira para ver la cámara oscura proyectando la vida viva de la ciudad en 360 grados.',
    spanishPhrase: {
      spanish: '«Unos cartuchos de pescaíto frito y tortillitas de camarones.»',
      english: 'Cones of fried fish and shrimp fritters.',
      phonetic: 'OO-nohs kahr-TOO-chohs deh pehs-kah-EE-toh FREE-toh ee tohr-tee-LYEE-tahs deh kah-mah-ROH-nehs'
    },
    travelConnection: 'Tren Alvia directo con Madrid (4 horas) y cercanías con Sevilla (1h 40m).',
    officialLink: {
      label: 'Turismo de Cádiz',
      url: 'https://turismo.cadiz.es'
    },
    attractions: [
      {
        name: 'Catedral de la Santa Cruz sobre el Mar',
        desc: 'Catedral neoclásica y barroca con su célebre cúpula de azulejos dorados besada por la brisa marina.',
        highlight: 'Tumba del compositor Manuel de Falla'
      },
      {
        name: 'Playa de La Caleta',
        desc: 'Playa urbana histórica encajada entre los castillos de Santa Catalina y San Sebastián.',
        highlight: 'Escenario de películas míticas como James Bond'
      },
      {
        name: 'Torre Tavira y Cámara Oscura',
        desc: 'La torre mirador oficial más alta de Cádiz (45 m) con vista panorámica de las 130 torres de la ciudad.',
        highlight: 'Primera cámara oscura instalada en España'
      }
    ],
    gallery: [
      {
        id: 'cad-1',
        title: 'Catedral de Cádiz y Campo del Sur',
        subtitle: 'El malecón gaditano acariciado por las mareas atlánticas que recuerda a La Habana',
        photoTag: 'CÁDIZ · CATEDRAL SOBRE EL MAR',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Cádiz desde el Campo del Sur'
      },
      {
        id: 'cad-2',
        title: 'Playa de La Caleta y Balneario',
        subtitle: 'El antiguo balneario de la Palma sobre la arena donde fondearon naves fenicias y romanas',
        photoTag: 'LA CALETA · BALNEARIO HISTÓRICO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Playa de La Caleta en Cádiz'
      },
      {
        id: 'cad-3',
        title: 'Barrio del Pópulo',
        subtitle: 'El barrio medieval más antiguo de Europa con tres arcos de entrada del siglo XIII',
        photoTag: 'EL PÓPULO · CALLEJONES MEDIEVALES',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calles del barrio del Pópulo en Cádiz'
      },
      {
        id: 'cad-4',
        title: 'Castillo de San Sebastián',
        subtitle: 'Fortaleza insular unida a tierra por un largo malecón de piedra sobre el arrecife',
        photoTag: 'FORTALEZA INSULAR · OCÉANO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Castillo de San Sebastián en Cádiz'
      },
      {
        id: 'cad-5',
        title: 'Mercado Central de Abastos',
        subtitle: 'Puestos rebosantes de atún de almadraba, gamba blanca y chocos frescos',
        photoTag: 'MERCADO DE ABASTOS · PESCADO',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Mercado de Abastos de Cádiz'
      },
      {
        id: 'cad-6',
        title: 'Parque Genovés y Bahía',
        subtitle: 'Jardín botánico junto al mar con cipreses recortados con formas geométricas escultóricas',
        photoTag: 'PARQUE GENOVÉS · JARDÍN BOTÁNICO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Parque Genovés en Cádiz'
      }
    ],
    secretSpots: [
      {
        id: 'vejer',
        name: 'Vejer de la Frontera',
        distance: '54 km · 45 min',
        description: 'Pueblo blanco amurallado sobre una colina con patios árabes, muralla almenada y vistas al Atlántico.',
        photoTag: 'LA JANDA · PUEBLO BLANCO AMURALLADO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'tarifa-bolonia',
        name: 'Bolonia y Baelo Claudia',
        distance: '95 km · 1h 10 min',
        description: 'Duna gigante de arena móvil junto a la factoría romana de salazón de pescado más completa de Hispania.',
        photoTag: 'RUINAS ROMANAS · DUNA MONUMENTAL',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Cádiz (hotel vanguardista frente al mar en La Caleta) o casas señoriales del barrio de San Carlos.',
      hotelZones: [
        { title: 'El Pópulo y Catedral', desc: 'Atmósfera histórica, tabernas de pescado y acceso a la plaza de las Flores.' },
        { title: 'Paseo Marítimo', desc: 'Hoteles frente a la playa de la Victoria con vistas directas al Atlántico.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€70 – €145', usd: '$75 – $156', note: 'Habitación doble en hotel marinero' },
        dining: { eur: '€22 – €40', usd: '$24 – $43', note: 'Tortillitas de camarones y atún a la plancha' },
        transit: { eur: '€4 – €10', usd: '$4 – $11', note: 'La península se recorre enteramente a pie' },
        total: { eur: '€96 – €195', usd: '$103 – $210' }
      }
    }
  },
  {
    id: 'almeria',
    name: 'Almería',
    officialName: 'Provincia de Almería · Andalucía',
    capital: 'Almería',
    region: 'Andalucía · Cabo de Gata',
    coordinates: [36.8381, -2.4597],
    badge: 'Tierra de Sol y Desierto',
    accentColor: '#CA8A04',
    tagline: '«La mayor alcazaba árabe de España frente a las calas volcánicas de Cabo de Gata»',
    photoTag: 'ALMERÍA · ALCAZABA Y CERRO DE SAN CRISTÓBAL',
    imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'La Alcazaba de Almería sobre la colina dominando la ciudad',
    imageCaption: 'La monumental Alcazaba de Almería fundada en 955 por Abderramán III',
    intro: 'La ciudad más oriental de Andalucía brilla con más de tres mil horas de sol al año. Custodiada por la gigantesca Alcazaba califal de tres recintos amurallados, Almería es la puerta de entrada al Parque Natural de Cabo de Gata-Níjar y al desierto de Tabernas.',
    culturalHighlight: 'La Alcazaba califal, Catedral-Fortaleza de la Encarnación y Cabo de Gata',
    englishHighlight: 'Grand Moorish Alcazaba fortress, fortified cathedral & pristine volcanic beaches',
    iconicDish: 'Gaspacho de Almería, chérigan de alioli y jamón, y gamba roja de Garrucha',
    languages: 'Castellano',
    notableLandmark: 'Alcazaba de Almería y Parque Natural Cabo de Gata',
    visitorTip: 'Recorre el paseo de ronda de la Alcazaba a primera hora de la mañana para contemplar el barrio de pescadores de La Chanca.',
    spanishPhrase: {
      spanish: '«Un chérigan con jamón serrano y una caña, por favor.»',
      english: 'A toasted bread chérigan with serrano ham and a draft beer, please.',
      phonetic: 'oon CHEH-ree-gahn kohn hah-MOHN sehr-RAH-noh ee OO-nah KAH-nyah'
    },
    travelConnection: 'Tren Talgo directo con Madrid (6 horas) y vuelos directos en el aeropuerto LEI.',
    officialLink: {
      label: 'Turismo de Almería',
      url: 'https://turismodealmeria.org'
    },
    attractions: [
      {
        name: 'La Alcazaba de Almería',
        desc: 'Construcción militar musulmana del siglo X con tres recintos amurallados que domina la bahía.',
        highlight: 'La mayor alcazaba construida por los árabes en España'
      },
      {
        name: 'Catedral-Fortaleza de la Encarnación',
        desc: 'Templo gótico-renacentista fortificado con torreones y almenas para defenderse de piratas berberiscos.',
        highlight: 'Única catedral-fortaleza con estructura militar completa'
      },
      {
        name: 'Refugios de la Guerra Civil',
        desc: 'Más de cuatro kilómetros de galerías subterráneas excavadas a nueve metros bajo tierra.',
        highlight: 'Uno de los mayores refugios antiaéreos de Europa'
      }
    ],
    gallery: [
      {
        id: 'alm-1',
        title: 'Alcazaba y Cerro de San Cristóbal',
        subtitle: 'Las tres murallas escalonadas que protegieron el mayor puerto comercial del califato',
        photoTag: 'ALMERÍA · ALCAZABA MUSULMANA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Murallas de la Alcazaba de Almería'
      },
      {
        id: 'alm-2',
        title: 'Cala de los Muertos en Cabo de Gata',
        subtitle: 'Aguas turquesas y formaciones volcánicas vírgenes sin construcciones',
        photoTag: 'CABO DE GATA · PLAYA VIRGEN',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Cala de los Muertos en Cabo de Gata'
      },
      {
        id: 'alm-3',
        title: 'Arrecife de las Sirenas',
        subtitle: 'Chimeneas volcánicas que emergen del mar junto al Faro de Cabo de Gata',
        photoTag: 'ARRECIFE VOLCÁNICO · CABO DE GATA',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Arrecife de las Sirenas en Almería'
      },
      {
        id: 'alm-4',
        title: 'Catedral de Almería y Plaza de los Almendros',
        subtitle: 'Muros almenados de sillería dorada con aspecto de castillo inexpugnable',
        photoTag: 'CATEDRAL FORTALEZA · SIGLO XVI',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Almería'
      },
      {
        id: 'alm-5',
        title: 'Desierto de Tabernas',
        subtitle: 'Paisaje de badlands y cañones áridos donde se rodaron los spaghetti westerns míticos',
        photoTag: 'TABERNAS · EL ÚNICO DESIERTO EUROPEO',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Desierto de Tabernas en Almería'
      },
      {
        id: 'alm-6',
        title: 'Cable Inglés (Cargadero de Mineral)',
        subtitle: 'Monumento de arquitectura industrial de hierro de la escuela de Gustave Eiffel',
        photoTag: 'PATRIMONIO INDUSTRIAL · PUERTO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Cable Inglés en el puerto de Almería'
      }
    ],
    secretSpots: [
      {
        id: 'mojacar',
        name: 'Mojácar Pueblo',
        distance: '88 km · 1 hora',
        description: 'Pueblo blanco de laberinto moruno encaramado en la sierra de Cabrera con flores en cada dintel.',
        photoTag: 'LEVANTE ALMERIENSE · PUEBLO BLANCO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'nijar',
        name: 'Níjar',
        distance: '34 km · 30 min',
        description: 'Villa artesana famosa por sus jarapas multicolores de telar y su cerámica vidriada tradicional.',
        photoTag: 'ARTESANÍA · JARAPAS Y CERÁMICA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hoteles boutique en el casco histórico de Almería o cortijos rurales en el Parque Natural Cabo de Gata.',
      hotelZones: [
        { title: 'Centro Histórico', desc: 'Junto a la Catedral y la Plaza Vieja, tabernas de tapas tradicionales.' },
        { title: 'San José (Cabo de Gata)', desc: 'Antiguo pueblo de pescadores con acceso directo a las playas vírgenes de Genoveses y Mónsul.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€60 – €125', usd: '$65 – $135', note: 'Habitación doble en hotel o cortijo' },
        dining: { eur: '€18 – €35', usd: '$20 – $38', note: 'Tapa gratuita incluida con cada bebida' },
        transit: { eur: '€12 – €25', usd: '$13 – $27', note: 'Coche de alquiler indispensable para las calas' },
        total: { eur: '€90 – €185', usd: '$98 – $200' }
      }
    }
  },
  {
    id: 'jaen',
    name: 'Jaén',
    officialName: 'Provincia de Jaén · Andalucía',
    capital: 'Jaén',
    region: 'Andalucía · Mar de Olivos',
    coordinates: [37.7796, -3.7849],
    badge: 'Capital Mundial del Aceite',
    accentColor: '#65A30D',
    tagline: '«Sesenta y seis millones de olivos custodiados por el Castillo de Santa Catalina»',
    photoTag: 'JAÉN · CATEDRAL Y CASTILLO DE SANTA CATALINA',
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Mar de olivos de Jaén con el Castillo de Santa Catalina en lo alto',
    imageCaption: 'El mar de olivos y la cumbre del Castillo de Santa Catalina de Jaén',
    intro: 'El mayor bosque humanizado del planeta: más de sesenta y seis millones de olivos alineados en un manto verde plateado sin fin. Jaén custodia la colosal Catedral renacentista de Andrés de Vandelvira —modelo de las grandes catedrales hispanoamericanas— y los Baños Árabes más extensos del mundo occidental.',
    culturalHighlight: 'Catedral de Jaén, Castillo de Santa Catalina, Baños Árabes y las ciudades UNESCO de Úbeda y Baeza',
    englishHighlight: 'World capital of olive oil, Vandelvira Renaissance cathedral & largest Moorish baths',
    iconicDish: 'Pipirrana jaenera, lomo de orza, ochíos de pimentón y AOVE picual virgen extra',
    languages: 'Castellano',
    notableLandmark: 'Catedral de Jaén y Castillo de Santa Catalina',
    visitorTip: 'Sube al Parador de Santa Catalina para contemplar el atardecer sobre el mar de olivos extendiéndose hasta el horizonte.',
    spanishPhrase: {
      spanish: '«Una tostada de pan de pueblo con aceite virgen extra picual y tomate.»',
      english: 'Rustic toast with picual extra virgin olive oil and grated tomato.',
      phonetic: 'OO-nah tohs-TAH-dah deh pahn deh PWEH-bloh kohn ah-THAY-teh VEER-hehn EKS-trah pee-KWAHL ee toh-MAH-teh'
    },
    travelConnection: 'Tren de media distancia con Madrid (3h 30m) y enlaces por autovía A-4 con Granada (1 hora).',
    officialLink: {
      label: 'Turismo de Jaén',
      url: 'https://www.jaenparaisointerior.es'
    },
    attractions: [
      {
        name: 'Catedral de la Asunción de Jaén',
        desc: 'Obra cumbre del Renacimiento español ideada por Andrés de Vandelvira con majestuosas galerías altas.',
        highlight: 'Custodia la reliquia del Santo Rostro'
      },
      {
        name: 'Castillo de Santa Catalina',
        desc: 'Fortaleza medieval emplazada en la cresta del cerro que domina la ciudad a más de 800 metros de altitud.',
        highlight: 'Parador Nacional histórico'
      },
      {
        name: 'Baños Árabes del Palacio de Villardompardo',
        desc: 'Termas hispanomusulmanas del siglo XI de 450 metros cuadrados con lucernarios estrellados.',
        highlight: 'Los baños árabes más grandes visitables de Europa'
      }
    ],
    gallery: [
      {
        id: 'jae-1',
        title: 'Catedral de la Asunción de Vandelvira',
        subtitle: 'La fachada renacentista monumental flanqueada por dos torres campanario de 68 metros',
        photoTag: 'JAÉN · CATEDRAL RENACENTISTA',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Jaén'
      },
      {
        id: 'jae-2',
        title: 'Castillo de Santa Catalina',
        subtitle: 'La alcazaba y el alcázar cristiano recortados sobre la cima rocosa del cerro',
        photoTag: 'SANTA CATALINA · FORTALEZA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Castillo de Santa Catalina en Jaén'
      },
      {
        id: 'jae-3',
        title: 'El Mar de Olivos al Atardecer',
        subtitle: 'Colinas onduladas tapizadas por millones de olivos picuales que producen el mejor AOVE',
        photoTag: 'PAISAJE DEL OLIVAR · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Mar de olivos en Jaén'
      },
      {
        id: 'jae-4',
        title: 'Baños Árabes del Villardompardo',
        subtitle: 'Columnas y capiteles árabes en la Sala Caliente de los baños del siglo XI',
        photoTag: 'BAÑOS ÁRABES · SIGLO XI',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Baños Árabes de Jaén'
      },
      {
        id: 'jae-5',
        title: 'Plaza de Santa María y Ayuntamiento',
        subtitle: 'El epicentro cívico donde la mole de piedra de la Catedral proyecta su sombra dorada',
        photoTag: 'PLAZA DE SANTA MARÍA',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de Santa María en Jaén'
      },
      {
        id: 'jae-6',
        title: 'Barrio de la Magdalena y Raudal',
        subtitle: 'El barrio fundacional donde nació la leyenda del célebre Lagarto de Jaén',
        photoTag: 'LA MAGDALENA · LEYENDA DEL LAGARTO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Barrio de la Magdalena en Jaén'
      }
    ],
    secretSpots: [
      {
        id: 'ubeda',
        name: 'Úbeda (Patrimonio UNESCO)',
        distance: '56 km · 45 min',
        description: 'La plaza Vázquez de Molina concentra una de las mayores densidades de palacios renacentistas del continente.',
        photoTag: 'RENACIMIENTO ANDALUZ · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'baeza',
        name: 'Baeza (Patrimonio UNESCO)',
        distance: '48 km · 40 min',
        description: 'Ciudad poética de Antonio Machado con su Catedral plateresca y fuente de Santa María.',
        photoTag: 'CIUDAD POÉTICA · MACHADO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Jaén dentro del Castillo de Santa Catalina o palacetes señoriales en el casco antiguo.',
      hotelZones: [
        { title: 'Cerro de Santa Catalina', desc: 'Vistas panorámicas a 800 m de altura y silencio nocturno.' },
        { title: 'Centro Histórico', desc: 'A pasos de la Catedral, tabernas de tapas tradicionales donde la tapa es siempre gratuita.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€55 – €120', usd: '$60 – $130', note: 'Habitación doble en hotel o parador' },
        dining: { eur: '€18 – €34', usd: '$20 – $37', note: 'Tapas abundantes gratuitas con caña' },
        transit: { eur: '€5 – €12', usd: '$5 – $13', note: 'Caminatas a pie y taxis locales' },
        total: { eur: '€78 – €166', usd: '$85 – $180' }
      }
    }
  },
  {
    id: 'huelva',
    name: 'Huelva',
    officialName: 'Provincia de Huelva · Andalucía',
    capital: 'Huelva',
    region: 'Andalucía · Costa de la Luz y Doñana',
    coordinates: [37.2614, -6.9447],
    badge: 'Cuna del Descubrimiento',
    accentColor: '#0D9488',
    tagline: '«Playas vírgenes atlánticas, la marisma de Doñana y el mejor jamón ibérico de Jabugo»',
    photoTag: 'HUELVA · MUELLE DEL TINTO Y DOÑANA',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Muelle del Tinto en Huelva al atardecer sobre la ría',
    imageCaption: 'El Muelle de mineral de la compañía Riotinto sobre la ría de Huelva',
    intro: 'Abrazada por las rías del Tinto y del Odiel, Huelva es una encrucijada histórica y natural única. Desde el Monasterio de La Rábida zarpó Cristóbal Colón en 1492 hacia el Nuevo Mundo. Su provincia cobija las marismas de Doñana —el mayor humedal de Europa— y las dehesas de la Sierra de Aracena.',
    culturalHighlight: 'Lugares Colombinos (La Rábida), Parque Nacional de Doñana, Muelle del Tinto y Jamón de Jabugo',
    englishHighlight: 'Columbus departure point at La Rábida, Doñana National Park & world-class Jabugo ham',
    iconicDish: 'Jamón 100% ibérico de bellota D.O.P. Jabugo, gamba blanca de Huelva y chocos con patatas',
    languages: 'Castellano',
    notableLandmark: 'Muelle del Tinto y Monasterio de La Rábida',
    visitorTip: 'Degusta una ración de gamba blanca cocida en su punto en el Mercado del Carmen frente a la ría.',
    spanishPhrase: {
      spanish: '«Un plato de jamón de Jabugo y una ración de gambas blancas cocidas.»',
      english: 'A plate of Jabugo acorn-fed ham and a portion of boiled white shrimp.',
      phonetic: 'oon PLAH-toh deh hah-MOHN deh hah-BOO-goh ee OO-nah rah-THYOHN deh GAHM-bahs BLAHN-kahs koh-THEE-dahs'
    },
    travelConnection: 'Tren Alvia directo con Madrid (3h 40m) y conexión por autovía A-49 con Sevilla (1 hora).',
    officialLink: {
      label: 'Turismo de Huelva',
      url: 'https://turismohuelva.org'
    },
    attractions: [
      {
        name: 'Muelle de Mineral de la Compañía de Riotinto',
        desc: 'Espectacular cargadero de hierro construido en 1876 sobre pilotes de madera en la ría del Odiel.',
        highlight: 'Monumento de ingeniería británica del siglo XIX'
      },
      {
        name: 'Monasterio de Santa María de La Rábida (Palos)',
        desc: 'Cenobio franciscano del siglo XIV donde Colón planificó su primer viaje transatlántico.',
        highlight: 'Hito histórico del Descubrimiento de América'
      },
      {
        name: 'Parque Nacional de Doñana',
        desc: 'Mosaico de dunas móviles, pinares y marismas que acoge a millones de aves migratorias y al lince ibérico.',
        highlight: 'Reserva de la Biosfera y Patrimonio Mundial UNESCO'
      }
    ],
    gallery: [
      {
        id: 'hue-1',
        title: 'Muelle del Tinto al Ocaso',
        subtitle: 'La estructura de madera y hierro adentrándose en el estuario en tonos malva y ámbar',
        photoTag: 'HUELVA · MUELLE DEL TINTO',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Muelle del Tinto en Huelva'
      },
      {
        id: 'hue-2',
        title: 'Marismas y Lagunas de Doñana',
        subtitle: 'Flamencos rosados y espátulas alimentándose en las aguas someras del parque nacional',
        photoTag: 'DOÑANA · PATRIMONIO UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Marismas de Doñana'
      },
      {
        id: 'hue-3',
        title: 'Monasterio de La Rábida',
        subtitle: 'Claustro mudéjar y sala capitular donde se hospedó Cristóbal Colón',
        photoTag: 'LA RÁBIDA · LUGARES COLOMBINOS',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Monasterio de La Rábida'
      },
      {
        id: 'hue-4',
        title: 'Minas de Riotinto',
        subtitle: 'Paisaje marciano de aguas rojizas ricas en hierro y minerales explotadas desde la Antigüedad',
        photoTag: 'RIOTINTO · PAISAJE MINERO MARCIANO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Río Tinto en Huelva'
      },
      {
        id: 'hue-5',
        title: 'Playa virgen de Cuesta Maneli',
        subtitle: 'Acantilados de arenisca dorada y dunas fósiles frente a kilómetros de mar abierto',
        photoTag: 'COSTA DE LA LUZ · PLAYAS VÍRGENES',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Cuesta Maneli en Huelva'
      },
      {
        id: 'hue-6',
        title: 'Dehesas de Jabugo y Encinas',
        subtitle: 'Bosques de encinas centenarias donde los cerdos ibéricos pastan en libertad durante la montanera',
        photoTag: 'SIERRA DE ARACENA · JAMÓN IBÉRICO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Dehesa de Jabugo en Huelva'
      }
    ],
    secretSpots: [
      {
        id: 'almonaster',
        name: 'Almonaster la Real',
        distance: '105 km · 1h 20 min',
        description: 'Pueblo serrano que conserva la única mezquita rural del siglo X intacta en España dentro de un castillo.',
        photoTag: 'SIERRA DE ARACENA · MEZQUITA CALIFAL',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'el-rocio',
        name: 'Aldea de El Rocío (Almonte)',
        distance: '55 km · 45 min',
        description: 'Pueblo de calles de arena sin asfaltar frente a la marisma de Doñana, donde caballos y carretas esperan a la Virgen.',
        photoTag: 'EL ROCÍO · TRADICIÓN MARISMEÑA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hoteles frente a la ría en Huelva capital o casas rurales y conventos rehabilitados en Aracena.',
      hotelZones: [
        { title: 'Centro de Huelva', desc: 'Cerca del Mercado del Carmen y los restaurantes de marisco de la calle Vázquez López.' },
        { title: 'Aracena', desc: 'Pueblo blanco con la Gruta de las Maravillas y secaderos de jamón visitables.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€60 – €130', usd: '$65 – $140', note: 'Habitación doble en hotel o casa serrana' },
        dining: { eur: '€22 – €44', usd: '$24 – $47', note: 'Gamba blanca de Huelva y jamón ibérico de bellota' },
        transit: { eur: '€10 – €22', usd: '$11 – $24', note: 'Coche recomendado para explorar Doñana y la Sierra' },
        total: { eur: '€92 – €196', usd: '$100 – $211' }
      }
    }
  }
];
