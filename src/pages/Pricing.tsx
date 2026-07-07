import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, CTASection } from '../components';
import { pricingPlans } from '../data';

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent SEO and digital marketing pricing. Flexible monthly plans for startups, growing brands, and multi-location enterprises — no long contracts."
        path="/pricing"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }])}
      />
      <PageHero
        eyebrow="Pricing"
        title={<>Simple, transparent <span className="text-gradient">pricing</span></>}
        subtitle="Flexible monthly plans with no long lock-ins. Stay because you’re growing, not because of a contract."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }]}
      />

      <section className="container-x py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <div key={plan.name} className={`relative reveal reveal-delay-${i + 1} ${plan.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}>
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}
              <div className={`grad-border lift h-full ${plan.featured ? 'shadow-card-hover' : ''}`}>
                <div className={`flex h-full flex-col rounded-3xl p-8 ${plan.featured ? 'bg-gradient-to-b from-brand-500/10 to-white/[0.03]' : 'bg-white/[0.03]'}`}>
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{plan.tagline}</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="font-display text-5xl font-bold text-white">${plan.price.toLocaleString()}</span>
                    <span className="mb-1.5 text-slate-400">{plan.period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/contact')}
                    className={`mt-8 w-full ${plan.featured ? 'btn-glow' : 'btn-ghost'}`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Need something custom? <button onClick={() => navigate('/contact')} className="font-semibold text-brand-300 hover:text-brand-200">Talk to our team</button> about enterprise and white-label plans.
        </p>
      </section>

      <CTASection title="Not sure which plan fits?" subtitle="Book a free consultation and we’ll recommend the right plan for your goals and budget." />
    </>
  );
}
