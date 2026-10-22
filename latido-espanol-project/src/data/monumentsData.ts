export interface MonumentItem {
  id: string;
  name: string;
  location: string;
  region: string;
  category: 'Monumento' | 'Montaña & Naturaleza' | 'Patrimonio de la Humanidad';
  imageUrl: string;
  imageAlt: string;
  caption: string; // 1 to 2-line description for the dynamic block directly below carousel
  historicalOverview: string; // Brief, elegant informational paragraph for the modal
  architecturalStyle?: string;
  historicalPeriod?: string;
  curiosity?: string;
}

export const MONUMENTS_HERO_DATA: MonumentItem[] = [
  {
    id: 'alhambra-granada',
    name: 'La Alhambra y el Generalife',
    location: 'Granada',
    region: 'Andalucía',
    category: 'Patrimonio de la Humanidad',
    imageUrl: 'https://images.unsplash.com/photo-1661083928798-a0c0d9f11e62?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Palacios nazaríes de la Alhambra enmarcados por los jardines del Generalife, Granada',
    caption: 'Ciudadela palaciega andalusí suspendida sobre la colina de la Sabika, cumbre universal del arte nazarí, jardines del Generalife y celosías de estuco.',
    historicalOverview: 'Erigida entre los siglos XIII y XIV bajo la dinastía nazarí, la Alhambra es uno de los monumentos más admirados de la historia universal. Su complejo entrelaza palacios señoriales, patios de arrayanes y leones con el murmullo continuo del agua, creando una arquitectura lírica diseñada para la eternidad antes de su entrega a los Reyes Católicos en 1492.',
    architecturalStyle: 'Arte Nazarí Andalusí',
    historicalPeriod: 'Siglos XIII–XIV (Dinastía Nazarí)',
    curiosity: 'Los poetas cortesanos tallaron más de diez mil versos árabes en sus muros, alabando la belleza de las fuentes y la geometría del cosmos.'
  },
  {
    id: 'sagrada-familia',
    name: 'Basílica de la Sagrada Família',
    location: 'Barcelona',
    region: 'Catalunya',
    category: 'Monumento',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Torres modernistas de la Sagrada Família recortadas sobre el cielo de Barcelona',
    caption: 'Magnum opus de Antoni Gaudí: un bosque de columnas hiperbólicas y vidrieras cromáticas que redefinen la arquitectura sagrada contemporánea.',
    historicalOverview: 'Iniciada en 1882 y consagrada por Gaudí como una oda a la naturaleza y la fe, la Sagrada Família es la cúspide del modernismo catalán. Sus fachadas del Nacimiento y de la Pasión narran episodios con un simbolismo orgánico revolucionario, mientras que su interior emula la luz tamizada de las copas de un bosque secular.',
    architecturalStyle: 'Modernismo Catalán / Expresionismo Orgánico',
    historicalPeriod: '1882 – Presente (En construcción)',
    curiosity: 'Gaudí afirmó que «el cliente de este templo no tiene prisa», convencido de que la naturaleza era la máxima manifestación de la creación divina.'
  },
  {
    id: 'picos-de-europa',
    name: 'Parque Nacional de los Picos de Europa',
    location: 'Asturias, Cantabria y León',
    region: 'Cordillera Cantábrica',
    category: 'Montaña & Naturaleza',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Cumbres escarpadas de roca caliza y valles verdes de los Picos de Europa',
    caption: 'El primer Parque Nacional declarado en España: colosales farallones de caliza, los legendarios Lagos de Covadonga y el macizo del Naranjo de Bulnes.',
    historicalOverview: 'Declarado en 1918 por el rey Alfonso XIII como Parque Nacional de la Montaña de Covadonga, protege las mayores formaciones de roca caliza de la Europa atlántica. Alberga gargantas fluviales de vértigo como la del Cares, bosques de hayas y robles milenarios, y cumbres que rozan los 2.650 metros a escasos kilómetros del mar Cantábrico.',
    architecturalStyle: 'Formaciones Kársticas Naturales',
    historicalPeriod: 'Declarado Parque Nacional en 1918 (Pionero en España)',
    curiosity: 'El emblemático Picu Urriellu (Naranjo de Bulnes) posee una pared vertical de 550 metros considerada el templo absoluto del alpinismo español.'
  },
  {
    id: 'acueducto-segovia',
    name: 'Acueducto Romano de Segovia',
    location: 'Segovia',
    region: 'Castilla y León',
    category: 'Patrimonio de la Humanidad',
    imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Arcada doble de sillares de granito del Acueducto Romano en la Plaza del Azoguejo',
    caption: 'Proeza civil bimilenaria levantada con 20.400 sillares de granito de Guadarrama unidos sin una sola gota de argamasa o cemento.',
    historicalOverview: 'Construido a principios del siglo II d.C. bajo los mandatos de los emperadores Domiciano y Trajano, el acueducto transportaba las aguas del río Frío desde la sierra hasta lo alto del alcázar de Segovia a lo largo de 15 kilómetros. Su arcada monumental en la Plaza del Azoguejo alcanza 28,5 metros de altura sostenida puramente por las leyes del equilibrio físico.',
    architecturalStyle: 'Ingeniería Civil Romana Imperial',
    historicalPeriod: 'Siglos I–II d.C. (Imperio Romano)',
    curiosity: 'Hasta el siglo XX continuó suministrando agua a los barrios históricos segovianos en un estado estructural de perfecta integridad.'
  },
  {
    id: 'parque-nacional-teide',
    name: 'Parque Nacional del Teide',
    location: 'Tenerife',
    region: 'Islas Canarias',
    category: 'Montaña & Naturaleza',
    imageUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'El estratovolcán del Teide alzándose sobre el mar de nubes y los Roques de García',
    caption: 'El techo de España a 3.715 metros sobre el Atlántico: un paisaje volcánico y lunar coronado por coladas de lava y tajinastes rojos.',
    historicalOverview: 'El Teide es el tercer volcán más alto del planeta medido desde su base oceánica. Venerado por los aborígenes guanches como Echeyde (morada de Guayota), este extraordinario circo volcánico de Las Cañadas constituye uno de los ecosistemas geológicos y astronómicos más prístinos y protegidos del mundo.',
    architecturalStyle: 'Estratovolcán y Caldera Geológica',
    historicalPeriod: 'Declarado Patrimonio de la Humanidad UNESCO en 2007',
    curiosity: 'Proyecta la mayor sombra sobre el mar del planeta al amanecer, una gigantesca pirámide perfecta visible desde varias islas del archipiélago.'
  },
  {
    id: 'plaza-espana-sevilla',
    name: 'Plaza de España de Sevilla',
    location: 'Sevilla',
    region: 'Andalucía',
    category: 'Monumento',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Canal navegable semicircular, puentes y arquería de la Plaza de España de Sevilla',
    caption: 'Teatro arquitectónico del regionalismo andaluz diseñado por Aníbal González para la Exposición Iberoamericana de 1929 con 48 bancos de cerámica.',
    historicalOverview: 'Con su planta semicircular de 200 metros de diámetro orientada hacia el río Guadalquivir como un abrazo a América, la Plaza de España es una sinfonía de ladrillo visto, mármol labrado y cerámica vidriada trianera. Sus cuatro puentes simbolizan los antiguos reinos de España (León, Castilla, Navarra y Aragón).',
    architecturalStyle: 'Regionalismo Neomudéjar y Renacentista',
    historicalPeriod: '1914–1929 (Aníbal González)',
    curiosity: 'Cada una de las 48 provincias peninsulares cuenta con un banco monumental con mapa y escenas históricas en azulejos policromados.'
  },
  {
    id: 'mezquita-catedral-cordoba',
    name: 'Mezquita-Catedral de Córdoba',
    location: 'Córdoba',
    region: 'Andalucía',
    category: 'Patrimonio de la Humanidad',
    imageUrl: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Bosque de 856 columnas con arcos dobles bicolores de herradura de la Mezquita de Córdoba',
    caption: 'Bosque sacro de 856 columnas de jaspe, granito y mármol con arquerías polilobuladas que entrelazan el esplendor califal y el Renacimiento.',
    historicalOverview: 'Fundada por Abderramán I en 786 sobre la basílica hispanorromana de San Vicente y ampliada por Almanzor, la Gran Mezquita de Córdoba fue el faro espiritual y cultural de Occidente durante el Califato Omeya. Tras la reconquista en 1236, se erigió en su corazón una majestuosa catedral gótico-renacentista, logrando una síntesis civilizatoria única en el mundo.',
    architecturalStyle: 'Arte Califal Andalusí y Renacentista Plateresco',
    historicalPeriod: 'Siglos VIII–XVI',
    curiosity: 'Su mihrab octogonal no mira directamente a La Meca, sino hacia el sur, siguiendo la tradición omeya de las mezquitas de Damasco.'
  },
  {
    id: 'molinos-consuegra',
    name: 'Molinos de Viento del Cerro Calderico',
    location: 'Consuegra',
    region: 'Castilla-La Mancha',
    category: 'Monumento',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Hilera de molinos de viento blancos manchegos en la cresta rocosa de Consuegra',
    caption: 'Los célebres «gigantes» de Don Quijote en la cresta rocosa manchega, custodiando el Castillo de la Muela sobre la llanura dorada.',
    historicalOverview: 'Los doce molinos de viento de Consuegra, erigidos a partir del siglo XVI, son el emblema universal de la novela cumbre de Miguel de Cervantes. Cada molino conserva su nombre cervantino (Sancho, Rucio, Bolero...) y cuatro de ellos conservan en perfecto estado de funcionamiento su mecanismo tradicional de madera para moler grano impulsado por el viento castellano.',
    architecturalStyle: 'Arquitectura Tradicional Manchega',
    historicalPeriod: 'Siglos XVI–XIX',
    curiosity: 'El molino «Sancho» cuenta con maquinaria original completa del siglo XVI y sigue moliendo trigo en las fiestas de la Rosa del Azafrán.'
  },
  {
    id: 'puente-nuevo-ronda',
    name: 'El Tajo y el Puente Nuevo de Ronda',
    location: 'Ronda',
    region: 'Andalucía',
    category: 'Monumento',
    imageUrl: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Puente Nuevo de sillería sobre la garganta de cien metros del Tajo de Ronda',
    caption: 'Vértigo y piedra labrada sobre la garganta de cien metros excavada por el río Guadalevín, uniendo la ciudad histórica y el barrio del Mercadillo.',
    historicalOverview: 'Construido a lo largo de 42 años por el arquitecto José Martín de Aldehuela entre 1751 y 1793, el Puente Nuevo es una de las mayores obras de ingeniería pétrea de la España ilustrada. Se asienta en el fondo del cañón del Tajo con una altura de 98 metros, convirtiendo a Ronda en una de las ciudades más románticas e inmortalizadas por viajeros como Hemingway y Rilke.',
    architecturalStyle: 'Ingeniería Monumental del Barroco Tardío',
    historicalPeriod: '1751–1793 (José Martín de Aldehuela)',
    curiosity: 'La estancia central situada sobre el arco principal sirvió como prisión secreta y más tarde como fonda de viajeros.'
  },
  {
    id: 'toledo-panoramica',
    name: 'Toledo: Ciudad de las Tres Culturas',
    location: 'Toledo',
    region: 'Castilla-La Mancha',
    category: 'Patrimonio de la Humanidad',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Vista panorámica de Toledo con el Alcázar y la Catedral sobre el meandro del río Tajo',
    caption: 'Emplazamiento defensivo imperial abrazado por el meandro del Tajo: encrucijada donde convivieron pacíficamente cristianos, judíos y musulmanes.',
    historicalOverview: 'Capital de la Hispania visigoda y corte itinerante de Carlos V, Toledo fue sede de la célebre Escuela de Traductores que iluminó el Renacimiento europeo. Su trazado medieval esconde sinagogas mudéjares como Santa María la Blanca, mezquitas del siglo X como Bab al-Mardum y una catedral primada que custodia obras maestras de El Greco.',
    architecturalStyle: 'Mudéjar, Gótico Español y Renacimiento',
    historicalPeriod: 'Época Visigoda, Andalusí y Medieval',
    curiosity: 'El pintor renacentista El Greco inmortalizó esta silueta en su célebre lienzo «Vista de Toledo», exhibido hoy en el Museo Metropolitano de Nueva York.'
  }
];
