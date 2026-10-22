import { CulinaryHeritageDish } from '../culinaryHeritageData';

export const NORTE_DISHES: CulinaryHeritageDish[] = [
  {
    id: 'fabada-asturiana',
    name: 'Fabada Asturiana Tradicional',
    spanishTitle: 'La mantecosidad de la faba de la granja, el compango ahumado y el chup-chup',
    category: 'Cuchara y Puchero',
    originType: 'region',
    originLocation: 'Asturias',
    originBadge: 'ORIGEN REGIONAL · ASTURIAS',
    historicalRoot: 'Plato señero asturiano documentado en la prensa regional desde el siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Cuencas mineras y aldeas de Asturias',
      narrative: 'La fabada asturiana es la apoteosis de la cocina de cuchara del norte peninsular. Sus protagonistas indiscutibles son las "fabes de la granja", una variedad autóctona de judía blanca gigante ("Phaseolus vulgaris") con I.G.P. cultivada en las vegas fluviales asturianas. Estas alubias se distinguen por una piel inapreciable y una mantecosidad sublime que se deshace en el paladar como crema pura. El guiso se acompaña del "compango": una tríada de embutidos curados al humo de leña de roble en los hórreos y desvanes asturianos (chorizo, morcilla de cebolla y tocino entreverado), junto a lacón salado. Cocinadas a fuego lento con agua fría del deshielo y "asustadas" tres veces para romper el hervor, las fabes espesan el caldo con su propio almidón natural sin añadir jamás harina ni espesantes artificiales.',
      culturalEvolution: 'De sustento calórico para mineros y campesinos a joya gastronómica universal venerada en toda España.',
      anecdoteOrLegend: 'En las casas de aldea asturianas, remover la fabada con una cuchara de metal se considera un sacrilegio: la olla solo se toma por las asas y se menea con movimientos circulares ("el baile de la pota") para no romper la piel de ninguna faba.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Fabada_asturiana_del_Valle_01.jpg',
    imageAlt: 'Fabada asturiana tradicional humeante en cazuela de barro con compango',
    imageCaption: 'Fabada asturiana con faba de la granja mantecosa, morcilla ahumada y tocino',
    photoTag: 'ASTURIAS · FABES DE LA GRANJA Y COMPANGO AHUMADO',
    description: 'El plato rey de la cornisa cantábrica: fabes de la granja de textura cremosa estofadas a fuego mínimo con chorizo asturiano ahumado, morcilla de cebolla, lacón y tocino entreverado.',
    ingredients: [
      '500 g de Faba Asturiana I.G.P. (puestas a remojo 12 horas)',
      '2 chorizos asturianos ahumados con leña de roble',
      '2 morcillas asturianas de cebolla ahumadas',
      '200 g de lacón curado desalado',
      '150 g de tocino ibérico entreverado salado',
      'Unas hebras de azafrán tostado',
      'Agua fría de manantial'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Remojo en Agua Fría de Manantial',
        description: 'Poner las fabes secas a remojo en abundante agua fría durante 12 a 14 horas. Desalar el lacón y el tocino en recipiente aparte desde la víspera.',
        artisanTip: 'Las fabes deben doblar su volumen original sin que la piel se arrugue o se desprenda del grano.'
      },
      {
        stepNumber: 2,
        title: 'Arranque en Olla Baja y Espumado',
        description: 'Colocar las fabes en una olla ancha y baja. Cubrir con agua fría dos dedos por encima. Añadir el compango pinchado. Llevar a ebullición viva y espumar con insistencia.',
        artisanTip: 'Pinchar los chorizos y morcillas con una aguja para que suelten sus jugos ahumados sin reventar durante la cocción.'
      },
      {
        stepNumber: 3,
        title: 'El Rito de «Asustar les Fabes»',
        description: 'Cuando hierva con fuerza, añadir un chorro de agua fría ("asustar"). Repetir esta operación tres veces a lo largo de las 2 horas y media de cocción a fuego lentísimo.',
        artisanTip: 'Asustar las fabes frena la ebullición violenta y evita que el pellejo se rompa, manteniendo la alubia entera y cremosa.'
      },
      {
        stepNumber: 4,
        title: 'Ligazón del Caldo y Reposo Nocturno',
        description: 'Añadir las hebras de azafrán disueltas. Mover la olla por las asas con vaivén suave para que el almidón de las fabes ligue el caldo en una salsa untuosa y dorada.',
        artisanTip: 'La fabada alcanza su perfección al día siguiente; el reposo asienta los humos del compango en el caldo.'
      }
    ],
    processPhotos: [
      {
        title: 'Fabes de la Granja I.G.P. a Remojo',
        subtitle: 'Grano gigante y blanco como el marfil',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Alubias asturianas hidratadas listas para entrar en la olla baja.'
      },
      {
        title: 'El Compango Ahumado al Fuego',
        subtitle: 'Chorizo, morcilla de cebolla y lacón',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'Los embutidos ahumados con leña de roble liberan sus grasas y pimentón.'
      },
      {
        title: 'El Baile de la Pota y el Plato Listo',
        subtitle: 'Salsa espesa y mantecosidad absoluta',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servida en plato hondo de barro en chigre asturiano con sidra natural.'
      }
    ],
    culinaryTerms: [
      { term: 'Compango', definition: 'Acompañamiento cárnico indispensable de la fabada formado por chorizo, morcilla y tocino ahumados tradicionalmente con leña de roble.' },
      { term: 'Asustar', definition: 'Añadir un chorro de agua fría al puchero hirviendo para cortar el hervor, evitando que las alubias se rompan.' },
      { term: 'Faba Asturiana', definition: 'Alubia autóctona de tamaño grande, forma arriñonada y textura excepcionalmente mantecosa con I.G.P. protegida.' }
    ],
    pairing: {
      beverage: 'Sidra Natural Asturiana Escanciada',
      regionDO: 'D.O.P. Sidra de Asturias',
      note: 'El golpe de la sidra escanciada contra el vaso rompe el carbónico natural, limpiando con su acidez frutal la grasa del compango.'
    },
    culturalRitual: {
      title: 'El Escanciado en el Chigre',
      description: 'En los chigres tradicionales de Cangas de Onís y Oviedo, la fabada se acompaña botella a botella con sidra natural escanciada desde lo alto con brazo erguido.'
    },
    keyPhrase: {
      spanish: '«Un plato de fabada asturiana con su compango y un culín de sidra.»',
      english: 'A plate of Asturian fabada with compango and a pour of cider.',
      phonetic: 'oon PLAH-toh deh fah-BAH-dah ahs-too-RYAH-nah kohn soo kohm-PAHN-goh'
    }
  },
  {
    id: 'marmitako-vasco',
    name: 'Marmitako Vasco de Bonito del Norte',
    spanishTitle: 'El puchero marinero a bordo con patata chasqueada y carne de pimiento choricero',
    category: 'Cuchara y Puchero',
    originType: 'region',
    originLocation: 'País Vasco (Euskadi)',
    originBadge: 'ORIGEN REGIONAL · PAÍS VASCO',
    historicalRoot: 'Guiso creado a bordo de los barcos pesqueros de Bermeo, Ondarroa y Getaria durante la costera del bonito.',
    historyAndOrigins: {
      eraOrCentury: 'Siglos XVIII y XIX · Barcos pesqueros del Golfo de Vizcaya',
      narrative: 'El marmitako debe su nombre a la "marmita", la cazuela de metal con tapa hermética que los pescadores vascos subían a bordo de sus embarcaciones durante las duras semanas de la costera del bonito del norte en el Cantábrico. Lejos de la costa, la tripulación se alimentaba de lo que tenían a mano: patatas recién peladas, pimientos choriceros secos, cebollas y los trozos de bonito recién capturado. El secreto secular que transmitían los cocineros de a bordo ("los rancheros") consistía en "chascar" las patatas (partirlas a la mitad y romperlas con un giro de muñeca) para que soltaran su fécula al hervir y espesaran el caldo. El bonito se introducía en dados gruesos con el fuego ya apagado, cocinándose únicamente con el calor residual durante dos minutos para evitar que su carne noble se secara.',
      culturalEvolution: 'De comida de alta mar a símbolo de la cultura de las sociedades gastronómicas ("txokos") vascas.',
      anecdoteOrLegend: 'En Bermeo se celebra cada verano el concurso del Marmitako donde compiten cientos de cuadrillas; los jueces evalúan con lupa que el bonito se mantenga rosado y jugoso en su centro y que el caldo tenga un color teja brillante gracias al pimiento choricero.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Marmitako.JPG',
    imageAlt: 'Marmitako de bonito del norte con patatas en cazuela de barro',
    imageCaption: 'Marmitako vasco con bonito del norte fresco, patatas y pulpa de pimiento choricero',
    photoTag: 'EUSKADI · COSTERA DEL BONITO Y SOCIEDADES GASTRONÓMICAS',
    description: 'Guiso marinero legendario vasco preparado con bonito del norte recién pescado, patatas chascadas que ligan el caldo, cebolla, pimiento verde y la imprescindible pulpa de pimiento choricero.',
    ingredients: [
      '600 g de lomo de bonito del norte fresco cortado en dados de 3 cm',
      '1 kg de patatas de calidad para guisar',
      '2 pimientos choriceros secos (o 2 cucharadas de su pulpa)',
      '1 pimiento verde y 1 pimiento rojo',
      '2 cebollas moradas de Zalla',
      '2 dientes de ajo y 1 vaso de vino blanco seco (Txakoli)',
      '1 litro de fumet de pescado elaborado con la espina del bonito',
      'AOVE virgen extra y sal'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Hidratación del Pimiento Choricero',
        description: 'Escaldar los pimientos choriceros secos en agua caliente durante 15 minutos. Raspar la pulpa interior con una cuchara y reservar.',
        artisanTip: 'La pulpa del pimiento choricero aporta el color rojizo profundo, el aroma ahumado y la dulzura inconfundible del guiso vasco.'
      },
      {
        stepNumber: 2,
        title: 'Pochado Lento y Chasqueado de Patatas',
        description: 'Pochar la cebolla y los pimientos verdes en AOVE a fuego suave. Pelar las patatas y "chascarlas" (cortar con cuchillo y quebrar al final). Incorporar a la cazuela y rehogar con la pulpa de choricero.',
        artisanTip: 'Chascar las patatas en lugar de cortarlas limpiamente libera el almidón de la rotura y permite que el caldo quede ligado y espeso.'
      },
      {
        stepNumber: 3,
        title: 'Cocción con Txakoli y Fumet',
        description: 'Añadir el vaso de Txakoli y dejar evaporar el alcohol 2 minutos. Cubrir con el fumet caliente y cocer a fuego medio durante 25 minutos hasta que la patata esté tierna.',
        artisanTip: 'Mover la cazuela en vaivén circular para ayudar a ligar la salsa antes de añadir el pescado.'
      },
      {
        stepNumber: 4,
        title: 'Incorporación del Bonito al Calor Residual',
        description: 'Apagar el fuego por completo. Añadir los dados de bonito salpimentados, tapar la cazuela y dejar reposar 3 minutos sin encender la llama.',
        artisanTip: 'El calor residual cocinará el bonito en su punto perfecto: jugoso, tierno y con el centro rosado.'
      }
    ],
    processPhotos: [
      {
        title: 'Lomo de Bonito del Norte Fresco',
        subtitle: 'Carne firme cortada en dados gruesos',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Cortes limpios de atún blanco recién desembarcado en el puerto de Bermeo.'
      },
      {
        title: 'El Chasqueado de las Patatas',
        subtitle: 'La rotura que libera el almidón natural',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Patatas crujiendo al corte para ligar el caldo con pimiento choricero.'
      },
      {
        title: 'Marmitako Servido en Txoko Vasco',
        subtitle: 'Guiso marinero con caldo teja espeso',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servido caliente en cazuela de hierro fundido con una copa de Txakoli fresco.'
      }
    ],
    culinaryTerms: [
      { term: 'Chascar', definition: 'Técnica de corte donde el cuchillo entra solo hasta la mitad de la patata y se hace palanca para que el trozo se parta irregularmente liberando fécula.' },
      { term: 'Pimiento Choricero', definition: 'Variedad de pimiento rojo seco secado en ristras en los caseríos vascos cuya carne hidratada es el pilar de salsas como la vizcaína.' },
      { term: 'Costera del Bonito', definition: 'Campaña pesquera estival tradicional en el mar Cantábrico donde las flotas vascas capturan el atún blanco con anzuelo artesanal.' }
    ],
    pairing: {
      beverage: 'Vino Blanco Txakoli de Getaria o Bizkaiko Txakolina',
      regionDO: 'D.O. Getariako Txakolina',
      note: 'Acidez punzante, sutil aguja carbónica y frescura atlántica que contrasta con la intensidad untuosa del bonito y la patata.'
    },
    culturalRitual: {
      title: 'El Txoko y la Cuadrilla de Amigos',
      description: 'En el País Vasco, el marmitako es el plato estrella cocinado por los socios de los txokos (sociedades gastronómicas privadas), turnándose en los fogones y compartiendo mesa entre cantos tradicionales.'
    },
    keyPhrase: {
      spanish: '«Un buen plato de marmitako de bonito del norte y una botella de txakoli bien fresco.»',
      english: 'A hearty plate of tuna marmitako stew and a bottle of chilled txakoli wine.',
      phonetic: 'oon bwehn PLAH-toh deh mahr-mee-TAH-koh deh boh-NEE-toh dehl NOHR-teh'
    }
  },
  {
    id: 'bacalao-pil-pil',
    name: 'Bacalao al Pil-Pil en Cazuela de Barro',
    spanishTitle: 'La emulsión mágica de gelatina de bacalao, ajo dorado y AOVE con vaivén continuo',
    category: 'Mar y Costas',
    originType: 'city',
    originLocation: 'Bilbao (Bizkaia / País Vasco)',
    originBadge: 'RAÍZ MUNICIPAL · BILBAO',
    historicalRoot: 'Nacido en el Bilbao mercantil del siglo XIX durante el asedio carlista de 1836.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX (1836) · Asedio de Bilbao',
      narrative: 'El bacalao al pil-pil es uno de los mayores hitos de la física y química culinaria mundial, nacido del ingenio ante la escasez. Durante el primer asedio carlista a Bilbao en 1836, el comerciante Simón Gurtubay realizó un pedido telegráfico pidiendo "100 o 120" lomos de bacalao en salazón; por un error tipográfico, el telegrama se leyó como "1.000.120" lomos. Al estallar el cerco a la ciudad, Bilbao se encontró sitiada con un millón de lomos de bacalao y apenas unas tinajas de aceite de oliva y ristras de ajo. Los cocineros bilbaínos tuvieron que cocinar bacalao a diario con solo esos tres ingredientes. Descubrieron que al confitar los lomos a baja temperatura con su piel hacia abajo, el colágeno del pescado salía en gotas blancas ("perlas") que, agitadas rítmicamente en la cazuela de barro, emulsionaban con el aceite de oliva formando una salsa verde dorada espesa como una mayonesa caliente.',
      culturalEvolution: 'Pilar angular de la cocina vizcaína y máxima prueba de destreza técnica para cualquier cocinero tradicional.',
      anecdoteOrLegend: 'El nombre "pil-pil" es una onomatopeya del suave borboteo ("pil... pil... pil...") que hace el aceite caliente templado cuando libera las gotas de gelatina y el vapor de agua durante el vaivén circular ininterrumpido.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Bacalao_al_Pil_Pil_%28Vizcaya%29.jpg',
    imageAlt: 'Bacalao al pil-pil con salsa verde emulsionada y láminas de ajo dorado',
    imageCaption: 'Bacalao al pil-pil tradicional en cazuela de barro con emulsión de colágeno y AOVE',
    photoTag: 'BILBAO · MAGIA DE LA EMULSIÓN EN BARRO Y AJO',
    description: 'Obra cumbre de la cocina vasca elaborada con cuatro ingredientes únicos: lomos gruesos de bacalao salado desalado, aceite de oliva virgen extra, ajos y guindilla, ligados mediante el movimiento circular de la cazuela.',
    ingredients: [
      '4 lomos gruesos de bacalao en salazón desalado con piel',
      '300 ml de AOVE virgen extra de sabor suave',
      '6 dientes de ajo cortados en láminas finas',
      '1 guindilla seca cortada en aros'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Dorado de Ajos y Guindilla',
        description: 'En una cazuela de barro amplia y plana, calentar el AOVE y dorar a fuego muy suave las láminas de ajo y los aros de guindilla. Retirar y reservar crujientes en un plato.',
        artisanTip: 'El aceite queda perfumado con el ajo y la guindilla pero sin llegar a quemarse, manteniendo su color oro limpio.'
      },
      {
        stepNumber: 2,
        title: 'Confitado Lento del Bacalao',
        description: 'Templar el aceite a unos 60-70°C. Colocar los lomos de bacalao con la piel hacia arriba durante 5 minutos y voltear con cuidado con la piel hacia abajo otros 5 minutos.',
        artisanTip: 'El bacalao no debe freírse, sino confitarse a baja temperatura para que la piel suelte sus perlas de gelatina en el fondo.'
      },
      {
        stepNumber: 3,
        title: 'Separación del Aceite y la Gelatina',
        description: 'Retirar los lomos a una fuente. Verter la mayor parte del aceite a un cazo, dejando en el fondo de la cazuela de barro los jugos acuosos blancos que ha soltado el bacalao.',
        artisanTip: 'La emulsión se logra más fácilmente añadiendo el aceite tibio poco a poco sobre la gelatina base.'
      },
      {
        stepNumber: 4,
        title: 'El Vaivén Circular de la Cazuela',
        description: 'Con la cazuela fuera del fuego directo pero tibia, mover la cazuela con movimientos circulares rítmicos constantes mientras se añade el aceite reservado en hilo fino, ligando la salsa en crema verde espesa.',
        artisanTip: 'Colocar los lomos templados en el centro cubiertos por la salsa y coronar con las láminas de ajo y guindilla reservadas.'
      }
    ],
    processPhotos: [
      {
        title: 'Láminas de Ajo y Guindilla Doradas',
        subtitle: 'El perfumado del aceite en barro',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Ajos dorándose suavemente en abundante aceite de oliva virgen extra.'
      },
      {
        title: 'Liberación de las Perlas de Colágeno',
        subtitle: 'El confitado lento a baja temperatura',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Las gotas blancas de gelatina natural se depositan en el fondo de la cazuela.'
      },
      {
        title: 'La Emulsión del Pil-Pil Ligada',
        subtitle: 'Salsa cremosa dorada y sedosa',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'El plato terminado con su salsa untuosa cubriendo el lomo en cazuela de barro.'
      }
    ],
    culinaryTerms: [
      { term: 'Pil-Pil', definition: 'Salsa emulsionada tradicional vasca formada por la combinación mecánica de la gelatina natural del bacalao con el aceite de oliva a baja temperatura.' },
      { term: 'Confitar', definition: 'Cocer un alimento sumergido en grasa a baja temperatura constante (entre 60°C y 80°C) sin que llegue a freír ni hervir.' },
      { term: 'Desalar', definition: 'Proceso de sumergir el bacalao en agua fría en la nevera durante 48 a 72 horas cambiando el agua cada 8 horas para retirar la salazón.' }
    ],
    pairing: {
      beverage: 'Txakoli de Bizkaia o Rioja Alavesa Blanco sobre Lías',
      regionDO: 'D.O. Bizkaiko Txakolina',
      note: 'Vinos minerales atlánticos con cuerpo y frescura que envuelven la untuosidad de la salsa emulsionada.'
    },
    culturalRitual: {
      title: 'El Movimiento de Muñeca en el Fogón',
      description: 'El verdadero maestro del pil-pil no usa varillas ni coladores modernos: mueve la cazuela de barro caliente con un solo brazo dibujando ochos en el aire hasta que la salsa cuaja sola.'
    },
    keyPhrase: {
      spanish: '«Un lomo de bacalao al pil-pil bien emulsionado con sus ajitos dorados.»',
      english: 'A cod loin in pil-pil emulsion with golden garlic slices.',
      phonetic: 'oon LOH-moh deh bah-kah-LAH-oh ahl PEEL-PEEL byehn eh-mool-syoh-NAH-doh'
    }
  },
  {
    id: 'sobao-pasiego',
    name: 'Sobao Pasiego y Quesada Cántabra',
    spanishTitle: 'La mantequilla dorada de los valles, el azúcar de caña y el molde de papel doblado',
    category: 'Dulces y Postres',
    originType: 'region',
    originLocation: 'Valles Pasiegos (Cantabria)',
    originBadge: 'ORIGEN REGIONAL · CANTABRIA',
    historicalRoot: 'Nacido en los prados de Selaya, Villacarriedo y Vega de Pas documentado desde el siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Siglo XIX · Valles Pasiegos de Cantabria',
      narrative: 'En los verdes valles pasiegos de Cantabria (Selaya, Villacarriedo y San Pedro del Romeral), la vida de los pastores trashumantes giraba en torno a sus vacas frisonas y pasiegas, productoras de una leche de riqueza grasa excepcional. Antiguamente, el sobao se elaboraba con masa de pan sobrante enriquecida con azúcar y mantequilla recién batida ("sobada" a mano, de donde procede el nombre). Hacia 1896, la cocinera pasiega Eusebia Hernández sustituyó la masa de pan por harina fina de trigo, huevos de corral y ralladura de limón, fijando la proporción canónica: partes iguales de mantequilla pasiega, azúcar y harina, junto a tres huevos. La masa se hornea dentro de una "papelina" de papel encerado doblada a mano en las cuatro esquinas, dando como resultado un bizcocho denso, tierno, aromático y dorado que suda mantequilla tibia al paladar.',
      culturalEvolution: 'Protegido con la Indicación Geográfica Protegida (I.G.P.) Sobao Pasiego, que garantiza el uso de mantequilla pura de vaca de los valles.',
      anecdoteOrLegend: 'El plegado manual de la papelina de papel es un arte pasiego secular que las madres enseñaban a las hijas desde niñas: con solo cuatro pliegues maestros sin tijeras ni pegamento, el papel sostiene la masa líquida en el horno sin desmoronarse.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Sobaos-Pasteleria-2009.jpg',
    imageAlt: 'Sobaos pasiegos dorados en su molde de papel doblado con corteza tostada',
    imageCaption: 'Auténtico sobao pasiego con I.G.P. elaborado con mantequilla fresca de Cantabria',
    photoTag: 'CANTABRIA · VALLES PASIEGOS Y MANTEQUILLA PURA',
    description: 'Bizcocho icónico de Cantabria de miga densa, tierna y profundamente aromática, horneado en molde de papel doblado a mano con mantequilla fresca de vacas pasiegas, huevos y azúcar.',
    ingredients: [
      '250 g de mantequilla pura pasiega de vaca a temperatura ambiente',
      '250 g de azúcar blanco',
      '250 g de harina de trigo fina tamizada',
      '3 huevos grandes de corral (aprox. 180 g)',
      '1 cucharadita de ron blanco o anís (opcional tradicional)',
      'Ralladura de 1 limón',
      '6 g de levadura química y una pizca de sal marina'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Batido en Pomada de la Mantequilla',
        description: 'Batir la mantequilla pasiega con el azúcar en un recipiente hondo durante 10 minutos hasta lograr una crema blanquecina, esponjosa y ligera.',
        artisanTip: 'La mantequilla debe ser de máxima calidad; el 50% del sabor y aroma del sobao proviene de los pastos cantábricos que comieron las vacas.'
      },
      {
        stepNumber: 2,
        title: 'Incorporación de Huevos Uno a Uno',
        description: 'Añadir los huevos a temperatura ambiente de uno en uno, batiendo bien antes de incorporar el siguiente para evitar que la emulsión de grasa se corte.',
        artisanTip: 'Añadir la ralladura de limón y el toque sutil de anís para aportar frescura aromática.'
      },
      {
        stepNumber: 3,
        title: 'Integración Envolvente de Harina',
        description: 'Tamizar la harina con la levadura y la sal sobre la crema de mantequilla. Mezclar con espátula con movimientos envolventes suaves sin batir en exceso.',
        artisanTip: 'No trabajar la masa de más para que el sobao no desarrolle elasticidad y mantenga su miga compacta y quebradiza.'
      },
      {
        stepNumber: 4,
        title: 'Horneado en Papelina a 180°C',
        description: 'Llenar los moldes de papel vegetal plegado a mano hasta la mitad de su altura. Hornear a 180°C durante 15 a 20 minutos hasta que la superficie esté dorada y brillante.',
        artisanTip: 'Al sacarlos del horno, dejarlos enfriar sobre rejilla; al día siguiente la mantequilla se asienta y el sabor se multiplica.'
      }
    ],
    processPhotos: [
      {
        title: 'Mantequilla Pasiega y Azúcar en Pomada',
        subtitle: 'El batido que crea la base cremosa',
        imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85',
        caption: 'Mantequilla artesana de los Valles Pasiegos batida con azúcar de grano fino.'
      },
      {
        title: 'El Doblado Manual de la Papelina',
        subtitle: 'Molde tradicional de papel vegetal sin pegamentos',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Pliegues en cruz característicos del molde pasiego de Selaya.'
      },
      {
        title: 'Sobao Dorado Recién Horneado',
        subtitle: 'Corteza acaramelada y aroma lácteo sublime',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'El sobao pasiego humeante con su miga amarilla de mantequilla pura.'
      }
    ],
    culinaryTerms: [
      { term: 'Papelina', definition: 'Molde rectangular de papel vegetal doblado a mano sin grapas ni adhesivos en el que se hornean tradicionalmente los sobaos pasiegos.' },
      { term: 'Pasiego', definition: 'Originario de los Valles Pasiegos de Cantabria (ríos Pas, Pisueña y Miera), célebres por su ganadería lechera y arquitectura de cabañas.' },
      { term: 'Mantequilla Pasiega', definition: 'Mantequilla artesana obtenida del batido de nata fresca de vacas autóctonas alimentadas con pastos frescos de montaña.' }
    ],
    pairing: {
      beverage: 'Tazón de Leche Entera Fresca de Vaca o Orujo de Liébana',
      regionDO: 'I.G.P. Sobao Pasiego / D.O. Orujo de Liébana',
      note: 'El contraste entre el dulzor mantecoso del sobao y la pureza láctea de la leche fresca es el desayuno cántabro absoluto.'
    },
    culturalRitual: {
      title: 'El Desayuno con Vistas al Valle',
      description: 'En las posadas y mesones de Selaya, el desayuno canónico consiste en mojar un sobao grande tibio en un tazón de café con leche recién ordeñada contemplando la bruma sobre los prados verdes.'
    },
    keyPhrase: {
      spanish: '«Un sobao pasiego con I.G.P. y un café con leche recién ordeñada.»',
      english: 'A Pasiego sobao cake with PGI and freshly milked coffee.',
      phonetic: 'oon soh-BAH-oh pah-SYEH-goh kohn ee-heh-PEH ee oon kah-FEH'
    }
  },
  {
    id: 'rabas-santander',
    name: 'Rabas de Calamar de la Bahía de Santander',
    spanishTitle: 'Las tiras de peludín fresco del Cantábrico enharinadas y crujientes al sol del vermú',
    category: 'Tapeo y Bocados',
    originType: 'city',
    originLocation: 'Santander (Cantabria)',
    originBadge: 'RAÍZ MUNICIPAL · SANTANDER',
    historicalRoot: 'Tradición portuaria de Puertochico documentada en Santander desde finales del siglo XIX.',
    historyAndOrigins: {
      eraOrCentury: 'Finales del siglo XIX · Barrio Pesquero y Puertochico de Santander',
      narrative: 'En la costa cantábrica, el término "rabas" no designa cualquier calamar frito, sino una devoción cívica de Santander. A finales del siglo XIX, en los muelles de Puertochico y del Barrio Pesquero, los pescadores desembarcaban cefalópodos recién capturados en la bahía: el codiciado "magano de guadañeta" o el tierno calamar "peludín". Las rabas santanderinas se diferencian por su corte longitudinal estricto: no se cortan en anillas redondas, sino en tiras alargadas y uniformes. El secreto absoluto de su tersura crujiente radica en no enmascararlas jamás con huevo ni masas gruesas; se pasan únicamente por harina de trigo limpia, se criban en cedazo para retirar el exceso y se sumergen 60 segundos en abundante aceite de oliva muy caliente. El resultado es un bocado dorado pálido, crujiente por fuera y de una carne dulce y tierna como la seda.',
      culturalEvolution: 'El aperitivo dominical sagrado e irrenunciable para todos los cántabros en las terrazas del Sardinero y la plaza de Cañadío.',
      anecdoteOrLegend: 'En Santander existe un enconado debate tradicional sobre el limón: los pescadores puristas consideran un ultraje rociar limón sobre las rabas recién fritas, argumentando que el ácido arruina el crujido y tapa el sabor a mar puro del calamar de bahía.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Rabas_de_calamar_en_Santander.jpg',
    imageAlt: 'Ración de rabas de calamar de Santander doradas en fuente blanca con gajo de limón',
    imageCaption: 'Rabas de calamar fresco de la bahía de Santander cortadas en tiras finas y crujientes',
    photoTag: 'SANTANDER · BAHÍA DEL CANTÁBRICO Y RITUAL DEL VERMÚ',
    description: 'Tiras de calamar fresco de la bahía cortadas longitudinalmente, pasadas por harina limpia sin huevo y fritas brevemente en AOVE hasta quedar doradas y crujientes.',
    ingredients: [
      '800 g de calamar fresco del Cantábrico o peludín limpio',
      '150 g de harina de trigo candeal',
      'Abundante AOVE virgen extra para freír (300 ml)',
      'Sal marina fina',
      'Gajos de limón para quien lo desee'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Corte Longitudinal en Tiras Finas',
        description: 'Limpiar el cuerpo del calamar fresco retirando pluma y piel oscura. Cortar longitudinalmente en tiras de 1 cm de grosor y 6-7 cm de longitud. Secar a conciencia con paño limpio.',
        artisanTip: 'El corte en tiras y no en anillas permite que el calamar se cocine en un tiempo récord sin perder su jugo interno.'
      },
      {
        stepNumber: 2,
        title: 'Enharinado Fino y Cribado en Cedazo',
        description: 'Pasar las tiras por harina de trigo. Sacudir con fuerza dentro de un cedazo o colador para retirar cualquier exceso de harina suelta.',
        artisanTip: 'Si queda harina suelta, se quemará en el fondo del aceite ensuciando la fritura y engrasando las rabas.'
      },
      {
        stepNumber: 3,
        title: 'Fritura Relámpago a 190°C',
        description: 'Echar en tandas pequeñas al aceite humeante. Freír durante 50 a 60 segundos hasta que adquieran un color rubio dorado. Escurrir inmediatamente en rejilla.',
        artisanTip: 'Nunca freír más de un minuto: el calamar en exceso de calor se endurece como goma; debe quedar tierno al morder.'
      },
      {
        stepNumber: 4,
        title: 'Punto de Sal en Caliente y Servicio',
        description: 'Salar con sal fina en el instante en que salen del aceite. Servir en cucurucho de papel o plato hondo al instante.',
        artisanTip: 'Degustar de inmediato en la barra; el vapor interior ablanda el rebozado tras cinco minutos en el plato.'
      }
    ],
    processPhotos: [
      {
        title: 'Calamar Fresco Cortado en Tiras',
        subtitle: 'El corte longitudinal característico de Santander',
        imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
        caption: 'Tiras uniformes de calamar de lonja listas para enharinar.'
      },
      {
        title: 'Fritura de 60 Segundos en AOVE',
        subtitle: 'El golpe de calor que sella el jugo marino',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Burbujeo alegre en aceite limpio a máxima temperatura.'
      },
      {
        title: 'Ración de Rabas Crujientes al Sol',
        subtitle: 'El aperitivo dominical en Puertochico',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Servidas en terraza frente al mar con un blanco de Cantabria.'
      }
    ],
    culinaryTerms: [
      { term: 'Peludín / Magano', definition: 'Nombre vernáculo cántabro para el calamar costero pescado con señuelo artesanal ("guadañeta") en las aguas bravas de la bahía.' },
      { term: 'Cribar en Cedazo', definition: 'Acción de agitar el marisco enharinado en una malla metálica para desprender la harina suelta antes de la fritura.' },
      { term: 'Rabas de Calamar', definition: 'Tiras fritas de carne de calamar noble, diferenciadas en Cantabria de las rabas de pulpo o de pota.' }
    ],
    pairing: {
      beverage: 'Vino Blanco de la Costa de Cantabria (I.G.P. Costa de Cantabria) o Vermú de Grifo con Rodaja de Naranja',
      regionDO: 'I.G.P. Costa de Cantabria',
      note: 'Blancos frescos con notas atlánticas salinas o el toque amargo del vermú que resalta la dulzura natural del calamar recién frito.'
    },
    culturalRitual: {
      title: 'El Vermú de las Doce en la Plaza del Cañadío',
      description: 'El rito sagrado del santanderino al mediodía: pedir una de rabas al centro de la mesa en la terraza bajo el sol del norte entre charlas de mar.'
    },
    keyPhrase: {
      spanish: '«Una de rabas de calamar bien crujientes y dos vermús de grifo preparados.»',
      english: 'A plate of crispy squid rabas and two draft vermouths.',
      phonetic: 'OO-nah deh RAH-bahs deh kah-lah-MAHR byehn kroo-HYEHN-tehs'
    }
  },
  {
    id: 'cachopo-asturiano',
    name: 'Cachopo Asturiano de Ternera con Jamón y Queso Cabrales',
    spanishTitle: 'Los dos filetes nobles empanados, el queso fundido derramándose y el rebozado dorado',
    category: 'Asados y Fuegos',
    originType: 'region',
    originLocation: 'Asturias (Oviedo, Gijón y cuencas mineras)',
    originBadge: 'ORIGEN REGIONAL · ASTURIAS',
    historicalRoot: 'Popularizado en los restaurantes ovetenses en los años 1950 a partir de los antiguos asados de ternera.',
    historyAndOrigins: {
      eraOrCentury: 'Mediados del siglo XX (1953) · Restaurante Pelayo de Oviedo',
      narrative: 'El cachopo asturiano es el coloso festivo por excelencia de la gastronomía del Principado de Asturias. Su nombre procede del término asturiano "cachopu", que alude a los troncos de castaño o roble viejos huecos por dentro, evocando la imagen de un tronco relleno. Aunque existen recetas familiares de ternera empanada desde el siglo XIX, fue en 1953 cuando la cocinera Olvido Álvarez del histórico Restaurante Pelayo de Oviedo creó la versión monumental moderna: dos filetes amplios de Ternera Asturiana con I.G.P. (procedentes de vacas criadas en los pastos de los Picos de Europa) rellenos de lonchas finas de jamón curado y una mezcla de quesos asturianos (como el noble Cabrales o el cremoso Afuega’l Pitu). Pasado por harina, huevo batido y pan rallado grueso, se fríe en sartén amplia hasta quedar dorado y crujiente, de modo que al hendir el cuchillo el queso fundido se desparrama por el plato como lava caliente.',
      culturalEvolution: 'Fenómeno gastronómico de culto con campeonatos anuales en toda Asturias y presencia en sidrerías de toda la geografía española.',
      anecdoteOrLegend: 'En las fiestas de San Mateo en Oviedo, es costumbre retar a los amigos a comer un cachopo gigante entero; las fuentes llegan a la mesa con cachopos de más de un kilo de peso que sobresalen generosamente por los bordes del plato acompañados de pimientos del piquillo confitados y patatas fritas caseras.'
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Cachopo_Rinc%C3%B3n_de_Gascona.jpg',
    imageAlt: 'Cachopo asturiano empanado y cortado al centro dejando escapar el queso fundido caliente',
    imageCaption: 'Cachopo asturiano elaborado con Ternera Asturiana I.G.P., jamón curado y queso cremoso fundente',
    photoTag: 'ASTURIAS · TERNERA DE LOS PICOS DE EUROPA Y SIDRERÍAS',
    description: 'Empanado monumental asturiano formado por dos grandes filetes de Ternera Asturiana I.G.P. rellenos de jamón ibérico y queso asturiano fundente, empanado crujiente y acompañado de patatas caseras.',
    ingredients: [
      '2 filetes grandes y finos de tapa o cadera de Ternera Asturiana con I.G.P. (aprox. 400 g en total)',
      '100 g de jamón ibérico o serrano curado en lonchas finas',
      '120 g de queso asturiano fundente (Cabrales suave, Vidiago o Tita de vaca)',
      '2 huevos grandes de corral batidos',
      'Harina de trigo y pan rallado rústico',
      'Abundante AOVE para freír',
      'Sal marina y pimienta negra'
    ],
    traditionalMethod: [
      {
        stepNumber: 1,
        title: 'Espalmado de los Filetes de Ternera',
        description: 'Colocar los filetes de ternera entre dos hojas de papel film y golpear suavemente con una maza de cocina ("espaldar") para estirar la carne y romper fibras, dejándola fina y tierna.',
        artisanTip: 'Espalmar la ternera asegura que se cocine en pocos minutos sin que el rebozado exterior se queme.'
      },
      {
        stepNumber: 2,
        title: 'Montaje del Relleno sin Salirse',
        description: 'Salpimentar ligeramente. Colocar sobre el primer filete las lonchas de jamón curado y en el centro el queso asturiano, dejando 1,5 cm libre en los bordes para poder sellar. Tapar con el segundo filete y apretar con las manos.',
        artisanTip: 'Dejar el margen perimetral limpio evita que el queso fundido se escape al aceite durante la fritura.'
      },
      {
        stepNumber: 3,
        title: 'Doble Empanado Clásico Crujiente',
        description: 'Pasar el cachopo con sumo cuidado por harina tamizada, luego por el huevo batido asegurando que cubra los bordes, y finalmente por el pan rallado rústico apretando con la palma.',
        artisanTip: 'Apretar bien el pan rallado crea un escudo hermético que retiene los vapores y funde el queso interior.'
      },
      {
        stepNumber: 4,
        title: 'Fritura Dorada y Reposo Breve',
        description: 'En una sartén grande con abundante AOVE caliente a 170°C, freír el cachopo durante 2 minutos por cada lado hasta que el pan esté crujiente y de color castaño dorado. Reposar 2 minutos antes de cortar.',
        artisanTip: 'El reposo de 2 minutos sobre papel secante permite que el queso termine de fundir uniformemente sin quemar la lengua.'
      }
    ],
    processPhotos: [
      {
        title: 'Espalmado de la Ternera Asturiana',
        subtitle: 'Filetes tiernos de carne criada en pastos verdes',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        caption: 'Filetes finos preparados con el relleno de jamón y queso.'
      },
      {
        title: 'Fritura en Sartén Ancha Tradicional',
        subtitle: 'El empanado crepitando en aceite caliente',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
        caption: 'Dorado uniforme de la corteza exterior en las sidrerías de Oviedo.'
      },
      {
        title: 'El Corte con Queso Fundido Desbordado',
        subtitle: 'El festín con patatas y pimientos confitados',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85',
        caption: 'Cachopo recién abierto mostrando el corazón fundido y cremoso.'
      }
    ],
    culinaryTerms: [
      { term: 'Espalmar', definition: 'Técnica de golpear un filete de carne con una maza metálica o rodillo para aplanarlo, igualar su grosor y ablandar su textura.' },
      { term: 'I.G.P. Ternera Asturiana', definition: 'Certificación oficial que ampara la carne de vacuno nacida y criada en Asturias a base de pastos naturales de montaña.' },
      { term: 'Queso Cabrales', definition: 'Queso azul autóctono asturiano madurado en cuevas naturales de los Picos de Europa con hongo Penicillium roqueforti.' }
    ],
    pairing: {
      beverage: 'Sidra Natural Asturiana Escanciada con «Culete» Fresco o Vino Tinto de Cangas',
      regionDO: 'D.O.P. Sidra de Asturias / D.O.P. Cangas',
      note: 'El carbónico natural del culete de sidra recién escanciada desengrasa el paladar tras cada bocado de queso fundido y carne empanada.'
    },
    culturalRitual: {
      title: 'El Culete de Sidra en el Chigre',
      description: 'En el chigre asturiano, la mesa comparte el cachopo con botellas de sidra natural que el camarero escancia en alto contra el borde del vaso ancho.'
    },
    keyPhrase: {
      spanish: '«Un cachopo de ternera asturiana con queso cabrales y una botella de sidra bien escanciada.»',
      english: 'An Asturian beef cachopo with cabrales cheese and a freshly poured bottle of cider.',
      phonetic: 'oon kah-CHOH-poh deh tehr-NEH-rah ahs-too-RYAH-nah kohn KEH-soh kah-BRAH-lehs'
    }
  }
];

