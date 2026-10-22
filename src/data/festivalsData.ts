export interface SpanishFestival {
  id: string;
  name: string;
  community: string;
  place: string;
  season: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  history: string;
  highlights: string[];
  visitorNote: string;
  sourceUrl: string;
}

const spainImage = (path: string) => `https://www.spain.info/export/sites/segtur/.content/imagenes/${path}`;
const heritageSource = 'https://www.spain.info/en/discover-spain/fiestas-spain-unesco-intangible-cultural-heritage/';

// A practical selection of well-established festivals from every autonomous community.
// Spain has many more local fiestas; the official calendar is linked from the page.
export const SPANISH_FESTIVALS: SpanishFestival[] = [
  {
    id: 'semana-santa-sevilla', name: 'Semana Santa de Sevilla', community: 'Andalucía', place: 'Sevilla', season: 'Marzo o abril · fecha móvil',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/andalucia/semana-santa-sevilla.jpg_604889389.jpg'), imageAlt: 'Procesión de Semana Santa por las calles de Sevilla',
    summary: 'Hermandades recorren la ciudad con pasos, música y saetas.',
    history: 'Las cofradías y procesiones sevillanas tienen una larga historia, especialmente documentada desde el siglo XVI. Cada hermandad organiza su recorrido con imágenes religiosas sobre pasos, acompañadas por nazarenos y música.',
    highlights: ['Pasos llevados por costaleros', 'Marchas de bandas y saetas cantadas desde los balcones', 'Procesiones que cruzan el centro histórico'],
    visitorNote: 'Consulta los recorridos y horarios oficiales: las calles se llenan y los itinerarios cambian cada año.',
    sourceUrl: 'https://www.spain.info/es/agenda/semana-santa-sevilla/'
  },
  {
    id: 'feria-abril-sevilla', name: 'Feria de Abril', community: 'Andalucía', place: 'Sevilla', season: 'Abril o mayo · fechas variables',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/andalucia/Feria-Abril-sevilla-s246639133.jpg_604889389.jpg'), imageAlt: 'Casetas y farolillos de la Feria de Abril de Sevilla',
    summary: 'Una feria de casetas, sevillanas, caballos y convivencia.',
    history: 'Comenzó en 1847 como una feria de ganado. Con el tiempo, las reuniones alrededor de las casetas y la música se convirtieron en el centro de una celebración que hoy dura una semana.',
    highlights: ['El alumbrado inaugura la feria', 'Casetas con música y baile', 'Paseos de caballos y carruajes durante el día'],
    visitorNote: 'Muchas casetas son privadas; revisa cuáles son de acceso público y el programa municipal antes de ir.',
    sourceUrl: 'https://www.spain.info/en/calendar/april-fair/'
  },
  {
    id: 'romeria-rocio', name: 'Romería de El Rocío', community: 'Andalucía', place: 'Almonte, Huelva', season: 'Pentecostés · 50 días después de Pascua',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/andalucia/romeria-rocio-frangarciaespina-002-c.jpg_604889389.jpg'), imageAlt: 'Carretas y romeros durante la peregrinación de El Rocío',
    summary: 'Hermandades peregrinan a pie, a caballo y en carretas hasta El Rocío.',
    history: 'La romería reúne hermandades de distintos lugares para llegar al santuario de la Virgen del Rocío. La peregrinación combina devoción, convivencia y caminos que atraviesan los paisajes de Doñana.',
    highlights: ['Peregrinaciones por distintos caminos', 'Carretas y caballos', 'Procesión de la Virgen durante Pentecostés'],
    visitorNote: 'El entorno de Doñana es frágil; sigue los caminos permitidos y las indicaciones de las autoridades.',
    sourceUrl: 'https://www.spain.info/en/calendar/el-rocio-pilgrimage/'
  },
  {
    id: 'patios-cordoba', name: 'Fiesta de los Patios', community: 'Andalucía', place: 'Córdoba', season: 'Primera quincena de mayo',
    imageUrl: spainImage('reportajes/andalucia/patio_cordoba_t1400043.jpg'), imageAlt: 'Patio cordobés decorado con macetas y flores',
    summary: 'Vecinos abren patios llenos de flores y compiten por su cuidado.',
    history: 'El patio es un espacio tradicional de la vida familiar y vecinal en Córdoba. Durante la fiesta, sus habitantes abren las puertas y participan en un concurso de patios decorados con macetas y flores.',
    highlights: ['Patios abiertos al público', 'Macetas de geranios, claveles y jazmines', 'Música y actividades en algunos patios'],
    visitorNote: 'Los horarios y patios participantes se publican cada año; algunos espacios pueden tener aforo limitado.',
    sourceUrl: 'https://www.spain.info/en/calendar/festival-courtyards-cordoba/'
  },
  {
    id: 'carnaval-cadiz', name: 'Carnaval de Cádiz', community: 'Andalucía', place: 'Cádiz', season: 'Febrero o marzo · fecha móvil',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/andalucia/carnavales-cadiz-c-jose-pizarro-123rf-32879618.jpg_604889389.jpg', imageAlt: 'Agrupación de carnaval cantando en las calles de Cádiz',
    summary: 'Coplas satíricas, disfraces y agrupaciones cantan por las calles.',
    history: 'La fiesta combina un concurso de agrupaciones en el Teatro Falla con celebraciones abiertas en la calle. Sus chirigotas y otros grupos usan canciones humorísticas para comentar la actualidad.',
    highlights: ['Chirigotas, comparsas y coros', 'Coplas con humor y crítica social', 'Cabalgatas y actuaciones en plazas del casco histórico'],
    visitorNote: 'Reserva alojamiento con tiempo: el centro se llena y las fechas dependen del calendario de Carnaval.',
    sourceUrl: 'https://www.spain.info/es/agenda/fiestas-carnaval-cadiz/'
  },
  {
    id: 'pilar-zaragoza', name: 'Fiestas del Pilar', community: 'Aragón', place: 'Zaragoza', season: 'Semana del 12 de octubre',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/aragon/el-pilar.jpg_604889389.jpg'), imageAlt: 'Bailes tradicionales durante las Fiestas del Pilar en Zaragoza',
    summary: 'La ciudad celebra a la Virgen del Pilar con una gran ofrenda floral.',
    history: 'Son las fiestas principales de Zaragoza y se celebran en torno al 12 de octubre, día de la Virgen del Pilar, patrona de la ciudad. La ofrenda floral reúne a participantes vestidos con trajes tradicionales.',
    highlights: ['Ofrenda de flores en la plaza del Pilar', 'Comparsas de gigantes y cabezudos', 'Conciertos, actos populares y Rosario de Cristal'],
    visitorNote: 'El programa ocupa varios días y cambia cada año; consulta horarios y cierres de calles.',
    sourceUrl: 'https://www.spain.info/en/calendar/fiestas-pilar/'
  },
  {
    id: 'semana-santa-hijar', name: 'Semana Santa de Híjar', community: 'Aragón', place: 'Híjar, Teruel', season: 'Semana Santa · fecha móvil',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/aragon/semana-santa-hijar.jpg_604889389.jpg'), imageAlt: 'Tamborada de Semana Santa en Híjar, Teruel',
    summary: 'Tambores y bombos llenan el pueblo durante las procesiones.',
    history: 'Híjar forma parte de la Ruta del Tambor y el Bombo del Bajo Aragón. Su procesión de tambores se documenta desde comienzos del siglo XVI; uno de los momentos centrales es la rompida, cuando los tambores empiezan a sonar juntos.',
    highlights: ['Rompida de la Hora', 'Redobles durante la noche', 'Procesiones de Semana Santa por el pueblo'],
    visitorNote: 'El sonido puede ser muy intenso y durar horas; lleva protección auditiva si eres sensible al ruido.',
    sourceUrl: 'https://www.spain.info/en/calendar/easter-week-hijar/'
  },
  {
    id: 'descenso-sella', name: 'Descenso Internacional del Sella', community: 'Principado de Asturias', place: 'Arriondas y Ribadesella', season: 'Primer sábado de agosto',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/asturias/descenso_sella_arriondas_t3300931.jpg_604889389.jpg', imageAlt: 'Piragüistas compiten en el Descenso Internacional del Sella',
    summary: 'Una carrera de piraguas por el río Sella acompañada por una fiesta popular.',
    history: 'La prueba se celebra desde 1930. Los palistas recorren el río desde Arriondas hacia Ribadesella, mientras el tren fluvial y miles de espectadores siguen la jornada.',
    highlights: ['Salida festiva en Arriondas', 'Recorrido deportivo por el río Sella', 'Música y celebración al llegar a Ribadesella'],
    visitorNote: 'La competición y el descenso recreativo son actividades distintas; revisa las normas y accesos oficiales.',
    sourceUrl: 'https://www.spain.info/en/calendar/fiesta-internacional-kayak-race-sella/'
  },
  {
    id: 'vijanera', name: 'La Vijanera', community: 'Cantabria', place: 'Silió, Molledo', season: 'Primer domingo de enero',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/cantabria/Vijanera-2015-cantabria-02791-c.jpg_604889389.jpg'), imageAlt: 'Personajes enmascarados de La Vijanera en Cantabria',
    summary: 'Un desfile teatral de máscaras que representa el cambio de año.',
    history: 'La Vijanera es una mascarada de invierno en la que los vecinos representan personajes con máscaras, pieles y trajes. Sus escenas satíricas y el final simbólico expresan el paso del invierno al nuevo año.',
    highlights: ['Personajes como los zamarracos y el oso', 'Coplas satíricas sobre el año que termina', 'Desfile por las calles de Silió'],
    visitorNote: 'Es una fiesta muy concurrida en un pueblo pequeño; llega temprano y respeta el espacio de los participantes.',
    sourceUrl: 'https://www.spain.info/en/calendar/fiestas-la-vijanera/'
  },
  {
    id: 'corpus-toledo', name: 'Corpus Christi de Toledo', community: 'Castilla-La Mancha', place: 'Toledo', season: 'Mayo o junio · jueves de Corpus',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/castilla-mancha/Toledo-CORPUS-CHRISTI-06164-c-Ciudades-Patrimonio.jpg_604889389.jpg'), imageAlt: 'Procesión del Corpus Christi por las calles decoradas de Toledo',
    summary: 'Una procesión recorre las calles históricas, adornadas para la ocasión.',
    history: 'La celebración está documentada en Toledo desde el siglo XV, aunque no se conoce una fecha exacta de inicio. La procesión incorpora la custodia de la catedral, una pieza de orfebrería del siglo XVI.',
    highlights: ['Calles cubiertas con toldos y adornos', 'Procesión con la custodia de Arfe', 'Patios históricos abiertos en algunas casas'],
    visitorNote: 'Las calles del recorrido se cierran y se llenan; comprueba con antelación los accesos y asientos disponibles.',
    sourceUrl: 'https://www.spain.info/en/calendar/corpus-christi-toledo/'
  },
  {
    id: 'paso-fuego', name: 'Paso del Fuego y Las Móndidas', community: 'Castilla y León', place: 'San Pedro Manrique, Soria', season: 'Noche del 23 de junio',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/castilla-leon/paso-fuego-mondidas-soria.jpg_604889389.jpg'), imageAlt: 'Paso del Fuego de San Pedro Manrique durante la noche de San Juan',
    summary: 'La noche de San Juan combina un rito de fuego con una tradición local.',
    history: 'En San Pedro Manrique, la celebración incluye el paso descalzo de algunos vecinos sobre una alfombra de brasas. El origen exacto del rito no está confirmado; Las Móndidas participan en otros actos tradicionales de la localidad.',
    highlights: ['Hoguera preparada para el paso sobre brasas', 'Las Móndidas y sus cestas rituales', 'Celebración nocturna vinculada a San Juan'],
    visitorNote: 'Observa el rito desde las zonas habilitadas; no intentes cruzar las brasas.',
    sourceUrl: 'https://www.spain.info/en/calendar/paso-fuego-mondidas/'
  },
  {
    id: 'patum-berga', name: 'La Patum de Berga', community: 'Cataluña', place: 'Berga, Barcelona', season: 'Semana del Corpus Christi · mayo o junio',
    imageUrl: spainImage('reportajes/cataluna/la-patum-gigantes-C-OLLAU_07_FT_184-.jpg'), imageAlt: 'Figuras tradicionales y gigantes de La Patum de Berga',
    summary: 'Figuras, música y fuego llenan la plaza durante la fiesta del Corpus.',
    history: 'La Patum está vinculada a las celebraciones del Corpus Christi y se representa, casi sin interrupción, desde el siglo XV. En 2005 fue inscrita por la UNESCO como patrimonio cultural inmaterial.',
    highlights: ['Gigantes, cabezudos, águilas y figuras de fuego', 'Desfiles y representaciones en las calles', 'Actos para adultos y una Patum infantil'],
    visitorNote: 'Los actos de plaza pueden ser muy densos y ruidosos; consulta las normas de acceso y la programación local.',
    sourceUrl: 'https://www.spain.info/en/calendar/fiesta-patum-berga/'
  },
  {
    id: 'sant-joan-tarragona', name: 'Sant Joan', community: 'Cataluña', place: 'Tarragona', season: 'Noche del 23 al 24 de junio',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/genericas/SEG-TUR-Evento-fiesta.jpg_193627401.jpg', imageAlt: 'Celebración popular durante la noche de Sant Joan',
    summary: 'La noche más corta del año se celebra con hogueras y reuniones populares.',
    history: 'Sant Joan coincide con la víspera del día de San Juan y las celebraciones del solsticio de verano. En Tarragona, la Flama del Canigó se usa simbólicamente para encender hogueras en distintos puntos de la ciudad.',
    highlights: ['Hogueras y cenas populares', 'Música y celebraciones en las calles', 'Petardos y actos hasta la madrugada'],
    visitorNote: 'Mantén distancia de las hogueras y sigue las instrucciones locales sobre petardos y zonas seguras.',
    sourceUrl: 'https://www.spain.info/en/calendar/sant-joan/'
  },
  {
    id: 'fallas-valencia', name: 'Las Fallas', community: 'Comunitat Valenciana', place: 'Valencia', season: '15–19 de marzo',
    imageUrl: spainImage('reportajes/valencia/fallas_valencia_t4600672_03.jpg'), imageAlt: 'Monumentos falleros y fuegos de Las Fallas de Valencia',
    summary: 'Monumentos satíricos, pólvora y música culminan con la cremà.',
    history: 'Las Fallas transforman barrios enteros en espacios de sátira y arte efímero. Cada marzo se plantan monumentos falleros y, la noche del 19, la cremà pone fin a la fiesta; la tradición está reconocida por la UNESCO.',
    highlights: ['Monumentos falleros y ninots', 'Mascletàs, bandas y ofrenda floral', 'Cremà la noche del 19 de marzo'],
    visitorNote: 'Los petardos y las aglomeraciones son parte de la fiesta: protege el oído y sigue los cortes y rutas peatonales.',
    sourceUrl: heritageSource
  },
  {
    id: 'tomatina', name: 'La Tomatina', community: 'Comunitat Valenciana', place: 'Buñol, Valencia', season: 'Último miércoles de agosto',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/comunidad-valenciana/tomatina-bunol-c-LaTomatinaOficial.jpg_604889389.jpg', imageAlt: 'Participantes en la batalla de tomates de Buñol',
    summary: 'Una batalla de tomates convierte el centro de Buñol en una fiesta colectiva.',
    history: 'La Tomatina nació de una pelea entre jóvenes en 1945 y se repitió hasta convertirse en una fiesta anual. La batalla tiene un comienzo y un final señalados por la organización.',
    highlights: ['Batalla de tomates en las calles de Buñol', 'Camiones municipales reparten los tomates', 'Limpieza colectiva al terminar'],
    visitorNote: 'El acceso puede requerir entrada y las reglas cambian; consulta la web oficial antes de viajar.',
    sourceUrl: 'https://www.spain.info/en/calendar/la-tomatina/'
  },
  {
    id: 'moros-cristianos-alcoy', name: 'Moros y Cristianos de Alcoy', community: 'Comunitat Valenciana', place: 'Alcoy, Alicante', season: 'Abril · en torno al 23',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/comunidad-valenciana/Moros-cristianos-alcoy-s454520704.jpg_604889389.jpg'), imageAlt: 'Desfile de Moros y Cristianos en Alcoy',
    summary: 'Desfiles y representaciones recuerdan una batalla local del siglo XIII.',
    history: 'La fiesta se celebra desde el siglo XVI en honor a San Jorge y conmemora el enfrentamiento de 1276 entre Alcoy y las tropas de Al-Azraq. La aparición de San Jorge pertenece a la tradición legendaria local.',
    highlights: ['Desfiles de los bandos moro y cristiano', 'Bandas de música y trajes elaborados', 'Alardo y representación de la batalla'],
    visitorNote: 'Los actos con pólvora tienen zonas y normas propias; observa desde los espacios señalados.',
    sourceUrl: 'https://www.spain.info/en/calendar/fiestas-moors-christians-alcoy/'
  },
  {
    id: 'mare-de-deu-algemesi', name: 'Mare de Déu de la Salut', community: 'Comunitat Valenciana', place: 'Algemesí, Valencia', season: '7 y 8 de septiembre',
    imageUrl: spainImage('reportajes/valencia/algemesi-castell-en-cosnstruccion-mare-de-deu-c-rafa-esteve.jpg'), imageAlt: 'Tradición de Algemesí vinculada a la Mare de Déu de la Salut',
    summary: 'Procesiones, música, teatro y danzas reúnen a los barrios de Algemesí.',
    history: 'La celebración mantiene una tradición comunitaria transmitida entre generaciones. Sus procesiones recorren los barrios históricos y presentan danzas, música y representaciones rituales; la UNESCO la reconoció como patrimonio cultural inmaterial.',
    highlights: ['Procesiones por cuatro barrios históricos', 'Danzas tradicionales y música de dolçaina y tabal', 'Participación de asociaciones locales'],
    visitorNote: 'Sigue el recorrido oficial y deja espacio a los grupos que participan en las danzas y procesiones.',
    sourceUrl: heritageSource
  },
  {
    id: 'misteri-elx', name: 'Misteri d’Elx', community: 'Comunitat Valenciana', place: 'Elche, Alicante', season: '14 y 15 de agosto · funciones especiales en años pares',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/comunidad-valenciana/fiesta_misterio_elche_t0300355.jpg_604889389.jpg', imageAlt: 'Representación del Misteri d’Elx en la Basílica de Santa María',
    summary: 'Un drama cantado en valenciano representa la dormición y asunción de María.',
    history: 'Este drama lírico de origen medieval se representa en la Basílica de Santa María. Sus dos actos, con música y texto en valenciano y latín, forman una tradición viva reconocida por la UNESCO.',
    highlights: ['Acto de la dormición el 14 de agosto', 'Acto de la asunción el 15 de agosto', 'Escenografía aérea y música medieval'],
    visitorNote: 'Las funciones principales suelen ser gratuitas, pero los ensayos requieren entrada; consulta la programación oficial.',
    sourceUrl: 'https://www.spain.info/en/calendar/elche-mystery-play/'
  },
  {
    id: 'jarramplas', name: 'Jarramplas', community: 'Extremadura', place: 'Piornal, Cáceres', season: '19 y 20 de enero',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/extremadura/jarramplas_en_el_campanario_de_Piornal-o-jorn-wendland.jpg_604889389.jpg'), imageAlt: 'Personaje de Jarramplas con máscara y cintas en Piornal',
    summary: 'Un personaje enmascarado recorre Piornal tocando el tamboril.',
    history: 'Jarramplas representa a un ladrón de ganado que es expulsado simbólicamente del pueblo. El público le lanza nabos facilitados por el ayuntamiento; el personaje lleva protección bajo su traje.',
    highlights: ['Máscara cónica y traje de cintas', 'Recorrido con tamboril por Piornal', 'Lanzamiento de nabos dentro de la tradición'],
    visitorNote: 'No te acerques a la trayectoria de los nabos ni al personaje; sigue las zonas y medidas de seguridad locales.',
    sourceUrl: 'https://www.spain.info/en/calendar/jarramplas/'
  },
  {
    id: 'rapa-das-bestas', name: 'Rapa das Bestas de Sabucedo', community: 'Galicia', place: 'Sabucedo, A Estrada, Pontevedra', season: 'Primera semana de julio',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/galicia/rapa_bestas_sabucedo_t3600153.jpg_604889389.jpg'), imageAlt: 'Trabajo tradicional de corte de crines durante la Rapa das Bestas',
    summary: 'Los vecinos reúnen caballos que viven libres para cortarles las crines.',
    history: 'La celebración está documentada desde el siglo XV. Tras reunir los caballos de los montes, los aloitadores trabajan en grupo para cortarles las crines y atender a los animales.',
    highlights: ['Búsqueda de caballos en los montes', 'Rapa en el curro de Sabucedo', 'Encuentros vecinales con música y comida'],
    visitorNote: 'Respeta a los animales y a los aloitadores; observa desde las zonas permitidas por la organización.',
    sourceUrl: 'https://www.spain.info/en/calendar/rapa-das-bestas-sabucedo/'
  },
  {
    id: 'romeria-vikinga-catoira', name: 'Romería Vikinga de Catoira', community: 'Galicia', place: 'Catoira, Pontevedra', season: 'Primer domingo de agosto',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/galicia/desembarco-vikingo-catoira-c-Sergiy1975-s317503508.jpg_604889389.jpg', imageAlt: 'Desembarco recreado durante la Romería Vikinga de Catoira',
    summary: 'Una recreación festiva recuerda las incursiones vikingas en la ría de Arousa.',
    history: 'La romería comenzó en 1960 y tiene lugar junto a las Torres de Oeste. La representación del desembarco recuerda los ataques vikingos y normandos que alcanzaron esta zona costera.',
    highlights: ['Desembarco teatral en las Torres de Oeste', 'Barcos y vestuario de época', 'Celebración popular junto al río Ulla'],
    visitorNote: 'La recreación atrae mucho público y puede incluir contacto con agua; protege tus pertenencias y sigue las indicaciones locales.',
    sourceUrl: 'https://www.spain.info/en/calendar/viking-procession/'
  },
  {
    id: 'san-isidro', name: 'Fiestas de San Isidro', community: 'Comunidad de Madrid', place: 'Madrid', season: 'En torno al 15 de mayo',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/madrid/fiesta-san-isidro-s-FlorentinoArG-Shutterstock.com.jpg_604889389.jpg', imageAlt: 'Celebración tradicional de San Isidro en Madrid',
    summary: 'Madrid honra a su patrón con romería, música y costumbres castizas.',
    history: 'San Isidro fue un labrador madrileño del siglo XII. La fiesta del 15 de mayo reúne actos religiosos y populares, especialmente en la pradera asociada a la romería del santo.',
    highlights: ['Romería a la pradera de San Isidro', 'Chulapos y chulapas con trajes tradicionales', 'Música, bailes y rosquillas típicas'],
    visitorNote: 'Consulta el programa municipal para conocer horarios, conciertos y cortes de tráfico.',
    sourceUrl: 'https://www.spain.info/en/calendar/san-isidro-fiestas/'
  },
  {
    id: 'bando-huerta', name: 'Bando de la Huerta', community: 'Región de Murcia', place: 'Murcia', season: 'Martes siguiente al Domingo de Resurrección',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/murcia/bando-huerta-s-MarinaNozhko-Shutterstock.com.jpg_604889389.jpg', imageAlt: 'Participantes con vestimenta huertana en el Bando de la Huerta',
    summary: 'Un desfile celebra la cultura de la huerta murciana y sus tradiciones.',
    history: 'El Bando forma parte de las Fiestas de Primavera de Murcia. Sus participantes muestran indumentaria huertana, música, bailes y elementos de la vida agrícola de la región.',
    highlights: ['Desfile de carrozas y grupos huertanos', 'Trajes tradicionales y música popular', 'Celebración de la huerta y sus productos'],
    visitorNote: 'La ciudad se llena de visitantes; revisa las normas municipales de acceso y consumo en la vía pública.',
    sourceUrl: 'https://www.spain.info/en/calendar/bando-huerta/'
  },
  {
    id: 'caballos-vino', name: 'Caballos del Vino', community: 'Región de Murcia', place: 'Caravaca de la Cruz', season: '1–3 de mayo · carrera el día 2',
    imageUrl: spainImage('reportajes/murcia/caballos-del-vino-caravaca-de-la-cruz-murcia-c-david-moreno-s1387012901.jpg'), imageAlt: 'Caballo con manto bordado en la fiesta de los Caballos del Vino',
    summary: 'Caballos con mantos bordados recorren las calles camino del castillo.',
    history: 'La fiesta forma parte de las celebraciones de la Santísima y Vera Cruz. La carrera del 2 de mayo evoca una leyenda local; los mantos bordados y las habilidades para cuidar a los caballos son parte esencial de la tradición, reconocida por la UNESCO en 2020.',
    highlights: ['Mantos de seda bordados con hilos de oro', 'Carrera hasta el castillo el 2 de mayo', 'Desfiles y celebraciones en honor a la Vera Cruz'],
    visitorNote: 'La carrera atraviesa una multitud; observa desde un lugar seguro y sigue las instrucciones de la organización.',
    sourceUrl: 'https://www.spain.info/en/calendar/caballos-vino-unesco-heritage/'
  },
  {
    id: 'entierro-sardina', name: 'Entierro de la Sardina', community: 'Región de Murcia', place: 'Murcia', season: 'Sábado posterior a Semana Santa',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/murcia/entierro-sardina-s-PodolnayaElena-Shutterstock.com.jpg_604889389.jpg', imageAlt: 'Desfile nocturno del Entierro de la Sardina en Murcia',
    summary: 'Carrozas, grupos sardineros y fuegos artificiales cierran las Fiestas de Primavera.',
    history: 'La tradición murciana se remonta a 1850, cuando un grupo de estudiantes organizó un cortejo presidido por una sardina como despedida simbólica del Carnaval. Hoy el desfile culmina con la quema de la sardina.',
    highlights: ['Lectura humorística del Testamento de la Sardina', 'Carrozas y comparsas por la ciudad', 'Quema de la sardina y fuegos artificiales'],
    visitorNote: 'Los caramelos y juguetes lanzados desde carrozas pueden atraer multitudes; mantén distancia y cuida a los niños.',
    sourceUrl: 'https://www.spain.info/en/calendar/sardine-burial/'
  },
  {
    id: 'san-fermin', name: 'San Fermín', community: 'Comunidad Foral de Navarra', place: 'Pamplona', season: '6–14 de julio',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/galeria-destacados/eventos/navarra/san-fermin-galeria3.jpg', imageAlt: 'Celebración de San Fermín en Pamplona',
    summary: 'Nueve días de actos populares, música y encierros en Pamplona.',
    history: 'Las fiestas de San Fermín combinan celebraciones religiosas y populares. El encierro, que acompaña a los toros desde los corrales hasta la plaza, es hoy su acto más conocido, aunque el programa incluye muchos otros eventos.',
    highlights: ['Chupinazo de apertura el 6 de julio', 'Procesión y actos en honor a San Fermín', 'Encierros matinales y música por toda la ciudad'],
    visitorNote: 'El encierro es peligroso. Si no participas, obsérvalo desde un balcón o zona autorizada y sigue las indicaciones oficiales.',
    sourceUrl: 'https://www.spain.info/en/calendar/san-fermin-fiestas/'
  },
  {
    id: 'tamborrada-donostia', name: 'Tamborrada de San Sebastián', community: 'País Vasco', place: 'Donostia / San Sebastián', season: '20 de enero',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/reportajes/genericas/tamborrada-san-sebastian-001-c-t-san-sebastian-javier-larrea.jpg', imageAlt: 'Tamborrada de San Sebastián con tambores y uniformes tradicionales',
    summary: 'Tamborradas recorren la ciudad durante el día de San Sebastián.',
    history: 'La fiesta se celebra cada 20 de enero en honor al patrón de la ciudad. Sus compañías de tamborreros recorren las calles con uniformes de inspiración militar y trajes de cocineros, acompañados por la Marcha de San Sebastián.',
    highlights: ['Izada de la bandera a medianoche', 'Compañías de tambores y barriles', 'Participación de sociedades gastronómicas y escuelas'],
    visitorNote: 'Las calles del centro pueden estar muy concurridas durante los desfiles; consulta rutas y horarios.',
    sourceUrl: 'https://www.spain.info/en/discover-spain/drumming-easter-spain/'
  },
  {
    id: 'batalla-vino-haro', name: 'Batalla del Vino', community: 'La Rioja', place: 'Haro', season: '29 de junio',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/rioja/batalla-vino-haro.jpg_604889389.jpg', imageAlt: 'Celebrantes vestidos de blanco durante la Batalla del Vino de Haro',
    summary: 'Una romería termina con una batalla festiva de vino entre participantes.',
    history: 'La celebración comienza con una romería hasta los Riscos de Bilibio, en honor a San Felices. Con el tiempo, el encuentro incorporó el lanzamiento de vino, que tiñe de morado la ropa de los asistentes.',
    highlights: ['Romería a la ermita de San Felices', 'Batalla popular de vino', 'Música y celebración de regreso en Haro'],
    visitorNote: 'Lleva ropa que pueda mancharse, calzado con buen agarre y protege los ojos; sigue los espacios habilitados.',
    sourceUrl: 'https://www.spain.info/es/agenda/batalla-vino/'
  },
  {
    id: 'pan-queso-quel', name: 'Fiesta del Pan y el Queso', community: 'La Rioja', place: 'Quel', season: '6 de agosto',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/eventos-fiestas/rioja/fiesta-pan-y-queso-c-turismo-quel.jpg_604889389.jpg', imageAlt: 'Reparto tradicional de pan y queso en Quel, La Rioja',
    summary: 'Vecinos y visitantes comparten pan y queso en una tradición centenaria.',
    history: 'Los registros municipales sitúan esta costumbre en 1479. La fiesta mantiene el reparto de pan y queso desde el cerro de Santa Cruz como recuerdo de una antigua rogativa contra una epidemia.',
    highlights: ['Subida al cerro de Santa Cruz', 'Bendición y reparto de pan y queso', 'Celebración popular en Quel'],
    visitorNote: 'Confirma la hora del reparto con el ayuntamiento y llega con tiempo para el recorrido.',
    sourceUrl: 'https://www.spain.info/en/calendar/fiesta-pan-queso/'
  },
  {
    id: 'canto-sibila', name: 'Canto de la Sibila', community: 'Illes Balears', place: 'Mallorca', season: 'Noche del 24 de diciembre',
    imageUrl: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/baleares/catedral-palma_c-Renata-Sedmakova_s1310877356.jpg_604889389.jpg', imageAlt: 'Interior de la Catedral de Palma, donde se interpreta el Canto de la Sibila',
    summary: 'Un canto medieval acompaña la misa de Nochebuena en iglesias de Mallorca.',
    history: 'Este canto religioso de origen medieval se conserva en Mallorca y fue reconocido por la UNESCO. Lo interpreta una persona joven acompañada por el órgano y otros participantes de distintas generaciones.',
    highlights: ['Interpretación durante la misa de Nochebuena', 'Canto solista con acompañamiento de órgano', 'Tradición viva en pueblos y ciudades de Mallorca'],
    visitorNote: 'Es una celebración religiosa; comprueba si la iglesia permite visitantes y llega antes de que empiece la misa.',
    sourceUrl: 'https://www.spain.info/en/calendar/song-sibyl-mallorca/'
  },
  {
    id: 'carnaval-tenerife', name: 'Carnaval de Santa Cruz de Tenerife', community: 'Canarias', place: 'Santa Cruz de Tenerife', season: 'Febrero o marzo · fecha móvil',
    imageUrl: spainImage('cabeceras-grandes/eventos-fiestas/canarias/carnaval-tenerife.jpg_604889389.jpg'), imageAlt: 'Comparsas y disfraces durante el Carnaval de Santa Cruz de Tenerife',
    summary: 'Desfiles, comparsas y disfraces convierten la ciudad en una fiesta callejera.',
    history: 'El carnaval de Santa Cruz reúne concursos de agrupaciones y celebraciones abiertas en la calle. La elección de la Reina y el Entierro de la Sardina son dos de sus actos más conocidos.',
    highlights: ['Gala de elección de la Reina del Carnaval', 'Ritmo de murgas y comparsas', 'Cabalgata y Entierro de la Sardina'],
    visitorNote: 'Las fechas cambian cada año y algunos actos requieren entrada; consulta el programa municipal.',
    sourceUrl: 'https://www.spain.info/en/calendar/fiestas-carnival-santa-cruz-tenerife/'
  }
];

export const FESTIVAL_COMMUNITIES = Array.from(new Set(SPANISH_FESTIVALS.map((festival) => festival.community)));
