import { UnifiedDestination } from '../unifiedDestinationsData';

export const NORTE_DESTINATIONS: UnifiedDestination[] = [
  {
    id: 'san-sebastian',
    name: 'San Sebastián (Donostia)',
    officialName: 'Gipuzkoa · País Vasco (Euskadi)',
    capital: 'Donostia / San Sebastián',
    region: 'País Vasco · Costa Cantábrica',
    coordinates: [43.3183, -1.9812],
    badge: 'La Perla del Cantábrico',
    accentColor: '#0284C7',
    tagline: '«La curva perfecta de la bahía de La Concha, el Peine del Viento y la meca mundial de la gastronomía»',
    photoTag: 'DONOSTIA · BAHÍA DE LA CONCHA Y PEINE DEL VIENTO',
    imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'La bahía de La Concha de San Sebastián con la isla de Santa Clara y el Monte Igueldo',
    imageCaption: 'La bahía de La Concha de San Sebastián con su elegante barandilla blanca',
    intro: 'Considerada una de las ciudades costeras más elegantes del planeta. Enmarcada entre los montes Urgull e Igueldo, San Sebastián cautiva con la bahía de La Concha, la escultura del Peine del Viento de Chillida desafiando las olas cantábricas, su Festival Internacional de Cine y la mayor densidad de estrellas Michelin del mundo.',
    culturalHighlight: 'Bahía de La Concha, El Peine del Viento, la Parte Vieja donostiarra y los templos del pintxo',
    englishHighlight: 'Crescent La Concha bay, Chillida ocean sculptures & global culinary capital',
    iconicDish: 'Gildas de piparra y anchoa, txangurro a la donostiarra, chuletón de buey y tarta de queso de La Viña',
    languages: 'Euskera y Castellano',
    notableLandmark: 'Playa de La Concha y El Peine del Viento',
    visitorTip: 'Pide en las tabernas de la Parte Vieja una gilda recién montada acompañada de un culín de txakoli de Getaria escanciado desde lo alto.',
    spanishPhrase: {
      spanish: '«Un txakoli de Getaria y dos gildas, por favor.»',
      english: 'A Getaria txakoli white wine and two gildas, please.',
      phonetic: 'oon chah-koh-LEE deh geh-TAH-ryah ee dohs HEEL-dahs, pohr fah-VOHR'
    },
    travelConnection: 'Tren Alvia directo desde Madrid Chamartín (4h 45m) o vuelos en el aeropuerto EAS.',
    officialLink: {
      label: 'Turismo San Sebastián',
      url: 'https://www.sansebastianturismoa.eus'
    },
    attractions: [
      {
        name: 'Playa y Paseo de La Concha',
        desc: 'Playa urbana de arena fina protegida de las mareas por la isla de Santa Clara con la famosa barandilla de forja de Juan Rafael Alday.',
        highlight: 'Una de las playas urbanas más bellas de Europa'
      },
      {
        name: 'El Peine del Viento (Eduardo Chillida)',
        desc: 'Conjunto escultórico de tres piezas de acero macizo de diez toneladas incrustadas en las rocas del Cantábrico.',
        highlight: 'Obra cumbre de la escultura pública contemporánea'
      },
      {
        name: 'La Parte Vieja y Calle 31 de Agosto',
        desc: 'Casco histórico reconstruido tras el incendio de 1813 repleto de barras de pintxos y la Basílica de Santa María del Coro.',
        highlight: 'La capital mundial del pintxo'
      }
    ],
    gallery: [
      {
        id: 'don-1',
        title: 'Bahía de La Concha y Barandilla',
        subtitle: 'La barandilla blanca de diseño modernista enmarcando la arena dorada y el mar',
        photoTag: 'DONOSTIA · LA CONCHA',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Bahía de La Concha en San Sebastián'
      },
      {
        id: 'don-2',
        title: 'El Peine del Viento de Chillida',
        subtitle: 'Las garras de acero oxidado dialogando con el oleaje y los bufaderos de agua marina',
        photoTag: 'PEINE DEL VIENTO · CHILLIDA',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'El Peine del Viento en San Sebastián'
      },
      {
        id: 'don-3',
        title: 'Barra de Pintxos en la Parte Vieja',
        subtitle: 'Obras de arte gastronómicas en miniatura expuestas a lo largo de las barras de madera',
        photoTag: 'PARTE VIEJA · CULTURA DEL PINTXO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Barra de pintxos en San Sebastián'
      },
      {
        id: 'don-4',
        title: 'Palacio de Miramar',
        subtitle: 'Residencia de verano de la reina María Cristina de estilo cottage inglés sobre la loma que separa La Concha de Ondarreta',
        photoTag: 'PALACIO DE MIRAMAR · JARDINES',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Palacio de Miramar en San Sebastián'
      },
      {
        id: 'don-5',
        title: 'Playa de Zurriola y Kursaal de Rafael Moneo',
        subtitle: 'Los dos cubos de vidrio translúcido frente a las olas atlánticas donde rompen los surfistas',
        photoTag: 'ZURRIOLA · KURSAAL RAFAEL MONEO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Playa de la Zurriola y Kursaal'
      },
      {
        id: 'don-6',
        title: 'Vistas desde el Monte Igueldo',
        subtitle: 'Panorámica completa de la ciudad con el funicular centenario de madera de 1912',
        photoTag: 'MONTE IGUELDO · FUNICULAR 1912',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Vistas desde el Monte Igueldo en San Sebastián'
      },
      {
        id: 'don-7',
        title: 'Basílica de Santa María del Coro',
        subtitle: 'Portada barroca dieciochesca al final de la calle Mayor alineada con la Catedral del Buen Pastor',
        photoTag: 'SANTA MARÍA DEL CORO · BARROCO',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Basílica de Santa María del Coro en San Sebastián'
      }
    ],
    secretSpots: [
      {
        id: 'hondarribia',
        name: 'Hondarribia (Fuenterrabía)',
        distance: '22 km · 25 min',
        description: 'Barrio de pescadores de La Marina con casas de madera pintadas en verde y azul junto al castillo de Carlos V.',
        photoTag: 'PUEBLO PESQUERO · LA MARINA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'getaria',
        name: 'Getaria y Museo Balenciaga',
        distance: '25 km · 30 min',
        description: 'Pueblo marinero cuna de Juan Sebastián Elcano y Cristóbal Balenciaga famoso por el rodaballo a la parrilla de carbón.',
        photoTag: 'COSTA VASCA · BALENCIAGA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel María Cristina (icono de la Belle Époque frente al río Urumea) o el Hotel de Londres y de Inglaterra frente a La Concha.',
      hotelZones: [
        { title: 'Paseo de La Concha', desc: 'Vistas directas a la bahía y brisa marina ininterrumpida.' },
        { title: 'Área Romántica / Centro', desc: 'Edificios señoriales franceses, tiendas y a tres minutos de la Parte Vieja.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€95 – €210', usd: '$103 – $227', note: 'Habitación doble en hotel con encanto' },
        dining: { eur: '€35 – €65', usd: '$38 – $70', note: 'Ruta de pintxos de alta cocina y txakoli' },
        transit: { eur: '€4 – €10', usd: '$4 – $11', note: 'Paseos a pie y red Dbus' },
        total: { eur: '€134 – €285', usd: '$145 – $308' }
      }
    }
  },
  {
    id: 'bilbao',
    name: 'Bilbao',
    officialName: 'Bizkaia · País Vasco (Euskadi)',
    capital: 'Bilbao',
    region: 'País Vasco · Ría del Nervión',
    coordinates: [43.263, -2.935],
    badge: 'La Metrópoli del Titanio',
    accentColor: '#6366F1',
    tagline: '«Las ondas de titanio del Museo Guggenheim, la ría regenerada y el sabor de las Siete Calles»',
    photoTag: 'BILBAO · GUGGENHEIM Y RÍA DEL NERVIÓN',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Museo Guggenheim Bilbao de Frank Gehry reflejado en la ría del Nervión',
    imageCaption: 'El Museo Guggenheim Bilbao de Frank Gehry con sus planchas de titanio',
    intro: 'El mayor ejemplo mundial de regeneración urbana. De ciudad industrial siderúrgica a capital global del diseño y la vanguardia. Bilbao está vertebrada por el río Nervión y presidida por el Museo Guggenheim de Frank Gehry, conectada por puentes de Calatrava e Isozaki y anclada en la solera de su Casco Viejo medieval.',
    culturalHighlight: 'Museo Guggenheim Bilbao, Museo de Bellas Artes, Casco Viejo («Las Siete Calles») y Puente Colgante de Vizcaya',
    englishHighlight: 'Frank Gehry titanium Guggenheim masterpiece, historic Casco Viejo & Biscay Bridge',
    iconicDish: 'Bacalao al pil-pil en cazuela de barro, bacalao a la vizcaína y txangurro gratinado',
    languages: 'Euskera y Castellano',
    notableLandmark: 'Museo Guggenheim Bilbao y Puente de Vizcaya',
    visitorTip: 'Hazte una foto junto a Puppy —la escultura floral de doce metros de Jeff Koons— y cruza la pasarela peatonal Zubizuri al caer la tarde.',
    spanishPhrase: {
      spanish: '«Un pintxo de bacalao al pil-pil y un zurito de cerveza.»',
      english: 'A cod pil-pil pintxo and a small draft beer.',
      phonetic: 'oon PEEN-choh deh bah-kah-LAH-oh ahl peel-PEEL ee oon thoo-REE-toh'
    },
    travelConnection: 'Tren Alvia directo con Madrid (5 horas) y vuelos directos en el aeropuerto BIO (La Paloma).',
    officialLink: {
      label: 'Bilbao Turismo',
      url: 'https://www.bilbaoturismo.net'
    },
    attractions: [
      {
        name: 'Museo Guggenheim Bilbao',
        desc: 'Escultura arquitectónica de titanio, piedra caliza y vidrio de Frank Gehry inaugurada en 1997 que transformó el paisaje urbano.',
        highlight: 'Icono del siglo XX con La materia del tiempo de Richard Serra'
      },
      {
        name: 'Casco Viejo («Las Siete Calles»)',
        desc: 'El corazón medieval fundado en 1300 en torno a la Catedral gótica de Santiago y la animada Plaza Nueva.',
        highlight: 'Epicentro del poteo y las tabernas tradicionales'
      },
      {
        name: 'Puente Colgante de Vizcaya (Portugalete)',
        desc: 'El transbordador de hierro más antiguo del mundo diseñado por Alberto de Palacio en 1893 que une Portugalete y Getxo.',
        highlight: 'Patrimonio de la Humanidad UNESCO'
      }
    ],
    gallery: [
      {
        id: 'bil-1',
        title: 'Museo Guggenheim al Atardecer',
        subtitle: 'Las curvas orgánicas de titanio reflejadas en las aguas del río Nervión',
        photoTag: 'BILBAO · GUGGENHEIM TITANIO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Museo Guggenheim de Bilbao'
      },
      {
        id: 'bil-2',
        title: 'Puppy de Jeff Koons',
        subtitle: 'El terrier gigante revestido de decenas de miles de flores naturales vivas en la explanada',
        photoTag: 'PUPPY · ESCULTURA FLORAL',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puppy en el Guggenheim de Bilbao'
      },
      {
        id: 'bil-3',
        title: 'Plaza Nueva del Casco Viejo',
        subtitle: 'Plaza neoclásica porticada de 64 arcos repleta de terrazas de pintxos premiados',
        photoTag: 'PLAZA NUEVA · CASCO VIEJO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza Nueva de Bilbao'
      },
      {
        id: 'bil-4',
        title: 'Puente de Vizcaya (Puente Colgante)',
        subtitle: 'Monumento de arquitectura del hierro Patrimonio UNESCO con barquilla transbordadora',
        photoTag: 'PUENTE DE VIZCAYA · UNESCO 1893',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente Colgante de Vizcaya en Portugalete'
      },
      {
        id: 'bil-5',
        title: 'Teatro Arriaga junto al Arenal',
        subtitle: 'Teatro neobarroco inspirado en la Ópera de París frente al puente del Arenal',
        photoTag: 'TEATRO ARRIAGA · NEOBARROCO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Teatro Arriaga en Bilbao'
      },
      {
        id: 'bil-6',
        title: 'Pasarela Zubizuri de Santiago Calatrava',
        subtitle: 'Puente peatonal curvo de arco inclinado y suelo de cristal sobre la ría',
        photoTag: 'ZUBIZURI · CALATRAVA',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Pasarela Zubizuri en Bilbao'
      }
    ],
    secretSpots: [
      {
        id: 'san-juan-gaztelugatxe',
        name: 'San Juan de Gaztelugatxe (Bermeo)',
        distance: '35 km · 40 min',
        description: 'Islote con ermita unida a la costa por un puente de piedra de 241 escalones batido por el oleaje cantábrico.',
        photoTag: 'ISLOTE MÍTICO · ROCACRAGÓN',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'guernica',
        name: 'Gernika y la Casa de Juntas',
        distance: '34 km · 35 min',
        description: 'Símbolo histórico de las libertades vascas con el Árbol de Gernika y el museo de la Paz.',
        photoTag: 'ÁRBOL DE GERNIKA · MEMORIA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Gran Hotel Domine (frente a Puppy con terraza panorámica sobre el Guggenheim) o el Hotel Carlton.',
      hotelZones: [
        { title: 'Abandoibarra', desc: 'Frente al Guggenheim y el Museo de Bellas Artes, paseos por la ría.' },
        { title: 'Casco Viejo', desc: 'Ambiente popular histórico, a pasos de las Siete Calles y el Mercado de la Ribera.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€80 – €175', usd: '$86 – $188', note: 'Habitación doble en hotel de diseño' },
        dining: { eur: '€28 – €55', usd: '$30 – $60', note: 'Pintxos en la Plaza Nueva y bacalao al pil-pil' },
        transit: { eur: '€5 – €12', usd: '$5 – $13', note: 'Metro Bilbao de Norman Foster y tranvía' },
        total: { eur: '€113 – €242', usd: '$121 – $261' }
      }
    }
  },
  {
    id: 'vitoria-gasteiz',
    name: 'Vitoria-Gasteiz',
    officialName: 'Araba / Álava · País Vasco (Euskadi)',
    capital: 'Vitoria-Gasteiz',
    region: 'País Vasco · Llanada Alavesa',
    coordinates: [42.8467, -2.6716],
    badge: 'Capital Verde Europea',
    accentColor: '#16A34A',
    tagline: '«La Almendra Medieval, la Catedral gótica de Santa María y el modelo mundial de sostenibilidad urbana»',
    photoTag: 'VITORIA · PLAZA DE LA VIRGEN BLANCA',
    imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Plaza de la Virgen Blanca de Vitoria con sus balconadas acristaladas blancas',
    imageCaption: 'La Plaza de la Virgen Blanca de Vitoria-Gasteiz y su monumento a la Batalla de Vitoria',
    intro: 'Sede del Parlamento y Gobierno Vasco, y galardonada como European Green Capital. Vitoria-Gasteiz conserva su casco histórico medieval en forma de almendra con murallas del siglo XI y la Catedral Vieja de Santa María —cuyo programa de restauración «Abierto por Obras» inspiró a Ken Follett en Los pilares de la Tierra—. Está rodeada por un Anillo Verde de parques naturales interconectados.',
    culturalHighlight: 'Catedral de Santa María («Abierto por Obras»), Plaza de la Virgen Blanca, Almendra Medieval y Anillo Verde',
    englishHighlight: 'European Green Capital, almond-shaped medieval old quarter & Ken Follett cathedral',
    iconicDish: 'Perretxikos de primavera, alubias pintas alavesas con sacramentos y pastel vasco',
    languages: 'Euskera y Castellano',
    notableLandmark: 'Plaza de la Virgen Blanca y Catedral de Santa María',
    visitorTip: 'Reserva la visita guiada con casco de obra a la Catedral de Santa María para recorrer los andamios y el triforio como un cantero medieval.',
    spanishPhrase: {
      spanish: '«Un revuelto de perretxikos frescos y una copa de vino de Rioja Alavesa.»',
      english: 'Scrambled eggs with fresh perretxiko mushrooms and a glass of Rioja Alavesa.',
      phonetic: 'oon reh-VWEHL-toh deh peh-rreh-CHEE-kohs FREHS-kohs ee OO-nah KOH-pah'
    },
    travelConnection: 'Tren Alvia directo desde Madrid Chamartín en 3h 15m.',
    officialLink: {
      label: 'Turismo de Vitoria-Gasteiz',
      url: 'https://www.vitoria-gasteiz.org/turismo'
    },
    attractions: [
      {
        name: 'Catedral de Santa María (Catedral Vieja)',
        desc: 'Templo gótico del siglo XIII en lo alto de la colina medieval famoso por su programa de visitas sobre los andamios de restauración.',
        highlight: 'Patrimonio de la Humanidad dentro del Camino de Santiago'
      },
      {
        name: 'Plaza de la Virgen Blanca',
        desc: 'Plaza histórica con miradores acristalados de madera blanca donde el 4 de agosto desciende Celedón para iniciar las fiestas patronales.',
        highlight: 'Monumento a la Batalla de Vitoria de 1813'
      },
      {
        name: 'Muralla Medieval de Vitoria',
        desc: 'Tramo recuperado de la muralla del siglo XI con jardín botánico vertical en las piedras y torreones de defensa.',
        highlight: 'Premio Europa Nostra de restauración'
      }
    ],
    gallery: [
      {
        id: 'vit-1',
        title: 'Plaza de la Virgen Blanca y Balconadas',
        subtitle: 'Las características balconadas acristaladas blancas frente a la iglesia de San Miguel',
        photoTag: 'VITORIA · VIRGEN BLANCA',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza de la Virgen Blanca en Vitoria'
      },
      {
        id: 'vit-2',
        title: 'Catedral Vieja de Santa María («Abierto por Obras»)',
        subtitle: 'La nave gótica del siglo XIII con los andamios que permiten tocar las bóvedas de piedra',
        photoTag: 'SANTA MARÍA · ABIERTO POR OBRAS',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de Santa María en Vitoria'
      },
      {
        id: 'vit-3',
        title: 'La Almendra Medieval',
        subtitle: 'Calles con nombres de gremios medievales: Cuchillería, Herrería, Pintorería y Zapatería',
        photoTag: 'CASCO HISTÓRICO · GREMIOS',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calle medieval en Vitoria'
      },
      {
        id: 'vit-4',
        title: 'Plaza de España (Plaza Nueva)',
        subtitle: 'Plaza neoclásica cuadrada diseñada por Justo Antonio de Olaguíbel en 1781',
        photoTag: 'PLAZA NUEVA · NEOCLÁSICO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza Nueva de Vitoria'
      },
      {
        id: 'vit-5',
        title: 'Parque de Salburua en el Anillo Verde',
        subtitle: 'Lagunas restauradas con ciervos en libertad, aves acuáticas y el centro Ataria',
        photoTag: 'ANILLO VERDE · SALBURUA',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Humedales de Salburua en Vitoria'
      },
      {
        id: 'vit-6',
        title: 'Palacio Escoriaza-Esquivel',
        subtitle: 'Palacete renacentista del siglo XVI con patio plateresco de doble arquería',
        photoTag: 'ESCORIAZA-ESQUIVEL · RENACIMIENTO',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Palacio Escoriaza-Esquivel en Vitoria'
      }
    ],
    secretSpots: [
      {
        id: 'laguardia',
        name: 'Laguardia (Rioja Alavesa)',
        distance: '45 km · 45 min',
        description: 'Villa amurallada sobre una colina horadada por cientos de bodegas familiares subterráneas con el pórtico policromado de Santa María de los Reyes.',
        photoTag: 'RIOJA ALAVESA · BODEGAS SUBTERRÁNEAS',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'salinas-anana',
        name: 'Valle Salado de Añana',
        distance: '30 km · 28 min',
        description: 'Explotación salinera milenaria con miles de eras de madera escalonadas alimentadas por manantiales de salmuera.',
        photoTag: 'SALINAS MILENARIAS · PATRIMONIO FAO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Argómaniz (a 12 min en un palacio renacentista) o el Hotel Silken Ciudad de Vitoria.',
      hotelZones: [
        { title: 'Almendra Medieval', desc: 'Calles peatonales empedradas con tabernas de pintxos y museos.' },
        { title: 'Paseo de la Florida', desc: 'Jardín botánico romántico y avenida señorial del siglo XIX.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€60 – €135', usd: '$65 – $145', note: 'Habitación doble en hotel céntrico' },
        dining: { eur: '€22 – €42', usd: '$24 – $45', note: 'Pintxos en la calle Cuchillería y Rioja Alavesa' },
        transit: { eur: '€4 – €8', usd: '$4 – $9', note: 'Ciudad modelo de carriles bici y tranvía' },
        total: { eur: '€86 – €185', usd: '$93 – $199' }
      }
    }
  },
  {
    id: 'santander',
    name: 'Santander',
    officialName: 'Cantabria · Costa Cantábrica',
    capital: 'Santander',
    region: 'Cantabria · Bahía de Santander',
    coordinates: [43.4623, -3.8099],
    badge: 'La Novia del Mar',
    accentColor: '#0EA5E9',
    tagline: '«La bahía más bella del Cantábrico, el Palacio de la Magdalena y la brisa de El Sardinero»',
    photoTag: 'SANTANDER · PALACIO DE LA MAGDALENA Y BAHÍA',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Palacio Real de la Magdalena de Santander en la península frente al mar Cantábrico',
    imageCaption: 'El Palacio Real de la Magdalena de Santander sobre la península verde',
    intro: 'Abrazada a una bahía natural calificada entre las más hermosas del mundo por la UNESCO. Santander fue el balneario de verano predilecto de la realeza española a comienzos del siglo XX. El majestuoso Palacio de la Magdalena preside la entrada marítima, acompañado por las playas de El Sardinero y el vanguardista Centro Botín proyectado por Renzo Piano.',
    culturalHighlight: 'Palacio de la Magdalena, Centro Botín de Renzo Piano, Playa de El Sardinero y las cuevas prehistóricas de Cantabria',
    englishHighlight: 'Grand Royal Magdalena Palace, world-class bay & Renzo Piano art center',
    iconicDish: 'Rabas de calamar crujientes con limón, anchoas de Santoña sobadas a mano y sobaos pasiegos',
    languages: 'Castellano',
    notableLandmark: 'Palacio de la Magdalena y Centro Botín',
    visitorTip: 'Pide una ración de rabas los domingos al mediodía en las terrazas del Paseo de Pereda frente a la bahía: es el ritual social cántabro por excelencia.',
    spanishPhrase: {
      spanish: '«Una ración de rabas de calamar crujientes y un blanco solera, por favor.»',
      english: 'A portion of crispy fried calamari and a local white wine, please.',
      phonetic: 'OO-nah rah-THYOHN deh RAH-bahs deh kah-lah-MAHR kroo-HYEHN-tehs'
    },
    travelConnection: 'Tren Alvia directo desde Madrid Chamartín en 3h 50m y vuelos directos en el aeropuerto SDR.',
    officialLink: {
      label: 'Turismo de Santander',
      url: 'https://turismo.santander.es'
    },
    attractions: [
      {
        name: 'Palacio Real de la Magdalena',
        desc: 'Residencia de verano de los reyes Alfonso XIII y Victoria Eugenia inaugurada en 1912 en una península de 28 hectáreas con calas y pinares.',
        highlight: 'Icono señorial de la Belle Époque española'
      },
      {
        name: 'Centro Botín (Renzo Piano)',
        desc: 'Centro de arte internacional suspendido sobre pilotes sobre el agua de la bahía con pasarelas de cristal y voladizos marinos.',
        highlight: 'Primera obra de Renzo Piano en España'
      },
      {
        name: 'Playas de El Sardinero',
        desc: 'Dos arenales dorados contiguos separados por los jardines de Piquío y bordeados por palacetes y el Gran Casino decimonónico.',
        highlight: 'El balneario real histórico de baños de ola'
      }
    ],
    gallery: [
      {
        id: 'san-1',
        title: 'Palacio de la Magdalena en la Península',
        subtitle: 'La silueta aristocrática de piedra y pizarra rodeada por los acantilados del Cantábrico',
        photoTag: 'SANTANDER · LA MAGDALENA',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Palacio de la Magdalena en Santander'
      },
      {
        id: 'san-2',
        title: 'Centro Botín sobre la Bahía',
        subtitle: 'Estructura vanguardista de cerámica vidriada que vuela sobre el mar en los Jardines de Pereda',
        photoTag: 'CENTRO BOTÍN · RENZO PIANO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Centro Botín en Santander'
      },
      {
        id: 'san-3',
        title: 'Playas de El Sardinero y Gran Casino',
        subtitle: 'La curva de arena fina bañada por el mar Cantábrico con el palacio del casino neoclásico',
        photoTag: 'EL SARDINERO · PLAYA REAL',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Playas de El Sardinero en Santander'
      },
      {
        id: 'san-4',
        title: 'Faro de Cabo Mayor',
        subtitle: 'Atalaya de piedra de 30 metros de altura sobre acantilados verticales batidos por las olas',
        photoTag: 'CABO MAYOR · FARO CANTÁBRICO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Faro de Cabo Mayor en Santander'
      },
      {
        id: 'san-5',
        title: 'Paseo de Pereda y Dársena de Puertochico',
        subtitle: 'Galerías acristaladas orientadas al sur frente a los barcos de vela de la bahía',
        photoTag: 'PASEO DE PEREDA · PUERTOCHICO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Paseo de Pereda en Santander'
      },
      {
        id: 'san-6',
        title: 'Playa de los Peligros y La Puntida',
        subtitle: 'Aguas mansas protegidas dentro de la bahía con vistas a las cumbres de Peña Cabarga',
        photoTag: 'BAHÍA DE SANTANDER · PLAYA',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Playa de los Peligros en Santander'
      }
    ],
    secretSpots: [
      {
        id: 'santillana-mar',
        name: 'Santillana del Mar y Altamira',
        distance: '31 km · 28 min',
        description: 'La «villa de las tres mentiras» empedrada medieval junto a la cueva de Altamira y sus bisontes polícromos prehistóricos.',
        photoTag: 'CUNA DEL ARTE RUPESTRE · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'comillas',
        name: 'Comillas y El Capricho de Gaudí',
        distance: '50 km · 40 min',
        description: 'Palacete modernista decorado con girasoles de cerámica verde y torre minarete oriental proyectado por Gaudí en 1883.',
        photoTag: 'GAUDÍ MODERNISTA · EL CAPRICHO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel Real (gran hotel de cinco estrellas con vistas a la bahía fundado por Alfonso XIII) o el Gran Hotel Sardinero.',
      hotelZones: [
        { title: 'El Sardinero', desc: 'Frente a las playas de arena dorada, paseos marítimos y silencio aristocrático.' },
        { title: 'Paseo de Pereda / Puertochico', desc: 'En pleno centro, restaurantes de marisco y acceso inmediato al Centro Botín.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€85 – €180', usd: '$92 – $195', note: 'Habitación doble en hotel marinero' },
        dining: { eur: '€26 – €50', usd: '$28 – $54', note: 'Rabas de calamar, marisco cantábrico y sobaos' },
        transit: { eur: '€4 – €10', usd: '$4 – $11', note: 'Autobuses TUS y barco a Somo' },
        total: { eur: '€115 – €240', usd: '$124 – $260' }
      }
    }
  },
  {
    id: 'oviedo',
    name: 'Oviedo (Uviéu)',
    officialName: 'Principado de Asturias',
    capital: 'Oviedo',
    region: 'Asturias · Valle Central y Monte Naranco',
    coordinates: [43.3619, -5.8494],
    badge: 'Capital Prerrománica',
    accentColor: '#3B82F6',
    tagline: '«Las joyas prerrománicas del siglo IX en el monte Naranco, la Santa Iglesia Catedral y el culín de sidra»',
    photoTag: 'OVIEDO · SANTA MARÍA DEL NARANCO Y CATEDRAL',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Santa María del Naranco joya del prerrománico asturiano con la ciudad de Oviedo al fondo',
    imageCaption: 'Santa María del Naranco en el monte Naranco de Oviedo (siglo IX)',
    intro: 'Capital histórica del Reino de Asturias donde nació el Camino de Santiago con el rey Alfonso II el Casto en el siglo IX. Oviedo es un museo al aire libre que custodia los monumentos prerrománicos asturianos declarados Patrimonio de la Humanidad por la UNESCO, la Cámara Santa con la Cruz de la Victoria y la mítica calle Gascona, el bulevar donde la sidra natural se escancia al momento.',
    culturalHighlight: 'Monumentos prerrománicos del Naranco (UNESCO), Cámara Santa con la Cruz de la Victoria y la calle Gascona',
    englishHighlight: 'UNESCO 9th-century pre-Romanesque jewels, Holy Chamber & natural cider street',
    iconicDish: 'Fabada asturiana con compango ahumado, cachopo de ternera con jamón y queso, y carbayones',
    languages: 'Castellano y Asturiano (Bable)',
    notableLandmark: 'Santa María del Naranco y Catedral de San Salvador',
    visitorTip: 'Entra en una sidrería de la calle Gascona y bebe el «culín» de sidra natural de un solo trago justo cuando rompe contra el borde del vaso.',
    spanishPhrase: {
      spanish: '«Un cachopo de ternera asturiana y una botella de sidra bien escanciada.»',
      english: 'An Asturian beef cachopo and a bottle of expertly poured cider.',
      phonetic: 'oon kah-CHOH-poh deh tehr-NEH-rah ahs-too-RYAH-nah ee OO-nah boh-TEH-lyah deh SEE-drah'
    },
    travelConnection: 'Tren AVE directo a través de la variante de Pajares desde Madrid Chamartín en solo 3h 10m.',
    officialLink: {
      label: 'Turismo de Oviedo',
      url: 'https://www.oviedo.es/turismo'
    },
    attractions: [
      {
        name: 'Palacio Prerrománico de Santa María del Naranco',
        desc: 'Aula regia del rey Ramiro I consagrada en el año 848 con miradores de arcos peraltados y medallones esculpidos.',
        highlight: 'Obra cumbre del arte prerrománico europeo (UNESCO)'
      },
      {
        name: 'Catedral Metropolitana de San Salvador',
        desc: 'Templo gótico con torre flamígera de 80 metros que alberga la Cámara Santa del siglo IX con el Santo Sudario.',
        highlight: 'Origen histórico del Camino Primitivo de Santiago'
      },
      {
        name: 'Calle Gascona (Bulevar de la Sidra)',
        desc: 'Vía peatonal flanqueada por las sidrerías tradicionales más afamadas donde los camareros escancian desde lo alto.',
        highlight: 'El epicentro del rito social de la sidra asturiana'
      }
    ],
    gallery: [
      {
        id: 'ovi-1',
        title: 'Santa María del Naranco al Atardecer',
        subtitle: 'El pabellón real del siglo IX iluminado sobre la ladera verde del monte Naranco',
        photoTag: 'OVIEDO · PRERROMÁNICO UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Santa María del Naranco en Oviedo'
      },
      {
        id: 'ovi-2',
        title: 'Torre Gótica de la Catedral de San Salvador',
        subtitle: 'La estilizada aguja gótica que inspiró la novela La Regenta de Leopoldo Alas «Clarín»',
        photoTag: 'CATEDRAL DE SAN SALVADOR · GÓTICO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Catedral de San Salvador en Oviedo'
      },
      {
        id: 'ovi-3',
        title: 'San Miguel de Lillo en el Naranco',
        subtitle: 'Iglesia palatina consagrada en el año 842 con celosías de piedra talladas con motivos visigodos y bizantinos',
        photoTag: 'SAN MIGUEL DE LILLO · AÑO 842',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'San Miguel de Lillo en Oviedo'
      },
      {
        id: 'ovi-4',
        title: 'Calle Gascona y Escanciado de Sidra',
        subtitle: 'El chorro de sidra natural cayendo desde lo alto para despertar la aguja carbónica',
        photoTag: 'GASCONA · ESCANCIADO DE SIDRA',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Escanciando sidra en la calle Gascona de Oviedo'
      },
      {
        id: 'ovi-5',
        title: 'Plaza del Fontán y Mercado',
        subtitle: 'Plaza porticada con casas de colores y balcones de hierro donde se celebra el mercado de flores y quesos',
        photoTag: 'EL FONTÁN · MERCADO TRADICIONAL',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza del Fontán en Oviedo'
      },
      {
        id: 'ovi-6',
        title: 'Teatro Campoamor',
        subtitle: 'Sede solemne de la ceremonia anual de entrega de los Premios Princesa de Asturias',
        photoTag: 'TEATRO CAMPOAMOR · PRINCESA DE ASTURIAS',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Teatro Campoamor en Oviedo'
      }
    ],
    secretSpots: [
      {
        id: 'cudillero',
        name: 'Cudillero',
        distance: '55 km · 40 min',
        description: 'Pueblo marinero encajado en un anfiteatro natural con casas de colores colgadas sobre el puerto viejo.',
        photoTag: 'ANFITEATRO PESQUERO · COSTA ASTURIANA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'covadonga',
        name: 'Santuario de Covadonga y Lagos',
        distance: '82 km · 1h 10 min',
        description: 'La cueva santa donde se inició la Reconquista en 722 y los lagos glaciares Enol y Ercina en los Picos de Europa.',
        photoTag: 'PICOS DE EUROPA · LAGOS Y SANTUARIO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel de la Reconquista (antiguo hospicio barroco del siglo XVIII donde se alojan los galardonados de los Premios Princesa de Asturias).',
      hotelZones: [
        { title: 'Plaza de la Catedral', desc: 'Calles peatonales en silencio con vistas a la aguja gótica de San Salvador.' },
        { title: 'Parque San Francisco', desc: 'Paseo ajardinado señorial junto al Teatro Campoamor y la calle Uría.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€65 – €145', usd: '$70 – $156', note: 'Habitación doble en hotel con solera' },
        dining: { eur: '€22 – €45', usd: '$24 – $48', note: 'Fabada asturiana, cachopo y sidra natural' },
        transit: { eur: '€3 – €8', usd: '$3 – $9', note: 'Centro histórico enteramente a pie' },
        total: { eur: '€90 – €198', usd: '$97 – $213' }
      }
    }
  },
  {
    id: 'gijon',
    name: 'Gijón (Xixón)',
    officialName: 'Principado de Asturias',
    capital: 'Gijón',
    region: 'Asturias · Costa Central y Cantábrico',
    coordinates: [43.5322, -5.6611],
    badge: 'La Villa Marinera de Jovellanos',
    accentColor: '#0D9488',
    tagline: '«El Elogio del Horizonte sobre el acantilado de Santa Catalina, la playa de San Lorenzo y la solera de Cimavilla»',
    photoTag: 'GIJÓN · ELOGIO DEL HORIZONTE Y SAN LORENZO',
    imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'El Elogio del Horizonte de Eduardo Chillida en el cerro de Santa Catalina de Gijón sobre el mar',
    imageCaption: 'El Elogio del Horizonte de Eduardo Chillida en el cerro de Santa Catalina',
    intro: 'La mayor urbe de Asturias se asoma al Cantábrico con la energía de su tradición marinera e industrial. El barrio de pescadores de Cimavilla corona el cerro de Santa Catalina —donde la monumental escultura El Elogio del Horizonte de Chillida abraza el eco del viento marino—, escoltado por la bahía y el arenal dorado de la playa de San Lorenzo.',
    culturalHighlight: 'El Elogio del Horizonte, barrio histórico de Cimavilla, Playa de San Lorenzo y la Universidad Laboral',
    englishHighlight: 'Chillida cliffside sculpture, fisherman quarter Cimavilla & sweeping city beach',
    iconicDish: 'Chopa a la sidra, caldereta de marisco cantábrico, oricios (erizos de mar) y tarta gijonesa',
    languages: 'Castellano y Asturiano',
    notableLandmark: 'Elogio del Horizonte y Cerro de Santa Catalina',
    visitorTip: 'Colócate exactamente en el centro interior del Elogio del Horizonte de Chillida para escuchar cómo la acústica de hormigón amplifica el sonido de las olas del mar.',
    spanishPhrase: {
      spanish: '«Una botella de sidra y una cazuela de marisco de la costa.»',
      english: 'A bottle of cider and a local coastal seafood stew.',
      phonetic: 'OO-nah boh-TEH-lyah deh SEE-drah ee OO-nah kah-THWEH-lah deh mah-REES-koh'
    },
    travelConnection: 'Tren AVE directo desde Madrid Chamartín en 3h 40m y cercanías con Oviedo (25 min).',
    officialLink: {
      label: 'Gijón Turismo',
      url: 'https://www.gijon.es/turismo'
    },
    attractions: [
      {
        name: 'El Elogio del Horizonte (Eduardo Chillida)',
        desc: 'Colosal escultura de hormigón armado de 500 toneladas erigida en 1990 sobre el acantilado del cerro de Santa Catalina.',
        highlight: 'Símbolo contemporáneo de la ciudad de Gijón'
      },
      {
        name: 'Barrio de Cimavilla',
        desc: 'Antigua península y barrio de pescadores con casas de marineros, ruinas romanas de Campo Valdés y sidrerías.',
        highlight: 'Núcleo fundacional romano de Gigia'
      },
      {
        name: 'Laboral Ciudad de la Cultura',
        desc: 'El edificio de piedra civil más grande de España, con teatro monumental y torre mirador de 130 metros.',
        highlight: 'Conjunto arquitectónico del siglo XX reconvertido en centro cultural'
      }
    ],
    gallery: [
      {
        id: 'gij-1',
        title: 'Elogio del Horizonte de Chillida',
        subtitle: 'El arco monumental de hormigón recortado sobre el horizonte del mar Cantábrico',
        photoTag: 'GIJÓN · ELOGIO DEL HORIZONTE',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Elogio del Horizonte en Gijón'
      },
      {
        id: 'gij-2',
        title: 'Playa de San Lorenzo y la Iglesia Mayor',
        subtitle: 'El kilométrico paseo marítimo con las escaleras numeradas y la iglesia de San Pedro sobre el mar',
        photoTag: 'SAN LORENZO · PLAYA URBANA',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Playa de San Lorenzo en Gijón'
      },
      {
        id: 'gij-3',
        title: 'Barrio de Cimavilla y Plaza del Marqués',
        subtitle: 'Palacio barroco de Revillagigedo y colegiata de San Juan Bautista frente al puerto deportivo',
        photoTag: 'CIMAVILLA · REVILLAGIGEDO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza del Marqués en Gijón'
      },
      {
        id: 'gij-4',
        title: 'Laboral Ciudad de la Cultura',
        subtitle: 'La gran plaza central porticada y la torre inspirada en la Giralda',
        photoTag: 'UNIVERSIDAD LABORAL · MONUMENTO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Laboral Ciudad de la Cultura en Gijón'
      },
      {
        id: 'gij-5',
        title: 'Puerto Deportivo y Cuesta del Cholo',
        subtitle: 'Lugar de encuentro al aire libre donde sentarse en el muro a beber sidra mirando las embarcaciones',
        photoTag: 'PUERTO DEPORTIVO · CUESTA DEL CHOLO',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puerto deportivo de Gijón'
      },
      {
        id: 'gij-6',
        title: 'Termas Romanas de Campo Valdés',
        subtitle: 'Yacimiento musealizado de baños públicos romanos del siglo I d.C. junto a la orilla del mar',
        photoTag: 'TERMAS ROMANAS · SIGLO I',
        imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Termas Romanas de Gijón'
      }
    ],
    secretSpots: [
      {
        id: 'lastres',
        name: 'Lastres',
        distance: '42 km · 35 min',
        description: 'Pueblo pesquero escalonado sobre un acantilado escarpado con mirador de San Roque sobre la rasa costera.',
        photoTag: 'COSTA ORIENTAL · PUEBLO PESQUERO',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'tazones',
        name: 'Tazones (Ría de Villaviciosa)',
        distance: '28 km · 30 min',
        description: 'Puerto marinero de callejuelas empedradas donde desembarcó el emperador Carlos V por primera vez en España en 1517.',
        photoTag: 'DESEMBARCO IMPERIAL · RÍA',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Parador de Gijón (en el Molino Viejo del Parque de Isabel la Católica) o el Hotel Abba Playa Gijón frente a San Lorenzo.',
      hotelZones: [
        { title: 'Playa de San Lorenzo', desc: 'Paseo marítimo y acceso directo a los baños de ola cantábricos.' },
        { title: 'Cimavilla y Puerto', desc: 'Ambiente marinero tradicional, sidrerías en la Cuesta del Cholo y plazas.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€65 – €145', usd: '$70 – $156', note: 'Habitación doble frente a la playa' },
        dining: { eur: '€22 – €45', usd: '$24 – $48', note: 'Pescados del Cantábrico y sidra natural' },
        transit: { eur: '€4 – €9', usd: '$4 – $10', note: 'Autobuses urbanos EMTUSA y carril bici litoral' },
        total: { eur: '€91 – €199', usd: '$98 – $214' }
      }
    }
  },
  {
    id: 'pamplona',
    name: 'Pamplona (Iruña)',
    officialName: 'Comunidad Foral de Navarra',
    capital: 'Pamplona / Iruña',
    region: 'Navarra · Cuenca de Pamplona',
    coordinates: [42.8125, -1.6458],
    badge: 'La Fiesta Universal de San Fermín',
    accentColor: '#DC2626',
    tagline: '«La emoción universal del encierro en la calle Estafeta, la Plaza del Castillo y las murallas centenarias»',
    photoTag: 'PAMPLONA · PLAZA DEL CASTILLO Y ESTAFETA',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'La Plaza del Castillo de Pamplona con sus terrazas y balconadas tradicionales',
    imageCaption: 'La Plaza del Castillo de Pamplona, «el cuarto de estar» de la ciudad',
    intro: 'Antigua capital del Reino de Navarra y primer hito urbano del Camino de Santiago tras cruzar los Pirineos por Roncesvalles. Inmortalizada por Ernest Hemingway en Fiesta (The Sun Also Rises), Pamplona vibra en su Plaza del Castillo, el recorrido del encierro por la empinada calle Estafeta y el cinto amurallado renacentista de la Ciudadela.',
    culturalHighlight: 'Las Fiestas de San Fermín (UNESCO), Plaza del Castillo, Catedral de Santa María la Real y la Ciudadela',
    englishHighlight: 'World-famous San Fermín festival, Hemingway haunts & Renaissance citadel',
    iconicDish: 'Chistorra de Navarra a la brasa, espárragos blancos de Navarra D.O. y trucha a la navarra con jamón',
    languages: 'Castellano y Euskera',
    notableLandmark: 'Plaza del Castillo y Calle Estafeta',
    visitorTip: 'Tómate un café en el Café Iruña de la Plaza del Castillo, fundado en 1888 con lámparas de época y el rincón favorito de Hemingway.',
    spanishPhrase: {
      spanish: '«Un pintxo de chistorra caliente y un vino tinto de Navarra.»',
      english: 'A hot chistorra sausage pintxo and a Navarra red wine.',
      phonetic: 'oon PEEN-choh deh chees-TOH-rrah kah-LYEHN-teh ee oon VEE-noh TEEN-toh'
    },
    travelConnection: 'Tren Alvia directo con Madrid Atocha en 3 horas y con Barcelona Sants en 3h 45m.',
    officialLink: {
      label: 'Turismo de Pamplona',
      url: 'https://www.pamplona.es/turismo'
    },
    attractions: [
      {
        name: 'Plaza del Castillo',
        desc: 'El corazón cívico porticado de Pamplona donde se alzan el Café Iruña, el Casino Principal y el quiosco de música de piedra.',
        highlight: 'El «cuarto de estar» de los pamploneses'
      },
      {
        name: 'Calle Estafeta y Recorrido del Encierro',
        desc: 'Los 875 metros empedrados que recorren los mozos y los toros de lidia cada mañana del 7 al 14 de julio hasta el coso.',
        highlight: 'La curva de Mercaderes y el tramo recto de Estafeta'
      },
      {
        name: 'Catedral de Santa María la Real',
        desc: 'Templo con fachada neoclásica de Ventura Rodríguez que oculta un interior gótico sublime y el claustro del siglo XIV considerado cumbre europea.',
        highlight: 'Claustro gótico más refinado de España'
      }
    ],
    gallery: [
      {
        id: 'pam-1',
        title: 'Plaza del Castillo al Atardecer',
        subtitle: 'El salón urbano con sus terrazas de café, farolas y balconadas históricas',
        photoTag: 'PAMPLONA · PLAZA DEL CASTILLO',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Plaza del Castillo en Pamplona'
      },
      {
        id: 'pam-2',
        title: 'Calle Estafeta',
        subtitle: 'La estrecha calzada empedrada flanqueada por bares de pintxos y balcones de madera',
        photoTag: 'CALLE ESTAFETA · EL ENCIERRO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calle Estafeta en Pamplona'
      },
      {
        id: 'pam-3',
        title: 'Fachada del Ayuntamiento de Pamplona',
        subtitle: 'Fachada barroca-rococó con estatuas alegóricas desde donde se lanza el Chupinazo el 6 de julio',
        photoTag: 'AYUNTAMIENTO · EL CHUPINAZO',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Ayuntamiento de Pamplona'
      },
      {
        id: 'pam-4',
        title: 'Claustro Gótico de la Catedral',
        subtitle: 'Arcadas góticas con calados de filigrana y la Puerta del Precioso Engaño',
        photoTag: 'CATEDRAL DE SANTA MARÍA · CLAUSTRO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Claustro de la Catedral de Pamplona'
      },
      {
        id: 'pam-5',
        title: 'La Ciudadela y Murallas Renacentistas',
        subtitle: 'Fortaleza abaluartada pentagonal del siglo XVI rodeada de fosos verdes y arboledas',
        photoTag: 'LA CIUDADELA · FORTIFICACIÓN',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Ciudadela de Pamplona'
      },
      {
        id: 'pam-6',
        title: 'Paseo del Redín y Rincón del Caballo Blanco',
        subtitle: 'Baluarte sobre las murallas del río Arga con mesón tradicional y vistas a los Pirineos',
        photoTag: 'CABALLO BLANCO · MURALLAS',
        imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Rincón del Caballo Blanco en Pamplona'
      }
    ],
    secretSpots: [
      {
        id: 'olite',
        name: 'Palacio Real de Olite',
        distance: '42 km · 30 min',
        description: 'Castillo de cuento de hadas con torreones góticos de capricho mandado edificar por Carlos III el Noble de Navarra.',
        photoTag: 'CASTILLO GÓTICO · REYES DE NAVARRA',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'bardenas-reales',
        name: 'Parque Natural Bardenas Reales',
        distance: '95 km · 1h 10 min',
        description: 'Paisaje semidesértico con cerros testigos como Castildetierra esculpido por el viento y el agua.',
        photoTag: 'DESIERTO BLANCO · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Gran Hotel La Perla (hotel legendario fundado en 1881 donde se alojó Hemingway con balcones al encierro de Estafeta).',
      hotelZones: [
        { title: 'Plaza del Castillo', desc: 'El epicentro del tapeo de pintxos y cafés literarios.' },
        { title: 'Calle San Nicolás', desc: 'Ruta gastronómica de tabernas con solera navarra.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€70 – €155', usd: '$75 – $167', note: 'Habitación doble en hotel céntrico' },
        dining: { eur: '€24 – €48', usd: '$26 – $52', note: 'Pintxos navarros, chistorra y vino D.O. Navarra' },
        transit: { eur: '€4 – €8', usd: '$4 – $9', note: 'Casco histórico cómodo a pie' },
        total: { eur: '€98 – €211', usd: '$105 – $228' }
      }
    }
  },
  {
    id: 'logrono',
    name: 'Logroño',
    officialName: 'Comunidad Autónoma de La Rioja',
    capital: 'Logroño',
    region: 'La Rioja · Valle del Ebro',
    coordinates: [42.4667, -2.4500],
    badge: 'La Capital del Vino de Rioja',
    accentColor: '#881337',
    tagline: '«La legendaria Calle Laurel, el paso del Camino de Santiago por el Ebro y el templo de los vinos de Rioja»',
    photoTag: 'LOGROÑO · CONCATEDRAL DE LA REDONDA Y CALLE LAUREL',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Torres barrocas gemelas de la Concatedral de Santa María de la Redonda en Logroño',
    imageCaption: 'Las torres barrocas de la Concatedral de La Redonda en la Plaza del Mercado',
    intro: 'Capital de la prestigiosa región vinícola de Rioja y parada fundamental del Camino Francés a orillas del río Ebro. Logroño es mundialmente celebrada por la Calle Laurel —conocida popularmente como «La Senda de los Elefantes» porque quien la recorre sale con trompa y a cuatro patas— con más de sesenta bares contiguos donde cada barra sirve una única especialidad de pincho.',
    culturalHighlight: 'Calle Laurel y Calle San Juan, Concatedral de La Redonda, Puente de Piedra y las bodegas centenarias de Rioja',
    englishHighlight: 'Global wine capital, iconic Calle Laurel pintxo street & Camino de Santiago bridge',
    iconicDish: 'Patatas a la riojana con chorizo y pimentón, chuletillas al sarmiento y champiñones a la plancha de la Laurel',
    languages: 'Castellano',
    notableLandmark: 'Concatedral de La Redonda y Calle Laurel',
    visitorTip: 'En la Calle Laurel, pide el pincho estrella del Bar Soriano: tres champiñones a la plancha con gamba y salsa secreta servidos sobre una rebanadita de pan.',
    spanishPhrase: {
      spanish: '«Un vino de Rioja Crianza y un pincho de champiñones a la plancha.»',
      english: 'A Rioja Crianza wine and a grilled mushroom pincho.',
      phonetic: 'oon VEE-noh deh ree-OH-hah kree-AHN-thah ee oon PEEN-choh deh chahm-pee-NYOH-nehs'
    },
    travelConnection: 'Tren Alvia directo con Madrid Chamartín en 3h 15m y con Barcelona Sants en 4 horas.',
    officialLink: {
      label: 'Turismo de Logroño',
      url: 'https://www.visitalogrono.com'
    },
    attractions: [
      {
        name: 'Concatedral de Santa María de la Redonda',
        desc: 'Templo del siglo XVI con dos torres gemelas barrocas del siglo XVIII («las gemelas») y un lienzo del Calvario atribuido a Miguel Ángel.',
        highlight: 'Preside la animada Plaza del Mercado'
      },
      {
        name: 'Calle Laurel («La Senda de los Elefantes»)',
        desc: 'Mítica callejuela peatonal donde más de 60 bares ofrecen un bocado temático particular con un vino de Rioja.',
        highlight: 'La calle de tapas más concentrada y célebre del norte'
      },
      {
        name: 'Puente de Piedra sobre el Río Ebro',
        desc: 'Paso histórico por el que entran los peregrinos jacobeos a la ciudad, construido en 1884 sobre orígenes del siglo XI.',
        highlight: 'Símbolo del escudo municipal de Logroño'
      }
    ],
    gallery: [
      {
        id: 'log-1',
        title: 'Torres de la Concatedral de La Redonda',
        subtitle: 'Las torres gemelas barrocas de sillería dorada sobre las terrazas de la Plaza del Mercado',
        photoTag: 'LOGROÑO · LA REDONDA',
        imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Concatedral de La Redonda en Logroño'
      },
      {
        id: 'log-2',
        title: 'Ambiente en la Calle Laurel',
        subtitle: 'La bulliciosa calle empedrada repleta de viajeros disfrutando de pinchos y copas de vino',
        photoTag: 'CALLE LAUREL · PINCHOS DE RIOJA',
        imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Calle Laurel en Logroño'
      },
      {
        id: 'log-3',
        title: 'Puente de Piedra sobre el Ebro',
        subtitle: 'Los siete arcos de piedra reflejados en el río con el perfil del centro histórico al fondo',
        photoTag: 'PUENTE DE PIEDRA · CAMINO DE SANTIAGO',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Puente de Piedra de Logroño'
      },
      {
        id: 'log-4',
        title: 'Muralla del Revellín y Cubo',
        subtitle: 'El baluarte occidental de las murallas del siglo XVI que resistió el asedio francés de 1521',
        photoTag: 'MURO DEL REVELLÍN · SIGLO XVI',
        imageUrl: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Muralla del Revellín en Logroño'
      },
      {
        id: 'log-5',
        title: 'Paseo del Espolón',
        subtitle: 'Parque arbolado central con la estatua ecuestre del General Espartero y jardines florales',
        photoTag: 'PASEO DEL ESPOLÓN · CORAZÓN RIOJANO',
        imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Paseo del Espolón en Logroño'
      },
      {
        id: 'log-6',
        title: 'Bodegas de Rioja en el entorno',
        subtitle: 'Viñedos de uva tempranillo que rodean la ciudad y arquitectura de bodegas de vanguardia',
        photoTag: 'VIÑEDOS DE RIOJA · TEMPRANILLO',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
        imageAlt: 'Viñedos de Rioja en Logroño'
      }
    ],
    secretSpots: [
      {
        id: 'haro',
        name: 'Haro y el Barrio de la Estación',
        distance: '48 km · 35 min',
        description: 'La capital del Rioja Alta con la mayor concentración de bodegas centenarias del mundo en torno a la estación de tren.',
        photoTag: 'BARRIO DE LA ESTACIÓN · BODEGAS HISTÓRICAS',
        imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'san-millan-cogolla',
        name: 'Monasterios de San Millán de Yuso y Suso',
        distance: '42 km · 40 min',
        description: 'Cuna del idioma español declarada Patrimonio UNESCO donde se escribieron las primeras palabras en castellano (Glosas Emilianenses).',
        photoTag: 'CUNA DEL CASTELLANO · UNESCO',
        imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    travelDossier: {
      recommendedStays: 'El Hotel Calle Mayor (palacete del siglo XVI en el centro histórico) o el Hotel Marqués de Vallejo.',
      hotelZones: [
        { title: 'Entorno Calle Laurel', desc: 'A pasos de la meca del tapeo y la Plaza del Mercado.' },
        { title: 'Paseo del Espolón', desc: 'Bulevar ajardinado elegante y tranquilo en pleno centro.' }
      ],
      dailyBudget: {
        accommodation: { eur: '€60 – €130', usd: '$65 – $140', note: 'Habitación doble en hotel con encanto' },
        dining: { eur: '€20 – €40', usd: '$22 – $43', note: 'Pinchos variados y vino D.O.Ca. Rioja' },
        transit: { eur: '€3 – €8', usd: '$3 – $9', note: 'Ciudad 100% peatonal y caminable' },
        total: { eur: '€83 – €178', usd: '$90 – $192' }
      }
    }
  }
];
