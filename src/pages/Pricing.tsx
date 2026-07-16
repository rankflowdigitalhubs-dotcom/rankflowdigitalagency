import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero } from '../components';
import { Link } from '../router';
import { pricingPlans } from '../data';

export default function Pricing() {
  return (
    <>
      <SEO
        title="Monthly SEO Packages"
        description="Choose the SEO plan that fits your goals. Starter at $99/mo, Growth at $249/mo, and Premium at $499/mo. White-hat SEO to improve rankings and traffic."
        path="/pricing"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Monthly SEO Packages', path: '/pricing' }])}
      />
      <PageHero
        eyebrow="Monthly SEO Packages"
        title={<>Monthly SEO <span className="text-gradient">Packages</span></>}
        subtitle="Choose the SEO plan that best fits your business goals. Every package is customized using white-hat SEO strategies to help improve your Google rankings, increase organic traffic, and generate more qualified leads."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Monthly SEO Packages', path: '/pricing' }]}
      />

      <section className="container-x py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <div key={plan.name} className={`relative reveal reveal-delay-${i + 1} ${plan.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}>
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-950 shadow-card-hover">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}
              <div className={`grad-border lift h-full ${plan.featured ? 'shadow-card-hover' : ''}`}>
                <div className={`flex h-full flex-col rounded-3xl p-8 ${plan.featured ? 'bg-gradient-to-b from-brand-500/10 to-white/[0.03]' : 'bg-white'}`}>
                  <h3 className="text-lg font-semibold text-ink-950">{plan.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">{plan.tagline}</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="font-display text-5xl font-bold text-ink-950">${plan.price.toLocaleString()}</span>
                    <span className="mb-1.5 text-ink-600">{plan.period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/contact/')}
                    className={`mt-8 w-full ${plan.featured ? 'btn-glow' : 'btn-ghost'}`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom SEO Plan CTA */}
        <div className="mt-16 reveal">
          <div className="grad-border relative overflow-hidden rounded-3xl">
            <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-12 text-center sm:px-16">
              <div className="blob -left-10 top-0 h-56 w-56 bg-brand-500/20" />
              <div className="blob -right-10 bottom-0 h-56 w-56 bg-accent-500/15" />
              <div className="relative">
                <h2 className="mx-auto max-w-xl text-2xl font-bold text-ink-950 sm:text-3xl">
                  Need a Custom SEO Plan?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base text-ink-600">
                  Every business is different. Contact us for a free consultation and we'll create a custom SEO strategy tailored to your goals and budget.
                </p>
                <button onClick={() => navigate('/contact/')} className="btn-glow mt-8">
                  Request Custom Quote <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="container-x py-12">
        <div className="text-center">
          <span className="eyebrow reveal">Our Services</span>
          <h2 className="mt-4 text-2xl font-bold text-ink-950 reveal reveal-delay-1">Explore our services</h2>
          <p className="mt-3 text-ink-600">Not sure which plan is right? Learn more about what each service includes.</p>
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
    </>
  );
}
