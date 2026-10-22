import { UnifiedDestination } from '../unifiedDestinationsData';

export const GALICIA_DESTINATIONS: UnifiedDestination[] = [
  {
    id: 'santiago-compostela',
    name: 'Santiago de Compostela',
    officialName: 'Provincia da Coruña · Galicia',
    capital: 'Santiago de Compostela',
    region: 'Galicia · Meta Jacobea Universal',
    coordinates: [42.8805, -8.5456],
    badge: 'Meta del Camino de Santiago',
    accentColor: '#B91C1C',
    tagline: '«La Plaza del Obradoiro, el Pórtico de la Gloria y el vuelo místico del Botafumeiro»',
    photoTag: 'SANTIAGO · CATEDRAL Y PLAZA DEL OBRADOIRO',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Fachada barroca del Obradoiro de la Catedral de Santiago de Compostela',
    imageCaption: 'La Catedral de Santiago de Compostela presidiendo la Plaza del Obradoiro',
    intro: 'Meta espiritual universal del Camino de Santiago y Patrimonio de la Humanidad por la UNESCO. Construida en granito gris teñido de líquenes dorados que brillan bajo la lluvia fina («orballo»). Su Catedral acoge el sepulcro del Apóstol Santiago, el restaurado Pórtico de la Gloria del Maestro Mateo (1188) y el imponente vuelo del Botafumeiro por el transepto.',
    culturalHighlight: 'Catedral de Santiago, Plaza del Obradoiro, Pórtico de la Gloria y el rito del abrazo al Apóstol',
    englishHighlight: 'Camino de Santiago pilgrimage destination, Pórtico de la Gloria & Obradoiro square',
    iconicDish: 'Pulpo á feira con pimentón de la Vera, tarta de Santiago de almendra y pimientos de Padrón',
    languages: 'Gallego y Castellano',
    notableLandmark: 'Catedral de Santiago de Compostela y Hostal de los Reyes Católicos',
    visitorTip: 'Asiste a la Misa del Peregrino a las 12:00 h y abraza la estatua del Apóstol Santiago en el camarín superior tras el altar mayor.',
    spanishPhrase: {
      spanish: '«Un trozo de tarta de Santiago y una cunca de vino ribeiro, por favor.»',
      english: 'A slice of Santiago almond cake and a cup of ribeiro wine, please.',
      phonetic: 'oon TROH-thoh deh TAHR-tah deh sahn-TYAH-goh ee OO-nah KOON-kah deh ree-BAY-roh'
    },
    travelConnection: 'Tren AVE y Alvia directo desde Madrid Chamartín en 3h 15m y aeropuerto internacional SCQ.',
    officialLink: {
      label: 'Turismo de Santiago de Compostela',
      url: 'https://www.santiagoturismo.com'
    },
    attractions: [
      {
        name: 'Catedral de Santiago de Compostela',
        desc: 'Templo románico y fachada barroca del Obradoiro que culmina el Camino de Santiago, con el sepulcro apostólico y el Botafumeiro de 53 kg.',
        highlight: 'Patrimonio de la Humanidad UNESCO'
      },
      {
        name: 'Pórtico de la Gloria (Maestro Mateo)',
        desc: 'Obra cumbre de la escultura románica universal tallada en 1188 con más de doscientas figuras en mármol y granito policromado.',
        highlight: 'Restauración integral de su policromía original'
      },
      {
        name: 'Hostal de los Reyes Católicos (Parador)',
        desc: 'Hospital real de peregrinos mandado erigir por los Reyes Católicos en 1499 con fachada plateresca y cuatro claustros ajardinados.',
        highlight: 'El hotel más antiguo del mundo en funcionamiento ininterrumpido'
      }
    ],
    gallery: [
      {
        id: 'stg-1',
        title: 'Fachada del Obradoiro en la Catedral',
        subtitle: 'La fachada barroca de Casas y Novoa de 1740 elevándose sobre el granito empapado de la plaza',
        photoTag: 'SANTIAGO · PLAZA DEL OBRADOIRO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Santiago de Compostela'
      },
      {
        id: 'stg-2',
        title: 'Pórtico de la Gloria restaurado',
        subtitle: 'El tímpano con el Cristo en Majestad y los ancianos del Apocalipsis tocando instrumentos medievales',
        photoTag: 'PÓRTICO DE LA GLORIA · AÑO 1188',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Pórtico de la Gloria en Santiago'
      },
      {
        id: 'stg-3',
        title: 'Plaza de las Platerías y Fuente de los Caballos',
        subtitle: 'La única fachada románica exterior conservada de la catedral frente a la fuente de piedra',
        photoTag: 'PLATERÍAS · ROMÁNICO ORIGINAL',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de las Platerías en Santiago'
      },
      {
        id: 'stg-4',
        title: 'Rúa do Franco y Tabernas Tradicionales',
        subtitle: 'Callejuela empedrada donde los peregrinos celebran la llegada con marisco fresco y tazas de ribeiro',
        photoTag: 'RÚA DO FRANCO · TAPERÍAS',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Rúa do Franco en Santiago'
      },
      {
        id: 'stg-5',
        title: 'Hostal de los Reyes Católicos',
        subtitle: 'Portada plateresca labrada con las figuras de los apóstoles y reyes en el Obradoiro',
        photoTag: 'HOSTAL REAL · PARADOR 1499',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Hostal de los Reyes Católicos en Santiago'
      },
      {
        id: 'stg-6',
        title: 'Parque de la Alameda y Mirador',
        subtitle: 'Paseo arbolado centenario con robles carballos y la panorámica icónica hacia las torres de la catedral',
        photoTag: 'PARQUE DE LA ALAMEDA · MIRADOR',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Vistas de la Catedral desde la Alameda'
      }
    ],
    secretSpots: [
      {
        id: 'finisterre',
        name: 'Cabo Fisterra (El Fin del Mundo)',
        distance: '85 km · 1 hora',
        description: 'El Finis Terrae romano donde los peregrinos contemplan el ocaso del sol en el océano Atlántico.',
        photoTag: 'COSTA DA MORTE · FIN DEL MUNDO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'ponte-maceira',
        name: 'Ponte Maceira',
        distance: '18 km · 20 min',
        description: 'Puente medieval de piedra sobre el río Tambre con presa molinera y robles cantábricos.',
        photoTag: 'PUENTE MEDIEVAL · RÍO TAMBRE',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador Hostal dos Reis Católicos (dormir dentro del palacio plateresco del Obradoiro) o el Hotel San Francisco Monumento.',
      hotelZones: [
        { title: 'Plaza del Obradoiro', desc: 'Despertar con el sonido de las campanas catedralicias y la emoción peregrina.' },
        { title: 'Rúa da Raíña y San Pedro', desc: 'Calles peatonales históricas con tabernas de pulpo y marisco.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€70 – €160', usd: '$75 – $172', note: 'Habitación doble en hotel histórico' },
        dining: { eur: '€22 – €46', usd: '$24 – $50', note: 'Pulpo á feira, marisco de la ría y tarta de Santiago' },
        transit: { eur: '€3 – €8', usd: '$3 – $9', note: 'Ciudad 100% peatonal' },
        total: { eur: '€95 – €214', usd: '$102 – $231' }
      }
    }
  },
  {
    id: 'a-coruna',
    name: 'A Coruña',
    officialName: 'Provincia da Coruña · Galicia',
    capital: 'A Coruña',
    region: 'Galicia · Golfo Ártabro y Rías Altas',
    coordinates: [43.3623, -8.4115],
    badge: 'La Ciudad de Cristal',
    accentColor: '#0284C7',
    tagline: '«La luz de la Torre de Hércules guiando naves desde Roma y las galerías de cristal sobre la dársena»',
    photoTag: 'A CORUÑA · TORRE DE HÉRCULES Y MARINA',
    imageUrl: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'La Torre de Hércules faro romano milenario de A Coruña al atardecer sobre el océano Atlántico',
    imageCaption: 'La Torre de Hércules, el faro romano en funcionamiento más antiguo del mundo',
    intro: 'Península atlántica bañada por el océano y la ría. A Coruña es mundialmente célebre por la Torre de Hércules —faro romano del siglo I d.C. que sigue emitiendo destellos de luz dos mil años después— y por sus fachadas de galerías de madera y cristal blanco de la Marina que le valieron el título de «Ciudad de Cristal».',
    culturalHighlight: 'Torre de Hércules (UNESCO), Galerías acristaladas de La Marina, Plaza de María Pita y el paseo marítimo',
    englishHighlight: 'World oldest active Roman lighthouse Torre de Hércules & glass-facade marina',
    iconicDish: 'Percebes de la Costa da Morte, empanada gallega de zamburiñas y pulpo con cachelos',
    languages: 'Gallego y Castellano',
    notableLandmark: 'Torre de Hércules y Plaza de María Pita',
    visitorTip: 'Sube los 234 escalones de la Torre de Hércules al atardecer para contemplar las olas rompiendo contra las rocas y la rosa de los vientos celta esculpida a sus pies.',
    spanishPhrase: {
      spanish: '«Una ración de zamburiñas a la plancha y un vino albariño bien frío.»',
      english: 'A portion of grilled scallops and a chilled albariño wine.',
      phonetic: 'OO-nah rah-THYOHN deh thahm-boo-REE-nyahs ah lah PLAHN-chah'
    },
    travelConnection: 'Tren AVE y Alvia directo con Madrid Chamartín en 3h 30m y aeropuerto LCG.',
    officialLink: {
      label: 'Turismo de A Coruña',
      url: 'https://www.turismocoruna.com'
    },
    attractions: [
      {
        name: 'Torre de Hércules',
        desc: 'Faro romano de 55 metros de altura levantado en época del emperador Trajano que sigue en activo guiando el tráfico marítimo del Atlántico.',
        highlight: 'Patrimonio de la Humanidad UNESCO'
      },
      {
        name: 'Galerías de La Marina («Ciudad de Cristal»)',
        desc: 'Impresionante conjunto de balcones acristalados del siglo XIX diseñados originalmente para proteger las viviendas de los pescadores del viento y la humedad marina.',
        highlight: 'La mayor superficie acristalada continua del mundo'
      },
      {
        name: 'Plaza de María Pita y Palacio Municipal',
        desc: 'Plaza porticada monumental dedicada a la heroína local que defendió la ciudad en 1589 contra la armada del corsario inglés Francis Drake.',
        highlight: 'Palacio consistorial neoclásico con cúpulas rojas de zinc'
      }
    ],
    gallery: [
      {
        id: 'cor-a-1',
        title: 'Torre de Hércules sobre el Océano',
        subtitle: 'El faro imperial del siglo I erigido sobre el cabo rocoso con la Rosa de los Vientos a sus pies',
        photoTag: 'TORRE DE HÉRCULES · FARO ROMANO UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Torre de Hércules en A Coruña'
      },
      {
        id: 'cor-a-2',
        title: 'Galerías de La Marina iluminadas',
        subtitle: 'Los ventanales blancos reflejados sobre el agua del puerto al anochecer',
        photoTag: 'LA MARINA · CIUDAD DE CRISTAL',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Galerías de la Marina en A Coruña'
      },
      {
        id: 'cor-a-3',
        title: 'Plaza de María Pita y Ayuntamiento',
        subtitle: 'La gran plaza cuadrangular de 10.000 m² presidida por la estatua de bronce de la heroína',
        photoTag: 'MARÍA PITA · CENTRO CÍVICO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de María Pita en A Coruña'
      },
      {
        id: 'cor-a-4',
        title: 'Playas de Riazor y Orzán',
        subtitle: 'La curva de arena atlántica urbana batida por las olas frente al estadio de fútbol y el paseo marítimo',
        photoTag: 'RIAZOR Y ORZÁN · PLAYA URBANA',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Playa de Riazor en A Coruña'
      },
      {
        id: 'cor-a-5',
        title: 'Castillo de San Antón',
        subtitle: 'Fortaleza insular del siglo XVI en la bahía reconvertida en Museo Arqueológico e Histórico',
        photoTag: 'SAN ANTÓN · FORTIFICACIÓN MARÍTIMA',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Castillo de San Antón en A Coruña'
      },
      {
        id: 'cor-a-6',
        title: 'Monte de San Pedro y Ascensor Panorámico',
        subtitle: 'Mirador costero con una esfera de cristal elevadora que sube por el acantilado',
        photoTag: 'MONTE SAN PEDRO · MIRADOR 360°',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Monte de San Pedro en A Coruña'
      }
    ],
    secretSpots: [
      {
        id: 'betanzos',
        name: 'Betanzos de los Caballeros',
        distance: '24 km · 22 min',
        description: 'Antigua capital del Reino de Galicia con calles medievales empinadas y la tortilla de patatas melosa más premiada de España.',
        photoTag: 'BÉTESTIS MEDIEVAL · TORTILLA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'fragas-eume',
        name: 'Parque Natural Fragas do Eume',
        distance: '45 km · 40 min',
        description: 'Uno de los bosques atlánticos costeros mejor conservados de Europa con helechos terciarios y el monasterio de Caaveiro.',
        photoTag: 'BOSQUE ATLÁNTICO · MONASTERIO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel NH Collection A Coruña Finisterre (único 5 estrellas frente al mar) o el Hotel Plaza junto a Cuatro Caminos.',
      hotelZones: [
        { title: 'La Marina y Parrote', desc: 'Junto a las galerías acristaladas, el puerto y la Ciudad Vieja.' },
        { title: 'Paseo de Riazor', desc: 'Frente a las olas del océano y con acceso inmediato a los arenales.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€65 – €145', usd: '$70 – $156', note: 'Habitación doble frente a la dársena' },
        dining: { eur: '€24 – €48', usd: '$26 – $52', note: 'Mariscada de zamburiñas, percebes y empanada' },
        transit: { eur: '€4 – €9', usd: '$4 – $10', note: 'Paseo marítimo continuo de 13 km' },
        total: { eur: '€93 – €202', usd: '$100 – $218' }
      }
    }
  },
  {
    id: 'pontevedra',
    name: 'Pontevedra',
    officialName: 'Provincia de Pontevedra · Galicia',
    capital: 'Pontevedra',
    region: 'Galicia · Rías Baixas',
    coordinates: [42.4316, -8.6483],
    badge: 'La Capital Modelo Peatonal',
    accentColor: '#10B981',
    tagline: '«Plazas de piedra de la Leña y la Verdura, el santuario en vieira de la Peregrina y el sonido del agua»',
    photoTag: 'PONTEVEDRA · PLAZA DE LA LEÑA Y PEREGRINA',
    imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Plaza de la Leña de Pontevedra con su cruceiro de piedra y casas con soportales',
    imageCaption: 'La Plaza de la Leña de Pontevedra con su cruceiro de granito del siglo XV',
    intro: 'Reconocida internacionalmente por la ONU y el Foro Económico Mundial como una de las ciudades con mejor calidad de vida y modelo urbano sin automóviles. El casco antiguo de Pontevedra es un deleite para caminar entre plazas con fuentes de piedra («fontes»), conventos y la singular Iglesia de la Virgen Peregrina levantada sobre planta con forma de concha de vieira.',
    culturalHighlight: 'Plaza de la Leña, Santuario de la Virgen Peregrina, Ruinas de Santo Domingo y el Museo de Pontevedra',
    englishHighlight: 'Award-winning car-free historic center, scallop-shaped Peregrina church & vibrant stone plazas',
    iconicDish: 'Ostras de Arcade en crudo con limón, lamprea a la bordelesa y vino albariño D.O. Rías Baixas',
    languages: 'Gallego y Castellano',
    notableLandmark: 'Santuario de la Virgen Peregrina y Plaza de la Leña',
    visitorTip: 'Tapea al mediodía en las terrazas de la Plaza de la Leña o Plaza de la Verdura: no hay coches ni ruidos de motores, solo el rumor del agua de las fuentes.',
    spanishPhrase: {
      spanish: '«Una docena de ostras de Arcade y una copa de vino albariño de las Rías Baixas.»',
      english: 'A dozen Arcade oysters and a glass of Rías Baixas albariño wine.',
      phonetic: 'OO-nah doh-THEH-nah deh OHS-trahs deh ahr-KAH-deh ee OO-nah KOH-pah'
    },
    travelConnection: 'Tren de media distancia y Alvia desde Santiago (30 min) y Madrid Chamartín (4 horas).',
    officialLink: {
      label: 'Turismo de Pontevedra',
      url: 'https://www.visit-pontevedra.com'
    },
    attractions: [
      {
        name: 'Santuario de la Virgen Peregrina',
        desc: 'Capilla del siglo XVIII levantada por la cofradía de peregrinos sobre una singular planta en forma de concha de vieira con fachada barroca curvada.',
        highlight: 'Patrona del Camino Portugués de Santiago'
      },
      {
        name: 'Plaza de la Leña y Cruceiro',
        desc: 'Plaza tradicional empedrada con soportales de granito, tres casas señoriales barrocas y un cruceiro del siglo XV en el centro.',
        highlight: 'El rincón más pintoresco de la ciudad vieja'
      },
      {
        name: 'Basílica de Santa María la Mayor',
        desc: 'Monumento del gótico tardío edificado por el poderoso gremio de mareantes con espectacular fachada plateresca labrada como retablo de piedra.',
        highlight: 'Joya del plateresco gallego del siglo XVI'
      }
    ],
    gallery: [
      {
        id: 'pon-1',
        title: 'Plaza de la Leña y Cruceiro Central',
        subtitle: 'Soportales de granito y el cruceiro histórico que preside las terrazas gastronómicas',
        photoTag: 'PONTEVEDRA · PLAZA DE LA LEÑA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de la Leña en Pontevedra'
      },
      {
        id: 'pon-2',
        title: 'Santuario de la Virgen Peregrina',
        subtitle: 'La fachada convexa de piedra y las dos torres barrocas dedicadas a la guía de los peregrinos',
        photoTag: 'VIRGEN PEREGRINA · FORMA DE VIEIRA',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Iglesia de la Virgen Peregrina en Pontevedra'
      },
      {
        id: 'pon-3',
        title: 'Ruinas de Santo Domingo',
        subtitle: 'Ábsides góticos al aire libre del siglo XIV con tumbas señoriales y capiteles vegetales',
        photoTag: 'RUINAS DE SANTO DOMINGO · MUSEO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Ruinas de Santo Domingo en Pontevedra'
      },
      {
        id: 'pon-4',
        title: 'Basílica de Santa María la Mayor',
        subtitle: 'La fachada retablo de Juan de Nobre esculpida con escenas de la Asunción y los apóstoles',
        photoTag: 'SANTA MARÍA · GREMIO DE MAREANTES',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Basílica de Santa María en Pontevedra'
      },
      {
        id: 'pon-5',
        title: 'Plaza de la Verdura y Fuente',
        subtitle: 'Espacio peatonal donde se celebraba la venta de hortalizas con soportales de vino ribeiro',
        photoTag: 'PLAZA DE LA VERDURA · TAPERÍA',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de la Verdura en Pontevedra'
      },
      {
        id: 'pon-6',
        title: 'Puente del Burgo sobre el Río Lérez',
        subtitle: 'Paso medieval con conchas de vieira esculpidas por donde el Camino Portugués cruza el río',
        photoTag: 'PUENTE DEL BURGO · RÍO LÉREZ',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente del Burgo en Pontevedra'
      }
    ],
    secretSpots: [
      {
        id: 'combarro',
        name: 'Combarro (Hórreos junto al mar)',
        distance: '7 km · 10 min',
        description: 'Pueblo de pescadores con más de treinta hórreos centenarios alineados directamente sobre las rocas de la ría.',
        photoTag: 'HÓRREOS MARINEROS · RÍA DE PONTEVEDRA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'illas-cies',
        name: 'Islas Cíes (Parque Nacional)',
        distance: 'Barco desde Vigo o Cangas',
        description: 'Archipiélago virgen con la playa de Rodas, calificada por The Guardian como la mejor playa del mundo.',
        photoTag: 'PARQUE NACIONAL · PLAYA DE RODAS',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Pontevedra (en el señorial Palacio de los Condes de Maceda del siglo XVI en la calle del Barón).',
      hotelZones: [
        { title: 'Zona Monumental', desc: 'Calles peatonales silenciosas a pasos de la Plaza de la Leña.' },
        { title: 'Paseo de Montero Ríos', desc: 'Avenida ajardinada decimonónica con el Palacio de la Diputación.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€60 – €135', usd: '$65 – $145', note: 'Habitación doble en parador o hotel' },
        dining: { eur: '€20 – €42', usd: '$22 – $45', note: 'Ostras de Arcade y marisco de las Rías Baixas' },
        transit: { eur: '€3 – €7', usd: '$3 – $8', note: 'Ciudad 100% peatonal sin coches' },
        total: { eur: '€83 – €184', usd: '$90 – $198' }
      }
    }
  },
  {
    id: 'lugo',
    name: 'Lugo',
    officialName: 'Provincia de Lugo · Galicia',
    capital: 'Lugo',
    region: 'Galicia · Tierras de Lucus Augusti',
    coordinates: [43.0097, -7.5568],
    badge: 'La Muralla Romana Intacta',
    accentColor: '#78350F',
    tagline: '«El círculo perfecto de piedra romana que abraza la ciudad desde hace dos mil años»',
    photoTag: 'LUGO · MURALLA ROMANA UNESCO',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Muralla romana completa de Lugo con sus 71 torreones de sillería y pizarra',
    imageCaption: 'La Muralla romana de Lugo, la única muralla romana completa del mundo',
    intro: 'Fundada por Paulo Fabio Máximo en el 25 a.C. con el nombre de Lucus Augusti. Lugo tiene el privilegio universal de conservar su muralla romana absolutamente completa e intacta: un anillo de 2.266 metros con 71 torreones semicirculares y 10 puertas por cuyo adarve superior se puede pasear contemplando la ciudad vieja y la Catedral de Santa María.',
    culturalHighlight: 'Muralla Romana de Lugo (UNESCO), Catedral de Santa María, Domus del Mitreo y la gastronomía de tabernas',
    englishHighlight: 'World only intact Roman defensive wall, walking adarve promenade & cathedral',
    iconicDish: 'Pulpo á feira en caldero de cobre, lacón con grelos y chorizos, y filloas gallegas',
    languages: 'Gallego y Castellano',
    notableLandmark: 'Muralla Romana de Lugo y Catedral de Santa María',
    visitorTip: 'Da la vuelta completa a la ciudad caminando por lo alto del adarve de la muralla (tarda unos 30-40 minutos): es un paseo suspendido a diez metros de altura.',
    spanishPhrase: {
      spanish: '««...Y para comer, Lugo»: una ración de pulpo á feira con pimentón.»',
      english: '«And to eat, Lugo»: a portion of octopus with paprika and coarse salt.',
      phonetic: 'ee PAH-rah koh-MEHR LOO-goh: OO-nah rah-THYOHN deh POOL-poh'
    },
    travelConnection: 'Tren Alvia directo con Madrid Chamartín en 4h 40m y autobuses con Santiago (1h 15m).',
    officialLink: {
      label: 'Turismo de Lugo',
      url: 'https://turismo.concellodelugo.gal'
    },
    attractions: [
      {
        name: 'Muralla Romana de Lugo',
        desc: 'La única muralla militar romana de todo el Imperio que se conserva completa en su perímetro original del siglo III d.C.',
        highlight: 'Patrimonio de la Humanidad UNESCO desde el año 2000'
      },
      {
        name: 'Catedral de Santa María de Lugo',
        desc: 'Templo que fusiona el románico original con gótico y barroco, con la prerrogativa papal de tener expuesto el Santísimo Sacramento día y noche.',
        highlight: 'Capilla de la Virgen de los Ojos Grandes de Fernando de Casas'
      },
      {
        name: 'Casa dos Mosaicos y Domus del Mitreo',
        desc: 'Mansión romana aristocrática bajo el suelo con un templo dedicado al dios oriental Mitra con ara inscrita del centurión victorioso.',
        highlight: 'El templo mitríaco más completo de Hispania'
      }
    ],
    gallery: [
      {
        id: 'lug-1',
        title: 'Muralla Romana y Torreones',
        subtitle: 'Lienzo de mampostería de pizarra y granito con los torreones semicirculares al atardecer',
        photoTag: 'LUGO · MURALLA ROMANA UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Muralla romana de Lugo'
      },
      {
        id: 'lug-2',
        title: 'Paseo por el Adarve de la Muralla',
        subtitle: 'Paseo peatonal empedrado en lo alto del parapeto con vistas a los tejados de pizarra',
        photoTag: 'EL ADARVE · PASEO SUSPENDIDO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Paseo superior de la muralla de Lugo'
      },
      {
        id: 'lug-3',
        title: 'Catedral de Santa María y Puerta de Santiago',
        subtitle: 'Fachada neoclásica de la catedral junto a la puerta abierta en la muralla para los peregrinos',
        photoTag: 'CATEDRAL DE SANTA MARÍA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Lugo'
      },
      {
        id: 'lug-4',
        title: 'Plaza Mayor y Casa Consistorial',
        subtitle: 'Plaza ajardinada central porticada con el edificio barroco del ayuntamiento del siglo XVIII',
        photoTag: 'PLAZA MAYOR · CONSISTORIO BARROCO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza Mayor de Lugo'
      },
      {
        id: 'lug-5',
        title: 'Puerta de San Pedro',
        subtitle: 'La puerta por donde el Camino Primitivo de Santiago penetra intramuros en la ciudad romana',
        photoTag: 'PUERTA DE SAN PEDRO · CAMINO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puerta de San Pedro en Lugo'
      },
      {
        id: 'lug-6',
        title: 'Rúa da Cruz y las Taperías',
        subtitle: 'Callejuela de piedra donde los bares sirven pinchos calientes gratuitos con cada caña o ribeiro',
        photoTag: 'RÚA DA CRUZ · TAPEÍTO DE LUGO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Rúa da Cruz en Lugo'
      }
    ],
    secretSpots: [
      {
        id: 'playa-catedrales',
        name: 'Playa de las Catedrales (Ribadeo)',
        distance: '92 km · 1 hora',
        description: 'Arcos de roca de más de treinta metros esculpidos por la marea que recuerdan a las naves de una catedral gótica.',
        photoTag: 'MONUMENTO NATURAL · ARCOS MARINOS',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'ribeira-sacra-sil',
        name: 'Cañón del Sil (Ribeira Sacra)',
        distance: '65 km · 55 min',
        description: 'Garganta fluvial con viñedos en bancales verticales de viticultura heroica y monasterios medievales.',
        photoTag: 'RIBEIRA SACRA · CAÑÓN DEL SIL',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel Méndez Núñez en la calle de la Reina o el Eurostars Gran Hotel Lugo junto a la muralla.',
      hotelZones: [
        { title: 'Intramuros', desc: 'Dentro del recinto romano, a pasos de la Catedral y de las tabernas de la rúa da Cruz.' },
        { title: 'Plaza de Santo Domingo', desc: 'Plaza arbolada animada con comercios y acceso directo al adarve.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€50 – €110', usd: '$55 – $120', note: 'Habitación doble en hotel céntrico' },
        dining: { eur: '€18 – €35', usd: '$20 – $38', note: '«Y para comer, Lugo»: tapas abundantes gratuitas' },
        transit: { eur: '€3 – €7', usd: '$3 – $8', note: 'Toda la ciudad romana a pie' },
        total: { eur: '€71 – €152', usd: '$78 – $166' }
      }
    }
  },
  {
    id: 'ourense',
    name: 'Ourense',
    officialName: 'Provincia de Ourense · Galicia',
    capital: 'Ourense',
    region: 'Galicia · Termalismo y Río Miño',
    coordinates: [42.3358, -7.8639],
    badge: 'La Capital Termal de Galicia',
    accentColor: '#D97706',
    tagline: '«Las fuentes hirvientes de As Burgas, el Pórtico del Paraíso y las termas humeantes junto al Miño»',
    photoTag: 'OURENSE · AS BURGAS Y CATEDRAL',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Manantiales termales de As Burgas en el centro histórico de Ourense',
    imageCaption: 'Las fuentes termales romanas de As Burgas en Ourense a 67°C',
    intro: 'Segunda urbe termal más importante de Europa por caudal de aguas mineromedicinales. Ourense brota con agua caliente en pleno casco histórico en As Burgas —manantiales a más de 65°C que usaban los romanos—. Su Catedral de San Martiño custodia el intacto Pórtico del Paraíso policromado, y los senderos fluviales del Miño enlazan pozas termales al aire libre como Outariz y Chavasqueira.',
    culturalHighlight: 'Fuentes termales de As Burgas, Catedral de San Martiño (Pórtico del Paraíso), Puente Romano y termas de Outariz',
    englishHighlight: 'Europe leading thermal spring city, As Burgas hot springs & Pórtico del Paraíso',
    iconicDish: 'Empanada gallega de zamburiñas o carne, pulpo á feira con cachelos y marrons glacés de castaña',
    languages: 'Gallego y Castellano',
    notableLandmark: 'As Burgas y Catedral de San Martiño',
    visitorTip: 'Báñate de noche en las termas exteriores de Outariz al borde del río Miño: el contraste del agua a 40°C con el aire fresco gallego es una experiencia balsámica inigualable.',
    spanishPhrase: {
      spanish: '«¿Por dónde se va a las termas de Outariz junto al río?»',
      english: 'Which way to the Outariz thermal baths along the river?',
      phonetic: 'pohr DOHN-deh seh vah ah lahs TEHR-mahs deh oh-oo-TAH-reeth'
    },
    travelConnection: 'Tren AVE directo desde Madrid Chamartín en solo 2h 15m.',
    officialLink: {
      label: 'Turismo de Ourense',
      url: 'https://www.turismodeourense.gal'
    },
    attractions: [
      {
        name: 'Manantiales de As Burgas',
        desc: 'Fuentes termales históricas en pleno centro urbano que manan más de 300 litros por minuto de agua a 67°C desde época romana.',
        highlight: 'Piscina termal gratuita al aire libre en As Burgas de Arriba'
      },
      {
        name: 'Catedral de San Martiño y Pórtico del Paraíso',
        desc: 'Templo gótico-románico del siglo XII con cimborrio gótico flamígero y el Pórtico del Paraíso, réplica policromada del Pórtico de la Gloria.',
        highlight: 'Conserva la policromía original del siglo XVI'
      },
      {
        name: 'Puente Romano de Ourense (Ponte Vella)',
        desc: 'Paso histórico sobre el río Miño edificado en época de Augusto con arco ojival central de 43 metros de luz y 38 metros de altura.',
        highlight: 'Monumento nacional que resistió las grandes avenidas del Miño'
      }
    ],
    gallery: [
      {
        id: 'our-1',
        title: 'As Burgas de Ourense',
        subtitle: 'El vapor caliente emergiendo de los caños neoclásicos de piedra en pleno centro',
        photoTag: 'OURENSE · AS BURGAS A 67°C',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'As Burgas en Ourense'
      },
      {
        id: 'our-2',
        title: 'Puente Viejo sobre el Río Miño',
        subtitle: 'El arco central medieval levantado sobre cimientos romanos recortado en las aguas del Miño',
        photoTag: 'PONTE VELLA · PUENTE ROMANO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente Romano de Ourense'
      },
      {
        id: 'our-3',
        title: 'Pórtico del Paraíso en la Catedral',
        subtitle: 'Las figuras policromadas de los profetas y ancianos del Apocalipsis sonriendo en el nártex',
        photoTag: 'CATEDRAL · PÓRTICO DEL PARAÍSO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Pórtico del Paraíso en Ourense'
      },
      {
        id: 'our-4',
        title: 'Termas al aire libre de Outariz',
        subtitle: 'Pozas de piedra de estilo zen rodeadas de vegetación a orillas del río Miño',
        photoTag: 'OUTARIZ · TERMAS NATURALES',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Termas de Outariz en Ourense'
      },
      {
        id: 'our-5',
        title: 'Plaza Mayor Inclinada de Ourense',
        subtitle: 'La única plaza mayor inclinada de Europa presidida por el Ayuntamiento y el palacio episcopal',
        photoTag: 'PLAZA MAYOR · PLANTA INCLINADA',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza Mayor de Ourense'
      },
      {
        id: 'our-6',
        title: 'Claustro de San Francisco',
        subtitle: 'Claustro gótico del siglo XIV con 63 arcos trilobulados tallados con figuras mitológicas y vegetales',
        photoTag: 'SAN FRANCISCO · GÓTICO GALLEGO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Claustro de San Francisco en Ourense'
      }
    ],
    secretSpots: [
      {
        id: 'allariz',
        name: 'Allariz',
        distance: '22 km · 20 min',
        description: 'Villa medieval a orillas del río Arnoia con molinos harineros restaurados y almendrados tradicionales de monjas.',
        photoTag: 'VILLA MEDIEVAL · RÍO ARNOIA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'castro-caldelas',
        name: 'Castro Caldelas y Ribeira Sacra',
        distance: '50 km · 45 min',
        description: 'Castillo de los Condes de Lemos en lo alto de una colina que domina los viñedos heroicos del río Sil.',
        photoTag: 'CASTILLO MEDIEVAL · RIBEIRA SACRA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel Francisco II en el centro o el Balneario de Laias (hotel termal a 15 min junto al Miño).',
      hotelZones: [
        { title: 'Casco Histórico / As Burgas', desc: 'A pasos de las fuentes termales, la Catedral y la Plaza Mayor.' },
        { title: 'Riberas del Miño', desc: 'Conexión con el tren termal y las termas de Outariz y Chavasqueira.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€55 – €120', usd: '$60 – $130', note: 'Habitación doble en hotel con encanto' },
        dining: { eur: '€18 – €38', usd: '$20 – $41', note: 'Empanada, pulpo y vino Ribeiro' },
        transit: { eur: '€3 – €8', usd: '$3 – $9', note: 'Tren termal turístico a las pozas' },
        total: { eur: '€76 – €166', usd: '$83 – $180' }
      }
    }
  }
];
