import React, { useCallback, useState } from 'react';
import { Activity, ArrowRight, ExternalLink, MapPin, Sparkles, Trophy } from 'lucide-react';
import { GuideLanguage, MODERN_SPORTS, SPORTS_SOURCES, SPORTS_TIMELINE, TRADITIONAL_SPORTS } from '../data/heritageGuidesData';
import { GuideLanguageSwitch } from './GuideLanguageSwitch';
import { HeritageCardDetails, HeritageDetail } from './HeritageCardDetails';
import { TraditionalSportIllustration } from './TraditionalSportIllustration';
import { MODERN_SPORT_VISUALS, SPORTS_VISUALS } from './heritageVisualAssets';

const COPY = {
  es: {
    eyebrow: 'JUEGOS, MEMORIA Y DEPORTE · ESPAÑA',
    title: 'España también se entiende jugando',
    intro: 'De los frontones y las plazas a los estadios: conoce los juegos tradicionales que identifican a cada territorio y el recorrido de los deportes modernos.',
    language: 'Lee esta guía en',
    timeline: 'Un recorrido en cuatro tiempos',
    timelineIntro: 'Cómo convivieron los juegos comunitarios y el deporte organizado.',
    traditions: 'Juegos que cuentan el lugar',
    traditionsIntro: 'Cada modalidad tiene su espacio, sus reglas y su público. Abre una puerta a la cultura local.',
    modern: 'La pasión deportiva de hoy',
    modernIntro: 'Fútbol, baloncesto, ciclismo, tenis y golf están entre los deportes más conocidos del país.',
    today: 'ESPAÑA HOY',
    where: 'Cómo verlo',
    future: 'El relevo sigue en lo local',
    futureText: 'Para entender una región, busca sus escuelas deportivas, clubes y fiestas. Las competiciones tradicionales continúan transmitiéndose entre generaciones, junto a las disciplinas que se practican en todo el mundo.',
    sources: 'Fuentes y lecturas',
    note: 'Una selección representativa, no un inventario exhaustivo: cada comunidad conserva más juegos y variantes.',
    details: 'Ver detalles', close: 'Cerrar', period: 'Época', background: 'Contexto', format: 'Modalidades',
  },
  en: {
    eyebrow: 'GAMES, MEMORY AND SPORT · SPAIN',
    title: 'Spain can also be understood through play',
    intro: 'From frontón courts and village squares to stadiums: discover traditional games that express regional identity and trace the arrival of modern sports.',
    language: 'Read this guide in',
    timeline: 'A four-part journey',
    timelineIntro: 'How community games and organised sport came to live side by side.',
    traditions: 'Games rooted in place',
    traditionsIntro: 'Every discipline has its own venue, rules and audience. Each offers a doorway into local culture.',
    modern: 'Sporting passions today',
    modernIntro: 'Football, basketball, cycling, tennis and golf are among the country’s best-known sports.',
    today: 'SPAIN TODAY',
    where: 'How to watch',
    future: 'The next generation starts locally',
    futureText: 'To understand a region, look for its sports schools, clubs and festivals. Traditional competitions continue to pass between generations alongside sports practised around the world.',
    sources: 'Sources and further reading',
    note: 'A representative selection, not an exhaustive inventory: every region preserves more games and local variations.',
    details: 'View details', close: 'Close', period: 'Period', background: 'Background', format: 'Forms of play',
  },
  te: {
    eyebrow: 'ఆటలు, జ్ఞాపకం, క్రీడలు · స్పెయిన్',
    title: 'ఆటల ద్వారా కూడా స్పెయిన్‌ను తెలుసుకోవచ్చు',
    intro: 'ఫ్రంటోన్ మైదానాలు, గ్రామ చౌరస్తాల నుంచి స్టేడియాల వరకు: ప్రాంతీయ గుర్తింపును తెలిపే సంప్రదాయ ఆటలను, ఆధునిక క్రీడల ప్రయాణాన్ని తెలుసుకోండి.',
    language: 'ఈ మార్గదర్శిని చదవండి',
    timeline: 'నాలుగు దశల ప్రయాణం',
    timelineIntro: 'సమాజపు ఆటలు, క్రమబద్ధమైన క్రీడలు ఎలా కలిసి కొనసాగాయో.',
    traditions: 'ప్రాంతపు కథలు చెప్పే ఆటలు',
    traditionsIntro: 'ప్రతి ఆటకు తనదైన వేదిక, నియమాలు, ప్రేక్షకులు ఉంటారు. అవి స్థానిక సంస్కృతికి ద్వారం తెరుస్తాయి.',
    modern: 'నేటి క్రీడా ఆసక్తులు',
    modernIntro: 'ఫుట్‌బాల్, బాస్కెట్‌బాల్, సైక్లింగ్, టెన్నిస్, గోల్ఫ్ దేశంలో ప్రసిద్ధ క్రీడల్లో ఉన్నాయి.',
    today: 'నేటి స్పెయిన్',
    where: 'ఎలా చూడాలి',
    future: 'తరువాతి తరం స్థానికంగానే మొదలవుతుంది',
    futureText: 'ఒక ప్రాంతాన్ని అర్థం చేసుకోవాలంటే దాని క్రీడా పాఠశాలలు, క్లబ్‌లు, ఉత్సవాల గురించి తెలుసుకోండి. ప్రపంచవ్యాప్తంగా ఆడే క్రీడలతో పాటు సంప్రదాయ పోటీలు తరతరాలుగా కొనసాగుతున్నాయి.',
    sources: 'ఆధారాలు, మరింత చదవడానికి',
    note: 'ఇది ప్రతినిధి ఎంపిక మాత్రమే; ప్రతి ప్రాంతంలో ఇంకా అనేక ఆటలు, స్థానిక రూపాలు ఉన్నాయి.',
    details: 'వివరాలు చూడండి', close: 'మూసివేయి', period: 'కాలం', background: 'నేపథ్యం', format: 'ఆట విధానాలు',
  },
} satisfies Record<GuideLanguage, Record<string, string>>;

const TIMELINE_TITLES: Record<GuideLanguage, string[]> = {
  es: SPORTS_TIMELINE.map((item) => item.title),
  en: ['The square, the frontón and the festival', 'New clubs and modern sports', 'Spain enters the international arena', 'Sport still tells local stories'],
  te: ['చౌరస్తా, ఫ్రంటోన్, ఉత్సవం', 'కొత్త క్లబ్‌లు, ఆధునిక క్రీడలు', 'అంతర్జాతీయ వేదికపై స్పెయిన్', 'క్రీడలు ఇప్పటికీ స్థానిక కథలు చెబుతాయి'],
};

const SPORT_NAME_TRANSLATIONS: Record<GuideLanguage, string[]> = {
  es: TRADITIONAL_SPORTS.map((sport) => sport.name),
  en: ['Basque pelota', 'Valencian pilota', 'Canarian wrestling', 'Aragonese bar throw', 'Murcian caliche', 'Asturian bowling', 'Leonese wrestling · aluche', 'Traineras rowing'],
  te: ['బాస్క్ పెలోటా', 'వాలెన్సియన్ పిలోటా', 'కెనరీ ద్వీపాల కుస్తీ', 'అరగోనీస్ కడ్డీ విసురు', 'ముర్సియన్ కాలిచే', 'అస్టూరియన్ బౌలింగ్', 'లియోన్ కుస్తీ · అలూచే', 'ట్రైనెరాస్ పడవ పందెం'],
};

const PERIOD_LABELS: Record<GuideLanguage, string[]> = {
  es: SPORTS_TIMELINE.map((item) => item.period),
  en: ['Local roots', 'Late 19th century', '1920 and after', 'Today: tradition and renewal'],
  te: ['స్థానిక మూలాలు', '19వ శతాబ్దం చివర', '1920 తర్వాత', 'నేడు: సంప్రదాయం, కొత్త తరం'],
};

export const SportsSection: React.FC = () => {
  const [language, setLanguage] = useState<GuideLanguage>('es');
  const [selectedDetail, setSelectedDetail] = useState<HeritageDetail | null>(null);
  const closeDetail = useCallback(() => setSelectedDetail(null), []);
  const copy = COPY[language];

  return (
    <div className="space-y-12 sm:space-y-16">
      <header className="grid gap-8 rounded-[2rem] border border-[#222522]/10 bg-gradient-to-br from-[#FBF8F1] via-white to-[#F4EFE6] p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
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

      <section aria-labelledby="sports-timeline-title" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">{copy.timelineIntro}</p>
            <h2 id="sports-timeline-title" className="mt-2 font-serif text-3xl font-black text-[#222522] sm:text-4xl">{copy.timeline}</h2>
          </div>
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#A51E2D]/10 text-[#A51E2D] sm:flex"><Activity className="h-6 w-6" /></div>
        </div>
        <div className="grid gap-3 lg:grid-cols-4">
          {SPORTS_TIMELINE.map((item, index) => (
            <button
              type="button"
              key={item.title}
              aria-haspopup="dialog"
              onClick={() => setSelectedDetail({ eyebrow: PERIOD_LABELS[language][index], title: TIMELINE_TITLES[language][index], sections: [
                { label: copy.period, text: PERIOD_LABELS[language][index] },
                { label: copy.background, text: item.copy[language] },
              ] })}
              className="group relative overflow-hidden rounded-2xl border border-[#222522]/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#A51E2D]/35 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D]"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="rounded-full bg-[#F4EFE6] px-3 py-1 text-xs font-bold text-[#52634D]">{PERIOD_LABELS[language][index]}</span>
                <span className="font-mono text-xs font-bold text-[#A51E2D]">0{index + 1}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222522]">{TIMELINE_TITLES[language][index]}</h3>
              <p className="mt-3 text-sm leading-6 text-[#222522]/80">{item.copy[language]}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#A51E2D]">{copy.details}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" /></span>
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="regional-games-title" className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">{copy.traditionsIntro}</p>
          <h2 id="regional-games-title" className="font-serif text-3xl font-black text-[#222522] sm:text-4xl">{copy.traditions}</h2>
          <p className="text-sm leading-6 text-[#52634D]">{copy.note}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TRADITIONAL_SPORTS.map((sport, index) => {
            const visual = SPORTS_VISUALS[index];
            return (
              <figure key={sport.name} className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#222522]/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#A51E2D]/35 hover:shadow-md">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedDetail({ eyebrow: sport.region, title: SPORT_NAME_TRANSLATIONS[language][index], sections: [
                    { label: copy.background, text: sport.summary[language] },
                    { label: copy.format, text: sport.format },
                    { label: copy.where, text: sport.howToWatch[language] },
                  ] })}
                  className="group flex w-full flex-1 flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#A51E2D]"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[#A51E2D] via-[#BA6649] to-[#E2B342]">
                    {visual.src ? (
                      <img src={visual.src} alt={visual.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    ) : (
                      <TraditionalSportIllustration kind={visual.illustration ?? 'bar-throw'} label={visual.alt} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/85 via-[#171513]/20 to-transparent" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                      <div>
                        <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/90"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />{sport.region}</span>
                        <h3 className="font-serif text-2xl font-bold leading-tight">{SPORT_NAME_TRANSLATIONS[language][index]}</h3>
                        {language !== 'es' && <p className="mt-1 text-xs font-semibold text-white/85">{sport.name}</p>}
                      </div>
                      <span className="font-mono text-sm font-bold text-white/80">0{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#52634D]">{sport.format}</p>
                    <p className="mt-3 text-sm leading-6 text-[#222522]/85">{sport.summary[language]}</p>
                    <div className="mt-auto border-t border-[#222522]/10 pt-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#A51E2D]">{copy.where}</p>
                      <p className="mt-1 text-sm leading-6 text-[#52634D]">{sport.howToWatch[language]}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#A51E2D]">{copy.details}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                  </div>
                </button>
                <figcaption className="flex flex-wrap items-center gap-x-1 px-4 pb-3 text-[10px] leading-4 text-[#52634D]">
                  <span>{visual.src ? (language === 'es' ? 'Foto:' : language === 'en' ? 'Photo:' : 'ఫోటో:') : (language === 'es' ? 'Ilustración:' : language === 'en' ? 'Illustration:' : 'చిత్రం:')}</span>
                  {visual.sourceUrl ? <a href={visual.sourceUrl} target="_blank" rel="noreferrer" className="underline decoration-[#52634D]/30 underline-offset-2 hover:text-[#A51E2D]">{visual.credit}</a> : <span>{visual.credit}</span>}
                  {visual.license && visual.licenseUrl && <><span aria-hidden="true">·</span><a href={visual.licenseUrl} target="_blank" rel="noreferrer" className="underline decoration-[#52634D]/30 underline-offset-2 hover:text-[#A51E2D]">{visual.license}</a></>}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="modern-sports-title" className="space-y-6 rounded-[2rem] bg-[#222522] p-6 text-[#FBF8F1] sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E2B342]">{copy.modernIntro}</p>
            <h2 id="modern-sports-title" className="mt-2 font-serif text-3xl font-black sm:text-4xl">{copy.modern}</h2>
          </div>
          <Trophy className="h-8 w-8 text-[#E2B342]" aria-hidden="true" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {MODERN_SPORTS.map((sport, index) => {
            const visual = MODERN_SPORT_VISUALS[index];
            return (
              <figure key={sport.name} className="flex h-full flex-col overflow-hidden rounded-xl border border-white/15 bg-white/5 transition hover:-translate-y-0.5 hover:border-[#E2B342]/60 hover:bg-white/10">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedDetail({ eyebrow: copy.today, title: sport.name, sections: [
                    { label: copy.modern, text: sport.summary[language] },
                  ] })}
                  className="group flex w-full flex-1 flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E2B342]"
                >
                  <img src={visual.src} alt={visual.alt} loading="lazy" decoding="async" className="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                  <div className="flex flex-1 flex-col p-4">
                    <span className="font-mono text-xs font-bold text-[#E2B342]">0{index + 1} · {copy.today}</span>
                    <h3 className="mt-2 font-serif text-xl font-bold">{sport.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">{sport.summary[language]}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#E2B342]">{copy.details}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                  </div>
                </button>
                <figcaption className="flex flex-wrap items-center gap-x-1 border-t border-white/10 px-4 py-2 text-[10px] leading-4 text-white/65">
                  <span>{language === 'es' ? 'Foto:' : language === 'en' ? 'Photo:' : 'ఫోటో:'}</span>
                  <a href={visual.sourceUrl} target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-2 hover:text-white">{visual.credit}</a>
                  {visual.license && visual.licenseUrl && <><span aria-hidden="true">·</span><a href={visual.licenseUrl} target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-2 hover:text-white">{visual.license}</a></>}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-[#52634D]/20 bg-[#52634D]/5 p-6 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#52634D] text-white"><Trophy className="h-6 w-6" /></div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#222522]">{copy.future}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#222522]/80">{copy.futureText}</p>
        </div>
        <ArrowRight className="hidden h-5 w-5 text-[#A51E2D] sm:block" aria-hidden="true" />
      </section>

      <section aria-labelledby="sports-sources-title" className="space-y-4 border-t border-[#222522]/10 pt-8">
        <h2 id="sports-sources-title" className="font-serif text-2xl font-bold text-[#222522]">{copy.sources}</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          {SPORTS_SOURCES.map((source) => (
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
