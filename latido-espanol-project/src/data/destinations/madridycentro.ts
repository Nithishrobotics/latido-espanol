import { UnifiedDestination } from '../unifiedDestinationsData';

export const MADRID_CENTRO_DESTINATIONS: UnifiedDestination[] = [
  {
    id: 'madrid',
    name: 'Madrid',
    officialName: 'Comunidad de Madrid',
    capital: 'Madrid',
    region: 'Comunidad de Madrid · Meseta Central',
    coordinates: [40.4168, -3.7038],
    badge: 'Capital Imperial',
    accentColor: '#A51E2D',
    tagline: '«De Madrid al cielo: bulevares dorados, pinacotecas reales y vida castiza»',
    photoTag: 'MADRID · GRAN VÍA Y TRIÁNGULO DEL ARTE',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Madrid Gran Vía y arquitectura metrópolis bajo cielo azul ibérico',
    imageCaption: 'Gran Vía y bulevares dorados de la capital imperial',
    intro: 'Madrid combina la majestuosidad de la monarquía histórica con una vitalidad callejera contagiosa. Situada en la Meseta Central a más de 650 metros sobre el mar, es el hogar del famoso Triángulo del Arte, tabernas centenarias y paseos arbolados declarados Patrimonio Mundial por la UNESCO en el Paisaje de la Luz.',
    culturalHighlight: 'Museo Nacional del Prado, Palacio Real, vida castiza y plazas porticadas',
    englishHighlight: 'The Golden Triangle of Art, grand Royal Palace & vibrant tapas alleys',
    iconicDish: 'Cocido madrileño en tres vuelcos, bocadillo de calamares y churros con chocolate',
    languages: 'Castellano',
    notableLandmark: 'Museo Nacional del Prado y Plaza Mayor',
    visitorTip: 'El Museo del Prado ofrece entrada gratuita de lunes a sábado de 18:00 a 20:00 h. Llega 45 minutos antes para evitar colas.',
    spanishPhrase: {
      spanish: '«Una mesa para dos en la terraza, por favor.»',
      english: 'A table for two on the terrace, please.',
      phonetic: 'OO-nah MEH-sah PAH-rah dohs ehn lah tehr-RAH-sah, pohr fah-VOHR'
    },
    travelConnection: 'Centro radial AVE con Barcelona (2h 30m), Sevilla (2h 20m) y Valencia (1h 40m) desde Atocha y Chamartín.',
    officialLink: {
      label: 'Portal Oficial de Turismo de Madrid',
      url: 'https://www.esmadrid.com'
    },
    attractions: [
      {
        name: 'Museo Nacional del Prado',
        desc: 'Una de las pinacotecas más sublimes del planeta con Las Meninas de Velázquez y Los fusilamientos de Goya.',
        highlight: 'Más de 8.000 pinturas y esculturas reales'
      },
      {
        name: 'Plaza Mayor y Madrid de los Austrias',
        desc: 'El corazón porticado del siglo XVII donde conviven balconadas históricas y terrazas castizas.',
        highlight: '237 balcones con vistas a 400 años de historia'
      },
      {
        name: 'Parque de El Retiro y Palacio de Cristal',
        desc: 'Oasis verde de 125 hectáreas con un estanque para barcas y un etéreo pabellón de hierro y vidrio edificado en 1887.',
        highlight: 'Patrimonio Mundial UNESCO Paisaje de la Luz'
      }
    ],
    gallery: [
      {
        id: 'mad-1',
        title: 'Gran Vía y Edificio Metrópolis',
        subtitle: 'Bulevar icono del siglo XX con cúpula de pizarra y bronce en la confluencia con Alcalá',
        photoTag: 'MADRID · ARQUITECTURA METRÓPOLIS',
        imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Gran Vía y Edificio Metrópolis en Madrid'
      },
      {
        id: 'mad-2',
        title: 'Palacio Real y Plaza de Oriente',
        subtitle: 'La residencia oficial más extensa de Europa Occidental con 3.418 estancias',
        photoTag: 'MADRID · PALACIO REAL BORBÓNICO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Palacio Real de Madrid al atardecer'
      },
      {
        id: 'mad-3',
        title: 'Palacio de Cristal en El Retiro',
        subtitle: 'Pabellón de hierro forjado y cristal transparente levantado sobre estanque de nenúfares',
        photoTag: 'EL RETIRO · PAISAJE DE LA LUZ UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Palacio de Cristal en el Parque del Retiro de Madrid'
      },
      {
        id: 'mad-4',
        title: 'Plaza Mayor y Casa de la Panadería',
        subtitle: 'El hemiciclo porticado con frescos mitológicos en la fachada y terrazas de café',
        photoTag: 'MADRID DE LOS AUSTRIAS · PLAZA MAYOR',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza Mayor de Madrid al atardecer'
      },
      {
        id: 'mad-5',
        title: 'Puerta de Alcalá Monumental',
        subtitle: 'Arco triunfal neoclásico diseñado por Francesco Sabatini para el rey Carlos III',
        photoTag: 'PUERTA DE ALCALÁ · SABATINI',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puerta de Alcalá en Madrid'
      },
      {
        id: 'mad-6',
        title: 'Templo de Debod',
        subtitle: 'Templo egipcio original del siglo II a.C. donado a España con el atardecer más famoso sobre la Casa de Campo',
        photoTag: 'TEMPLO DE DEBOD · ATARDECER',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Templo de Debod en Madrid'
      },
      {
        id: 'mad-7',
        title: 'Chocolatería San Ginés',
        subtitle: 'La taberna de churros fundada en 1894 junto al Teatro Real abierta día y noche',
        photoTag: 'SAN GINÉS · CHURROS TRADICIONALES',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Chocolatería San Ginés en Madrid'
      }
    ],
    secretSpots: [
      {
        id: 'chinchon',
        name: 'Chinchón',
        distance: '45 km · 45 min',
        description: 'Plaza Mayor medieval de 234 balcones de madera donde se degusta el anís y los asados en mesones centenarios.',
        photoTag: 'PLAZA MEDIEVAL · SURESTE MADRILEÑO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'patones',
        name: 'Patones de Arriba',
        distance: '65 km · 55 min',
        description: 'Pueblo de cuento tallado en pizarra negra encajado en un barranco de la Sierra Norte, antiguo «reino» independiente.',
        photoTag: 'ARQUITECTURA NEGRA · SIERRA NORTE',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'aranjuez',
        name: 'Real Sitio de Aranjuez',
        distance: '48 km · 40 min',
        description: 'Palacio real de primavera junto a las arboledas del Tajo, famoso por su jardín de la Isla y los fresones de huerta.',
        photoTag: 'PALACIO Y JARDINES · RÍO TAJO',
        imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'Hoteles boutique literarios en el Barrio de las Letras o palacetes señoriales en el Barrio de Salamanca.',
      hotelZones: [
        { title: 'Barrio de las Letras', desc: 'Encanto bohemio, a pie de los museos del Prado y Thyssen.' },
        { title: 'Madrid de los Austrias', desc: 'Tranquilidad histórica entre conventos y terrazas castizas.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€90 – €185', usd: '$98 – $200', note: 'Habitación doble en hotel boutique 3*–4*' },
        dining: { eur: '€35 – €60', usd: '$38 – $65', note: 'Desayuno con porras, menú del día y tapeo nocturno' },
        transit: { eur: '€8 – €18', usd: '$9 – $20', note: 'Metro 10 viajes y taxi puntual' },
        total: { eur: '€133 – €263', usd: '$145 – $285' }
      }
    }
  },
  {
    id: 'el-escorial',
    name: 'San Lorenzo de El Escorial',
    officialName: 'Comunidad de Madrid · Sierra de Guadarrama',
    capital: 'San Lorenzo de El Escorial',
    region: 'Comunidad de Madrid · Sierra de Guadarrama',
    coordinates: [40.5891, -4.1478],
    badge: 'La Octava Maravilla del Mundo',
    accentColor: '#475569',
    tagline: '«El coloso de granito de Felipe II que simbolizó el poder del imperio donde nunca se ponía el sol»',
    photoTag: 'EL ESCORIAL · REAL MONASTERIO UNESCO',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'El Real Monasterio de San Lorenzo de El Escorial con la Sierra de Guadarrama detrás',
    imageCaption: 'El colosal Monasterio de El Escorial levantado en granito por Juan de Herrera',
    intro: 'Considerado en su época la «Octava Maravilla del Mundo». Mandado erigir por el rey Felipe II entre 1563 y 1584 para conmemorar la victoria de San Quintín y albergar el panteón de los reyes de España. Su arquitectura sobria de estilo herreriano, su biblioteca renacentista con bóvedas al fresco de Pellegrino Tibaldi y el Panteón de Reyes en mármol y bronce causan sobrecogimiento.',
    culturalHighlight: 'Real Monasterio de San Lorenzo (UNESCO), Biblioteca Real, Panteón de Reyes y La Silla de Felipe II',
    englishHighlight: 'Herrerian granite royal monastery, renaissance library & Spanish kings pantheon',
    iconicDish: 'Chuletón de buey de la sierra a la brasa, judías blancas y bizcochadas conventuales',
    languages: 'Castellano',
    notableLandmark: 'Real Monasterio de San Lorenzo de El Escorial',
    visitorTip: 'Sube a la Silla de Felipe II —unas plataformas labradas en roca en la montaña de La Herrería— para contemplar la vista panorámica del monasterio tal y como el monarca supervisaba las obras.',
    spanishPhrase: {
      spanish: '«¿Por dónde se accede al Panteón Real de los Reyes?»',
      english: 'Which way to the Royal Pantheon of the Kings?',
      phonetic: 'pohr DOHN-deh seh ahk-THEH-deh ahl pahn-teh-OHN reh-AHL deh lohs REH-yehs'
    },
    travelConnection: 'Tren de cercanías C-8 o C-3a desde Madrid Atocha o Chamartín en 55 minutos.',
    officialLink: {
      label: 'Patrimonio Nacional El Escorial',
      url: 'https://www.patrimonionacional.es'
    },
    attractions: [
      {
        name: 'Real Monasterio de El Escorial',
        desc: 'Complejo que integra palacio real, basílica, panteón y monasterio con más de 4.000 habitaciones y 1.200 puertas.',
        highlight: 'Patrimonio Mundial de la UNESCO desde 1984'
      },
      {
        name: 'Real Biblioteca de El Escorial',
        desc: 'Una de las bibliotecas históricas más bellas del mundo con techumbre pintada al fresco y libros colocados con los cortes dorados hacia afuera.',
        highlight: 'Más de 40.000 códices y manuscritos únicos'
      },
      {
        name: 'Panteón de Reyes',
        desc: 'Cripta circular barroca de mármol de Toledo y bronce dorado donde reposan los monarcas de España de los Austrias y Borbones.',
        highlight: 'Veintiséis sepulcros reales alineados en hornacinas'
      }
    ],
    gallery: [
      {
        id: 'esc-1',
        title: 'Fachada Principal y Torres Herrerianas',
        subtitle: 'Sillería de granito gris de la sierra rematada con chapiteles de pizarra flamencos',
        photoTag: 'EL ESCORIAL · FACHADA HERRERIANA',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Monasterio de El Escorial'
      },
      {
        id: 'esc-2',
        title: 'Real Biblioteca de Felipe II',
        subtitle: 'Bóvedas con alegorías de la Filosofía, Teología y las siete artes liberales',
        photoTag: 'BIBLIOTECA REAL · FRESCOS TIBALDI',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Biblioteca del Monasterio de El Escorial'
      },
      {
        id: 'esc-3',
        title: 'Patios y Jardín de los Frailes',
        subtitle: 'Laberinto de boj recortado con vistas al estanque sobre la dehesa de La Herrería',
        photoTag: 'JARDÍN DE LOS FRAILES',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Jardines de El Escorial'
      },
      {
        id: 'esc-4',
        title: 'Basílica de El Escorial y Cúpula',
        subtitle: 'Cúpula central de 95 metros de altura sobre cuatro colosales pilares de granito',
        photoTag: 'BASÍLICA · RETABLO MAYOR',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Basílica de El Escorial'
      },
      {
        id: 'esc-5',
        title: 'Silla de Felipe II en La Herrería',
        subtitle: 'Mirador de roca en el monte Abantos donde el rey contemplaba el avance del edificio',
        photoTag: 'SILLA DE FELIPE II · MONTAÑA',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Silla de Felipe II con vistas al monasterio'
      },
      {
        id: 'esc-6',
        title: 'Casita del Príncipe y Jardines',
        subtitle: 'Pabellón neoclásico del siglo XVIII edificado por Juan de Villanueva para el futuro Carlos IV',
        photoTag: 'CASITA DEL PRÍNCIPE · VILLANUEVA',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Casita del Príncipe en El Escorial'
      }
    ],
    secretSpots: [
      {
        id: 'bosque-herreria',
        name: 'Bosque de La Herrería y Ermita de la Virgen de Gracia',
        distance: '2 km del Monasterio',
        description: 'Robledal y fresneda centenaria con riachuelos de montaña y vistas al perfil de granito del monasterio.',
        photoTag: 'SIERRA DE GUADARRAMA · ROBLEDAL',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'valle-caidos',
        name: 'Valle de Cuelgamuros',
        distance: '9 km · 15 min',
        description: 'Cruz monumental de 150 metros de altura enmarcada en los pinares de la sierra.',
        photoTag: 'SIERRA DE GUADARRAMA · MONTAÑA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel Florida Real Sitio (hotel histórico en la Plaza de la Cruz) o el Hotel Los Lanceros frente al parque.',
      hotelZones: [
        { title: 'Calle Floridablanca', desc: 'Frente al monasterio, ambiente señorial con terrazas de café.' },
        { title: 'Plaza de la Constitución', desc: 'El epicentro del tapeo serrano y restaurantes de asados.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€65 – €140', usd: '$70 – $150', note: 'Habitación doble con vistas a la sierra' },
        dining: { eur: '€24 – €48', usd: '$26 – $52', note: 'Chuletón de la sierra y repostería tradicional' },
        transit: { eur: '€5 – €10', usd: '$5 – $11', note: 'Cercanías Renfe y caminatas' },
        total: { eur: '€94 – €198', usd: '$101 – $213' }
      }
    }
  },
  {
    id: 'alcala-henares',
    name: 'Alcalá de Henares',
    officialName: 'Comunidad de Madrid · Valle del Henares',
    capital: 'Alcalá de Henares',
    region: 'Comunidad de Madrid · Valle del Henares',
    coordinates: [40.4819, -3.3644],
    badge: 'Cuna de Miguel de Cervantes',
    accentColor: '#D97706',
    tagline: '«La primera ciudad universitaria planificada del mundo y la casa natal del autor del Quijote»',
    photoTag: 'ALCALÁ · UNIVERSIDAD CISNERIANA Y CALLE MAYOR',
    imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Fachada plateresca de la Universidad de Alcalá de Henares en la Plaza de San Diego',
    imageCaption: 'La célebre fachada plateresca del Colegio Mayor de San Ildefonso en Alcalá',
    intro: 'Ciudad declarada Patrimonio de la Humanidad por la UNESCO por ser la primera ciudad universitaria planificada de la Edad Moderna, concebida por el Cardenal Cisneros en 1499. Alcalá es la cuna universal de Miguel de Cervantes Saavedra, cuya casa natal con patio castellano se alza en su señorial Calle Mayor porticada, la más larga conservada en España.',
    culturalHighlight: 'Universidad Cisneriana, Museo Casa Natal de Cervantes, Calle Mayor de soportales y Corral de Comedias',
    englishHighlight: 'First modern planned university city, Cervantes birthplace museum & historic arcaded Calle Mayor',
    iconicDish: 'Costrada alcalaína de hojaldre y crema, sopa castellana de ajo y tapas generosas de la calle Mayor',
    languages: 'Castellano',
    notableLandmark: 'Universidad de Alcalá y Casa Natal de Cervantes',
    visitorTip: 'Hazte una fotografía sentado junto a las esculturas de bronce de Don Quijote y Sancho Panza en el banco frente a la Casa Natal de Cervantes.',
    spanishPhrase: {
      spanish: '«¿Dónde está la entrada a la Casa Natal de Miguel de Cervantes?»',
      english: 'Where is the entrance to the birthplace museum of Cervantes?',
      phonetic: 'DOHN-deh ehs-TAH lah ehn-TRAH-dah ah lah KAH-sah nah-TAHL deh mee-GEHL deh thehr-BAHN-tehs'
    },
    travelConnection: 'Tren de cercanías C-2 o C-7 desde Madrid Atocha en solo 35 minutos.',
    officialLink: {
      label: 'Turismo de Alcalá',
      url: 'https://turismoalcala.es'
    },
    attractions: [
      {
        name: 'Universidad de Alcalá (Colegio de San Ildefonso)',
        desc: 'Fachada plateresca de Rodrigo Gil de Hontañón de 1553 con tres patios renacentistas y el Paraninfo donde se entrega el Premio Cervantes.',
        highlight: 'Patrimonio de la Humanidad UNESCO'
      },
      {
        name: 'Museo Casa Natal de Cervantes',
        desc: 'Casona castellana tradicional del siglo XVI en torno a un patio de columnas donde nació el autor de Don Quijote en 1547.',
        highlight: 'Colección de ediciones históricas del Quijote'
      },
      {
        name: 'Calle Mayor Porticada',
        desc: 'Arteria de casi 400 metros flanqueada por soportales con columnas de piedra procedentes de la antigua Complutum romana.',
        highlight: 'La calle con soportales continuos más larga de España'
      }
    ],
    gallery: [
      {
        id: 'alc-1',
        title: 'Fachada del Colegio Mayor de San Ildefonso',
        subtitle: 'Retablo en piedra caliza labrado en 1553 que preside la Plaza de San Diego',
        photoTag: 'ALCALÁ · UNIVERSIDAD CISNERIANA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Universidad de Alcalá de Henares'
      },
      {
        id: 'alc-2',
        title: 'Esculturas de Don Quijote y Sancho en la Calle Mayor',
        subtitle: 'El banco de bronce frente a la Casa Natal de Cervantes donde descansan los hidalgos',
        photoTag: 'CERVANTES · CALLE MAYOR',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Estatua de Quijote y Sancho en Alcalá'
      },
      {
        id: 'alc-3',
        title: 'Paraninfo Universitario',
        subtitle: 'El salón solemne con artesonado mudéjar de lazo y cátedra de madera donde el Rey entrega el Premio Cervantes',
        photoTag: 'PARANINFO · PREMIO CERVANTES',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Paraninfo de la Universidad de Alcalá'
      },
      {
        id: 'alc-4',
        title: 'Calle Mayor Porticada',
        subtitle: 'Columnas cilíndricas de piedra y vigas de madera que cobijan paseantes y librerías',
        photoTag: 'CALLE MAYOR · SOPORTALES HISTÓRICOS',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calle Mayor de Alcalá de Henares'
      },
      {
        id: 'alc-5',
        title: 'Patio de Santo Tomás de Villanueva',
        subtitle: 'Claustro renacentista de sillería de tres plantas con pozo de agua central de cisne',
        photoTag: 'PATIO SANTO TOMÁS · RENACIMIENTO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Patio de Santo Tomás en Alcalá'
      },
      {
        id: 'alc-6',
        title: 'Corral de Comedias de Alcalá',
        subtitle: 'Uno de los teatros públicos más antiguos de Europa inaugurado en 1601 con patio de cazuela',
        photoTag: 'CORRAL DE COMEDIAS · AÑO 1601',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Corral de Comedias de Alcalá'
      }
    ],
    secretSpots: [
      {
        id: 'complutum',
        name: 'Ciudad Romana de Complutum',
        distance: '2 km del centro',
        description: 'Yacimiento romano con la Casa de los Hippolytus, termas y basílica del siglo I d.C.',
        photoTag: 'ARQUEOLOGÍA ROMANA · COMPLUTUM',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'palacio-arzobispal',
        name: 'Palacio Arzobispal y Murallas',
        distance: 'Casco histórico',
        description: 'Fortaleza mudéjar-renacentista donde la reina Isabel la Católica se entrevistó por primera vez con Colón en 1486.',
        photoTag: 'PALACIO ARZOBISPAL · HISTORIA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Alcalá de Henares (antiguo Colegio-Convento de Santo Tomás del siglo XVII con spa en la cripta).',
      hotelZones: [
        { title: 'Plaza de Cervantes', desc: 'Paseo ajardinado con la Torre de Santa María y terrazas animadas.' },
        { title: 'Calle Mayor', desc: 'El epicentro del tapeo de tabernas donde la tapa gigante es costumbre con cada caña.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€65 – €135', usd: '$70 – $145', note: 'Habitación doble en hotel o parador' },
        dining: { eur: '€18 – €35', usd: '$20 – $38', note: 'Tapas abundantes y costrada alcalaína' },
        transit: { eur: '€4 – €8', usd: '$4 – $9', note: 'Cercanías Madrid y casco peatonal' },
        total: { eur: '€87 – €178', usd: '$94 – $192' }
      }
    }
  }
];
