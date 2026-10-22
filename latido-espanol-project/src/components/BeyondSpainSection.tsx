import React, { useMemo, useState } from 'react';
import { ArrowRight, Globe, Languages, MapPin, Search } from 'lucide-react';
import { BEYOND_SPAIN_DATA, BEYOND_SPAIN_REGIONS, BEYOND_SPAIN_SOURCES, BeyondSpainRegion } from '../data/beyondSpainData';
import { NavTab } from './Header';

interface BeyondSpainSectionProps {
  onSelectTab: (tab: NavTab) => void;
}

type RegionFilter = 'Todas' | BeyondSpainRegion;

const normalizeSearch = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('es');

export const BeyondSpainSection: React.FC<BeyondSpainSectionProps> = ({ onSelectTab }) => {
  const [region, setRegion] = useState<RegionFilter>('Todas');
  const [search, setSearch] = useState('');

  const filteredCultures = useMemo(() => {
    const query = normalizeSearch(search.trim());
    return BEYOND_SPAIN_DATA.filter((culture) => {
      const matchesRegion = region === 'Todas' || culture.region === region;
      const searchable = normalizeSearch([
        culture.country,
        culture.region,
        culture.culturalThread,
        culture.languageContext,
        culture.expression?.phrase ?? '',
      ].join(' '));
      return matchesRegion && (!query || searchable.includes(query));
    });
  }, [region, search]);

  return (
    <div className="space-y-10 sm:space-y-14">
      <header className="grid gap-8 rounded-[2rem] border border-[#222522]/10 bg-gradient-to-br from-[#FBF8F1] via-white to-[#F4EFE6] p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">
            <Globe className="h-4 w-4 text-[#A51E2D]" aria-hidden="true" />
            <span>APÉNDICE CULTURAL · EL MUNDO HISPANOHABLANTE</span>
          </div>
          <h1 className="font-serif text-4xl font-black leading-[1.08] text-[#222522] sm:text-5xl lg:text-6xl">
            Muchas culturas, muchas voces
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#222522]/80 sm:text-lg">
            El español conecta lugares distintos, pero no los hace iguales. Explora tradiciones, lenguas y expresiones de 19 países soberanos fuera de España y de Puerto Rico.
          </p>
        </div>
        <div className="rounded-2xl border border-[#52634D]/15 bg-white/80 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#A51E2D]">Cómo leer esta guía</p>
          <p className="mt-2 text-sm leading-6 text-[#222522]/80">
            Cada ficha ofrece una puerta de entrada, no un resumen de todo un país. Hay muchas culturas dentro de cada lugar, y las lenguas y expresiones cambian entre comunidades.
          </p>
        </div>
      </header>

      <section aria-labelledby="culture-directory-title" className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52634D]">20 fichas · 5 regiones</p>
            <h2 id="culture-directory-title" className="mt-2 font-serif text-3xl font-black text-[#222522] sm:text-4xl">
              Explora por región
            </h2>
          </div>
          <label className="relative w-full sm:max-w-xs">
            <span className="sr-only">Buscar país, tradición o lengua</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#52634D]" aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar país o tradición…"
              className="min-h-11 w-full rounded-xl border border-[#222522]/15 bg-white pl-10 pr-4 text-sm text-[#222522] outline-none transition placeholder:text-[#52634D]/70 focus:border-[#A51E2D] focus:ring-2 focus:ring-[#A51E2D]/15"
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar culturas por región">
          {(['Todas', ...BEYOND_SPAIN_REGIONS] as RegionFilter[]).map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={region === item}
              onClick={() => setRegion(item)}
              className={`min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D] ${
                region === item
                  ? 'border-[#A51E2D] bg-[#A51E2D] text-white shadow-sm'
                  : 'border-[#222522]/15 bg-white text-[#52634D] hover:border-[#A51E2D]/50 hover:text-[#A51E2D]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="text-sm text-[#52634D]" role="status" aria-live="polite">
          {filteredCultures.length === 1 ? '1 ficha' : `${filteredCultures.length} fichas`} de {BEYOND_SPAIN_DATA.length}
        </p>

        {filteredCultures.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredCultures.map((culture) => (
              <article key={culture.country} className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#222522]/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#A51E2D]/35 hover:shadow-md">
                <div className="flex items-center justify-between border-b border-[#222522]/10 bg-gradient-to-r from-[#F4EFE6] to-white px-5 py-3">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#52634D]">
                    <MapPin className="h-3.5 w-3.5 text-[#A51E2D]" aria-hidden="true" />
                    {culture.region}
                  </span>
                  <Globe className="h-4 w-4 text-[#A51E2D]/70" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl font-black text-[#222522]">{culture.country}</h3>

                  <section className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#A51E2D]">Una ventana cultural</h4>
                    <p className="mt-2 text-sm leading-6 text-[#222522]/85">{culture.culturalThread}</p>
                    <a href={culture.sourceUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-xs font-semibold leading-5 text-[#52634D] underline decoration-[#52634D]/30 underline-offset-2 hover:text-[#A51E2D]">
                      {culture.sourceLabel}
                    </a>
                  </section>

                  <section className="mt-5 border-t border-[#222522]/10 pt-4">
                    <h4 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#52634D]">
                      <Languages className="h-3.5 w-3.5 text-[#A51E2D]" aria-hidden="true" />
                      Lenguas y español
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#222522]/80">{culture.languageContext}</p>
                  </section>

                  {culture.expression && (
                    <section className="mt-5 rounded-xl bg-[#F4EFE6]/70 p-4">
                      <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#52634D]">Una expresión</h4>
                      <p className="mt-2 font-serif text-lg font-bold text-[#222522]">«{culture.expression.phrase}»</p>
                      <p className="mt-1 text-sm font-semibold text-[#52634D]">{culture.expression.translation}</p>
                      <p className="mt-2 text-xs leading-5 text-[#52634D]">{culture.expression.note}</p>
                    </section>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#52634D]/30 bg-[#F4EFE6]/50 px-5 py-10 text-center">
            <p className="font-serif text-xl font-bold text-[#222522]">No encontramos esa búsqueda</p>
            <p className="mt-2 text-sm text-[#52634D]">Prueba con otro país, región, lengua o tradición.</p>
            <button type="button" onClick={() => { setSearch(''); setRegion('Todas'); }} className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl bg-[#A51E2D] px-4 py-2 text-sm font-bold text-white hover:bg-[#861A27] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D]">
              Ver todas las fichas
            </button>
          </div>
        )}
      </section>

      <section className="grid gap-6 rounded-2xl border border-[#52634D]/20 bg-[#52634D]/5 p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#52634D] text-white"><Globe className="h-6 w-6" aria-hidden="true" /></div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#222522]">El español también viaja con las comunidades</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#222522]/80">
            Estas fichas no agotan el mapa: hay comunidades hispanohablantes en Estados Unidos, Belice y muchos otros lugares, además de diásporas por todo el mundo. Tampoco existe una única manera de vivir una cultura nacional.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#52634D]">
            {BEYOND_SPAIN_SOURCES.map((source) => (
              <a key={source.label} href={source.href} target="_blank" rel="noreferrer" className="underline decoration-[#52634D]/30 underline-offset-2 hover:text-[#A51E2D]">{source.label}</a>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-4 border-t border-[#222522]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm italic text-[#52634D]">«Una lengua compartida; muchas historias que escuchar.»</p>
        <button
          type="button"
          onClick={() => onSelectTab('destinos')}
          className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl bg-[#A51E2D] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#861A27] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A51E2D] sm:self-auto"
        >
          Volver a las ciudades de España
          <ArrowRight className="h-4 w-4 text-[#E2B342]" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
