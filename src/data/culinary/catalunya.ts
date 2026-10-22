import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const CATALUNYA_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'calcots-romesco',
    name: 'Calçots con Salsa Romesco a la Llama',
    spanishTitle: 'La fiesta comunal de la lumbre de sarmientos, el tizne y la teja',
    category: 'Asados y Fuegos',
    originType: 'city',
    originLocation: 'Valls (Camp de Tarragona / Catalunya)',
    originBadge: 'RAÍZ MUNICIPAL · VALLS',
    historicalRoot: 'Descubierto a finales del siglo XIX por el campesino Benaiges en las huertas de Valls.',
    historyAndOrigins: {
      eraOrCentury: 'Finales del siglo XIX (1898) · Valls (Tarragona)',
      narrative: 'A finales del siglo XIX, un campesino solitario de Valls conocido como el "Tio Benaiges" descubrió por puro azar una forma singular de cultivar las cebollas blancas: al calzarlas con tierra sucesivas veces mientras crecían ("calçar"), los tallos se estiraban buscando la luz y permanecían tiernos, blancos y dulces. Decidió entonces asarlas directamente sobre la llama viva generada por los sarmientos secos de la poda de las viñas de Tarragona. Las capas exteriores se carbonizaban por completo mientras el corazón quedaba confitado, meloso y dulce al vapor. Acompañado de la salsa romesco —emulsión campesina de almendras y avellanas tostadas, ñoras escaldadas, ajos asados y aceite virgen de Siurana—, el calçot dio origen a "la Calçotada", el ritual festivo y comunitario más entrañable de Cataluña.',
      culturalEvolution: 'Protegido bajo la Indicación Geográfica Protegida (I.G.P.) Calçot de Valls, congregando cada invierno a familias enteras alrededor del fuego.',
      anecdoteOrLegend: 'La etiqueta campesina prohíbe el uso de cubiertos: los calçots se sirven envueltos en papel de periódico sobre tejas de barro cocido calientes; se coge el tallo con una mano, se tira de las hojas quemadas con la otra como si fuera una funda, se unta generosamente en romesco y se eleva en alto con la cabeza echada hacia atrás para comerlo directamente de pie luciendo un gran babero protector.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Cal%C3%A7ots_i_romesco.jpg',
    imageAlt: 'Calçots asados al fuego vivo sobre teja de barro con cuenco de salsa romesco',
    imageCaption: 'Calçots asados a la brasa de sarmientos con salsa romesco de avellanas y ñoras',
    photoTag: 'VALLS · FUEGO DE SARMIENTOS Y SALSA ROMESCO',
    description: 'Cebolletas tiernas dulces asadas a la llama viva de sarmientos de viña, peladas con las manos tiznadas y untadas en salsa romesco artesanal de frutos secos tostados, ajo asado y ñora.',
    ingredients: [
      '25 a 30 calçots con I.G.P. Calçot de Valls por persona',
      'Sarmientos secos de viña para la lumbre',
      'Para la salsa romesco: 100 g de almendras tostadas y 50 g de avellanas de Reus',
      '2 ñoras secas hidratadas',
      '1 cabeza de ajos asada y 1 diente de ajo crudo',
      '3 tomates maduros asados al rescoldo',
      '1 rebanada de pan frito',
      '150 ml de AOVE D.O.P. Siurana y 30 ml de vinagre de vino'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Preparación y Ensartado de Calçots',
        description: 'Recortar las raíces largas y la parte superior de las hojas verdes sin cortar la base del bulbo. Colocar ordenados en hileras apretadas en una parrilla de alambre doble.',
        artisanTip: 'Nunca lavar los calçots con agua antes de asar: la tierra adherida protege la carne tierna durante el golpe de fuego.'
      },
      {
        stepNumber: 2,
        title: 'Fuego Vivo de Sarmientos',
        description: 'Prender una hoguera viva con sarmientos de sarmiento. Colocar la parrilla justo sobre la llama viva, dando la vuelta a mitad de cocción hasta que las capas externas queden negras y suden una gota líquida por la punta.',
        artisanTip: 'El fuego debe ser de llama rápida y no de brasa quieta para que el exterior se queme sin secar el interior jugoso.'
      },
      {
        stepNumber: 3,
        title: 'Reposo en Papel de Periódico y Teja',
        description: 'Retirar del fuego y envolver inmediatamente en paquetes de 20 calçots dentro de papel de estraza o periódico durante 15 minutos.',
        artisanTip: 'El calor residual encerrado termina de confitar el corazón del calçot y facilita que la camisa negra se deslice sola.'
      },
      {
        stepNumber: 4,
        title: 'Mortero de Salsa Romesco',
        description: 'En el mortero, majar los frutos secos con el pan frito, los ajos y tomates asados pelados y la pulpa de las ñoras. Emulsionar con el AOVE de Siurana y el vinagre.',
        artisanTip: 'El secreto del romesco auténtico reside en el equilibrio entre el tostado de la avellana de Reus y la acidez del vinagre.'
      }
    ],
    processPhotos: [
      {
        title: 'Llama Viva de Sarmientos de Viña',
        subtitle: 'El fuego rápido en el campo de Tarragona',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Parrillas sobre las llamas crepitantes de sarmientos en Valls.'
      },
      {
        title: 'Majado de Romesco en Mortero de Piedra',
        subtitle: 'Avellanas de Reus, ñoras y ajo asado',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La salsa romesco adquiere su tono teja y textura granulosa tradicional.'
      },
      {
        title: 'Servicio en Teja Tradicional',
        subtitle: 'El desvainado manual con babero',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Cal%C3%A7ots_i_romesco.jpg',
        caption: 'Calçots humeantes sobre teja de barro listos para ser mojados en romesco.'
      }
    ],
    culinaryTerms: [
      { term: 'Calçar', definition: 'Técnica agrícola tradicional que consiste en arrimar tierra a la base del brote de la cebolla para que crezca al resguardo de la luz y quede blanca y tierna.' },
      { term: 'Sarmiento', definition: 'Vástago leñoso de la vid que produce una llama viva, aromática y rápida idónea para asar calçots.' },
      { term: 'Romesco', definition: 'Salsa icónica tarraconense emulsionada a base de frutos secos tostados, ñoras, ajo escalivado, tomate y AOVE.' }
    ],
    pairing: {
      beverage: 'Cava Brut Nature o Vino Tinto Joven del Penedès en Porrón',
      regionDO: 'D.O. Penedès / D.O. Cava',
      note: 'La burbuja fina y limpia del Cava desengrasa el paladar tras la intensidad balsámica del romesco y el dulzor del calçot.'
    },
    culturalRitual: {
      title: 'El Porrón y el Babero en la Masía',
      description: 'La calçotada es una fiesta campesina al aire libre en masías donde nadie usa platos individuales: se come de pie, con babero al cuello para evitar manchas de tizne, bebiendo vino tinto a gallete desde el porrón.'
    },
    keyPhrase: {
      spanish: '«Una teja de calçots con bastante salsa romesco y un porrón de vino.»',
      english: 'A tile of calçots with plenty of romesco sauce and a porrón of wine.',
      phonetic: 'OO-nah TEH-hah deh kahl-TSOHTS kohn bahs-TAHN-teh SAHL-sah roh-MEHS-koh'
    }
  },
  {
    id: 'fideua-gandia',
    name: 'Fideuà Tradicional de Marisco',
    spanishTitle: 'Los fideos curvados tostados al horno con caldo de roca y alioli',
    category: 'Arroces',
    originType: 'city',
    originLocation: 'Gandía / Costa Mediterránea (Comunitat Valenciana y Catalunya)',
    originBadge: 'RAÍZ MEDITERRÁNEA · COSTA',
    historicalRoot: 'Inventada a bordo de una barca pesquera de Gandía llamada Santa Lidia en 1915.',
    historyAndOrigins: {
      eraOrCentury: 'Principios del siglo XX (1915) · Puerto de Gandía',
      narrative: 'La historia de la fideuà es una de las anécdotas más celebradas de la cocina marinera del Mediterráneo occidental. A principios del siglo XX, a bordo del pesquero "Santa Lidia" que faenaba en las costas de Gandía, el cocinero de a bordo Gabriel Rodríguez Pastor debía preparar el arroz para el patrón y la tripulación. Al percatarse de que el patrón era tan aficionado al arroz que apenas dejaba ración para los marineros, Gabriel decidió sustituir el grano de arroz por fideos huecos cortados, con la esperanza de que a su jefe le gustara menos y sobrara más comida. El resultado fue todo lo contrario: el fideo absorbió la formidable sustancia del pescado de roca ("morralla"), el alioli perfumó el conjunto y los fideos se levantaron de punta al secarse en el horno, creando un plato legendario adoptado de inmediato en toda la costa mediterránea hasta la Costa Brava catalana.',
      culturalEvolution: 'Celebrada anualmente con el Concurso Internacional de Fideuà de Gandía, que premia la cocción justa del fideo al dente y el punto erguido.',
      anecdoteOrLegend: 'El secreto supremo de una gran fideuà reside en tostar previamente los fideos en el aceite del sofrito antes de echar el caldo: al tostarse adquieren un tono dorado avellanado y, al secarse en el fuego final, se ponen "de pie" mirando al cielo.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/%22Fideu%C3%A0%22%2C_gastronomia_de_Castell%C3%B3n.jpg',
    imageAlt: 'Fideuà de marisco en paella con cigalas y gambas coronada con alioli',
    imageCaption: 'Fideuà tradicional marinera con fideos del número 2 tostados y caldo de morralla',
    photoTag: 'GANDÍA Y COSTA MEDITERRÁNEA · FIDEOS AL PUNTO DE ROCA',
    description: 'Plato marinero sublime cocinado en paella plana donde fideos curvados absorben un concentrado caldo de pescado de roca y mariscos, tostándose al final hasta erguirse hacia arriba, servido con alioli casero.',
    ingredients: [
      '400 g de fideos para fideuà (número 2 o huecos curvados)',
      '1,2 litros de caldo de pescado de roca concentrado (morralla, galera y cangrejo)',
      '200 g de sepia fresca de lonja en dados',
      '8 gambas rojas o langostinos',
      '4 cigalas',
      '1 cebolla picada y 2 tomates maduros rallados',
      '2 dientes de ajo y hebras de azafrán',
      'AOVE virgen extra y alioli de mortero'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Elaboración del Caldo de Morralla',
        description: 'Cocer a fuego vivo pescado de roca menudo (cabracho, cinta, rascasa), galeras y cangrejos con puerro y laurel durante 30 minutos. Colar y mantener hirviendo.',
        artisanTip: 'La galera de playa es el marisco indispensable para dotar al caldo de su característico fondo yodado y dulce.'
      },
      {
        stepNumber: 2,
        title: 'Marcado de Marisco y Tostado de Fideos',
        description: 'En la paella con AOVE, dorar las gambas y cigalas 1 minuto por lado y retirar. En ese mismo aceite nacarado marcar la sepia, hacer el sofrito de ajo y tomate, y tostar los fideos secos hasta que adquieran color avellana.',
        artisanTip: 'Tostar los fideos con el sofrito impermeabiliza la pasta y evita que se pase o quede pastosa.'
      },
      {
        stepNumber: 3,
        title: 'Cocción Fuerte con Caldo Caliente',
        description: 'Verter el caldo hirviendo con el azafrán sobre los fideos. Cocinar a fuego vivo durante 7 minutos y luego a fuego medio 3 minutos más hasta que el líquido se evapore casi por completo.',
        artisanTip: 'Colocar el marisco reservado encima en los últimos 3 minutos para que se caliente con el vapor.'
      },
      {
        stepNumber: 4,
        title: 'El Levantado Final del Fideo',
        description: 'Dar un golpe de calor seco final (o introducir 2 minutos bajo el gril del horno) para que los fideos de la superficie se sequen y se levanten curvados hacia arriba.',
        artisanTip: 'Servir siempre con una pequeña cazoleta de alioli casero emulsionado a mano en mortero.'
      }
    ],
    processPhotos: [
      {
        title: 'Marisco de Lonja en la Paella',
        subtitle: 'Sellado de gambas rojas y sepia fresca',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Cigalas y gambas liberando sus corales en el fondo de la paella.'
      },
      {
        title: 'Tostado de los Fideos en el Sofrito',
        subtitle: 'El punto avellanado antes del caldo',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Los fideos absorben el aceite aromatizado de marisco y toman color.'
      },
      {
        title: 'Fideos Levantados de Punta',
        subtitle: 'Secado final crujiente con alioli',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/%22Fideu%C3%A0%22%2C_gastronomia_de_Castell%C3%B3n.jpg',
        caption: 'La fideuà terminada con los fideos erguidos y salsa alioli fresca.'
      }
    ],
    culinaryTerms: [
      { term: 'Morralla', definition: 'Mezcla variada de pescados menudos de roca y fango (cabracho, araña, galera) no aptos para fileteado pero de sabor insuperable para fondos.' },
      { term: 'Fideo de Punta', definition: 'Término marinero que describe cuando los fideos se secan al horno y se yerguen verticalmente indicando cocción perfecta.' },
      { term: 'Alioli de Mortero', definition: 'Emulsión ancestral de ajo machacado y aceite de oliva ligada a mano con maza de madera sin huevo.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Seco de Uva Merseguera o Garnacha Blanca',
      regionDO: 'D.O. Terra Alta / D.O. Valencia',
      note: 'La frescura mineral y los cítricos de la Garnacha blanca limpian la untuosidad del alioli y ensalzan el marisco.'
    },
    culturalRitual: {
      title: 'Comer del Centro de la Paella',
      description: 'Siguiendo la costumbre marinera, los comensales se sitúan alrededor de la paella caliente y comen directamente de su parcela con cuchara de madera.'
    },
    keyPhrase: {
      spanish: '«Una fideuà de marisco con fideo fino y una salsera de alioli casero.»',
      english: 'A seafood fideuà with thin noodles and a bowl of homemade alioli.',
      phonetic: 'OO-nah fee-deh-WAH deh mah-REES-koh kohn fee-DEH-oh FEE-noh'
    }
  },
  {
    id: 'crema-catalana',
    name: 'Crema Catalana Quemada Tradicional',
    spanishTitle: 'La natilla cítrica aromatizada con canela y su costra de azúcar al soplete',
    category: 'Dulces y Postres',
    originType: 'region',
    originLocation: 'Catalunya',
    originBadge: 'ORIGEN REGIONAL · CATALUNYA',
    historicalRoot: 'Documentada en el recetario medieval catalán Llibre de Sent Soví de 1324.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIV (1324) · Documentada en el Llibre de Sent Soví',
      narrative: 'La Crema Catalana es uno de los postres más antiguos de Europa con registro escrito continuado. Aparece ya descrita en el célebre manuscrito medieval "Llibre de Sent Soví" (1324) bajo el nombre de "llet cuita" (leche cocida). Tradicionalmente asociada a la festividad de San José (19 de marzo), se la conoce también en los pueblos catalanes como "crema de Sant Josep". Se elabora infusionando leche fresca de vaca con pieles de limón y canela en rama, engordada suavemente con yemas de huevo y almidón de maíz. Justo antes de servir en cazuelitas individuales de barro, se espolvorea con azúcar blanco y se quema con una pala redonda de hierro al rojo vivo, creando una capa de caramelo crujiente y amarga que contrasta con la frescura cremosa del interior.',
      culturalEvolution: 'Es el antepasado directo de la crème brûlée francesa, diferenciándose de esta en que no lleva nata ni se cuece al baño maría en el horno, sino en cazo sobre el fogón con leche infusionada.',
      anecdoteOrLegend: 'La leyenda popular cuenta que unas monjas clarisas preparaban un flan para la visita de un obispo; al no cuajar a tiempo, decidieron añadirle almidón y azúcar caliente. Al probarla el prelado exclamó: "¡Crema!", que en catalán significa tanto la crema como "¡Quema!", bautizando para siempre el postre.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Food_in_Catalonia_06.jpg',
    imageAlt: 'Crema catalana tradicional en cazuela de barro con corteza de azúcar quemado crujiente',
    imageCaption: 'Crema catalana quemada con hierro caliente, perfumada con piel de limón y canela',
    photoTag: 'CATALUNYA · DULZURA MEDIEVAL Y COSTRA DE CARAMELO',
    description: 'Postre histórico catalán de textura sedosa aromatizado con canela y corteza de limón, servido en cazuelita de barro bajo una fina lámina de azúcar caramelizado que se rompe con la cuchara.',
    ingredients: [
      '1 litro de leche entera fresca de granja',
      '8 yemas de huevo de corral',
      '180 g de azúcar blanco (más azúcar extra para quemar)',
      '40 g de almidón de maíz (maicena)',
      '1 rama de canela en rama de Ceilán',
      'La piel de 1 limón sin parte blanca'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Infusión Lenta de Leche y Cítricos',
        description: 'Poner a calentar la leche (reservando medio vaso) con la piel de limón y la canela en rama. Cuando comience a hervir, apagar el fuego, tapar y dejar infusionar 20 minutos.',
        artisanTip: 'Nunca raspar la parte blanca amarga del limón; solo la fina epidermis amarilla aromática.'
      },
      {
        stepNumber: 2,
        title: 'Batido de Yemas y Almidón',
        description: 'En un bol hondo, batir las yemas de huevo con el azúcar hasta blanquear. Disolver la maicena en el medio vaso de leche fría reservado y unir a las yemas.',
        artisanTip: 'Disolver la maicena en leche fría garantiza que no se formen grumos al calentarse.'
      },
      {
        stepNumber: 3,
        title: 'Espesado a Fuego Lento',
        description: 'Colar la leche infusionada sobre las yemas sin dejar de remover con varilla. Verter de nuevo en el cazo a fuego suave, batiendo continuamente hasta que espese sin hervir.',
        artisanTip: 'Si hierve, el huevo se cortará; retirar del fuego en cuanto la crema nape densamente la varilla.'
      },
      {
        stepNumber: 4,
        title: 'Escudellado y Quemado al Momento',
        description: 'Repartir en cazuelas de barro cocido y enfriar en nevera. Al servir, cubrir con una capa uniforme de azúcar y quemar con pala de hierro candente o soplete.',
        artisanTip: 'Quemar justo antes de llevar a la mesa; si se quema con antelación, el azúcar absorberá la humedad y perderá el crujido.'
      }
    ],
    processPhotos: [
      {
        title: 'Infusión de Canela y Limón en Leche Fresca',
        subtitle: 'Aromas que definen el postre catalán',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'La leche entera de vaca absorbe los aceites esenciales del limón y la canela.'
      },
      {
        title: 'Batido de Yemas de Huevo de Corral',
        subtitle: 'Color amarillo dorado natural',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Yemas frescas batidas con azúcar y maicena hasta obtener textura sedosa.'
      },
      {
        title: 'El Quemado de la Costra con Hierro',
        subtitle: 'El sonido inconfundible al quebrar el caramelo',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Food_in_Catalonia_06.jpg',
        caption: 'Caramelo dorado crujiente sobre cazuela de barro tradicional catalana.'
      }
    ],
    culinaryTerms: [
      { term: 'Crema de Sant Josep', definition: 'Nombre tradicional festivo de la crema catalana, elaborada secularmente el 19 de marzo con la primera leche fresca de primavera.' },
      { term: 'Pala de Cremar', definition: 'Disco de hierro forjado con mango largo que se calienta en la brasa viva para caramelizar el azúcar instantáneamente.' },
      { term: 'Escudellar', definition: 'Término catalán que designa la acción de verter y repartir un preparado líquido o crema en las cazuelitas individuales de servicio.' }
    ],
    pairing: {
      beverage: 'Vino Dulce Garnatxa d’Empordà o Moscatell de Sitges',
      regionDO: 'D.O. Empordà',
      note: 'Notas a pasas, higos secos y nueces que acompañan con calidez el tostado del azúcar y la canela.'
    },
    culturalRitual: {
      title: 'El Rompido de la Costra con la Cuchara',
      description: 'El placer universal de la crema catalana comienza con el golpe seco de la cuchara sobre el caramelo endurecido para oír cómo se quiebra antes del primer bocado.'
    },
    keyPhrase: {
      spanish: '«De postre, una crema catalana bien quemada y un café solo.»',
      english: 'For dessert, a well-caramelized Catalan cream and an espresso.',
      phonetic: 'deh POHS-treh, OO-nah KREH-mah kah-tah-LAH-nah byehn keh-MAH-dah'
    }
  },
  {
    id: 'escalivada-catalana',
    name: 'Escalivada Catalana Tradicional',
    spanishTitle: 'Las verduras asadas al rescoldo del carbón con aceite de Siurana',
    category: 'Tapeo y Bocados',
    originType: 'region',
    originLocation: 'Catalunya',
    originBadge: 'ORIGEN REGIONAL · CATALUNYA',
    historicalRoot: 'Del catalán "escalivar" (asar al rescoldo o a la brasa viva sin llama).',
    historyAndOrigins: {
      eraOrCentury: 'Origen Medieval Campesino · Masías catalanas',
      narrative: 'El término escalivada proviene directamente del verbo catalán "escalivar", que significa "asar al rescoldo" de la leña o bajo la ceniza caliente ("brasa"). En las masías y casas de campo de Cataluña, cuando las brasas del almuerzo iban extinguiéndose, las campesinas introducían berenjenas enteras, pimientos rojos carnosos, cebollas y cabezas de ajo directamente entre las cenizas vivas. La cocción lenta bajo el calor abrasador caramelizaba los azúcares naturales de las hortalizas y concentraba su jugo ahumado. Una vez enfriadas, las verduras se pelaban a mano, se desgarraban en tiras longitudinales y se aderezaban generosamente con aceite de oliva virgen extra de arbequina y sal marina, acompañadas a menudo de lomos de anchoa curada en salazón de l’Escala.',
      culturalEvolution: 'De plato humilde de aprovechamiento campesino a entrante estrella de la gastronomía mediterránea servido sobre tostas de pan de payés.',
      anecdoteOrLegend: 'En las comarcas del interior catalán, las abuelas enseñaban que jamás debían cortarse los pimientos ni las berenjenas con cuchillo tras asarlos: debían desgarrarse a tiras con los dedos para respetar la fibra natural de la hortaliza.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Escalivada_.jpg',
    imageAlt: 'Escalivada catalana de pimientos rojos y berenjenas en tiras con anchoas de l’Escala',
    imageCaption: 'Escalivada tradicional asada al carbón con aceite de arbequina y sal en escamas',
    photoTag: 'CATALUNYA · RESCOLDO DE LEÑA Y ANCHOAS DE L’ESCALA',
    description: 'Berenjenas, pimientos rojos y cebollas asados enteros a la brasa viva hasta que la piel se carboniza, pelados a mano en tiras y aliñados con aceite de oliva virgen extra, ajo picado y anchoas de salazón.',
    ingredients: [
      '2 berenjenas grandes y firmes',
      '2 pimientos rojos carnosos',
      '2 cebollas dulces',
      '1 cabeza de ajo asada',
      '100 ml de AOVE variedad Arbequina D.O.P. Siurana',
      'Sal marina en escamas',
      '8 filetes de anchoas de l’Escala en salazón (opcional)'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Asado al Rescoldo o Carbón Directo',
        description: 'Lavar y secar las hortalizas enteras con piel. Disponer directamente sobre la rejilla con brasa viva de leña o carbón. Asar volteando de vez en cuando hasta que la piel quede totalmente negra y crujiente.',
        artisanTip: 'La piel carbonizada aporta el perfume ahumado profundo que define la verdadera escalivada.'
      },
      {
        stepNumber: 2,
        title: 'Sudado en Recipiente Tapado',
        description: 'Retirar las verduras asadas y colocarlas en una bandeja honda cubierta con un paño limpio durante 20 minutos para que el propio vapor ablande la piel exterior.',
        artisanTip: 'El sudado al vapor permite que las pieles quemadas se desprendan sin esfuerzo.'
      },
      {
        stepNumber: 3,
        title: 'Desgarrado Manual en Tiras',
        description: 'Pelar las hortalizas con las manos retirando semillas y pedúnculos. Desgarrar longitudinalmente la carne con los dedos en tiras finas sin utilizar cuchillos metálicos.',
        artisanTip: 'El desgarro manual conserva la textura fibrosa y retiene mejor el aceite emulsionado.'
      },
      {
        stepNumber: 4,
        title: 'Aliñado con Arbequina y Anchoas',
        description: 'Disponer las tiras ordenadas alternando colores en una fuente. Regar con el AOVE virgen extra de Siurana, ajo asado machacado y escamas de sal marina, coronando con anchoas.',
        artisanTip: 'Dejar reposar 1 hora a temperatura ambiente antes de degustar para que las verduras absorban el aceite.'
      }
    ],
    processPhotos: [
      {
        title: 'Hortalizas a la Brasa Viva',
        subtitle: 'Pimientos, berenjenas y cebollas en parrilla',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La piel se carboniza al fuego directo mientras el corazón se confita.'
      },
      {
        title: 'Pelado y Desgarrado Manual',
        subtitle: 'Tiras tiernas y ahumadas sin cuchillo',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Desprendiendo la camisa quemada y dejando la carne melosa.'
      },
      {
        title: 'Tiras Aliñadas con Aceite de Arbequina',
        subtitle: 'Presentación tradicional con anchoas de l’Escala',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Escalivada_.jpg',
        caption: 'Fuente de escalivada brillante lista para acompañar pan de payés.'
      }
    ],
    culinaryTerms: [
      { term: 'Escalivar', definition: 'Verbo catalán que define la acción de cocinar alimentos directamente al rescoldo o a la brasa de leña caliente.' },
      { term: 'Anchoa de l’Escala', definition: 'Anchoa en salazón curada de forma tradicional en barriles en la localidad costera de l’Escala (Girona).' },
      { term: 'Aceite de Siurana', definition: 'Denominación de origen de aceite virgen extra de uva arbequina, reconocido por sus notas frutadas dulces y ausencia de amargor.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Joven del Montsant o Costers del Segre',
      regionDO: 'D.O. Montsant',
      note: 'Vinos frescos con fruta roja y notas terrosas que abrazan los aromas ahumados de la verdura y la anchoa.'
    },
    culturalRitual: {
      title: 'La Torrada de Escalivada con Anchoas',
      description: 'En las tabernas de barrio y fiestas mayores se sirve la "torrada": una rebanada gigante de pan de payés a la brasa untada con ajo y tomate sobre la que reposa la escalivada.'
    },
    keyPhrase: {
      spanish: '«Una torrada de escalivada con anchoas de l’Escala y una copa de Montsant.»',
      english: 'A toasted bread with escalivada vegetables, anchovies and a glass of Montsant.',
      phonetic: 'OO-nah toh-RRAH-dah deh ehs-kah-lee-VAH-dah kohn ahn-CHOH-ahs'
    }
  },
  {
    id: 'suquet-de-peix',
    name: 'Suquet de Peix Tradicional de la Costa Brava',
    spanishTitle: 'El guiso marinero a fuego vivo con picada de almendras y pescado de roca',
    category: 'Mar y Costas',
    originType: 'city',
    originLocation: 'Costa Brava (Tossa de Mar / Palafrugell / Roses)',
    originBadge: 'RAÍZ MUNICIPAL · COSTA BRAVA',
    historicalRoot: 'Guiso inventado por los pescadores de calas en barcas de arrastre sobre hornillos de carbón.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Calas y puertos pesqueros de Girona',
      narrative: 'El suquet de peix es el epítome de la cocina de a bordo de la Costa Brava catalana. Los marineros de Palafrugell, Tossa de Mar, Blanes y Cadaqués preparaban su almuerzo diario directamente en la cubierta de la barca con las capturas de roca que no tenían fácil salida comercial en la lonja: cabrachos (escorpenas), rapes, congrio y rodajas de patata. El alma del guiso reside en su "picada" final —el sello identitario de los fuegos catalanes— consistente en majar en mortero almendras tostadas, avellanas, ajo asado, perejil y un toque de azafrán y galleta o pan frito, ligando el caldo marino en una salsa untuosa y profundamente aromática.',
      culturalEvolution: 'De rancho humilde de cala de pescadores a buque insignia de las tabernas marineras más prestigiosas del Empordà.',
      anecdoteOrLegend: 'El nombre "suquet" deriva del catalán "suc" (jugo o salsa sustanciosa); los patrones de barco solían decir que un buen suquet no se mide por la cantidad de pescado, sino por los trozos de pan de payés necesarios para dejar el plato limpio.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Suquet_de_peix.jpg',
    imageAlt: 'Cazuela de barro con suquet de peix tradicional con rape, gambas y patatas',
    imageCaption: 'Suquet de peix de la Costa Brava en cazuela de barro con picada de frutos secos',
    photoTag: 'COSTA BRAVA · RANCHO MARINERO Y PICADA DE MORTERO',
    description: 'Emblemático guiso marinero de pescadores de roca cocinado en cazuela de barro con patatas, sofrito de tomate, caldo concentrado de espinas y ligado con picada tradicional de almendras y azafrán.',
    ingredients: [
      '1 kg de pescado variado de roca (rape, cabracho, dorada, congrio)',
      '4 gambas rojas o cigalas frescas',
      '4 patatas medianas cascadas en trozos',
      '1 cebolla dulce y 2 tomates maduros rallados',
      '1 litro de fumet concentrado de espinas de pescado',
      'Para la picada: 12 almendras tostadas, 6 avellanas, 2 dientes de ajo, perejil fresco y azafrán',
      'AOVE virgen extra de Siurana y sal marina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Marcado de Marisco y Sofrito de Cebolla',
        description: 'En una cazuela de barro refractario con buen chorro de AOVE, marcar las gambas vuelta y vuelta y retirar. En ese mismo aceite, pochar la cebolla muy despacio hasta que quede caramelizada y oscura, añadiendo el tomate rallado.',
        artisanTip: 'La cebolla bien confitada es la base del color oscuro y profundidad de sabor del suquet.'
      },
      {
        stepNumber: 2,
        title: 'Chascado de Patatas y Caldo Hirviendo',
        description: 'Añadir las patatas cascándolas con el cuchillo para que suelten su almidón. Verter el fumet hirviendo y cocer a fuego medio durante 15 minutos.',
        artisanTip: 'Cascar las patatas (romperlas al final del corte) espesa el caldo de forma natural.'
      },
      {
        stepNumber: 3,
        title: 'Mortero de Picada Catalana',
        description: 'Majar en mortero las almendras, avellanas, ajo asado, perejil y hebras de azafrán tostado con unas gotas de caldo hasta lograr una pasta fina.',
        artisanTip: 'La picada nunca se fríe: se disuelve en el caldo en los últimos 5 minutos de cocción.'
      },
      {
        stepNumber: 4,
        title: 'Pescado de Roca y Ligazón',
        description: 'Introducir los trozos gruesos de pescado y las gambas sobre las patatas. Incorporar la picada de mortero agitando suavemente la cazuela por las asas durante 5 minutos a fuego manso.',
        artisanTip: 'No remover con cuchara para no quebrar las patatas ni deshacer el pescado tierno.'
      }
    ],
    processPhotos: [
      {
        title: 'Pescado de Roca Fresco en Lonja',
        subtitle: 'Rape, cabracho y gambas rojas de Palamós',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pescado con textura firme y aroma puro a sal marina.'
      },
      {
        title: 'El Majado de la Picada en Mortero de Mármol',
        subtitle: 'Almendras, avellanas y hebras de azafrán',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La picada se deshace con unas gotas de caldo caliente antes de verterla.'
      },
      {
        title: 'Cazuela de Barro Hirviendo a Fuego Lento',
        subtitle: 'El chup-chup marinero en mesa de madera',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Suquet_de_peix.jpg',
        caption: 'Suquet servido humeante en la propia cazuela de barro vidriado.'
      }
    ],
    culinaryTerms: [
      { term: 'Picada', definition: 'Técnica canónica catalana consistente en majar frutos secos, ajo, pan y azafrán para espesar y aromatizar guisos en el último hervor.' },
      { term: 'Cascar Patatas', definition: 'Técnica de corte donde el cuchillo inicia la incisión y luego rompe el trozo para liberar almidón espesante.' },
      { term: 'Suc', definition: 'Voz catalana para el jugo concentrado de pescado que da nombre al plato.' }
    ],
    pairing: {
      beverage: 'Vino Blanco del Empordà o Cava Rosado Trepat',
      regionDO: 'D.O. Empordà / D.O. Cava',
      note: 'El carácter salino y los toques de hinojo de un vino blanco del Empordà acarician el fondo yodado del marisco de roca.'
    },
    culturalRitual: {
      title: 'El Mojado de Pan de Payés en la Cazuela',
      description: 'El comensal degusta primero las patatas melosas y el pescado, dejando para el final la salsa de picada para sopear rebanadas de pan tostado de payés.'
    },
    keyPhrase: {
      spanish: '«Un suquet de peix en cazuela de barro bien caliente con abundante picada.»',
      english: 'A piping hot Costa Brava fish stew in a clay pot with plenty of picada.',
      phonetic: 'oon soo-KEHT deh PEYSH ehn kah-THWEH-lah deh BAH-rroh'
    }
  },
  {
    id: 'botifarra-amb-mongetes',
    name: 'Botifarra con Mongetes del Ganxet',
    spanishTitle: 'La salchicha artesana a la brasa con judías blancas cremosas de piel invisible',
    category: 'Asados y Fuegos',
    originType: 'region',
    originLocation: 'Vallès y Masías de Catalunya (Barcelona / Girona)',
    originBadge: 'ORIGEN REGIONAL · CATALUNYA',
    historicalRoot: 'Plato nacional popular consolidado en las fondas y masías rurales en el siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Masías y fondas de postas de Cataluña',
      narrative: 'La "botifarra amb mongetes" es el plato campesino y fundacional más representativo de la Cataluña rural. Nació en las fondas y masías a lo largo de las rutas de carreteros durante el siglo XIX, sustituyendo a la antigua combinación de botifarra con habas. El secreto gastronómico indiscutible del plato estriba en la mongeta del Ganxet —una judía blanca con forma arriñonada y ganchuda cultivada en el Vallès y el Maresme, protegida con Denominación de Origen Protegida (D.O.P.)—. Esta legumbre se distingue por una piel tan sumamente fina que resulta casi imperceptible al paladar y una textura interior asombrosamente cremosa. Acompañada de una butifarra fresca de cerdo de matanza a la brasa y salteada con ajo y perejil en la propia grasa del asado, encarna el almuerzo reconfortante de payés por antonomasia.',
      culturalEvolution: 'Protagonista imprescindible del tradicional "esmorzar de forquilla" (desayuno de cuchillo y tenedor) de los fines de semana en Cataluña.',
      anecdoteOrLegend: 'El gastrónomo catalán Ferran Agulló dejó escrito en la década de 1930 que este plato "es la sencillez convertida en obra maestra: la butifarra es el vigor del cerdo y la mongeta del ganxet es la finura de la huerta".'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Butifarra_amb_seques-Camp_Portel.jpg',
    imageAlt: 'Plato de botifarra fresca asada a la brasa con mongetes del ganxet salteadas',
    imageCaption: 'Botifarra a la brasa con mongetes del ganxet salteadas con ajo y perejil',
    photoTag: 'CATALUNYA · EL ESMORZAR DE FORQUILLA TRADICIONAL',
    description: 'Especialidad histórica catalana compuesta por butifarra artesana fresca de cerdo asada a la brasa o plancha, acompañada de judías blancas del Ganxet cocidas y salteadas con ajo, perejil y tocino.',
    ingredients: [
      '4 butifarras frescas artesanas de cerdo (botifarra crua)',
      '400 g de mongetes del Ganxet con D.O.P. cocidas al punto',
      '3 dientes de ajo picados fino',
      'Perejil fresco recién picado',
      'Trozos de tocino o panceta curada',
      'AOVE virgen extra de Siurana y sal marina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Cocción Lenta de las Mongetes del Ganxet',
        description: 'Cocer las mongetes remojadas en agua mineral a fuego mínimo, sin que el agua rompa en hervores violentos para no romper su finísima piel.',
        artisanTip: 'Añadir un chorro de agua fría ("asustar las judías") dos veces durante la cocción para que queden tiernas como mantequilla.'
      },
      {
        stepNumber: 2,
        title: 'Brasa o Plancha de la Butifarra',
        description: 'Asar la butifarra entera a fuego medio sobre brasa o sartén de hierro con unas gotas de aceite, pinchando ligeramente la piel para que no reviente.',
        artisanTip: 'La butifarra debe quedar bien dorada por fuera y jugosa en su interior, nunca seca.'
      },
      {
        stepNumber: 3,
        title: 'Salteado en la Grasa Natural',
        description: 'En la misma sartén o cazuela con los jugos de la butifarra, dorar el ajo y la panceta. Incorporar las mongetes y saltear a fuego vivo con el perejil fresco.',
        artisanTip: 'Mover la sartén en vaivén suave en lugar de meter la cuchara para mantener los granos enteros.'
      },
      {
        stepNumber: 4,
        title: 'Servicio con Pan de Payés con Tomate',
        description: 'Servir la butifarra humeante sobre la cama de judías blancas cremosas, acompañada de rebanadas de pan de payés frotadas con tomate y aceite.',
        artisanTip: 'El plato debe servirse ardiendo, regado con un hilo final de aceite de oliva crudo virgen extra.'
      }
    ],
    processPhotos: [
      {
        title: 'La Butifarra Artesana sobre la Brasa',
        subtitle: 'Carne magra especiada con sal y pimienta negra',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Dorado uniforme a fuego de leña en masía catalana.'
      },
      {
        title: 'Mongetes del Ganxet con Ajo y Perejil',
        subtitle: 'La cremosidad de la judía protegida',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'Judías blancas salteadas en la sartén absorbiendo los aromas de la matanza.'
      },
      {
        title: 'Plato Tradicional de Esmorzar de Forquilla',
        subtitle: 'Acompañado de porrón de vino de la tierra',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Butifarra_amb_seques-Camp_Portel.jpg',
        caption: 'El plato canónico servido caliente con tostadas de pan con tomate.'
      }
    ],
    culinaryTerms: [
      { term: 'Mongeta del Ganxet', definition: 'Variedad de judía autóctona catalana con D.O.P., célebre por su forma ganchuda y textura extraordinariamente cremosa sin piel dura.' },
      { term: 'Esmorzar de Forquilla', definition: 'Desayuno campesino de tenedor y cuchillo típico catalán de platos contundentes a media mañana.' },
      { term: 'Botifarra Crua', definition: 'Embutido fresco catalán elaborado exclusivamente con carne magra y tocino de cerdo picado, sal y pimienta negra en tripa natural.' }
    ],
    pairing: {
      beverage: 'Vino Tinto del Priorat o Montsant con Porrón',
      regionDO: 'D.O.Q. Priorat / D.O. Montsant',
      note: 'La potencia mineral y taninos redondos de la garnacha y cariñena limpian la grasa de la butifarra y envuelven la cremosidad de la judía.'
    },
    culturalRitual: {
      title: 'El Esmorzar de Forquilla de Domingo',
      description: 'Grupos de amigos y senderistas acuden a primera hora a masías y fondas rurales para compartir este plato de cuchillo y tenedor con vino en porrón.'
    },
    keyPhrase: {
      spanish: '«Una de botifarra con mongetes del ganxet bien salteadas y una rebanada de pan con tomate.»',
      english: 'A sausage with sauteed Ganxet beans and a slice of bread with tomato.',
      phonetic: 'OO-nah deh boh-tee-FAH-rrah kohn mohn-JEH-tehs dehl gahn-SHEHT'
    }
  }
];
