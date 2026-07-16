import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link, navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { PageHero, CTASection, FAQList } from '../components';
import { services, type Service } from '../data';

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug) as Service;
  if (!service) return null;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/${slug}` },
  ];

  return (
    <>
      <SEO
        title={service.title}
        description={service.description.length > 140 ? service.description.slice(0, 157).trim() + '...' : service.description}
        path={`/${slug}`}
        schema={[breadcrumbSchema(crumbs), faqSchema(service.faqs)]}
      />
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        subtitle={service.description}
        breadcrumbs={crumbs}
      />

      {/* Deliverables */}
      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> What’s Included</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950">Everything in this engagement</h2>
            <p className="mt-4 text-ink-600">A clear scope with no surprises. Here’s exactly what you get:</p>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-ink-700">{d}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('/contact/')} className="btn-glow mt-8">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl">
              <div className="rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-600">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-950">{service.tagline}</h3>
                <p className="mt-2 text-sm text-ink-600">{service.short}</p>
                <div className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                  {[
                    'Dedicated strategist',
                    'Transparent reporting',
                    'White-hat only',
                    'Cancel anytime',
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-ink-600">
                      <Check className="h-4 w-4 text-brand-400" /> {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-16">
        <div className="text-center">
          <span className="eyebrow reveal">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 reveal reveal-delay-1">Our {service.title} process</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((p, i) => (
            <div key={p.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="rounded-3xl bg-white p-7">
                <div className="font-display text-4xl font-bold text-ink-950/10">0{i + 1}</div>
                <h3 className="mt-2 text-lg font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related services */}
      <section className="container-x py-16">
        <h2 className="text-2xl font-bold text-ink-950">Explore more services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
            <Link key={s.slug} to={`/${s.slug}/`} className="glass lift p-5">
              <s.icon className="h-6 w-6 text-brand-600" />
              <h3 className="mt-3 text-sm font-semibold text-ink-950">{s.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 reveal reveal-delay-1">{service.title} questions</h2>
        </div>
        <div className="mt-10">
          <FAQList faqs={service.faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
