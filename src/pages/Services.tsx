import { ArrowRight, Check } from 'lucide-react';
import { Link } from '../router';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, SectionHeading, CTASection } from '../components';
import { services, processSteps } from '../data';

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Full-stack SEO and digital marketing services: SEO, local SEO, technical SEO, guest posting, content writing, web design, and monthly SEO management."
        path="/services"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])}
      />
      <PageHero
        eyebrow="Our Services"
        title={<>Everything you need to <span className="text-gradient">rank and convert</span></>}
        subtitle="A complete SEO and digital marketing toolkit — strategy, content, links, and design under one roof."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.slug} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <Link to={`/${s.slug}/`} className="group flex h-full flex-col rounded-3xl bg-white/[0.03] p-7 hover:bg-white/[0.06]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="h-3.5 w-3.5 text-brand-400" /> {d}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="Our Process"
          title={<>From audit to <span className="text-gradient">revenue</span></>}
          subtitle="A transparent, repeatable process that drives compounding growth."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <div key={p.title} className={`grad-border lift reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="rounded-3xl bg-white/[0.03] p-7">
                <div className="font-display text-5xl font-bold text-white/10">0{i + 1}</div>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
