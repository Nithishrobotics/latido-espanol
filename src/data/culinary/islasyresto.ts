import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const ISLAS_Y_RESTO_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'papas-arrugadas-mojos',
    name: 'Papas Arrugadas con Mojo Picón y Mojo Verde',
    spanishTitle: 'La papa bonita volcánica con costra de sal marina y los mojos de mortero',
    category: 'Tapeo y Bocados',
    originType: 'region',
    originLocation: 'Islas Canarias (Tenerife, Gran Canaria, La Palma y Lanzarote)',
    originBadge: 'ORIGEN REGIONAL · CANARIAS',
    historicalRoot: 'Tubérculos andinos llegados a Canarias en el siglo XVI conservados en su pureza genética prefiloxérica.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVI · Archipiélago Canario (Tenerife y La Palma)',
      narrative: 'Las papas arrugadas son el tesoro etnobotánico más extraordinario de Canarias. Tras los viajes trasatlánticos del siglo XVI, las Islas Canarias se convirtieron en la primera escala europea de los cultivos del Nuevo Mundo. Mientras en el resto de Europa la plaga de la filoxera y los cruces modernos modificaron las especies de patata, en los suelos volcánicos de las cumbres canarias se conservaron intactas más de 29 variedades primitivas de papas antiguas (como la "Papa Bonita", la "Negra Yema de Huevo" o la "Colorada de Baga"). Los campesinos isleños las cocían con su piel finísima en agua de mar del océano Atlántico hasta evaporar todo el líquido, provocando que la sal marina cristalizara sobre la piel arrugándola en una película blanca y salina. Se acompañan siempre de los dos mojos canónicos: el "mojo picón" rojo (a base de pimienta picona secada al sol, comino, ajo y vinagre) y el "mojo verde" (con cilantro fresco de huerta).',
      culturalEvolution: 'Reconocidas con la D.O.P. Papas Antiguas de Canarias, son el estandarte culinario de los tradicionales guachinches tinerfeños y romerías populares.',
      anecdoteOrLegend: 'En los guachinches campesinos de Tenerife, las papas se sirven en cuencos de barro aún humeantes con su manto de sal volcánica; la regla de oro impuesta por los isleños es que jamás se deben pelar con cuchillo, sino aplastar ligeramente con los dedos y sumergir generosamente en el mojo de mortero.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Papasarrugadas.jpg',
    imageAlt: 'Papas arrugadas canarias con costra de sal marina acompañadas de cuencos de mojo rojo y verde',
    imageCaption: 'Papas arrugadas con D.O.P. Papas Antiguas de Canarias con mojo picón y mojo verde',
    photoTag: 'CANARIAS · CENIZA VOLCÁNICA Y MOJOS DE MORTERO',
    description: 'Papas antiguas volcánicas cocidas con piel en poca agua con abundante sal marina marina hasta arrugar y formar una costra blanca cristalina, servidas con mojo rojo picón y mojo verde de cilantro fresco.',
    ingredients: [
      '1 kg de papas pequeñas canarias con piel (variedad Papa Bonita o Negra)',
      '250 g de sal marina marina gruesa de las salinas canarias',
      'Para el Mojo Picón Rojo: 3 pimientas piconas palmeras hidratadas, 4 dientes de ajo, 1 cucharadita de comino en grano, 150 ml de AOVE, 30 ml de vinagre de vino y sal gorda',
      'Para el Mojo Verde: 1 manojo de cilantro fresco, 3 dientes de ajo, 1 pimiento verde, comino, AOVE virgen extra y vinagre',
      'Agua limpia'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Lavado Exhaustivo sin Pelar',
        description: 'Lavar muy bien las papas bajo un chorro de agua fría para retirar cualquier resto de tierra volcánica sin dañar la piel. Mantener la piel intacta.',
        artisanTip: 'La piel de la papa bonita canaria es finísima y porosa, permitiendo que la sal penetre justo lo necesario sin salar la pulpa interior.'
      },
      {
        stepNumber: 2,
        title: 'Cocción con Sal Marina Abundante',
        description: 'Colocar las papas en un caldero amplio. Cubrir con agua sin sobrepasarlas y añadir el cuarto de kilo de sal marina. Cocer a fuego medio unos 20 minutos hasta que al pincharlas con un palillo estén tiernas.',
        artisanTip: 'La gran concentración de sal aumenta la flotabilidad de las papas y acelera la cocción manteniendo la textura mantecosa.'
      },
      {
        stepNumber: 3,
        title: 'El Arrugado al Vapor Seco',
        description: 'Escurrir todo el agua del caldero. Volver a poner el caldero al fuego mínimo sin tapa, agitando enérgicamente en círculos para que el vapor residual se evapore y la sal cristalice formando una película blanquecina sobre la piel arrugada.',
        artisanTip: 'El vaivén rítmico del caldero impide que las papas se quemen mientras la sal forma su característica escarcha blanca.'
      },
      {
        stepNumber: 4,
        title: 'Majado Tradicional de los Mojos',
        description: 'En mortero de piedra, majar los ajos con la sal gorda y el comino. Incorporar la carne de las pimientas piconas (para el rojo) o el cilantro (para el verde). Emulsionar lentamente con el AOVE y el vinagre.',
        artisanTip: 'El mojo jamás debe triturarse con batidora industrial a alta velocidad; el machacado en mortero conserva la textura rústica y los aceites esenciales.'
      }
    ],
    processPhotos: [
      {
        title: 'Papas Bonitas Volcánicas',
        subtitle: 'Tubérculos autóctonos de piel moteada',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Papas antiguas de cultivo tradicional en bancales de ceniza volcánica.'
      },
      {
        title: 'El Secado y Cristalización de la Sal',
        subtitle: 'La escarcha blanca sobre el caldero caliente',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La sal marina cubriendo las papas arrugadas al evaporarse el agua del fondo.'
      },
      {
        title: 'Papas con Dúo de Mojos de Mortero',
        subtitle: 'El festín de los guachinches de Tenerife',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servidas en barro rústico listas para mojar con las manos.'
      }
    ],
    culinaryTerms: [
      { term: 'Guachinche', definition: 'Taberna rústica tradicional típica del norte de Tenerife donde los viticultores ofrecen su vino nuevo acompañado de platos caseros como papas con mojo.' },
      { term: 'Pimienta Picona', definition: 'Pimiento rojo picante autóctono de Canarias ("Capsicum annuum"), secado al sol en ristras, alma indiscutible del auténtico mojo rojo picón.' },
      { term: 'Papa Bonita', definition: 'Variedad ancestral canaria de piel fina y carne amarilla cremosa cultivada en Icod el Alto y los valles del Teide desde el siglo XVII.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Listán Negro o Blanco Malvasía Volcánica',
      regionDO: 'D.O. Valle de La Orotava / D.O. Lanzarote',
      note: 'Vinos nacidos de viñas prefiloxéricas sobre ceniza volcánica con notas minerales salinas que maridan con la sal marina y el mojo.'
    },
    culturalRitual: {
      title: 'El Guachinche entre Viñas del Teide',
      description: 'El ritual canario por excelencia consiste en subir un domingo al monte tinerfeño a un guachinche campesino y pedir un cuartillo de vino de la casa con papas arrugadas y carne fiesta.'
    },
    keyPhrase: {
      spanish: '«Un plato de papas arrugadas con mojo picón y mojo verde y una jarrita de vino de la casa.»',
      english: 'A plate of wrinkled potatoes with red and green mojo and a small pitcher of house wine.',
      phonetic: 'oon PLAH-toh deh PAH-pahs ah-rroo-GAH-dahs kohn MOH-hoh pee-KOHN'
    }
  },
  {
    id: 'ensaimada-mallorquina',
    name: 'Ensaimada Mallorquina de Saïm',
    spanishTitle: 'La espiral dorada de masa hojaldrada con manteca de cerdo ibérico y azúcar glas',
    category: 'Dulces y Postres',
    originType: 'region',
    originLocation: 'Mallorca (Islas Baleares)',
    originBadge: 'ORIGEN REGIONAL · BALEARES',
    historicalRoot: 'Dulce documentado en Mallorca desde el siglo XVII, cuyo nombre deriva de la palabra árabe y catalana "saïm" (manteca de cerdo).',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVII · Obradores y hornos de leña de Palma de Mallorca',
      narrative: 'La ensaimada de Mallorca es una de las creaciones de repostería más poéticas y delicadas del Mediterráneo occidental. Su nombre proviene del término catalán y balear "saïm", que designa la manteca de cerdo, grasa indispensable para su elaboración. Aunque las primeras menciones escritas datan del siglo XVII en festividades patronales de Palma, su origen entrelaza la herencia judía del "bulema" (pan trenzado en espiral) y la sabiduría pastelera de los hornos gremiales mallorquines. El secreto de su textura reside en el estirado manual de la masa con manteca derretida sobre el mármol hasta dejarla tan fina y transparente como un velo nupcial. Luego se enrolla en un cilindro fino y se dobla en forma de caracol con holgura para permitir que, durante 12 a 14 horas de fermentación nocturna en armarios de madera, la masa multiplique su volumen antes del horneado.',
      culturalEvolution: 'Protegida con la Indicación Geográfica Protegida (I.G.P.) Ensaimada de Mallorca, envasada en sus célebres cajas octogonales de cartón que los viajeros transportan desde el aeropuerto de Son Sant Joan a todo el mundo.',
      anecdoteOrLegend: 'En el siglo XIX, los escritores modernistas como Santiago Rusiñol afirmaban que viajar a Mallorca y regresar sin una torre de cajas octogonales de ensaimada era motivo de desdoro social entre la intelectualidad peninsular.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Ensaimada_DSCN0885.jpg',
    imageAlt: 'Ensaimada de Mallorca tradicional en espiral espolvoreada con abundante azúcar glas',
    imageCaption: 'Ensaimada lisa de Mallorca con I.G.P. fermentada lentamente y nevada de azúcar glas',
    photoTag: 'MALLORCA · ESPIRAL MEDITERRÁNEA Y OBRADOR CENTENARIO',
    description: 'Pastelería tradicional mallorquina en forma de caracol elaborada con masa de harina de fuerza, huevos, azúcar y manteca de cerdo pura (saïm), fermentada lentamente y cubierta de azúcar glas.',
    ingredients: [
      '500 g de harina de gran fuerza (mínimo W300)',
      '150 g de azúcar blanco',
      '2 huevos camperos grandes',
      '20 g de levadura fresca de panadero',
      '180 ml de agua mineral tibia',
      '200 g de manteca de cerdo ibérico refinada (saïm)',
      'Abundante azúcar glas para la terminación'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Amasado de Fuerza hasta Prueba de Membrana',
        description: 'Amasar la harina con el agua, los huevos, el azúcar y la levadura disuelta durante 20 minutos hasta obtener una masa elástica, lisa y brillante que no se pegue a las manos.',
        artisanTip: 'La masa debe superar la prueba del velo: al estirarla con los dedos debe formar una película transparente sin romperse.'
      },
      {
        stepNumber: 2,
        title: 'El Estirado en Velo sobre Mármol Engrasado',
        description: 'Untar la mesa con manteca de cerdo tibia. Estirar la masa con rodillo y luego con los dedos abiertos desde el centro hacia los extremos hasta dejar una lámina casi invisible.',
        artisanTip: 'Untar toda la superficie de la masa transparente con abundante manteca de cerdo pomada; este paso crea el hojaldrado natural de la ensaimada.'
      },
      {
        stepNumber: 3,
        title: 'Enrollado en Cilindro y Espiral Holgada',
        description: 'Enrollar la masa sobre sí misma formando un cordón largo. Disponer el cordón sobre una lata de horno engrasada formando una espiral, dejando 2 cm de espacio libre entre vueltas.',
        artisanTip: 'Dejar espacio entre las vueltas de la espiral es vital para que la masa pueda crecer libremente hacia los lados durante la noche.'
      },
      {
        stepNumber: 4,
        title: 'Fermentación Nocturna de 14 Horas y Horneado',
        description: 'Dejar levar en un lugar cálido sin corrientes durante 12 a 14 horas hasta que triplique su volumen. Hornear a 180°C durante 12 a 15 minutos. Dejar enfriar y cubrir con abundante azúcar glas.',
        artisanTip: 'Espolvorear el azúcar glas solo cuando la ensaimada esté completamente fría para que no se humedezca.'
      }
    ],
    processPhotos: [
      {
        title: 'El Estirado en Velo Transparente',
        subtitle: 'El arte manual del maestro pastelero',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Masa fina extendida sobre la mesa con manteca de cerdo pura.'
      },
      {
        title: 'La Espiral Leudando en la Lata',
        subtitle: 'Catorce horas de reposo pausado',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La masa triplicando su tamaño antes de entrar al horno de solera de leña.'
      },
      {
        title: 'Ensaimada Recién Horneada Nevada',
        subtitle: 'El emblema dulce de Palma',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Corteza dorada y hojaldrada cubierta por una capa blanca de azúcar glas.'
      }
    ],
    culinaryTerms: [
      { term: 'Saïm', definition: 'Palabra mallorquina derivada del árabe que designa la manteca de cerdo refinada, ingrediente que confiere el hojaldre característico a la ensaimada.' },
      { term: 'I.G.P. Ensaimada de Mallorca', definition: 'Denominación oficial europea que protege la receta tradicional mallorquina y sus dos variantes: lisa y rellena de cabello de ángel.' },
      { term: 'Prueba de Membrana', definition: 'Técnica de panadería consistente en estirar una porción de masa hasta ver la luz a través de ella para verificar el desarrollo del gluten.' }
    ],
    pairing: {
      beverage: 'Tazón de Chocolate Caliente Especiado o Copa de Licor de Palo de Mallorca',
      regionDO: 'Denominación Geográfica Palo de Mallorca',
      note: 'El Palo de Mallorca, licor tradicional de quina y algarroba, aporta un contrapunto amargo y aromático que armoniza con el hojaldre dulce.'
    },
    culturalRitual: {
      title: 'La Merienda en Can Joan de s’Aigo',
      description: 'Desde 1700, los palmesanos acuden a las mesas de mármol del emblemático café Can Joan de s’Aigo en el casco antiguo de Palma a disfrutar de una ensaimada con chocolate o helado de almendra.'
    },
    keyPhrase: {
      spanish: '«Una ensaimada de Mallorca lisa con un chocolate a la taza bien espeso.»',
      english: 'A plain Mallorcan ensaimada pastry with thick hot chocolate.',
      phonetic: 'OO-nah ehn-sah-ee-MAH-dah deh mah-LYOHR-kah LEE-sah'
    }
  },
  {
    id: 'caldereta-langosta-fornells',
    name: 'Caldereta de Langosta Roja de Fornells',
    spanishTitle: 'El sofrito reposado en barro, el caldo de roca y la langosta de Menorca',
    category: 'Mar y Costas',
    originType: 'city',
    originLocation: 'Fornells (Menorca / Islas Baleares)',
    originBadge: 'RAÍZ MUNICIPAL · FORNELLS',
    historicalRoot: 'Plato marinero tradicional cocinado por los pescadores de la bahía de Fornells en sus barcas de faena ("llaüts").',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Bahía de Fornells (Menorca)',
      narrative: 'En la costa norte de Menorca, la pequeña aldea pesquera de Fornells custodia la receta más aristocrática y codiciada de la gastronomía marina española: la caldereta de langosta. En sus orígenes en el siglo XIX, los pescadores locales faenaban a bordo de sus tradicionales barcas de madera ("llaüts") capturando langostas rojas en las profundas aguas rocosas y cristalinas de la Reserva Marina del Norte de Menorca. En una cazuela baja de barro cocido ("tià de terra"), preparaban un sofrito paciente de cebolla, pimiento verde, tomate y ajo. La langosta viva se cortaba en trozos gruesos aprovechando su coral ("la salsa") y los jugos interiores, bañándola con agua fresca y una picada de almendras tostadas, perejil y galletas marineras. Servida con rebanadas finísimas de pan seco tostado en el fondo del plato, el caldo adquiere un sabor yodado y profundo inigualable.',
      culturalEvolution: 'De rancho de pescadores a templo gastronómico visitado por reyes y gourmets de todo el mundo en el puerto de Fornells.',
      anecdoteOrLegend: 'Los viejos patrones de barca de Fornells insisten en que la caldereta de langosta nunca debe consumirse de inmediato: el guiso debe reposar al menos cuatro o cinco horas en la cazuela de barro para que la carne del crustáceo se impregne del sofrito y el caldo tome cuerpo meloso.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Caldereta_llagosta.jpg',
    imageAlt: 'Caldereta de langosta roja de Fornells en cazuela de barro con rodajas de crustáceo humeantes',
    imageCaption: 'Caldereta de langosta roja pescada en la costa norte de Menorca servida en tià de terra',
    photoTag: 'MENORCA · BAHÍA DE FORNELLS Y LANGOSTA ROJA',
    description: 'El plato estandarte de Menorca: langosta roja mediterránea capturada en las costas de Fornells guisada en cazuela de barro con sofrito de huerta, majado de almendras y rebanadas de pan seco.',
    ingredients: [
      '1 langosta roja de Menorca viva (aprox. 1 a 1,2 kg)',
      '2 cebollas blancas medianas picadas',
      '1 pimiento verde italiano picado fino',
      '3 tomates maduros de ramillete pelados y rallados',
      '3 dientes de ajo y perejil fresco',
      '50 g de almendras tostadas y 2 galletas marineras de Menorca para la picada',
      'El hígado y coral de la langosta',
      '100 ml de AOVE virgen extra de Menorca',
      'Agua de manantial y rebanadas finas de pan payés seco'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Corte de la Langosta y Reserva de Jugos',
        description: 'Cortar la langosta viva con cuchillo afilado separando cabeza y cola en anillas gruesas. Recoger escrupulosamente en un cuenco todo el jugo, la sangre y el coral amarillento del interior de la cabeza.',
        artisanTip: 'El coral y los jugos internos son la base de la ligazón y aportan el sabor marino más concentrado del Mediterráneo.'
      },
      {
        stepNumber: 2,
        title: 'Sofrito Lento en Cazuela de Barro',
        description: 'En el tradicional "tià de terra" con AOVE, sofreír a fuego muy lento la cebolla y el pimiento durante 25 minutos. Incorporar el tomate rallado y concentrar hasta que el aceite comience a separarse de la verdura.',
        artisanTip: 'Un sofrito bien oscuro y caramelizado sin prisa es el secreto para conseguir un caldo de color cobrizo intenso.'
      },
      {
        stepNumber: 3,
        title: 'Incorporación de la Langosta y Cocción',
        description: 'Añadir los trozos de langosta al sofrito caliente y rehogar 3 minutos hasta que el caparazón tome un color rojo vivo. Cubrir con agua caliente y cocer a fuego medio durante 15 minutos.',
        artisanTip: 'No prolongar la cocción más de 15 minutos para que la carne de la langosta permanezca tersa y jugosa sin endurecerse.'
      },
      {
        stepNumber: 4,
        title: 'La Picada con Coral y Reposo',
        description: 'En el mortero, majar las almendras tostadas, ajos, perejil, las galletas y el coral reservado. Desleír con un poco de caldo caliente y volcar a la cazuela 5 minutos antes de apagar el fuego. Dejar reposar varias horas.',
        artisanTip: 'Colocar en el fondo de los platos hondos rebanadas finísimas de pan seco de payés que absorberán el caldo caliente en la mesa.'
      }
    ],
    processPhotos: [
      {
        title: 'Langosta Roja de la Costa de Fornells',
        subtitle: 'Crustáceo vivo recién desembarcado',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Langosta roja de las rocas menorquinas seleccionada para el guiso.'
      },
      {
        title: 'El Sofrito Concentrado en Tià de Terra',
        subtitle: 'Paciencia campesina en cazuela de barro',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Cebolla, pimiento verde y tomate pochados lentamente en barro.'
      },
      {
        title: 'La Caldereta Humeante con Pan Seco',
        subtitle: 'El festín marinero de la bahía',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servida con sus rebanaditas de pan en las terrazas del puerto de Fornells.'
      }
    ],
    culinaryTerms: [
      { term: 'Tià de Terra', definition: 'Cazuela ancha y baja de barro refractario menorquín utilizada tradicionalmente sobre el fuego para calderetas de pescado y marisco.' },
      { term: 'Llaüt', definition: 'Embarcación tradicional balear de madera con aparejo latino empleada históricamente para la pesca artesanal de la langosta.' },
      { term: 'Picada Menorquina', definition: 'Majado en mortero de frutos secos tostados, galleta, hierbas aromáticas y coral que espesa y perfuma los caldos de pescado.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Malvasía de Menorca o Vi de la Terra Illa de Menorca',
      regionDO: 'Vi de la Terra Illa de Menorca',
      note: 'Blancos secos con notas salinas atlántico-mediterráneas y aromas a hierbas silvestres que respetan la pureza de la langosta.'
    },
    culturalRitual: {
      title: 'El Almuerzo en las Terrazas del Puerto de Fornells',
      description: 'Disfrutar de la caldereta de langosta contemplando los barcos mecerse en las aguas calmas de la bahía de Fornells, usando las manos para quebrar las pinzas y cuchara para el caldo.'
    },
    keyPhrase: {
      spanish: '«Una caldereta de langosta de Fornells con sus rebanadas de pan seco y un vino blanco de Menorca.»',
      english: 'A Fornells lobster stew with dry bread slices and a Menorcan white wine.',
      phonetic: 'OO-nah kahl-deh-REH-tah deh lahn-GOHS-tah deh fohr-NEHLYS'
    }
  },
  {
    id: 'patatas-riojana',
    name: 'Patatas a la Riojana con Chorizo de Sarta',
    spanishTitle: 'El chasquido del tubérculo, el pimentón y el caldo ligado a fuego lento',
    category: 'Cuchara y Puchero',
    originType: 'region',
    originLocation: 'La Rioja (Haro, Logroño, Nájera y Calahorra)',
    originBadge: 'ORIGEN REGIONAL · LA RIOJA',
    historicalRoot: 'Plato jornalero de los viñadores de La Rioja Alta preparado en los almuerzos de la vendimia.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Viñedos y bodegas de La Rioja Alta',
      narrative: 'Las patatas a la riojana constituyen el epítome de la cocina de vendimia española. Nacidas en las comarcas vitivinícolas del valle del Ebro en La Rioja, eran cocinadas en el propio campo por las cuadrillas de vendimiadores que pasaban jornadas agotadoras recolectando racimos de tempranillo y garnacha bajo el fresco otoño riojano. Su secreto no estriba en ingredientes exóticos, sino en una técnica elemental de corte: las patatas no deben cortarse limpiamente con el filo del cuchillo, sino "cascarse" o "chascarse" (se introduce el cuchillo y se quiebra la patata con un golpe de muñeca). Esta fractura irregular rompe las celdas de fécula, permitiendo que el almidón de la patata se disuelva en el caldo durante la cocción lenta con el chorizo de sarta, el pimiento choricero y la hoja de laurel, espesando la salsa en un caldo denso, rojizo y profundamente reconfortante.',
      culturalEvolution: 'Inmortalizadas por el célebre chef francés Paul Bocuse en 1976 cuando, tras degustarlas en una bodega de La Rioja, declaró ante la prensa gastronómica que era uno de los mejores platos del mundo.',
      anecdoteOrLegend: 'En las fiestas de San Mateo en Logroño, las peñas compiten en concursos multitudinarios de calderetas de patatas a la riojana en el paseo del Espolón, cocinando en fogones de gas al aire libre al compás de jotas riojanas.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Patatas_a_la_riojana.jpg',
    imageAlt: 'Patatas a la riojana con chorizo en cazuela de barro con caldo rojizo espeso',
    imageCaption: 'Patatas a la riojana tradicionales con patata cascada y chorizo riojano con I.G.P.',
    photoTag: 'LA RIOJA · VIÑEDOS DE LA RIOJA ALTA Y CHORIZO DE SARTA',
    description: 'Icono del fogón riojano: patatas cascadas cocidas a fuego lento con chorizo riojano de sarta, pulpa de pimiento choricero y laurel, logrando un caldo espeso y ligado naturalmente por el almidón del tubérculo.',
    ingredients: [
      '1 kg de patatas de variedad Monalisa o Kennebec',
      '2 chorizos riojanos de sarta con I.G.P. (uno dulce y uno picante)',
      '1 cebolla dulce picada en brunoise',
      '1 pimiento verde italiano picado',
      '2 cucharadas de pulpa de pimiento choricero hidratado',
      '3 dientes de ajo y 1 hoja de laurel',
      '1 cucharadita de pimentón dulce de la Vera',
      '750 ml de caldo de carne suave o agua',
      'AOVE virgen extra y sal marina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Sofrito y Dorado de Chorizo de Sarta',
        description: 'En una cazuela de barro o hierro, calentar el AOVE y pochar la cebolla, el pimiento verde y los ajos a fuego suave durante 10 minutos. Añadir los chorizos cortados en rodajas gruesas y dorar 3 minutos para que suelten su pimentón.',
        artisanTip: 'El chorizo riojano con I.G.P. aporta la grasa justa y el aroma a pimentón y orégano que tiñe el fondo de la cazuela.'
      },
      {
        stepNumber: 2,
        title: 'La Técnica de «Cascar las Patatas»',
        description: 'Pelar las patatas. Introducir el cuchillo en la patata y hacer palanca hacia arriba para arrancarla con un chasquido sonoro. Repetir en trozos de tamaño bocado.',
        artisanTip: 'Cascar la patata libera el almidón de las paredes celulares, espesando el caldo de manera natural sin necesidad de harinas.'
      },
      {
        stepNumber: 3,
        title: 'Rehogado con Pulpa de Choricero',
        description: 'Añadir las patatas cascadas a la cazuela junto con la pulpa del pimiento choricero, el laurel y el pimentón dulce. Rehogar todo junto durante 3 minutos sin parar de remover.',
        artisanTip: 'La pulpa de choricero aporta un sabor terroso y aterciopelado característico de la cocina del norte.'
      },
      {
        stepNumber: 4,
        title: 'Cocción Lenta y «Meneo de Cazuela»',
        description: 'Cubrir las patatas con caldo caliente justo a ras. Cocer a fuego medio-bajo durante 25 a 30 minutos. En los últimos 5 minutos, mover la cazuela con movimientos de vaivén circular para ligar el caldo en salsa espesa.',
        artisanTip: 'Dejar reposar 10 minutos antes de servir; las patatas reposadas absorben el pimentón y ganan untuosidad.'
      }
    ],
    processPhotos: [
      {
        title: 'El Chasquido Manual de la Patata',
        subtitle: 'Corte irregular para liberar el almidón',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Patatas cascadas a mano listas para integrarse en la cazuela.'
      },
      {
        title: 'Chorizo Riojano Soltando su Esencia',
        subtitle: 'El sofrito perfumado con laurel y pimentón',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Rodajas de chorizo de sarta dorándose suavemente con la cebolla.'
      },
      {
        title: 'Cazuela de Patatas a la Riojana Ligadas',
        subtitle: 'El clásico de las bodegas centenarias',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'Caldo denso y rojizo humeante en cazuela de barro de Navarrete.'
      }
    ],
    culinaryTerms: [
      { term: 'Cascar / Chascar', definition: 'Técnica de corte donde el cuchillo inicia una incisión y luego rompe el tubérculo con un tirón, dejando una superficie rugosa que suelta fécula.' },
      { term: 'Chorizo de Sarta', definition: 'Chorizo curado en forma de herradura típico de La Rioja elaborado con magro de cerdo, pimentón y ajo, embutido en tripa natural.' },
      { term: 'Pimiento Choricero', definition: 'Variedad de pimiento rojo seco cuya pulpa carnosa rehidratada en agua caliente es condimento básico de la cocina del norte.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Crianza de la D.O.Ca. Rioja (Tempranillo)',
      regionDO: 'D.O.Ca. Rioja (Rioja Alta o Rioja Alavesa)',
      note: 'Los taninos pulidos por la crianza en roble y las notas a frutos negros y vainilla funden la potencia grasa del chorizo riojano.'
    },
    culturalRitual: {
      title: 'El Almuerzo de Bodega en la Calle del Laurel',
      description: 'En Logroño, tras recorrer los bares de pinchos de la mítica Calle del Laurel, las cuadrillas se sientan a la mesa de un mesón tradicional a compartir una cazuela de patatas riojanas.'
    },
    keyPhrase: {
      spanish: '«Una cazuela de patatas a la riojana bien trabadas y una copa de Rioja crianza.»',
      english: 'A pot of thick Rioja-style potatoes and a glass of Rioja crianza red wine.',
      phonetic: 'OO-nah kah-THWEH-lah deh pah-TAH-tahs ah lah ryoh-HAH-nah byehn trah-BAH-dahs'
    }
  },
  {
    id: 'pimientos-piquillo-lodosa',
    name: 'Pimientos del Piquillo de Lodosa Rellenos de Bacalao',
    spanishTitle: 'El asado a la llama, el desvenado manual y la velouté de pescado en cazuela',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'Lodosa (Ribera de Navarra)',
    originBadge: 'RAÍZ MUNICIPAL · NAVARRA',
    historicalRoot: 'Tradición conservera artesanal de la Ribera Navarra documentada desde el siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Huertas de Lodosa y Mendavia (Navarra)',
      narrative: 'El pimiento del piquillo es el "oro rojo" indiscutible de las huertas de la Ribera del Ebro en Navarra. Reconocido bajo la prestigiosa Denominación de Origen Protegida Pimiento del Piquillo de Lodosa, este fruto de forma triangular y punta curvada se distingue por una carne tierna y compacta y un sabor dulce con suave toque amargo. Su elaboración tradicional es una de las mayores proezas de paciencia artesanal: los pimientos maduros se asan uno a uno a la llama directa sobre brasas de leña o carbón. Posteriormente, las mujeres conserveras de Lodosa los pelan, descorazonan y retiran las semillas a mano sin lavarlos jamás con agua para no perder el jugo ni el aroma ahumado de la leña. Para el relleno canónico, se prepara una masa cremosa y suave de bechamel enriquecida con láminas de bacalao desalado y puerro confitado, horneados en cazuela de barro bajo una reducción de pimientos y nata.',
      culturalEvolution: 'Pilar insustituible de la cocina navarra y de las barras de pintxos de Pamplona y Tudela.',
      anecdoteOrLegend: 'En las conserveras tradicionales de Lodosa, las peladoras veteranísimas limpian miles de pimientos al día con paños secos; una norma sagrada es que si un pimiento toca agua corriente, pierde el sello de la D.O.P. al instante.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Tapa_de_pimientos_del_piquillo_rellenos.jpg',
    imageAlt: 'Pimientos del piquillo de Lodosa rellenos de bacalao napados con salsa roja en cazuela de barro',
    imageCaption: 'Pimientos del Piquillo de Lodosa con D.O.P. rellenos de crema suave de bacalao desalado',
    photoTag: 'NAVARRA · ORO ROJO DE LODOSA Y ASADO A LA BRASA',
    description: 'Pimientos del piquillo de Lodosa asados a leña y pelados a mano sin agua, rellenos de una suave crema artesana de bacalao desalado, bañados en salsa suave de piquillos y horneados en barro.',
    ingredients: [
      '12 pimientos del piquillo con D.O.P. Lodosa enteros',
      '300 g de bacalao desalado desmigado',
      '1 cebolleta y 1 puerro blanco picados finos',
      '50 g de mantequilla y 50 g de harina de trigo',
      '400 ml de leche entera templada',
      'Para la salsa: 4 pimientos del piquillo triturados, 100 ml de nata líquida, ajo pochado y caldo de pescado',
      'AOVE virgen extra, sal y nuez moscada'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Preparación de la Farsa de Bacalao',
        description: 'Pochar la cebolleta y el puerro en AOVE con mantequilla a fuego suave. Añadir el bacalao desmigado y rehogar 3 minutos. Añadir la harina y tostar 2 minutos.',
        artisanTip: 'Cocer la harina con la grasa elimina el sabor a crudo y permite que la bechamel quede sedosa.'
      },
      {
        stepNumber: 2,
        title: 'Ligazón de la Bechamel y Enfriado',
        description: 'Verter la leche tibia poco a poco batiendo con varilla hasta lograr una crema espesa, aromática y sin grumos. Añadir nuez moscada y una pizca de sal. Enfriar tapada con film.',
        artisanTip: 'La farsa debe reposar en nevera para adquirir la consistencia adecuada que permita rellenar los pimientos sin que se rompan.'
      },
      {
        stepNumber: 3,
        title: 'Relleno Manual con Manga o Cuchara',
        description: 'Secar delicadamente cada pimiento del piquillo. Introducir la farsa fría con cuchara pequeña o manga pastelera sin colmar hasta el borde para poder doblar la boca.',
        artisanTip: 'Manipular los pimientos con sumo cuidado: su carne asada al fuego es tierna y propensa a desgarrarse.'
      },
      {
        stepNumber: 4,
        title: 'Elaboración de la Salsa y Golpe de Horno',
        description: 'Triturar 4 pimientos con un sofrito de ajo pochado, nata y caldo de pescado hasta obtener una salsa roja aterciopelada. Napar los pimientos colocados en cazuela de barro y hornear a 180°C durante 10 minutos.',
        artisanTip: 'Servir en la misma cazuela de barro para que la salsa mantenga su cremosidad en la mesa.'
      }
    ],
    processPhotos: [
      {
        title: 'Pimientos Asados y Pelados a Mano',
        subtitle: 'El desvenado artesano de Lodosa sin agua',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pimientos triangulares con aroma a brasa listos para rellenar.'
      },
      {
        title: 'Relleno con Masa Sedosa de Bacalao',
        subtitle: 'Equilibrio entre la huerta y el mar',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Piquillos colmados con farsa cremosa de bacalao y puerro confitado.'
      },
      {
        title: 'Cazuela Napada con Salsa de Piquillos',
        subtitle: 'Horneado suave en barro navarro',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servidos calientes en las tabernas de la Plaza del Castillo de Pamplona.'
      }
    ],
    culinaryTerms: [
      { term: 'D.O.P. Piquillo de Lodosa', definition: 'Sello de calidad que certifica el pimiento rojo cultivado en la Ribera del Ebro en Navarra, asado a la leña y pelado sin entrar en contacto con agua.' },
      { term: 'Farsa', definition: 'Relleno trabado de verduras, pescados o carnes picados finamente ligado con bechamel o huevo para rellenar vegetales o pastas.' },
      { term: 'Napar', definition: 'Cubrir de manera homogénea un alimento con una salsa espesa y brillante de modo que quede completamente envuelto.' }
    ],
    pairing: {
      beverage: 'Vino Rosado de Lágrima de la D.O. Navarra (Garnacha)',
      regionDO: 'D.O. Navarra',
      note: 'El frescor frutal y la vibrante acidez de la garnacha rosada navarra armonizan a la perfección con el dulzor ahumado del pimiento.'
    },
    culturalRitual: {
      title: 'El Tapeo por la Calle Estafeta de Pamplona',
      description: 'El plan obligado en Pamplona consiste en recorrer las tabernas de la calle Estafeta y San Nicolás pidiendo un pimiento relleno caliente acompañado de un chato de rosado navarro.'
    },
    keyPhrase: {
      spanish: '«Dos pimientos del piquillo de Lodosa rellenos de bacalao y una copa de rosado navarro.»',
      english: 'Two Lodosa piquillo peppers stuffed with cod and a glass of Navarre rosé wine.',
      phonetic: 'dohs pee-MYEHN-tohs dehl pee-KEE-lyoh deh loh-DOH-sah reh-LYEH-nohs'
    }
  },
  {
    id: 'caldero-mar-menor',
    name: 'Caldero del Mar Menor con Mújol y Alioli',
    spanishTitle: 'El arroz meloso con ñoras de la huerta, pescado de roca y el mortero de ajoaceite',
    category: 'Arroces',
    originType: 'city',
    originLocation: 'Cabo de Palos / Cartagena (Murcia)',
    originBadge: 'RAÍZ MUNICIPAL · MURCIA',
    historicalRoot: 'Plato marinero tradicional cocinado en trípode sobre la arena por los pescadores de la laguna del Mar Menor.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Cabo de Palos y Los Nietos (Región de Murcia)',
      narrative: 'El caldero del Mar Menor es uno de los arroces marineros más singulares y potentes de toda la costa mediterránea española. En las orillas de la laguna salada del Mar Menor y en los acantilados de Cabo de Palos, los pescadores de mújol, dorada y magre cocinaban su rancho diario en una olla de hierro fundido con asa ("el caldero"), suspendida de un trípode de madera sobre una fogata en la misma playa. El secreto radica en el sofrito concentrado de ñoras murcianas secas descorazonadas y abundante ajo de la huerta, con el que se cocina un caldo espeso utilizando morralla y piezas de mújol. La liturgia del caldero se sirve en dos vuelcos inseparables: primero el arroz caldoso o meloso impregnado del color y perfume de la ñora, y a continuación las tajadas de pescado cocidas en el caldo, todo ello acompañado obligatoriamente de un buen mortero de alioli casero emulsionado a mano.',
      culturalEvolution: 'De rancho de pescadores a templo gastronómico en los restaurantes playeros de Cabo de Palos y La Manga.',
      anecdoteOrLegend: 'Los pescadores tradicionales de Cabo de Palos decían que el alioli del caldero debía ser tan espeso que, al clavar la maza de madera en el centro del mortero amarillo, esta debía permanecer de pie erguida sin caerse.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Arroz_caldero_-_Barlovento_%2822828000500%29.jpg',
    imageAlt: 'Caldero del Mar Menor con arroz meloso oscuro de ñoras en olla de hierro con alioli',
    imageCaption: 'Caldero del Mar Menor tradicional en olla de hierro fundido con mújol de roca y alioli casero',
    photoTag: 'CABO DE PALOS · ARROZ DE PESCADORES Y ÑORAS MURCIANAS',
    description: 'Arroz marinero meloso cocinado en olla de hierro fundido con intenso caldo de mújol y pescado de roca, ñoras secas de la huerta murciana y ajos, servido con el pescado aparte y alioli de mortero.',
    ingredients: [
      '400 g de arroz de Calasparra con D.O.P. (variedad Bomba o Balilla)',
      '1 kg de pescado de roca y mújol fresco limpio cortado en rodajas',
      '4 ñoras murcianas secas sin pepitas',
      '1 cabeza de ajos pelados',
      '2 tomates maduros rallados',
      'Para el Alioli: 3 dientes de ajo, 1 pizca de sal marina, 150 ml de AOVE y unas gotas de limón',
      'Agua abundante y sal gorda'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Fritura de Ñoras y Majado con Ajos',
        description: 'En el caldero de hierro con AOVE, dorar las ñoras secas durante apenas 30 segundos sin que se quemen. Pasarlas al mortero y majar con los ajos y una pizca de sal marina hasta formar una pasta espesa.',
        artisanTip: 'Las ñoras deben retirarse enseguida del aceite caliente; si se queman amargarán irremediablemente todo el caldo marinero.'
      },
      {
        stepNumber: 2,
        title: 'Elaboración del Fumet de Roca con Ñoras',
        description: 'En ese mismo aceite, sofreír el tomate rallado y añadir la mitad del majado de ñoras. Incorporar la morralla de pescado y cubrir con agua abundante. Cocer a fuego vivo 30 minutos y colar bien apretando las cabezas.',
        artisanTip: 'El mújol del Mar Menor tiene una carne grasa y sabrosa que transmite un sabor marino profundo al caldo.'
      },
      {
        stepNumber: 3,
        title: 'Cocción del Pescado Noble en el Caldo',
        description: 'En el caldo colado hirviendo, introducir las rodajas nobles de mújol durante 10 minutos. Retirar las rodajas de pescado a una fuente y napar con unas cucharadas de caldo caliente mezclado con el resto del majado de ñora.',
        artisanTip: 'El pescado se reserva para el segundo vuelco, manteniéndolo caliente mientras se cocina el arroz.'
      },
      {
        stepNumber: 4,
        title: 'Cocción del Arroz Meloso y Emulsión del Alioli',
        description: 'Medir el caldo restante y verter en el caldero de hierro. Añadir el arroz de Calasparra y cocer 18 minutos hasta que quede meloso. Servir de inmediato con mortero de alioli.',
        artisanTip: 'El arroz de Calasparra absorbe un tercio más de caldo que otros arroces sin pasarse ni abrirse.'
      }
    ],
    processPhotos: [
      {
        title: 'Ñoras Murcianas Fritas en Caldero de Hierro',
        subtitle: 'El aroma ahumado de la huerta del Segura',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Ñoras secas dorándose en aceite virgen extra de Murcia.'
      },
      {
        title: 'El Arroz Meloso en la Olla Negra',
        subtitle: 'El grano bomba absorbiendo el caldo de mújol',
        imageUrl: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=85',
        caption: 'Arroz caldero en su punto meloso con intenso color cobrizo.'
      },
      {
        title: 'Servicio en Dos Vuelcos con Alioli',
        subtitle: 'La liturgia centenaria de Cabo de Palos',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Arroz meloso, mújol con reducción y mortero de alioli recién majado.'
      }
    ],
    culinaryTerms: [
      { term: 'Ñora Murciana', definition: 'Pimiento rojo bola secado al sol en las huertas murcianas, de piel gruesa y sabor dulce sin picor, alma de los arroces del sureste.' },
      { term: 'Arroz de Calasparra D.O.P.', definition: 'Primer arroz del mundo con Denominación de Origen protegida, cultivado con agua fría de montaña en cotas altas de Murcia.' },
      { term: 'Servicio en Dos Vuelcos', definition: 'Costumbre marinera murciana de comer primero el arroz meloso en plato hondo y a continuación el pescado con alioli.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Monastrell Vinificado en Blanco o Jumilla Blanco de Macabeo',
      regionDO: 'D.O. Jumilla / D.O. Bullas',
      note: 'Vinos con volumen en boca y buena frescura que soportan la fuerza del alioli de mortero y la grasa del pescado.'
    },
    culturalRitual: {
      title: 'El Almuerzo Marino frente al Faro de Cabo de Palos',
      description: 'El ritual del caldero exige sentarse en una mesa al borde del mar mirando los barcos pesqueros amarrados y mezclar una cucharada de alioli con cada bocado de arroz caliente.'
    },
    keyPhrase: {
      spanish: '«Un caldero del Mar Menor para dos con su mújol, buen alioli y vino blanco fresco.»',
      english: 'A Mar Menor caldero rice for two with mullet fish, good alioli and cold white wine.',
      phonetic: 'oon kahl-DEH-roh dehl MAHR meh-NOHR PAH-rah dohs kohn soo MOO-hohl'
    }
  },
  {
    id: 'jamon-iberico-dehesa',
    name: 'Jamón 100% Ibérico de Bellota Dehesa de Extremadura',
    spanishTitle: 'La joya nacarada de la montanera, el corte a cuchillo fino y la grasa que funde a 28°C',
    category: 'Tapeo y Bocados',
    originType: 'region',
    originLocation: 'Extremadura (Dehesas de Badajoz y Cáceres / Monesterio y Montánchez)',
    originBadge: 'ORIGEN REGIONAL · EXTREMADURA',
    historicalRoot: 'Tradición ganadera milenaria en el ecosistema de la dehesa extremeña documentada desde la Hispania romana.',
    historyAndOrigins: {
      eraOrCentury: 'Hispania Romana · Siglo I a.C. · Dehesas de Badajoz y Cáceres',
      narrative: 'El jamón 100% ibérico de bellota de la D.O.P. Dehesa de Extremadura representa el culmen absoluto de la charcutería mundial y uno de los mayores patrimonios gastronómicos de la humanidad. Su existencia es inseparable del ecosistema de la dehesa: un bosque aclarado milenario de encinas y alcornoques que se extiende por más de un millón de hectáreas en Extremadura. Los cerdos de raza ibérica pura (100% ibérico, pata negra) viven en régimen extensivo en total libertad, recorriendo hasta 14 kilómetros diarios en busca de bellotas ricas en ácido oleico durante la "montanera" otoñal e invernal. La curación natural se realiza en secaderos y bodegas de pueblos serranos como Montánchez o Monesterio durante un mínimo de 36 a 48 meses al aire puro de la sierra. El corte a cuchillo en lonchas casi transparentes revela una carne de color rojo rubí con un veteado nacarado brillante que se funde en el paladar a temperatura ambiente liberando notas de avellana tostada, hierba fresca y bodega noble.',
      culturalEvolution: 'Protegido con el precinto negro oficial de la Norma de Calidad del Ibérico y la D.O.P. Dehesa de Extremadura.',
      anecdoteOrLegend: 'En la antigua Roma, los banquetes senatoriales más ostentosos exigían jamones ibéricos curados en la Bética y Lusitania; el geógrafo Estrabón narraba que los cerdos criados en los bosques de encinas ibéricos producían una carne tan tierna y dulce que se enviaba en naves directas al puerto de Ostia para el emperador.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Plato_de_jamon_iberico_2014.jpg',
    imageAlt: 'Plato de jamón 100% ibérico de bellota cortado a cuchillo en lonchas finas con vetas brillantes',
    imageCaption: 'Jamón 100% Ibérico de Bellota con D.O.P. Dehesa de Extremadura cortado a mano',
    photoTag: 'EXTREMADURA · LA DEHESA DE ENCINAS Y EL CORTE A CUCHILLO',
    description: 'La cúspide gastronómica de España: jamón de cerdo 100% ibérico criado en libertad en la dehesa extremeña durante la montanera de bellota, curado más de 3 años y cortado a mano en lascas finas.',
    ingredients: [
      '1 pieza de Jamón 100% Ibérico de Bellota con D.O.P. Dehesa de Extremadura',
      'Sal marina para la salazón inicial',
      'Tiempo, aire de sierra y paciencia en bodega (36 a 48 meses)',
      'Picos camperos artesanos de masa madre para acompañar'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'La Montanera en la Dehesa de Encinas',
        description: 'El cerdo ibérico pasta en libertad comiendo entre 8 y 10 kg diarios de bellotas dulces de encina y alcornoque, transformando el ácido oleico en vetas de grasa monoinsaturada.',
        artisanTip: 'El ejercicio diario del animal trotando por la dehesa permite que la grasa se infiltre finamente en la masa muscular.'
      },
      {
        stepNumber: 2,
        title: 'Salazón y Lavado Artesanal',
        description: 'Tras el sacrificio, las patas traseras se cubren con sal marina gruesa en cámaras frías a razón de un día por kilo de peso. Se lavan con agua tibia para retirar la sal exterior.',
        artisanTip: 'La salazón justa es crucial: el jamón ibérico de bellota de calidad superior debe ser dulce y bajo en sal para no opacar el aroma de la bellota.'
      },
      {
        stepNumber: 3,
        title: 'Secado Natural y Sudado Estival',
        description: 'Los jamones se cuelgan en secaderos naturales serranos con ventanas regulables. Durante el calor del verano, el jamón "suda", fundiendo su grasa que se redistribuye por todo el magro.',
        artisanTip: 'El maestro jamonero abre y cierra las ventanas de madera orientadas al norte para aclimatar la brisa de sierra.'
      },
      {
        stepNumber: 4,
        title: 'Maduración en Bodega y Corte a Cuchillo',
        description: 'Reposo en bodegas subterráneas en penumbra durante 2 a 3 años donde las levaduras nobles colonizan la corteza. Se corta con cuchillo jamonero flexible en lonchas de 4 cm casi translúcidas.',
        artisanTip: 'La loncha perfecta debe comerse a 22-24°C: a esa temperatura la grasa oleica se licúa al contacto con la lengua como mantequilla aromática.'
      }
    ],
    processPhotos: [
      {
        title: 'Cerdos Ibéricos en la Dehesa Extremeña',
        subtitle: 'Montanera en libertad bajo encinas milenarias',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Animales de raza pura alimentándose de bellotas caídas en otoño.'
      },
      {
        title: 'Bodega de Curación en la Sierra',
        subtitle: 'Paciencia y hongos nobles en penumbra',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Piezas colgadas madurando durante cuatro años al aire serrano.'
      },
      {
        title: 'El Corte a Cuchillo en Lonchas Finas',
        subtitle: 'La liturgia del cortador profesional',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Plato blanco con lonchas concéntricas brillantes con vetas nacaradas.'
      }
    ],
    culinaryTerms: [
      { term: 'Montanera', definition: 'Periodo entre octubre y febrero en el que el cerdo ibérico aprovecha la caída de la bellota en la dehesa, engordando al menos 46 kg a base de frutos y hierbas.' },
      { term: 'Ácido Oleico', definition: 'Ácido graso monoinsaturado presente en la bellota de encina idéntico al del aceite de oliva, responsable del brillo y punto de fusión bajo del jamón.' },
      { term: 'Corte a Cuchillo', definition: 'Arte de rebanar el jamón a mano con cuchillo jamonero largo y flexible en lonchas muy finas que abarcan magro y tocino en una sola pieza.' }
    ],
    pairing: {
      beverage: 'Vino Fino en Rama, Manzanilla de Sanlúcar o Tinto Ribera del Guadiana',
      regionDO: 'D.O. Ribera del Guadiana / D.O. Jerez-Xérès-Sherry',
      note: 'El vino fino seco limpia el paladar tras la untuosidad de la grasa ibérica preparando la boca para el siguiente bocado.'
    },
    culturalRitual: {
      title: 'El Plato de Bellota en la Taberna',
      description: 'El ritual español más celebrado: pedir una ración de jamón de bellota recién cortado servido sobre plato blanco tibio y tomar las lonchas con los dedos sin utilizar tenedor de metal.'
    },
    keyPhrase: {
      spanish: '«Una ración de jamón 100% ibérico de bellota cortado a cuchillo y una copa de fino.»',
      english: 'A plate of 100% acorn-fed Iberian ham sliced by knife and a glass of fino sherry.',
      phonetic: 'OO-nah rah-THYOHN deh hah-MOHN thehn poor THEHYN-toh ee-BEH-ree-koh'
    }
  }
];
