export interface DictionaryEntry {
  spanish: string;
  translation: string;
  meaning: string;
  partOfSpeech: string;
  pronunciation: string;
  category: 'Comida' | 'Saludos' | 'Viajes' | 'Cultura' | 'Gramática' | 'Lugares' | 'Expresiones';
  culturalNote?: string;
  translations?: Record<string, string>;
  exampleSentence?: {
    spanish: string;
    english: string;
  };
}

export const SPANISH_DICTIONARY: Record<string, DictionaryEntry> = {
  // GREETINGS & COURTESY
  'hola': {
    spanish: 'Hola',
    translation: 'Hello / Hi',
    meaning: 'The universal and friendly Spanish greeting used at any time of day.',
    partOfSpeech: 'Interjection',
    pronunciation: 'OH-lah',
    category: 'Saludos',
    culturalNote: 'Friendly and informal; accompanied in Spain by a warm smile and often two cheek kisses among acquaintances.',
    exampleSentence: { spanish: '¡Hola! ¿Cómo estás hoy?', english: 'Hello! How are you today?' }
  },
  'buenos dias': {
    spanish: 'Buenos días',
    translation: 'Good morning',
    meaning: 'Formal and polite morning greeting, commonly used until lunchtime (around 2:00 PM in Spain).',
    partOfSpeech: 'Greeting phrase',
    pronunciation: 'BWEH-nos DEE-ahs',
    category: 'Saludos',
    culturalNote: 'Because lunch in Spain is eaten late (between 2:00 and 4:00 PM), "buenos días" is used well into the early afternoon.',
    exampleSentence: { spanish: 'Buenos días, un café con leche por favor.', english: 'Good morning, a coffee with milk please.' }
  },
  'buenas tardes': {
    spanish: 'Buenas tardes',
    translation: 'Good afternoon / Good evening',
    meaning: 'Polite greeting used from after lunch (around 2:00 PM or 3:00 PM) until sunset/nightfall.',
    partOfSpeech: 'Greeting phrase',
    pronunciation: 'BWEH-nas TAR-des',
    category: 'Saludos',
    culturalNote: 'Covers the vibrant Spanish late afternoon and evening paseo (evening stroll) hours.',
    exampleSentence: { spanish: 'Buenas tardes a todos los presentes.', english: 'Good afternoon to everyone here.' }
  },
  'buenas noches': {
    spanish: 'Buenas noches',
    translation: 'Good evening / Good night',
    meaning: 'Used both as a greeting after dark and as a parting farewell before bedtime.',
    partOfSpeech: 'Greeting phrase',
    pronunciation: 'BWEH-nas NOH-ches',
    category: 'Saludos',
    culturalNote: 'Spaniards typically dine late (9:00 PM to 11:00 PM), so this is very commonly heard in lively restaurants at night.',
    exampleSentence: { spanish: 'Buenas noches y que descanses.', english: 'Good night and sleep well.' }
  },
  'por favor': {
    spanish: 'Por favor',
    translation: 'Please',
    meaning: 'Essential polite courtesy marker added to requests and orders.',
    partOfSpeech: 'Adverbial phrase',
    pronunciation: 'por fah-VOR',
    category: 'Saludos',
    culturalNote: 'Always appreciated when asking for directions or ordering at bars and tapas counters.',
    exampleSentence: { spanish: 'Una caña y unas patatas bravas, por favor.', english: 'A draft beer and patatas bravas, please.' }
  },
  'muchas gracias': {
    spanish: 'Muchas gracias',
    translation: 'Thank you very much',
    meaning: 'Warm and sincere expression of gratitude.',
    partOfSpeech: 'Courtesy phrase',
    pronunciation: 'MOO-chas GRAH-syas',
    category: 'Saludos',
    culturalNote: 'Standard polite gratitude across all Spanish-speaking regions.',
    exampleSentence: { spanish: 'Muchas gracias por la excelente recomendación.', english: 'Thank you very much for the excellent recommendation.' }
  },
  'gracias': {
    spanish: 'Gracias',
    translation: 'Thank you / Thanks',
    meaning: 'Everyday expression of appreciation.',
    partOfSpeech: 'Interjection',
    pronunciation: 'GRAH-syas (GRAH-thyas in Spain)',
    category: 'Saludos',
    culturalNote: 'In standard Castilian Spanish (es-ES), the "c" before "i" is pronounced with a voiceless "th" sound (/θ/).',
    exampleSentence: { spanish: 'Gracias por tu ayuda.', english: 'Thanks for your help.' }
  },
  'de nada': {
    spanish: 'De nada',
    translation: "You're welcome / Don't mention it",
    meaning: 'Standard gracious response to "gracias". Literally "it is of nothing".',
    partOfSpeech: 'Courtesy phrase',
    pronunciation: 'deh NAH-dah',
    category: 'Saludos',
    exampleSentence: { spanish: '—Muchas gracias. —¡De nada!', english: '—Thank you very much. —You are welcome!' }
  },
  'buen provecho': {
    spanish: '¡Buen provecho!',
    translation: 'Enjoy your meal! / Bon appétit!',
    meaning: 'Courteous blessing wishing someone delight in their food, often said when passing diners in a tavern.',
    partOfSpeech: 'Interjection phrase',
    pronunciation: 'bwen proh-VEH-choh',
    category: 'Comida',
    culturalNote: 'In Spain, even strangers entering or leaving a bar or restaurant dining area will politely say "¡Que aproveche!" or "¡Buen provecho!" to adjacent tables.',
    exampleSentence: { spanish: '¡Buen provecho a toda la mesa!', english: 'Enjoy your meal, everyone at the table!' }
  },
  'que aproveche': {
    spanish: '¡Que aproveche!',
    translation: 'Enjoy your meal! / Bon appétit!',
    meaning: 'The very authentic, conversational Castilian way to say enjoy your food.',
    partOfSpeech: 'Subjunctive phrase',
    pronunciation: 'keh ah-proh-VEH-cheh',
    category: 'Comida',
    culturalNote: 'Short for "Que les aproveche la comida". Super common in Spanish bars.',
    exampleSentence: { spanish: 'Aquí tienen la paella, ¡que aproveche!', english: 'Here is your paella, enjoy your meal!' }
  },

  // CULINARY & DRINK TERMS
  'sobremesa': {
    spanish: 'Sobremesa',
    translation: 'Table conversation / Lingering after meal',
    meaning: 'The cherished Spanish cultural tradition of relaxing at the table talking and laughing long after dessert and coffee are finished.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'soh-breh-MEH-sah',
    category: 'Cultura',
    culturalNote: 'Considered an art form in Spain. Lunch in Spain is never rushed; the sobremesa can comfortably last for 1 to 2 hours with family and friends.',
    exampleSentence: { spanish: 'Disfrutamos de una larga sobremesa con café y orujo.', english: 'We enjoyed a long post-lunch chat over coffee and digestifs.' }
  },
  'tapas': {
    spanish: 'Tapas',
    translation: 'Small savory dishes / Bar snacks',
    meaning: 'Small appetizers or shared savory plates served with drinks in Spanish bars and tabernas.',
    partOfSpeech: 'Noun (plural feminine)',
    pronunciation: 'TAH-pas',
    category: 'Comida',
    culturalNote: 'Legend says the tradition originated from placing a slice of bread or ham "on top" (tapa) of a wine goblet to keep dust and fruit flies out. In Granada, tapas are still complimentary with each drink!',
    exampleSentence: { spanish: 'Vamos a pedir tres tapas variadas para compartir.', english: 'Let us order three varied tapas to share.' }
  },
  'tapeo': {
    spanish: 'El Tapeo / Ir de tapas',
    translation: 'Going for tapas / Tapas hopping crawl',
    meaning: 'The social ritual of hopping from bar to bar enjoying a drink and a small specialty tapa at each stop.',
    partOfSpeech: 'Noun (masculine) / Cultural ritual',
    pronunciation: 'tah-PEH-oh',
    category: 'Comida',
    culturalNote: 'A way of life in Spain. You rarely stay in one tavern all evening; you drift with friends through the historic quarter.',
    exampleSentence: { spanish: 'El tapeo por el barrio de La Latina es legendario.', english: 'Tapas bar hopping through the La Latina neighborhood is legendary.' }
  },
  'cana': {
    spanish: 'Caña',
    translation: 'Small draft beer (approx. 200ml)',
    meaning: 'A freshly pulled small glass of draft beer with a thick, frothy head.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'KAH-nyah',
    category: 'Comida',
    culturalNote: 'The standard serving size in Spanish bars, poured small so it stays icy cold until the last sip under the Mediterranean sun.',
    exampleSentence: { spanish: 'Camarero, una caña bien fría, por favor.', english: 'Bartender, an ice-cold draft beer, please.' }
  },
  'tortilla de patatas': {
    spanish: 'Tortilla de patatas',
    translation: 'Spanish potato omelette',
    meaning: 'The quintessential national dish made of eggs, thinly sliced potatoes slowly confited in olive oil, and (traditionally debated) caramelized onions.',
    partOfSpeech: 'Culinary noun',
    pronunciation: 'tor-TEE-yah deh pah-TAH-tas',
    category: 'Comida',
    culturalNote: 'The eternal national debate: "con cebolla" (with onion) or "sin cebolla" (without onion). Served warm or room temperature, often slightly runny in the center (jugosa).',
    exampleSentence: { spanish: 'La tortilla de patatas con cebolla es mi favorita.', english: 'The Spanish potato omelette with onion is my favorite.' }
  },
  'jamon iberico': {
    spanish: 'Jamón ibérico',
    translation: 'Iberian cured ham',
    meaning: 'World-renowned dry-cured ham made from black Iberian pigs roaming oak pastures and fattened on sweet acorns (bellotas).',
    partOfSpeech: 'Culinary noun',
    pronunciation: 'hah-MON ee-BEH-ree-koh',
    category: 'Comida',
    culturalNote: 'The premier grade is "Jamón 100% Ibérico de Bellota" (distinguished by a black seal), cured naturally in mountain air for up to 48 months.',
    exampleSentence: { spanish: 'Un plato de jamón ibérico recién cortado a cuchillo.', english: 'A plate of Iberian ham freshly carved with a knife.' }
  },
  'paella valenciana': {
    spanish: 'Paella valenciana',
    translation: 'Traditional Valencian paella',
    meaning: 'Spain’s premier rice dish hailing from Valencia, traditionally made with rabbit, chicken, green beans (bajoqueta), lima beans (garrofó), rosemary, and saffron.',
    partOfSpeech: 'Culinary noun',
    pronunciation: 'pah-EH-yah vah-len-SYAH-nah',
    category: 'Comida',
    culturalNote: 'True Valencians eat paella at lunchtime, cooked over orange-wood fire, and celebrate the crunchy caramelized rice layer at the bottom known as "socarrat".',
    exampleSentence: { spanish: 'La auténtica paella valenciana nunca lleva chorizo ni mariscos mezclados.', english: 'Authentic Valencian paella never contains chorizo or mixed seafood.' }
  },
  'gazpacho': {
    spanish: 'Gazpacho andaluz',
    translation: 'Cold Andalusian tomato soup',
    meaning: 'Refreshing chilled soup of ripe vine tomatoes, cucumber, bell pepper, garlic, crusty bread, sherry vinegar, and extra virgin olive oil.',
    partOfSpeech: 'Culinary noun',
    pronunciation: 'gath-PAH-choh ahn-dah-LOOTH',
    category: 'Comida',
    culturalNote: 'Born in the scorching heat of southern Spain (Andalucía) as an energizing, hydrating farmer’s lunch.',
    exampleSentence: { spanish: 'En verano, no hay nada mejor que un vaso de gazpacho frío.', english: 'In summer, there is nothing better than a cold glass of gazpacho.' }
  },
  'churros con chocolate': {
    spanish: 'Churros con chocolate',
    translation: 'Fried dough pastries with thick dipping chocolate',
    meaning: 'Crisp, golden fluted fried dough served with a cup of molten, pudding-thick dark dipping chocolate.',
    partOfSpeech: 'Culinary noun',
    pronunciation: 'CHOO-rros kon choh-koh-LAH-teh',
    category: 'Comida',
    culturalNote: 'The classic Spanish breakfast or late-night fiesta treat, famously served at Madrid’s historic Chocolatería San Ginés founded in 1894.',
    exampleSentence: { spanish: 'Desayunamos churros con chocolate caliente en San Ginés.', english: 'We had churros with hot chocolate for breakfast at San Ginés.' }
  },
  'patatas bravas': {
    spanish: 'Patatas bravas',
    translation: 'Spicy fried potato cubes',
    meaning: 'Crispy fried potato wedges smothered in a savory, smoky red sauce spiced with pimentón de la Vera paprika.',
    partOfSpeech: 'Culinary noun',
    pronunciation: 'pah-TAH-tas BRAH-vas',
    category: 'Comida',
    culturalNote: 'One of the most widely ordered tapas across all of Spain. In Madrid the sauce is made with roux, broth, and hot paprika (no tomatoes); in Barcelona it often pairs with alioli.',
    exampleSentence: { spanish: 'Las bravas aquí tienen una salsa picante deliciosa.', english: 'The bravas here have a delicious spicy sauce.' }
  },
  'la cuenta por favor': {
    spanish: 'La cuenta, por favor',
    translation: 'The check / bill, please',
    meaning: 'Polite phrase used to ask the waiter for your restaurant or bar bill.',
    partOfSpeech: 'Travel phrase',
    pronunciation: 'lah KWEN-tah por fah-VOR',
    category: 'Viajes',
    culturalNote: 'Waiters in Spain will NEVER rush you with the bill or drop it off before you ask; they consider that rude. You must always ask for "la cuenta".',
    exampleSentence: { spanish: 'Camarero, cuando pueda, la cuenta por favor.', english: 'Waiter, whenever you can, the bill please.' }
  },
  'menu del dia': {
    spanish: 'Menú del día',
    translation: 'Daily fixed-price lunch menu',
    meaning: 'A remarkable value multi-course lunch offering primer plato (starter), segundo plato (main), bread, beverage (wine/water), and postre (dessert).',
    partOfSpeech: 'Culinary term',
    pronunciation: 'meh-NOO del DEE-ah',
    category: 'Comida',
    culturalNote: 'Created by Spanish law in the 1960s to ensure workers could afford a hearty, nutritious midday meal. Available Monday to Friday.',
    exampleSentence: { spanish: 'El menú del día cuesta doce euros e incluye postre y vino.', english: 'The daily menu costs twelve euros and includes dessert and wine.' }
  },

  // TRAVEL, NAVIGATION & PLACES
  'donde esta': {
    spanish: '¿Dónde está...?',
    translation: 'Where is...?',
    meaning: 'Essential question used to ask the location of a place, monument, or facility.',
    partOfSpeech: 'Interrogative phrase',
    pronunciation: 'DON-deh es-TAH',
    category: 'Viajes',
    translations: {
      en: 'Where is...?',
      fr: 'Où se trouve... ?',
      de: 'Wo ist...?',
      it: 'Dov’è...?',
      pt: 'Onde fica...?',
      ja: '〜はどこにありますか？',
      zh: '……在哪里？'
    },
    exampleSentence: { spanish: '¿Dónde está la estación de metro más cercana?', english: 'Where is the nearest metro station?' }
  },
  'cuanto cuesta': {
    spanish: '¿Cuánto cuesta?',
    translation: 'How much does it cost?',
    meaning: 'Essential question used when asking prices in shops, markets, and ticket counters.',
    partOfSpeech: 'Interrogative phrase',
    pronunciation: 'KWAN-toh KWES-tah',
    category: 'Viajes',
    translations: {
      en: 'How much does it cost?',
      fr: 'Combien ça coûte ?',
      de: 'Wie viel kostet das?',
      it: 'Quanto costa?',
      pt: 'Quanto custa?',
      ja: 'いくらですか？',
      zh: '多少钱？'
    },
    exampleSentence: { spanish: '¿Cuánto cuesta la entrada al museo?', english: 'How much is admission to the museum?' }
  },
  'estacion': {
    spanish: 'Estación',
    translation: 'Station (train / bus / metro)',
    meaning: 'Transportation depot or transit hub.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'es-tah-SYON',
    category: 'Viajes',
    translations: {
      en: 'Train station / Metro station',
      fr: 'Gare / Station',
      de: 'Bahnhof / Station',
      it: 'Stazione ferroviaria',
      pt: 'Estação de trem / metrô',
      ja: '駅・鉄道駅',
      zh: '火车站 / 地铁站'
    },
    exampleSentence: { spanish: 'Nos encontramos en la estación de Atocha.', english: 'We meet at Atocha train station.' }
  },
  'billete': {
    spanish: 'Billete',
    translation: 'Ticket (transportation)',
    meaning: 'Ticket for a train, bus, or metro.',
    partOfSpeech: 'Noun (masculine)',
    pronunciation: 'bee-YEH-teh',
    category: 'Viajes',
    translations: {
      en: 'Train / Travel ticket',
      fr: 'Billet de train',
      de: 'Fahrkarte / Zugticket',
      it: 'Biglietto del treno',
      pt: 'Passagem / Bilhete',
      ja: '乗車券・切符',
      zh: '车票 / 火车票'
    },
    culturalNote: 'In Spain, transport tickets are called "billete", while concert or monument entry passes are often called "entrada". In Latin America, tickets are often called "boleto".',
    exampleSentence: { spanish: 'Necesito un billete de ida y vuelta para Toledo.', english: 'I need a round-trip ticket to Toledo.' }
  },
  'entrada': {
    spanish: 'Entrada',
    translation: 'Entrance / Admission ticket',
    meaning: 'Physical admission ticket or entrance doorway to a monument, museum, or venue.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'en-TRAH-dah',
    category: 'Viajes',
    exampleSentence: { spanish: 'Reservamos la entrada para la Sagrada Família por internet.', english: 'We booked our admission ticket for the Sagrada Família online.' }
  },
  'salida': {
    spanish: 'Salida',
    translation: 'Exit / Departure',
    meaning: 'Exit door, departure gate, or timetable departure.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'sah-LEE-dah',
    category: 'Viajes',
    exampleSentence: { spanish: 'La salida de emergencia está al fondo del pasillo.', english: 'The emergency exit is at the end of the hall.' }
  },
  'plaza': {
    spanish: 'Plaza',
    translation: 'Public town square / Plaza',
    meaning: 'The central gathering hub and pedestrian square of any Spanish town or city.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'PLAH-thah (PLAH-sah)',
    category: 'Lugares',
    culturalNote: 'The communal heart of Spanish social life, lined with outdoor terraces, historic archways, and children playing until late.',
    exampleSentence: { spanish: 'Tomamos un café en la Plaza Mayor de Salamanca.', english: 'We had a coffee in the Plaza Mayor of Salamanca.' }
  },
  'calle': {
    spanish: 'Calle',
    translation: 'Street',
    meaning: 'Street, roadway, or pedestrian thoroughfare.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'KAH-yeh',
    category: 'Lugares',
    exampleSentence: { spanish: 'Paseamos por la Calle de Alcalá en Madrid.', english: 'We strolled along Calle de Alcalá in Madrid.' }
  },

  // CULTURAL & HISTORICAL CONCEPTS
  'flamenco': {
    spanish: 'Flamenco',
    translation: 'Flamenco (Andalusian song, dance, and guitar art form)',
    meaning: 'UNESCO Intangible Cultural Heritage combining cante (soulful singing), baile (passionate dance), toque (virtuoso guitar), and jaleo (palmas and rhythmic chants).',
    partOfSpeech: 'Cultural art form (masculine)',
    pronunciation: 'flah-MEN-koh',
    category: 'Cultura',
    culturalNote: 'Deeply rooted in southern Andalusia with Gypsy (Romani), Moorish, and Jewish musical heritages. The emotional climax of flamenco is called "duende".',
    exampleSentence: { spanish: 'El duende del flamenco se siente en los tablaos de Sevilla.', english: 'The soul of flamenco is felt in the tablaos of Seville.' }
  },
  'siesta': {
    spanish: 'Siesta',
    translation: 'Afternoon rest / Nap',
    meaning: 'Traditional pause in the heat of early afternoon for dining, digestion, and resting.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'SYEHS-tah',
    category: 'Cultura',
    culturalNote: 'Historically allowed agricultural workers to avoid the punishing midday sun. While corporate offices stay open, smaller shops outside big cities still close between 2:00 PM and 5:00 PM.',
    exampleSentence: { spanish: 'Dormir una pequeña siesta de veinte minutos recarga la energía.', english: 'Taking a quick twenty-minute siesta recharges your energy.' }
  },
  'las fallas': {
    spanish: 'Las Fallas',
    translation: 'The Fallas Festival of Valencia',
    meaning: 'Spectacular annual March festival where towering, satirical sculptural monuments (ninots) are displayed and burned in massive bonfires on the night of San José.',
    partOfSpeech: 'Cultural celebration',
    pronunciation: 'las FAH-yas',
    category: 'Cultura',
    culturalNote: 'Celebrated with daily mascletàs (ground-shaking rhythmic firecracker concerts) and culminates in La Cremà when hundreds of monuments are set ablaze.',
    exampleSentence: { spanish: 'Las Fallas de Valencia iluminan la noche con arte y fuego.', english: 'Valencia’s Fallas light up the night with art and fire.' }
  },
  'camino de santiago': {
    spanish: 'Camino de Santiago',
    translation: 'Way of St. James pilgrimage',
    meaning: 'Ancient network of pilgrim routes stretching across Europe and northern Spain leading to the shrine of the Apostle St. James in Santiago de Compostela.',
    partOfSpeech: 'Heritage route',
    pronunciation: 'kah-MEE-noh deh sahn-TYAH-goh',
    category: 'Cultura',
    culturalNote: 'Pilgrims carry the scallop shell (vieira) and greet each other with the blessing "¡Buen Camino!".',
    exampleSentence: { spanish: 'Miles de peregrinos recorren el Camino de Santiago cada año.', english: 'Thousands of pilgrims walk the Camino de Santiago each year.' }
  },
  'la sagrada familia': {
    spanish: 'La Sagrada Família',
    translation: 'The Holy Family Basilica',
    meaning: 'Antoni Gaudí’s breathtaking, world-famous modernist expiatory church in Barcelona, under construction since 1882.',
    partOfSpeech: 'Monument / Landmark',
    pronunciation: 'lah sah-GRAH-dah fah-MEE-lyah',
    category: 'Lugares',
    culturalNote: 'Gaudí’s organic forest of stone columns and stained-glass lighting is one of the world’s most unique architectural masterworks.',
    exampleSentence: { spanish: 'Las vidrieras de la Sagrada Família crean un mar de luz dorada.', english: 'The stained-glass windows of the Sagrada Família create a sea of golden light.' }
  },
  'la alhambra': {
    spanish: 'La Alhambra',
    translation: 'The Red Citadel of Granada',
    meaning: 'Stunning Moorish palace and fortress complex in Granada, renowned for its intricate arabesques, courtyards of myrtles and lions, and lush Generalife gardens.',
    partOfSpeech: 'Monument / Landmark',
    pronunciation: 'lah ahl-AHM-brah',
    category: 'Lugares',
    culturalNote: 'The crown jewel of Nasrid architecture in Islamic Spain (Al-Ándalus). Its name in Arabic means "The Red One".',
    exampleSentence: { spanish: 'El Patio de los Leones en la Alhambra es una maravilla arquitectónica.', english: 'The Court of the Lions in the Alhambra is an architectural marvel.' }
  },
  'museo del prado': {
    spanish: 'Museo Nacional del Prado',
    translation: 'The Prado National Museum',
    meaning: 'Spain’s premier national art museum in Madrid, housing supreme masterworks by Velázquez, Goya, El Greco, Bosch, and Titian.',
    partOfSpeech: 'Cultural institution',
    pronunciation: 'moo-SEH-oh del PRAH-doh',
    category: 'Lugares',
    culturalNote: 'Contains Velázquez’s mesmerizing "Las Meninas" and Goya’s haunting Black Paintings.',
    exampleSentence: { spanish: 'El Prado es una de las pinacotecas más sublimes del mundo.', english: 'The Prado is one of the most sublime art galleries in the world.' }
  },

  // WEBSITE SPECIFIC SECTION TITLES & CONCEPTS
  'rumbo espana': {
    spanish: 'Rumbo España',
    translation: 'Course to Spain / Destination Spain',
    meaning: 'Heading towards Spain; an adventurous voyage exploring the sights, flavors, and culture of Spain.',
    partOfSpeech: 'Title / Idiom',
    pronunciation: 'ROOM-boh es-PAH-nyah',
    category: 'Viajes',
    translations: {
      en: 'Course to Spain / Heading to Spain',
      fr: 'Cap sur l’Espagne',
      de: 'Kurs auf Spanien',
      it: 'Rotta verso la Spagna',
      pt: 'Rumo à Espanha',
      ja: 'スペインへの旅路',
      zh: '前往西班牙之程'
    },
    culturalNote: '"Poner rumbo a..." means to set sail or chart a course toward a destination.',
    exampleSentence: { spanish: 'Ponemos rumbo a España con la maleta llena de sueños.', english: 'We set our course to Spain with our suitcases full of dreams.' }
  },
  'inicio': {
    spanish: 'Inicio',
    translation: 'Home / Beginning',
    meaning: 'Home page or starting point of a journey.',
    partOfSpeech: 'Noun (masculine)',
    pronunciation: 'ee-NEE-syoh',
    category: 'Viajes'
  },
  'destinos': {
    spanish: 'Destinos',
    translation: 'Destinations',
    meaning: 'Cities, regions, and historic places to visit.',
    partOfSpeech: 'Noun (plural masculine)',
    pronunciation: 'des-TEE-nos',
    category: 'Lugares',
    translations: {
      en: 'Destinations',
      fr: 'Destinations',
      de: 'Reiseziele',
      it: 'Destinazioni',
      pt: 'Destinos',
      ja: '目的地',
      zh: '目的地'
    }
  },
  'sabores': {
    spanish: 'Sabores',
    translation: 'Flavors / Tastes',
    meaning: 'Culinary traditions, dishes, wines, and gastronomic delights.',
    partOfSpeech: 'Noun (plural masculine)',
    pronunciation: 'sah-BOH-res',
    category: 'Comida'
  },
  'cultura': {
    spanish: 'Cultura',
    translation: 'Culture',
    meaning: 'Art, festivals, architecture, and enduring traditions.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'kool-TOO-rah',
    category: 'Cultura',
    translations: {
      en: 'Culture',
      fr: 'Culture',
      de: 'Kultur',
      it: 'Cultura',
      pt: 'Cultura',
      ja: '文化',
      zh: '文化'
    }
  },
  'sonidos': {
    spanish: 'Sonidos de España',
    translation: 'Sounds of Spain / Music and Soundscapes',
    meaning: 'Spanish classical guitar, flamenco rhythms, regional folk bagpipes, and ambient soundscapes.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'soh-NEE-dos deh es-PAH-nyah',
    category: 'Cultura',
    translations: {
      en: 'Sounds of Spain',
      fr: 'Sons d’Espagne',
      de: 'Klänge Spaniens',
      it: 'Suoni della Spagna',
      pt: 'Sons da Espanha',
      ja: 'スペインの音色',
      zh: '西班牙之声'
    }
  },
  'deportes': {
    spanish: 'Deportes',
    translation: 'Sports / Athletics',
    meaning: 'Games, football (fútbol), traditional rural sports, and athletic competitions.',
    partOfSpeech: 'Noun (plural masculine)',
    pronunciation: 'deh-POR-tes',
    category: 'Cultura'
  },
  'literatura': {
    spanish: 'Literatura',
    translation: 'Literature',
    meaning: 'Poetry, novels, Siglo de Oro masterpieces, and literary routes.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'lee-teh-rah-TOO-rah',
    category: 'Cultura'
  },
  'planifica': {
    spanish: 'Planifica',
    translation: 'Plan / Plan your trip',
    meaning: 'Imperative verb: plan your itinerary, calculate budgets, and prepare travel days.',
    partOfSpeech: 'Verb (imperative / present)',
    pronunciation: 'plah-NEE-fee-kah',
    category: 'Viajes'
  },
  'idioma': {
    spanish: 'Idioma / Habla Español',
    translation: 'Language / Speak Spanish',
    meaning: 'Spanish linguistic laboratory, vocabulary flashcards, and pronunciation guide.',
    partOfSpeech: 'Noun (masculine)',
    pronunciation: 'ee-DYOH-mah',
    category: 'Gramática'
  },
  'mas alla': {
    spanish: 'Más Allá',
    translation: 'Beyond / Further Ahead',
    meaning: 'Beyond borders; exploring the transatlantic Spanish-speaking world and pan-Hispanic connections.',
    partOfSpeech: 'Adverbial phrase',
    pronunciation: 'mahs ah-YAH',
    category: 'Cultura'
  },
  'rincones secretos': {
    spanish: 'Rincones Secretos',
    translation: 'Secret corners / Hidden gems',
    meaning: 'Intimate, lesser-known picturesque spots and courtyards tucked away from heavy tourist trails.',
    partOfSpeech: 'Noun phrase (plural)',
    pronunciation: 'reen-KOH-nes seh-KREH-tos',
    category: 'Lugares'
  },
  'don quijote': {
    spanish: 'Don Quijote de la Mancha',
    translation: 'Don Quixote of La Mancha',
    meaning: 'Miguel de Cervantes’ 1605 masterpiece, widely considered the first modern novel in world literature.',
    partOfSpeech: 'Literary classic',
    pronunciation: 'don kee-HOH-teh deh lah MAHN-chah',
    category: 'Cultura',
    culturalNote: 'Follows an idealistic knight errant who tilts at windmills across the plains of Castilla-La Mancha in defense of justice and honor.',
    exampleSentence: { spanish: 'Cervantes escribió una de las obras cumbres de la humanidad.', english: 'Cervantes wrote one of the crowning works of humanity.' }
  },
  'resena historica': {
    spanish: 'Reseña Histórica',
    translation: 'Historical overview / Historical background',
    meaning: 'Chronological summary of the origin, heritage, and milestones of a Spanish monument or region.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'reh-SEH-nyah ees-TOH-ree-kah',
    category: 'Cultura',
    translations: {
      en: 'Historical overview',
      fr: 'Aperçu historique',
      de: 'Historischer Überblick',
      it: 'Panoramica storica',
      pt: 'Resumo histórico',
      ja: '歴史的概要',
      zh: '历史概览'
    }
  },
  'conexion de transporte': {
    spanish: 'Conexión de Transporte',
    translation: 'Transport connection / Transit route',
    meaning: 'Rail, bus, or transit connection details linking Spanish destinations.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'koh-nek-SYON deh trahns-POR-teh',
    category: 'Viajes',
    translations: {
      en: 'Transport connection',
      fr: 'Liaison de transport',
      de: 'Verkehrsverbindung',
      it: 'Collegamento di trasporto',
      pt: 'Conexão de transporte',
      ja: '交通アクセス',
      zh: '交通连接'
    }
  },
  'tren alvia': {
    spanish: 'Tren Alvia',
    translation: 'Alvia high-speed / long-distance train',
    meaning: 'Renfe’s high-speed long-distance trains capable of running on both Iberian and international gauge tracks.',
    partOfSpeech: 'Noun (masculine)',
    pronunciation: 'tren ahl-VEE-ah',
    category: 'Viajes',
    translations: {
      en: 'Alvia high-speed train',
      fr: 'Train à grande vitesse Alvia',
      de: 'Alvia-Hochgeschwindigkeitszug',
      it: 'Treno ad alta velocità Alvia',
      pt: 'Trem de alta velocidade Alvia',
      ja: 'アルビア高速列車',
      zh: '阿尔维亚高速列车'
    }
  },
  'patrimonio mundial': {
    spanish: 'Patrimonio Mundial de la UNESCO',
    translation: 'UNESCO World Heritage',
    meaning: 'Historic landmarks recognized globally for their outstanding universal cultural or natural value.',
    partOfSpeech: 'Heritage designation',
    pronunciation: 'pah-tree-MOH-nyoh moon-DYAL',
    category: 'Lugares',
    translations: {
      en: 'UNESCO World Heritage',
      fr: 'Patrimoine mondial de l’UNESCO',
      de: 'UNESCO-Welterbe',
      it: 'Patrimonio mondiale dell’UNESCO',
      pt: 'Patrimônio Mundial da UNESCO',
      ja: 'ユネスコ世界遺産',
      zh: '联合国教科文组织世界遗产'
    }
  },

  // WEBSITE NAVIGATION & ACTION BUTTONS
  'planificar viaje': {
    spanish: 'Planificar Viaje',
    translation: 'Plan Your Trip',
    meaning: 'Interactive tool to design custom routes, train schedules, and hotel stays.',
    partOfSpeech: 'Verb phrase',
    pronunciation: 'plah-nee-fee-KAHR VYAH-heh',
    category: 'Viajes',
    translations: {
      en: 'Plan Your Trip',
      fr: 'Planifier votre voyage',
      de: 'Reise planen',
      it: 'Pianifica il tuo viaggio',
      pt: 'Planejar sua viagem',
      ja: '旅行を計画する',
      zh: '规划您的旅程'
    }
  },
  'planificador de viaje': {
    spanish: 'Planificador de Viaje',
    translation: 'Trip Planner',
    meaning: 'Custom itinerary builder for journeys across Spanish regions and cities.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'plah-nee-fee-kah-DOR deh VYAH-heh',
    category: 'Viajes',
    translations: {
      en: 'Trip Planner',
      fr: 'Planificateur de voyage',
      de: 'Reiseplaner',
      it: 'Pianificatore di viaggio',
      pt: 'Planejador de viagem',
      ja: '旅行プランナー',
      zh: '行程规划器'
    }
  },
  'rutas': {
    spanish: 'Rutas',
    translation: 'Routes / Itineraries',
    meaning: 'Scenic travel paths, high-speed rail lines, and thematic trails.',
    partOfSpeech: 'Noun (plural)',
    pronunciation: 'ROO-tahs',
    category: 'Viajes',
    translations: {
      en: 'Routes / Itineraries',
      fr: 'Itinéraires',
      de: 'Routen / Reiserouten',
      it: 'Itinerari',
      pt: 'Rotas / Roteiros',
      ja: 'ルート・旅程',
      zh: '路线与行程'
    }
  },
  'gastronomia': {
    spanish: 'Gastronomía',
    translation: 'Gastronomy / Culinary traditions',
    meaning: 'Rich food culture including tapas, regional stews, seafood, and wines.',
    partOfSpeech: 'Noun (feminine)',
    pronunciation: 'gahs-troh-noh-MEE-ah',
    category: 'Comida',
    translations: {
      en: 'Gastronomy / Cuisine',
      fr: 'Gastronomie',
      de: 'Gastronomie / Küche',
      it: 'Gastronomia',
      pt: 'Gastronomia',
      ja: '美食・料理',
      zh: '美食与餐饮'
    }
  },
  'descubre espana': {
    spanish: 'Descubre España',
    translation: 'Discover Spain',
    meaning: 'Explore the hidden gems, grand monuments, and vibrant life of Spain.',
    partOfSpeech: 'Verb phrase',
    pronunciation: 'des-KOO-breh es-PAH-nyah',
    category: 'Viajes',
    translations: {
      en: 'Discover Spain',
      fr: 'Découvrez l’Espagne',
      de: 'Entdecken Sie Spanien',
      it: 'Scopri la Spagna',
      pt: 'Descubra a Espanha',
      ja: 'スペインを発見する',
      zh: '发现西班牙'
    }
  },
  'ciudades imperdibles': {
    spanish: 'Ciudades Imperdibles',
    translation: 'Must-See Cities',
    meaning: 'Essential Spanish urban destinations renowned for art, history, and cuisine.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'thyoo-DAH-des eem-pehr-DEE-bles',
    category: 'Lugares',
    translations: {
      en: 'Must-See Cities',
      fr: 'Villes incontournables',
      de: 'Unverzichtbare Städte',
      it: 'Città imperdibili',
      pt: 'Cidades imperdíveis',
      ja: '必見の都市',
      zh: '必游城市'
    }
  },
  'rutas en tren': {
    spanish: 'Rutas en Tren',
    translation: 'Train Routes',
    meaning: 'High-speed AVE and scenic rail routes traversing the Iberian peninsula.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'ROO-tahs en TREN',
    category: 'Viajes',
    translations: {
      en: 'Train Routes',
      fr: 'Itinéraires en train',
      de: 'Zugstrecken',
      it: 'Itinerari in treno',
      pt: 'Rotas de trem',
      ja: '列車の旅・路線',
      zh: '火车线路'
    }
  },
  'sabores autenticos': {
    spanish: 'Sabores Auténticos',
    translation: 'Authentic Flavors',
    meaning: 'Traditional Spanish culinary dishes prepared with local ingredients and heritage recipes.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'sah-BOH-res ow-TEN-tee-kos',
    category: 'Comida',
    translations: {
      en: 'Authentic Flavors',
      fr: 'Saveurs authentiques',
      de: 'Authentische Aromen',
      it: 'Sapori autentici',
      pt: 'Sabores autênticos',
      ja: '本場の味',
      zh: '地道风味'
    }
  },
  'festivales y tradiciones': {
    spanish: 'Festivales y Tradiciones',
    translation: 'Festivals and Traditions',
    meaning: 'Fiestas, religious celebrations, parades, and regional folk customs of Spain.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'fes-tee-VAH-les ee trah-dee-SYOH-nes',
    category: 'Cultura',
    translations: {
      en: 'Festivals and Traditions',
      fr: 'Festivals et traditions',
      de: 'Feste und Traditionen',
      it: 'Festival e tradizioni',
      pt: 'Festivais e tradições',
      ja: '祭り・伝統',
      zh: '节日与传统'
    }
  },
  'ver mapa': {
    spanish: 'Ver Mapa',
    translation: 'View Map',
    meaning: 'Open the interactive geographical map showing cities, rail lines, and attractions.',
    partOfSpeech: 'Verb phrase',
    pronunciation: 'behr MAH-pah',
    category: 'Viajes',
    translations: {
      en: 'View Map',
      fr: 'Voir la carte',
      de: 'Karte anzeigen',
      it: 'Visualizza mappa',
      pt: 'Ver mapa',
      ja: '地図を見る',
      zh: '查看地图'
    }
  },
  'ver detalles': {
    spanish: 'Ver Detalles',
    translation: 'View Details',
    meaning: 'Read comprehensive travel tips, history, and photography.',
    partOfSpeech: 'Verb phrase',
    pronunciation: 'behr deh-TAH-lyes',
    category: 'Viajes',
    translations: {
      en: 'View Details',
      fr: 'Voir les détails',
      de: 'Details anzeigen',
      it: 'Vedi dettagli',
      pt: 'Ver detalhes',
      ja: '詳細を見る',
      zh: '查看详情'
    }
  },

  // ICONIC DESTINATIONS
  'madrid': {
    spanish: 'Madrid',
    translation: 'Madrid (Capital of Spain)',
    meaning: 'The vibrant capital known for world-class art museums, grand plazas, and lively nightlife.',
    partOfSpeech: 'Proper noun',
    pronunciation: 'mah-DREED',
    category: 'Lugares',
    translations: {
      en: 'Madrid (Capital of Spain)',
      fr: 'Madrid (Capitale de l’Espagne)',
      de: 'Madrid (Hauptstadt Spaniens)',
      it: 'Madrid (Capitale della Spagna)',
      pt: 'Madri (Capital da Espanha)',
      ja: 'マドリード（スペイン首都）',
      zh: '马德里（西班牙首都）'
    }
  },
  'barcelona': {
    spanish: 'Barcelona',
    translation: 'Barcelona (Catalonia)',
    meaning: 'Cosmopolitan Mediterranean city renowned for Gaudí’s Modernisme architecture and vibrant beachfront.',
    partOfSpeech: 'Proper noun',
    pronunciation: 'bahr-theh-LOH-nah',
    category: 'Lugares',
    translations: {
      en: 'Barcelona (Catalonia)',
      fr: 'Barcelone (Catalogne)',
      de: 'Barcelona (Katalonien)',
      it: 'Barcellona (Catalogna)',
      pt: 'Barcelona (Catalunha)',
      ja: 'バルセロナ（カタルーニャ）',
      zh: '巴塞罗那（加泰罗尼亚）'
    }
  },
  'sevilla': {
    spanish: 'Sevilla',
    translation: 'Seville (Andalusia)',
    meaning: 'The passionate heart of Andalusia, famed for flamenco, the Alcázar, and orange-blossom scent.',
    partOfSpeech: 'Proper noun',
    pronunciation: 'seh-VEE-yah',
    category: 'Lugares',
    translations: {
      en: 'Seville (Andalusia)',
      fr: 'Séville (Andalousie)',
      de: 'Sevilla (Andalusien)',
      it: 'Siviglia (Andalusia)',
      pt: 'Sevilha (Andaluzia)',
      ja: 'セビリア（アンダルシア）',
      zh: '塞维利亚（安达卢西亚）'
    }
  },
  'granada': {
    spanish: 'Granada',
    translation: 'Granada (Andalusia)',
    meaning: 'Historic city set against the Sierra Nevada, home to the breathtaking Moorish Alhambra palace.',
    partOfSpeech: 'Proper noun',
    pronunciation: 'grah-NAH-dah',
    category: 'Lugares',
    translations: {
      en: 'Granada (Andalusia)',
      fr: 'Grenade (Andalousie)',
      de: 'Granada (Andalusien)',
      it: 'Granada (Andalusia)',
      pt: 'Granada (Andaluzia)',
      ja: 'グラナダ（アンダルシア）',
      zh: '格拉纳达（安达卢西亚）'
    }
  },
  'valencia': {
    spanish: 'Valencia',
    translation: 'Valencia (Mediterranean Coast)',
    meaning: 'Birthplace of paella, blending futurist architecture at City of Arts and Sciences with historic charm.',
    partOfSpeech: 'Proper noun',
    pronunciation: 'vah-LEN-thyah',
    category: 'Lugares',
    translations: {
      en: 'Valencia',
      fr: 'Valence',
      de: 'Valencia',
      it: 'Valencia',
      pt: 'Valência',
      ja: 'バレンシア',
      zh: '瓦伦西亚'
    }
  },
  'toledo': {
    spanish: 'Toledo',
    translation: 'Toledo (City of Three Cultures)',
    meaning: 'Ancient hilltop fortress city where Christian, Muslim, and Jewish cultures flourished together.',
    partOfSpeech: 'Proper noun',
    pronunciation: 'toh-LEH-doh',
    category: 'Lugares',
    translations: {
      en: 'Toledo (City of Three Cultures)',
      fr: 'Tolède (Ville des trois cultures)',
      de: 'Toledo (Stadt der drei Kulturen)',
      it: 'Toledo (Città delle tre culture)',
      pt: 'Toledo (Cidade das Três Culturas)',
      ja: 'トレド（三文化の街）',
      zh: '托莱多（三文化名城）'
    }
  },
  'alhambra': {
    spanish: 'La Alhambra',
    translation: 'The Alhambra palace & fortress',
    meaning: 'UNESCO World Heritage Moorish palace complex renowned for intricate stucco and serene court gardens.',
    partOfSpeech: 'Monument / Palace',
    pronunciation: 'lah ahl-AHM-brah',
    category: 'Lugares',
    translations: {
      en: 'The Alhambra palace & fortress',
      fr: 'L’Alhambra (Palais nasride)',
      de: 'Die Alhambra',
      it: 'L’Alhambra di Granada',
      pt: 'A Alhambra',
      ja: 'アルハンブラ宮殿',
      zh: '阿罕布拉宫'
    }
  },
  'sagrada familia': {
    spanish: 'La Sagrada Família',
    translation: 'Sagrada Familia Basilica',
    meaning: 'Antoni Gaudí’s awe-inspiring modernist basilica in Barcelona, under construction since 1882.',
    partOfSpeech: 'Monument / Basilica',
    pronunciation: 'sah-GRAH-dah fah-MEE-lyah',
    category: 'Lugares',
    translations: {
      en: 'Sagrada Familia Basilica',
      fr: 'Basilique de la Sagrada Família',
      de: 'Basilika Sagrada Família',
      it: 'Basilica della Sagrada Família',
      pt: 'Basílica da Sagrada Família',
      ja: 'サグラダ・ファミリア大聖堂',
      zh: '圣家宗座圣殿'
    }
  },
  'plaza mayor': {
    spanish: 'Plaza Mayor',
    translation: 'Main Town Square',
    meaning: 'Grand arcaded historic central square in Spanish cities, hub of social gatherings and terrace cafes.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'PLAH-thah mah-YOR',
    category: 'Lugares',
    translations: {
      en: 'Main Square / Central Plaza',
      fr: 'Grand-Place / Plaza Mayor',
      de: 'Hauptplatz / Plaza Mayor',
      it: 'Piazza Maggiore / Plaza Mayor',
      pt: 'Praça Maior / Plaza Mayor',
      ja: 'マヨール広場（中央広場）',
      zh: '马约尔主广场'
    }
  },

  // COMMON ESSENTIAL TRAVEL & DINING WORDS
  'la cuenta': {
    spanish: 'La cuenta',
    translation: 'The bill / check',
    meaning: 'Standard way to ask the waiter for the bill at the end of a meal in Spain.',
    partOfSpeech: 'Noun phrase',
    pronunciation: 'lah KWEN-tah',
    category: 'Comida',
    translations: {
      en: 'The bill / check',
      fr: 'L’addition',
      de: 'Die Rechnung',
      it: 'Il conto',
      pt: 'A conta',
      ja: 'お会計・伝票',
      zh: '账单 / 买单'
    }
  }
};

/**
 * Normalizes text for matching by removing accents, punctuation, and extra whitespace.
 */
export function normalizeSpanish(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[«»"“”¿?¡!.,:;()\[\]]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Synchronous dictionary lookup for any Spanish phrase or word.
 */
export function lookupSpanishMeaning(query: string): DictionaryEntry | null {
  if (!query) return null;
  const clean = normalizeSpanish(query);
  if (!clean) return null;

  // 1. Direct match
  if (SPANISH_DICTIONARY[clean]) {
    return SPANISH_DICTIONARY[clean];
  }

  // 2. Partial / containment match in dictionary keys
  for (const [key, entry] of Object.entries(SPANISH_DICTIONARY)) {
    if (clean === key || clean.includes(key) || key.includes(clean)) {
      if (Math.abs(clean.length - key.length) < 8) {
        return entry;
      }
    }
  }

  // 3. Word-by-word fallback if multi-word phrase
  const words = clean.split(' ').filter(w => w.length > 2);
  for (const word of words) {
    if (SPANISH_DICTIONARY[word]) {
      return SPANISH_DICTIONARY[word];
    }
  }

  return null;
}

/**
 * Instant synthetic translation for multi-word phrases and sentences,
 * ensuring 0ms zero-lag response for any Spanish text across the site.
 */
export function quickTranslatePhrase(rawText: string, targetLang: string = 'en'): { translation: string; meaning: string; category: string } {
  const clean = normalizeSpanish(rawText);
  if (!clean) return { translation: rawText, meaning: rawText, category: 'General' };

  // 1. Direct dictionary match
  const direct = lookupSpanishMeaning(clean);
  if (direct) {
    const translation = (direct.translations && direct.translations[targetLang]) || direct.translation;
    return { translation, meaning: direct.meaning, category: direct.category };
  }

  // 2. Multi-word phrase breakdown
  const words = rawText.split(/\s+/);
  const translatedWords = words.map(word => {
    const normalizedWord = normalizeSpanish(word);
    if (SPANISH_DICTIONARY[normalizedWord]) {
      const entry = SPANISH_DICTIONARY[normalizedWord];
      return (entry.translations && entry.translations[targetLang]) || entry.translation.split('/')[0].trim();
    }
    return word;
  });

  const synthesized = translatedWords.join(' ');
  return {
    translation: synthesized,
    meaning: `Spanish phrase: «${rawText.trim()}»`,
    category: 'Español'
  };
}
