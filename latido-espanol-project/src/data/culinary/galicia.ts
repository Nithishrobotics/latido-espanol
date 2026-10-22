import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const GALICIA_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'pulpo-a-feira',
    name: 'Pulpo á Feira sobre Tabla de Madera',
    spanishTitle: 'El asustado en caldero de cobre, la tijera rápida y el pimentón de la Vera',
    category: 'Mar y Costas',
    originType: 'region',
    originLocation: 'Galicia (O Carballiño, Ourense y Lugo)',
    originBadge: 'ORIGEN REGIONAL · GALICIA',
    historicalRoot: 'Plato nacido en las ferias ganaderas del interior gallego gracias a los monjes de Oseira.',
    historyAndOrigins: {
      eraOrCentury: 'Edad Media (Siglo XII) · Monasterio de Santa María la Real de Oseira',
      narrative: 'Aunque el pulpo procede de las bravas rías de las costas atlánticas, la cuna del pulpo á feira se encuentra en el interior montañoso de Galicia, concretamente en O Carballiño (Ourense). En la Edad Media, los pescadores de las rías de Pontevedra y Arousa pagaban sus diezmos al poderoso Monasterio de Santa María la Real de Oseira mediante carretas cargadas de pulpo seco en salazón. Los monjes de Oseira repartían ese excedente seco entre los campesinos y feriantes de la comarca de O Carballiño, quienes aprendieron a rehidratarlo y cocerlo en colosales calderos de cobre martilleado en los días de feria de ganado. El contraste entre la carne fibrosa del cefalópodo ablandada a golpes, el AOVE caliente, la sal marina gorda y el pimentón ahumado dio origen al plato más universal de Galicia.',
      culturalEvolution: 'Las "polbeiras" de O Carballiño recorren desde hace siglos todas las romerías de Galicia montando sus puestos de calderos de cobre al aire libre.',
      anecdoteOrLegend: 'La tabla redonda de madera de pino o castaño donde se sirve no es un mero adorno rústico: la madera porosa absorbe el calor del agua residual de cocción e impide que el pulpo se enfríe y endurezca mientras los comensales comen de pie con palillos de madera.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Polbo_%C3%A1_feira._Galiza.jpg',
    imageAlt: 'Pulpo á feira cortado a tijera sobre plato redondo de madera con pimentón y sal gorda',
    imageCaption: 'Pulpo á feira servido sobre plato de madera de castaño con aceite virgen extra y pimentón',
    photoTag: 'GALICIA · CALDERO DE COBRE Y RITUAL DE LA POLBEIRA',
    description: 'Icono indiscutible de Galicia: pulpo cocido entero en caldero de cobre tras ser "asustado" tres veces, cortado a tijera en rodajas tibias sobre plato de madera y aderezado con sal gorda, pimentón y AOVE.',
    ingredients: [
      '1 pulpo entero de las rías gallegas (aprox. 2 a 2,5 kg)',
      '1 cebolla entera para el agua de cocción',
      'Pimentón de la Vera (mezcla 70% dulce y 30% picante)',
      'Sal marina gorda en escamas',
      '100 ml de AOVE virgen extra de la máxima calidad',
      'Agua abundante en caldero de cobre o cazuela amplia'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'El Rito de «Asustar el Pulpo»',
        description: 'Llevar a ebullición viva una olla grande con agua y una cebolla pelada. Sujetar el pulpo por la cabeza y sumergirlo en el agua hirviendo durante 5 segundos y sacarlo. Repetir tres veces consecutivas.',
        artisanTip: 'El choque térmico contrae la piel, evita que se despelleje durante la cocción y riza los tentáculos de forma simétrica.'
      },
      {
        stepNumber: 2,
        title: 'Cocción Lenta en Caldero',
        description: 'Tras el tercer escaldado, sumergir el pulpo por completo y cocer a fuego medio-bajo durante unos 40 a 45 minutos (aprox. 18 minutos por kilo).',
        artisanTip: 'Comprobar el punto pinchando la parte más gruesa de un tentáculo con un palillo de madera: debe ofrecer una resistencia suave sin estar gomoso.'
      },
      {
        stepNumber: 3,
        title: 'Reposo en el Agua Caliente',
        description: 'Apagar el fuego y dejar reposar el pulpo sumergido en el agua caliente durante 15 a 20 minutos tapado.',
        artisanTip: 'El reposo relaja las fibras musculares del cefalópodo y asienta su colágeno natural.'
      },
      {
        stepNumber: 4,
        title: 'Corte a Tijera sobre Tabla de Madera',
        description: 'Extraer con gancho de hierro y cortar las patas a tijera en rodajas de 1 cm sobre plato redondo de madera de castaño. Salar con sal gorda, espolvorear pimentón y bañar con AOVE.',
        artisanTip: 'Remojar previamente la tabla de madera en el agua caliente de cocer el pulpo para que mantenga el plato tibio hasta el último bocado.'
      }
    ],
    processPhotos: [
      {
        title: 'El Asustado en Caldero de Cobre',
        subtitle: 'El rizado perfecto de los tentáculos',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La polbeira sumergiendo y extrayendo el pulpo en el agua humeante.'
      },
      {
        title: 'El Corte Rápido con Tijera',
        subtitle: 'Rodajas regulares en plato de madera',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Tijeras de acero inoxidable cortando los tentáculos aún calientes.'
      },
      {
        title: 'Aliño con Sal Gorda y Pimentón',
        subtitle: 'El baño de AOVE virgen extra',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Plato terminado con sal marina gorda, pimentón y aceite virgen extra.'
      }
    ],
    culinaryTerms: [
      { term: 'Polbeira', definition: 'Cocinera artesana gallega que prepara el pulpo á feira en grandes calderos de cobre durante las romerías populares y ferias de ganado.' },
      { term: 'Asustar', definition: 'Técnica de sumergir y extraer tres veces el pulpo en agua hirviendo para fijar la piel y rizar estéticamente las puntas de los tentáculos.' },
      { term: 'Cunca de Barro', definition: 'Tazón blanco vidriado de barro cocido sin asa utilizado tradicionalmente en Galicia para beber vino tinto o blanco ribeiro.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Ribeiro Servido en Cunca de Barro',
      regionDO: 'D.O. Ribeiro',
      note: 'El carácter fresco, atlántico y ligeramente ácido del vino tinto ribeiro desengrasa el aceite y complementa el sabor mineral del pulpo.'
    },
    culturalRitual: {
      title: 'El Palillo de Madera y el Pan de Cea',
      description: 'El pulpo á feira se come exclusivamente pinchando las rodajas con un palillo de madera largo, mojando la salsa de aceite y pimentón con pan de Cea tostado.'
    },
    keyPhrase: {
      spanish: '«Una ración de pulpo á feira con un poco de picante y una cunca de ribeiro.»',
      english: 'A serving of Galician fair-style octopus with a touch of spicy paprika and ribeiro wine.',
      phonetic: 'OO-nah rah-THYOHN deh POOL-poh ah FAY-rah kohn oon POH-koh deh pee-KAHN-teh'
    }
  },
  {
    id: 'tarta-de-santiago',
    name: 'Tarta de Santiago con Almendra y Cruz Jacobea',
    spanishTitle: 'La bizcochada densa de almendra sin harina coronada con la silueta de la Orden',
    category: 'Dulces y Postres',
    originType: 'city',
    originLocation: 'Santiago de Compostela (Galicia)',
    originBadge: 'RAÍZ MUNICIPAL · SANTIAGO',
    historicalRoot: 'Documentada como "Torta Real" en 1577 y con la silueta de la Cruz de Santiago desde 1924.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVI (1577) · Convento de San Paio de Antealtares',
      narrative: 'La tarta de Santiago es el emblema dulce de la meta jacobea universal. Su antecedente más remoto data de 1577, cuando en una visita canónica a la Universidad de Santiago de Compostela se documentó la "Bizcochada de Almendra" elaborada en los obradores conventuales compostelanos. Su fórmula es de una pureza asombrosa: no contiene ni un solo gramo de harina de trigo, elaborándose únicamente con partes iguales de almendras seleccionadas finamente molidas, azúcar blanco de caña y huevos frescos de corral batidos, perfumada con canela y ralladura de limón. En 1924, el pastelero compostelano José Mora Soto decidió colocar sobre el bizcocho una silueta recortada de la Cruz de la Orden de Santiago y espolvorear azúcar glas fino por encima; al retirar la plantilla, la cruz quedó dibujada en relieve dorado sobre el blanco inmaculado, convirtiéndose en el icono imperecedero del Camino de Santiago.',
      culturalEvolution: 'Reconocida con Indicación Geográfica Protegida (I.G.P.) que exige un mínimo de 33% de almendra pura en su masa horneada.',
      anecdoteOrLegend: 'Los peregrinos que completaban a pie los cientos de kilómetros hasta la Plaza del Obradoiro recibían en los mesones una porción de tarta de Santiago con aguardiente de orujo para recuperar las fuerzas tras el rito del abrazo al Apóstol.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Tarta_de_Santiago-2009.jpg',
    imageAlt: 'Tarta de Santiago redonda espolvoreada con azúcar glas y la Cruz de Santiago en el centro',
    imageCaption: 'Tarta de Santiago tradicional con I.G.P. y la Cruz Jacobea espolvoreada en azúcar glas',
    photoTag: 'SANTIAGO DE COMPOSTELA · ALMENDRA PURA Y CRUZ JACOBEA',
    description: 'Pastel gallego centenario sin harina, elaborado exclusivamente a base de almendras finamente molidas, huevos de corral y azúcar con un toque de canela, decorado con la silueta de la Cruz de Santiago en azúcar glas.',
    ingredients: [
      '250 g de almendras crudas peladas (mitad Marcona, mitad Comuna) molidas',
      '250 g de azúcar blanco fino',
      '4 huevos camperos grandes a temperatura ambiente',
      'La ralladura fina de 1 limón sin parte blanca',
      'Media cucharadita de canela de Ceilán en polvo',
      '1 cucharada de orujo gallego blanco de hierbas (opcional)',
      'Azúcar glas para espolvorear y plantilla de la Cruz de Santiago'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Molienda de Almendras de Calidad',
        description: 'Moler las almendras peladas hasta obtener una textura de grano medio (ni harina impalpable ni trozos grandes) para que la tarta conserve su textura esponjosa y húmeda.',
        artisanTip: 'Moler con pulsaciones cortas para evitar que la almendra suelte su aceite antes de mezclarse con el huevo.'
      },
      {
        stepNumber: 2,
        title: 'Batido Espumoso de Huevos y Azúcar',
        description: 'En un bol amplio, batir los huevos con el azúcar durante 5 minutos hasta que la mezcla blanquee y doble su volumen inicial, incorporando aire natural a la masa.',
        artisanTip: 'Como la receta tradicional no lleva levadura química, el aire atrapado en los huevos es el único responsable de la esponjosidad.'
      },
      {
        stepNumber: 3,
        title: 'Integración Envolvente y Horneado',
        description: 'Añadir con espátula la almendra molida, la canela y la ralladura de limón con movimientos suaves envolventes. Verter en molde redondo engrasado y hornear a 180°C durante 30 minutos.',
        artisanTip: 'La tarta debe quedar dorada por fuera pero húmeda y jugosa en su corazón.'
      },
      {
        stepNumber: 4,
        title: 'El Estarcido de la Cruz de Santiago',
        description: 'Dejar enfriar por completo sobre rejilla. Colocar la silueta recortada de la Cruz de la Orden de Santiago en el centro y tamizar abundante azúcar glas por encima. Retirar la plantilla con cuidado.',
        artisanTip: 'Retirar la plantilla con unas pinzas hacia arriba en vertical para que los bordes de la cruz queden nítidos y sin manchas.'
      }
    ],
    processPhotos: [
      {
        title: 'Molienda de Almendra y Batido de Huevos',
        subtitle: 'Sin harina de trigo ni levaduras',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Almendra triturada y huevos de corral batiéndose con azúcar de caña.'
      },
      {
        title: 'Horneado Dorado en Molde Redondo',
        subtitle: 'La masa densa con aroma a canela y limón',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Bizcocho horneado saliendo con corteza dorada y centro tierno.'
      },
      {
        title: 'La Cruz Jacobea en Azúcar Glas',
        subtitle: 'El símbolo secular de Compostela',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Tarta de Santiago terminada en el casco histórico de Compostela.'
      }
    ],
    culinaryTerms: [
      { term: 'Cruz de Santiago', definition: 'Emblema en forma de cruz griega con el brazo inferior rematado en punta de espada y los brazos superiores en flor de lis, símbolo de la Orden de Santiago.' },
      { term: 'Estarcido', definition: 'Técnica de decoración repostera que utiliza una plantilla recortada para proyectar un dibujo espolvoreando azúcar glas o cacao.' },
      { term: 'I.G.P. Tarta de Santiago', definition: 'Sello europeo que garantiza que el dulce ha sido elaborado en Galicia cumpliendo con al menos el 33% de almendra y sin harinas añadidas.' }
    ],
    pairing: {
      beverage: 'Licor de Hierbas de Galicia o Vino Dulce Tostado del Ribeiro',
      regionDO: 'D.O. Augardentes e Licores Tradicionais de Galicia',
      note: 'Los aromas anisados y herbáceos del licor de hierbas limpian la dulzura densa de la almendra molida.'
    },
    culturalRitual: {
      title: 'El Bocado del Peregrino en el Obradoiro',
      description: 'El ritual inexcusable tras recibir la Compostela es sentarse en un café de la Rúa do Franco a compartir una porción de tarta de Santiago con una copita de orujo frío.'
    },
    keyPhrase: {
      spanish: '«Un trozo de tarta de Santiago tradicional y un chupito de licor de hierbas.»',
      english: 'A slice of traditional Santiago almond cake and an herbal liqueur shot.',
      phonetic: 'oon TROH-thoh deh TAHR-tah deh sahn-TYAH-goh trah-dee-thyoh-NAHL'
    }
  },
  {
    id: 'empanada-gallega',
    name: 'Empanada Gallega de Zamburiñas de Ría',
    spanishTitle: 'La masa fina con aceite del sofrito, cebolla de Betanzos y zamburiñas frescas',
    category: 'Tapeo y Bocados',
    originType: 'region',
    originLocation: 'Galicia (Noia, Rías Baixas y A Coruña)',
    originBadge: 'ORIGEN REGIONAL · GALICIA',
    historicalRoot: 'Esculpida en el Pórtico de la Gloria de la Catedral de Santiago de Compostela por el Maestro Mateo en el siglo XII.',
    historyAndOrigins: {
      eraOrCentury: 'Edad Media (Siglo XII) · Catedral de Santiago de Compostela',
      narrative: 'La empanada gallega es uno de los platos más antiguos y gloriosos de la cultura atlántica europea. Su testimonio visual más célebre se encuentra esculpido en piedra en el mismísimo Pórtico de la Gloria de la Catedral de Santiago de Compostela (siglo XII), donde el Maestro Mateo representó a un pecador condenado por la gula intentando morder una gruesa empanada con forma de media luna. Nació como una técnica prodigiosa de conservación y transporte para campesinos, pescadores y peregrinos jacobeos: envolver carnes, pescados de las rías o mariscos en una masa de pan de trigo y centeno sellada herméticamente para proteger los alimentos del polvo del camino durante jornadas enteras. El secreto de la masa canónica reside en amasar la harina de trigo con una parte del aceite rojizo perfumado con pimentón que ha sobrado del sofrito de cebollas de Betanzos pochadas a fuego lento, logrando una masa dorada, fina y crujiente que se empapa por dentro de los jugos del marisco.',
      culturalEvolution: 'Pilar angular de las romerías campestres y celebrada en la Fiesta de la Empanada de Noia, la cuna histórica del marisco gallego.',
      anecdoteOrLegend: 'En Noia y las Rías Baixas, las panaderías tradicionales siguen horneando la empanada con masa de maíz ("pan de millo"), de textura quebradiza y rústica, especialmente cotizada cuando se rellena de berberechos vivos con su concha o sardinas de la ría.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Empanada_gallega-Chorizo.jpg',
    imageAlt: 'Empanada gallega dorada cortada en cuadrados mostrando el relleno de zamburiñas y cebolla',
    imageCaption: 'Empanada gallega de zamburiñas de las rías elaborada con masa artesana y sofrito a fuego lento',
    photoTag: 'GALICIA · EL PÓRTICO DE LA GLORIA Y MARISCO DE LAS RÍAS',
    description: 'Empanada artesanal atlántica de masa fina y crujiente enriquecida con aceite del sofrito de pimentón, rellena de abundante cebolla pochada y zamburiñas frescas de las rías gallegas.',
    ingredients: [
      '500 g de harina de trigo del país (o mezcla con 15% de harina de centeno)',
      '150 ml de agua tibia con 15 g de levadura fresca de panadero',
      '100 ml del aceite del sofrito templado',
      '1 kg de zamburiñas o volandeiras frescas limpias de concha',
      '3 cebollas grandes de Betanzos picadas en juliana fina',
      '1 pimiento rojo carnoso troceado',
      '1 cucharada de pimentón dulce de la Vera y una pizca de pimentón picante',
      '100 ml de vino blanco D.O. Rías Baixas (Albariño)',
      '1 huevo batido para pincelar y sal marina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'El Sofrito Paciente de Cebolla y Pimentón',
        description: 'En una sartén amplia con abundante AOVE, pochar la cebolla y el pimiento rojo a fuego muy lento durante 30 minutos con una pizca de sal hasta que queden dulces y translúcidos. Añadir el pimentón y el vino Albariño; reducir 3 minutos.',
        artisanTip: 'Colar el sofrito en un colador fino recogiendo el aceite sobrante en un cuenco; este aceite perfumado es el alma que dará sabor y color a la masa.'
      },
      {
        stepNumber: 2,
        title: 'Amasado de la Masa con Aceite del Sofrito',
        description: 'En un bol hondo, disponer la harina haciendo un volcán. Añadir la levadura disuelta en agua tibia, sal y el aceite del sofrito colado. Amasar 10 minutos hasta obtener una masa elástica y lisa. Reposar 45 minutos tapada.',
        artisanTip: 'El aceite del sofrito tiñe la masa de un tono anaranjado cálido y aporta un hojaldrado natural irresistible.'
      },
      {
        stepNumber: 3,
        title: 'Montaje con Zamburiñas en Crudo',
        description: 'Dividir la masa en dos partes. Estirar la base finísima (2 mm) sobre una placa engrasada. Extender el sofrito frío de cebolla y colocar las zamburiñas crudas repartidas por toda la superficie. Cubrir con la tapa de masa y cerrar el repulgue.',
        artisanTip: 'Las zamburiñas se colocan crudas; cocerlas previamente las dejaría gomosas, mientras que al hornearse sueltan su jugo sobre la cebolla.'
      },
      {
        stepNumber: 4,
        title: 'La «Chimenea» y Horneado a 200°C',
        description: 'Hacer un agujero redondo en el centro de la tapa ("la chimenea") para que escape el vapor. Pincelar con huevo batido y hornear a 200°C durante 35 minutos hasta que la superficie esté dorada y crujiente.',
        artisanTip: 'La chimenea central es obligatoria para evitar que la masa superior se hinche como un globo y pierda su contacto con el relleno.'
      }
    ],
    processPhotos: [
      {
        title: 'El Sofrito de Cebolla Escurriendo el Aceite',
        subtitle: 'El extracto rojizo con pimentón de la Vera',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Cebolla caramelizada y el aceite de pimentón reservado para amasar.'
      },
      {
        title: 'Colocación de Zamburiñas Frescas de Ría',
        subtitle: 'El fruto del maratlántico en crudo',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Zamburiñas limpias distribuidas sobre la cama de cebolla pochada.'
      },
      {
        title: 'Empanada Dorada con su Chimenea Central',
        subtitle: 'El aroma de horno en las rías gallegas',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Empanada recién horneada cortada en cuadrados generosos.'
      }
    ],
    culinaryTerms: [
      { term: 'Chimenea', definition: 'Orificio circular recortado en el centro superior de la empanada para permitir la salida del vapor del marisco sin romper la masa.' },
      { term: 'Zamburiña de Ría', definition: 'Molusco bivalvo autóctono gallego ("Chlamys varia") de concha acanalada y carne tierna y yodada superior a la volandeira común.' },
      { term: 'Pan de Millo', definition: 'Masa de empanada tradicional de las zonas costeras gallegas elaborada con harina de maíz molida en molino de agua y centeno.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Albariño de las Rías Baixas o Ribeiro de Treixadura',
      regionDO: 'D.O. Rías Baixas / D.O. Ribeiro',
      note: 'La acidez marina y las notas a manzana verde y laurel del Albariño cortan la untuosidad de la cebolla caramelizada y enaltecen la zamburiña.'
    },
    culturalRitual: {
      title: 'La Romería Gallega con Gaitas',
      description: 'En Galicia, ninguna fiesta patronal o "carballeira" campestre se concibe sin llevar una empanada entera templada envuelta en papel blanco para compartir entre risas y gaitas.'
    },
    keyPhrase: {
      spanish: '«Una buena ración de empanada gallega de zamburiñas y una cunca de vino blanco.»',
      english: 'A hearty serving of Galician scallop pie and a ceramic bowl of white wine.',
      phonetic: 'OO-nah BWEH-nah rah-THYOHN deh ehm-pah-NAH-dah gah-LYEH-gah'
    }
  },
  {
    id: 'pimientos-padron',
    name: 'Pimientos de Herbón-Padrón Fritos en AOVE',
    spanishTitle: 'El juego gallego de la ruleta rusa: «uns pican e outros non» con sal gorda marina',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'Herbón / Padrón (A Coruña / Galicia)',
    originBadge: 'RAÍZ MUNICIPAL · PADRÓN',
    historicalRoot: 'Semillas mesoamericanas traídas en el siglo XVII por frailes franciscanos del convento de San Antonio de Herbón.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVII · Convento Franciscano de Herbón (Padrón)',
      narrative: 'Los pimientos de Padrón representan una de las aventuras botánicas y culinarias más fascinantes de España. En el siglo XVII, monjes franciscanos del convento de San Antonio de Herbón (en el municipio coruñés de Padrón) regresaron de las misiones en México portando semillas de pimientos pequeños. Aclimatados al clima húmedo y a las fértiles vegas fluviales del río Ulla, los pimientos mutaron a lo largo de trescientos años de selección artesanal. El microclima gallego generó un fenómeno biológico legendario inmortalizado en el dicho popular: "Os pementos de Padrón, uns pican e outros non" (los pimientos de Padrón, unos pican y otros no). El picor depende de la capsaicina generada cuando la planta sufre mayor insolación estival. Fritos enteros con su rabillo en abundante aceite de oliva virgen extra muy caliente hasta arrugarse y ampollarse, se sirven de inmediato espolvoreados con sal marina gorda.',
      culturalEvolution: 'Protegidos bajo la Denominación de Origen Protegida Pemento de Herbón, son el aperitivo veraniego por excelencia de toda Galicia.',
      anecdoteOrLegend: 'En la Fiesta del Pimiento de Herbón (el primer sábado de agosto), se reparten gratuitamente más de tres mil kilos de pimientos recién fritos en sartenes gigantes; el juego consiste en comerlos por turnos en cuadrilla esperando ver a quién le toca el ejemplar que hace brotar lágrimas de picor.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Pimientos_de_Padr%C3%B3n_-_2.jpg',
    imageAlt: 'Plato blanco colmado de pimientos de Padrón fritos con piel arrugada y sal gorda',
    imageCaption: 'Pimientos de Herbón-Padrón con D.O.P. fritos a fuego vivo en AOVE con sal marina gruesa',
    photoTag: 'HERBÓN-PADRÓN · LA RULETA RUSA GASTRONÓMICA GALLEGA',
    description: 'Pimientos verdes diminutos con D.O.P. Pemento de Herbón fritos enteros con su pedúnculo en abundante AOVE hirviendo hasta ampollar la piel, sazonados generosamente con sal marina gruesa.',
    ingredients: [
      '500 g de pimientos de Padrón con D.O.P. Herbón frescos y tersos',
      'Abundante AOVE virgen extra para freír (aprox. 300 ml)',
      'Sal marina gorda en escamas o grano medio'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Lavado y Secado Riguroso',
        description: 'Lavar los pimientos bajo el grifo de agua fría sin retirar el rabillo verde ni romper la punta. Secar minuciosamente con paños limpios de algodón hasta que no quede ni una gota de humedad.',
        artisanTip: 'El secado absoluto es indispensable para evitar salpicaduras peligrosas al entrar en contacto con el aceite a 180°C.'
      },
      {
        stepNumber: 2,
        title: 'Calentado Fuerte del Aceite de Oliva',
        description: 'En una sartén honda, calentar el AOVE a fuego vivo. Debe haber suficiente aceite para que los pimientos naden holgadamente sin tocar el fondo seco.',
        artisanTip: 'El aceite debe estar muy caliente para que la piel se ampolle en segundos sin que la pulpa interior se cueza.'
      },
      {
        stepNumber: 3,
        title: 'Fritura Relámpago con Vaivén',
        description: 'Echar los pimientos en tandas no muy grandes. Freír durante 1 a 2 minutos agitando la sartén con vaivén continuo hasta que la piel verde se arrugue y muestre manchas blancas tostadas.',
        artisanTip: 'No freír de más: el pimiento debe quedar tierno y jugoso, nunca carbonizado o mustio.'
      },
      {
        stepNumber: 4,
        title: 'Salazón Marina en Caliente',
        description: 'Sacar con espumadera, escurrir un instante sobre una fuente y espolvorear generosamente con sal marina gruesa mientras aún están ardiendo.',
        artisanTip: 'La sal gorda debe ponerse en caliente para que los cristales se adhieran a la película de aceite de la piel arrugada.'
      }
    ],
    processPhotos: [
      {
        title: 'Pimientos Verdes Tersos de Herbón',
        subtitle: 'Selección con D.O.P. recién cosechada',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pimientos de Herbón frescos con su pedúnculo verde intacto.'
      },
      {
        title: 'Burbujeo Rápido en la Sartén Honda',
        subtitle: 'La piel ampollándose en aceite virgen extra',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Fritura rápida a 180°C con movimiento continuo de la sartén.'
      },
      {
        title: 'Fuente de Pimientos Humeantes con Sal Gorda',
        subtitle: 'El aperitivo veraniego en la terraza',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servidos al centro de la mesa con escamas brillantes de sal marina.'
      }
    ],
    culinaryTerms: [
      { term: 'Capsaicina', definition: 'Compuesto químico natural picante generado en las venas interiores del pimiento como mecanismo de defensa contra el calor y la sequía.' },
      { term: 'D.O.P. Pemento de Herbón', definition: 'Sello geográfico protegido que certifica que los pimientos proceden de la parroquia de Herbón en Padrón (A Coruña).' },
      { term: 'Pedúnculo', definition: 'El rabillo verde natural que une el pimiento a la rama, utilizado por el comensal para sujetar el bocado con los dedos sin ensuciarse.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Ribeiro servido en Cunca de Loza Tradicional o Cerveza Estrella Galicia Fría',
      regionDO: 'D.O. Ribeiro',
      note: 'El trago fresco y afrutado de un Ribeiro bebido en taza blanca de barro alivia de inmediato el ardor inesperado de un pimiento picante.'
    },
    culturalRitual: {
      title: 'El Bocado por el Rabillo',
      description: 'La norma no escrita dicta coger el pimiento por el pedúnculo con los dedos índice y pulgar, comer la carne entera de un solo mordisco y dejar el rabillo en el borde del plato.'
    },
    keyPhrase: {
      spanish: '«Una ración de pimientos de Padrón bien frititos y con su sal gorda marina.»',
      english: 'A plate of well-fried Padrón peppers with coarse sea salt.',
      phonetic: 'OO-nah rah-THYOHN deh pee-MYEHN-tohs deh pah-DROHN byehn free-TEE-tohs'
    }
  }
];

