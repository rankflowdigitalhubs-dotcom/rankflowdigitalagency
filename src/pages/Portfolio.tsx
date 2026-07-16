import { useState, useEffect, useCallback } from 'react';
import {
  ArrowUpRight, X, Check, Wrench, Target, Lightbulb, TrendingUp,
  Search, Code, MapPin, FileText, Gauge, Building2,
  type LucideIcon,
} from 'lucide-react';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, CTASection } from '../components';
import { portfolioItems, type PortfolioItem } from '../data';
import { Link } from '../router';

const categoryIcons: Record<string, LucideIcon> = {
  'SEO Audit': Search,
  'Technical SEO': Code,
  'Local SEO': MapPin,
  'Keyword Research': Target,
  'Content': FileText,
  'On-Page SEO': Wrench,
  'Website Speed': Gauge,
  'GBP': Building2,
};

const categories = ['All', ...Array.from(new Set(portfolioItems.map((p) => p.category)))];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = active === 'All' ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our sample SEO projects: audit samples, technical SEO examples, local SEO samples, keyword research, content writing, and on-page optimization."
        path="/portfolio"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }])}
      />
      <PageHero
        eyebrow="Portfolio"
        title={<>Sample projects & <span className="text-gradient">demo work</span></>}
        subtitle="A collection of clearly labeled sample projects and portfolio examples demonstrating our SEO methodology, reporting format, and approach across industries."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }]}
      />

      {/* Disclaimer banner */}
      <section className="container-x -mt-4">
        <div className="grad-border rounded-2xl">
          <div className="flex items-start gap-3 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 p-4 sm:p-5">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
              <Lightbulb className="h-4 w-4" />
            </div>
            <p className="text-sm leading-relaxed text-amber-100/80">
              <span className="font-semibold text-amber-200">Note:</span> All projects below are sample/demo projects created to demonstrate our methodology and reporting format. They do not represent real client data or results.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-ink-950 shadow-card-hover-sm'
                  : 'border border-slate-200 bg-slate-50 text-ink-600 hover:border-brand-400/40 hover:text-ink-950'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => {
            const Icon = categoryIcons[item.category] ?? Search;
            return (
              <button
                key={item.slug}
                onClick={() => setSelected(item)}
                className={`group grad-border lift reveal reveal-delay-${(i % 3) + 1} text-left`}
              >
                <div className="overflow-hidden rounded-3xl">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-3xl">
                    <img
                      src={item.img}
                      alt={`${item.title} — ${item.category} sample project for ${item.industry} industry`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-50/30 to-transparent" />
                    {/* Sample tag */}
                    <span className="absolute left-4 top-4 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-ink-950 shadow-lg">
                      {item.tag}
                    </span>
                    {/* Category icon */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <Icon className="h-5 w-5 text-ink-950" />
                    </div>
                    {/* Arrow on hover */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-brand-500/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5 text-ink-950" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="rounded-b-3xl bg-white p-6">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-brand-600" />
                      <span className="text-xs uppercase tracking-wider text-brand-600">{item.category}</span>
                      <span className="text-ink-600">·</span>
                      <span className="text-xs text-ink-600">{item.industry}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-ink-950">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">{item.overview}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.services.slice(0, 3).map((s) => (
                        <span key={s} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-ink-600">
                          {s}
                        </span>
                      ))}
                      {item.services.length > 3 && (
                        <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-ink-600">
                          +{item.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Quick links to services */}
      <section className="container-x py-12">
        <div className="text-center">
          <span className="eyebrow reveal">Our Services</span>
          <h2 className="mt-4 text-2xl font-bold text-ink-950 reveal reveal-delay-1">Ready to get started?</h2>
          <p className="mt-3 text-ink-600">Explore our services and see how we can help your business grow.</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/seo/" className="btn-ghost text-sm">SEO Services</Link>
          <Link to="/local-seo/" className="btn-ghost text-sm">Local SEO</Link>
          <Link to="/technical-seo/" className="btn-ghost text-sm">Technical SEO</Link>
          <Link to="/seo-audit/" className="btn-ghost text-sm">SEO Audit</Link>
          <Link to="/link-building/" className="btn-ghost text-sm">Link Building</Link>
          <Link to="/content-writing/" className="btn-ghost text-sm">Content Writing</Link>
          <Link to="/website-design/" className="btn-ghost text-sm">Web Design</Link>
        </div>
      </section>

      <CTASection title="Want to see what we can do for you?" subtitle="Get a free SEO audit and a custom growth plan. No obligation, just clarity." />

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm animate-fade-in" />
          <div
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grad-border rounded-3xl">
              <div className="rounded-3xl bg-slate-50/95 backdrop-blur-2xl">
                {/* Modal header image */}
                <div className="relative h-52 overflow-hidden rounded-t-3xl sm:h-64">
                  <img
                    src={selected.img}
                    alt={`${selected.title} — ${selected.category} sample project for ${selected.industry} industry`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-ink-900/50 to-transparent" />
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-ink-950 backdrop-blur-md transition-all hover:bg-white/20"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <span className="absolute left-5 top-5 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-ink-950 shadow-lg">
                    {selected.tag}
                  </span>
                </div>

                {/* Modal body */}
                <div className="p-6 sm:p-8">
                  {/* Title row */}
                  <div className="flex flex-wrap items-center gap-3">
                    {(() => {
                      const Icon = categoryIcons[selected.category] ?? Search;
                      return (
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600">
                          <Icon className="h-5 w-5" />
                        </div>
                      );
                    })()}
                    <div>
                      <h2 className="text-2xl font-bold text-ink-950">{selected.title}</h2>
                      <div className="mt-1 flex items-center gap-2 text-sm text-ink-600">
                        <span className="text-brand-600">{selected.category}</span>
                        <span className="text-ink-600">·</span>
                        <span>{selected.industry} Industry</span>
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="mt-6">
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-600">
                      <Target className="h-4 w-4 text-brand-400" /> Project Overview
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{selected.overview}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.04] p-5">
                      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-300">
                        <Lightbulb className="h-4 w-4" /> Challenge
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{selected.challenge}</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-5">
                      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-300">
                        <Wrench className="h-4 w-4" /> Solution
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{selected.solution}</p>
                    </div>
                  </div>

                  {/* Services & Tools */}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-600">
                        <Check className="h-4 w-4 text-brand-400" /> Services Provided
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {selected.services.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-ink-600">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-600">
                        <Wrench className="h-4 w-4 text-brand-400" /> Tools Used
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selected.tools.map((t) => (
                          <span key={t} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-ink-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expected Outcomes */}
                  <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/[0.05] p-5">
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
                      <TrendingUp className="h-4 w-4" /> Expected Outcomes
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {selected.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm text-ink-700">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {o}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs italic text-ink-600">
                      Note: These are estimated/sample outcomes for demonstration purposes, not actual client results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
