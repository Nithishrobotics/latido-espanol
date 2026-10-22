import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const PANHISPANICOS_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'tortilla-de-patatas',
    name: 'Tortilla Española de Patatas al Punto',
    spanishTitle: 'La joya dorada de patata agria confitada en AOVE, huevo campero y centro meloso',
    category: 'Tapeo y Bocados',
    originType: 'panhispanic',
    originLocation: 'Tradición Panhispánica (Documentada en Navarra y Extremadura desde el siglo XVIII)',
    originBadge: 'PATRIMONIO PANHISPÁNICO',
    historicalRoot: 'Primeras referencias documentadas en las Cortes de Navarra (1817) y en Villanueva de la Serena (1798).',
    historyAndOrigins: {
      eraOrCentury: 'Finales del siglo XVIII (1798) · Villanueva de la Serena (Extremadura) y Navarra (1817)',
      narrative: 'La tortilla de patatas es el tótem culinario que vertebra la vida social española. Aunque durante décadas se atribuyó su invención al general carlista Tomás de Zumalacárregui en Navarra en 1835 para alimentar a sus tropas hambrientas, investigaciones históricas recientes del CSIC hallaron un documento previo de 1798 en Villanueva de la Serena (Badajoz) donde dos hacendados ilustrados detallaban la preparación de una tortilla elaborada con patatas pochadas en aceite y huevos para mitigar las hambrunas periódicas. Su aparente sencillez esconde una maestría técnica milimétrica: patata agria de carne amarilla pochada lentamente en abundante aceite de oliva virgen extra hasta quedar tierna y translúcida como mantequilla, cebolla dulce caramelizada con sus propios azúcares, huevos camperos batidos con holgura y un cuajado fulgurante en sartén de hierro que deja una capa exterior dorada y un corazón cremoso y fluido ("babé").',
      culturalEvolution: 'Evolucionó a icono universal de todas las tabernas, hogares y barras de España, generando el debate fraternal más apasionado del país entre "concebollistas" y "sincebollistas".',
      anecdoteOrLegend: 'En Betanzos (Galicia), la tortilla alcanzó su cumbre de fluidez extrema sin cebolla, cuajada apenas 40 segundos por cada lado, de modo que al hendir el tenedor la yema líquida amarilla se desparrama por el plato como una fuente termal.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Pincho_de_tortilla_-_Madrid.jpg',
    imageAlt: 'Tortilla de patatas española jugosa cortada en porción con centro meloso',
    imageCaption: 'Tortilla de patatas española al punto meloso con patata agria confitada en AOVE',
    photoTag: 'ESPAÑA · EL TÓTEM GASTRONÓMICO DE LA TABERNA IBÉRICA',
    description: 'La reina indiscutible de la gastronomía española: patatas seleccionadas pochadas lentamente en aceite de oliva virgen extra con cebolla confitada, cuajada en sartén caliente hasta lograr una corteza fina y un interior cremoso y meloso.',
    ingredients: [
      '1 kg de patatas variedad agria o monalisa',
      '8 huevos grandes de gallinas camperas criadas en libertad',
      '1 cebolla dulce grande picada en pluma fina',
      '350 ml de AOVE virgen extra para el pochado',
      'Sal marina fina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Corte en Lascas Irregulares',
        description: 'Pelar las patatas y cortarlas en lascas finas e irregulares (no en dados gruesos ni en láminas chips). Salar ligeramente.',
        artisanTip: 'El corte irregular permite que las partes más finas se deshagan formando crema mientras las más gruesas conservan mordida.'
      },
      {
        stepNumber: 2,
        title: 'Pochado Lento en Abundante AOVE',
        description: 'Sumergir las patatas y la cebolla en abundante AOVE a temperatura media-baja (unos 130°C) durante 25 a 30 minutos hasta que queden tiernas y confitadas sin dorarse.',
        artisanTip: 'Pochar, no freír: la patata debe quedar blanda como mantequilla y la cebolla dulce y transparente.'
      },
      {
        stepNumber: 3,
        title: 'Reposo en el Huevo Batido',
        description: 'Escurrir el exceso de aceite del pochado. Batir los huevos en bol hondo sin espumar en exceso. Verter las patatas y cebolla calientes sobre el huevo y dejar reposar 5 minutos.',
        artisanTip: 'El reposo de 5 minutos permite que la patata absorba el huevo templado, asegurando una textura cohesionada y fundente.'
      },
      {
        stepNumber: 4,
        title: 'El Cuajado Rápido y la Vuelta con Plato',
        description: 'Calentar una sartén antiadherente con unas gotas de aceite a fuego vivo. Verter la mezcla. Remover 20 segundos para sellar el fondo. Dar la vuelta con un plato llano y cuajar el otro lado durante 40 segundos.',
        artisanTip: 'La sartén debe estar muy caliente para crear una piel fina exterior mientras el centro permanece líquido y meloso.'
      }
    ],
    processPhotos: [
      {
        title: 'Lascas de Patata Confitándose en AOVE',
        subtitle: 'El pochado paciente sin que dore',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Patatas y cebolla dulce bañadas en aceite de oliva virgen extra caliente.'
      },
      {
        title: 'La Fusión con Huevos Camperos',
        subtitle: 'El reposo sagrado de cinco minutos',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La patata confitada empapándose de la yema amarilla intensa.'
      },
      {
        title: 'El Corte de la Tortilla Melosa',
        subtitle: 'La yema fluida asomando en el plato',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pintxo de tortilla recién cuajado en barra de taberna con pan crujiente.'
      }
    ],
    culinaryTerms: [
      { term: 'Pochar / Confitar', definition: 'Cocer patatas sumergidas en aceite a fuego suave para ablandarlas sin que adquieran color tostado ni costra dura.' },
      { term: 'Punto Babé', definition: 'Término culinario que designa el interior de la tortilla cuando permanece semilíquido y cremoso sin llegar a cuajar en seco.' },
      { term: 'Patata Agria', definition: 'Variedad de patata amarilla de piel fina con bajo porcentaje de azúcares y alto contenido en almidón, idónea para tortilla española.' }
    ],
    pairing: {
      beverage: 'Caña de Cerveza Bien Tirada o Copa de Vino Tinto Ribera del Duero Joven',
      regionDO: 'Tradición de taberna peninsular',
      note: 'El amargor fresco y el carbónico de la cerveza o la acidez de la fruta roja limpian la untuosidad de la patata y la yema de huevo.'
    },
    culturalRitual: {
      title: 'El Pincho de Media Mañana en la Barra',
      description: 'A las once de la mañana en cualquier pueblo o ciudad de España, la barra de la taberna se llena de parroquianos que piden su pincho de tortilla recién hecha con pan y un café o caña.'
    },
    keyPhrase: {
      spanish: '«Un pincho de tortilla de patatas al punto meloso con un trozo de pan, por favor.»',
      english: 'A slice of Spanish potato omelette on the runny side with bread, please.',
      phonetic: 'oon PEEN-choh deh tohr-TEE-lyah deh pah-TAH-tahs ahl POON-toh meh-LOH-soh'
    }
  },
  {
    id: 'gilda-donostiarra',
    name: 'Gilda Donostiarra y Pintxos de Barra',
    spanishTitle: 'La banderilla picante, salada y verde inventada en el bar Vallés de San Sebastián',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'San Sebastián (Donostia / Gipuzkoa)',
    originBadge: 'RAÍZ MUNICIPAL · SAN SEBASTIÁN',
    historicalRoot: 'Creada en el histórico Bar Vallés de San Sebastián en 1946 inspirada en la película de Rita Hayworth.',
    historyAndOrigins: {
      eraOrCentury: 'Año 1946 · Bar Casa Vallés en San Sebastián (Donostia)',
      narrative: 'La gilda es el primer "pintxo" con nombre propio de la historia de la gastronomía vasca y el origen del ritual moderno de tapeo en las barras de San Sebastián. En 1946, en el bar Casa Vallés de la Parte Vieja donostiarra, un cliente apodado "Txepetxa" comenzó a ensartar en un palillo de madera tres elementos que el tabernero servía como aperitivo por separado: una aceituna manzanilla sin hueso, dos piparras encurtidas de Ibarra ("guindillas de Ibarra") y un lomo de anchoa curada en salazón del Cantábrico bañado en aceite. Coincidiendo con el estreno en los cines de la célebre película "Gilda" protagonizada por Rita Hayworth, los clientes bautizaron la banderilla con el nombre del personaje por ser "verde, salada y un poco picante".',
      culturalEvolution: 'De invento espontáneo de taberna a reina indiscutible de las barras donostiarras y símbolo del tapeo vasco en el mundo entero.',
      anecdoteOrLegend: 'La etiqueta del bar dictamina comer la gilda de un solo bocado entero: meter en la boca la aceituna, la anchoa y la piparra al mismo tiempo para que la explosión salina, ácida y carnosa estalle simultáneamente en las papilas gustativas.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Gildas_en_Donostia.jpg',
    imageAlt: 'Gildas donostiarras ensartadas en palillo con aceituna verde, piparra y anchoa del Cantábrico',
    imageCaption: 'Gilda donostiarra original con piparra de Ibarra, anchoa del Cantábrico y aceituna manzanilla',
    photoTag: 'SAN SEBASTIÁN · PARTE VIEJA Y EL PRIMER PINTXO DE LA HISTORIA',
    description: 'El pintxo más famoso del País Vasco ensartado en palillo de madera: aceituna verde manzanilla, dos piparras encurtidas tiernas de Ibarra y un lomo de anchoa del Cantábrico en salazón aliñada con AOVE.',
    ingredients: [
      '12 aceitunas verdes manzanilla deshuesadas de calidad',
      '24 piparras o guindillas encurtidas de Ibarra con I.G.P.',
      '12 lomos de anchoas del Cantábrico en aceite de oliva',
      'AOVE virgen extra de sabor suave',
      '12 palillos de madera de bambú'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Selección de la Piparra de Ibarra',
        description: 'Elegir piparras de piel finísima, tiernas y de picor suave y agradable, cortando el rabillo si fuera necesario.',
        artisanTip: 'La piparra de Ibarra protegida se distingue por no picar en exceso y tener una carne carnosa y suave sin fibras duras.'
      },
      {
        stepNumber: 2,
        title: 'Drenado y Limpieza de la Anchoa',
        description: 'Utilizar anchoas artesanales del mar Cantábrico desaladas a mano y envasadas en aceite. Retirar cualquier resto de espina.',
        artisanTip: 'El lomo de anchoa debe ser flexible y de color marrón rojizo oscuro con brillo natural.'
      },
      {
        stepNumber: 3,
        title: 'El Ensartado en el Palillo',
        description: 'Ensartar en el palillo una aceituna manzanilla, doblar la primera piparra, ensartar el lomo de anchoa envolviendo la piparra y rematar con la segunda piparra.',
        artisanTip: 'La disposición debe ser compacta y simétrica para que quepa cómodamente en la boca de una sola vez.'
      },
      {
        stepNumber: 4,
        title: 'Baño de Aceite Virgen Extra',
        description: 'Colocar las banderillas ordenadas en una bandeja y regar con un hilo generoso de AOVE virgen extra para amalgamar los sabores.',
        artisanTip: 'Servir a temperatura ambiente; nunca excesivamente frías de la nevera para que la grasa de la anchoa no esté cuajada.'
      }
    ],
    processPhotos: [
      {
        title: 'Piparras de Ibarra y Anchoas del Cantábrico',
        subtitle: 'La trinidad del sabor donostiarra',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Guindillas encurtidas tiernas y anchoas de salazón listas para ensartar.'
      },
      {
        title: 'El Ensartado Manual en Palillo',
        subtitle: 'El montaje rápido de la banderilla',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La aceituna, la anchoa y las piparras formando el trío icónico de 1946.'
      },
      {
        title: 'Bandeja de Gildas en la Barra',
        subtitle: 'El aperitivo verde, salado y picante',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Gildas bañadas en aceite virgen extra en la barra del bar Casa Vallés.'
      }
    ],
    culinaryTerms: [
      { term: 'Piparra de Ibarra', definition: 'Guindilla autóctona vasca ("Ibarrako Piparrak") de piel tierna, color amarillo verdoso y picor suave conservada en vinagre de vino blanco.' },
      { term: 'Pintxo', definition: 'Porción pequeña de comida tradicionalmente ensartada en un palillo de madera característica de los bares y tabernas del País Vasco.' },
      { term: 'Poteo / Txikiteo', definition: 'Costumbre vasca de ir en cuadrilla de bar en bar tomando un trago de vino ("txikito") o zurito y un pintxo en cada parada.' }
    ],
    pairing: {
      beverage: 'Vino Txakoli de Getaria Escanciado en Vaso o Vermú Rojo de Grifo',
      regionDO: 'D.O. Getariako Txakolina',
      note: 'El chasquido ácido del Txakoli o el dulzor botánico del vermú limpia instantáneamente el vinagre y la salinidad de la anchoa.'
    },
    culturalRitual: {
      title: 'El Bocado Único en la Parte Vieja',
      description: 'El ritual del donostiarra consiste en comer la gilda entera de un solo bocado antes de dar el primer trago al zurito de cerveza o al txakoli.'
    },
    keyPhrase: {
      spanish: '«Un par de gildas donostiarras y un zurito de cerveza fresca.»',
      english: 'A couple of San Sebastián gildas and a small draft beer.',
      phonetic: 'oon PAHR deh HEEL-dahs doh-nohs-TYAH-rrahs ee oon thoo-REE-toh'
    }
  },
  {
    id: 'migas-pastor',
    name: 'Migas del Pastor con Chorizo, Panceta y Uvas',
    spanishTitle: 'El pan duro humedecido, el ajo dorado en sartén de hierro y el contraste dulce de la uva',
    category: 'Cuchara y Puchero',
    originType: 'panhispanic',
    originLocation: 'Tradición Pastoril (Castilla, Aragón, Extremadura y La Mancha)',
    originBadge: 'PATRIMONIO PASTORIL PANHISPÁNICO',
    historicalRoot: 'Plato trashumante milenario transmitido por las cañadas reales de la Mesta desde la Edad Media.',
    historyAndOrigins: {
      eraOrCentury: 'Edad Media · Cañadas Reales y Rediles de la Mesta',
      narrative: 'Las migas del pastor constituyen la mayor muestra de ingenio culinario y aprovechamiento de la historia rural española. Durante los meses de trashumancia por las Cañadas Reales que cruzaban la península desde las cumbres leonesas y pirenaicas hasta las dehesas extremeñas y manchegas, los pastores llevaban en sus zurrones hogazas de pan de trigo candeal que, con el paso de las semanas, se volvían duras como la piedra. Para aprovecharlas, idearon "pellizcarlas" o picarlas con la navaja la noche anterior y envolverlas en un paño húmedo con agua y sal para devolverles la elasticidad. A la mañana siguiente, encendían lumbre de sarmientos en el campo y rehogaban el pan en sartén de hierro con la grasa de la panceta ibérica, chorizo y ajos enteros. Para contrarrestar la grasa y el pimentón, incorporaban uvas frescas de temporada recién cortadas de las cepas, logrando un contraste agridulce y fresco insuperable.',
      culturalEvolution: 'De comida de pastor en el redil a manjar tradicional celebrado en ferias gastronómicas y reuniones familiares en días lluviosos.',
      anecdoteOrLegend: 'En los pueblos castellanos y aragoneses pervive el refrán: "Las migas del pastor, para el día nublado y con lluvia mejor", pues era la excusa perfecta para quedarse al resguardo del fogón removiendo la sartén durante horas.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Migas_de_pastor.jpg',
    imageAlt: 'Sartén de migas del pastor doradas con panceta crujiente, chorizo y uvas blancas frescas',
    imageCaption: 'Migas del pastor tradicionales salteadas con ajo, chorizo y uvas moscatel',
    photoTag: 'ESPAÑA · TRASHUMANCIA Y SARTÉN DE HIERRO A LA LUMBRE',
    description: 'Comida pastoril histórica elaborada a base de migas de pan candeal duro humedecidas con agua y sal, rehogadas pacientemente en sartén de hierro con grasa de panceta, ajos y pimentón, servidas con uvas frescas.',
    ingredients: [
      '500 g de pan de hogaza candeal duro de 2 o 3 días picado en migas finas',
      '150 ml de agua templada con una cucharada de sal fina',
      '200 g de panceta fresca de cerdo ibérico en dados',
      '2 chorizos frescos semicurados en rodajas',
      '1 cabeza de ajos machacados enteros con piel',
      '1 cucharadita de pimentón de la Vera dulce',
      '100 ml de AOVE virgen extra',
      'Un racimo de uvas blancas frescas (variedad Moscatel o Aledo)'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'El Picado y Humedecido Nocturno',
        description: 'Picar el pan de hogaza duro en trocitos pequeños con cuchillo o con los dedos. Salpicar con el agua templada con sal, mezclar bien con las manos y envolver en un paño limpio durante toda la noche.',
        artisanTip: 'El pan debe quedar húmedo de forma uniforme pero no empapado, para que al freírse se dore por fuera y quede tierno por dentro.'
      },
      {
        stepNumber: 2,
        title: 'Fritura de Sacramentos en Sartén de Hierro',
        description: 'En una sartén de hierro amplia con AOVE, dorar a fuego medio los ajos enteros machacados, la panceta y el chorizo hasta que estén bien crujientes. Retirar y reservar los tropiezos.',
        artisanTip: 'La grasa aromatizada con los ajos y el pimentón del chorizo que queda en la sartén es el alma del plato.'
      },
      {
        stepNumber: 3,
        title: 'El Volteo Continuo de las Migas',
        description: 'En esa misma grasa a fuego medio-bajo, añadir el pimentón y de inmediato las migas humedecidas. Remover ininterrumpidamente con una rasera o cuchara de madera durante 25 a 30 minutos.',
        artisanTip: 'No parar de remover y raspar el fondo: las migas deben soltarse grano a grano y adquirir un tono dorado brillante sin quemarse.'
      },
      {
        stepNumber: 4,
        title: 'Integración y Contraste con Uvas',
        description: 'Reincorporar la panceta, el chorizo y los ajos reservados a la sartén. Mezclar un minuto al calor y servir acompañada de granos de uva fresca lavada.',
        artisanTip: 'El mordisco a la uva fría explota en jugo dulce que limpia el paladar de la grasa y el pimentón del pan frito.'
      }
    ],
    processPhotos: [
      {
        title: 'El Picado y Reposo del Pan en Paño',
        subtitle: 'La hidratación lenta nocturna',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Migas de pan candeal duro humedecidas envueltas en paño de lino.'
      },
      {
        title: 'El Rehogado con la Rasera en Sartén',
        subtitle: 'Media hora de volteo continuo sin parar',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Las migas soltándose y dorándose con la grasa de la panceta.'
      },
      {
        title: 'Sartén de Migas Servidas con Uvas',
        subtitle: 'El contraste dulce y salado pastoril',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servidas al centro de la mesa en sartén de hierro con uvas frescas.'
      }
    ],
    culinaryTerms: [
      { term: 'Rasera', definition: 'Paleta metálica ancha y plana con mango largo utilizada tradicionalmente para voltear y cortar las migas en la sartén de hierro.' },
      { term: 'Sacramentos', definition: 'Nombre popular que reciben los acompañamientos cárnicos de cerdo (panceta, chorizo, torreznos) que enriquecen platos de legumbres y migas.' },
      { term: 'Trashumancia', definition: 'Desplazamiento estacional del ganado ovino a lo largo de las cañadas reales en busca de pastos de montaña en verano y de llanura en invierno.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Joven de Maceración Carbónica de La Rioja o Somontano',
      regionDO: 'D.O.Ca. Rioja',
      note: 'Vinos frescos con aroma a fruta roja viva y tanino amable que acompañan la textura quebradiza del pan y el chorizo.'
    },
    culturalRitual: {
      title: 'La Sartén Compartida con Cuchara',
      description: 'Siguiendo la costumbre pastoril de campo abierto, todos los comensales se sitúan alrededor de la sartén con cuchara de madera y comen por turnos sin plato individual.'
    },
    keyPhrase: {
      spanish: '«Una sartén de migas del pastor con sus torreznos y un buen racimo de uvas.»',
      english: 'A pan of shepherd migas with pork cracklings and a bunch of grapes.',
      phonetic: 'OO-nah sahr-TEHN deh MEE-gahs dehl pahs-TOHR kohn soo toh-RREHTH-nohs'
    }
  },
  {
    id: 'croquetas-ibericas',
    name: 'Croquetas Cremosas de Jamón Ibérico de Bellota',
    spanishTitle: 'La bechamel sedosa infusionada con hueso de jamón, el rebozado fino y el interior casi líquido',
    category: 'Tapeo y Bocados',
    originType: 'panhispanic',
    originLocation: 'Tradición Panhispánica de Tabernas y Hogares',
    originBadge: 'PATRIMONIO PANHISPÁNICO',
    historicalRoot: 'Aclimatación española en el siglo XIX de la técnica francesa de aprovechamiento con bechamel.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Tabernas y hogares familiares de toda España',
      narrative: 'Aunque el término croqueta procede del francés "croquer" (crujir), en ningún lugar del mundo ha alcanzado la dimensión mística y el fervor popular que ostenta en España. En las casas y tabernas españolas del siglo XIX, la croqueta nació como el supremo arte del aprovechamiento ("cocina de sobras"): los restos de jamón ibérico curado y las viandas del cocido se picaban finísimamente y se amalgamaban en una bechamel cocinada durante más de cuarenta minutos con leche entera fresca, infusionada previamente con un hueso de jamón para conferirle un fondo profundo y salino. A diferencia de las versiones de otros países elaboradas con patata o bechameles densas y rígidas, la croqueta tradicional española se distingue por una masa fluida, aérea y cremosa al límite de lo manipulable, envuelta en un rebozado finísimo de huevo y pan rallado que cruje suavemente al morder, liberando una nube láctea caliente de jamón ibérico que se funde en la boca.',
      culturalEvolution: 'Pilar absoluto del tapeo español celebrado anualmente el 16 de enero en el Día Internacional de la Croqueta.',
      anecdoteOrLegend: 'En la memoria sentimental española, la croqueta de la abuela o de la madre es inalcanzable por definición; en los concursos gastronómicos del país, los jueces valoran que la croqueta sea tan fluida que, al posarla sobre una superficie plana, tiemble como un flan sin romperse.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Croquetas-Jam%C3%B3n-Riofr%C3%ADo.jpg',
    imageAlt: 'Plato de croquetas de jamón ibérico doradas y crujientes con una de ellas abierta mostrando el interior cremoso',
    imageCaption: 'Croquetas caseras de jamón 100% ibérico de bellota con bechamel sedosa y rebozado fino',
    photoTag: 'ESPAÑA · LA REINA DE LA BARRA DE TABERNA Y LA BECHAMEL',
    description: 'La reina indiscutible del tapeo en barra: croquetas caseras elaboradas con bechamel infusionada con hueso de jamón y taquitos de jamón ibérico de bellota, con corteza crujiente y corazón semilíquido.',
    ingredients: [
      '200 g de jamón ibérico de bellota picado muy fino a cuchillo',
      '1 hueso de jamón ibérico limpio para infusionar',
      '1 litro de leche entera fresca de vaca',
      '90 g de mantequilla pura de vaca o AOVE suave',
      '90 g de harina de trigo candeal',
      'Una pizca de nuez moscada recién rallada',
      'Huevos camperos y pan rallado fino para el rebozado',
      'Abundante AOVE para freír'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Infusión de Leche con Hueso Ibérico',
        description: 'Hervir la leche fresca con el hueso de jamón ibérico a fuego muy suave durante 15 minutos. Apagar el fuego, tapar y dejar templar para que la leche se impregne de los aromas de la dehesa.',
        artisanTip: 'Infusionar la leche es el secreto para que toda la masa sepa a jamón ibérico y no solo a leche con harina.'
      },
      {
        stepNumber: 2,
        title: 'Roux Dorado y Cocción Prolongada de la Bechamel',
        description: 'En una cazuela de fondo grueso, derretir la mantequilla y sofreír el jamón picado 1 minuto. Añadir la harina y cocinar 3 minutos sin parar de remover. Verter la leche infusionada colada poco a poco batiendo enérgicamente.',
        artisanTip: 'Cocer la bechamel a fuego medio-bajo durante 25 a 30 minutos removiendo siempre; cuanto más se trabaje, más sedosa y menos pastosa quedará.'
      },
      {
        stepNumber: 3,
        title: 'Reposo en Frío con Film a Piel',
        description: 'Añadir la nuez moscada y probar de sal (el jamón suele aportar la sal necesaria). Verter la masa en una bandeja plana y cubrir con papel film en contacto directo con la superficie. Refrigerar al menos 12 horas.',
        artisanTip: 'El reposo frío prolongado solidifica la grasa de la mantequilla, permitiendo bolear la masa líquida con facilidad.'
      },
      {
        stepNumber: 4,
        title: 'Boleado, Rebozado Fino y Fritura a 180°C',
        description: 'Formar porciones ovaladas con dos cucharas o con las manos enharinadas. Pasar por huevo batido y pan rallado fino. Freír en abundante AOVE muy caliente durante 1 minuto hasta dorar. Escurrir en rejilla.',
        artisanTip: 'Freír en pequeñas tandas de tres o cuatro croquetas para no bajar la temperatura del aceite y evitar que revienten.'
      }
    ],
    processPhotos: [
      {
        title: 'El Sofrito de Jamón Ibérico y Roux',
        subtitle: 'La base aromática de la bechamel',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Taquitos de jamón ibérico dorándose con la harina de trigo.'
      },
      {
        title: 'Boleado Manual de la Masa Fina',
        subtitle: 'El empanado con huevo campero y pan rallado',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Porciones ovaladas pasadas por pan fino antes de la sartén.'
      },
      {
        title: 'Croqueta Abierta con Interior Fluido',
        subtitle: 'La cremosidad láctea que enamora a España',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servidas recién fritas en plato blanco en la barra de la taberna.'
      }
    ],
    culinaryTerms: [
      { term: 'Roux', definition: 'Mezcla cocinada a fuego suave de partes iguales de grasa (mantequilla o aceite) y harina que sirve de base ligante a la bechamel.' },
      { term: 'Film a Piel', definition: 'Técnica de colocar film transparente pegado directamente a la superficie de una crema caliente para evitar que se forme costra al enfriar.' },
      { term: 'Bolear', definition: 'Dar forma redondeada u ovalada a las porciones de masa de croqueta antes de pasarlas por el huevo y pan rallado.' }
    ],
    pairing: {
      beverage: 'Caña de Cerveza Rubia Tirada con Dos Dedos de Espuma o Copa de Manzanilla de Sanlúcar',
      regionDO: 'Cerveza artesana o D.O. Manzanilla de Sanlúcar',
      note: 'El amargor del lúpulo o la salinidad punzante de la manzanilla cortan la untuosidad grasa de la bechamel láctea de manera magistral.'
    },
    culturalRitual: {
      title: 'La Ronda de Croquetas en la Barra',
      description: 'El ritual del tapeo español: pedir media ración de croquetas calientes para la mesa apoyados en la barra mientras se espera el plato principal.'
    },
    keyPhrase: {
      spanish: '«Media ración de croquetas de jamón ibérico bien cremosas y dos cañas bien tiradas.»',
      english: 'Half a portion of creamy Iberian ham croquettes and two well-poured draft beers.',
      phonetic: 'MEH-dyah rah-THYOHN deh kroh-KEH-tahs deh hah-MOHN ee-BEH-ree-koh'
    }
  },
  {
    id: 'ensaladilla-espanola',
    name: 'Ensaladilla Rusa Tradicional con Ventresca y Picos',
    spanishTitle: 'La patata confitada, la mayonesa casera montada a mano y la ventresca de bonito del norte',
    category: 'Tapeo y Bocados',
    originType: 'panhispanic',
    originLocation: 'Tradición Panhispánica de Tabernas y Chiringuitos',
    originBadge: 'PATRIMONIO PANHISPÁNICO',
    historicalRoot: 'Adaptación peninsular desde principios del siglo XX de la ensalada del chef Lucien Olivier.',
    historyAndOrigins: {
      eraOrCentury: 'Principios del siglo XX · Tabernas, cafés y chiringuitos de toda España',
      narrative: 'Aunque su nombre alude al cocinero francorruso Lucien Olivier (quien servía una sofisticada ensalada de caza y trufas en el restaurante Hermitage de Moscú en la década de 1860), la ensaladilla que se consume en España es una creación completamente reinterpretada y asimilada en el ADN ibérico. En las tabernas y chiringuitos playeros españoles, la ensaladilla se despojó de carnes aristocráticas y adoptó los grandes pilares de la despensa peninsular: patatas de la huerta cocidas con su piel y aplastadas rústicamente con tenedor para conservar textura (sin llegar a puré), zanahorias dulces, huevo duro campero y lomos nobles de ventresca de bonito del norte en conserva de aceite de oliva. Su ligazón fundamental es una mayonesa casera montada con aceite de oliva virgen extra suave y unas gotas de vinagre de Jerez o limón, servida siempre bien fría acompañada de "picos" o "colines" de pan andaluces para usar a modo de cuchara.',
      culturalEvolution: 'Estandarte supremo de las vitrinas de cristal de todas las barras de bar de España, juzgada con lupa por los mejores críticos gastronómicos.',
      anecdoteOrLegend: 'En Sevilla y Cádiz existe la célebre asociación "ODER" (Observatorio de la Ensaladilla Rusa), cuyos miembros recorren anónimamente las tabernas evaluando la temperatura de servicio, la calidad de la mayonesa y el crujido de los picos que la acompañan.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Ensaladilla%2C_tapa_de_bar.jpg',
    imageAlt: 'Tapa de ensaladilla rusa tradicional montada con lomo de ventresca de bonito y picos de pan',
    imageCaption: 'Ensaladilla rusa tradicional con patata aplastada a mano, ventresca de bonito y picos camperos',
    photoTag: 'ESPAÑA · LA REINA DE LA VITRINA DE BAR Y PICOS CAMPEROS',
    description: 'Icono del aperitivo español: patata y zanahoria cocidas en su punto y chafadas a tenedor, ligadas con mayonesa casera en AOVE, huevo cocido y coronadas con ventresca de bonito y picos de pan.',
    ingredients: [
      '600 g de patatas de variedad Monalisa o agria cocidas con su piel',
      '2 zanahorias medianas cocidas en dados finos',
      '2 huevos grandes de corral cocidos (10 minutos)',
      '150 g de ventresca de bonito del norte en aceite de oliva virgen',
      '50 g de guisantes finos tiernos (opcional tradicional)',
      'Para la Mayonesa Casera: 1 huevo campero a temperatura ambiente, 200 ml de AOVE suave (variedad Arbequina), unas gotas de zumo de limón y sal',
      'Picos o regañás de pan andaluces para acompañar'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Cocción con Piel en Agua con Sal',
        description: 'Lavar las patatas y zanahorias. Cocer enteras con su piel en agua abundante con sal marina durante 25 a 30 minutos hasta que estén tiernas al pincharlas. Dejar templar y pelar con las manos.',
        artisanTip: 'Cocer las patatas con su piel impide que absorban agua en exceso, concentrando su almidón dulce natural.'
      },
      {
        stepNumber: 2,
        title: 'El Chafado Rústico a Tenedor (No Triturar)',
        description: 'En un bol hondo, machacar las patatas aún tibias con un tenedor grande dejando trozos irregulares perceptibles junto con la zanahoria y el huevo duro picado.',
        artisanTip: 'Jamás pasar la patata por batidora eléctrica ni pasapurés: la ensaladilla debe tener mordida y relieve, nunca textura de puré de bebé.'
      },
      {
        stepNumber: 3,
        title: 'Emulsión de la Mayonesa Casera en AOVE',
        description: 'En vaso de batidora, poner el huevo, sal y zumo de limón. Verter el AOVE suave en hilo batiendo desde el fondo sin mover hasta que emulsione en una mayonesa cremosa y brillante.',
        artisanTip: 'Utilizar AOVE de variedad Arbequina o Manzanilla suave para evitar que el amargor del aceite tape el sabor de la patata y la ventresca.'
      },
      {
        stepNumber: 4,
        title: 'Ligazón Suave y Coronación con Ventresca',
        description: 'Unir la mayonesa con la mezcla de patatas tibia para que absorba el aderezo. Refrigerar 2 horas. Servir en porciones coronadas con láminas nobles de ventresca de bonito y picos de pan.',
        artisanTip: 'Integrar la mayonesa con la patata templada permite que el aceite perfume el corazón del tubérculo.'
      }
    ],
    processPhotos: [
      {
        title: 'Patata Cocida Chafada a Mano con Tenedor',
        subtitle: 'La textura rústica sin triturar',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Patatas y zanahorias desgranadas con tenedor en bol tradicional.'
      },
      {
        title: 'Emulsión de Mayonesa Casera en AOVE',
        subtitle: 'La ligazón cremosa con toque de limón',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Mayonesa montada a mano con aceite de oliva virgen extra suave.'
      },
      {
        title: 'Tapa de Ensaladilla con Ventresca y Picos',
        subtitle: 'El clásico de las terrazas al sol',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servida con picos camperos andaluces en la barra de un chiringuito.'
      }
    ],
    culinaryTerms: [
      { term: 'Chafar a Tenedor', definition: 'Acción de aplastar la patata cocida con las puntas de un tenedor para romperla en lascas irregulares sin licuarla.' },
      { term: 'Picos Camperos', definition: 'Colines cortos de pan tostado crujiente de masa bregada típicos de Andalucía usados tradicionalmente para comer ensaladilla.' },
      { term: 'Ventresca de Bonito', definition: 'La parte triangular inferior del vientre del bonito del norte, la más jugosa, grasa y delicada del pescado en conserva.' }
    ],
    pairing: {
      beverage: 'Cerveza Rubia Fría, Copa de Fino de Jerez o Vermú Blanco con Hielo',
      regionDO: 'D.O. Jerez-Xérès-Sherry',
      note: 'La acidez punzante y salina del vino fino o la frescura de la cerveza limpia la densidad untuosa de la mayonesa tras cada bocado.'
    },
    culturalRitual: {
      title: 'La Cuchara de Pico en el Chiringuito',
      description: 'La costumbre popular prohíbe el tenedor: se coge un pico crujiente con los dedos y se utiliza para cargar una porción de ensaladilla directamente a la boca.'
    },
    keyPhrase: {
      spanish: '«Una tapa de ensaladilla rusa con ventresca de bonito y bastantes picos camperos.»',
      english: 'A tapa of Spanish potato salad with tuna belly and plenty of breadsticks.',
      phonetic: 'OO-nah TAH-pah deh ehn-sah-lah-DEE-lyah ROO-sah kohn behn-TREHS-kah'
    }
  }
];

