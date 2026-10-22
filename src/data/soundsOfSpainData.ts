export interface SongLyric {
  spanish: string;
  translation: string;
  explanation?: string;
  highlightedWord?: string;
}

export interface SoundTrack {
  id: string;
  title: string;
  spanishTitle: string;
  composer: string;
  region: string;
  category: 'flamenco' | 'folk' | 'cancion' | 'ambiente';
  categoryLabel: string;
  duration: string;
  durationSec: number;
  bpm: number;
  mode: 'guitar' | 'palmas' | 'gaita' | 'ambient' | 'pasodoble';
  baseNote: number;
  chords: number[];
  audioUrl?: string;
  imageUrl: string;
  description: string;
  culturalNote: string;
  instruments: string[];
  lyrics?: SongLyric[];
  tags: string[];
}

export interface SpanishInstrument {
  id: string;
  name: string;
  spanishName: string;
  region: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  culturalHeritage: string;
  famousPlayers: string[];
}

export interface MusicalTerm {
  term: string;
  pronunciation: string;
  translation: string;
  meaning: string;
  example: string;
}

export const SOUND_TRACKS: SoundTrack[] = [
  // 1. GUITARRA CLÁSICA & MASTERWORKS
  {
    id: 'romanza-espanola',
    title: 'Romanza Española (Spanish Romance)',
    spanishTitle: 'Romanza Española (Jeux Interdits)',
    composer: 'Anónimo / Tradicional Español (Siglo XIX)',
    region: 'Andalucía / Toda España',
    category: 'flamenco',
    categoryLabel: 'Guitarra Clásica',
    duration: '2:28',
    durationSec: 148,
    bpm: 96,
    mode: 'guitar',
    baseNote: 329.63,
    chords: [329.63, 293.66, 261.63, 246.94],
    audioUrl: '/audio/romanza-espanola.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    description: 'The world’s most celebrated Spanish classical guitar masterwork. Iconic arpeggio progression moving from an introspective E minor to a luminous E major.',
    culturalNote: 'Popularized globally by Narciso Yepes and Paco de Lucía, it remains the gold standard of classical nylon-string guitar repertoire.',
    instruments: ['Guitarra clásica española de concierto', 'Técnica de arpegio'],
    tags: ['Guitarra', 'Romance', 'Clásica', 'Yepes', 'Solista'],
    lyrics: [
      {
        spanish: 'Suena la guitarra en la noche callada de Granada...',
        translation: 'The guitar plays softly in the quiet Granada night...',
        explanation: 'Nocturnal serenades (serenatas) are a beloved Mediterranean courting custom.',
        highlightedWord: 'guitarra'
      },
      {
        spanish: 'Una melodía de amor que cruza patios y cipreses.',
        translation: 'A melody of love drifting through courtyards and cypresses.',
        explanation: 'Cypresses and fountains are hallmarks of Andalusian carmenes.',
        highlightedWord: 'patios'
      },
      {
        spanish: 'El corazón que canta no sabe decir adiós.',
        translation: 'The heart that sings knows not how to say farewell.',
        explanation: 'Evokes the tender romanticism of 19th-century Spanish melodies.',
        highlightedWord: 'corazón'
      }
    ]
  },
  {
    id: 'recuerdos-alhambra',
    title: 'Recuerdos de la Alhambra',
    spanishTitle: 'Recuerdos de la Alhambra (Francisco Tárrega)',
    composer: 'Francisco Tárrega (1896)',
    region: 'Granada, Andalucía',
    category: 'flamenco',
    categoryLabel: 'Guitarra Clásica',
    duration: '4:18',
    durationSec: 258,
    bpm: 88,
    mode: 'guitar',
    baseNote: 220.00,
    chords: [220.00, 261.63, 293.66, 329.63],
    audioUrl: '/audio/recuerdos-alhambra.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of classical guitar technique. Continuous rapid three-finger tremolo over a moving bass line evoking the murmuring water fountains of the Alhambra.',
    culturalNote: 'Composed after Tárrega gazed upon the illuminated Nasrid Palaces of Granada from the heights of the Albaicín.',
    instruments: ['Guitarra de concierto de palo santo', 'Trémolo clásico'],
    tags: ['Tárrega', 'Granada', 'Alhambra', 'Trémolo', 'Obra Cumbre']
  },
  {
    id: 'rumores-caleta',
    title: 'Rumores de la Caleta',
    spanishTitle: 'Rumores de la Caleta (Malagueña Op. 71)',
    composer: 'Isaac Albéniz',
    region: 'Cádiz & Málaga, Andalucía',
    category: 'flamenco',
    categoryLabel: 'Guitarra Clásica',
    duration: '4:39',
    durationSec: 279,
    bpm: 120,
    mode: 'guitar',
    baseNote: 293.66,
    chords: [293.66, 349.23, 261.63, 220.00],
    audioUrl: '/audio/rumores-caleta.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=800&q=80',
    description: 'Sparkling Spanish masterwork evoking the Caleta beach of Cádiz. Driven by crisp rasgueados, delicate melodic turns, and Mediterranean sea breezes.',
    culturalNote: 'Albéniz’s piano suites were so inherently guitaristic that Andrés Segovia transcribed and championed them worldwide.',
    instruments: ['Guitarra clásica española', 'Rasgueado andaluz'],
    tags: ['Albéniz', 'Cádiz', 'Caleta', 'Guitarra', 'Maestría']
  },
  {
    id: 'asturias-leyenda',
    title: 'Asturias (Leyenda)',
    spanishTitle: 'Asturias (Suite Española Op. 47)',
    composer: 'Isaac Albéniz (1892)',
    region: 'Asturias & Andalucía',
    category: 'flamenco',
    categoryLabel: 'Guitarra Clásica',
    duration: '6:41',
    durationSec: 401,
    bpm: 132,
    mode: 'guitar',
    baseNote: 293.66,
    chords: [293.66, 349.23, 261.63, 220.00],
    audioUrl: '/audio/asturias-leyenda.ogg',
    imageUrl: 'https://images.unsplash.com/photo-1583200424564-9b21a0845348?auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic, thunderous national masterwork driven by a rapid pedal point, explosive rasgueados, and soulful cante jondo melodic interludes.',
    culturalNote: 'Though titled after northern Asturias, the rhythm is purely Andalusian bulerías and soleares. Essential Segovia repertoire.',
    instruments: ['Guitarra clásica solista', 'Rasgueado flamenco'],
    tags: ['Albéniz', 'Asturias', 'Leyenda', 'Segovia', 'Clásica']
  },
  {
    id: 'danza-espanola',
    title: 'Danza Española (Arabesca)',
    spanishTitle: 'Danza Española Op. 37 · Arabesca',
    composer: 'Enrique Granados (1890)',
    region: 'Barcelona, Cataluña / Andalucía',
    category: 'flamenco',
    categoryLabel: 'Guitarra Clásica',
    duration: '5:12',
    durationSec: 312,
    bpm: 116,
    mode: 'guitar',
    baseNote: 261.63,
    chords: [261.63, 293.66, 329.63, 261.63],
    audioUrl: '/audio/danza-espanola.ogg',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    description: 'Sumptuous, nostalgic Spanish dance shifting between delicate Moorish ornamentation and proud Iberian rhythmic pulses.',
    culturalNote: 'Granados bridged romantic Catalan salon music with deep Andalusian folk heritage.',
    instruments: ['Guitarra de concierto', 'Castañuelas'],
    tags: ['Granados', 'Danza', 'Arabesca', 'Cataluña', 'Romanticismo']
  },

  // 2. FLAMENCO PURO & CANTE
  {
    id: 'fandangos-huelva',
    title: 'Fandangos de Huelva',
    spanishTitle: 'Fandangos Flamencos (Cante y Toque)',
    composer: 'Tradicional Onubense',
    region: 'Huelva & Sevilla, Andalucía',
    category: 'flamenco',
    categoryLabel: 'Flamenco & Cante',
    duration: '3:38',
    durationSec: 218,
    bpm: 110,
    mode: 'palmas',
    baseNote: 329.63,
    chords: [329.63, 349.23, 293.66, 261.63],
    audioUrl: '/audio/fandangos.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    description: 'Deep, emotional flamenco cante jondo. The singer stretches phrases with heartfelt melisma over rhythmic 3/4 guitar falsetas and foot-tapping accents.',
    culturalNote: 'Fandangos are an ancient pillar of flamenco, born in the countryside of Huelva and celebrated at village romerías.',
    instruments: ['Cante flamenco hondo', 'Guitarra flamenca', 'Palmas'],
    tags: ['Fandangos', 'Huelva', 'Cante Jondo', 'Flamenco', 'Pasión'],
    lyrics: [
      {
        spanish: 'En la ermita de la sierra cantan los fandangos bellos...',
        translation: 'In the mountain hermitage they sing the beautiful fandangos...',
        explanation: 'Mountain pilgrimages (romerías) in Andalusia are central to fandangos.',
        highlightedWord: 'sierra'
      },
      {
        spanish: 'No hay pena que no se alivie con el compás de una guitarra.',
        translation: 'There is no sorrow that cannot be eased by the rhythm of a guitar.',
        explanation: 'The cathartic, expressive soul of Andalusian cante.',
        highlightedWord: 'pena'
      }
    ]
  },
  {
    id: 'malaguenas',
    title: 'Malagueñas Flamencas',
    spanishTitle: 'Malagueña de la Caleta',
    composer: 'Tradicional Malagueño',
    region: 'Málaga, Andalucía',
    category: 'flamenco',
    categoryLabel: 'Flamenco & Cante',
    duration: '3:37',
    durationSec: 217,
    bpm: 92,
    mode: 'guitar',
    baseNote: 329.63,
    chords: [329.63, 349.23, 392.00, 329.63],
    audioUrl: '/audio/malaguenas.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    description: 'Noble, solemn flamenco cante with free rhythm. The singer delivers elaborate vocal flourishes while the guitar maintains the haunting Andalusian cadence.',
    culturalNote: 'Popularized by Antonio Chacón in late 19th-century café cantantes in Málaga and Madrid.',
    instruments: ['Cante libre', 'Guitarra flamenca solista'],
    tags: ['Málaga', 'Malagueñas', 'Flamenco', 'Chacón', 'Andalucía']
  },
  {
    id: 'bulerias-jerez',
    title: 'Bulerías de Jerez',
    spanishTitle: 'Bulerías Populares (Compás y Jaleo)',
    composer: 'Tradicional Gitano / Jerezano',
    region: 'Jerez de la Frontera, Cádiz',
    category: 'flamenco',
    categoryLabel: 'Flamenco Fiestero',
    duration: '1:10',
    durationSec: 70,
    bpm: 160,
    mode: 'palmas',
    baseNote: 329.63,
    chords: [329.63, 349.23, 392.00, 329.63],
    audioUrl: '/audio/bulerias.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    description: 'The fastest, most joyful style of flamenco. Driven by a syncopated 12-beat compás, stinging handclaps, and spontaneous shouts of encouragement.',
    culturalNote: 'Jerez de la Frontera is universally acclaimed as the capital of bulerías and sherry wine cellars.',
    instruments: ['Palmas secas', 'Guitarra flamenca', 'Cante fiestero'],
    tags: ['Bulerías', 'Jerez', 'Fiesta', 'Compás', 'Cádiz']
  },
  {
    id: 'saeta-sevillana',
    title: 'Saeta de Semana Santa',
    spanishTitle: 'Saeta Sevillana (Semana Santa)',
    composer: 'Canto Sagrado Andaluz',
    region: 'Sevilla, Andalucía',
    category: 'flamenco',
    categoryLabel: 'Canto Sagrado & Saeta',
    duration: '1:59',
    durationSec: 119,
    bpm: 60,
    mode: 'ambient',
    baseNote: 220.00,
    chords: [220.00, 261.63, 293.66, 329.63],
    audioUrl: '/audio/saeta-sevillana.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&w=800&q=80',
    description: 'Piercing, emotional flamenco prayer sung a cappella from wrought-iron balconies as religious floats (pasos) advance through silent candlelit streets.',
    culturalNote: 'An essential high point of Seville’s Holy Week (Semana Santa), evoking medieval Iberian devotion and cante jondo grief.',
    instruments: ['Voz a cappella', 'Silencio procesional'],
    tags: ['Saeta', 'Sevilla', 'Semana Santa', 'Balcón', 'Devoción']
  },
  {
    id: 'tarantas-mineras',
    title: 'Tarantas de las Minas',
    spanishTitle: 'Tarantas Mineras (Cante de Levante)',
    composer: 'Tradicional Minero',
    region: 'Almería & Murcia',
    category: 'flamenco',
    categoryLabel: 'Cantes de Levante',
    duration: '6:03',
    durationSec: 363,
    bpm: 80,
    mode: 'guitar',
    baseNote: 293.66,
    chords: [293.66, 349.23, 261.63, 220.00],
    audioUrl: '/audio/tarantas.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=800&q=80',
    description: 'Profound flamenco style born in the mining shafts of southeastern Spain. Defined by tense dissonances, melancholic phrasing, and virtuoso guitar runs.',
    culturalNote: 'Celebrated at the prestigious Festival Internacional del Cante de las Minas in La Unión.',
    instruments: ['Guitarra flamenca solista', 'Cante minero'],
    tags: ['Tarantas', 'Levante', 'Minas', 'Murcia', 'Flamenco Hondo']
  },
  {
    id: 'zambra-morisca',
    title: 'Zambra Mora del Sacromonte',
    spanishTitle: 'Zambra Morisca (Cuevas de Granada)',
    composer: 'Tradicional Gitano-Granadino',
    region: 'Granada, Andalucía',
    category: 'flamenco',
    categoryLabel: 'Zambra & Herencia Morisca',
    duration: '3:50',
    durationSec: 230,
    bpm: 112,
    mode: 'guitar',
    baseNote: 261.63,
    chords: [261.63, 293.66, 329.63, 246.94],
    audioUrl: '/audio/zambra-morisca.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&w=800&q=80',
    description: 'Sensual Moorish-gypsy dance rhythm performed in the whitewashed cave dwellings of Sacromonte with barefoot dancers and ringing finger cymbals.',
    culturalNote: 'Direct descendant of 15th-century Morisco wedding festivities, revived in Granada’s gypsy community.',
    instruments: ['Guitarra flamenca', 'Castañuelas', 'Pandereta'],
    tags: ['Zambra', 'Granada', 'Sacromonte', 'Cuevas', 'Morisco']
  },

  // 3. CANCIONES POPULARES & RUMBA
  {
    id: 'sevillanas-triana',
    title: 'Sevillanas de la Feria',
    spanishTitle: 'Sevillanas Populares (Canto y Castañuelas)',
    composer: 'Tradicional Sevillano',
    region: 'Sevilla, Andalucía',
    category: 'cancion',
    categoryLabel: 'Sevillanas & Baile',
    duration: '2:39',
    durationSec: 159,
    bpm: 124,
    mode: 'palmas',
    baseNote: 329.63,
    chords: [329.63, 349.23, 392.00, 329.63],
    audioUrl: '/audio/sevillanas.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    description: 'The defining folk song and partner dance of Seville’s springtime fair. Spirited singing, crisp castanets, and festive Spanish guitar strumming.',
    culturalNote: 'Danced in four structured verses («coplas»), bringing together all generations in the canvas casetas of the Feria.',
    instruments: ['Voz flamenca', 'Guitarra española', 'Castañuelas', 'Palmas'],
    tags: ['Sevilla', 'Feria de Abril', 'Sevillanas', 'Baile', 'Fiesta'],
    lyrics: [
      {
        spanish: '¡Viva Sevilla y su gente, que cantan por sevillanas!',
        translation: 'Long live Seville and its people, singing by sevillanas!',
        explanation: 'The classic opening salutation at the Feria de Abril.',
        highlightedWord: 'Sevilla'
      },
      {
        spanish: 'El Guadalquivir de noche brilla como una sultana.',
        translation: 'The Guadalquivir river at night shines like a sultana.',
        explanation: 'The river flowing through Seville past the Golden Tower (Torre del Oro).',
        highlightedWord: 'Guadalquivir'
      },
      {
        spanish: '¡Toca las palmas, morena, que la feria ya empezó!',
        translation: 'Clap the palmas, dark-haired beauty, the fair has begun!',
        explanation: 'Traditional call encouraging dancers onto the wooden floor.',
        highlightedWord: 'palmas'
      }
    ]
  },
  {
    id: 'anda-jaleo',
    title: 'Anda Jaleo (Canción Popular)',
    spanishTitle: 'Anda Jaleo (Federico García Lorca)',
    composer: 'Federico García Lorca & Tradicional',
    region: 'Granada & Andalucía',
    category: 'cancion',
    categoryLabel: 'Canción Popular & Poesía',
    duration: '2:36',
    durationSec: 156,
    bpm: 118,
    mode: 'guitar',
    baseNote: 293.66,
    chords: [293.66, 329.63, 261.63, 246.94],
    audioUrl: '/audio/anda-jaleo.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=800&q=80',
    description: 'Celebrated folk song collected, harmonized, and recorded by Federico García Lorca in 1931 with La Argentinita.',
    culturalNote: 'An anthem of Andalusian poetic pride combining rhythmic verve with Spanish literary depth.',
    instruments: ['Canto tradicional', 'Guitarra flamenca', 'Palmas'],
    tags: ['Lorca', 'Granada', 'Poesía', 'Canción Popular', 'Jaleo'],
    lyrics: [
      {
        spanish: '¡Anda jaleo, jaleo, ya se acabó el alboroto!',
        translation: 'Come on, cheer, cheer! The commotion is now over!',
        explanation: '«Jaleo» is the vibrant Spanish exclamation of festive encouragement.',
        highlightedWord: 'jaleo'
      },
      {
        spanish: 'Y vamos a ver la tarde de toros en el redondel.',
        translation: 'And let us go see the afternoon fiesta in the ring.',
        explanation: 'Reflects traditional Spanish folk festival gatherings.',
        highlightedWord: 'tarde'
      },
      {
        spanish: 'Por la orilla del río cantaba una serrana.',
        translation: 'Along the riverbank sang a mountain maiden.',
        explanation: '«Serrana» refers to women from the Andalusian mountain ranges.',
        highlightedWord: 'serrana'
      }
    ]
  },
  {
    id: 'ay-lerele',
    title: '¡Ay Lerele! (Rumba Festiva)',
    spanishTitle: '¡Ay Lerele! (Canción y Rumba)',
    composer: 'Popular Español / Copla y Rumba',
    region: 'Andalucía & Madrid',
    category: 'cancion',
    categoryLabel: 'Canción Festiva & Rumba',
    duration: '3:44',
    durationSec: 224,
    bpm: 128,
    mode: 'palmas',
    baseNote: 329.63,
    chords: [329.63, 293.66, 261.63, 246.94],
    audioUrl: '/audio/lerele.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    description: 'Infectious Spanish rumba and copla song full of Mediterranean sunshine, cheerful vocal refrains, and dancing acoustic guitar.',
    culturalNote: 'Rumba flamenca spread through the 1960s and 70s as Spain’s favorite danceable party soundtrack.',
    instruments: ['Voz femenina', 'Guitarra de rumba', 'Palmas'],
    tags: ['Rumba', 'Lerele', 'Fiesta', 'Copla', 'Alegre']
  },
  {
    id: 'el-tran-tran',
    title: 'El Tran-Tran (Rumba Gitana)',
    spanishTitle: 'El Tran-Tran (Rumba y Toque)',
    composer: 'Tradicional del Sur',
    region: 'Sevilla & Cádiz',
    category: 'cancion',
    categoryLabel: 'Canción & Rumba',
    duration: '5:44',
    durationSec: 344,
    bpm: 122,
    mode: 'palmas',
    baseNote: 261.63,
    chords: [261.63, 329.63, 392.00, 261.63],
    audioUrl: '/audio/tran-tran.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    description: 'Swinging rhythmic Spanish rumba with storytelling lyrics, syncopated guitar strums, and warm vocal duets.',
    culturalNote: 'Commonly performed at Spanish family weddings and outdoor tabernas.',
    instruments: ['Voz', 'Guitarra flamenca', 'Palmas'],
    tags: ['Rumba', 'Tran-Tran', 'Cádiz', 'Sevilla', 'Verano']
  },
  {
    id: 'cancion-andaluza',
    title: 'Canción Andaluza',
    spanishTitle: 'Canción Andaluza Tradicional',
    composer: 'Tradicional del Sur',
    region: 'Córdoba & Jaén, Andalucía',
    category: 'cancion',
    categoryLabel: 'Canción Popular',
    duration: '2:46',
    durationSec: 166,
    bpm: 108,
    mode: 'guitar',
    baseNote: 261.63,
    chords: [261.63, 293.66, 329.63, 246.94],
    audioUrl: '/audio/cancion-andaluza.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    description: 'Lyrical vocal melody set over warm acoustic guitar chords depicting Andalusian olive groves and whitewashed mountain villages.',
    culturalNote: 'Reflects the pastoral song traditions of rural Andalusia.',
    instruments: ['Voz', 'Guitarra española', 'Palmas'],
    tags: ['Andalucía', 'Córdoba', 'Copla', 'Melodía', 'Sur']
  },

  // 4. FOLK REGIONAL & ROMANCERO
  {
    id: 'eres-alta-y-delgada',
    title: 'Eres Alta y Delgada',
    spanishTitle: 'Eres Alta y Delgada (Canción Castellana)',
    composer: 'Romancero Tradicional Español',
    region: 'Castilla y León / Madrid',
    category: 'folk',
    categoryLabel: 'Romance & Canto Tradicional',
    duration: '2:55',
    durationSec: 175,
    bpm: 104,
    mode: 'guitar',
    baseNote: 261.63,
    chords: [261.63, 293.66, 329.63, 261.63],
    audioUrl: '/audio/eres-alta-y-delgada.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    description: 'Beloved lyrical romance of central Spain, admired for its graceful cadence and poetic comparisons of youthful poise.',
    culturalNote: 'Preserved across Castilla and Madrid through oral transmission since the Renaissance.',
    instruments: ['Voz solista', 'Guitarra renacentista / española', 'Laúd'],
    tags: ['Castilla', 'Madrid', 'Romancero', 'Canción', 'Tradición'],
    lyrics: [
      {
        spanish: 'Eres alta y delgada como un junco de la ribera.',
        translation: 'You are tall and slender like a reed upon the riverbank.',
        explanation: 'Classic Spanish lyrical metaphor comparing poise to a river reed.',
        highlightedWord: 'junco'
      },
      {
        spanish: 'Y en tus ojos reluce el brillo de la mañana.',
        translation: 'And in your eyes glows the brightness of the morning.',
        explanation: 'Traditional praise found throughout Spanish romantic poetry.',
        highlightedWord: 'mañana'
      }
    ]
  },
  {
    id: 'jota-aragonesa',
    title: 'La Jota Aragonesa',
    spanishTitle: 'La Jota (Fiestas del Pilar)',
    composer: 'Tradicional de Aragón',
    region: 'Zaragoza, Aragón',
    category: 'folk',
    categoryLabel: 'Folk & Jota Regional',
    duration: '2:05',
    durationSec: 125,
    bpm: 148,
    mode: 'guitar',
    baseNote: 293.66,
    chords: [293.66, 349.23, 392.00, 293.66],
    audioUrl: '/audio/jota.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1583200424564-9b21a0845348?auto=format&fit=crop&w=800&q=80',
    description: 'Vigorous regional folk dance song of northern Spain featuring ringing bandurrias, guitars, and spirited high-leaping choreography.',
    culturalNote: 'Recognized as Intangible Cultural Heritage by UNESCO, the Jota is the centerpiece of the October Fiestas del Pilar in Zaragoza.',
    instruments: ['Bandurria', 'Laúd español', 'Guitarra', 'Castañuelas'],
    tags: ['Aragón', 'Zaragoza', 'Jota', 'Pilar', 'UNESCO']
  },
  {
    id: 'flamenco-dance-song',
    title: 'Danza y Canto Flamenco',
    spanishTitle: 'Danza y Canto (Baile con Zapateado)',
    composer: 'Tradicional Gitano-Español',
    region: 'Andalucía',
    category: 'folk',
    categoryLabel: 'Baile & Canto Tradicional',
    duration: '1:13',
    durationSec: 73,
    bpm: 136,
    mode: 'palmas',
    baseNote: 329.63,
    chords: [329.63, 349.23, 293.66, 329.63],
    audioUrl: '/audio/flamenco-dance-song.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic dance piece highlighting percussive shoe heel-work (taconeo), crisp guitar rasgueados, and enthusiastic vocal cries.',
    culturalNote: 'Captures the intense kinetic energy of traditional Andalusian dance peñas.',
    instruments: ['Zapateado flamenco', 'Guitarra de ciprés', 'Palmas'],
    tags: ['Baile', 'Taconeo', 'Zapateado', 'Flamenco', 'Danza']
  },

  // 5. SONIDOS DE ESPAÑA & TABLAO EN VIVO
  {
    id: 'cuadro-flamenco-vivo',
    title: 'Tablao Flamenco en Vivo',
    spanishTitle: 'Sonido Real: Cuadro Flamenco y Zapateado',
    composer: 'Sonido en Directo del Tablao',
    region: 'Sevilla & Granada',
    category: 'ambiente',
    categoryLabel: 'Sonidos de España & Tablao',
    duration: '5:28',
    durationSec: 328,
    bpm: 126,
    mode: 'palmas',
    baseNote: 261.63,
    chords: [261.63, 293.66, 329.63, 246.94],
    audioUrl: '/audio/cuadro-flamenco.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    description: 'Immersive live recording inside an authentic Spanish tablao. Listen to the thunderous heel-and-toe zapateado strikes on the wooden boards, crisp palmas sordas, and passionate shouts of «¡Olé!».',
    culturalNote: 'Tablaos are intimate venues where the pure, unamplified energy of flamenco comes alive inches from the audience.',
    instruments: ['Zapateado en tarima de madera', 'Palmas sordas y secas', 'Gritos de jaleo («¡Olé!»)', 'Guitarras en vivo'],
    tags: ['Tablao', 'Sonido Real', 'Zapateado', 'Jaleo', 'Sevilla', 'En Vivo']
  }
];

export const SPANISH_INSTRUMENTS: SpanishInstrument[] = [
  {
    id: 'guitarra',
    name: 'Spanish Classical & Flamenco Guitar',
    spanishName: 'La Guitarra Española / Flamenca',
    region: 'Andalucía & Toda España',
    category: 'Cuerda pulsada (Plucked strings)',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Spanish acoustic guitar crafted from fine woods',
    description: 'The defining instrument of Spanish identity. Spanish guitars feature a spruce or cedar soundboard, lightweight cypress (flamenco) or rosewood (classical) back and sides, and low string action for percussive golpe strikes.',
    culturalHeritage: 'Originated from Medieval Moorish lutes and the 16th-century vihuela, elevated into a concert solo instrument by Antonio de Torres and Andrés Segovia in Andalusia.',
    famousPlayers: ['Paco de Lucía', 'Andrés Segovia', 'Narciso Yepes', 'Vicente Amigo', 'Tomatito']
  },
  {
    id: 'castanuelas',
    name: 'Spanish Castanets',
    spanishName: 'Las Castañuelas / Palillos',
    region: 'Andalucía, Madrid & Castilla',
    category: 'Percusión de madera (Idiophone)',
    imageUrl: 'https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pair of hardwood Spanish castanets with ribbons',
    description: 'A pair of concave hardwood or fiber shells held in the hands. The higher-pitched «hembra» is played in the right hand with a rolling carretilla flourish, while the deeper «macho» keeps the steady pulse in the left.',
    culturalHeritage: 'Used across Spain for over two millennia from Iberian antiquity through classical escuela bolera and regional jotas.',
    famousPlayers: ['Lucero Tena', 'La Argentina (Antonia Mercé)', 'Carmen Amaya']
  },
  {
    id: 'cajon',
    name: 'Flamenco Box Drum',
    spanishName: 'El Cajón Flamenco',
    region: 'Andalucía (Introduced via Cádiz)',
    category: 'Percusión de madera (Box drum)',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Wooden flamenco cajon drum',
    description: 'A wooden box player sits upon, slapping the thin front face (tapa). Features internal guitar strings that produce a dry, snapping snare sound resembling traditional flamenco footwork (taconeo).',
    culturalHeritage: 'Discovered in Peru by Paco de Lucía and percussionist Rubem Dantas during a 1977 tour. In under a decade, it became an essential hallmark of modern flamenco.',
    famousPlayers: ['Rubem Dantas', 'Piraña (Israel Suárez)', 'Antonio Carmona']
  },
  {
    id: 'gaita',
    name: 'Galician & Asturian Bagpipe',
    spanishName: 'La Gaita Gallega / Asturiana',
    region: 'Galicia & Asturias',
    category: 'Viento con fuelle (Woodwind)',
    imageUrl: 'https://images.unsplash.com/photo-1583200424564-9b21a0845348?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Galician bagpiper in regional velvet attire',
    description: 'An ancient Celtic wind instrument consisting of an airtight leather bag, a blowpipe, a chanter (punteiro) with double reed, and one or more bass drone pipes (roncos) draped over the shoulder.',
    culturalHeritage: 'Reflects the 2,500-year Atlantic Celtic roots of northwestern Spain. Central to the Way of Saint James (Camino de Santiago) and Galician foliadas.',
    famousPlayers: ['Carlos Núñez', 'Cristina Pato', 'Hevia']
  }
];

export const MUSICAL_TERMS: MusicalTerm[] = [
  {
    term: 'Duende',
    pronunciation: '[ˈdwen.de]',
    translation: 'Mystical soul / artistic trance',
    meaning: 'The inexplicable, spirit-stirring power that overtakes a flamenco performer or listener during moments of raw emotional authenticity.',
    example: '«El cantaor tenía duende en cada quejío de su garganta.»'
  },
  {
    term: 'Compás',
    pronunciation: '[komˈpas]',
    translation: 'Rhythmic cycle / meter',
    meaning: 'The strict rhythmic framework of flamenco styles, often based on complex 12-beat syncopated loops with designated accent beats.',
    example: '«Llevar el compás con las palmas es el alma de la bulería.»'
  },
  {
    term: 'Palmas',
    pronunciation: '[ˈpal.mas]',
    translation: 'Flamenco hand-clapping percussion',
    meaning: 'Rhythmic hand-claps: «palmas sordas» (muffled, cupped for deep beats) and «palmas secas» (sharp, crisp fingers for accents).',
    example: '«El cuadro flamenco comenzó con palmas sordas marcando el tiempo.»'
  },
  {
    term: 'Cante Jondo',
    pronunciation: '[ˈkan.te ˈxon.do]',
    translation: 'Deep song / profound vocal',
    meaning: 'The most ancient, solemn branch of flamenco song expressing existential themes of love, grief, longing, and mortality.',
    example: '«Federico García Lorca organizó en Granada el primer concurso de Cante Jondo en 1922.»'
  },
  {
    term: 'Rasgueado',
    pronunciation: '[ras.ɣeˈa.ðo]',
    translation: 'Rhythmic finger-fan strumming',
    meaning: 'Fast, cascading flick of all four fingers across guitar strings, creating the thunderous percussive waves characteristic of Spanish guitar.',
    example: '«El guitarrista remató la falseta con un enérgico rasgueado.»'
  },
  {
    term: 'Falseta',
    pronunciation: '[falˈse.ta]',
    translation: 'Guitar melodic interlude',
    meaning: 'An expressive, virtuosic solo melody played by the guitarist between verses of the singer.',
    example: '«Paco de Lucía inventó falsetas que cambiaron la historia de la música.»'
  }
];
