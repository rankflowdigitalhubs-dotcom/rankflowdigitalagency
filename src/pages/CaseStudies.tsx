import { TrendingUp, ArrowRight } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, CTASection } from '../components';
import { caseStudies } from '../data';

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Real SEO and digital marketing case studies with measurable results — traffic growth, keyword rankings, and revenue impact across industries."
        path="/case-studies"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }])}
      />
      <PageHero
        eyebrow="Case Studies"
        title={<>Proofs</>}
        subtitle="Real results from real campaigns. Every number you see comes directly from client dashboards and analytics — no estimates, no guesswork."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }]}
      />

      <section className="container-x py-12">
        <div className="space-y-10">
          {caseStudies.map((c, i) => (
            <div key={c.slug} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="rounded-3xl overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between gap-4 bg-white/[0.04] px-6 py-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">{c.industry}</span>
                    <h3 className="text-lg font-bold text-white">{c.client}</h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-300">
                    <TrendingUp className="h-4 w-4 shrink-0" />
                    <span>{c.result}</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Screenshot — the actual proof */}
                  <div className="lg:col-span-3 relative bg-slate-900/50">
                    <img
                      src={c.img}
                      alt={`SEO results screenshot for ${c.client}`}
                      className="w-full h-full object-cover object-top"
                      style={{ maxHeight: '420px', objectPosition: 'top center' }}
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ink-950/70 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-md bg-emerald-500/90 px-2 py-0.5 text-[11px] font-bold text-white tracking-wide uppercase">Verified Results</span>
                    </div>
                  </div>

                  {/* Stats + summary */}
                  <div className="lg:col-span-2 bg-white/[0.03] p-7 flex flex-col justify-between gap-6">
                    <div>
                      <p className="text-slate-300 leading-relaxed text-sm">{c.summary}</p>

                      {/* Key metrics */}
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {c.stats.map((s) => (
                          <div key={s.label} className="rounded-xl bg-white/[0.04] border border-white/[0.07] px-3 py-3 text-center">
                            <div className="font-display text-xl font-extrabold text-white leading-none">{s.value}</div>
                            <div className="mt-1 text-[11px] text-brand-300 font-semibold leading-tight">{s.sub}</div>
                            <div className="mt-1 text-[10px] text-slate-500 uppercase tracking-wide">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Result callout */}
                    <div>
                      <div className="flex items-start gap-2 rounded-xl bg-brand-500/10 border border-brand-500/20 px-4 py-3 text-brand-200 sm:hidden mb-4">
                        <TrendingUp className="h-4 w-4 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold">{c.result}</span>
                      </div>
                      <button
                        onClick={() => navigate('/contact')}
                        className="btn-ghost w-full justify-center text-sm"
                      >
                        Get results like this <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
