export interface MonumentOrNature {
  id: string;
  name: string;
  category: 'Monumento' | 'Montañas' | 'Naturaleza';
  categoryBadge: string;
  location: string;
  region: string;
  imageUrl: string;
  imageAlt: string;
  shortDescription: string;
  fullHistory: string;
  architecturalEra: string;
  unescoStatus?: string;
  highlight: string;
  coordinates?: [number, number];
  photoCredit?: string;
}

export const MONUMENTS_AND_NATURE: MonumentOrNature[] = [
  {
    id: 'alhambra-granada',
    name: 'La Alhambra y los Jardines del Generalife',
    category: 'Monumento',
    categoryBadge: 'PATRIMONIO DE LA HUMANIDAD · UNESCO',
    location: 'Granada',
    region: 'Andalucía',
    imageUrl: 'https://images.unsplash.com/photo-1661083928798-a0c0d9f11e62?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Palacios nazaríes de la Alhambra enmarcados por los jardines del Generalife, Granada',
    shortDescription: 'La fortaleza roja nazarí del siglo XIII alzándose sobre los bosques de cipreses con los picos nevados de Sierra Nevada al fondo.',
    fullHistory: 'Declarada Patrimonio de la Humanidad por la UNESCO en 1984, la Alhambra es la cumbre indiscutible de la arquitectura islámica palatina en Europa. Construida a partir del siglo XIII por los monarcas nazaríes de Granada sobre la colina de la Sabika, este complejo monumental fusiona fortalezas militares (Alcazaba), residencias reales con patios de ensueño (como el célebre Patio de los Leones y el de los Arrayanes) y los suntuosos jardines del Generalife. El rumor constante del agua corriendo por acequias y fuentes simboliza el paraíso terrenal según la mística andalusí, ofreciendo un contraste sobrecogedor frente a los riscos nevados de Sierra Nevada.',
    architecturalEra: 'Siglos XIII–XIV · Reino Nazarí de Granada',
    unescoStatus: 'Inscrito en la lista de Patrimonio Mundial en 1984',
    highlight: 'Patio de los Leones, Sala de Dos Hermanas y Acequia del Generalife'
  },
  {
    id: 'sagrada-familia-barcelona',
    name: 'Basílica de la Sagrada Família',
    category: 'Monumento',
    categoryBadge: 'OBRA MAESTRA MODERNISTA',
    location: 'Barcelona',
    region: 'Catalunya',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Torres modernistas de la Basílica de la Sagrada Família recortadas contra el cielo azul mediterráneo',
    shortDescription: 'El icono modernista universal de Antoni Gaudí, cuyas agujas orgánicas y columnas arborescentes redefinen la luz y la fe mediterránea.',
    fullHistory: 'Iniciada en 1882 y consagrada como basílica menor por el Papa Benedicto XVI en 2010, la Sagrada Família es la obra cumbre de Antoni Gaudí y el monumento más visitado de España. Su diseño revolucionario trasciende el neogótico tradicional para concebir un bosque de piedra sagrado donde las columnas se ramifican como troncos de árboles milenarios y las vidrieras polícromas inundan el espacio con una sinfonía cromática que cambia con las horas del sol. Cada fachada narra un capítulo vital —el Nacimiento, la Pasión y la Gloria—, convirtiendo la piedra y el hormigón en una oración arquitectónica viva.',
    architecturalEra: '1882–Presente · Modernismo Catalán',
    unescoStatus: 'Fachada del Nacimiento y Cripta declaradas Patrimonio de la Humanidad (2005)',
    highlight: 'Fachada del Nacimiento, bosque interior de columnas y torre de Jesús'
  },
  {
    id: 'picos-de-europa',
    name: 'Picos de Europa y Lagos de Covadonga',
    category: 'Montañas',
    categoryBadge: 'PARQUE NACIONAL HISTÓRICO',
    location: 'Asturias, Cantabria y León',
    region: 'Cordillera Cantábrica',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Imponentes macizos calizos de los Picos de Europa reflejados en aguas de alta montaña',
    shortDescription: 'Agujas calizas que rozan los 2.650 metros de altitud sobre verdes pastizales atlánticos y lagunas de origen glaciar.',
    fullHistory: 'Declarado en 1918 por el rey Alfonso XIII como el primer Parque Nacional de España (bajo el nombre de Montaña de Covadonga), los Picos de Europa constituyen una de las mayores formaciones cársticas de alta montaña de Europa occidental. Sus tres macizos (Occidental o Cornión, Central o de los Urrieles, y Oriental o de Ándara) albergan profundas gargantas kársticas como el desfiladero del Cares, hayedos milenarios y los idílicos lagos glaciares de Enol y Ercina a más de 1.100 metros de altitud, hábitat natural del quebrantahuesos, el rebeco cantábrico y el oso pardo.',
    architecturalEra: 'Relieve Kárstico Alpino · Cuaternario',
    unescoStatus: 'Reserva de la Biosfera UNESCO',
    highlight: 'Naranjo de Bulnes (Picu Urriellu, 2.519 m), Garganta del Cares y Lagos de Enol y Ercina'
  },
  {
    id: 'parque-nacional-teide',
    name: 'Parque Nacional del Teide',
    category: 'Naturaleza',
    categoryBadge: 'TECHO DE ESPAÑA · 3.715 M',
    location: 'Tenerife',
    region: 'Islas Canarias',
    imageUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'El estratovolcán del Teide alzándose sobre el mar de nubes y coladas de lava volcánica',
    shortDescription: 'El pico más alto de España (3.715 m) elevándose sobre un paisaje volcánico de coladas de lava, tajinastes y mar de nubes.',
    fullHistory: 'Con sus 3.715 metros sobre el nivel del mar y más de 7.500 metros sobre el lecho oceánico, el Teide es el tercer mayor volcán del planeta desde su base y el punto más elevado de todo el territorio español. Declarado Patrimonio de la Humanidad por la UNESCO en 2007, su caldera de Las Cañadas despliega una geología volcánica alienígena de tonos ocres, negros y rojizos donde prospera el tajinaste rojo (hierba floral de hasta 3 metros de altura) bajo uno de los cielos nocturnos más limpios y transparentes del hemisferio norte para la observación astrofísica.',
    architecturalEra: 'Estratovolcán Activo · Holoceno',
    unescoStatus: 'Patrimonio de la Humanidad UNESCO (2007)',
    highlight: 'Roques de García, pico del Teide y mar de nubes del alisio'
  },
  {
    id: 'mezquita-cordoba',
    name: 'Mezquita-Catedral de Córdoba',
    category: 'Monumento',
    categoryBadge: 'JOYA DEL CALIFATO OMEYA',
    location: 'Córdoba',
    region: 'Andalucía',
    imageUrl: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Bosque de 856 columnas y arcos de herradura bicolores en la Mezquita de Córdoba',
    shortDescription: 'Un bosque sagrado de 856 columnas de jaspe, granito y mármol entrelazadas por arcos de herradura bicolores.',
    fullHistory: 'Iniciada por el emir Abderramán I en el año 786 sobre la basílica visigoda de San Vicente y ampliada por sucesivos califas hasta el siglo X, la Mezquita de Córdoba fue el templo mayor del Islam occidental en la época de mayor esplendor cultural de Europa. Tras la conquista cristiana de 1236, se consagró como catedral católica, insertándose en el siglo XVI un crucero renacentista en su interior. Este diálogo irrepetible de civilizaciones reúne arcos de doble altura inspirados en el acueducto romano de Los Milagros, mosaicos bizantinos dorados en el mihrab y un bosque infinito de columnas.',
    architecturalEra: 'Siglos VIII–X (Mezquita) y XVI (Crucero Renacentista)',
    unescoStatus: 'Patrimonio de la Humanidad UNESCO (1984)',
    highlight: 'El Mihrab con teselas bizantinas, Patio de los Naranjos y arcos superpuestos'
  },
  {
    id: 'puente-nuevo-ronda',
    name: 'El Tajo y Puente Nuevo de Ronda',
    category: 'Monumento',
    categoryBadge: 'PROEZA DE INGENIERÍA ILUSTRADA',
    location: 'Ronda (Málaga)',
    region: 'Andalucía',
    imageUrl: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'El colosal Puente Nuevo de Ronda salvando el abismo del Tajo de más de 100 metros',
    shortDescription: 'El sobrecogedor arco de sillería de 98 metros de altura uniendo las dos mitades de la ciudad blanca sobre el abismo del río Guadalevín.',
    fullHistory: 'Construido a lo largo de más de 40 años entre 1751 y 1793 por el arquitecto José Martín de Aldehuela, el Puente Nuevo de Ronda es una de las proezas de ingeniería de piedra más audaces de la Ilustración española. Salva una garganta kárstica de casi 100 metros de profundidad excavada durante milenios por el río Guadalevín, uniendo la ciudad histórica árabe con el ensanche moderno de El Mercadillo. Admirado por románticos universales como Ernest Hemingway, Orson Welles y Rainer Maria Rilke, el puente ofrece miradores vertiginosos hacia la serranía malagueña.',
    architecturalEra: '1751–1793 · Arquitectura Neoclásica e Ilustrada',
    unescoStatus: 'Bien de Interés Cultural Monumental',
    highlight: 'Cámara interior sobre el arco central, mirador de Aldehuela y Casa del Rey Moro'
  },
  {
    id: 'acueducto-segovia',
    name: 'Acueducto Romano de Segovia',
    category: 'Monumento',
    categoryBadge: 'INGENIERÍA ROMANA BIMILENARIA',
    location: 'Segovia',
    region: 'Castilla y León',
    imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Arcadas dobles de sillares de granito del Acueducto de Segovia sobre la Plaza del Azoguejo',
    shortDescription: 'Más de 160 arcos de granito de Guadarrama ensamblados sin una sola gota de argamasa hace casi dos mil años.',
    fullHistory: 'Erguido entre finales del siglo I y comienzos del siglo II d.C. bajo los mandatos de los emperadores Domiciano y Trajano, el Acueducto de Segovia es la obra de ingeniería civil romana mejor conservada de la península ibérica. Conducía el agua del manantial de la Fuenfría en la sierra de Guadarrama a lo largo de más de 15 kilómetros hasta el alcázar de la ciudad. En su tramo monumental en la Plaza del Azoguejo, alcanza 28,5 metros de altura con una doble arcada superpuesta construida con 20.400 sillares de granito tallados que se sostienen exclusivamente por el equilibrio de pesos y empujes entre las piedras, sin ningún tipo de mortero ni cemento.',
    architecturalEra: 'Siglos I–II d.C. · Imperio Romano Flávio-Trajaneo',
    unescoStatus: 'Patrimonio de la Humanidad UNESCO (1985)',
    highlight: 'Tramo monumental de la Plaza del Azoguejo, canal superior y desarenador'
  },
  {
    id: 'macizo-montserrat',
    name: 'Parque Natural y Macizo de Montserrat',
    category: 'Montañas',
    categoryBadge: 'SANTUARIO Y GEOLOGÍA SAGRADA',
    location: 'Monistrol de Montserrat',
    region: 'Catalunya',
    imageUrl: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?auto=format&fit=crop&w=1920&q=85',
    imageAlt: 'Las singulares agujas redondeadas de roca conglomerada del macizo de Montserrat',
    shortDescription: 'El macizo sagrado de conglomerado con agujas esculpidas por el viento donde se resguarda el monasterio benedictino milenario.',
    fullHistory: 'El macizo de Montserrat ("montaña aserrada") es una maravilla geológica única originada por la sedimentación de un antiguo delta fluvial hace 50 millones de años, modelado posteriormente por la erosión pluvial en fantasmagóricas agujas y monolitos redondeados que superan los 1.200 metros de altitud (Sant Jeroni, 1.236 m). En el corazón de sus acantilados se erige desde el siglo XI la Abadía de Santa María de Montserrat, custodia de la "Moreneta" (Virgen de Montserrat, patrona de Catalunya) y de la Escolanía, uno de los coros infantiles de música sacra más antiguos de Europa.',
    architecturalEra: 'Monasterio Fundado en 1025 · Parque Natural Protegido',
    unescoStatus: 'Parque Natural y Bien de Interés Cultural',
    highlight: 'Pico de Sant Jeroni (1.236 m), Santa Cueva y coro de la Escolanía'
  }
];
