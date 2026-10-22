import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const MEDITERRANEO_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'paella-valenciana',
    name: 'Paella Valenciana Tradicional',
    spanishTitle: 'El rito dominical del fuego de leña de naranjo y el grano suelto',
    category: 'Arroces',
    originType: 'city',
    originLocation: 'Valencia (Comunitat Valenciana)',
    originBadge: 'RAÍZ MUNICIPAL · VALENCIA',
    historicalRoot: 'Nacida en los arrozales de la Albufera de Valencia entre los siglos XV y XVIII.',
    historyAndOrigins: {
      eraOrCentury: 'Siglos XV al XVIII · Marjales de la Albufera de Valencia',
      narrative: 'La paella valenciana es el plato identitario más universal y debatido de España. Su cuna exacta son las huertas y marjales que rodean el Parque Natural de la Albufera de Valencia, donde los labradores y pescadores andalusíes introdujeron el cultivo del arroz en la Edad Media. En sus orígenes campesinos, los jornaleros cocinaban el grano en una sartén ancha y plana de hierro ("la paella") sobre una fogata hecha con ramas secas de poda de naranjo. Utilizaban los ingredientes que tenían al alcance de la mano en el campo: conejo de monte, pollo de corral, judías verdes planas ("ferraura"), alubias blancas grandes y mantecosas ("garrofó") y tomate rallado. El fuego vivo de madera de naranjo no solo aportaba un aroma cítrico inigualable, sino que permitía controlar la intensidad calórica exacta para evaporar el caldo sin revolver el grano, logrando que el arroz quede seco, suelto y con esa costra crujiente y caramelizada en el fondo llamada "socarrat".',
      culturalEvolution: 'Declarada Bien de Interés Cultural Inmaterial, la receta canónica valenciana está protegida y descarta expresamente el chorizo, los guisantes o la cebolla.',
      anecdoteOrLegend: 'El ritual dominical valenciano dicta que la paella se cocina al aire libre por el anfitrión para toda la familia y se come directamente del recipiente metálico con cucharas de madera de boj, avanzando cada comensal desde el borde hacia el centro en su propio sector triangular sin invadir el del vecino.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Pa%C3%ABlla_valenciana_tradicional_i_casera_%28Valencia%2C_Spain%29_Pa%C3%ABlla_traditionnelle_valencienne_%28Valencia%29_Pa%C3%ABlla_tradicional_valenciana_%28Valencia%29.JPG',
    imageAlt: 'Paella valenciana tradicional cocinada a leña con pollo, conejo, garrofó y romero',
    imageCaption: 'Paella valenciana canónica a fuego vivo de naranjo con grano bomba suelto y socarrat',
    photoTag: 'VALENCIA · LA ALBUFERA Y EL FUEGO DE NARANJO',
    description: 'El icono por excelencia de la cocina ibérica: arroz bomba cultivado en la Albufera de Valencia, cocinado en paella ancha con pollo de corral, conejo, garrofó, judía verde plana y azafrán en hebra, con el crujiente fondo caramelizado del socarrat.',
    ingredients: [
      '400 g de arroz Bomba o Senia con D.O. Arroz de Valencia',
      '500 g de pollo de corral troceado',
      '400 g de conejo de campo troceado',
      '200 g de judía verde plana (ferraura / bajoqueta)',
      '100 g de alubia garrofó valenciana gigante',
      '1 tomate maduro grande rallado',
      'Hebras de azafrán natural tostado',
      '1 ramita de romero fresco silvestre',
      'Agua mineral, AOVE y sal marina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Dorado Lento de las Carnes',
        description: 'En el centro de la paella nivelada con AOVE y un pellizco de sal perimetral, dorar concienzudamente el pollo y el conejo a fuego medio hasta que adquieran un color tostado uniforme.',
        artisanTip: 'La carne debe quedar bien dorada para que los jugos caramelizados en el fondo de metal confieran sabor y color oscuro al caldo posterior.'
      },
      {
        stepNumber: 2,
        title: 'Sofrito de Verduras Autóctonas',
        description: 'Apartar la carne hacia los bordes de la paella. En el centro, sofreír la judía plana (ferraura) y el garrofó. Añadir el tomate maduro rallado y cocinar hasta que pierda el agua.',
        artisanTip: 'El garrofó no debe romperse; su mantecosidad absorbe los aromas cárnicos y enriquece el fondo.'
      },
      {
        stepNumber: 3,
        title: 'Infusión del Caldo hasta los Remaches',
        description: 'Verter agua hasta sobrepasar los remaches de las asas metálicas. Añadir el azafrán en hebra y cocinar a fuego vivo durante 15 minutos para extraer la sustancia de las carnes.',
        artisanTip: 'El nivel de los remaches de las asas sirve de indicador milenario para medir la cantidad exacta de caldo antes de incorporar el cereal.'
      },
      {
        stepNumber: 4,
        title: 'El Caballón de Arroz y Creación del Socarrat',
        description: 'Trazar una línea recta diagonal de arroz cruzando la paella (el "caballón"). Distribuir uniformemente con la paleta sin remover nunca más. Cocinar 8 minutos a fuego fuerte, 8 minutos a fuego suave y 2 minutos finales a fuego vivo para tostar el socarrat.',
        artisanTip: 'Escuchar el chisporroteo seco del arroz al final: el olor a tostado limpio anuncia que el socarrat está en su punto de caramelo sin quemarse.'
      }
    ],
    processPhotos: [
      {
        title: 'El Fuego de Leña de Naranjo',
        subtitle: 'Llamas crepitantes bajo la chapa de hierro',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La leña de naranjo aporta una combustión limpia, calor envolvente y sutil aroma cítrico.'
      },
      {
        title: 'El Caballón Diagonal de Arroz Bomba',
        subtitle: 'El reparto canónico del grano en el caldo',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85',
        caption: 'El arroz se vierte cruzando la paella antes de repartirse suavemente.'
      },
      {
        title: 'El Socarrat Dorado Caramelizado',
        subtitle: 'La costra crujiente más codiciada',
        imageUrl: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=85',
        caption: 'Capa inferior crujiente separándose limpiamente del fondo de hierro con cuchara de madera.'
      }
    ],
    culinaryTerms: [
      { term: 'Socarrat', definition: 'Capa fina de arroz caramelizada y crujiente que se forma en el fondo de la paella gracias a la grasa y azúcares tostados a fuego vivo en los últimos minutos.' },
      { term: 'Garrofó', definition: 'Alubia gigante de piel fina y textura sumamente cremosa cultivada en la huerta valenciana, elemento irremplazable de la paella auténtica.' },
      { term: 'Caballón', definition: 'Línea recta diagonal que forma el grano de arroz seco al verterse sobre el caldo hirviendo para medir la proporción justa sin necesidad de balanza.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Joven Bobal o Blanco de Merseguera',
      regionDO: 'D.O. Utiel-Requena / D.O. Valencia',
      note: 'Vinos de uva autóctona Bobal con fruta roja viva y tanino amable que refrescan la potencia del azafrán y las carnes doradas.'
    },
    culturalRitual: {
      title: 'La Cuchara de Madera y la Sobremesa',
      description: 'La paella no se emplata en platos individuales cuando se come en familia: la paella se coloca en el centro sobre un salvamanteles de esparto y cada comensal come de su sector con cuchara de madera.'
    },
    keyPhrase: {
      spanish: '«Una paella valenciana auténtica a leña con su buen socarrat crujiente, por favor.»',
      english: 'An authentic wood-fired Valencian paella with crispy socarrat on the bottom, please.',
      phonetic: 'OO-nah pah-EH-lyah vah-lehn-THYAH-nah ow-TEHN-tee-kah ah LEH-nyah'
    }
  },
  {
    id: 'paparajotes-murcianos',
    name: 'Paparajotes Murcianos en Hoja de Limonero',
    spanishTitle: 'La hoja de cítrico de la huerta envuelta en masa frita, azúcar y canela',
    category: 'Dulces y Postres',
    originType: 'city',
    originLocation: 'Murcia (Región de Murcia)',
    originBadge: 'RAÍZ MUNICIPAL · MURCIA',
    historicalRoot: 'Receta de origen sefardí y morisco adaptada en las barracas de la huerta del Segura.',
    historyAndOrigins: {
      eraOrCentury: 'Herencia Morisca y Sefardí · Fiestas de Primavera de Murcia',
      narrative: 'El paparajote es el postre más singular y poético de la huerta de Murcia. Heredero de los buñuelos de sartén de los moriscos y sefardíes que poblaron el valle del río Segura, su genialidad radica en el uso de la hoja del limonero silvestre. En primavera, cuando los huertos de cítricos que rodean Murcia florecen y perfuman el aire con el azahar, se seleccionan hojas tiernas de limonero verde oscuro pero no coriáceas. Las hojas se lavan y se rebozan enteras en una masa esponjosa de harina de trigo, leche, huevo batido, ralladura de limón y un toque de gaseosa o levadura. Al freírse en aceite de oliva hirviendo, la hoja de limonero no se quema, sino que suda y desprende todos sus aceites esenciales cítricos en el interior de la masa crujiente. Al salir del fuego, se rebozan calientes en azúcar blanco y canela en polvo.',
      culturalEvolution: 'Emblema indiscutible de las Barracas en las Fiestas de Primavera y la Feria de Septiembre de Murcia.',
      anecdoteOrLegend: 'El rito de iniciación del forastero en Murcia: los huertanos gastan siempre la broma cariñosa al viajero que prueba un paparajote por primera vez dejándole morder la hoja entera. La regla sagrada que todo murciano conoce es que la hoja del limonero NO se come: actúa solo como vehículo aromático; se muerde la masa dulce exterior y la hoja de limonero desnuda se deja en el plato.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Paparajotes_IMGP9570.JPG',
    imageAlt: 'Paparajotes murcianos dorados espolvoreados con azúcar y canela en plato rústico',
    imageCaption: 'Paparajotes murcianos tradicionales fritos en hoja de limonero de la huerta',
    photoTag: 'MURCIA · HUERTA DEL SEGURA Y AROMAS DE HOJA DE LIMONERO',
    description: 'Postre emblemático de la huerta de Murcia: hojas frescas de limonero rebozadas en masa dulce frita en AOVE, aromatizadas naturalmente por los aceites cítricos de la hoja y rebozadas en azúcar y canela.',
    ingredients: [
      '20 hojas frescas y tiernas de limonero recién cortadas del árbol',
      '2 huevos grandes camperos',
      '200 g de harina de trigo fina',
      '200 ml de leche entera fresca',
      'La ralladura de 1 limón',
      '1 sobre de gaseosa de repostería (o media cucharadita de bicarbonato)',
      'AOVE para freír en abundancia',
      'Azúcar blanco y canela en polvo para rebozar'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Selección y Lavado de Hojas de Limonero',
        description: 'Elegir hojas tiernas, de color verde brillante, ni demasiado jóvenes (que se ablandan en exceso) ni viejas (que son duras). Lavar minuciosamente y secar con paño una por una.',
        artisanTip: 'Las hojas deben estar completamente secas para que la masa dulce se adhiera uniformemente a ambas caras de la hoja.'
      },
      {
        stepNumber: 2,
        title: 'Preparación de la Masa Fluida Aromatizada',
        description: 'Batir los huevos con la leche y la ralladura de limón. Añadir la harina tamizada con la gaseosa batiendo hasta lograr una masa lisa, densa y sin grumos, que nape la hoja.',
        artisanTip: 'La masa debe tener la consistencia exacta de una crema espesa para cubrir la hoja sin escurrirse antes de tocar el aceite.'
      },
      {
        stepNumber: 3,
        title: 'Fritura Rápida a 180°C',
        description: 'Tomar la hoja de limonero por el rabillo, sumergirla en la masa y pasarla de inmediato al perol con abundante AOVE muy caliente. Dorar 1 minuto por cada lado.',
        artisanTip: 'El calor del aceite hace que los aceites esenciales de la hoja de limonero se vaporicen dentro de la masa, perfumándola desde el interior.'
      },
      {
        stepNumber: 4,
        title: 'Rebozado en Azúcar y Canela',
        description: 'Sacar con espumadera, escurrir unos instantes sobre papel secante y rebozar al momento en un plato hondo con mezcla de azúcar y canela en polvo.',
        artisanTip: 'Rebozar siempre mientras la masa esté ardiendo para que el azúcar se adhiera con fuerza a la corteza dorada.'
      }
    ],
    processPhotos: [
      {
        title: 'Hojas Frescas de Limonero Murciano',
        subtitle: 'Seleccionadas en las huertas del río Segura',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Hojas verdes lavadas y secas con intenso aroma a cítrico silvestre.'
      },
      {
        title: 'Rebozado y Fritura Dorada',
        subtitle: 'Burbujeo alegre en aceite de oliva virgen extra',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'La masa sufla alrededor de la hoja adquiriendo un tono dorado crujiente.'
      },
      {
        title: 'Paparajote Rebozado en Azúcar y Canela',
        subtitle: 'El dulce más singular de la huerta',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido caliente en barraca huertana con un vaso de café de puchero.'
      }
    ],
    culinaryTerms: [
      { term: 'Paparajote', definition: 'Dulce tradicional murciano elaborado con masa de buñuelo frita alrededor de una hoja de limonero fresca que aporta perfume cítrico.' },
      { term: 'Barraca Huertana', definition: 'Construcción tradicional de adobe y caña montada en las plazas de Murcia durante las fiestas donde se sirven tapas y paparajotes.' },
      { term: 'Café de Puchero', definition: 'Café infusionado lentamente en olla de barro con canela y corteza de limón, compañero inseparable del paparajote.' }
    ],
    pairing: {
      beverage: 'Vino Dulce de Jumilla o Mistela Murciana',
      regionDO: 'D.O. Jumilla / D.O. Bullas',
      note: 'Las notas a miel, pasas y flores blancas de la mistela potencian los aceites esenciales de la hoja de limonero.'
    },
    culturalRitual: {
      title: 'La Regla de Oro: La Hoja NO se Come',
      description: 'El ritual del paparajote consiste en coger el dulce por el rabillo con los dedos, rasgar la masa tierna con los dientes saboreando la canela y desechar la hoja verde desnuda.'
    },
    keyPhrase: {
      spanish: '«Unos paparajotes recién fritos con azúcar y canela y un café de olla.»',
      english: 'Freshly fried paparajotes with sugar and cinnamon and a pot coffee.',
      phonetic: 'OO-nohs pah-pah-rah-HOH-tehs reh-SYEHN FREE-tohs kohn ah-THOO-kahr'
    }
  },
  {
    id: 'ternasco-aragon',
    name: 'Ternasco de Aragón Asado con Patatas Panaderas',
    spanishTitle: 'La paletilla lechal asada con manteca, ajo y el crujido de la piel fina',
    category: 'Asados y Fuegos',
    originType: 'region',
    originLocation: 'Aragón (Zaragoza, Huesca y Teruel)',
    originBadge: 'ORIGEN REGIONAL · ARAGÓN',
    historicalRoot: 'Primer cordero en España reconocido con Denominación Específica en 1989.',
    historyAndOrigins: {
      eraOrCentury: 'Edad Media · Cañadas reales y pastos del valle del Ebro',
      narrative: 'El ternasco de Aragón es la joya ganadera indiscutible de las tres provincias aragonesas (Zaragoza, Huesca y Teruel). Criado a partir de razas ovinas autóctonas aragonesas (Rasa Aragonesa, Ojinegra de Teruel y Roya Bilbilitana), el ternasco es un cordero joven alimentado con leche materna y cereales naturales, sacrificado con un peso en canal inferior a 12,5 kg y menos de 90 días de vida. El resultado es una carne de color rosa pálido, con un nivel de grasa finamente infiltrada sumamente bajo y un sabor suave que huye del olor bravío de los ovinos viejos. Asado en horno de leña o barro en piezas nobles como la paletilla o la pierna, descansa sobre un lecho de patatas panaderas aromatizadas con ajo, vino blanco de Cariñena y manteca, convirtiéndose en el festín obligado de las fiestas mayores aragonesas.',
      culturalEvolution: 'Fue la primera carne fresca de España en obtener el sello de Denominación Específica (actual I.G.P. Ternasco de Aragón).',
      anecdoteOrLegend: 'En los pueblos del Somontano y el Maestrazgo, el asado de ternasco se reservaba para las fiestas de San Jorge (patrón de Aragón) y las bodas campesinas, donde los vecinos llevaban sus fuentes de barro con el cordero al horno del panadero del pueblo para aprovechar el calor descendente tras la hornada del pan.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Chuletas_de_ternasco%2C_detalle.jpg',
    imageAlt: 'Paletilla de ternasco de Aragón asada al horno con patatas panaderas doradas',
    imageCaption: 'Ternasco de Aragón I.G.P. asado al horno con corteza crujiente y patatas al vino de Cariñena',
    photoTag: 'ARAGÓN · CORDERO JOVEN AUTÓCTONO Y HORNO DE ASADOR',
    description: 'Paletilla o pierna de cordero ternasco con I.G.P. asada lentamente en tartera con manteca, vino blanco noble y ajo sobre cama de patatas panaderas que recogen los jugos del asado.',
    ingredients: [
      '2 paletillas de Ternasco de Aragón con I.G.P.',
      '1 kg de patatas de la tierra peladas en rodajas de 0,5 cm',
      '1 cebolla dulce grande en juliana',
      '4 dientes de ajo y perejil fresco',
      '150 ml de vino blanco seco D.O. Cariñena',
      '50 g de manteca de cerdo ibérica (o AOVE)',
      'Sal marina gorda y pimienta negra'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Preparación de la Cama de Patatas Panaderas',
        description: 'Disponer las rodajas de patatas y cebolla en una bandeja de horno o tartera de barro. Salpimentar, regar con un chorro de vino blanco y AOVE.',
        artisanTip: 'Las patatas se colocan bajo la carne para empaparse de todos los jugos y grasas que el ternasco soltará durante el asado.'
      },
      {
        stepNumber: 2,
        title: 'Sazonado y Untado de Manteca',
        description: 'Hacer ligeras incisiones en la carne de la paletilla. Untar con manteca de cerdo, sal gorda y el majado de ajos y perejil. Colocar sobre las patatas con la piel hacia abajo.',
        artisanTip: 'Asar primero con la piel hacia abajo permite que la carne interior se hidrate con los vapores del vino antes de dorar la piel.'
      },
      {
        stepNumber: 3,
        title: 'Cocción Lenta a 160°C',
        description: 'Hornear a temperatura moderada durante 1 hora y 15 minutos, regando la carne cada 20 minutos con sus propios jugos del fondo.',
        artisanTip: 'El calor pausado funde la fina grasa subcutánea del ternasco dejándolo suave como mantequilla.'
      },
      {
        stepNumber: 4,
        title: 'Volteo y Crujiente a 200°C',
        description: 'Dar la vuelta a las paletillas para que la piel quede hacia arriba. Subir el horno a 200°C durante 25 minutos hasta que la piel quede dorada, seca y crujiente.',
        artisanTip: 'Servir inmediatamente bien caliente, comprobando que la carne se separe del hueso sin necesidad de cuchillo.'
      }
    ],
    processPhotos: [
      {
        title: 'Paletillas de Ternasco de Aragón I.G.P.',
        subtitle: 'Carne lechal tierna y rosada',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Cortes seleccionados de cordero joven criado con cereales naturales.'
      },
      {
        title: 'La Tartera con Patatas Panaderas',
        subtitle: 'Cebolla, vino de Cariñena y ajos',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Las patatas absorbiendo los aromas cárnicos durante hora y media de asado.'
      },
      {
        title: 'El Asado Crujiente Listo para Servir',
        subtitle: 'El manjar festivo del Ebro',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido en el centro de la mesa con una jarra de vino garnacha de Cariñena.'
      }
    ],
    culinaryTerms: [
      { term: 'Ternasco', definition: 'Nombre vernáculo aragonés que designa al cordero joven sacrificado entre 70 y 90 días, de carne tierna y delicada con I.G.P. protegida.' },
      { term: 'Patatas Panaderas', definition: 'Corte de patata en rodajas de grosor medio asadas en el fondo de la bandeja al horno con cebolla y vino.' },
      { term: 'Rasa Aragonesa', definition: 'Raza ovina autóctona aragonesa adaptada a la dura estepa del Ebro, célebre por la calidad suprema de su carne lechal.' }
    ],
    pairing: {
      beverage: 'Vino Tinto Garnacha de Cariñena o Campo de Borja',
      regionDO: 'D.O. Campo de Borja (El Imperio de la Garnacha)',
      note: 'Garnachas de viñas viejas con taninos redondos y fruta silvestre que potencian la terneza jugosa del cordero asado.'
    },
    culturalRitual: {
      title: 'El Asado del Día del Pilar en Zaragoza',
      description: 'El 12 de octubre en las casas zaragozanas, tras la ofrenda floral a la Virgen del Pilar, el almuerzo sagrado reúne a toda la familia alrededor de una gran fuente de ternasco asado.'
    },
    keyPhrase: {
      spanish: '«Una paletilla de ternasco de Aragón asada con patatas panaderas y un tinto de Borja.»',
      english: 'A roasted Aragonese ternasco lamb shoulder with panadera potatoes and Borja red wine.',
      phonetic: 'OO-nah pah-leh-TEE-lyah deh tehr-NAHS-koh deh ah-rah-GOHN ah-SAH-dah'
    }
  }
];
