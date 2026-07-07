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
        description="Real SEO and digital marketing case studies with measurable results — traffic growth, lead increases, and revenue impact across industries."
        path="/case-studies"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }])}
      />
      <PageHero
        eyebrow="Case Studies"
        title={<>Proof, not <span className="text-gradient">promises</span></>}
        subtitle="Detailed results from real campaigns. See exactly how we moved the needle for brands like yours."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }]}
      />

      <section className="container-x py-12">
        <div className="space-y-8">
          {caseStudies.map((c, i) => (
            <div key={c.slug} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="grid items-stretch gap-0 rounded-3xl lg:grid-cols-2">
                <div className="relative h-64 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                  <img src={c.img} alt={c.client} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">{c.industry}</span>
                </div>
                <div className="rounded-b-3xl bg-white/[0.03] p-8 lg:rounded-r-3xl lg:rounded-bl-none">
                  <h3 className="text-2xl font-bold text-white">{c.client}</h3>
                  <p className="mt-3 text-slate-400">{c.summary}</p>
                  <div className="mt-5 flex items-center gap-2 rounded-xl bg-brand-500/10 px-4 py-3 text-brand-200">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-semibold">{c.result}</span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
                    {[['Organic Traffic', '+412%'], ['Keywords', '+86'], ['Domain Rating', '+24']].map(([k, v]) => (
                      <div key={k}>
                        <div className="font-display text-xl font-bold text-white">{v}</div>
                        <div className="text-xs text-slate-400">{k}</div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => navigate('/contact')} className="btn-ghost mt-6 text-sm">
                    Get results like this <ArrowRight className="h-4 w-4" />
                  </button>
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
