import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const CASTILLA_LA_MANCHA_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'pisto-manchego',
    name: 'Pisto Manchego con Huevo de Corral',
    spanishTitle: 'El confitado lento de huerta en cazuela de barro y la yema de puntilla',
    category: 'Cuchara y Puchero',
    originType: 'region',
    originLocation: 'Castilla-La Mancha (Toledo, Ciudad Real, Cuenca y Albacete)',
    originBadge: 'ORIGEN REGIONAL · LA MANCHA',
    historicalRoot: 'Plato hortelano campesino de los campos manchegos inmortalizado en las ventas del camino real.',
    historyAndOrigins: {
      eraOrCentury: 'Siglos XVI y XVII · La Mancha de Don Quijote',
      narrative: 'El pisto manchego es la celebración suprema de las huertas de la llanura manchega. Sus orígenes se remontan a los hortelanos andalusíes y campesinos cristianos que recolectaban en verano las hortalizas de temporada maduradas bajo el sol implacable: calabacín blanco, pimientos verdes y rojos carnosos, cebollas dulces y tomates maduros. A diferencia de las frituras rápidas, el secreto del pisto manchego reside en el "pochado escalonado": cada verdura se corta en dados uniformes y se incorpora a la cazuela de barro en momentos distintos según su dureza, permitiendo que se confiten lentamente en abundante aceite de oliva virgen extra hasta deshacerse en una compota aromática. Se corona tradicionalmente con un huevo frito de corral con su correspondiente "puntilla" crujiente en los bordes para romper la yema líquida sobre las verduras calientes.',
      culturalEvolution: 'Evolucionó de comida de cuadrilla jornalera a icono indiscutible de la cocina castellano-manchega con fama internacional.',
      anecdoteOrLegend: 'En las ventas manchegas descritas por Cervantes, el pisto se servía en la misma sartén en el centro de la mesa redonda; los comensales utilizaban cortezas de pan de hogaza a modo de cuchara para no desperdiciar ni una pizca de jugo.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Pisto.jpg',
    imageAlt: 'Pisto manchego tradicional en cazuela de barro coronado con huevo frito de puntilla',
    imageCaption: 'Pisto manchego con pimiento, calabacín y tomate confitado con huevo de corral',
    photoTag: 'LA MANCHA · HUERTA MEDITERRÁNEA Y YEMA DE CORRAL',
    description: 'Armoniosa compota de verduras de la huerta manchega (pimiento, calabacín, cebolla y tomate) confitadas a fuego lentísimo en AOVE, servida caliente en cazuela de barro con huevo frito de yema fluida.',
    ingredients: [
      '2 calabacines medianos pelados y cortados en dados regulares',
      '2 pimientos verdes italianos',
      '1 pimiento rojo carnoso',
      '2 cebollas dulces grandes picadas',
      '1 kg de tomates maduros pelados y picados',
      '2 dientes de ajo picados',
      '150 ml de AOVE variedad Cornicabra de los Montes de Toledo',
      'Sal y una pizca de azúcar para corregir acidez',
      '4 huevos camperos de corral'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Corte Geométrico y Pocha de Cebolla',
        description: 'Picar todas las verduras en dados de tamaño homogéneo (aprox. 1 cm). En cazuela de barro con AOVE abundante, pochar la cebolla y el ajo a fuego mínimo durante 15 minutos con una pizca de sal.',
        artisanTip: 'El corte regular garantiza que todas las hortalizas alcancen la misma melosidad sin que unas queden crudas y otras deshechas.'
      },
      {
        stepNumber: 2,
        title: 'Incorporación Escalonada de Pimientos',
        description: 'Añadir los pimientos verdes y rojos a la cebolla pochada. Continuar confitando a fuego muy suave durante 15 minutos más hasta que comiencen a ablandarse.',
        artisanTip: 'El pimiento requiere más tiempo de cocción que el calabacín; añadirlo antes asegura una textura unificada.'
      },
      {
        stepNumber: 3,
        title: 'Confitado del Calabacín y Tomate',
        description: 'Incorporar los dados de calabacín y el tomate maduro picado con su jugo. Cocinar a fuego manso destapado durante 40 minutos removiendo periódicamente hasta que el agua del tomate se evapore por completo.',
        artisanTip: 'El pisto está listo cuando el aceite virgen extra aflora a la superficie y el tomate ha perdido toda su acidez ácida.'
      },
      {
        stepNumber: 4,
        title: 'El Huevo con Puntilla y Emplatado',
        description: 'Freír los huevos en aceite de oliva bien caliente hasta que los bordes de la clara formen una puntilla crujiente dorada y la yema permanezca tierna. Colocar sobre el pisto humeante.',
        artisanTip: 'Romper la yema con el tenedor en el momento de servir para que bañe las verduras confitadas.'
      }
    ],
    processPhotos: [
      {
        title: 'Pochado de Cebolla y Pimientos',
        subtitle: 'El ritmo lento en cazuela de barro',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Hortalizas cortadas en dados pochando lentamente en aceite Cornicabra.'
      },
      {
        title: 'Reducción Confitada del Tomate',
        subtitle: 'Concentración de azúcares naturales',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'La compota de verduras adquiere su tono rojo brillante y textura untuosa.'
      },
      {
        title: 'Huevo con Puntilla sobre el Pisto',
        subtitle: 'El contraste de texturas manchego',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido en plato de cerámica de Talavera con rebanada de pan de cruz.'
      }
    ],
    culinaryTerms: [
      { term: 'Puntilla', definition: 'Encaje fino y crujiente de color dorado tostado que se forma en los bordes de la clara de un huevo frito en aceite muy caliente.' },
      { term: 'Cornicabra', definition: 'Variedad de aceituna típica de los Montes de Toledo que produce un aceite con gran estabilidad, notas a manzana y un picor agradable.' },
      { term: 'Pochar', definition: 'Cocinar hortalizas a fuego muy lento en aceite sin que lleguen a tomar color tostado para que suden sus jugos y queden tiernas.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Joven Cencibel (Tempranillo) de La Mancha',
      regionDO: 'D.O. La Mancha',
      note: 'Vino joven con notas a frambuesa y regaliz que respeta la dulzura vegetal del tomate confitado y el huevo.'
    },
    culturalRitual: {
      title: 'El Pan de Cruz y el Untado de Yema',
      description: 'El ritual ineludible consiste en clavar el trozo de pan de cruz de masa bregada en la yema del huevo frito para que se derrame sobre el pisto y comerlo alternando bocado y cucharada.'
    },
    keyPhrase: {
      spanish: '«Un pisto manchego con su huevo de corral bien frito y pan de cruz.»',
      english: 'A Manchego pisto with a fried farm egg and cross bread.',
      phonetic: 'oon PEES-toh mahn-CHEH-goh kohn soo WEH-boh deh koh-RRAHL'
    }
  },
  {
    id: 'gachas-manchegas',
    name: 'Gachas Manchegas de Almorta',
    spanishTitle: 'La harina de titos, la panceta frita, el pimentón y la navaja en la sartén',
    category: 'Cuchara y Puchero',
    originType: 'region',
    originLocation: 'La Mancha (Ciudad Real, Toledo y Cuenca)',
    originBadge: 'ORIGEN REGIONAL · LA MANCHA',
    historicalRoot: 'Plato ancestral de pastores manchegos documentado desde la época de los molinos de viento.',
    historyAndOrigins: {
      eraOrCentury: 'Época Medieval y Renacentista · Llanuras de La Mancha',
      narrative: 'Las gachas manchegas representan el corazón más agreste, comunitario y pastoril de la tierra de Don Quijote. Se elaboran a partir de la harina de almortas (conocida localmente como "harina de titos"), una legumbre rústica capaz de crecer en las tierras más áridas y pedregosas de la llanura manchega. Cuando llegaban las primeras nieves del invierno, los pastores encendían lumbre de sarmientos en el campo y freían en una sartén honda panceta entreverada, chorizo y ajos enteros. En la grasa caliente aromatizada, tostaban la harina de almorta junto con pimentón de la Vera dulce, añadiendo agua poco a poco y removiendo con una cuchara de palo hasta formar una papilla suave, espesa y brillante. Las gachas no se servían en platos individuales: la sartén se colocaba en el centro del suelo y todos los pastores comían directamente de ella usando trozos de pan pinchados en la punta de sus navajas, respetando la regla sagrada de "cucharada y paso atrás".',
      culturalEvolution: 'De sustento vital contra el frío a plato festivo y social que reúne a familias y peñas en las jornadas de matanza y vendimia.',
      anecdoteOrLegend: 'La ley no escrita de la sartén manchega prohíbe invadir la parcela del vecino: cada comensal debe mojar el pan en su propio sector circular frente a su posición sin cruzar jamás la navaja con la de otro comensal.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Gachas1.JPG',
    imageAlt: 'Gachas manchegas en sartén con torreznos y panceta crujiente encima',
    imageCaption: 'Gachas manchegas tradicionales elaboradas con harina de almortas y torreznos',
    photoTag: 'LA MANCHA · HARINA DE ALMORTAS Y COSTUMBRE PASTORIL',
    description: 'Plato tradicional de pastores elaborado tostando harina de almortas en la grasa de freír panceta y chorizo, cocinada con agua y pimentón hasta lograr una crema espesa coronada con torreznos crujientes.',
    ingredients: [
      '200 g de harina de almortas (titos)',
      '250 g de panceta ibérica fresca troceada',
      '2 chorizos frescos manchegos troceados',
      '6 dientes de ajo enteros con piel machacados',
      '2 cucharaditas de pimentón de la Vera dulce',
      '800 ml de agua templada',
      'AOVE virgen extra y sal marina',
      'Pan candeal duro para mojar'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Fritura de Chicharrones y Ajos',
        description: 'En una sartén honda de hierro con un poco de AOVE, freír los ajos machacados con su piel y los trozos de panceta y chorizo a fuego medio hasta que queden bien dorados y crujientes. Retirar y reservar calientes.',
        artisanTip: 'La grasa liberada por la panceta y el chorizo en la sartén es la base de sabor que perfumará toda la harina de almorta.'
      },
      {
        stepNumber: 2,
        title: 'Tostado de la Harina de Almortas',
        description: 'En esa misma grasa a fuego muy suave, añadir la harina de almortas y tostarla pacientemente durante 4 a 5 minutos con una cuchara de madera para que pierda el sabor a crudo.',
        artisanTip: 'Tostar bien la harina es fundamental para que las gachas resulten digestivas y adquieran un aroma a fruto seco tostado.'
      },
      {
        stepNumber: 3,
        title: 'Incorporación de Pimentón y Agua',
        description: 'Apartar la sartén del fuego, añadir el pimentón de la Vera e inmediatamente después el agua templada poco a poco sin dejar de batir enérgicamente con cuchara o varilla para evitar grumos.',
        artisanTip: 'Verter el agua en hilo continuo mientras se remueve con fuerza garantiza una crema sedosa y homogénea.'
      },
      {
        stepNumber: 4,
        title: 'Cocción hasta que Aflore la Grasa',
        description: 'Cocinar a fuego lento durante 15 minutos removiendo constantemente hasta que la crema espese y comience a asomar el aceite rojizo en la superficie formando islas brillantes. Coronar con la panceta y los chorizos.',
        artisanTip: 'Las gachas se comen directamente de la sartén caliente pinchando pellizcos de pan en la navaja.'
      }
    ],
    processPhotos: [
      {
        title: 'Fritura de Panceta y Chorizo Manchego',
        subtitle: 'La extracción de la grasa noble',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Panceta y chorizo dorándose en la sartén de hierro tradicional.'
      },
      {
        title: 'Tostado de la Harina de Titos',
        subtitle: 'El color avellanado en el aceite caliente',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'La harina de almortas tostándose con pimentón de la Vera.'
      },
      {
        title: 'La Sartén de Gachas en la Mesa',
        subtitle: 'El rito de la navaja y el paso atrás',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'Gachas espesas y humeantes coronadas con torreznos crujientes.'
      }
    ],
    culinaryTerms: [
      { term: 'Almorta (Titos)', definition: 'Legumbre tradicional resistente a la sequía ("Lathyrus sativus") cuya harina molida en piedra es la base única de las gachas manchegas.' },
      { term: 'Cucharada y Paso Atrás', definition: 'Código de conducta campesino que dicta mojar el pan en la sartén común y dar un paso atrás para permitir el turno al siguiente comensal.' },
      { term: 'Torreznos', definition: 'Tiras de panceta curada fritas en su propia grasa hasta que la corteza sufla formando burbujas doradas ultracrujientes.' }
    ],
    pairing: {
      beverage: 'Vino Tinto de Tinaja de La Mancha o Valdepeñas',
      regionDO: 'D.O. Valdepeñas',
      note: 'Vinos criados en tinajas de barro con notas terrosas que acompañan con franqueza el poder rústico de la almorta y la panceta.'
    },
    culturalRitual: {
      title: 'La Sartén en el Centro de la Lumbre',
      description: 'El protocolo popular exige colocar la sartén directamente sobre una trébede de hierro en las brasas y comer con trozos de pan pinchados en navaja cabritera.'
    },
    keyPhrase: {
      spanish: '«Una sartén de gachas manchegas bien calientes con sus torreznos crujientes.»',
      english: 'A pan of piping hot Manchego gachas with crispy pork cracklings.',
      phonetic: 'OO-nah sahr-TEHN deh GAH-chahs mahn-CHEH-gahs byehn kah-LYEHN-tehs'
    }
  }
];
