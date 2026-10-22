export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  intro: string;
  accentColor: string;
  badge: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  photoTag: string;
  attractions: { name: string; desc: string; icon: string; highlight: string }[];
  visitorTip: string;
  spanishPhrase: { spanish: string; english: string; phonetic: string };
  officialLink: { label: string; url: string };
  highlights: string[];
  travelConnection: string;
  curiosity: { title: string; text: string };
}

export interface Dish {
  id: string;
  name: string;
  spanishTitle: string;
  category: string;
  price: number;
  description: string;
  badge: string;
  accentColor: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  photoTag: string;
  ingredients: string[];
  regionalOrigin: string;
  keyPhrase: { spanish: string; english: string };
  servingNote: string;
}

export interface Tradition {
  id: string;
  name: string;
  location: string;
  dates: string;
  accentColor: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  photoTag: string;
  significance: string;
  history: string;
  keyElements: string[];
  spanishQuote: { spanish: string; english: string };
}

export interface PhraseCard {
  id: string;
  spanish: string;
  english: string;
  phonetic: string;
  category: 'Saludos' | 'Comida' | 'Direcciones' | 'Transporte' | 'De Compras' | 'Emergencias';
  contextTip: string;
  iconName: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'madrid',
    name: 'Madrid',
    region: 'Comunidad de Madrid · Meseta Central',
    tagline: 'Capital imperial, bulevares dorados y tabernas castizas',
    badge: 'Corazón de la Península',
    accentColor: '#A51E2D',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Madrid Gran Vía y arquitectura metrópolis bajo cielo azul ibérico',
    imageCaption: 'Gran Vía y bulevares dorados de la capital imperial',
    photoTag: 'CAPITAL IMPERIAL · MESETA',
    intro: 'Madrid combina la majestuosidad de la monarquía histórica con una vitalidad callejera contagiosa. Situada en la Meseta Central a más de 650 metros sobre el mar, es el hogar del famoso Triángulo del Arte, tabernas centenarias y paseos arbolados declarados Patrimonio Mundial por la UNESCO.',
    attractions: [
      {
        name: 'Museo Nacional del Prado',
        desc: 'Una de las pinacotecas más sublimes del planeta, albergando obras maestras de Diego Velázquez («Las Meninas»), Francisco de Goya y El Greco.',
        icon: 'Palette',
        highlight: 'Más de 8.000 pinturas y esculturas reales'
      },
      {
        name: 'Plaza Mayor y Madrid de los Austrias',
        desc: 'El corazón porticado del siglo XVII donde conviven músicos callejeros, cafés históricos y la clásica tradición del bocadillo de calamares.',
        icon: 'Landmark',
        highlight: '237 balcones con vistas a 400 años de historia'
      },
      {
        name: 'Parque de El Retiro y Palacio de Cristal',
        desc: 'Oasis verde de 125 hectáreas con un estanque para barcas y un etéreo pabellón de hierro y vidrio edificado en 1887.',
        icon: 'Trees',
        highlight: 'Patrimonio Mundial UNESCO Paisaje de la Luz'
      }
    ],
    visitorTip: 'El Museo del Prado ofrece entrada gratuita de lunes a sábado de 18:00 a 20:00 h (los domingos de 17:00 a 19:00 h). Llega 45 minutos antes para evitar colas.',
    spanishPhrase: {
      spanish: '«Una mesa para dos en la terraza, por favor.»',
      english: 'A table for two on the terrace, please.',
      phonetic: 'OO-nah MEH-sah PAH-rah dohs ehn lah tehr-RAH-sah, pohr fah-VOHR'
    },
    officialLink: {
      label: 'Portal Oficial de Turismo de Madrid',
      url: 'https://www.esmadrid.com'
    },
    highlights: ['Museo Reina Sofía', 'Palacio Real', 'Templo de Debod', 'Gran Vía'],
    travelConnection: 'Conexión AVE con Barcelona (2h 45m) y Sevilla (2h 30m) desde la estación de Atocha.',
    curiosity: {
      title: 'El dicho castizo: «De Madrid al cielo»',
      text: 'Nacido en el siglo XVIII durante el reinado de Carlos III, este refrán alude a la limpidez de su cielo azul y sugiere que, tras vivir en Madrid, solo el cielo puede superar la belleza de sus atardeceres.'
    }
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    region: 'Cataluña · Costa Mediterránea',
    tagline: 'Vanguardia modernista, brisa marina y mosaicos de Gaudí',
    badge: 'Joya del Mediterráneo',
    accentColor: '#1D4ED8',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Basílica de la Sagrada Família de Antoni Gaudí en Barcelona',
    imageCaption: 'Modernismo de Gaudí y costa mediterránea catalana',
    photoTag: 'MODERNISMO UNESCO · MEDITERRÁNEO',
    intro: 'Bañada por el mar Mediterráneo, Barcelona es un lienzo arquitectónico donde la genialidad orgánica de Antoni Gaudí transformó la ciudad. Capital de Cataluña, posee una identidad cultural bilingüe (catalán y castellano), una gastronomía marina inigualable y barrios góticos llenos de misterio.',
    attractions: [
      {
        name: 'Basílica de la Sagrada Família',
        desc: 'El templo expiatorio concebido por Gaudí en 1882, célebre por sus columnas arborescentes de piedra y vitrales que proyectan halos policromáticos.',
        icon: 'Church',
        highlight: 'Construcción en curso con 18 torres proyectadas'
      },
      {
        name: 'Park Güell',
        desc: 'Jardín público modernista con bancos de mosaicos multicolores (trencadís) y vistas panorámicas sobre toda la ciudad y el mar.',
        icon: 'Sparkles',
        highlight: 'Fusión orgánica entre naturaleza y arquitectura'
      },
      {
        name: 'Barri Gòtic (Barrio Gótico)',
        desc: 'Laberinto de callejuelas medievales construidas sobre vestigios romanos, con plazas secretas como la Plaça del Rei y la Catedral de Santa Eulàlia.',
        icon: 'Compass',
        highlight: 'Más de 2.000 años de historia urbana superpuesta'
      }
    ],
    visitorTip: 'Las entradas para la Sagrada Família y el Park Güell deben comprarse por internet con varias semanas de antelación para asegurar hora fija.',
    spanishPhrase: {
      spanish: '«¿Dónde está la estación de metro más cercana?»',
      english: 'Where is the nearest metro station?',
      phonetic: 'DOHN-deh ehs-TAH lah ehs-tah-SYOHN deh MEH-troh mahs sehr-KAH-nah'
    },
    officialLink: {
      label: 'Turisme de Barcelona Oficial',
      url: 'https://www.barcelonaturisme.com'
    },
    highlights: ['Casa Batlló', 'La Pedrera (Casa Milà)', 'Passeig de Gràcia', 'Playa de la Barceloneta'],
    travelConnection: 'Tren AVE diario desde Madrid en menos de tres horas; conexiones directas a Valencia y Francia.',
    curiosity: {
      title: 'La técnica del trencadís',
      text: 'Antoni Gaudí y Josep Maria Jujol utilizaban fragmentos rotos de azulejos cerámicos desechados por fábricas locales para recubrir superficies curvas y crear mosaicos resplandecientes bajo el sol.'
    }
  },
  {
    id: 'sevilla',
    name: 'Sevilla',
    region: 'Andalucía · Valle del Guadalquivir',
    tagline: 'Azahar, duende flamenco y pasión del sur peninsular',
    badge: 'Cuna del Flamenco',
    accentColor: '#BA6649',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Plaza de España y Real Alcázar de Sevilla con azulejos y arquerías',
    imageCaption: 'Arquerías mudéjares, azahar y cuna del arte flamenco',
    photoTag: 'CUNA DEL FLAMENCO · GUADALQUIVIR',
    intro: 'Sevilla enamora con su luz dorada, el perfume de los más de 40.000 naranjos amargos y el murmullo de fuentes moriscas. Antigua puerta del comercio ultramarino con el Nuevo Mundo, la capital andaluza cautiva por su hospitalidad cordial y su deslumbrante herencia mudéjar.',
    attractions: [
      {
        name: 'Real Alcázar de Sevilla',
        desc: 'Conjunto palaciego fortificado y Patrimonio de la Humanidad que fusiona arquerías islámicas, azulejos polícromos y jardines con pavos reales.',
        icon: 'Castle',
        highlight: 'El palacio real en uso más antiguo de Europa'
      },
      {
        name: 'Plaza de España y Parque de María Luisa',
        desc: 'Monumento semicircular de 1929 con 48 bancos de azulejos dedicados a las provincias españolas y puentes sobre un canal navegable.',
        icon: 'MapPin',
        highlight: 'Cerámica vidriada artesanal de Triana'
      },
      {
        name: 'La Giralda y Catedral de Sevilla',
        desc: 'El alminar almohade del siglo XII reconvertido en campanario de la mayor catedral gótica del mundo, con la tumba de Cristóbal Colón.',
        icon: 'Building',
        highlight: 'Rampas interiores diseñadas para subir a caballo'
      }
    ],
    visitorTip: 'En verano las temperaturas superan fácilmente los 40 °C al mediodía. Sigue el ritmo local: visita monumentos temprano y sal a pasear a partir de las 20:30 h.',
    spanishPhrase: {
      spanish: '«Me encanta el baile flamenco y la música española.»',
      english: 'I love flamenco dancing and Spanish music.',
      phonetic: 'meh ehn-KAHN-tah ehl BY-leh flah-MEHN-koh ee lah MOO-see-kah ehs-pah-NYOH-lah'
    },
    officialLink: {
      label: 'Sevilla City Office Oficial',
      url: 'https://visitasevilla.es'
    },
    highlights: ['Barrio de Santa Cruz', 'Torre del Oro', 'Barrio de Triana', 'Tablaos Flamencos'],
    travelConnection: 'Pionera de la alta velocidad: el primer AVE de España conectó Madrid y Sevilla en 1992.',
    curiosity: {
      title: 'El aroma de azahar en primavera',
      text: 'A finales de marzo, la floración de los naranjos amargos cubre Sevilla con una fragancia embriagadora llamada azahar, coincidiendo con la Semana Santa y la Feria de Abril.'
    }
  },
  {
    id: 'granada',
    name: 'Granada',
    region: 'Andalucía · Sierra Nevada',
    tagline: 'El suspiro de la Alhambra y el encanto nazarí',
    badge: 'Último Reino Nazarí',
    accentColor: '#52634D',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Palacios nazaríes de la Alhambra de Granada bajo Sierra Nevada',
    imageCaption: 'La fortaleza roja nazarí y jardines del Generalife',
    photoTag: 'REINO NAZARÍ · SIERRA NEVADA',
    intro: 'Al pie de las cumbres nevadas de Sierra Nevada se alza Granada, el último bastión del reino nazarí en la península ibérica hasta 1492. Ciudad de contrastes poéticos, donde las callejuelas encaladas del Albaicín miran a la fortaleza bermeja de la Alhambra.',
    attractions: [
      {
        name: 'La Alhambra y el Generalife',
        desc: 'El palacio y fortaleza de los sultanes nazaríes, célebre por el Patio de los Leones, mocárabes arabescos y albercas de agua cristalina.',
        icon: 'Castle',
        highlight: 'Poesía árabe tallada directamente en sus muros'
      },
      {
        name: 'Barrio del Albaicín y Mirador de San Nicolás',
        desc: 'Antiguo barrio musulmán con casas con huerto (cármenes) y el mirador con la panorámica más conmovedora de la Alhambra al atardecer.',
        icon: 'Eye',
        highlight: 'La puesta de sol más elogiada por viajeros y poetas'
      },
      {
        name: 'Cuevas del Sacromonte',
        desc: 'Colina famosa por sus viviendas excavadas en la roca blanca y las tradicionales zambras gitanas donde el cante jondo vibra en vivo.',
        icon: 'Flame',
        highlight: 'Tradición viva de danza y cante gitano'
      }
    ],
    visitorTip: 'Granada es uno de los pocos lugares de España donde la tapa tradicional se sirve gratis con cualquier consumición de bebida.',
    spanishPhrase: {
      spanish: '«Esta vista de las montañas es bellísima.»',
      english: 'This view of the mountains is very beautiful.',
      phonetic: 'EHS-tah VEES-tah deh lahs mohn-TAH-nyahs ehs beh-YEE-see-mah'
    },
    officialLink: {
      label: 'Patronato de la Alhambra y Generalife',
      url: 'https://www.alhambra-patronato.es'
    },
    highlights: ['Capilla Real de Granada', 'Carrera del Darro', 'Baños Árabes El Bañuelo', 'Monasterio de la Cartuja'],
    travelConnection: 'Conectada con Sevilla en tren Avant (~2h 20m) y con Madrid en tren AVE directo (~3h 30m).',
    curiosity: {
      title: 'La leyenda de Boabdil',
      text: 'Cuenta la leyenda que tras entregar Granada en 1492, el último sultán Boabdil miró la ciudad desde el puerto del Suspiro del Moro y lloró, escuchando de su madre: «Llora como mujer lo que no supiste defender como hombre».'
    }
  }
];

export const DISHES_DATA: Dish[] = [
  {
    id: 'paella',
    name: 'Paella Valenciana',
    spanishTitle: 'La auténtica receta de la huerta valenciana',
    category: 'Plato Principal',
    price: 18.50,
    badge: 'Rey del Arroz',
    accentColor: '#E2B342',
    imageUrl: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Auténtica paella valenciana con azafrán, romero y limones',
    imageCaption: 'Arroz bomba con azafrán cocinado a fuego lento en la huerta',
    photoTag: 'REY DEL ARROZ · ALBUFERA',
    description: 'El plato español más universal nació en los arrozales del parque natural de la Albufera de Valencia. Se cocina a fuego lento en una paellera ancha de acero con caldo de azafrán, pollo, conejo y legumbres de la huerta.',
    ingredients: ['Arroz Bomba', 'Azafrán en hebra', 'Pollo de corral y conejo', 'Judía verde (ferraura)', 'Garrofó (alubia blanca)', 'Romero fresco', 'Aceite de oliva virgen extra'],
    regionalOrigin: 'Comunidad Valenciana',
    keyPhrase: {
      spanish: '«Quiero una paella para compartir, por favor.»',
      english: 'I would like a paella to share, please.'
    },
    servingNote: 'La auténtica paella valenciana nunca lleva chorizo ni mariscos juntos. El arroz tostado y crujiente adherido al fondo se llama socarrat y es el mayor bocado de honor.'
  },
  {
    id: 'tapas',
    name: 'Tapas Variadas y Pintxos',
    spanishTitle: 'El arte de tapear y compartir entre amigos',
    category: 'Aperitivos y Raciones',
    price: 12.00,
    badge: 'Ritual Social',
    accentColor: '#A51E2D',
    imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Surtido de tapas españolas, jamón ibérico, queso y pan tostado',
    imageCaption: 'El ritual social del tapeo en barra entre amigos',
    photoTag: 'RITUAL SOCIAL · TABERNAS',
    description: 'Más que un plato específico, las tapas son un ritual social. La leyenda dice que el rey Alfonso XIII o taberneros andaluces colocaban una rodaja de jamón o pan para «tapar» el vaso de vino contra el polvo y los insectos.',
    ingredients: ['Jamón ibérico de bellota', 'Patatas bravas con salsa picante', 'Gambas al ajillo', 'Pimientos de Padrón', 'Croquetas cremosas de jamón'],
    regionalOrigin: 'Andalucía, Madrid y toda España',
    keyPhrase: {
      spanish: '«¿Nos trae una ración de jamón ibérico y pan con tomate?»',
      english: 'Could you bring us a portion of Iberian ham and bread with tomato?'
    },
    servingNote: 'Ir «de tapas» significa cambiar de bar tras una o dos consumiciones para degustar la especialidad particular de cada casa.'
  },
  {
    id: 'tortilla',
    name: 'Tortilla Española (de Patatas)',
    spanishTitle: 'El estandarte dorado de la cocina cotidiana',
    category: 'Clásicos de Taberna',
    price: 9.50,
    badge: 'Icono Nacional',
    accentColor: '#EAB308',
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Pincho de tortilla de patatas española dorada y jugosa',
    imageCaption: 'Patatas pochadas en aceite de oliva virgen extra y huevo fresco',
    photoTag: 'ICONO NACIONAL · CLÁSICO',
    description: 'La gran obra de arte de la sencillez: patatas cortadas finas confitadas lentamente en abundante aceite de oliva virgen extra, cuajadas con huevos frescos batidos hasta lograr un corazón jugoso.',
    ingredients: ['Patatas agrias', 'Huevos frescos de campo', 'Aceite de oliva virgen extra', 'Sal marina', 'Cebolla pochada (opcional en el gran debate nacional)'],
    regionalOrigin: 'Tradición panhispánica (origen s. XIX)',
    keyPhrase: {
      spanish: '«Un pincho de tortilla jugosa, por favor.»',
      english: 'A slice of juicy Spanish omelette, please.'
    },
    servingNote: 'Existe un debate amistoso perpetuo en España entre los «concebollistas» (con cebolla caramelizada) y los «sincebollistas» (solo huevo y patata).'
  },
  {
    id: 'churros',
    name: 'Churros con Chocolate a la Taza',
    spanishTitle: 'El dulce desayuno de los domingos y meriendas',
    category: 'Postre y Desayuno',
    price: 6.00,
    badge: 'Tentación Dulce',
    accentColor: '#78350F',
    imageUrl: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Churros crujientes con taza de chocolate negro caliente',
    imageCaption: 'Masa crujiente y chocolate caliente a la taza',
    photoTag: 'DESAYUNO CASTIZO · SAN GINÉS',
    description: 'Masa de harina de trigo, agua y sal extrusionada en estrella, frita al momento para lograr una corteza crujiente y un interior tierno, sumergida en chocolate negro espeso servido en taza caliente.',
    ingredients: ['Harina de trigo de fuerza', 'Agua hirviendo y sal marina', 'Aceite para freír', 'Chocolate negro 70% fundido', 'Leche o agua para espesar'],
    regionalOrigin: 'Madrid (con arraigo en toda la península)',
    keyPhrase: {
      spanish: '«La cuenta, por favor. ¿Se puede pagar con tarjeta?»',
      english: 'The bill, please. Can we pay with card?'
    },
    servingNote: 'La Chocolatería San Ginés de Madrid, abierta desde 1894 a escasos pasos de la Puerta del Sol, sirve churros y porras las veinticuatro horas del día.'
  }
];

export const TRADITIONS_DATA: Tradition[] = [
  {
    id: 'tomatina',
    name: 'La Tomatina de Buñol',
    location: 'Buñol (Valencia)',
    dates: 'Último miércoles de agosto (anual)',
    accentColor: '#DC2626',
    imageUrl: 'https://images.unsplash.com/photo-1561134643-66810b4de09c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'La Tomatina en Buñol, fiesta roja en las calles valencianas',
    imageCaption: 'Batalla festiva de más de 120 toneladas de tomate maduro',
    photoTag: 'FIESTA INTERNACIONAL · BUÑOL',
    significance: 'La batalla de hortalizas más multitudinaria y pacífica del planeta, donde más de 120 toneladas de tomates maduros tiñen las calles de rojo.',
    history: 'Nació de manera fortuita en agosto de 1945 durante el desfile de gigantes y cabezudos, cuando una disputa juvenil desembocó en una divertida batalla con tomates de un puesto de verduras local.',
    keyElements: [
      'Palo jabón: el reto inicial de trepar por un poste engrasado para alcanzar un jamón serrano',
      'Camiones repletos de tomates maduros especialmente seleccionados',
      'Norma de seguridad fundamental: aplastar el tomate antes de lanzarlo para evitar golpes',
      'Gafas de buceo para proteger los ojos del ácido cítrico natural'
    ],
    spanishQuote: {
      spanish: '«La Tomatina es una explosión de alegría comunitaria donde todo el pueblo se convierte en fiesta roja.»',
      english: 'La Tomatina is an explosion of community joy where the entire town becomes a red festival.'
    }
  },
  {
    id: 'fallas',
    name: 'Las Fallas de Valencia',
    location: 'Valencia Capital',
    dates: 'Del 15 al 19 de marzo (San José)',
    accentColor: '#EA580C',
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Las Fallas de Valencia, fuegos artificiales y monumentos iluminados',
    imageCaption: 'Esculturas satíricas monumentales purificadas por el fuego',
    photoTag: 'PATRIMONIO INMATERIAL UNESCO',
    significance: 'Patrimonio Cultural Inmaterial de la Humanidad (UNESCO). Monumentos satíricos efímeros de cartón piedra que se alzan en cada barrio para ser purificados por el fuego primaveral.',
    history: 'Su origen se remonta al antiguo gremio de carpinteros que, al finalizar el invierno, quemaban frente a sus talleres los soportes de madera (parots) que sostenían las lámparas durante las noches frías.',
    keyElements: [
      'La Mascletà: concierto atronador de pólvora y ritmo cada mediodía en la Plaza del Ayuntamiento',
      'La Plantà: noche del 15 de marzo cuando se ensamblan más de 700 monumentos falleros',
      'L\'Ofrena de Flors: peregrinación de falleras con trajes de seda valenciana hacia la Virgen',
      'La Cremà: medianoche del 19 de marzo donde las llamas consumen las esculturas entre vítores'
    ],
    spanishQuote: {
      spanish: '«El arte efímero de las Fallas nace para admirarse durante cuatro días y purificarse con el fuego.»',
      english: 'The ephemeral art of Las Fallas is born to be admired for four days and purified with fire.'
    }
  },
  {
    id: 'semana-santa',
    name: 'Semana Santa de Sevilla',
    location: 'Sevilla (Andalucía)',
    dates: 'Semana previa al Domingo de Resurrección',
    accentColor: '#4F46E5',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Procesión de Semana Santa en Sevilla con cirios y pasos barrocos',
    imageCaption: 'Pasos barrocos de plata, nazarenos y saetas en la noche',
    photoTag: 'DEVOCIÓN Y ARTE BARROCO',
    significance: 'Una de las manifestaciones religiosas y estéticas más hondas de Europa, con cofradías centenarias procesionando al son de marchas fúnebres de cornetas y tambores.',
    history: 'Reglamentada en el siglo XVI tras el Concilio de Trento para acercar las escenas bíblicas a la población mediante tallas policromadas barrocas de imagineros ilustres como Martínez Montañés y Juan de Mesa.',
    keyElements: [
      'Los Pasos: gigantescas andas de plata y madera tallada cargadas sobre la cerviz por los costaleros',
      'Nazarenos: cofrades que visten túnica y capirote cónico en señal de penitencia e igualdad',
      'La Saeta: cántico flamenco desgarrador entonado espontáneamente desde un balcón al paso de la Virgen',
      'Olor a incienso y cera fundida en las angostas callejuelas del barrio de Santa Cruz'
    ],
    spanishQuote: {
      spanish: '«El silencio reverente de la noche sevillana solo se interrumpe cuando resuena una saeta profunda.»',
      english: 'The reverent silence of the Sevillian night is only broken when a deep saeta echoes.'
    }
  },
  {
    id: 'flamenco',
    name: 'El Arte Flamenco',
    location: 'Andalucía (Sevilla, Jerez, Cádiz, Granada)',
    dates: 'Vivo durante todo el año en tablaos y peñas',
    accentColor: '#BE123C',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bailaora de flamenco con traje rojo en tablao andaluz',
    imageCaption: 'Cante jondo, guitarra virtuosa y pasión visceral en el tablao',
    photoTag: 'PATRIMONIO DE LA HUMANIDAD',
    significance: 'Patrimonio Cultural Inmaterial de la Humanidad (UNESCO 2010). Expresión artística que aúna cante, toque de guitarra y baile con una carga emocional visceral.',
    history: 'Fruto del mestizaje secular entre la música gitana romaní, melodías andalusíes árabes, cantos sefardíes y folclore campesino andaluz en el sur de la península.',
    keyElements: [
      'El Cante Jondo: el pilar vocal primitivo que expresa dolor, amor, fiesta y redención',
      'El Toque: técnica virtuosa de guitarra flamenca con rasgueos, alzapúas y picados',
      'El Baile y Zapateado: taconeo rítmico percusivo de gran fuerza dramática y movimiento de brazos',
      'El Duende: estado místico de trance expresivo donde el artista conmueve de manera irrepetible'
    ],
    spanishQuote: {
      spanish: '«El flamenco no se piensa con la cabeza; se siente en el pecho y se baila con la sangre.»',
      english: 'Flamenco is not thought with the head; it is felt in the chest and danced with the blood.'
    }
  }
];

export const PHRASES_DATA: PhraseCard[] = [
  {
    id: 'p1',
    spanish: '¡Hola! Buenos días, ¿cómo está usted?',
    english: 'Hello! Good morning, how are you? (formal)',
    phonetic: 'OH-lah! BWEH-nohs DEE-ahs, KOH-moh ehs-TAH oos-TEHD?',
    category: 'Saludos',
    contextTip: 'Usa «usted» para personas mayores, en hoteles o con camareros en señal de cortesía respetuosa.',
    iconName: 'Sun'
  },
  {
    id: 'p2',
    spanish: 'Muchas gracias por su amable ayuda.',
    english: 'Thank you very much for your kind help.',
    phonetic: 'MOO-chahs GRAH-syahs pohr soo ah-MAH-bleh ah-YOO-dah',
    category: 'Saludos',
    contextTip: 'La respuesta natural en español es «De nada» o «Un placer».',
    iconName: 'Smile'
  },
  {
    id: 'p3',
    spanish: 'Por favor, ¿me trae la carta de vinos y tapas?',
    english: 'Please, could you bring me the wine and tapas menu?',
    phonetic: 'Pohr fah-VOHR, meh TRAH-eh lah KAHR-tah deh VEE-nohs ee TAH-pahs?',
    category: 'Comida',
    contextTip: 'En España se dice «la carta» para la lista de platos y «el menú del día» para la opción fija económica de mediodía.',
    iconName: 'Utensils'
  },
  {
    id: 'p4',
    spanish: 'La cuenta, por favor. ¿Está incluido el servicio?',
    english: 'The bill, please. Is service included?',
    phonetic: 'Lah KWEHN-tah, pohr fah-VOHR. Ehs-TAH een-kloo-EE-doh ehl sehr-VEE-syoh?',
    category: 'Comida',
    contextTip: 'En España el servicio y el pan suelen figurar en el ticket; una propina del 5-10% es común si la atención fue buena.',
    iconName: 'Receipt'
  },
  {
    id: 'p5',
    spanish: 'Disculpe, ¿cómo puedo llegar a la estación de tren?',
    english: 'Excuse me, how can I get to the train station?',
    phonetic: 'Dees-KOOL-peh, KOH-moh PWEH-doh yeh-GAHR ah lah ehs-tah-SYOHN deh trehn?',
    category: 'Direcciones',
    contextTip: '«Disculpe» es la forma educada de llamar la atención de alguien en la calle.',
    iconName: 'MapPin'
  },
  {
    id: 'p6',
    spanish: 'Siga todo recto y gire a la izquierda en la plaza.',
    english: 'Go straight ahead and turn left at the square.',
    phonetic: 'SEE-gah TOH-doh REHK-toh ee HEE-reh ah lah eez-KYEHR-dah ehn lah PLAH-sah',
    category: 'Direcciones',
    contextTip: 'Recuerda: «a la derecha» (right) y «a la izquierda» (left).',
    iconName: 'Navigation'
  },
  {
    id: 'p7',
    spanish: 'Quisiera dos billetes de ida y vuelta para el tren AVE.',
    english: 'I would like two round-trip tickets for the AVE high-speed train.',
    phonetic: 'Kee-SYEH-rah dohs bee-YEH-tehs deh EE-dah ee VWEHL-tah PAH-rah ehl trehn AH-veh',
    category: 'Transporte',
    contextTip: '«Ida y vuelta» significa ida y regreso (round-trip); «solo ida» es solo trayecto de ida.',
    iconName: 'Train'
  },
  {
    id: 'p8',
    spanish: '¿A qué hora sale el próximo autobús hacia el aeropuerto?',
    english: 'What time does the next bus to the airport leave?',
    phonetic: 'Ah keh OH-rah SAH-leh ehl PROHK-see-moh ow-toh-BOOS AH-syah ehl ah-eh-roh-PWEHR-toh?',
    category: 'Transporte',
    contextTip: 'Los horarios en España suelen expresarse en formato 24 horas (ej. 17:30 en vez de 5:30 PM).',
    iconName: 'Bus'
  },
  {
    id: 'p9',
    spanish: '¿Cuánto cuesta este abanico artesanal?',
    english: 'How much does this handcrafted fan cost?',
    phonetic: 'KWAHN-toh KWEHS-tah EHS-teh ah-bah-NEE-koh ahr-teh-sah-NAHL?',
    category: 'De Compras',
    contextTip: 'En tiendas pequeñas y mercados de España no se regatea habitualmente; los precios son fijos.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'p10',
    spanish: '¿Tienen una talla más grande o más pequeña?',
    english: 'Do you have a larger or smaller size?',
    phonetic: 'TYEH-nehn OO-nah TAH-yah mahs GRAHN-deh oh mahs peh-KEH-nyah?',
    category: 'De Compras',
    contextTip: '«Talla» se usa para prendas de vestir; para calzado se dice «número de pie».',
    iconName: 'Tag'
  },
  {
    id: 'p11',
    spanish: '¡Ayuda, por favor! Necesito un médico urgente.',
    english: 'Help, please! I need a doctor urgently.',
    phonetic: 'Ah-YOO-dah, pohr fah-VOHR! Neh-seh-SEE-toh oon MEH-dee-koh oor-HEHN-teh',
    category: 'Emergencias',
    contextTip: 'El número telefónico de emergencia unificado en toda España y la Unión Europea es el 112.',
    iconName: 'AlertCircle'
  },
  {
    id: 'p12',
    spanish: 'He perdido mi pasaporte. ¿Dónde está la comisaría de policía?',
    english: 'I have lost my passport. Where is the police station?',
    phonetic: 'Eh pehr-DEE-doh mee pah-sah-POHR-teh. DOHN-deh ehs-TAH lah koh-mee-sah-REE-ah deh poh-lee-SEE-ah?',
    category: 'Emergencias',
    contextTip: 'En las comisarías hay servicio de atención al turista extranjero (SATE) con intérpretes.',
    iconName: 'ShieldAlert'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Si quieres pedir amablemente la cuenta en un restaurante español, ¿qué frase dices?',
    options: [
      '«Quiero comer ahora mismo.»',
      '«La cuenta, por favor.»',
      '«¿Dónde está la estación?»',
      '«Buenos días, señor.»'
    ],
    correctIndex: 1,
    explanation: '«La cuenta, por favor» es la fórmula universal y educada en el mundo hispanohablante para solicitar la factura.'
  },
  {
    id: 2,
    question: '¿En qué ciudad española se celebran Las Fallas con monumentos artísticos que se queman el 19 de marzo?',
    options: [
      'Barcelona',
      'Granada',
      'Valencia',
      'Madrid'
    ],
    correctIndex: 2,
    explanation: 'Las Fallas son la fiesta más célebre de Valencia, declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.'
  },
  {
    id: 3,
    question: '¿Cuál de los siguientes ingredientes NO pertenece a la receta tradicional de la paella valenciana?',
    options: [
      'Arroz Bomba',
      'Chorizo picante',
      'Azafrán en hebra',
      'Judía verde'
    ],
    correctIndex: 1,
    explanation: 'En la tradición de Valencia, la paella nunca lleva chorizo. Sus ingredientes canónicos son arroz, pollo, conejo, judías y azafrán.'
  },
  {
    id: 4,
    question: 'Si un transeúnte te indica «gire a la izquierda», ¿hacia qué dirección debes dirigirte?',
    options: [
      'Hacia la derecha',
      'Hacia la izquierda',
      'Hacia atrás',
      'Todo recto'
    ],
    correctIndex: 1,
    explanation: '«Izquierda» significa left en español, mientras que «derecha» significa right y «recto» significa straight.'
  },
  {
    id: 5,
    question: '¿Qué célebre palacio y fortaleza de arquitectura nazarí se encuentra en la ciudad andaluza de Granada?',
    options: [
      'La Sagrada Família',
      'El Palacio de Cristal',
      'La Alhambra',
      'El Museo del Prado'
    ],
    correctIndex: 2,
    explanation: 'La Alhambra es la deslumbrante joya de la arquitectura islámica nazarí en Granada, con el Patio de los Leones y el Generalife.'
  }
];

