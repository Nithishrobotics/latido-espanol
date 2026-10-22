export interface RegionData {
  id: string;
  name: string;
  officialName: string;
  capital: string;
  coordinates: [number, number]; // [lat, lng] for Leaflet
  culturalHighlight: string;
  englishHighlight: string;
  iconicDish: string;
  languages: string;
  notableLandmark: string;
  featuredCityId?: 'madrid' | 'barcelona' | 'sevilla' | 'granada';
  tagline: string;
  accentColor: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  photoTag: string;
  intro: string;
  visitorTip: string;
  spanishPhrase: {
    spanish: string;
    english: string;
    phonetic: string;
  };
}

export const SPAIN_REGIONS: RegionData[] = [
  {
    id: 'galicia',
    name: 'Galicia',
    officialName: 'Comunidade Autónoma de Galicia',
    capital: 'Santiago de Compostela',
    coordinates: [42.8805, -8.5456],
    culturalHighlight: 'Camino de Santiago, rías salvajes y mística herencia celta',
    englishHighlight: 'The Way of St. James, wild emerald fjords & rich Celtic heritage',
    iconicDish: 'Pulpo a la feira y empanada gallega',
    languages: 'Gallego y Castellano',
    notableLandmark: 'Catedral de Santiago de Compostela',
    tagline: 'Tierra de nieblas, océano atlántico y peregrinos',
    accentColor: '#0284C7',
    imageUrl: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Catedral de Santiago de Compostela en la Plaza del Obradoiro',
    imageCaption: 'Meta del Camino milenario, piedra dorada de granito y bruma atlántica',
    photoTag: 'SANTIAGO DE COMPOSTELA · PRAZA DO OBRADOIRO',
    intro: 'En el extremo noroccidental de la península, Galicia es un territorio esmeralda modelado por la lluvia, las rías serpenteantes y los acantilados atlánticos. Cuna de leyendas y punto final del Camino de Santiago.',
    visitorTip: 'Llega temprano a la Praza do Obradoiro para escuchar a los gaiteros tradicionales resonar bajo el arco del palacio.',
    spanishPhrase: {
      spanish: '¡Buen camino y que la lluvia no pare tu paso!',
      english: 'Have a good journey and may the rain not stop your stride!',
      phonetic: 'bwen kah-MEE-noh ee keh lah YOO-vyah noh PAH-reh too PAH-soh'
    }
  },
  {
    id: 'asturias',
    name: 'Asturias',
    officialName: 'Principado de Asturias',
    capital: 'Oviedo',
    coordinates: [43.3083, -5.0538],
    culturalHighlight: 'Picos de Europa, sidra escanciada y cuna de la Reconquista',
    englishHighlight: 'Picos de Europa peaks, natural cider pouring & royal sanctuaries',
    iconicDish: 'Fabada asturiana y queso Cabrales',
    languages: 'Castellano (y Asturiano / Bable)',
    notableLandmark: 'Santuario de Covadonga y Lagos de Enol',
    tagline: 'Paraíso natural de montañas escarpadas y costa brava',
    accentColor: '#16A34A',
    imageUrl: 'https://images.unsplash.com/photo-1579893902379-373d3ea67180?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Lagos de Covadonga en los Picos de Europa de Asturias',
    imageCaption: 'Paraíso verde de cumbres calizas, lagos glaciares y sidra centenaria',
    photoTag: 'PICOS DE EUROPA · LAGOS DE COVADONGA',
    intro: 'Asturias es un edén escarpado donde las cimas calizas de los Picos de Europa caen en picado hacia calas salvajes. El rito del escanciado de la sidra natural y el arte prerrománico definen su carácter.',
    visitorTip: 'Pide un «culín de sidra» en una sidrería tradicional y bébelo de un trago antes de que pierda el gas del golpe.',
    spanishPhrase: {
      spanish: '¡Échame un culín de sidra bien fresca, por favor!',
      english: 'Pour me a splash of fresh cider, please!',
      phonetic: 'EH-chah-meh oon koo-LEEN deh SEE-drah byen FREHS-kah'
    }
  },
  {
    id: 'cantabria',
    name: 'Cantabria',
    officialName: 'Comunidad Autónoma de Cantabria',
    capital: 'Santander',
    coordinates: [43.4623, -3.8099],
    culturalHighlight: 'Cueva de Altamira («Capilla Sixtina del arte rupestre») y bahía de Santander',
    englishHighlight: 'Prehistoric cave art of Altamira & elegant Belle Époque Santander bay',
    iconicDish: 'Cocido montañés y sobaos pasiegos',
    languages: 'Castellano',
    notableLandmark: 'Cueva de Altamira y Palacio de la Magdalena',
    tagline: 'Arte paleolítico milenario y valles verdes pasiegos',
    accentColor: '#0D9488',
    imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Península de la Magdalena en Santander Cantabria',
    imageCaption: 'Elegancia señorial cantábrica frente a la bahía y el arte paleolítico de Altamira',
    photoTag: 'SANTANDER · PALACIO DE LA MAGDALENA',
    intro: 'Abrazada por el mar Cantábrico y los valles pasiegos, Cantabria preserva en la cueva de Altamira la memoria artística más antigua de la humanidad, junto al señorío aristocrático de la bahía de Santander.',
    visitorTip: 'Pasea por el Sardinero al atardecer y degusta las anchoas del Cantábrico con pan crujiente y mantequilla pasiega.',
    spanishPhrase: {
      spanish: 'Las mejores anchoas del mundo se saborean frente al mar Cantábrico.',
      english: 'The best anchovies in the world are tasted facing the Cantabrian Sea.',
      phonetic: 'lahs meh-HOH-rehs ahn-CHOH-ahs dehl MOON-doh'
    }
  },
  {
    id: 'pais-vasco',
    name: 'País Vasco',
    officialName: 'Euskadi / País Vasco',
    capital: 'Vitoria-Gasteiz',
    coordinates: [43.2687, -2.9340],
    culturalHighlight: 'Guggenheim Bilbao, alta gastronomía de pintxos y milenario idioma euskera',
    englishHighlight: 'Guggenheim contemporary art, world-class pintxo taverns & ancient Basque language',
    iconicDish: 'Bacalao al pil-pil y pintxos donostiarras',
    languages: 'Euskera y Castellano',
    notableLandmark: 'Museo Guggenheim Bilbao y Bahía de La Concha',
    tagline: 'Vanguardia arquitectónica y la mayor densidad culinaria del continente',
    accentColor: '#DC2626',
    imageUrl: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Museo Guggenheim de titanio en Bilbao País Vasco',
    imageCaption: 'Vanguardia de titanio sobre la ría, templos de pintxos y la bahía de La Concha',
    photoTag: 'BILBAO · MUSEO GUGGENHEIM',
    intro: 'Euskadi combina el enigma de su idioma ancestral (euskera) con la audacia contemporánea de titanio del Museo Guggenheim y la bahía aristocrática de San Sebastián. Sus tabernas elevan el tapeo a la categoría de alta cocina.',
    visitorTip: 'En las tabernas de la Parte Vieja donostiarra, pide un «txakoli» servido en vaso alto escanciado desde lo alto.',
    spanishPhrase: {
      spanish: '¡Un txakoli bien frío y un pintxo de bacalao, por favor!',
      english: 'A cold txakoli wine and a cod pintxo, please!',
      phonetic: 'oon chah-koh-LEE byen FREE-oh ee oon PEEN-choh'
    }
  },
  {
    id: 'navarra',
    name: 'Navarra',
    officialName: 'Comunidad Foral de Navarra',
    capital: 'Pamplona / Iruña',
    coordinates: [42.4808, -1.6508],
    culturalHighlight: 'Fiestas de San Fermín, Pirineo navarro y palacios medievales de Olite',
    englishHighlight: 'World-famous San Fermín festival, Pyrenean passes & fairy-tale castles',
    iconicDish: 'Espárragos de Navarra y chistorra',
    languages: 'Castellano y Euskera',
    notableLandmark: 'Palacio Real de Olite y Plaza del Castillo',
    tagline: 'Antiguo reino pirenaico de reyes, viñedos y desiertos de Bardenas',
    accentColor: '#B91C1C',
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Palacio Real de los Reyes de Navarra en Olite',
    imageCaption: 'El viejo reino pirenaico: torres de cuento de hadas, Bardenas y San Fermín',
    photoTag: 'OLITE · PALACIO REAL MEDIEVAL',
    intro: 'Reino histórico que enlaza las cumbres alpinas de los Pirineos con el paisaje lunar de las Bardenas Reales. Pamplona respira historia medieval y la emoción universal de los encierros de San Fermín.',
    visitorTip: 'Toma un café en el mítico Café Iruña de la Plaza del Castillo, rincón predilecto de Ernest Hemingway.',
    spanishPhrase: {
      spanish: '¡Viva San Fermín y la alegría de este viejo reino!',
      english: 'Long live San Fermín and the joy of this old kingdom!',
      phonetic: 'VEE-vah sahn fehr-MEEN ee lah ah-leh-GREE-ah'
    }
  },
  {
    id: 'la-rioja',
    name: 'La Rioja',
    officialName: 'Comunidad Autónoma de La Rioja',
    capital: 'Logroño',
    coordinates: [42.4658, -2.4499],
    culturalHighlight: 'Cultura vinícola DOCa y Monasterios de San Millán de la Cogolla',
    englishHighlight: 'World-renowned Rioja DOCa wine culture & cradle of written Spanish language',
    iconicDish: 'Patatas a la riojana y chuletillas al sarmiento',
    languages: 'Castellano (Cuna del español escrito en Yuso y Suso)',
    notableLandmark: 'Monasterios de San Millán de la Cogolla (UNESCO)',
    tagline: 'Tierras de viñedos centenarios, barricas de roble y la calle Laurel',
    accentColor: '#991B1B',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Viñedos de La Rioja al atardecer entre colinas',
    imageCaption: 'Colinas de vides doradas, barricas de roble y la cuna monástica del castellano',
    photoTag: 'HARO · CAPITAL DEL VINO RIOJA',
    intro: 'La Rioja es sinónimo de vino de clase mundial y cuna de la lengua española: en los monasterios de San Millán se escribieron las primeras palabras en romance castellano.',
    visitorTip: 'Recorre la Calle Laurel en Logroño al atardecer: cada barra se especializa en un único y memorable bocado.',
    spanishPhrase: {
      spanish: 'Un vino de crianza y una tapa de champiñones a la plancha.',
      english: 'An oak-aged wine and grilled mushrooms tapa.',
      phonetic: 'oon VEE-noh deh kree-AHN-sah'
    }
  },
  {
    id: 'aragon',
    name: 'Aragón',
    officialName: 'Comunidad Autónoma de Aragón',
    capital: 'Zaragoza',
    coordinates: [41.6567, -0.8785],
    culturalHighlight: 'Arte mudéjar aragonés (UNESCO), Basílica del Pilar y cañones de Ordesa',
    englishHighlight: 'Mudéjar decorative brick architecture, grand Basilica del Pilar & Pyrenean gorges',
    iconicDish: 'Ternasco de Aragón y jamón de Teruel',
    languages: 'Castellano (y Aragonés)',
    notableLandmark: 'Basílica de Nuestra Señora del Pilar y Castillo de Loarre',
    tagline: 'Cuna de la Corona de Aragón, cumbres alpinas y torres mudéjares',
    accentColor: '#EA580C',
    imageUrl: 'https://images.unsplash.com/photo-1596484552993-3d01931818d6?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Basílica del Pilar y puente de piedra sobre el Ebro en Zaragoza',
    imageCaption: 'Majestad barroca reflejada en el Ebro, filigrana mudéjar y cañones de Ordesa',
    photoTag: 'ZARAGOZA · BASÍLICA DEL PILAR',
    intro: 'Forja de reyes y coronas, Aragón custodia las cumbres más altas de los Pirineos (Aneto, Monte Perdido) y el fulgor monumental de la Basílica del Pilar frente a las aguas del Ebro.',
    visitorTip: 'Sube a la torre mirador de la Basílica del Pilar para contemplar una vista de 360 grados de Zaragoza.',
    spanishPhrase: {
      spanish: 'El Pilar y el Ebro son el corazón invicto de Aragón.',
      english: 'The Pilar and the Ebro are the undefeated heart of Aragon.',
      phonetic: 'ehl pee-LAHR ee ehl EH-broh sohn ehl koh-rah-SOHN'
    }
  },
  {
    id: 'cataluna',
    name: 'Cataluña',
    officialName: 'Catalunya / Cataluña',
    capital: 'Barcelona',
    coordinates: [41.4036, 2.1744],
    culturalHighlight: 'Modernismo de Antoni Gaudí, Costa Brava, rica identidad catalana y mar y montaña',
    englishHighlight: 'Antoni Gaudí modernisme masterpieces, Costa Brava coves & distinct Catalan identity',
    iconicDish: 'Pa amb tomàquet, escalivada y crema catalana',
    languages: 'Catalán, Castellano y Aranés',
    notableLandmark: 'Basílica de la Sagrada Família y Park Güell',
    featuredCityId: 'barcelona',
    tagline: 'Vanguardia cosmopolita, arte de Miró y Dalí, y costa mediterránea',
    accentColor: '#1D4ED8',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Basílica de la Sagrada Família en Barcelona',
    imageCaption: 'Vanguardia modernista de Gaudí, calas de la Costa Brava y brisa del Mediterráneo',
    photoTag: 'BARCELONA · SAGRADA FAMÍLIA',
    intro: 'Faro cultural y vanguardista del Mediterráneo. De los pináculos fantásticos de la Sagrada Família a los acantilados de Cadaqués que inspiraron a Salvador Dalí, Cataluña deslumbra con su propia lengua y estética.',
    visitorTip: 'Reserva tus entradas a la Sagrada Família con antelación para ver cómo los rayos del sol atraviesan las vidrieras.',
    spanishPhrase: {
      spanish: '¡Una rebanada de pan con tomate y jamón ibérico, por favor!',
      english: 'A slice of bread with tomato and Iberian ham, please!',
      phonetic: 'OO-nah rreh-bah-NAH-dah deh pahn kohn toh-MAH-teh'
    }
  },
  {
    id: 'castilla-y-leon',
    name: 'Castilla y León',
    officialName: 'Comunidad de Castilla y León',
    capital: 'Valladolid',
    coordinates: [40.9481, -4.1184],
    culturalHighlight: 'Acueducto romano de Segovia, murallas de Ávila, Universidad de Salamanca y catedrales góticas',
    englishHighlight: 'Segovia Roman aqueduct, Ávila medieval stone walls & grand Gothic cathedrals',
    iconicDish: 'Cochinillo asado de Segovia y lechazo churro',
    languages: 'Castellano',
    notableLandmark: 'Acueducto de Segovia y Catedral de Burgos',
    tagline: 'La mayor concentración de fortalezas medievales y patrimonio histórico de Europa',
    accentColor: '#78350F',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Acueducto romano de Segovia bajo cielo despejado',
    imageCaption: 'La mayor concentración de fortalezas medievales, piedras romanas y mesetas doradas',
    photoTag: 'SEGOVIA · ACUEDUCTO ROMANO BIMILENARIO',
    intro: 'La gran meseta del Duero es el corazón heráldico de Castilla: cuna de reyes, universidades centenarias como Salamanca y maravillas de ingeniería bimilenaria como el acueducto de Segovia.',
    visitorTip: 'En Segovia, admira cómo el acueducto romano se mantiene en pie desde hace dos mil años sin una sola gota de argamasa.',
    spanishPhrase: {
      spanish: 'Castilla custodia la cuna de los reinos y las fortalezas de piedra.',
      english: 'Castile guards the cradle of kingdoms and stone fortresses.',
      phonetic: 'kahs-TEE-yah koos-TOH-dyah lah KOO-nah'
    }
  },
  {
    id: 'madrid',
    name: 'Madrid',
    officialName: 'Comunidad de Madrid',
    capital: 'Madrid',
    coordinates: [40.4168, -3.7038],
    culturalHighlight: 'Museo Nacional del Prado, Palacio Real, vida castiza y plazas porticadas',
    englishHighlight: 'The Golden Triangle of Art, grand Royal Palace, Habsburg squares & vibrant tapas alleys',
    iconicDish: 'Cocido madrileño y bocadillo de calamares',
    languages: 'Castellano',
    notableLandmark: 'Museo del Prado y Plaza Mayor',
    featuredCityId: 'madrid',
    tagline: 'Capital cultural donde conviven reyes históricos, museos universales y terrazas infinitas',
    accentColor: '#A51E2D',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Gran Vía y Edificio Metrópolis en Madrid',
    imageCaption: 'Bulevares dorados, tabernas castizas centenarias y museos de la monarquía',
    photoTag: 'MADRID · GRAN VÍA Y TRIÁNGULO DEL ARTE',
    intro: 'Epicentro enérgico y hospitalario de España. Madrid aúna la cumbre pictórica universal en el Triángulo del Arte (Prado, Reina Sofía, Thyssen) con la vitalidad nocturna de sus bulevares dorados.',
    visitorTip: 'Pasea por el Barrio de las Letras antes de entrar al Museo del Prado y tómate un vermú de grifo en la Plaza de Santa Ana.',
    spanishPhrase: {
      spanish: '¡De Madrid al cielo, y un agujerito para verlo!',
      english: 'From Madrid to heaven, and a little peephole to see it!',
      phonetic: 'deh mah-DREED ahl SYEH-loh, ee oon ah-goo-heh-REE-toh'
    }
  },
  {
    id: 'castilla-la-mancha',
    name: 'Castilla-La Mancha',
    officialName: 'Comunidad de Castilla-La Mancha',
    capital: 'Toledo',
    coordinates: [39.8628, -4.0273],
    culturalHighlight: 'Ruta de Don Quijote, molinos de viento de Consuegra y la ciudad imperial de Toledo',
    englishHighlight: 'Don Quixote windmills, Cervantes landscapes & the UNESCO Three Cultures city of Toledo',
    iconicDish: 'Queso manchego artesanal y pisto manchego',
    languages: 'Castellano',
    notableLandmark: 'Casco histórico de Toledo y Molinos de Consuegra',
    tagline: 'Llanuras doradas de molinos, leyendas quijotescas y espadas toledanas',
    accentColor: '#D97706',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Panorámica de la ciudad histórica de Toledo sobre el río Tajo',
    imageCaption: 'Espadas toledanas, murallas sobre el Tajo y la ruta quijotesca de los molinos',
    photoTag: 'TOLEDO · CIUDAD DE LAS TRES CULTURAS',
    intro: 'Tierra mítica de Don Quijote y Sancho Panza. En lo alto de su peñón rocoso sobre el Tajo, la ciudad imperial de Toledo encarna el encuentro histórico armónico de las culturas cristiana, judía y musulmana.',
    visitorTip: 'Cruza el Puente de San Martín al atardecer para ver las murallas de Toledo brillar como oro viejo.',
    spanishPhrase: {
      spanish: 'Toledo encierra en sus callejuelas el alma de tres culturas.',
      english: 'Toledo holds in its narrow streets the soul of three cultures.',
      phonetic: 'toh-LEH-doh ehn-SYEH-rrah ehn soos kah-yeh-HOO-eh-lahs'
    }
  },
  {
    id: 'comunitat-valenciana',
    name: 'C. Valenciana',
    officialName: 'Comunitat Valenciana',
    capital: 'Valencia',
    coordinates: [39.4536, -0.3524],
    culturalHighlight: 'Las Fallas de fuego (UNESCO), cuna de la paella con arroz de la Albufera y playas cálidas',
    englishHighlight: 'Las Fallas fire sculptures, birthplace of authentic paella & sunlit Mediterranean beaches',
    iconicDish: 'Paella valenciana tradicional y horchata de chufa',
    languages: 'Valenciano / Catalán y Castellano',
    notableLandmark: 'Ciudad de las Artes y las Ciencias y Lonja de la Seda',
    tagline: 'Luz mediterránea, aromas de azahar, fuegos artificiales y arrozales de la Albufera',
    accentColor: '#F59E0B',
    imageUrl: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Complejo de la Ciudad de las Artes y las Ciencias en Valencia',
    imageCaption: 'Futurismo mediterráneo, fuego purificador de las Fallas y la cuna del arroz',
    photoTag: 'VALENCIA · CIUDAD DE LAS ARTES Y LAS CIENCIAS',
    intro: 'Bañada por una luz dorada infinita, Valencia es hogar del fuego purificador de las Fallas y cuna del plato más universal de España: la paella, cocinada a leña con azafrán y arroz bomba de la Albufera.',
    visitorTip: 'Degusta una horchata helada de chufa con «fartons» tiernos en una terraza histórica de la Plaza de la Virgen.',
    spanishPhrase: {
      spanish: 'La verdadera paella se cocina a fuego lento con arroz de la Albufera.',
      english: 'True paella is cooked over a slow fire with Albufera rice.',
      phonetic: 'lah vehr-dah-DEH-rah pah-EH-yah seh koh-SEE-nah'
    }
  },
  {
    id: 'islas-baleares',
    name: 'Islas Baleares',
    officialName: 'Illes Balears',
    capital: 'Palma de Mallorca',
    coordinates: [39.5696, 2.6502],
    culturalHighlight: 'Calas turquesas vírgenes, arquitectura talayótica de piedra y la Sierra de Tramuntana',
    englishHighlight: 'Crystal turquoise coves, UNESCO Tramuntana mountains & bohemian Mediterranean spirit',
    iconicDish: 'Ensaimada mallorquina y sobrasada',
    languages: 'Catalán y Castellano',
    notableLandmark: 'Catedral de Santa María de Palma (La Seu)',
    tagline: 'Archipiélago paradisíaco de calas de ensueño, salinas y pueblos blancos de piedra',
    accentColor: '#0284C7',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Cala de aguas turquesas en las Islas Baleares',
    imageCaption: 'Aguas turquesas transparentes, salinas romanas y la Sierra de Tramuntana',
    photoTag: 'MALLORCA · CALAS VÍRGENES DEL MEDITERRÁNEO',
    intro: 'Mallorca, Menorca, Ibiza y Formentera forman un archipiélago de aguas transparentes, pueblos de piedra seca y puertos de pescadores donde el tiempo se detiene bajo el murmullo de las olas.',
    visitorTip: 'Conduce por la carretera panorámica de la Sierra de Tramuntana hasta el mirador de Formentor.',
    spanishPhrase: {
      spanish: 'El Mediterráneo revela su tono más puro en las calas baleares.',
      english: 'The Mediterranean reveals its purest hue in the Balearic coves.',
      phonetic: 'ehl meh-dee-tehr-RAH-neh-oh rreh-VEH-lah soo TOH-noh'
    }
  },
  {
    id: 'extremadura',
    name: 'Extremadura',
    officialName: 'Comunidad Autónoma de Extremadura',
    capital: 'Mérida',
    coordinates: [38.9161, -6.3437],
    culturalHighlight: 'Teatro romano de Mérida (Emérita Augusta), dehesas de cerdo ibérico y monasterio de Guadalupe',
    englishHighlight: 'Grand Roman theatre of Mérida, oak dehesas of Iberian acorn ham & medieval Guadalupe',
    iconicDish: 'Jamón ibérico de bellota Dehesa de Extremadura',
    languages: 'Castellano',
    notableLandmark: 'Teatro Romano de Mérida (UNESCO)',
    tagline: 'Santuario de águilas imperiales, encinas milenarias y piedras romanas intactas',
    accentColor: '#4D7C0F',
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Escenario de mármol del Teatro Romano de Mérida',
    imageCaption: 'Columnas corintias vivas, dehesas infinitas de encinas y el mejor jamón ibérico',
    photoTag: 'MÉRIDA · TEATRO ROMANO DE EMÉRITA AUGUSTA',
    intro: 'Extremadura es uno de los secretos mejor preservados de Europa: una tierra monumental donde las columnas romanas de Mérida cobran vida cada verano en su festival de teatro clásico y las dehesas alimentan a los cerdos ibéricos.',
    visitorTip: 'Asiste a una representación nocturna en el Teatro Romano de Mérida bajo el cielo estrellado extremeño.',
    spanishPhrase: {
      spanish: 'Piedras de Roma que aún laten en el corazón de Extremadura.',
      english: 'Stones of Rome that still beat in the heart of Extremadura.',
      phonetic: 'PYEH-drahs deh RROH-mah keh ah-OON LAH-tehn'
    }
  },
  {
    id: 'andalucia',
    name: 'Andalucía',
    officialName: 'Comunidad Autónoma de Andalucía',
    capital: 'Sevilla',
    coordinates: [37.3772, -5.9869],
    culturalHighlight: 'La Alhambra nazarí, Real Alcázar, Mezquita de Córdoba, cuna del flamenco y pueblos blancos',
    englishHighlight: 'Moorish Alhambra, Córdoba Great Mosque, soulful flamenco dance & orange-blossom patios',
    iconicDish: 'Gazpacho andaluz, salmorejo cordobés y pescaíto frito',
    languages: 'Castellano (con dialectos andaluces de rica musicalidad)',
    notableLandmark: 'La Alhambra de Granada y Real Alcázar de Sevilla',
    featuredCityId: 'sevilla',
    tagline: 'El alma passionately andaluza: azahares, guitarras, palacios moriscos y luz dorada',
    accentColor: '#BA6649',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Plaza de España de Sevilla al atardecer',
    imageCaption: 'Arquerías mudéjares, azahar en los patios, cuna del flamenco y la Alhambra',
    photoTag: 'SEVILLA · PLAZA DE ESPAÑA',
    intro: 'Crisol civilizatorio del sur peninsular. Andalucía destila la magia mudéjar de Sevilla, los palacios rojos de Granada bajo Sierra Nevada, el bosque de arcos de la Mezquita de Córdoba y el duende flamenco.',
    visitorTip: 'Pasea por el laberinto de cal y flores del Barrio de Santa Cruz en Sevilla cuando las campanas de la Giralda tocan al atardecer.',
    spanishPhrase: {
      spanish: '¡El duende no se explica, se siente en las venas de Andalucía!',
      english: 'Duende cannot be explained, it is felt in the veins of Andalusia!',
      phonetic: 'ehl DWEHN-deh noh seh ehks-PLEE-kah'
    }
  },
  {
    id: 'region-de-murcia',
    name: 'Murcia',
    officialName: 'Región de Murcia',
    capital: 'Murcia',
    coordinates: [37.6000, -0.9833],
    culturalHighlight: 'La Huerta de Europa, Mar Menor con aguas termales y teatro romano de Cartagena',
    englishHighlight: 'The fertile garden of Europe, warm Mar Menor saltwater lagoon & Cartagena Roman theater',
    iconicDish: 'Caldero del Mar Menor y zarangollo murciano',
    languages: 'Castellano',
    notableLandmark: 'Teatro Romano de Cartagena y Catedral de Murcia',
    tagline: 'Más de 300 días de sol al año entre huertas fértiles y dos mares',
    accentColor: '#E11D48',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Teatro Romano y bahía histórica de Cartagena en Murcia',
    imageCaption: 'Dos mares, más de 300 días de sol, huertas fértiles y murallas púnicas',
    photoTag: 'CARTAGENA · PUERTO Y TEATRO ROMANO',
    intro: 'Encrucijada marina bañada por el Mediterráneo y el Mar Menor. Cartagena atesora murallas púnicas y un grandioso teatro romano descubierto en el casco histórico, mientras la huerta regala verduras de calidad insuperable.',
    visitorTip: 'Pide un arroz al caldero cocinado con mújol y ñoras en un restaurante frente al puerto de Cabo de Palos.',
    spanishPhrase: {
      spanish: 'El sol brilla todo el año sobre las aguas cálidas de Murcia.',
      english: 'The sun shines all year over the warm waters of Murcia.',
      phonetic: 'ehl SOHL BREE-yah TOH-doh ehl AH-nyoh'
    }
  },
  {
    id: 'canarias',
    name: 'Islas Canarias',
    officialName: 'Comunidad Autónoma de Canarias',
    capital: 'Santa Cruz de Tenerife / Las Palmas de G.C.',
    coordinates: [28.2723, -16.6425],
    culturalHighlight: 'Parque Nacional del Teide (el pico más alto de España), volcanes de Timanfaya y carnavales',
    englishHighlight: 'Mount Teide volcanic peak, lunar landscapes of Lanzarote & subtropical carnival rhythms',
    iconicDish: 'Papas arrugadas con mojo picón y gofio',
    languages: 'Castellano (con acento atlántico canario)',
    notableLandmark: 'Parque Nacional del Teide (UNESCO)',
    tagline: 'Ocho islas afortunadas de clima primaveral eterno y volcanes sobre el Atlántico',
    accentColor: '#7C3AED',
    imageUrl: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Volcán del Teide alzándose sobre el mar de nubes en Tenerife',
    imageCaption: 'El pico volcánico más alto de España, mares de nubes y clima primaveral eterno',
    photoTag: 'TENERIFE · PARQUE NACIONAL DEL TEIDE',
    intro: 'Archipiélago volcánico en medio del océano Atlántico. El Teide, coloso de 3.718 metros, corona un mosaico de islas de arena negra, laurisilva milenaria y hospitalidad subtropical.',
    visitorTip: 'Sube al teleférico del Teide para contemplar el mar de nubes extendiéndose hacia el horizonte marino.',
    spanishPhrase: {
      spanish: '¡Unas papas arrugadas con mojo picón bien sabroso!',
      english: 'Some wrinkled potatoes with tasty spicy mojo sauce!',
      phonetic: 'OO-nahs PAH-pahs ah-rroo-GAH-dahs kohn MOH-hoh'
    }
  }
];
