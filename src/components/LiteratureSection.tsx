import React, { useCallback, useState } from 'react';
import { ArrowRight, BookOpen, BookText, ExternalLink, Feather, Languages, Library, Sparkles } from 'lucide-react';
import { GuideLanguage, LITERATURE_GENRES, LITERATURE_LANGUAGES, LITERATURE_SOURCES, LITERATURE_TIMELINE, READING_PATHS } from '../data/heritageGuidesData';
import { GuideLanguageSwitch } from './GuideLanguageSwitch';
import { HeritageCardDetails, HeritageDetail } from './HeritageCardDetails';
import { LITERATURE_ERA_VISUALS } from './heritageVisualAssets';

const COPY = {
  es: {
    eyebrow: 'LIBROS, VOCES Y LENGUAS · ESPAÑA',
    title: 'Mil maneras de contar España',
    intro: 'Una guía clara para recorrer la literatura de España desde la Edad Media hasta hoy: sus épocas, géneros, lenguas y caminos de lectura.',
    language: 'Lee esta guía en',
    timeline: 'Una historia de muchas voces',
    timelineIntro: 'La literatura cambia con cada época, pero nunca cabe en un solo género ni en una sola lengua.',
    genres: '¿Qué te apetece leer?',
    genresIntro: 'La tradición española no es solo una lista de clásicos: hay formatos breves, humor, aventura, poesía, teatro y cómic.',
    languages: 'España también escribe en varias lenguas',
    languagesIntro: 'El castellano es una de las grandes tradiciones literarias del país. El catalán/valenciano, el gallego y el euskera también cuentan con historias y voces propias.',
    paths: 'Encuentra tu puerta de entrada',
    pathsIntro: 'No hace falta empezar por una obra larga ni leer con un orden fijo. Elige por tema, formato o curiosidad.',
    readingLife: 'Leer también es compartir',
    readingLifeText: 'Bibliotecas, librerías, presentaciones, ferias y clubes de lectura permiten descubrir autores junto a otras personas. El Instituto Cervantes organiza clubes de lectura presenciales y virtuales; son una forma amable de empezar a conversar sobre libros.',
    sources: 'Fuentes y lecturas para continuar',
    period: 'ÉPOCA',
    works: 'Para empezar',
    about: 'Idea clave',
    details: 'Ver detalles', close: 'Cerrar', examples: 'Ejemplos', authors: 'Autores y voces', entry: 'Una forma de empezar',
  },
  en: {
    eyebrow: 'BOOKS, VOICES AND LANGUAGES · SPAIN',
    title: 'A thousand ways to tell Spain’s stories',
    intro: 'A clear guide to Spain’s literature from the Middle Ages to today: its eras, genres, languages and ways into reading.',
    language: 'Read this guide in',
    timeline: 'A history of many voices',
    timelineIntro: 'Literature changes with each era, but never fits into one genre or one language.',
    genres: 'What would you like to read?',
    genresIntro: 'Spanish literary tradition is more than a list of classics: explore short forms, humour, adventure, poetry, theatre and comics.',
    languages: 'Spain also writes in many languages',
    languagesIntro: 'Spanish is one of the country’s major literary traditions. Catalan/Valencian, Galician and Basque also have their own histories and voices.',
    paths: 'Find your way in',
    pathsIntro: 'You do not have to begin with a long classic or follow a fixed order. Choose by subject, format or curiosity.',
    readingLife: 'Reading is something to share',
    readingLifeText: 'Libraries, bookshops, author events, book fairs and reading groups help people discover books together. The Instituto Cervantes runs in-person and online reading groups: a welcoming way to start talking about books.',
    sources: 'Sources and further reading',
    period: 'PERIOD',
    works: 'A place to start',
    about: 'Key idea',
    details: 'View details', close: 'Close', examples: 'Examples', authors: 'Authors and voices', entry: 'A place to begin',
  },
  te: {
    eyebrow: 'పుస్తకాలు, స్వరాలు, భాషలు · స్పెయిన్',
    title: 'స్పెయిన్ కథలు చెప్పే వెయ్యి మార్గాలు',
    intro: 'మధ్యయుగం నుంచి నేటి వరకు స్పెయిన్ సాహిత్యం: కాలాలు, ప్రక్రియలు, భాషలు, చదవడం ప్రారంభించే మార్గాలపై సులభమైన పరిచయం.',
    language: 'ఈ మార్గదర్శిని చదవండి',
    timeline: 'అనేక స్వరాల సాహిత్య చరిత్ర',
    timelineIntro: 'ప్రతి కాలంతో సాహిత్యం మారుతుంది; అది ఒక్క ప్రక్రియలోనో ఒక్క భాషలోనో ఇమడదు.',
    genres: 'మీకు ఏది చదవాలనిపిస్తోంది?',
    genresIntro: 'స్పానిష్ సాహిత్యం క్లాసిక్‌ల జాబితా మాత్రమే కాదు: చిన్న రచనలు, హాస్యం, సాహసం, కవిత్వం, నాటకం, కామిక్స్ కూడా ఉన్నాయి.',
    languages: 'స్పెయిన్‌లో అనేక భాషల్లో రచనలు',
    languagesIntro: 'స్పానిష్ దేశంలోని ప్రధాన సాహిత్య సంప్రదాయాల్లో ఒకటి. కాటలాన్/వాలెన్సియన్, గలీషియన్, బాస్క్ భాషలకూ స్వంత చరిత్రలు, స్వరాలు ఉన్నాయి.',
    paths: 'మీకు నచ్చే ఆరంభాన్ని ఎంచుకోండి',
    pathsIntro: 'పొడవైన క్లాసిక్‌తోనే మొదలుపెట్టాల్సిన అవసరం లేదు; ఒక క్రమంలో చదవాల్సిన పనీ లేదు. విషయం, రూపం లేదా ఆసక్తి ఆధారంగా ఎంచుకోండి.',
    readingLife: 'చదవడం పంచుకునే అనుభవం కూడా',
    readingLifeText: 'గ్రంథాలయాలు, పుస్తక దుకాణాలు, రచయితల సమావేశాలు, పుస్తక ప్రదర్శనలు, పఠన క్లబ్‌లు కలిసి కొత్త రచయితలను పరిచయం చేస్తాయి. ఇన్‌స్టిట్యూటో సెర్వాంటెస్ ప్రత్యక్ష, ఆన్‌లైన్ పఠన క్లబ్‌లను నిర్వహిస్తుంది; పుస్తకాల గురించి మాట్లాడటం ప్రారంభించడానికి ఇది స్నేహపూర్వక మార్గం.',
    sources: 'ఆధారాలు, మరింత చదవడానికి',
    period: 'కాలం',
    works: 'చదవడం మొదలు పెట్టండి',
    about: 'ముఖ్య భావన',
    details: 'వివరాలు చూడండి', close: 'మూసివేయి', examples: 'ఉదాహరణలు', authors: 'రచయితలు, స్వరాలు', entry: 'ప్రారంభించడానికి ఒక మార్గం',
  },
} satisfies Record<GuideLanguage, Record<string, string>>;

const ERA_LABELS: Record<GuideLanguage, string[]> = {
  es: LITERATURE_TIMELINE.map((item) => item.period),
  en: ['Middle Ages · 11th–15th centuries', 'Renaissance · 16th century', 'Golden Age · 16th–17th centuries', 'Enlightenment and Romanticism · 18th–19th centuries', 'Realism and Naturalism · 19th century', 'Silver Age · 1898–1936', 'Civil War, exile and post-war · 1936–1975', 'Democracy and today · 1975–present'],
  te: ['మధ్యయుగం · 11–15వ శతాబ్దాలు', 'రెనైసాన్స్ · 16వ శతాబ్దం', 'స్వర్ణయుగం · 16–17వ శతాబ్దాలు', 'జ్ఞానోదయం, రొమాంటిసిజం · 18–19వ శతాబ్దాలు', 'వాస్తవికత, సహజవాదం · 19వ శతాబ్దం', 'సిల్వర్ ఏజ్ · 1898–1936', 'అంతర్యుద్ధం, ప్రవాసం, యుద్ధానంతరం · 1936–1975', 'ప్రజాస్వామ్యం, నేటి కాలం · 1975–ప్రస్తుతం'],
};

const ERA_TITLES: Record<GuideLanguage, string[]> = {
  es: LITERATURE_TIMELINE.map((item) => item.title),
  en: ['Oral voices, epic and early storytelling', 'New ways of seeing the individual', 'The novel, poetry and theatre flourish', 'Ideas, emotion and freedom', 'Society enters the novel', 'Generations, magazines and the avant-garde', 'Writing through rupture', 'Many voices, formats and languages'],
  te: ['మౌఖిక స్వరాలు, వీరగాథ, తొలి కథనం', 'వ్యక్తిని చూసే కొత్త దృక్కోణాలు', 'నవల, కవిత్వం, నాటకం విస్తరించిన కాలం', 'ఆలోచనలు, భావోద్వేగం, స్వేచ్ఛ', 'సమాజం నవలలోకి వచ్చింది', 'తరాలు, పత్రికలు, ఆధునిక ప్రయోగాలు', 'విభజన కాలంలో రచన', 'అనేక స్వరాలు, రూపాలు, భాషలు'],
};

const GENRE_LABELS: Record<GuideLanguage, string[]> = {
  es: LITERATURE_GENRES.map((genre) => genre.name),
  en: ['Novel', 'Poetry', 'Theatre', 'Short story', 'Essay and chronicle', 'Oral tradition', 'Children’s and young adult', 'Comics and graphic novel'],
  te: ['నవల', 'కవిత్వం', 'నాటకం', 'చిన్న కథ', 'వ్యాసం, క్రానికల్', 'మౌఖిక సంప్రదాయం', 'బాల, యువ సాహిత్యం', 'కామిక్స్, గ్రాఫిక్ నవల'],
};

const PATH_TITLES: Record<GuideLanguage, string[]> = {
  es: READING_PATHS.map((path) => path.title),
  en: ['I want to start with something short', 'I’m interested in history and everyday life', 'I prefer voices on stage', 'I want to discover more than one language'],
  te: ['చిన్న రచనతో మొదలుపెట్టాలనుకుంటున్నాను', 'చరిత్ర, రోజువారీ జీవితం ఆసక్తిగా ఉంది', 'రంగస్థల స్వరాలు ఇష్టం', 'ఒకటి కంటే ఎక్కువ భాషలు తెలుసుకోవాలి'],
};

export const LiteratureSection: React.FC = () => {
  const [language, setLanguage] = useState<GuideLanguage>('es');
  const [selectedDetail, setSelectedDetail] = useState<HeritageDetail | null>(null);
  const closeDetail = useCallback(() => setSelectedDetail(null), []);
  const copy = COPY[language];

  return (
    <div className="space-y-12 sm:space-y-16">
      <header className="grid gap-8 overflow-hidden rounded-[2rem] border border-[#222522]/10 bg-gradient-to-br from-[#FBF8F1] via-white to-[#F4EFE6] p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">
            <Sparkles className="h-4 w-4 text-[#A51E2D]" aria-hidden="true" />
            <span>{copy.eyebrow}</span>
          </div>
          <h1 className="font-serif text-4xl font-black leading-[1.08] text-[#222522] sm:text-5xl lg:text-6xl">{copy.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-[#222522]/80 sm:text-lg">{copy.intro}</p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#52634D]">{copy.language}</span>
          <GuideLanguageSwitch language={language} onChange={setLanguage} />
        </div>
      </header>

      <section aria-labelledby="literature-timeline-title" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">{copy.timelineIntro}</p>
            <h2 id="literature-timeline-title" className="mt-2 font-serif text-3xl font-black text-[#222522] sm:text-4xl">{copy.timeline}</h2>
          </div>
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#A51E2D]/10 text-[#A51E2D] sm:flex"><BookOpen className="h-6 w-6" /></div>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {LITERATURE_TIMELINE.map((era, index) => {
            const visual = LITERATURE_ERA_VISUALS[index];
            return (
              <figure key={era.period} className="overflow-hidden rounded-2xl border border-[#222522]/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#A51E2D]/35 hover:shadow-md">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedDetail({ eyebrow: ERA_LABELS[language][index], title: ERA_TITLES[language][index], sections: [
                    { label: copy.period, text: ERA_LABELS[language][index] },
                    { label: copy.about, text: era.copy[language] },
                    { label: copy.works, text: era.reading },
                  ] })}
                  className="group grid w-full gap-4 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#A51E2D] sm:grid-cols-[10rem_minmax(0,1fr)] sm:p-5"
                >
                  <div className="flex flex-col gap-3 border-b border-[#222522]/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full rounded-xl object-cover sm:h-28"
                    />
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold leading-5 text-[#52634D]">{ERA_LABELS[language][index]}</span>
                      <span className="font-mono text-xs font-bold text-[#222522]/40">0{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#A51E2D]">{copy.period}</span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-[#222522]">{ERA_TITLES[language][index]}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#222522]/80">{era.copy[language]}</p>
                    <div className="mt-4 rounded-xl bg-[#F4EFE6]/70 p-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#52634D]">{copy.works}</span>
                      <p className="mt-1 text-sm font-semibold text-[#A51E2D]">{era.reading}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#A51E2D]">{copy.details}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                  </div>
                </button>
                <figcaption className="flex flex-wrap items-center gap-x-1 px-4 pb-3 text-[10px] leading-4 text-[#52634D] sm:px-5">
                  <span>{language === 'es' ? 'Imagen:' : language === 'en' ? 'Image:' : 'చిత్రం:'}</span>
                  <a href={visual.sourceUrl} target="_blank" rel="noreferrer" className="underline decoration-[#52634D]/30 underline-offset-2 hover:text-[#A51E2D]">{visual.credit}</a>
                  {visual.license && visual.licenseUrl && <><span aria-hidden="true">·</span><a href={visual.licenseUrl} target="_blank" rel="noreferrer" className="underline decoration-[#52634D]/30 underline-offset-2 hover:text-[#A51E2D]">{visual.license}</a></>}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="literature-genres-title" className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">{copy.genresIntro}</p>
          <h2 id="literature-genres-title" className="font-serif text-3xl font-black text-[#222522] sm:text-4xl">{copy.genres}</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {LITERATURE_GENRES.map((genre, index) => (
            <button
              type="button"
              key={genre.name}
              aria-haspopup="dialog"
              onClick={() => setSelectedDetail({ eyebrow: copy.genres, title: GENRE_LABELS[language][index], sections: [
                { label: copy.about, text: genre.copy[language] },
                { label: copy.examples, text: genre.examples },
              ] })}
              className="group rounded-2xl border border-[#222522]/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#A51E2D]/35 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#52634D]/10 text-[#52634D]">
                {index === 0 || index === 3 || index === 6 || index === 7 ? <BookText className="h-5 w-5" /> : <Feather className="h-5 w-5" />}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222522]">{GENRE_LABELS[language][index]}</h3>
              <p className="mt-2 text-sm leading-6 text-[#222522]/80">{genre.copy[language]}</p>
              <p className="mt-4 border-t border-[#222522]/10 pt-3 text-xs font-semibold text-[#A51E2D]">{genre.examples}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#A51E2D]">{copy.details}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" /></span>
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="literature-languages-title" className="space-y-6 rounded-[2rem] bg-[#222522] p-6 text-[#FBF8F1] sm:p-10">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E2B342]">{copy.languagesIntro}</p>
          <h2 id="literature-languages-title" className="mt-2 font-serif text-3xl font-black sm:text-4xl">{copy.languages}</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {LITERATURE_LANGUAGES.map((item) => (
            <button
              type="button"
              key={item.name}
              aria-haspopup="dialog"
              onClick={() => setSelectedDetail({ eyebrow: copy.languages, title: item.name, sections: [
                { label: item.label, text: item.copy[language] },
                { label: copy.authors, text: item.authors },
              ] })}
              className="group rounded-xl border border-white/15 bg-white/5 p-5 text-left transition hover:-translate-y-0.5 hover:border-[#E2B342]/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B342]"
            >
              <Languages className="mb-4 h-5 w-5 text-[#E2B342]" aria-hidden="true" />
              <h3 className="font-serif text-xl font-bold">{item.name}</h3>
              <p className="mt-1 text-xs font-semibold text-[#E2B342]">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-white/80">{item.copy[language]}</p>
              <p className="mt-4 border-t border-white/15 pt-3 text-xs font-semibold text-white/70">{item.authors}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#E2B342]">{copy.details}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" /></span>
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="reading-paths-title" className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">{copy.pathsIntro}</p>
          <h2 id="reading-paths-title" className="font-serif text-3xl font-black text-[#222522] sm:text-4xl">{copy.paths}</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {READING_PATHS.map((path, index) => (
            <button
              type="button"
              key={path.title}
              aria-haspopup="dialog"
              onClick={() => setSelectedDetail({ eyebrow: copy.paths, title: PATH_TITLES[language][index], sections: [
                { label: copy.about, text: path.copy[language] },
                { label: copy.entry, text: path.suggestion },
              ] })}
              className="group flex gap-4 rounded-2xl border border-[#222522]/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#A51E2D]/35 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A51E2D] font-mono text-sm font-bold text-white">0{index + 1}</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#222522]">{PATH_TITLES[language][index]}</h3>
                <p className="mt-2 text-sm leading-6 text-[#222522]/80">{path.copy[language]}</p>
                <p className="mt-3 text-xs font-bold text-[#A51E2D]">{path.suggestion}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#A51E2D]">{copy.details}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" /></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 rounded-2xl border border-[#E2B342]/50 bg-[#E2B342]/10 p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E2B342] text-[#222522]"><Library className="h-6 w-6" /></div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#222522]">{copy.readingLife}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#222522]/80">{copy.readingLifeText}</p>
          <a href="https://clubes-virtuales.cervantes.es/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#A51E2D] underline decoration-[#A51E2D]/30 underline-offset-4 hover:text-[#861A27]">
            <BookOpen className="h-4 w-4" /> Instituto Cervantes · Clubes de lectura <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <section aria-labelledby="literature-sources-title" className="space-y-4 border-t border-[#222522]/10 pt-8">
        <h2 id="literature-sources-title" className="font-serif text-2xl font-bold text-[#222522]">{copy.sources}</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          {LITERATURE_SOURCES.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#52634D] underline decoration-[#52634D]/30 underline-offset-4 hover:text-[#A51E2D]">
                {source.label}<ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <HeritageCardDetails detail={selectedDetail} closeLabel={copy.close} onClose={closeDetail} />
    </div>
  );
};
