import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const MADRID_CENTRO_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'cocido-madrileno',
    name: 'Cocido Madrileño de Tres Vuelcos',
    spanishTitle: 'La liturgia de la olla de barro, los garbanzos castellanos y las viandas',
    category: 'Cuchara y Puchero',
    originType: 'city',
    originLocation: 'Madrid (Comunidad de Madrid)',
    originBadge: 'RAÍZ MUNICIPAL · MADRID',
    historicalRoot: 'Evolución directa de la "adafina" judía sefardí y la "olla podrida" del Siglo de Oro español.',
    historyAndOrigins: {
      eraOrCentury: 'Herencia Sefardí Medieval (Adafina) · Consagrado en el siglo XIX',
      narrative: 'El cocido madrileño es el monumento gastronómico de la Villa y Corte. Su genealogía se remonta a la "adafina", el puchero que los judíos hispanos dejaban cocer lentamente en ollas de barro durante la noche del viernes para comer caliente en el sabbat sin encender fuego. Con la cristianización forzosa en los siglos XV y XVI, la olla incorporó los productos del cerdo (tocino entreverado, chorizo y morcilla) transformándose en la célebre "olla podrida" citada por Cervantes en El Quijote. En el siglo XIX, el cocido madrileño adquirió su liturgia definitiva en los figones y palacetes de Madrid con la separación estricta en "tres vuelcos": primero la sopa de fideos dorados con el caldo desgrasado; segundo los garbanzos castellanos mantecosos con repollo y patata; y tercero las viandas cárnicas (el morcillo, la gallina, el jamón y las chacinas).',
      culturalEvolution: 'De plato humilde de figón a banquete cortesano servido en el mítico restaurante Lhardy desde 1839 hasta la actualidad.',
      anecdoteOrLegend: 'En las tabernas de la Cava Baja, los comensales aplaudían cuando la tabernera servía la sopa humeante en soperas de loza; comer los tres vuelcos en orden era considerado una cuestión de honor cívico madrileño.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/CocidoMadrile%C3%B1o.jpg',
    imageAlt: 'Cocido madrileño tradicional servido en tres vuelcos con garbanzos y viandas en puchero',
    imageCaption: 'Cocido madrileño tradicional con garbanzos castellanos, morcillo, tocino ibérico y chorizo',
    photoTag: 'MADRID · TABERNAS CENTENARIAS Y PUCHERO DE BARRO',
    description: 'El plato ceremonial por excelencia de Madrid: un guiso monumental cocido a fuego manso durante horas y servido rigurosamente en tres vuelcos sucesivos (sopa, legumbre y carnes).',
    ingredients: [
      '400 g de garbanzo castellano de Fuentesaúco (puesto a remojo)',
      '500 g de morcillo de ternera de la Sierra de Guadarrama',
      '1/4 de gallina campera o pollo de corral',
      '150 g de tocino ibérico entreverado salado',
      '1 hueso de caña con tuétano',
      '1 punta de jamón serrano curado',
      '2 chorizos y 2 morcillas de cebolla asturianas o madrileñas',
      '1 repollo mediano rehogado con ajo y pimentón',
      'Fideos finos de cabello de ángel'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Arranque en Frío y Espumado Constante',
        description: 'Poner en una olla grande de barro o hierro las carnes (morcillo, gallina, tocino y huesos) cubiertas con agua fría mineral. Llevar a ebullición suave y espumar con paciencia durante 20 minutos para retirar impurezas.',
        artisanTip: 'El espumado meticuloso es la clave para conseguir un caldo cristalino, limpio y de sabor nítido sin notas amargas.'
      },
      {
        stepNumber: 2,
        title: 'Introducción de Garbanzos en Malla',
        description: 'Cuando el agua hierva a borbotones, añadir los garbanzos escurridos (metidos en red de cocina) templados previamente. Cocinar a fuego manso durante 3 horas y media tapado.',
        artisanTip: 'Los garbanzos deben entrar siempre en agua hirviendo; si entran en agua tibia se "pasman" y su piel quedará dura.'
      },
      {
        stepNumber: 3,
        title: 'Cocción Aparte del Repollo y Embutidos',
        description: 'Cocer el repollo en olla separada con un poco de caldo del cocido y rehogarlo al final con aceite, ajo laminado dorado y pimentón de la Vera.',
        artisanTip: 'Cocer la morcilla y el repollo por separado evita que la morcilla tiña el caldo de negro y que el repollo acidifique la sopa.'
      },
      {
        stepNumber: 4,
        title: 'La Liturgia de los Tres Vuelcos',
        description: 'Servir en primer vuelco la sopa de fideos elaborada con el caldo desgrasado. En segundo vuelco los garbanzos con la patata y el repollo. En tercer vuelco las carnes cortadas en fuente.',
        artisanTip: 'Acompañar los garbanzos de una salsera con salsa de tomate frito casero con comino para aligerar la digestión.'
      }
    ],
    processPhotos: [
      {
        title: 'Puchero de Barro a Fuego Manso',
        subtitle: 'El espumado de huesos y morcillo',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'Hervor lento del morcillo y jamón en la olla tradicional madrileña.'
      },
      {
        title: 'Garbanzos Castellanos de Fuentesaúco',
        subtitle: 'Mantequilla pura en boca tras tres horas',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Garbanzos tiernos y mantecosos listos para el segundo vuelco.'
      },
      {
        title: 'Las Viandas y el Tuétano',
        subtitle: 'El tercer vuelco de carnes nobles',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Bandeja de carnes, tocino entreverado y tuétano para untar en pan caliente.'
      }
    ],
    culinaryTerms: [
      { term: 'Tres Vuelcos', definition: 'Ritual madrileño de servir el cocido en tres tiempos diferenciados: primero la sopa de fideos, segundo la legumbre y verduras, y tercero las viandas cárnicas.' },
      { term: 'Tuétano', definition: 'Sustancia grasa del interior del hueso de caña de vacuno que se unta caliente sobre rebanadas de pan tostado con granos de sal.' },
      { term: 'Pasmado', definition: 'Efecto indeseado que sufren las legumbres al romper bruscamente el hervor con agua fría, impidiendo que su pellejo se ablande.' }
    ],
    pairing: {
      beverage: 'Vino Tinto de Madrid (Garnacha de Gredos)',
      regionDO: 'D.O. Vinos de Madrid (Subzona San Martín)',
      note: 'Garnacha de viñas viejas en suelos de granito con acidez viva que corta la contundencia de las grasas nobles.'
    },
    culturalRitual: {
      title: 'El Tuétano sobre Pan Tostado',
      description: 'El clímax del aficionado al cocido madrileño consiste en extraer el tuétano tembloroso del hueso con una cucharilla especial y untarlo sobre corteza de pan candeal con sal gorda.'
    },
    keyPhrase: {
      spanish: '«Un cocido madrileño completo en tres vuelcos y un tinto de Madrid.»',
      english: 'A complete Madrid cocido in three courses and a local Madrid red wine.',
      phonetic: 'oon koh-THEE-doh mah-dree-LEH-nyoh kohm-PLEH-toh ehn trehs BWEHL-kohs'
    }
  },
  {
    id: 'bocadillo-calamares',
    name: 'Bocadillo de Calamares Castizo',
    spanishTitle: 'La barra de zinc, el pan crujiente y las anillas tiernas recién fritas',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'Madrid (Plaza Mayor y Atocha)',
    originBadge: 'RAÍZ MUNICIPAL · MADRID',
    historicalRoot: 'Nacido en las tabernas del centro de Madrid en el siglo XIX para abastecer a la clase obrera con pescado barato.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Tabernas de la Plaza Mayor de Madrid',
      narrative: 'A mediados del siglo XIX, con la llegada del ferrocarril a la estación de Atocha, Madrid comenzó a recibir a diario pescado y cefalópodos frescos procedentes de las costas cantábricas y gallegas. En las tabernas populares que rodeaban la Plaza Mayor, la calle de Botoneras y la Puerta del Sol, los taberneros idearon rebozar las anillas de calamar en una masa ligera de harina y freírlas en abundante aceite hirviendo. Para alimentar a los miles de obreros, estudiantes y viajeros que transitaban la capital con poco dinero, introdujeron los calamares aún humeantes dentro de un bollo de pan crujiente de corteza dorada. Aquella combinación sencilla de pan crujiente y calamar tierno y yodado se convirtió en la seña de identidad callejera más castiza y querida de Madrid.',
      culturalEvolution: 'De bocado obrero a icono culinario madrileño consumido por millones de personas al año en templos centenarios como La Campana o El Brillante.',
      anecdoteOrLegend: 'En las barras de zinc de la Plaza Mayor, el ritual del camarero consiste en cortar el pan por la mitad sin separarlo del todo, rellenarlo con tantas anillas que los calamares se desbordan por los lados y servirlo en una servilleta de papel que se transparenta con el calor.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Bocadillo_de_calamares-2009.jpg',
    imageAlt: 'Bocadillo de calamares dorados desbordando de una barra de pan crujiente',
    imageCaption: 'Bocadillo de calamares rebozados en pan de pistola recién horneado',
    photoTag: 'MADRID · PLAZA MAYOR Y CASTICISMO CALLEJERO',
    description: 'El bocado más popular e icónico de la capital: anillas de calamar tiernas rebozadas en harina y fritas al momento, servidas generosamente dentro de una barra de pan blanco crujiente recién horneada.',
    ingredients: [
      '500 g de calamares frescos limpios cortados en anillas gruesas',
      '150 g de harina de trigo especial para fritura',
      '1 cucharadita de levadura química o agua con gas',
      'Abundante AOVE para freír a 180°C',
      '4 panes individuales tipo "pistola" o baguette crujiente',
      'Sal marina fina',
      'Mayonesa suave o alioli (opcional según el gusto)'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Preparación y Secado de las Anillas',
        description: 'Cortar los cuerpos de calamar limpio en anillas de 1,5 cm de grosor. Secar a conciencia con papel absorbente; el calamar húmedo escupirá aceite y ablandará el rebozado.',
        artisanTip: 'Comprar calamar fresco nacional: el calamar congelado industrial suelta agua durante la fritura y queda gomoso.'
      },
      {
        stepNumber: 2,
        title: 'Rebozado Ligero',
        description: 'Pasar las anillas por una mezcla de harina con un pellizco de sal y levadura (o masa romana ligera). Sacudir en colador para eliminar el exceso de harina.',
        artisanTip: 'La capa de harina debe ser fina para que el protagonismo lo tenga la textura tierna del cefalópodo.'
      },
      {
        stepNumber: 3,
        title: 'Fritura Viva en Aceite Limpio',
        description: 'Sumergir las anillas en AOVE muy caliente a 180°C durante solo 90 segundos. Extraer con espumadera en cuanto tomen un tono dorado claro.',
        artisanTip: 'El calamar nunca debe sobrecocerse; minuto y medio es suficiente para que quede tierno como mantequilla.'
      },
      {
        stepNumber: 4,
        title: 'Montaje Inmediato en Pan Crujiente',
        description: 'Abrir el pan de pistola recién tostado longitudinalmente y rellenar a presión con las anillas recién salidas de la sartén, salando en el último segundo.',
        artisanTip: 'Comer inmediatamente de pie en la barra antes de que el vapor del calamar humedezca la corteza del pan.'
      }
    ],
    processPhotos: [
      {
        title: 'Anillas de Calamar Fresco',
        subtitle: 'Corte regular y secado de la carne',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Anillas de calamar de lonja listas para el enharinado fino.'
      },
      {
        title: 'Fritura Rápida en Perol',
        subtitle: 'Dorado en aceite virgen extra limpio',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Burbujeo alegre del calamar en aceite hirviendo en la Plaza Mayor.'
      },
      {
        title: 'El Bocadillo Rebalsado de Calamares',
        subtitle: 'El icono de la barra de bar madrileña',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido con una caña bien tirada con dos dedos de espuma.'
      }
    ],
    culinaryTerms: [
      { term: 'Pan de Pistola', definition: 'Barra de pan alargada clásica de las panaderías madrileñas, de corteza fina y crujiente y miga blanca esponjosa idónea para bocadillos.' },
      { term: 'Caña Castiza', definition: 'Vaso de cerveza rubia de 200 ml tirada a presión con una capa densa y cremosa de espuma blanca de dos dedos de grosor.' },
      { term: 'Romana Ligera', definition: 'Técnica de rebozado con harina y un toque gaseoso que crea una capa envolvente dorada y crujiente.' }
    ],
    pairing: {
      beverage: 'Caña de Cerveza Rubia Tirada con Maña o Vermú de Grifo',
      regionDO: 'Cerveza artesana o Vermú de Madrid',
      note: 'El amargor fresco del lúpulo y el carbónico de la cerveza limpian la grasa de la fritura de manera instantánea.'
    },
    culturalRitual: {
      title: 'El Domingo en la Plaza Mayor',
      description: 'El ritual dominical madrileño consiste en acudir al Rastro por la mañana y rematar a mediodía pidiendo un bocadillo de calamares de pie en una taberna de la Plaza Mayor.'
    },
    keyPhrase: {
      spanish: '«Un bocadillo de calamares bien crujiente y una caña bien tirada, por favor.»',
      english: 'A crispy calamari sandwich and a well-poured draft beer, please.',
      phonetic: 'oon boh-kah-DEE-lyoh deh kah-lah-MAH-rehs byehn kroo-HYEHN-teh'
    }
  },
  {
    id: 'callos-madrilena',
    name: 'Callos a la Madrileña Tradicionales',
    spanishTitle: 'La melosidad del morro, la pata y el pimentón ahumado de la Vera',
    category: 'Cuchara y Puchero',
    originType: 'city',
    originLocation: 'Madrid',
    originBadge: 'RAÍZ MUNICIPAL · MADRID',
    historicalRoot: 'Documentados en tabernas madrileñas desde el siglo XVI y consagrados en mesones del siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVI · Tabernas populares de Madrid',
      narrative: 'Los callos a la madrileña son uno de los guisos más viscerales, reconfortantes y adictivos de la culinaria española. Conocidos desde el Siglo de Oro en mesones y bodegones del barrio de las Letras, su fórmula magistral radica en la trinidad de la casquería de vacuno: callos (estómago), pata de ternera y morro. La cocción conjunta de estos tres elementos aporta una gelatina natural prodigiosa que espesa la salsa sin necesidad de añadir harina. El sofrito de cebolla, ajo, pimentón dulce y picante de la Vera, junto a la morcilla asturiana y el chorizo curado, conforma una salsa de color rojo intenso que deja los labios sellados con su untuosidad.',
      culturalEvolution: 'Pasó de comida de despojo para clases trabajadoras a plato reverenciado en las mejores mesas burguesas de Madrid como Casa Salvador o Zalacaín.',
      anecdoteOrLegend: 'En el Madrid galdosiano, las tabernas anunciaban con pizarra en la puerta: "Hoy hay callos", y era norma que los parroquianos consumieran dos o tres canastas de pan para rebañar hasta la última gota de la cazuela de barro.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Callos_a_la_Madrile%C3%B1a_%28Lhardy%29-2009.jpg',
    imageAlt: 'Callos a la madrileña en cazuela de barro con chorizo y morcilla humeantes',
    imageCaption: 'Callos a la madrileña con morro, pata, chorizo ahumado y pimentón de la Vera',
    photoTag: 'MADRID · CASQUERÍA CASTIZA Y GELATINA NATURAL',
    description: 'Guiso señero madrileño de callos, morro y pata de ternera cocinados lentamente con chorizo, morcilla, pimentón de la Vera y guindilla hasta conseguir una salsa densa y melosa.',
    ingredients: [
      '1 kg de callos de ternera limpios troceados',
      '1 pata de ternera desosada y partida',
      '300 g de morro de ternera',
      '1 chorizo y 1 morcilla ahumados',
      '100 g de jamón serrano en dados',
      '1 cebolla picada y 4 dientes de ajo',
      '2 cucharaditas de pimentón de la Vera (mitad dulce, mitad picante)',
      '1 guindilla de cayena y 1 hoja de laurel'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Escaldado y Limpieza Exhaustiva',
        description: 'Lavar minuciosamente los callos, pata y morro con agua y vinagre. Dar un hervor de 5 minutos en agua hirviendo y desechar esa primera agua.',
        artisanTip: 'El escaldado inicial elimina cualquier aroma excesivamente fuerte y deja la carne blanquísima y lista para el estofado.'
      },
      {
        stepNumber: 2,
        title: 'Cocción Lenta de Tres Horas',
        description: 'Poner los callos, pata y morro en olla grande con agua limpia, laurel, cebolla entera, ajos y el jamón. Cocer a fuego lento durante 3 horas hasta que la carne esté tierna.',
        artisanTip: 'La pata de ternera es el elemento indispensable que libera el colágeno necesario para espesar la salsa de forma natural.'
      },
      {
        stepNumber: 3,
        title: 'Sofrito con Pimentón de la Vera',
        description: 'En una cazuela de barro, hacer un sofrito con cebolla picada y ajo en AOVE. Retirar del fuego para añadir el pimentón y la guindilla, evitando que se queme. Incorporar los chorizos y morcillas en rodajas.',
        artisanTip: 'Nunca añadir el pimentón con el aceite hirviendo; si se tuesta en exceso amargará todo el guiso.'
      },
      {
        stepNumber: 4,
        title: 'Fusión de Salsa y Reposo Obligado',
        description: 'Unir las carnes cocidas y su caldo colaginoso al sofrito de la cazuela de barro. Cocer 30 minutos más a fuego manso. Dejar reposar obligatoriamente 24 horas antes de degustar.',
        artisanTip: 'Los callos son un plato de reposo: al día siguiente la gelatina habrá amalgamado todos los sabores en una salsa compacta.'
      }
    ],
    processPhotos: [
      {
        title: 'Limpieza y Escaldado de Casquería',
        subtitle: 'Callos, pata y morro preparados en olla',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'La casquería blanca en agua de manantial con laurel y pimienta.'
      },
      {
        title: 'El Sofrito de Pimentón y Chacinas',
        subtitle: 'Chorizo y morcilla dorándose en cazuela',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'El pimentón de la Vera tiñe de rojo brillante el sofrito de cebolla.'
      },
      {
        title: 'Cazuela de Callos Humeantes',
        subtitle: 'Salsa gelatinosa que pega los labios',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servidos en barro tradicional con rebanadas de pan de hogaza.'
      }
    ],
    culinaryTerms: [
      { term: 'Pata y Morro', definition: 'Partes de la cabeza y extremidades de la ternera ricas en cartílago y colágeno, esenciales para dar melosidad a los callos madrileños.' },
      { term: 'Pimentón de la Vera', definition: 'Polvo de pimientos rojos secados lentamente sobre humo de leña de roble en la comarca extremeña de la Vera.' },
      { term: 'Cazuela de Barro Refractario', definition: 'Recipiente cerámico tradicional que distribuye el calor suavemente y mantiene el guiso hirviendo en la mesa.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Joven con Carácter o Cerveza Doble',
      regionDO: 'D.O. Vinos de Madrid (Arganda / Navalcarnero)',
      note: 'La acidez fresca y la fruta de la uva Tempranillo equilibran la contundencia picante de la salsa.'
    },
    culturalRitual: {
      title: 'El Rebañado con Pan de Masa Madre',
      description: 'El mayor crimen gastronómico en una taberna madrileña es pedir callos y no comer pan: mojar la salsa roja y espesa con la corteza es el verdadero placer del aficionado.'
    },
    keyPhrase: {
      spanish: '«Una cazuela de callos a la madrileña con su punto de picante y media barra de pan.»',
      english: 'A clay pot of Madrid-style tripe with a touch of spice and half a baguette.',
      phonetic: 'OO-nah kah-THWEH-lah deh KAH-lyohs ah lah mah-dree-LEH-nyah'
    }
  },
  {
    id: 'churros-chocolate',
    name: 'Churros y Porras Tradicionales con Chocolate',
    spanishTitle: 'La masa frita en rueda crujiente y el chocolate negro espeso a la taza',
    category: 'Dulces y Postres',
    originType: 'city',
    originLocation: 'Madrid',
    originBadge: 'RAÍZ MUNICIPAL · MADRID',
    historicalRoot: 'Tradición de las churrerías madrileñas desde el siglo XIX con la mítica Chocolatería San Ginés de 1894.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX (1894) · Chocolatería San Ginés de Madrid',
      narrative: 'Los churros llegaron a Madrid en el siglo XIX a través de los pastores nómadas trashumantes, quienes freían una masa básica de harina, agua y sal en sartenes sobre fogatas de campo como sustituto del pan fresco. En la capital, las churrerías de barrio refinaron la técnica utilizando boquillas estriadas de estrella que aseguraban que la masa no explotara al entrar en contacto con el aceite hirviendo. A su lado nacieron "las porras", una variante madrileña más gruesa y aireada que añade bicarbonato y reposo a la masa. El maridaje definitivo se selló al combinarlos con una taza de chocolate caliente espeso y amargo, convirtiendo lugares como la Chocolatería San Ginés (fundada en 1894 en el pasadizo del mismo nombre) en templos de peregrinación nocturna y matutina.',
      culturalEvolution: 'De desayuno obrero de madrugada a costumbre universal compartida tras las campanadas de Año Nuevo y en las meriendas invernales.',
      anecdoteOrLegend: 'El pasadizo de San Ginés permanece abierto las 24 horas del día; por sus mesas de mármol blanco han desfilado desde literarios de la bohemia como Valle-Inclán hasta generaciones enteras de madrileños que terminan allí sus noches de fiesta.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Chocolate-con-churros.jpg',
    imageAlt: 'Churros y porras doradas crujientes junto a taza de chocolate espeso humeante',
    imageCaption: 'Churros artesanos y porras madrileñas con chocolate espeso a la taza',
    photoTag: 'MADRID · CHOCOLATERÍA SAN GINÉS Y RUEDA ARTESANA',
    description: 'El desayuno y merienda más célebre de Madrid: bastones estriados crujientes de harina y agua fritos en rueda de aceite de oliva, acompañados de chocolate negro espeso a la taza para mojar.',
    ingredients: [
      '250 g de harina de trigo de fuerza',
      '250 ml de agua mineral hirviendo',
      '1 cucharadita de sal fina',
      'Aceite de oliva virgen extra suave para freír',
      'Para el chocolate: 200 g de chocolate negro en tableta 70%, 500 ml de leche entera y 10 g de almidón de maíz'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Escaldado de la Harina',
        description: 'Hervir el agua con la sal. En cuanto rompa a hervir, verterla de golpe sobre la harina en un bol amplio. Mezclar enérgicamente con cuchara de madera hasta que la masa se despegue de las paredes.',
        artisanTip: 'La masa del churro no se amasa en exceso; solo se homogeneiza para evitar que desarrolle demasiado gluten y quede correosa.'
      },
      {
        stepNumber: 2,
        title: 'Extrusión con Churrera Estriada',
        description: 'Introducir la masa tibia en una churrera o manga pastelera con boquilla de estrella metálica. Presionar para expulsar el aire.',
        artisanTip: 'La forma estrellada es imprescindible: permite que el vapor interior escape sin hacer explotar la masa en el aceite caliente.'
      },
      {
        stepNumber: 3,
        title: 'Fritura en Espiral a 195°C',
        description: 'Formar una gran espiral continua sobre perol amplio con AOVE muy caliente a 195°C. Dar la vuelta a la rueda con dos palillos de madera hasta que quede dorada y crujiente.',
        artisanTip: 'Cortar la rueda en bastones de 15 cm inmediatamente con tijeras al salir del perol.'
      },
      {
        stepNumber: 4,
        title: 'Preparación del Chocolate a la Taza',
        description: 'Disolver el chocolate en la leche caliente a fuego suave con la maicena, batiendo continuamente hasta que espese y adquiera un brillo oscuro sedoso.',
        artisanTip: 'El chocolate debe ser lo bastante denso como para que el churro quede bañado con una capa gruesa sin gotear.'
      }
    ],
    processPhotos: [
      {
        title: 'Escaldado de la Masa de Harina',
        subtitle: 'Mezcla enérgica con agua hirviendo',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Masa densa y elástica lista para pasar por la churrera.'
      },
      {
        title: 'La Rueda en el Perol de Aceite',
        subtitle: 'Espiral dorada girando en el fuego',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Fritura a alta temperatura para lograr exterior crujiente e interior tierno.'
      },
      {
        title: 'El Baño en Chocolate Espeso',
        subtitle: 'El rito de mojar el churro caliente',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servicio en la Chocolatería San Ginés de Madrid con taza de loza blanca.'
      }
    ],
    culinaryTerms: [
      { term: 'Porra Madrileña', definition: 'Variante más gruesa del churro tradicional que lleva bicarbonato sódico y reposo, resultando en una masa alveolada y hueca por dentro.' },
      { term: 'Rueda de Churros', definition: 'Gran espiral continua que se forma directamente en el perol de aceite y se corta posteriormente con tijeras en porciones individuales.' },
      { term: 'Chocolate a la Taza', definition: 'Bebida densa y caliente elaborada con cacao puro, leche y almidón de maíz, concebida expresamente para mojar bollería.' }
    ],
    pairing: {
      beverage: 'Chocolate Negro a la Taza al 70% o Café con Leche en Vaso',
      regionDO: 'Tradición chocolatera madrileña',
      note: 'El amargor del cacao puro contrasta de manera gloriosa con el toque de sal y el crujido del churro frito.'
    },
    culturalRitual: {
      title: 'El Amanecer en San Ginés',
      description: 'Tras una noche de teatro o celebración en el centro de Madrid, la parada obligatoria es el sótano abovedado de San Ginés para compartir una docena de churros calientes con chocolate.'
    },
    keyPhrase: {
      spanish: '«Una ración de churros con una taza de chocolate bien espeso, por favor.»',
      english: 'A portion of churros with a cup of thick hot chocolate, please.',
      phonetic: 'OO-nah rah-THYOHN deh CHOO-rrohs kohn OO-nah TAH-thah deh choh-koh-LAH-teh'
    }
  },
  {
    id: 'pollo-al-ajillo',
    name: 'Pollo al Ajillo Dorado Castellano',
    spanishTitle: 'La fritura en cazuela de barro, los ajos enteros con camisa y la reducción de vino blanco seco',
    category: 'Asados y Fuegos',
    originType: 'region',
    originLocation: 'Madrid y Castilla (Castilla y León y Castilla-La Mancha)',
    originBadge: 'ORIGEN REGIONAL · CASTILLA Y CENTRO',
    historicalRoot: 'Plato popular de casa de comidas y fonda castellana documentado desde el siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Fondas y casas de comidas de Madrid y de la estepa castellana',
      narrative: 'El pollo al ajillo es el emperador de las casas de comidas familiares de Madrid y los pueblos castellanos. Surgió como una de las formas más brillantes de cocinar las aves de corral camperas, cuya carne firme y fibrosa requería un doradísimo crujiente en abundante aceite de oliva virgen extra y una cocción final con ajo y vino blanco para ablandar sus fibras. El fundamento de esta receta reside en no pelar la mayor parte de los dientes de ajo: se "chafan" o machacan de un golpe con el lomo del cuchillo conservando su "camisa" o piel exterior, lo que permite que se confiten en el aceite caliente a fuego suave sin quemarse, liberando un perfume dulce y untuoso. El desglasado final de la cazuela con vino blanco seco del terreno o jerez despega los jugos caramelizados del fondo creando una salsilla dorada irresistible que pide pan a gritos.',
      culturalEvolution: 'Pilar de las comidas de fin de semana en ventas camineras y tabernas históricas de toda España.',
      anecdoteOrLegend: 'En las fondas de la carretera de Valencia y Andalucía, los camioneros y viajantes juzgaban la calidad del mesón por el sonido del pollo al ajillo: debía llegar a la mesa aún borboteando dentro de la cazuela de barro refractario, con el ajo crujiente por fuera y cremoso como mantequilla por dentro.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Pollo_al_ajillo_%28Panaderas%29.jpg',
    imageAlt: 'Pollo al ajillo troceado y dorado en cazuela de barro con dientes de ajo enteros y perejil',
    imageCaption: 'Pollo al ajillo tradicional castellano dorado en AOVE con dientes de ajo morado y vino blanco seco',
    photoTag: 'MADRID Y CASTILLA · CASAS DE COMIDAS Y CAZUELA DE BARRO',
    description: 'Pollo campero troceado en porciones pequeñas, frito a fuego vivo en AOVE con cabezas enteras de ajo morado con su camisa, romero y una reducción de vino blanco seco desglasando la cazuela de barro.',
    ingredients: [
      '1 pollo campero entero de 1,5 kg troceado en trozos pequeños de bocado',
      '2 cabezas de ajo morado de Las Pedroñeras (dientes separados y machacados con su piel)',
      '200 ml de vino blanco seco (o vino de Madrid / Manzanilla)',
      '1 ramita de romero o tomillo fresco silvestre',
      '1 hoja de laurel seco',
      '200 ml de AOVE virgen extra',
      'Sal marina gruesa y pimienta negra recién molida'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Troceado Menudo y Salpimentado',
        description: 'Trocear el pollo en trozos pequeños regulares (incluyendo huesos que aportarán gelatina). Secar concienzudamente con papel de cocina y sazonar generosamente con sal y pimienta negra.',
        artisanTip: 'El troceado menudo asegura que cada pedazo quede con la piel ultracrujiente y la carne cocinada de manera uniforme.'
      },
      {
        stepNumber: 2,
        title: 'Confitado Inicial de los Ajos con Camisa',
        description: 'En una cazuela de barro amplia con abundante AOVE, poner los dientes de ajo machacados con su piel a fuego bajo durante 10 minutos hasta que estén tiernos y dorados. Retirar y reservar.',
        artisanTip: 'Cocinar los ajos con su camisa evita que la carne del ajo se queme y amargue, transformándola en una pasta dulce.'
      },
      {
        stepNumber: 3,
        title: 'Fritura Dorada y Crujiente del Pollo',
        description: 'Subir el fuego a medio-alto en el aceite perfumado de ajos. Incorporar el pollo con el laurel y el romero sin amontonar. Dorar durante 15 a 20 minutos dándole la vuelta hasta que la piel quede tostada y crujiente.',
        artisanTip: 'No tapar la cazuela durante el dorado para que el vapor no ablande la piel crujiente.'
      },
      {
        stepNumber: 4,
        title: 'Desglasado con Vino Blanco y Reducción',
        description: 'Reincorporar los ajos reservados a la cazuela. Verter el vino blanco seco raspando el fondo con cuchara de madera para despegar los jugos caramelizados. Hervir a fuego vivo 5 minutos hasta que el alcohol evapore y la salsa reduzca.',
        artisanTip: 'Servir en la misma cazuela de barro borboteando, acompañado de patatas fritas en dados o pan de hogaza candeal.'
      }
    ],
    processPhotos: [
      {
        title: 'Dientes de Ajo Morado con su Camisa',
        subtitle: 'El confitado lento en aceite virgen extra',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Ajos morados machacados dorándose lentamente en la cazuela.'
      },
      {
        title: 'Dorado Crujiente del Pollo Campero',
        subtitle: 'Fuego vivo para tostar la piel en barro',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Trozos de pollo adquiriendo su tono ámbar crujiente con romero.'
      },
      {
        title: 'Desglasado con Vino Blanco Seco',
        subtitle: 'La salsilla dorada que pide pan',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'El pollo al ajillo terminado humeando en cazuela de barro tradicional.'
      }
    ],
    culinaryTerms: [
      { term: 'Ajos con Camisa', definition: 'Dientes de ajo que se cocinan machacados pero sin retirar la piel exterior protectora para que se confiten sin quemarse.' },
      { term: 'Desglasar', definition: 'Añadir un líquido (vino blanco, vinagre o caldo) a una cazuela caliente para disolver los jugos caramelizados adheridos al fondo.' },
      { term: 'Pollo Campero', definition: 'Pollo criado al aire libre con alimentación natural de cereales, de carne firme, grasa amarilla y sabor intenso.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Malvar de Madrid o Tinto Joven de Navalcarnero',
      regionDO: 'D.O. Vinos de Madrid',
      note: 'Vinos frescos y ligeros con buena acidez que equilibran la potencia untuosa del ajo confitado y la fritura en AOVE.'
    },
    culturalRitual: {
      title: 'El Untado de Pan en la Cazuela Comunal',
      description: 'El pollo al ajillo se comparte en el centro de la mesa con tenedores de madera, aplastando los ajos confitados sobre rebanadas de pan candeal para untar la salsa dorada.'
    },
    keyPhrase: {
      spanish: '«Una cazuela de pollo al ajillo bien doradito con bastante pan para mojar la salsa.»',
      english: 'A pot of golden garlic chicken with plenty of bread to dip in the sauce.',
      phonetic: 'OO-nah kah-THWEH-lah deh POH-lyoh ahl ah-HEE-lyoh byehn doh-rah-DEE-toh'
    }
  }
];

