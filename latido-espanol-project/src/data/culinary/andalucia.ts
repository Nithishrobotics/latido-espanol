import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const ANDALUCIA_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'gazpacho-andaluz',
    name: 'Gazpacho Andaluz Tradicional',
    spanishTitle: 'La emulsión campesina en dornillo de encina y AOVE virgen',
    category: 'Sopas Frías',
    originType: 'region',
    originLocation: 'Andalucía (Sevilla, Córdoba, Jaén y Cádiz)',
    originBadge: 'ORIGEN REGIONAL · ANDALUCÍA',
    historicalRoot: 'Sopa fría nacida de los campesinos andalusíes y perfeccionada en el siglo XVI con la llegada del tomate.',
    historyAndOrigins: {
      eraOrCentury: 'Época Romana y Andalusí · Consagrado en el siglo XVI',
      narrative: 'El gazpacho hunde sus raíces más remotas en el "posca" de los legionarios romanos y en las sopas frías campesinas de al-Ándalus, donde los jornaleros machacaban en un mortero de madera (el tradicional "dornillo" de encina) restos de pan asentado, ajo, agua fresca del botijo, sal y generoso aceite de oliva para sobrellevar las tórridas jornadas de siega bajo el sol del sur. Tras el descubrimiento de América y la aclimatación del tomate y el pimiento en Sevilla durante el siglo XVI, el gazpacho adquirió su fulgor rojo carmesí y su inconfundible acidez refrescante, convirtiéndose en el símbolo indiscutible de la cocina mediterránea cruda.',
      culturalEvolution: 'Evolucionó de comida de subsistencia jornalera a plato venerado en las mejores mesas del mundo y quintaesencia de la Dieta Mediterránea Patrimonio de la Humanidad.',
      anecdoteOrLegend: 'En las campiñas sevillanas, el mayoral repartía el gazpacho recién majado a mediodía; el ritual dictaba beberlo en cuencos de barro cocido o calabazas vacías para preservar la frescura que otorgaba el agua evaporada de los botijos.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Gazpacho_Cazuela_Barro.jpg',
    imageAlt: 'Gazpacho andaluz tradicional servido en cuenco de barro con hilo de aceite de oliva virgen extra',
    imageCaption: 'Gazpacho andaluz emulsionado con tomate pera maduro, pepino y AOVE de Jaén',
    photoTag: 'ANDALUCÍA · GASTRONOMÍA CRUDA MEDITERRÁNEA',
    description: 'Sopa fría emblemática elaborada exclusivamente en crudo emulsionando tomates de rama muy maduros, pimiento verde italiano, pepino, ajo morado, vinagre de Jerez de solera y aceite de oliva virgen extra.',
    ingredients: [
      '1 kg de tomates pera bien maduros',
      '1 pimiento verde italiano',
      '1 pepino español pelado',
      '1 diente de ajo morado sin germen',
      '50 g de pan candeal asentado del día anterior',
      '100 ml de AOVE variedad Picual o Hojiblanca',
      '30 ml de Vinagre de Jerez D.O.P.',
      'Sal marina gruesa al gusto'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Selección y Majado Inicial en Dornillo',
        description: 'Lavar minuciosamente los tomates pera bien rojos y carnosos. En el dornillo o vaso triturador, majar primero el ajo con un pellizco de sal marina para formar una pasta homogénea y evitar notas picantes agresivas.',
        artisanTip: 'Retirar siempre el germen interior del diente de ajo para que el gazpacho resulte aromático y no repita durante la digestión.'
      },
      {
        stepNumber: 2,
        title: 'Incorporación de Verduras y Pan Asentado',
        description: 'Añadir los tomates troceados con piel, el pimiento verde y el pepino. Incorporar el pan candeal previamente humedecido en unas gotas de agua y vinagre de Jerez.',
        artisanTip: 'El pan candeal de miga densa actúa como emulsionante natural de las partículas de agua y aceite.'
      },
      {
        stepNumber: 3,
        title: 'Emulsión Lenta con AOVE',
        description: 'Triturar a fondo hasta obtener un puré denso. Mientras se bate a velocidad media, verter el AOVE en hilo fino continuo para crear una emulsión sedosa y brillante.',
        artisanTip: 'Verter el aceite al final permite que la mezcla emulsione como una vinagreta estable sin oxidar el color rojo vivo del tomate.'
      },
      {
        stepNumber: 4,
        title: 'Colado Fino y Reposo en Frío',
        description: 'Pasar el gazpacho por un colador chino para retirar pieles y pepitas, logrando una textura aterciopelada. Enfriar un mínimo de 3 horas en la parte más fría.',
        artisanTip: 'Nunca añadir hielo directo al cuenco, pues aguará la textura y quebrará la emulsión de aceite virgen.'
      }
    ],
    processPhotos: [
      {
        title: 'Mortero y Selección de Tomates Maduros',
        subtitle: 'Ingredientes de la huerta andaluza en sazón',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Tomates pera maduros sobre madera rústica, ajo morado de Montalbán y pimientos verdes.'
      },
      {
        title: 'Emulsión en Hilo Fino de Aceite Virgen',
        subtitle: 'La magia de la unión de pulpa y grasa vegetal',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'El chorro pausado de AOVE virgen extra transforma el puré en una crema sedosa y brillante.'
      },
      {
        title: 'Servicio Frío con Guarnición de Tropezones',
        subtitle: 'Presentación tradicional con cuenco y cuchara',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido con pequeños daditos de pepino, pimiento y costrones de pan frito crujiente.'
      }
    ],
    culinaryTerms: [
      { term: 'Dornillo', definition: 'Mortero o cuenco hondo tradicional de madera de encina u olivo utilizado en Andalucía para majar gazpachos y aceitunas.' },
      { term: 'Tropezones', definition: 'Dados diminutos de hortalizas crudas y pan frito que se sirven en platillos aparte para acompañar el gazpacho.' },
      { term: 'Emulsión en Crudo', definition: 'Unión mecánica estable entre el agua natural de las verduras y los ácidos grasos del aceite de oliva virgen extra.' }
    ],
    pairing: {
      beverage: 'Vino Fino o Manzanilla de Sanlúcar D.O.',
      regionDO: 'D.O. Manzanilla de Sanlúcar / Jerez-Xérès-Sherry',
      note: 'La salinidad marina y la sequedad biológica bajo velo de flor de la Manzanilla equilibran la acidez del tomate y el vinagre.'
    },
    culturalRitual: {
      title: 'El Vaso de la Siesta y la Guarnición',
      description: 'En los hogares del sur, el gazpacho reposa en una jarra de barro y se bebe en vaso como refresco reconstituyente o se sirve en plato hondo con cuchara y tropezones en el almuerzo.'
    },
    keyPhrase: {
      spanish: '«Un gazpacho bien frío con su guarnición de tropezones, por favor.»',
      english: 'A cold gazpacho with diced vegetable garnish, please.',
      phonetic: 'oon gahth-PAH-choh byehn FREE-oh kohn soo gwahr-nee-THYOHN'
    }
  },
  {
    id: 'salmorejo-cordobes',
    name: 'Salmorejo Cordobés Canónico',
    spanishTitle: 'La crema densa de tomate, miga de telera y virutas de jamón',
    category: 'Sopas Frías',
    originType: 'city',
    originLocation: 'Córdoba (Andalucía)',
    originBadge: 'RAÍZ MUNICIPAL · CÓRDOBA',
    historicalRoot: 'Evolución del mazamorra blanca romana y andalusí que incorporó el tomate en los fogones cordobeses del siglo XVIII.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVIII · Consagrado en los patios de Córdoba',
      narrative: 'Antes de la llegada del tomate, en Córdoba se preparaba la "mazamorra", una crema blanca espesa de pan remojado, ajo, almendras, aceite y vinagre que alimentaba a campesinos desde la Bética romana. Con el asentamiento del cultivo del tomate en las huertas del Guadalquivir durante el siglo XVIII, los cocineros cordobeses sustituyeron la almendra por pulpa roja de tomate bien maduro y utilizaron la famosa telera cordobesa —un pan tradicional de harina de trigo candeal con corteza fina y miga compacta e hidratada—. El resultado fue una emulsión tan espesa que no se bebe en vaso, sino que se degusta ceremoniosamente con cuchara, coronada con taquitos de jamón ibérico y huevo duro picado.',
      culturalEvolution: 'Protegido por la Cofradía Gastronómica del Salmorejo Cordobés, que ha fijado sus proporciones canónicas exactas para salvaguardar su pureza.',
      anecdoteOrLegend: 'En las tabernas de la judería cordobesa se decía que para saber si un salmorejo era auténtico bastaba con clavar una cuchara en el centro: debía mantenerse erguida durante unos segundos antes de ladearse lentamente.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Salmorejo_cordob%C3%A9s.JPG',
    imageAlt: 'Salmorejo cordobés denso coronado con jamón ibérico y huevo picado',
    imageCaption: 'Salmorejo cordobés canónico con miga de pan de telera y virutas de jamón ibérico',
    photoTag: 'CÓRDOBA · EMULSIÓN SECULAR DE LA JUDERÍA',
    description: 'Crema fría de extraordinaria densidad y textura aterciopelada, formulada estrictamente con tomates maduros, pan de telera cordobesa, aceite de oliva virgen extra y ajo, sin pepino ni agua.',
    ingredients: [
      '1 kg de tomates de rama maduros',
      '200 g de pan de telera cordobesa (o pan candeal blanco denso)',
      '100 ml de AOVE variedad Hojiblanca de Lucena',
      '1 diente de ajo pequeño (sin germen)',
      '10 g de sal marina',
      'Para coronar: 50 g de jamón ibérico cortado a cuchillo y 1 huevo de corral cocido'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Triturado de Tomate y Remojado de Miga',
        description: 'Lavar y triturar los tomates enteros maduros. Pasar la pulpa por un colador para separar hollejos y semillas. En ese jugo de tomate, sumergir los trozos de miga de telera cordobesa durante 10 minutos para que absorban la humedad natural.',
        artisanTip: 'No añadir agua jamás. La humedad debe provenir exclusivamente de los jugos del tomate maduro.'
      },
      {
        stepNumber: 2,
        title: 'Majado de Ajo y Sal',
        description: 'En el mortero, majar el ajo con la sal marina hasta obtener una pasta lisa.',
        artisanTip: 'La proporción canónica dicta un solo diente de ajo por cada kilo de tomate para evitar que el picor tape la dulzura de la fruta.'
      },
      {
        stepNumber: 3,
        title: 'Emulsión Espesa a Motor Lento',
        description: 'Unir la pasta de ajo con el pan remojado y batir intensamente. Ir incorporando el AOVE en hilo muy fino y continuo para provocar una emulsión firme, cremosa y densa.',
        artisanTip: 'El salmorejo canónico debe quedar con cuerpo untuoso, capaz de sostener la guarnición sin que se hunda.'
      },
      {
        stepNumber: 4,
        title: 'Reposo en Frío y Coronación Ibérica',
        description: 'Reposar en frío dos horas. En el momento exacto de servir, disponer por encima el huevo cocido finamente picado y los taquitos de jamón ibérico con un hilo final de AOVE.',
        artisanTip: 'El jamón debe agregarse siempre a temperatura ambiente al emplatar para que sus grasas se fundan suavemente con el frío de la crema.'
      }
    ],
    processPhotos: [
      {
        title: 'Miga de Telera Remojada en Tomate',
        subtitle: 'El secreto de la consistencia cordobesa',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'La miga de pan candeal absorbe el jugo rojizo del tomate antes de ser emulsionada.'
      },
      {
        title: 'Emulsión Cremosa de Textura Untuosa',
        subtitle: 'Color anaranjado natural por el aceite Hojiblanca',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Al emulsionar el tomate con el aceite virgen extra, el color muta hacia un tono salmón luminoso.'
      },
      {
        title: 'Guarnición de Jamón Ibérico y Huevo',
        subtitle: 'Contraste salino y crujiente sobre la crema',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'El plato terminado en cuenco cerámico de reflejo andalusí con sus virutas ibéricas.'
      }
    ],
    culinaryTerms: [
      { term: 'Pan de Telera', definition: 'Pan tradicional cordobés de masa bregada y harina de trigo candeal, con greña diagonal y miga blanca tupida idónea para espesar.' },
      { term: 'Montillana', definition: 'Estilo culinario característico del valle cordobés que realza salsas y reducciones con vinos generosos de Montilla-Moriles.' },
      { term: 'Majado Fino', definition: 'Acción de triturar en mortero hasta que los componentes forman una pomada sin grumos perceptibles.' }
    ],
    pairing: {
      beverage: 'Vino Fino de Montilla-Moriles',
      regionDO: 'D.O. Montilla-Moriles',
      note: 'Elaborado con uva Pedro Ximénez sin fortificar, su graduación natural y sequedad cortan la untuosidad del pan y el aceite.'
    },
    culturalRitual: {
      title: 'Tapeo de Patio Cordobés',
      description: 'En mayo, durante la Fiesta de los Patios de Córdoba, el salmorejo se degusta a media tarde en cazuelitas individuales al cobijo de buganvillas y geranios.'
    },
    keyPhrase: {
      spanish: '«Un salmorejo cordobés con bastante jamón ibérico y huevo, por favor.»',
      english: 'A Cordoban salmorejo with plenty of Iberian ham and egg, please.',
      phonetic: 'oon sahl-moh-REH-hoh kohr-doh-BEHS kohn bahs-TAHN-teh hah-MOHN'
    }
  },
  {
    id: 'rabo-de-toro',
    name: 'Rabo de Toro a la Cordobesa',
    spanishTitle: 'El estofado conventual al vino tinto y paciencia de chup-chup',
    category: 'Cuchara y Puchero',
    originType: 'city',
    originLocation: 'Córdoba (Andalucía)',
    originBadge: 'RAÍZ MUNICIPAL · CÓRDOBA',
    historicalRoot: 'Receta vinculada a las antiguas corridas de toros de la plaza de la Corredera desde el siglo XVI.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XVI · Plaza de la Corredera de Córdoba',
      narrative: 'El origen del rabo de toro estofado está íntimamente ligado a la tradición taurina de Córdoba durante el Renacimiento. Tras las faenas populares celebradas en la monumental Plaza de la Corredera, las reses lidiadas se despiezaban in situ y las partes menos nobles —como los rabos y las casquerías— eran adquiridas por las clases populares y tabernas aledañas. Las cocineras cordobesas descubrieron que este corte, repleto de cartílagos y colágeno, exigía una cocción lentísima de más de cuatro horas en olla de barro con verduras del huerto y vino generoso de la tierra. Con el tiempo, el colágeno fundido transformó aquel bocado humilde en una salsa oscura, brillante y melosa de categoría principesca.',
      culturalEvolution: 'De plato popular de despiece a cumbre de la alta cocina tradicional española presente en las cartas de los restaurantes más laureados.',
      anecdoteOrLegend: 'La leyenda cordobesa cuenta que los mejores rabos de toro eran aquellos preparados en la víspera de la fiesta patronal, dejados reposar toda la noche en la cazuela apagada para que la carne "tomara cuerpo y alma" con la salsa cuajada.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Rabo_de_toro.jpg',
    imageAlt: 'Rabo de toro estofado al vino tinto desprendiéndose del hueso',
    imageCaption: 'Rabo de toro a la cordobesa con salsa untuosa y patatas torneadas',
    photoTag: 'CÓRDOBA · GUISOS DE FUEGO LENTO',
    description: 'Estofado monumental de rabo de toro o ternera cocinado a fuego manso con cebolla, puerro, zanahoria, vino tinto de la tierra y caldo, hasta que la carne se desprende sola del hueso con el tenedor.',
    ingredients: [
      '1,5 kg de rabo de toro troceado en rodajas',
      '2 cebollas dulces grandes',
      '2 puerros y 3 zanahorias',
      '4 dientes de ajo',
      '1 botella (750 ml) de vino tinto con cuerpo (o Montilla-Moriles oloroso)',
      '1 litro de caldo oscuro de carne',
      '1 hoja de laurel, clavo de olor y granos de pimienta negra',
      'AOVE virgen extra y sal'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Sellado a Fuego Vivo',
        description: 'Salpimentar los trozos de rabo de toro y pasarlos levemente por harina. Dorar en cazuela amplia con AOVE a fuego muy fuerte hasta sellar la carne por todas sus caras.',
        artisanTip: 'El dorado tostado en el fondo de la cazuela generará los azúcares caramelizados que darán color y profundidad a la salsa.'
      },
      {
        stepNumber: 2,
        title: 'Pochado Lento del Sofrito',
        description: 'Retirar la carne y pochar en ese mismo aceite las cebollas picadas, puerros, ajos y zanahorias a fuego suave durante 20 minutos con el laurel y las especias.',
        artisanTip: 'La verdura debe quedar casi deshecha para aportar dulzor y cuerpo natural a la salsa.'
      },
      {
        stepNumber: 3,
        title: 'Reducción de Vino y Chup-Chup',
        description: 'Reincorporar la carne sellada. Verter el vino tinto y dejar que reduzca a la mitad a fuego vivo para evaporar el alcohol. Añadir el caldo hasta cubrir y cocinar tapado a fuego mínimo entre 3 y 4 horas.',
        artisanTip: 'La carne está en su punto exacto cuando se separa del hueso con la simple presión del mango de una cuchara.'
      },
      {
        stepNumber: 4,
        title: 'Ligazón y Desgrasado de la Salsa',
        description: 'Separar con delicadeza los trozos de carne. Pasar la salsa de verduras por el pasapurés o chino y dejar reducir hasta que nape la cuchara con textura de jarabe colaginoso.',
        artisanTip: 'Guisar el día anterior: el reposo de 24 horas asienta los sabores y permite retirar en frío la capa superficial de grasa excedente.'
      }
    ],
    processPhotos: [
      {
        title: 'Sellado en Cazuela de Hierro Fundido',
        subtitle: 'Tostado de los cortes de rabo de toro',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La carne de rabo se dora a alta temperatura para retener jugos y crear fondo aromático.'
      },
      {
        title: 'Reducción al Vino Tinto y Sofrito',
        subtitle: 'El chup-chup de tres horas a fuego suave',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Hortalizas troceadas y vino noble reduciendo lentamente hasta concentrar sus aromas.'
      },
      {
        title: 'Carne Melosa Desprendida del Hueso',
        subtitle: 'Servicio con salsa oscura abrillantada',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'El plato humeante con su guarnición de patatas fritas en dados en taberna cordobesa.'
      }
    ],
    culinaryTerms: [
      { term: 'Napar', definition: 'Cubrir una pieza de carne cocinada con una salsa tan densa y colaginosa que se adhiere suavemente sin escurrir.' },
      { term: 'Desglasar', definition: 'Disolver con vino o caldo los jugos caramelizados pegados al fondo de la cazuela tras sellar la carne.' },
      { term: 'Chup-Chup', definition: 'Onomatopeya andaluza y castellana del hervor manso y constante de un guiso de larga duración.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Crianza de Ronda o Rioja Reserva',
      regionDO: 'D.O. Sierras de Málaga (Serranía de Ronda)',
      note: 'Los taninos maduros y las notas a frutos negros y especias acompañan la opulencia de la gelatina cárnica.'
    },
    culturalRitual: {
      title: 'El Pan de Cruz y el Rebañado',
      description: 'En Andalucía es impensable servir rabo de toro sin un buen pan candeal de miga recia al lado: no dejar ni una gota de salsa en el plato es la mayor muestra de cortesía.'
    },
    keyPhrase: {
      spanish: '«Una ración de rabo de toro con patatas y una copa de tinto con cuerpo.»',
      english: 'A portion of oxtail stew with potatoes and a glass of full-bodied red wine.',
      phonetic: 'OO-nah rah-THYOHN deh RRAH-boh deh TOH-roh kohn pah-TAH-tahs'
    }
  },
  {
    id: 'pescaito-frito',
    name: 'Pescaíto Frito Gaditano',
    spanishTitle: 'La harina de almorta, el aceite limpio y el crujido marino en cartucho',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'Cádiz (Andalucía)',
    originBadge: 'RAÍZ MUNICIPAL · CÁDIZ',
    historicalRoot: 'Técnica de fritura marinera fenicia y andalusí perfeccionada en las freidurías centenarias de la bahía gaditana.',
    historyAndOrigins: {
      eraOrCentury: 'Herencia Fenicia y Romana · Siglos XVIII al presente',
      narrative: 'La milenaria ciudad de Gadir (Cádiz), fundada por navegantes fenicios hace tres mil años, perfeccionó la técnica de freír pescado menudo recién capturado en abundante aceite de oliva virgen. Las freidurías populares gaditanas —abiertas en el siglo XVIII en el barrio de la Viña y junto al mercado de Abastos— convirtieron este método en un arte de precisión extrema: el pescado de roca y bahía (boquerones, acedías de Sanlúcar, pijotas, calamares y salmonetes) se sala, se sacude en harina especial de trigo duro (o mezcla con garbanzo) para eliminar cualquier exceso y se sumerge durante apenas dos minutos en aceite humeante a 180°C, saliendo seco, dorado y crujiente sin rastro de grasa.',
      culturalEvolution: 'Inspiró al famoso "fish and chips" británico a través de la comunidad de comerciantes sefardíes emigrados desde la península ibérica.',
      anecdoteOrLegend: 'En Cádiz se sirve tradicionalmente en "cartuchos" de papel de estraza marrón enrollados en forma de cono, diseñados para absorber el vapor residual y comerlo caminando por las calles del paseo marítimo frente al Atlántico.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Pescaito_Frito_-_Las_Flores_II.jpg',
    imageAlt: 'Surtido de pescaíto frito crujiente servido en cartucho de papel',
    imageCaption: 'Pescaíto frito gaditano en cartucho con boquerones, acedías y calamaritos',
    photoTag: 'CÁDIZ · ARTE DE LA FREIDURÍA MARINERA',
    description: 'Surtido de pequeños pescados de la bahía de Cádiz enharinados en grano duro y fritos en abundante aceite de oliva virgen extra a alta temperatura, logrando un rebozado crujiente y una carne interior jugosa.',
    ingredients: [
      '800 g de pescado variado menudo: boquerones, acedías de Sanlúcar, pijotas y calamares',
      '200 g de harina especial de fritura andaluza (trigo duro o mezcla con garbanzo)',
      'Aceite de oliva virgen extra para freír en abundancia (mínimo 1 litro)',
      'Sal marina fina de las salinas de Cádiz',
      'Rodajas de limón opcionales'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Limpieza y Secado Exhaustivo',
        description: 'Limpiar el pescado retirando tripas pero conservando cabezas y espinas en piezas pequeñas. Secar minuciosamente con paño de lino limpio; el pescado debe estar completamente seco antes del enharinado.',
        artisanTip: 'Cualquier resto de humedad superficial provocará que la harina se apelmace y absorba aceite indeseado.'
      },
      {
        stepNumber: 2,
        title: 'Enharinado y Cribado en Cedazo',
        description: 'Pasar los pescados por la harina especial de trigo duro. Colocarlos en un cedazo o colador grande y sacudir enérgicamente para expulsar hasta la última mota de harina sobrante.',
        artisanTip: 'El pescado debe quedar cubierto solo por un velo casi translúcido de harina: freír harina de más quema el aceite.'
      },
      {
        stepNumber: 3,
        title: 'Fritura Rápida a 180°C',
        description: 'Calentar abundante AOVE en perol hondo hasta los 180°C. Echar el pescado en tandas pequeñas para no enfriar el aceite. Freír entre 90 segundos y 2 minutos.',
        artisanTip: 'Nunca amontonar las piezas; deben nadar libremente en el aceite para que el choque térmico selle la piel al instante.'
      },
      {
        stepNumber: 4,
        title: 'Escurrido y Salado al Aire',
        description: 'Extraer con espumadera, escurrir unos segundos sobre rejilla o papel secante y salar inmediatamente con sal marina fina cuando la pieza aún está caliente.',
        artisanTip: 'Salar siempre al salir del aceite, nunca antes, para evitar que el pescado suelte agua durante la cocción.'
      }
    ],
    processPhotos: [
      {
        title: 'Pescado Fresco de la Bahía',
        subtitle: 'Acedías, boquerones y chocos de la lonja',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pescado de roca brillante recién descargado en el puerto de Cádiz.'
      },
      {
        title: 'El Cedazo y la Fritura en Perol',
        subtitle: 'Sacudida de harina y aceite a 180°C',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Burbujeo alegre del aceite de oliva virgen extra en freiduría gaditana.'
      },
      {
        title: 'El Cartucho de Papel de Estraza',
        subtitle: 'Crujiente, dorado y sin gota de grasa',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido en cucurucho tradicional de papel para comer caliente con los dedos.'
      }
    ],
    culinaryTerms: [
      { term: 'Freiduría', definition: 'Establecimiento popular típicamente andaluz especializado en la venta de pescado frito al peso servido en cartuchos de papel.' },
      { term: 'Cedazo', definition: 'Tamiz de malla metálica utilizado para zarandear el pescado enharinado y dejar únicamente un velo finísimo de harina.' },
      { term: 'Punto de Humo', definition: 'Temperatura crítica del aceite de oliva virgen extra a partir de la cual se descompone; freír a 180°C asegura una costra crujiente e inocua.' }
    ],
    pairing: {
      beverage: 'Manzanilla de Sanlúcar de Barrameda Pasada',
      regionDO: 'D.O. Manzanilla de Sanlúcar',
      note: 'Notas biológicas de levadura, salitre y almendra amarga limpian la grasa vegetal del paladar en cada bocado.'
    },
    culturalRitual: {
      title: 'El Cartucho al Sol de la Caleta',
      description: 'El ritual sagrado en Cádiz consiste en comprar un cartucho mixto de pescaíto y caminar hacia el castillo de San Sebastián para comerlo con los dedos frente a la brisa marina.'
    },
    keyPhrase: {
      spanish: '«Un cartucho de pescaíto frito variado recién salido del perol.»',
      english: 'A cone of mixed fried fish freshly taken out of the pan.',
      phonetic: 'oon kahr-TOO-choh deh pehs-kah-EE-toh FREE-toh vah-RYAH-doh'
    }
  },
  {
    id: 'tortillitas-camarones',
    name: 'Tortillitas de Camarones de Sanlúcar',
    spanishTitle: 'El encaje crujiente de cebolleta, perejil y camarón vivo',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'Sanlúcar de Barrameda / Cádiz',
    originBadge: 'RAÍZ MUNICIPAL · CÁDIZ',
    historicalRoot: 'Nacidas en las tabernas de pescadores de Bajo de Guía en Sanlúcar a principios del siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Principios del siglo XIX · Sanlúcar de Barrameda',
      narrative: 'Las tortillitas de camarones representan una de las cumbres más refinadas y etéreas de la cocina popular andaluza. Creadas en las tabernas marineras del barrio de Bajo de Guía en Sanlúcar de Barrameda, surgieron para aprovechar los diminutos camarones transparentes que las redes de los pescadores arrastraban en la desembocadura del río Guadalquivir frente a Doñana. Mezclando partes iguales de harina de trigo y harina de garbanzo con cebolleta picada finísima, perejil fresco y agua muy fría, se obtiene una masa casi líquida. Al verter una cucharada en aceite hirviendo, la masa se expande formando un encaje crujiente como una blonda de seda, con bordes rizados y camarones crujientes en su interior.',
      culturalEvolution: 'De bocado de taberna portuaria a emblema venerado en la gastronomía nacional, donde el grosor fino y el sonido crujiente al morder definen la maestría del cocinero.',
      anecdoteOrLegend: 'En Casa Balbino, en la Plaza del Cabildo de Sanlúcar, se despachan miles de tortillitas al día; los taberneros veteranos afirman que una tortillita perfecta debe ser tan fina que al mirarla a contraluz pueda vislumbrarse el sol poniente a través de sus huecos.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Tortillitas_de_camarones%2C_boquerones_y_puntillitas.jpg',
    imageAlt: 'Tortillitas de camarones doradas y con textura de encaje crujiente',
    imageCaption: 'Tortillitas de camarones de Sanlúcar fritas en AOVE con camarones enteros y perejil',
    photoTag: 'SANLÚCAR · ENCAJE MARINERO Y HARINA DE GARBANZO',
    description: 'Tortitas finísimas y transparentes como un encaje, elaboradas con harina de trigo y garbanzo, camarones diminutos enteros, cebolleta y perejil, fritas en aceite de oliva hasta quedar ultracrujientes.',
    ingredients: [
      '150 g de camarones frescos diminutos enteros',
      '100 g de harina de trigo blanca',
      '100 g de harina de garbanzo',
      '1 cebolleta tierna picada muy menuda',
      'Perejil fresco picado',
      '250 ml de agua con gas muy fría (casi helada)',
      'Sal marina',
      'Abundante AOVE para freír'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Preparación de la Masa Fluida',
        description: 'Tamizar en un bol la harina de trigo y la harina de garbanzo. Añadir la cebolleta cortada en brunoise casi invisible y el perejil fresco bien picado.',
        artisanTip: 'La harina de garbanzo es el ingrediente irremplazable que aporta el color dorado, el aroma a fruto seco y el crujido característico.'
      },
      {
        stepNumber: 2,
        title: 'Hidratación con Agua Helada',
        description: 'Verter el agua helada poco a poco batiendo suavemente con varilla hasta obtener una papilla muy líquida, similar a la masa de un crepe liviano.',
        artisanTip: 'El choque térmico entre el agua helada de la masa y el aceite a 190°C es el responsable de que se formen las burbujas de encaje.'
      },
      {
        stepNumber: 3,
        title: 'Incorporación de Camarones',
        description: 'Añadir los camarones crudos enteros y una pizca de sal, removiendo para que queden distribuidos de manera uniforme en la masa líquida.',
        artisanTip: 'Los camarones deben ser de tamaño minúsculo; no se pelan, pues su cáscara transparente aporta calcio y sabor a mar tostado.'
      },
      {
        stepNumber: 4,
        title: 'Fritura en Sartén Plana',
        description: 'Calentar abundante AOVE en sartén ancha. Dejar caer una cucharada sopera de masa: se expandirá en el acto. Dorar 1 minuto por cada lado hasta que los bordes queden crujientes.',
        artisanTip: 'Consumir inmediatamente; tras 5 minutos pierden su prodigiosa textura de encaje aéreo.'
      }
    ],
    processPhotos: [
      {
        title: 'Masa Fluida de Harina de Garbanzo',
        subtitle: 'Mezcla ligera con camarones vivos y cebolleta',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Consistencia líquida con harina de garbanzo y agua muy fría.'
      },
      {
        title: 'Expansión de Encaje en el Aceite Caliente',
        subtitle: 'Formación de blondas en la sartén',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La masa se abre en círculos con agujeros de encaje al contacto con el AOVE.'
      },
      {
        title: 'Tortillita Dorada y Rizada',
        subtitle: 'El bocado más crujiente de Sanlúcar',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servida recién salida de la sartén sobre servilleta en la Plaza del Cabildo.'
      }
    ],
    culinaryTerms: [
      { term: 'Camarón de Estero', definition: 'Diminuto crustáceo transparente capturado en las marismas y esteros de las salinas de la desembocadura del Guadalquivir.' },
      { term: 'Masa de Encaje', definition: 'Textura culinaria finísima donde la masa forma perforaciones naturales semejantes al tejido de encaje tradicional.' },
      { term: 'Harina de Garbanzo', definition: 'Harina sin gluten molida a partir de garbanzos secos, esencial en la fritura andaluza para otorgar color dorado y crujido seco.' }
    ],
    pairing: {
      beverage: 'Manzanilla en Rama de Sanlúcar',
      regionDO: 'D.O. Manzanilla de Sanlúcar',
      note: 'Directa de la bota sin filtrar ni clarificar, su carácter salino y punzante casa con el dulzor yodado del camarón.'
    },
    culturalRitual: {
      title: 'El Tapeo en la Plaza del Cabildo',
      description: 'El protocolo sanluqueño exige pedir dos tortillitas por persona recién fritas, acompañadas de una copa de manzanilla fría apoyados en un tonel en la calle.'
    },
    keyPhrase: {
      spanish: '«Dos tortillitas de camarones bien crujientes y una manzanilla en rama.»',
      english: 'Two crispy shrimp fritters and an unfiltered manzanilla sherry.',
      phonetic: 'dohs tohr-tee-LYEE-tahs deh kah-mah-ROH-nehs byehn kroo-HYEHN-tehs'
    }
  },
  {
    id: 'ajoblanco-malagueno',
    name: 'Ajoblanco Malagueño con Uvas Moscatel',
    spanishTitle: 'La crema sedosa de almendra marcona, ajo suave y fruta de la Axarquía',
    category: 'Sopas Frías',
    originType: 'city',
    originLocation: 'Málaga (Andalucía)',
    originBadge: 'RAÍZ MUNICIPAL · MÁLAGA',
    historicalRoot: 'La sopa fría más antigua de la península ibérica, anterior al descubrimiento de América.',
    historyAndOrigins: {
      eraOrCentury: 'Época Romana y Califal de al-Ándalus',
      narrative: 'Considerado por historiadores gastronómicos como el "abuelo de todos los gazpachos", el ajoblanco nació siglos antes de que los barcos de Colón trajeran los primeros tomates y pimientos del Nuevo Mundo. En las comarcas malagueñas de la Axarquía y los Montes de Málaga, donde los almendros florecen en bancales escarpados, los pobladores hispanorromanos y andalusíes majaban almendras crudas del terreno con ajo, pan duro, aceite de oliva, agua de manantial y vinagre. El resultado era una crema blanquísima, tersa y delicada que mitigaba el calor estival. Para equilibrar el fondo picante del ajo crudo, se le añadían uvas frescas de la variedad Moscatel de Alejandría, logrando un contraste sublime entre dulce y salado.',
      culturalEvolution: 'Celebrado anualmente en Almáchar con la Fiesta del Ajoblanco (declarada de Interés Turístico), donde se reparten miles de litros a los viajeros.',
      anecdoteOrLegend: 'Los arrieros que cruzaban los pasos de montaña entre Málaga y Granada transportaban en sus alforjas almendras secas y ajo; en cada fuente fresca majaban los ingredientes en una calabaza hueca para alimentarse sin necesidad de encender lumbre.'
    },
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Ajo_blanco.jpg/1280px-Ajo_blanco.jpg',
    imageAlt: 'Ajoblanco malagueño servido en cuenco hondo blanco con uvas moscatel',
    imageCaption: 'Ajoblanco malagueño con almendras marconas y uvas frescas de la Axarquía',
    photoTag: 'MÁLAGA · LA SOPA FRÍA MÁS ANTIGUA DE ESPAÑA',
    description: 'Sopa fría ancestral blanca elaborada triturando almendras crudas peladas, pan candeal asentado, ajo suave, aceite de oliva virgen extra y vinagre de Jerez, acompañada de uvas frescas o dados de melón.',
    ingredients: [
      '200 g de almendras crudas peladas (variedad Marcona)',
      '150 g de miga de pan candeal asentado',
      '1 diente de ajo pequeño sin germen',
      '100 ml de AOVE variedad Hojiblanca o Manzanilla',
      '25 ml de vinagre de Jerez suave',
      '500 ml de agua mineral muy fría',
      'Sal marina',
      'Uvas moscatel frescas peladas y sin pepitas'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Escaldado y Pelado de Almendras',
        description: 'Si las almendras tienen piel fina, escaldarlas en agua hirviendo durante 1 minuto y retirar la piel pellizcando con los dedos. Secar muy bien.',
        artisanTip: 'La almendra Marcona malagueña posee un porcentaje superior de grasa aromática que garantiza una crema untuosa y aterciopelada.'
      },
      {
        stepNumber: 2,
        title: 'Majado Tradicional en Mortero',
        description: 'Majar las almendras junto al ajo y la sal hasta formar una pasta espesa y blanquecina. Añadir la miga de pan previamente remojada en agua fría.',
        artisanTip: 'Majar pacientemente para que las almendras liberen su leche vegetal natural antes de añadir el aceite.'
      },
      {
        stepNumber: 3,
        title: 'Emulsión con Aceite Virgen Extra',
        description: 'Verter el AOVE en hilo constante mientras se tritura con brío, ligando la grasa vegetal con la pasta de frutos secos. Añadir el vinagre de Jerez y el agua helada.',
        artisanTip: 'El vinagre debe ser medido con cautela para no enmascarar la delicadeza láctea de la almendra dulce.'
      },
      {
        stepNumber: 4,
        title: 'Colado Fino y Reposo',
        description: 'Pasar por colador de malla fina para una textura sin gránulos. Reposar 3 horas en frío y servir acompañado de uvas moscatel cortadas a la mitad.',
        artisanTip: 'Las uvas moscatel aportan un estallido de jugo dulce floral que refresca el paladar tras cada cucharada.'
      }
    ],
    processPhotos: [
      {
        title: 'Almendra Marcona y Ajo Suave',
        subtitle: 'Ingredientes blancos de la Axarquía',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Almendras crudas de calidad suprema y dientes de ajo morado listos para majar.'
      },
      {
        title: 'Crema Blanca Emulsionada',
        subtitle: 'Textura aterciopelada como leche de almendras',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'El ajoblanco emulsiona en una crema blanca como la nieve con brillo sedoso.'
      },
      {
        title: 'Ajoblanco con Uvas Moscatel',
        subtitle: 'El contraste dulce del fruto maduro',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido con uvas frescas de la Axarquía y unas gotas de aceite virgen extra.'
      }
    ],
    culinaryTerms: [
      { term: 'Marcona', definition: 'Variedad de almendra autóctona española redonda y dulce, con alto contenido oleaginoso, considerada la reina de los frutos secos.' },
      { term: 'Axarquía', definition: 'Comarca histórica malagueña de viñedos y almendros abancalados donde se celebra la Fiesta del Ajoblanco.' },
      { term: 'Emulsión Láctea Vegetal', definition: 'Suspensión coloidal natural que se crea al emulsionar la grasa de las almendras con el aceite y el agua.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Seco de Uva Moscatel de Alejandría',
      regionDO: 'D.O. Sierras de Málaga',
      note: 'Sus aromas a jazmín, azahar y fruta blanca armonizan mágicamente con la almendra y las uvas del plato.'
    },
    culturalRitual: {
      title: 'La Fiesta de Almáchar',
      description: 'El primer sábado de septiembre, el pueblo blanco de Almáchar abre sus calles y ofrece ajoblanco servido en barros tradicionales a miles de visitantes al son de pandas de verdiales.'
    },
    keyPhrase: {
      spanish: '«Un ajoblanco malagueño con uvas moscatel bien fresquito.»',
      english: 'A cold Malagan ajoblanco almond soup with muscatel grapes.',
      phonetic: 'oon ah-hoh-BLAHN-koh mah-lah-GAY-nyoh kohn OO-vahs mohs-kah-TEHL'
    }
  }
];
