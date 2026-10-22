import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const CASTILLA_Y_LEON_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'cochinillo-segovia',
    name: 'Cochinillo Asado de Segovia en Horno de Leña',
    spanishTitle: 'La corteza de cristal crujiente que se parte con el canto de un plato',
    category: 'Asados y Fuegos',
    originType: 'city',
    originLocation: 'Segovia (Castilla y León)',
    originBadge: 'RAÍZ MUNICIPAL · SEGOVIA',
    historicalRoot: 'Tradición de los mesones segovianos documentada desde el siglo XV y canonizada en el siglo XX por Cándido.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XV · Mesones al pie del Acueducto de Segovia',
      narrative: 'El cochinillo asado de Segovia es el emblema máximo de la cocina castellana de asador. Sus normas son de una pureza implacable: el lechón debe alimentarse exclusivamente de leche materna ("lechal"), tener menos de tres semanas de vida y un peso en canal entre 4 y 5 kilos. Asado en hornos morunos abovedados de ladrillo y barro alimentados con leña seca de encina, se coloca en cazuelas rectangulares de barro refractario sobre un lecho de tablillas de madera de abedul para que la piel nunca toque el agua del fondo. El vapor interior cocina la carne tierna como mantequilla mientras el calor seco de la bóveda convierte la piel en una lámina dorada de caramelo vítreo tan quebradiza y crujiente que puede partirse limpiamente con el borde de un plato de porcelana.',
      culturalEvolution: 'Protegido por la Marca de Garantía Cochinillo de Segovia y convertido en patrimonio etnográfico universal.',
      anecdoteOrLegend: 'El maestro asador Cándido López popularizó en los años 1930 el ceremonial del corte con plato: ante los comensales asombrados, partía el cochinillo entero en raciones usando únicamente el borde de un plato de loza blanca, arrojando después el plato al suelo de baldosas donde se estrellaba en pedazos en señal de fiesta y autenticidad indiscutible.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cochinillo_de_Segovia.jpg',
    imageAlt: 'Cochinillo asado de Segovia entero con piel dorada crujiente',
    imageCaption: 'Cochinillo de Segovia Marca de Garantía asado a la leña de encina con piel de cristal',
    photoTag: 'SEGOVIA · HORNO MORUNO DE LEÑA Y CORTE CON PLATO',
    description: 'Lechón lechal segoviano alimentado únicamente con leche materna, asado lentamente durante horas en horno de bóveda con leña de encina hasta lograr una carne jugosa que se deshace y una piel de cristal ultracrujiente.',
    ingredients: [
      '1 cochinillo de Segovia con Marca de Garantía (unos 4,5 kg)',
      '100 g de manteca de cerdo ibérico puro',
      '4 dientes de ajo y 1 hoja de laurel',
      'Agua limpia para el fondo de la cazuela',
      'Sal gorda marina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Preparación y Colocación en Cazuela de Barro',
        description: 'Abrir el cochinillo en canal por el espinazo de cabeza a rabo sin llegar a separar las mitades. Salar por dentro. Colocar en cazuela plana de barro con tablillas de madera en el fondo con la piel hacia abajo.',
        artisanTip: 'Las tablillas de madera evitan que el lechón toque el agua del fondo de la tartera, permitiendo que la carne se cueza al vapor sin hervir.'
      },
      {
        stepNumber: 2,
        title: 'Primera Fase de Horno a 180°C',
        description: 'Introducir en el horno moruno alimentado con leña de encina durante hora y media, vigilando que el fondo de la cazuela mantenga siempre un dedo de agua.',
        artisanTip: 'El agua del fondo evapora humedad continua dentro de la cavidad torácica, garantizando una carne tiernísima que no se reseca.'
      },
      {
        stepNumber: 3,
        title: 'Volteo y Pincelado de Manteca',
        description: 'Sacar la cazuela, dar la vuelta al cochinillo con cuidado para que la piel quede hacia arriba. Pinchar la piel en varios puntos con una aguja y pincelar finamente con manteca de cerdo derretida.',
        artisanTip: 'Pinchar la piel permite que el exceso de vapor salga sin formar ampollas grandes que arruinen la uniformidad de la costra dorada.'
      },
      {
        stepNumber: 4,
        title: 'Golpe de Calor Seco a 220°C',
        description: 'Volver a introducir al horno a temperatura más alta durante 45 minutos hasta que la piel adquiera un color ámbar brillante y suene a cristal duro al golpearla.',
        artisanTip: 'Comprobar el punto: el canto de un plato de porcelana debe penetrar la carne y la piel como si fuera mantequilla.'
      }
    ],
    processPhotos: [
      {
        title: 'Cochinillo en Canal sobre Tablillas',
        subtitle: 'Colocación en barro con agua en el fondo',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'El cochinillo crudo con la piel hacia abajo antes de entrar al horno de encina.'
      },
      {
        title: 'La Bóveda del Horno de Leña de Encina',
        subtitle: 'El calor envolvente refractario',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Llamas de leña de encina lamiendo la bóveda de barro en el mesón segoviano.'
      },
      {
        title: 'El Corte Ritual con el Plato de Cerámica',
        subtitle: 'Corteza quebradiza y carne tiernísima',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'El maestro asador partiendo el cochinillo con el borde del plato en Segovia.'
      }
    ],
    culinaryTerms: [
      { term: 'Lechal', definition: 'Cría de ganado que se alimenta exclusivamente de leche materna, lo que confiere a su carne una terneza extrema y sabor delicado.' },
      { term: 'Horno Moruno', definition: 'Horno de bóveda semicircular construido con ladrillo refractario y adobe que acumula el calor de la leña de encina.' },
      { term: 'Corte con Plato', definition: 'Rito tradicional segoviano donde el asado se trincha con el canto de un plato de porcelana para demostrar su crujido y terneza.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Reserva de la Ribera del Duero',
      regionDO: 'D.O. Ribera del Duero',
      note: 'Vino noble con crianza en roble, taninos sedosos y notas a fruta madura que doman la opulencia de la piel crujiente.'
    },
    culturalRitual: {
      title: 'El Brindis del Mesonero en la Plaza del Azoguejo',
      description: 'El ritual del corte con plato culmina con el lanzamiento del plato al suelo y un brindis con jarra de barro al pie del bimilenario Acueducto romano.'
    },
    keyPhrase: {
      spanish: '«Un cuarto de cochinillo asado de Segovia bien crujiente y un Ribera del Duero.»',
      english: 'A quarter of crispy Segovian roast suckling pig and a Ribera del Duero wine.',
      phonetic: 'oon KWAHR-toh deh koh-chee-NEE-lyoh ah-SAH-doh deh seh-GOH-vyah'
    }
  },
  {
    id: 'sopa-castellana',
    name: 'Sopa Castellana de Ajo y Huevo Escalfado',
    spanishTitle: 'El pan de hogaza tostado en AOVE con pimentón de la Vera y caldo de jamón',
    category: 'Cuchara y Puchero',
    originType: 'region',
    originLocation: 'Castilla y León',
    originBadge: 'ORIGEN REGIONAL · CASTILLA Y LEÓN',
    historicalRoot: 'Comida de pastores y campesinos castellanos para combatir el rigor del invierno en la Meseta.',
    historyAndOrigins: {
      eraOrCentury: 'Edad Media · Meseta Norte Castellana',
      narrative: 'La sopa castellana —conocida popularmente en toda España como "sopa de ajo"— es el epítome de la cocina de subsistencia más noble, inteligente y reconfortante del mundo. Surgió en las parameras castellanas, donde el invierno azota con heladas gélidas y nieblas densas. Los pastores trashumantes y labradores disponían en sus zurrones de elementos básicos que no se echaban a perder: una hogaza de pan candeal duro del día anterior, una ristra de ajos morados, un trozo de tocino o hueso de jamón curado y pimentón ahumado de la Vera. Al dorar los ajos laminados en aceite de oliva y verter el pimentón y el pan seco, se regaba con agua hirviendo, dejando que el pan absorbiera los jugos hasta deshacerse en una crema espesa. Al final, se rompía un huevo de corral sobre la sopa hirviendo para que se escalfara con el calor residual.',
      culturalEvolution: 'Evolucionó a plato tradicional de la Cuaresma y Semana Santa castellana por no contener carne en sus versiones de vigilia.',
      anecdoteOrLegend: 'En las frías mañanas de invierno en Zamora y Valladolid, era costumbre tomar un cuenco humeante de sopa de ajo al alba antes de salir a arar los campos, llamándola popularmente "la resucitadora de muertos".'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Cuenco_sopa_castellana_barro_Portillo_lou.jpg',
    imageAlt: 'Sopa castellana de ajo en cuenco de barro con huevo escalfado en el centro',
    imageCaption: 'Sopa castellana tradicional con pan de hogaza, ajos dorados, pimentón y huevo',
    photoTag: 'CASTILLA Y LEÓN · PUCHERO DE PASTOR Y AJO MORADO',
    description: 'Sopa reconfortante invernal cocinada en cazuela de barro a base de ajo morado laminado dorado en aceite virgen extra, pimentón de la Vera, pan de hogaza asentado y caldo, coronada con huevo escalfado.',
    ingredients: [
      '200 g de pan de hogaza castellana de masa madre asentado',
      '8 dientes de ajo morado pelados y fileteados',
      '100 g de jamón serrano curado en taquitos pequeños',
      '2 cucharaditas de pimentón de la Vera dulce (con un toque picante)',
      '1,2 litros de caldo de carne o jamón suave',
      '4 huevos camperos frescos',
      '80 ml de AOVE virgen extra y sal'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Dorado Lento del Ajo y Jamón',
        description: 'En una cazuela de barro tradicional, calentar el AOVE y dorar las láminas de ajo a fuego medio-bajo hasta que tomen un color ámbar claro. Añadir los taquitos de jamón serrano y rehogar 1 minuto.',
        artisanTip: 'Vigilar el ajo con celo; si se dora en exceso o se quema amargará toda la sopa de manera irreversible.'
      },
      {
        stepNumber: 2,
        title: 'Tostado de Pimentón y Pan',
        description: 'Apartar la cazuela del fuego unos segundos, incorporar el pimentón de la Vera removiendo rápido. Añadir el pan de hogaza cortado en rebanadas finas y mezclar para que empape todo el aceite rojizo.',
        artisanTip: 'El pan asentado de dos o tres días absorbe mejor el sofrito que el pan tierno y no se deshace en puré informe.'
      },
      {
        stepNumber: 3,
        title: 'Cocción Lenta en Caldo Caliente',
        description: 'Verter el caldo caliente sobre el pan. Cocinar a fuego manso durante 20 minutos, rompiendo algunas rebanadas de pan con la cuchara de madera para que la sopa adquiera cuerpo y espesor.',
        artisanTip: 'La textura ideal no es de consomé líquido ni de papilla espesa, sino de caldo trabado con trozos de pan meloso.'
      },
      {
        stepNumber: 4,
        title: 'Escalfado del Huevo en la Cazuela',
        description: 'Cascar los huevos directamente sobre la sopa hirviendo en la cazuela. Tapar y dejar 3 minutos con el fuego apagado hasta que la clara cuaje blanca y la yema permanezca líquida.',
        artisanTip: 'Al hundir la cuchara en la mesa, la yema líquida debe romperse y fundirse con el caldo rojizo y el pan.'
      }
    ],
    processPhotos: [
      {
        title: 'Láminas de Ajo Morado Dorándose',
        subtitle: 'El aroma que despierta la meseta castellana',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Ajos morados en láminas dorándose en AOVE con taquitos de jamón curado.'
      },
      {
        title: 'Rebanadas de Pan Empapadas en Pimentón',
        subtitle: 'El pan candeal absorbiendo los aromas de la Vera',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'El pan de hogaza tostándose con el pimentón antes de recibir el caldo caliente.'
      },
      {
        title: 'Cazuela de Sopa con Huevo Escalfado',
        subtitle: 'Servicio humeante en barro tradicional',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'La yema de huevo lista para romperse en el centro del cuenco castellano.'
      }
    ],
    culinaryTerms: [
      { term: 'Pan Asentado', definition: 'Pan de hogaza tradicional con dos o tres días de reposo que ha perdido humedad, resultando idóneo para sopas y migas.' },
      { term: 'Escalfar', definition: 'Cocer un huevo entero sin cáscara sumergido en un líquido caliente por debajo del punto de hervor para que la clara cuaje y la yema quede fluida.' },
      { term: 'Caldo Trabado', definition: 'Caldo que ha adquirido cuerpo y densidad gracias a la fécula desprendida por el pan de trigo cocinado a fuego lento.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Joven de Toro o Cigales Rosado',
      regionDO: 'D.O. Toro / D.O. Cigales',
      note: 'El carácter frutal y los taninos rústicos de la Tinta de Toro abrazan el pimentón ahumado y el ajo dorado.'
    },
    culturalRitual: {
      title: 'La Madrugada de Semana Santa',
      description: 'En la Semana Santa de Zamora, los cofrades y penitentes consumen la tradicional sopa de ajo a las cinco de la madrugada tras horas de procesión en el silencio de la noche.'
    },
    keyPhrase: {
      spanish: '«Una sopa castellana bien caliente en cazuela de barro con su huevo escalfado.»',
      english: 'A piping hot Castilian garlic soup in a clay pot with a poached egg.',
      phonetic: 'OO-nah SOH-pah kahs-teh-LYAH-nah byehn kah-LYEHN-teh'
    }
  },
  {
    id: 'lechazo-asado-aranda',
    name: 'Lechazo Asado de Aranda de Duero',
    spanishTitle: 'El cuarto de cordero churro en tartera de barro, agua, sal y leña de encina',
    category: 'Asados y Fuegos',
    originType: 'city',
    originLocation: 'Aranda de Duero (Burgos / Castilla y León)',
    originBadge: 'RAÍZ MUNICIPAL · ARANDA DE DUERO',
    historicalRoot: 'Tradición de los maestros asadores de la Ribera del Duero protegida bajo la I.G.P. Lechazo de Castilla y León.',
    historyAndOrigins: {
      eraOrCentury: 'Edad Media · Hornos de adobe y mesones de la Ribera del Duero',
      narrative: 'El lechazo asado de Aranda de Duero es la cumbre de la sencillez y la pureza cárnica castellana. A diferencia de otros asados con adobos de hierbas, vino o manteca, el lechazo auténtico de la raza Churra autóctona se cocina con solo tres elementos: carne de cordero lechal alimentado exclusivamente con leche materna (menos de 35 días y 9 a 11 kg en canal), agua del manantial y sal gorda. Los cuartos se introducen en tarteras redondas de barro refractario en hornos de bóveda morunos calentados previamente con leña de encina. El maestro asador controla la brasa retirándola a un lateral para que el calor envolvente ase la carne con sus propios jugos sin que se reseque, alcanzando una corteza exterior crujiente y dorada como papel de pergamino y una carne interior blanca, tierna y lechosa que se deshace al roce del tenedor.',
      culturalEvolution: 'Aranda de Duero ostenta el título oficial de capital mundial del lechazo asado, con decenas de hornos centenarios alimentados a leña de encina.',
      anecdoteOrLegend: 'La ordenanza tradicional de los asadores de Aranda prohibía tajantemente añadir especias, ajo o vino al lechazo: "La carne churra es tan limpia que el vino solo debe entrar en el cuerpo por la boca del comensal".'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Meson_Castellano_Asador_Rafael_Corrales_Aranda_de_Duero_Lechazo_Asado.JPG',
    imageAlt: 'Cuarto de lechazo asado churro con piel dorada crujiente en cazuela redonda de barro',
    imageCaption: 'Lechazo churro asado en horno de leña de encina en Aranda de Duero con I.G.P.',
    photoTag: 'ARANDA DE DUERO · HORNO DE BÓVEDA Y CORDERO CHURRO',
    description: 'Cuarto delantero o trasero de cordero lechal churro con I.G.P. asado en cazuela plana de barro sobre brasas de leña de encina con agua y sal marina, hasta lograr una corteza ultracrujiente y carne mantecosa.',
    ingredients: [
      '1 cuarto de lechazo churro con I.G.P. Lechazo de Castilla y León (aprox. 1,8 kg)',
      'Agua limpia para el fondo de la cazuela',
      'Sal gorda marina',
      'Leña seca de encina o roble'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Preparación de la Tartera de Barro',
        description: 'Colocar el cuarto de lechazo con la parte interior de las costillas hacia arriba en una tartera de barro baja. Salar con sal gorda y verter un vaso de agua en el fondo de la cazuela sin mojar la carne.',
        artisanTip: 'El agua del fondo genera una atmósfera de humedad constante que evita que la carne se reseque durante las dos horas de horno.'
      },
      {
        stepNumber: 2,
        title: 'Primera Cocción en Horno de Leña a 170°C',
        description: 'Introducir la cazuela en el horno de barro a temperatura constante moderada durante 1 hora y 15 minutos, comprobando que siempre quede un hilo de agua en el fondo de la tartera.',
        artisanTip: 'La leña de encina aporta un calor seco y un sutil aroma ahumado que ninguna cocina moderna puede replicar.'
      },
      {
        stepNumber: 3,
        title: 'El Volteo Crujiente a 200°C',
        description: 'Sacar la cazuela con cuidado. Dar la vuelta al lechazo de modo que la piel quede hacia arriba. Regar ligeramente con la grasa del fondo y volver a meter al horno 30 minutos a mayor temperatura.',
        artisanTip: 'No añadir manteca; la propia grasa natural subcutánea del cordero lechal es suficiente para dorar la piel como un hojaldre fino.'
      },
      {
        stepNumber: 4,
        title: 'Servicio Inmediato en Barro Borboteante',
        description: 'Servir la cazuela de barro directamente en el centro de la mesa, acompañado de ensalada castellana de lechuga oreja de mulo y cebolleta fresca regada con vinagre de vino.',
        artisanTip: 'La ensalada ácida y crujiente de lechuga y cebolleta es el contrapunto refrescante indispensable para la grasa lechosa del cordero.'
      }
    ],
    processPhotos: [
      {
        title: 'Cuarto de Cordero Lechal Churro',
        subtitle: 'Carne lechosa de raza autóctona castellana',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pieza seleccionada con I.G.P. lista para la tartera de barro.'
      },
      {
        title: 'Horno de Bóveda con Leña de Encina',
        subtitle: 'El calor envolvente de la Ribera del Duero',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Brasas de encina en el lateral del horno moruno tradicional.'
      },
      {
        title: 'Piel Crujiente Dorada como Cristal',
        subtitle: 'El asado recién salido de Aranda',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido con ensalada castellana en los mesones de Aranda de Duero.'
      }
    ],
    culinaryTerms: [
      { term: 'Cordero Churro', definition: 'Raza ovina autóctona de Castilla y León adaptada al clima continental, cuya cría exclusiva con leche materna produce la carne más fina de España.' },
      { term: 'Horno Moruno', definition: 'Horno abovedado construido con ladrillo refractario y barro de adobe donde la leña arde en el mismo habitáculo que los asados.' },
      { term: 'Tartera de Barro', definition: 'Recipiente circular plano de arcilla cocida tradicional de Alaejos o Pereruela que distribuye el calor lentamente.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Ribera del Duero Crianza o Reserva (Tinta del País)',
      regionDO: 'D.O. Ribera del Duero',
      note: 'Los taninos maduros y la opulencia de la Tempranillo de la Ribera limpian la grasa lechal en una simbiosis territorial perfecta.'
    },
    culturalRitual: {
      title: 'El Almuerzo de Bodega en Aranda',
      description: 'El ritual consiste en visitar una bodega subterránea medieval excavada bajo las calles de Aranda y después subir al mesón a compartir un cuarto de lechazo con una jarra de barro de vino tinto.'
    },
    keyPhrase: {
      spanish: '«Un cuarto de lechazo churro asado en horno de leña con ensalada castellana y un buen Ribera.»',
      english: 'A quarter of wood-fired roasted churro milk-fed lamb with Castilian salad and Ribera wine.',
      phonetic: 'oon KWAHR-toh deh leh-CHAH-thoh CHOO-rroh ah-SAH-doh'
    }
  },
  {
    id: 'hornazo-salamanca',
    name: 'Hornazo Tradicional de Salamanca',
    spanishTitle: 'La empanada dorada con enrejado de masa, lomo adobado, chorizo y jamón de bellota',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'Salamanca (Castilla y León)',
    originBadge: 'RAÍZ MUNICIPAL · SALAMANCA',
    historicalRoot: 'Plato festivo medieval documentado desde el siglo XVI vinculado a la fiesta del "Lunes de Aguas".',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVI (1543) · Universidad y riberas del Tormes en Salamanca',
      narrative: 'El hornazo de Salamanca es una de las empanadas más suntuosas e históricas de la península ibérica. Su leyenda se remonta al reinado de Felipe II y a los estatutos de la Universidad de Salamanca en 1543. Durante la Cuaresma, para evitar tentaciones carnales a los estudiantes y clérigos, las meretrices de la ciudad eran expulsadas al otro lado del río Tormes. Pasada la Pascua de Resurrección, el primer lunes siguiente (conocido como el "Lunes de Aguas"), los estudiantes cruzaban en barcas engalanadas para festejar el regreso de las mujeres en las riberas del río. Para celebrar el fin de la abstinencia cuaresmal de carne, preparaban el hornazo: una masa enriquecida con manteca de cerdo ibérico y un toque de anís y vino blanco, rellena de lomo fresco adobado con pimentón de la Vera, chorizo ibérico curado, jamón de bellota y huevos cocidos, decorada con una celosía enrejada de masa dorada con huevo.',
      culturalEvolution: 'Protegido bajo la Marca de Garantía Hornazo de Salamanca y consumido todo el año en las panaderías de la Plaza Mayor.',
      anecdoteOrLegend: 'Cada Lunes de Aguas, más de cuarenta mil salmantinos se congregan en las praderas a orillas del río Tormes para merendar hornazo sentado sobre mantas al sol, manteniendo viva una fiesta estudiantil de casi quinientos años.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Hornazo-01.jpg',
    imageAlt: 'Hornazo de Salamanca entero y cortado en porciones mostrando el relleno de lomo, chorizo y huevo',
    imageCaption: 'Hornazo tradicional de Salamanca con Marca de Garantía y enrejado de masa crujiente',
    photoTag: 'SALAMANCA · LUNES DE AGUAS Y EMBUTIDO IBÉRICO',
    description: 'Empanada contundente castellana elaborada con masa enriquecida con manteca y vino blanco, rellena con generosas capas de lomo adobado ibérico, chorizo de bellota, jamón serrano y huevo cocido.',
    ingredients: [
      '500 g de harina de trigo candeal',
      '150 g de manteca de cerdo ibérica fundida',
      '100 ml de agua tibia y 50 ml de vino blanco seco de la Sierra de Salamanca',
      '1 cucharadita de pimentón dulce y unos granos de anís verde',
      '1 huevo para la masa y 1 huevo batido para pincelar',
      '300 g de lomo de cerdo ibérico adobado con pimentón de la Vera y ajo',
      '200 g de chorizo ibérico de bellota de Guijuelo en lonchas',
      '150 g de jamón ibérico curado',
      '2 huevos duros cocidos en rodajas'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Amasado de la Masa con Manteca y Vino',
        description: 'Mezclar la harina con la manteca de cerdo ibérica templada, el vino blanco, el agua, el huevo batido, una pizca de pimentón y sal. Amasar 10 minutos hasta obtener una masa suave, elástica y aromática. Reposar 30 minutos.',
        artisanTip: 'La manteca de cerdo ibérico aporta el color dorado, el hojaldrado natural y ese aroma inconfundible de horno salmantino.'
      },
      {
        stepNumber: 2,
        title: 'Estirado y Capas de Relleno Ibérico',
        description: 'Dividir la masa en dos partes (base y tapa). Estirar la base sobre una placa engrasada. Colocar una capa tupida de rodajas de lomo adobado crudo, encima el jamón ibérico, el chorizo de bellota y las rodajas de huevo duro.',
        artisanTip: 'El lomo se coloca crudo; al hornearse dentro de la masa cerrada, sus jugos con pimentón impregnan la masa interior haciéndola jugosísima.'
      },
      {
        stepNumber: 3,
        title: 'Cierre y Celosía Enrejada',
        description: 'Cubrir con la segunda lámina de masa. Sellar los bordes con un repulgue trenzado con los dedos. Con tiras finas de masa sobrante, cruzar un enrejado en forma de rombos sobre la superficie.',
        artisanTip: 'El enrejado de rombos en la parte superior es el sello heráldico tradicional del hornazo salmantino.'
      },
      {
        stepNumber: 4,
        title: 'Pintado con Huevo y Horneado a 190°C',
        description: 'Pinchar con un tenedor para que respire. Pintar toda la superficie con huevo batido para un brillo dorado reluciente. Hornear a 190°C durante 35 a 40 minutos. Dejar templar antes de cortar.',
        artisanTip: 'El hornazo se come templado o frío; con el reposo los jugos del chorizo y el lomo se asientan en capas perfectamente definidas.'
      }
    ],
    processPhotos: [
      {
        title: 'Capas de Lomo Ibérico Adobado y Chorizo',
        subtitle: 'El relleno contundente de la dehesa de Guijuelo',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Embutidos ibéricos de máxima calidad dispuestos sobre la masa fresca.'
      },
      {
        title: 'El Trenzado del Repulgue y Celosía',
        subtitle: 'Artesanía manual antes de entrar al horno',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Enrejado geométrico de masa sellado a mano con huevo batido.'
      },
      {
        title: 'Hornazo Dorado Cortado en Tajadas',
        subtitle: 'La fiesta del Lunes de Aguas junto al Tormes',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Porción mostrando las capas compactas de lomo, chorizo y huevo duro.'
      }
    ],
    culinaryTerms: [
      { term: 'Lunes de Aguas', definition: 'Fiesta tradicional salmantina celebrada el lunes siguiente al de Pascua donde familias y amigos se reúnen en el campo a comer hornazo.' },
      { term: 'Repulgue', definition: 'Doblado decorativo y de cierre hermético que se hace con la yema de los dedos en el borde perimetral de empanadas y hornazos.' },
      { term: 'Lomo Adobado', definition: 'Cinta de lomo de cerdo macerada durante 48 horas en un adobo de pimentón de la Vera, ajos machacados, orégano y sal.' }
    ],
    pairing: {
      beverage: 'Vino Tinto de la D.O. Arribes o D.O.P. Sierra de Salamanca (Rufete)',
      regionDO: 'D.O.P. Sierra de Salamanca',
      note: 'La uva Rufete autóctona de la sierra salmantina aporta notas florales frescas y especiadas que acompañan la grasa sabrosa del embutido.'
    },
    culturalRitual: {
      title: 'La Tarde de Fiesta junto al Puente Romano',
      description: 'El ritual del hornazo es llevarlo entero en un paño de cuadros, sentarse en la hierba frente a las torres de la Catedral de Salamanca y cortarlo con navaja de pastor.'
    },
    keyPhrase: {
      spanish: '«Un buen pedazo de hornazo de Salamanca con bastante lomo y chorizo ibérico.»',
      english: 'A generous piece of Salamanca hornazo pie packed with Iberian pork loin and chorizo.',
      phonetic: 'oon bwehn peh-DAH-thoh deh ohr-NAH-thoh deh sah-lah-MAHN-kah'
    }
  }
];

