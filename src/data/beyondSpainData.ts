export type BeyondSpainRegion = 'Norteamérica' | 'Centroamérica' | 'Caribe' | 'Sudamérica' | 'África';

export interface BeyondSpainCulture {
  country: string;
  region: BeyondSpainRegion;
  culturalThread: string;
  languageContext: string;
  expression?: {
    phrase: string;
    translation: string;
    note: string;
  };
  sourceLabel: string;
  sourceUrl: string;
}

export const BEYOND_SPAIN_REGIONS: BeyondSpainRegion[] = [
  'Norteamérica',
  'Centroamérica',
  'Caribe',
  'Sudamérica',
  'África',
];

// These are entry points into local traditions, not summaries of whole countries.
export const BEYOND_SPAIN_DATA: BeyondSpainCulture[] = [
  {
    country: 'México', region: 'Norteamérica',
    culturalThread: 'La cocina tradicional reúne agricultura, técnicas comunitarias y saberes transmitidos en familia; el mariachi es otra tradición musical muy reconocida. Ambos tienen formas regionales diversas.',
    languageContext: 'El español convive con numerosas lenguas indígenas; las palabras y los acentos cambian mucho de una región a otra.',
    expression: { phrase: '¡Qué padre!', translation: 'How cool!', note: 'Coloquial; «padre» puede expresar admiración en el habla mexicana.' },
    sourceLabel: 'UNESCO · Cocina tradicional mexicana', sourceUrl: 'https://ich.unesco.org/en/RL/traditional-mexican-cuisine-00400',
  },
  {
    country: 'Guatemala', region: 'Centroamérica',
    culturalThread: 'El Rabinal Achí es una tradición maya de teatro, danza y música. Las comunidades mayas, garífunas y xinkas mantienen muchas otras prácticas propias.',
    languageContext: 'Además del español, se hablan lenguas mayas y también garífuna y xinka; la experiencia lingüística depende de la región y la comunidad.',
    expression: { phrase: '¡Qué chilero!', translation: 'How cool!', note: 'Expresión coloquial de aprobación; su uso varía según la persona y la situación.' },
    sourceLabel: 'UNESCO · Rabinal Achí', sourceUrl: 'https://ich.unesco.org/en/RL/rabinal-achi-dance-drama-tradition-00144?RL=00144',
  },
  {
    country: 'El Salvador', region: 'Centroamérica',
    culturalThread: 'En Panchimalco, la Cofradía de las flores y las palmas combina una procesión comunitaria, música, danza, alimentos y conocimientos artesanales.',
    languageContext: 'El español es la lengua más extendida; el náhuat y la memoria de los pueblos indígenas también forman parte de la historia cultural del país.',
    expression: { phrase: '¡Qué chivo!', translation: 'How cool!', note: 'Uso informal salvadoreño para expresar que algo gusta o resulta bueno.' },
    sourceLabel: 'UNESCO · Cofradía de las flores y las palmas', sourceUrl: 'https://ich.unesco.org/es/RL/la-cofradia-de-las-flores-y-las-palmas-02240',
  },
  {
    country: 'Honduras', region: 'Centroamérica',
    culturalThread: 'La música, la danza y la lengua garífunas son parte viva de las comunidades de la costa caribeña. También existen pueblos y tradiciones lencas, miskitas y de otras comunidades.',
    languageContext: 'El español es ampliamente usado, junto con lenguas indígenas y afrodescendientes como el garífuna y el miskito.',
    expression: { phrase: '¡Qué macizo!', translation: 'That’s great!', note: 'Expresión informal que se oye en Honduras; no es una fórmula universal.' },
    sourceLabel: 'UNESCO · Lengua, danza y música garífunas', sourceUrl: 'https://ich.unesco.org/es/RL/la-lengua-la-danza-y-la-musica-de-los-garifunas-00001',
  },
  {
    country: 'Nicaragua', region: 'Centroamérica',
    culturalThread: 'El Güegüense es una obra satírica de teatro, música y danza. En la costa caribeña también viven comunidades miskitas, garífunas, ramas y creoles con historias y lenguas propias.',
    languageContext: 'El español predomina en gran parte del país, mientras que en la costa caribeña convive con lenguas indígenas y criollas.',
    expression: { phrase: '¡Qué tuani!', translation: 'How cool!', note: 'Voz coloquial nicaragüense; el uso cambia entre generaciones y regiones.' },
    sourceLabel: 'UNESCO · El Güegüense', sourceUrl: 'https://ich.unesco.org/en/RL/el-gegense-00111',
  },
  {
    country: 'Costa Rica', region: 'Centroamérica',
    culturalThread: 'La tradición de las carretas pintadas y el boyeo recuerda el transporte del café y hoy sigue presente en fiestas y desfiles. El país también reúne comunidades indígenas y afrocaribeñas.',
    languageContext: 'El español tiene variedades regionales; también se hablan lenguas indígenas y criollas, especialmente en comunidades específicas.',
    expression: { phrase: '¡Pura vida!', translation: 'All good! / Life is good!', note: 'Puede funcionar como saludo, respuesta amable o expresión de entusiasmo; el contexto importa.' },
    sourceLabel: 'UNESCO · Boyeo y carretas', sourceUrl: 'https://ich.unesco.org/en/RL/oxherding-and-oxcart-traditions-in-costa-rica-00103',
  },
  {
    country: 'Panamá', region: 'Centroamérica',
    culturalThread: 'La cultura Congo, en comunidades afrodescendientes de la costa caribeña, combina música, canto, baile y prácticas festivas. Panamá también es hogar de diversos pueblos indígenas.',
    languageContext: 'El español convive con lenguas indígenas y criollas; la historia del istmo también ha creado comunidades multilingües.',
    expression: { phrase: '¿Qué xopá?', translation: 'What’s up?', note: 'Saludo coloquial panameño; es informal y depende del entorno.' },
    sourceLabel: 'UNESCO · Inventario del patrimonio inmaterial de Panamá', sourceUrl: 'https://ich.unesco.org/doc/src/37045.pdf',
  },
  {
    country: 'Cuba', region: 'Caribe',
    culturalThread: 'El son y la rumba cubanos combinan música, canto, ritmo y baile, con raíces africanas y aportes antillanos y europeos. Sus prácticas varían entre comunidades y regiones.',
    languageContext: 'El español cubano tiene ritmos y vocabulario propios; en una conversación informal se oyen saludos como «¿Qué bolá?».' ,
    expression: { phrase: '¿Qué bolá?', translation: 'What’s up?', note: 'Saludo coloquial cubano; para situaciones formales es mejor «¿Cómo está?».' },
    sourceLabel: 'UNESCO · Son cubano', sourceUrl: 'https://ich.unesco.org/en/RL/the-practice-of-cuban-son-02299?RL=02299',
  },
  {
    country: 'República Dominicana', region: 'Caribe',
    culturalThread: 'El merengue y la bachata forman parte de una escena musical diversa y cambiante; el merengue se baila y se transmite en reuniones, celebraciones y espacios cotidianos.',
    languageContext: 'El español dominicano tiene acentos y expresiones regionales. «¿Qué lo qué?» es un saludo informal que no se usa en todos los contextos.',
    expression: { phrase: '¿Qué lo qué?', translation: 'What’s up?', note: 'Saludo coloquial dominicano; usa un saludo neutral en contextos formales.' },
    sourceLabel: 'UNESCO · Merengue dominicano', sourceUrl: 'https://ich.unesco.org/en/RL/bon-01162',
  },
  {
    country: 'Puerto Rico', region: 'Caribe',
    culturalThread: 'La bomba y la plena son tradiciones musicales puertorriqueñas con raíces afrodescendientes; la isla también reúne influencias taínas, caribeñas, africanas y europeas.',
    languageContext: 'El español y el inglés se usan en la isla; el español puertorriqueño también cambia entre comunidades locales y la diáspora.',
    expression: { phrase: '¡Wepa!', translation: 'Hey! / Hooray!', note: 'Exclamación festiva que puede expresar alegría o entusiasmo.' },
    sourceLabel: 'Instituto de Cultura Puertorriqueña · Artes tradicionales', sourceUrl: 'https://transicion2020.pr.gov/Agencias/082/Ponencias/APPLICATION%20NARRATIVE%20Grant%2021%20National%20Endowment%20for%20the%20Arts.pdf',
  },
  {
    country: 'Colombia', region: 'Sudamérica',
    culturalThread: 'La música de marimba y los cantos del Pacífico Sur son una tradición afrocolombiana compartida con Esmeraldas, Ecuador. Colombia tiene muchas otras culturas regionales, incluidas comunidades indígenas y raizales.',
    languageContext: 'El español colombiano abarca acentos muy distintos; numerosas lenguas indígenas y criollas también siguen vivas.',
    expression: { phrase: '¡Qué chévere!', translation: 'How great!', note: 'Expresión informal de aprobación que se usa en Colombia y otros lugares de América Latina.' },
    sourceLabel: 'UNESCO · Marimba del Pacífico Sur y Esmeraldas', sourceUrl: 'https://ich.unesco.org/en/RL/marimba-music-traditional-chants-and-dances-from-the-colombia-south-pacific-region-01099',
  },
  {
    country: 'Venezuela', region: 'Sudamérica',
    culturalThread: 'El joropo une música, poesía, canto y baile; sus estilos cambian entre los Llanos, los Andes, Guayana y otras regiones.',
    languageContext: 'El español venezolano es diverso; también se hablan lenguas indígenas, entre ellas wayuunaiki, pemón y warao.',
    expression: { phrase: '¡Qué fino!', translation: 'That’s great!', note: 'Aprobación informal venezolana; la frecuencia y el sentido dependen del contexto.' },
    sourceLabel: 'UNESCO · Joropo en Venezuela', sourceUrl: 'https://ich.unesco.org/en/RL/joropo-in-venezuela-02092?RL=02092',
  },
  {
    country: 'Ecuador', region: 'Sudamérica',
    culturalThread: 'El pasillo, la marimba de Esmeraldas, las tradiciones andinas y las culturas amazónicas son solo algunas de las muchas expresiones del país.',
    languageContext: 'El español convive con lenguas ancestrales como kichwa y shuar; sus usos y vitalidad varían por comunidad.',
    expression: { phrase: '¡Qué bacán!', translation: 'How cool!', note: 'Expresión informal extendida en Ecuador y otras zonas andinas.' },
    sourceLabel: 'UNESCO · Pasillo ecuatoriano', sourceUrl: 'https://ich.unesco.org/es/RL/el-pasillo-canto-y-poesa-01702',
  },
  {
    country: 'Perú', region: 'Sudamérica',
    culturalThread: 'La cocina, las fiestas, los textiles y las músicas cambian entre costa, Andes y Amazonía. El ceviche es una práctica culinaria con variantes y saberes regionales.',
    languageContext: 'Además del español, el quechua, el aimara y muchas lenguas amazónicas forman parte de la vida del país.',
    expression: { phrase: '¡Qué bacán!', translation: 'How cool!', note: 'Aprobación coloquial usada en Perú; su uso varía por región y grupo.' },
    sourceLabel: 'UNESCO · Ceviche y cocina tradicional peruana', sourceUrl: 'https://ich.unesco.org/es/RL/practicas-y-significados-asociados-a-la-preparacion-y-consumo-del-ceviche-expresion-de-la-cocina-tradicional-peruana-01952?RL=01952',
  },
  {
    country: 'Bolivia', region: 'Sudamérica',
    culturalThread: 'El Carnaval de Oruro combina danzas, música, máscaras y bordados en una celebración con raíces indígenas y católicas. Es una tradición importante, no una representación de todo el país.',
    languageContext: 'Bolivia reconoce el castellano y las lenguas de numerosos pueblos indígenas; entre las más habladas están quechua, aimara y guaraní.',
    expression: { phrase: '¡Jallalla!', translation: 'Long live! / May it thrive!', note: 'Expresión de celebración presente en contextos aymaras y andinos; el sentido depende de la lengua y la ocasión.' },
    sourceLabel: 'UNESCO · Carnaval de Oruro', sourceUrl: 'https://ich.unesco.org/es/RL/el-carnaval-de-oruro-00003',
  },
  {
    country: 'Chile', region: 'Sudamérica',
    culturalThread: 'Los bailes chinos son hermandades locales de músicos y bailarines ligadas a fiestas religiosas; otras expresiones incluyen tradiciones mapuche, aymara y Rapa Nui.',
    languageContext: 'El español chileno tiene modismos propios; también se hablan lenguas indígenas, aunque su uso varía ampliamente entre comunidades.',
    expression: { phrase: '¿Cachai?', translation: 'You know? / Do you get it?', note: 'Muletilla informal chilena, sobre todo en conversación cotidiana.' },
    sourceLabel: 'UNESCO · Bailes chinos', sourceUrl: 'https://ich.unesco.org/es/RL/el-baile-chino-00988',
  },
  {
    country: 'Argentina', region: 'Sudamérica',
    culturalThread: 'El tango nació en el Río de la Plata y es compartido con Uruguay. Otras regiones tienen tradiciones propias, como el chamamé en el nordeste y el cuarteto en Córdoba.',
    languageContext: 'En el área rioplatense es común el voseo («vos tenés»); el español cambia mucho entre provincias y comunidades.',
    expression: { phrase: 'Che, ¿cómo andás?', translation: 'Hey, how are you?', note: 'Saludo informal rioplatense que usa voseo; «che» también se asocia con Uruguay.' },
    sourceLabel: 'UNESCO · Tango, tradición de Argentina y Uruguay', sourceUrl: 'https://ich.unesco.org/es/RL/el-tango-00258?RL=00258',
  },
  {
    country: 'Uruguay', region: 'Sudamérica',
    culturalThread: 'El candombe se transmite en comunidades afro-uruguayas y sus llamadas de tambores identifican barrios de Montevideo. El tango es una tradición compartida con Argentina.',
    languageContext: 'El español rioplatense usa «vos» en muchos contextos informales; el vocabulario y la entonación varían entre regiones.',
    expression: { phrase: 'Bo, ¿todo bien?', translation: 'Hey, all good?', note: '«Bo» es un vocativo coloquial muy asociado con Uruguay.' },
    sourceLabel: 'UNESCO · Candombe uruguayo', sourceUrl: 'https://ich.unesco.org/es/RL/el-candombe-y-su-espacio-sociocultural-una-practica-comunitaria-00182',
  },
  {
    country: 'Paraguay', region: 'Sudamérica',
    culturalThread: 'La guarania mezcla elementos de música indígena y popular. El tereré y otras prácticas cotidianas también muestran cómo la cultura guaraní sigue presente hoy.',
    languageContext: 'El español y el guaraní tienen una presencia amplia; muchas personas alternan entre ambos según la comunidad y la situación.',
    expression: { phrase: 'Mba’éichapa?', translation: 'How are you?', note: 'Saludo en guaraní, una lengua viva de uso cotidiano; no es una frase en español.' },
    sourceLabel: 'UNESCO · Guarania paraguaya', sourceUrl: 'https://ich.unesco.org/en/RL/guarania-sound-of-paraguayan-soul-02128',
  },
  {
    country: 'Guinea Ecuatorial', region: 'África',
    culturalThread: 'La cultura del país reúne comunidades fang, bubi, ndowé, annobonesas y otras. Cada comunidad conserva prácticas, músicas e historias propias.',
    languageContext: 'El español coexiste con el francés y el portugués como lengua oficial, además de lenguas locales como fang, bubi y fá d’ambô.',
    sourceLabel: 'Gobierno de Guinea Ecuatorial · Pueblos y culturas', sourceUrl: 'https://www.guineaecuatorialpress.com/noticias/pueblos_y_culturas',
  },
];

export const BEYOND_SPAIN_SOURCES = [
  { label: 'Instituto Cervantes · El español en el mundo 2025', href: 'https://cvc.cervantes.es/lengua/anuario/anuario_25/moreno-alvarez/cuadros.htm' },
  { label: 'UNESCO · Patrimonio cultural inmaterial', href: 'https://ich.unesco.org/es/listas' },
  { label: 'Guinea Ecuatorial · Pueblos y culturas', href: 'https://www.guineaecuatorialpress.com/noticias/pueblos_y_culturas' },
];
