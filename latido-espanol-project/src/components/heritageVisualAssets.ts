export interface HeritageVisual {
  src?: string;
  alt: string;
  credit: string;
  sourceUrl?: string;
  license?: string;
  licenseUrl?: string;
  illustration?: 'bar-throw' | 'caliche';
}

const commonsImage = (filename: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename.replaceAll(' ', '_'))}?width=960`;

const commonsFile = (filename: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename.replaceAll(' ', '_'))}`;

const ccBy = (version: string) => `https://creativecommons.org/licenses/by/${version}/`;
const ccBySa = (version: string) => `https://creativecommons.org/licenses/by-sa/${version}/`;

export const LITERATURE_ERA_VISUALS: HeritageVisual[] = [
  {
    src: commonsImage('Cantar de mio Cid f74r.jpg'),
    alt: 'A folio from the medieval Cantar de mio Cid manuscript',
    credit: 'Anonymous · Wikimedia Commons · public domain',
    sourceUrl: commonsFile('Cantar de mio Cid f74r.jpg'),
  },
  {
    src: commonsImage('Title page of Lazarillo de Tormes (Volume I), Martin Nucio, Antwerp 1554.jpg'),
    alt: 'The 1554 title page of Lazarillo de Tormes',
    credit: 'Austrian National Library · Wikimedia Commons · public domain',
    sourceUrl: commonsFile('Title page of Lazarillo de Tormes (Volume I), Martin Nucio, Antwerp 1554.jpg'),
  },
  {
    src: commonsImage('El ingenioso hidalgo don Quijote de la Mancha.jpg'),
    alt: 'The first edition title page of Don Quijote, printed in Madrid in 1605',
    credit: 'Juan de la Cuesta · Wikimedia Commons · public domain',
    sourceUrl: commonsFile('El ingenioso hidalgo don Quijote de la Mancha.jpg'),
  },
  {
    src: commonsImage('Portrait of Gustavo Adolfo Bécquer, by his brother Valeriano (1862).jpg'),
    alt: 'A 1862 portrait of Romantic poet Gustavo Adolfo Bécquer',
    credit: 'Valeriano Bécquer · Wikimedia Commons · public domain',
    sourceUrl: commonsFile('Portrait of Gustavo Adolfo Bécquer, by his brother Valeriano (1862).jpg'),
  },
  {
    src: commonsImage('Perez galdos.jpg'),
    alt: 'Joaquín Sorolla’s portrait of realist novelist Benito Pérez Galdós',
    credit: 'Joaquín Sorolla · Wikimedia Commons · public domain',
    sourceUrl: commonsFile('Perez galdos.jpg'),
  },
  {
    src: commonsImage('Autorretrato Poeta NY.jpg'),
    alt: 'Federico García Lorca’s self-portrait for Poeta en Nueva York',
    credit: 'Federico García Lorca · Wikimedia Commons · public domain',
    sourceUrl: commonsFile('Autorretrato Poeta NY.jpg'),
  },
  {
    src: commonsImage('Camilo José Cela Madrid 1996.jpg'),
    alt: 'Spanish novelist Camilo José Cela in Madrid in 1996',
    credit: 'Ricardoasensio · Wikimedia Commons',
    sourceUrl: commonsFile('Camilo José Cela Madrid 1996.jpg'),
    license: 'CC BY-SA 3.0',
    licenseUrl: ccBySa('3.0'),
  },
  {
    src: commonsImage('20070527 - Javier Marías en la Feria del Libro de Madrid.jpg'),
    alt: 'Spanish novelist Javier Marías signing books at the Madrid Book Fair in 2007',
    credit: 'Mr. Tickle · Wikimedia Commons',
    sourceUrl: commonsFile('20070527 - Javier Marías en la Feria del Libro de Madrid.jpg'),
    license: 'CC BY-SA 3.0',
    licenseUrl: ccBySa('3.0'),
  },
];

export const SPORTS_VISUALS: HeritageVisual[] = [
  {
    src: commonsImage('2013 Basque Pelota World Cup - Frontenis - France vs Spain 27.jpg'),
    alt: 'A frontenis match between France and Spain at the 2013 Basque Pelota World Cup',
    credit: 'Pierre-Yves Beaudouin · Wikimedia Commons',
    sourceUrl: commonsFile('2013 Basque Pelota World Cup - Frontenis - France vs Spain 27.jpg'),
    license: 'CC BY-SA 4.0',
    licenseUrl: ccBySa('4.0'),
  },
  {
    src: commonsImage('2016-06-12 - Pilota Valenciana 01.jpg'),
    alt: 'Players competing in a Valencian pilota match',
    credit: 'Rafa Esteve · Wikimedia Commons',
    sourceUrl: commonsFile('2016-06-12 - Pilota Valenciana 01.jpg'),
    license: 'CC BY-SA 4.0',
    licenseUrl: ccBySa('4.0'),
  },
  {
    src: commonsImage('Lucha Canaria 002.jpg'),
    alt: 'A round of lucha canaria between two wrestlers',
    credit: 'Lex Thoonen · Wikimedia Commons',
    sourceUrl: commonsFile('Lucha Canaria 002.jpg'),
    license: 'CC BY-SA 3.0',
    licenseUrl: ccBySa('3.0'),
  },
  {
    illustration: 'bar-throw',
    alt: 'Illustration of an athlete throwing the long metal bar used in barra aragonesa',
    credit: 'Ilustración original · barra aragonesa: barra metálica y lanzamiento',
  },
  {
    illustration: 'caliche',
    alt: 'Illustration of the wooden caliche target and metal moneo throwing discs',
    credit: 'Ilustración original · caliche, moneos y juego de puntería',
  },
  {
    src: commonsImage('Bolos asturianos.JPG'),
    alt: 'Traditional Asturian bowling in Bárcena del Monasterio',
    credit: 'Sitomon · Wikimedia Commons · public domain',
    sourceUrl: commonsFile('Bolos asturianos.JPG'),
  },
  {
    src: commonsImage('Lucha leonesa.jpg'),
    alt: 'A corro match of lucha leonesa in León',
    credit: 'Iñigo Tomé · Wikimedia Commons',
    sourceUrl: commonsFile('Lucha leonesa.jpg'),
    license: 'CC BY 2.0',
    licenseUrl: ccBy('2.0'),
  },
  {
    src: commonsImage('Santander, regata en la Bahía 4.jpg'),
    alt: 'Traineras rowing boats racing in Santander Bay, Cantabria',
    credit: 'LBM1948 · Wikimedia Commons',
    sourceUrl: commonsFile('Santander, regata en la Bahía 4.jpg'),
    license: 'CC BY-SA 4.0',
    licenseUrl: ccBySa('4.0'),
  },
];

export const MODERN_SPORT_VISUALS: HeritageVisual[] = [
  {
    src: commonsImage('Lionel Messi in a La Liga match at Camp Nou, Barcelona ( Ank Kumar, Infosys Limited) 11.jpg'),
    alt: 'Lionel Messi playing in a La Liga match at Camp Nou in Barcelona',
    credit: 'Ank Kumar · Wikimedia Commons',
    sourceUrl: commonsFile('Lionel Messi in a La Liga match at Camp Nou, Barcelona ( Ank Kumar, Infosys Limited) 11.jpg'),
    license: 'CC BY-SA 4.0',
    licenseUrl: ccBySa('4.0'),
  },
  {
    src: commonsImage('Rudy Fernandez Eurobasket 2011.jpg'),
    alt: 'Spanish basketball player Rudy Fernández competing at EuroBasket 2011',
    credit: 'Christopher Johnson · Wikimedia Commons',
    sourceUrl: commonsFile('Rudy Fernandez Eurobasket 2011.jpg'),
    license: 'CC BY-SA 2.0',
    licenseUrl: ccBySa('2.0'),
  },
  {
    src: commonsImage('Vuelta a España.jpg'),
    alt: 'The 2022 Vuelta a España peloton racing through Segovia',
    credit: 'Arturo Francisco Barbero · Wikimedia Commons',
    sourceUrl: commonsFile('Vuelta a España.jpg'),
    license: 'CC BY-SA 4.0',
    licenseUrl: ccBySa('4.0'),
  },
  {
    src: commonsImage('Rafael Nadal Roland Garros.jpg'),
    alt: 'Spanish tennis player Rafael Nadal competing at Roland Garros in 2012',
    credit: 'Yann Caradec · Wikimedia Commons',
    sourceUrl: commonsFile('Rafael Nadal Roland Garros.jpg'),
    license: 'CC BY-SA 2.0',
    licenseUrl: ccBySa('2.0'),
  },
  {
    src: commonsImage('Golf La Moraleja.jpg'),
    alt: 'The golf course at La Moraleja in Madrid, Spain',
    credit: 'Tiia Monto · Wikimedia Commons',
    sourceUrl: commonsFile('Golf La Moraleja.jpg'),
    license: 'CC BY-SA 3.0',
    licenseUrl: ccBySa('3.0'),
  },
];
