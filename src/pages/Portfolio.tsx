import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, CTASection } from '../components';
import { portfolioItems } from '../data';

const categories = ['All', 'SEO', 'Local SEO', 'Technical SEO', 'Content', 'Web Design', 'Logo Design'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our work — SEO campaigns, web designs, and brand identities that drove real revenue for our clients."
        path="/portfolio"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }])}
      />
      <PageHero
        eyebrow="Portfolio"
        title={<>Work we’re <span className="text-gradient">proud of</span></>}
        subtitle="A selection of SEO campaigns, websites, and brand projects that delivered measurable growth."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }]}
      />

      <section className="container-x py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow-sm'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-brand-400/40 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <div key={item.title} className={`group grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="overflow-hidden rounded-3xl">
                <div className="relative h-60 overflow-hidden rounded-t-3xl">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">{item.tag}</span>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="rounded-b-3xl bg-white/[0.03] p-6">
                  <div className="text-xs uppercase tracking-wider text-brand-300">{item.category}</div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Want results like these?" subtitle="Let’s build your next growth story together." />
    </>
  );
}
