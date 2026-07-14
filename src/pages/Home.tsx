import { ArrowRight, Star, Check, Quote, Sparkles, TrendingUp } from 'lucide-react';
import { Link, navigate } from '../router';
import { SEO, faqSchema, localBusinessSchema } from '../seo';
import {
  Counter, SectionHeading, CTASection, FAQList, Parallax,
} from '../components';
import {
  stats, services, whyChooseUs, processSteps, testimonials, homeFaqs, caseStudies, clientLogos,
} from '../data';

export default function Home() {
  return (
    <>
      <SEO
        title="Premium SEO & Digital Marketing Agency"
        description="Rank Flow Digital helps businesses rank higher and grow revenue with white-hat SEO, content writing, and web design. Get a free SEO audit today."
        path="/"
        schema={[localBusinessSchema, faqSchema(homeFaqs)]}
      />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-32">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-faint [background-size:60px_60px] opacity-30" />
        <div className="blob left-[10%] top-[15%] h-72 w-72 bg-brand-500/30 animate-float-slow" />
        <div className="blob right-[8%] top-[25%] h-80 w-80 bg-accent-500/20 animate-float" />
        <div className="blob left-[40%] bottom-[5%] h-72 w-72 bg-brand-700/20 animate-float-slow" />

        <div className="container-x relative pb-20 pt-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow reveal animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" /> Premium SEO & Digital Marketing
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl reveal reveal-delay-1">
              Rank higher. <span className="text-gradient">Grow faster.</span>
              <br /> Convert more visitors into clients.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 reveal reveal-delay-2">
              We are Rank Flow Digital — a data-driven SEO agency that turns search traffic into revenue.
              White-hat strategies, transparent reporting, and results that compound month over month.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-3">
              <button onClick={() => navigate('/contact/')} className="btn-glow text-base">
                Get Free SEO Audit <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={() => navigate('/contact/')} className="btn-ghost text-base">
                Book a Consultation
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400 reveal reveal-delay-4">
              <div className="flex -space-x-2">
                {[733872, 774909, 614810, 415829].map((id) => (
                  <img key={id} src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=80`} alt="Client" className="h-8 w-8 rounded-full border-2 border-ink-950 object-cover" />
                ))}
              </div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span>Trusted by 180+ growing brands</span>
            </div>
          </div>

          {/* Floating dashboard mockup */}
          <Parallax strength={30}>
            <div className="mx-auto mt-16 max-w-5xl reveal reveal-delay-3">
              <div className="grad-border rounded-3xl">
                <div className="rounded-3xl bg-ink-900/80 p-2 backdrop-blur-xl">
                  <div className="rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-slate-400">Organic Traffic</div>
                        <div className="mt-1 font-display text-3xl font-bold text-white">+412%</div>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-6 flex h-40 items-end gap-2">
                      {[20, 35, 28, 50, 42, 65, 58, 80, 72, 95, 88, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-700 to-brand-400 transition-all duration-700 hover:from-brand-500 hover:to-accent-400" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
                      {[['Keywords', '8,400+'], ['Backlinks', '12.4k'], ['Domain Rating', '68']].map(([k, v]) => (
                        <div key={k}>
                          <div className="text-xs text-slate-400">{k}</div>
                          <div className="mt-1 font-display text-lg font-semibold text-white">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-20">
        <div className="grad-border rounded-3xl">
          <div className="grid grid-cols-2 gap-8 rounded-3xl bg-ink-900/60 p-10 backdrop-blur-xl lg:grid-cols-4">
            {stats.map((s) => <Counter key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-12">
        <div className="container-x">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-slate-500">Trusted by ambitious brands worldwide</p>
          <div className="mask-fade-x mt-8 overflow-hidden">
            <div className="marquee-track gap-12">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex items-center gap-2 px-4 text-2xl font-display font-semibold text-slate-500 transition-colors hover:text-white">
                  <span className="h-2 w-2 rounded-full bg-brand-500/60" /> {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Services built to <span className="text-gradient">grow revenue</span></>}
          subtitle="A full-stack SEO and digital marketing team under one roof — strategy, content, links, and web design that work together."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.slug} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <Link to={`/${s.slug}/`} className="group flex h-full flex-col rounded-3xl bg-white/[0.03] p-7 hover:bg-white/[0.06]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden py-24">
        <div className="blob -right-20 top-20 h-80 w-80 bg-brand-500/15" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Why Rank Flow"
            title={<>The agency partner you’ve <span className="text-gradient">been looking for</span></>}
            subtitle="Six reasons brands choose us — and stay with us for years."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <div key={w.title} className={`glass lift p-7 reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Our Process"
          title={<>A proven path to <span className="text-gradient">organic growth</span></>}
          subtitle="Seven steps that take you from audit to compounding revenue."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <div key={p.title} className={`grad-border lift reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="relative rounded-3xl bg-white/[0.03] p-7">
                <div className="font-display text-5xl font-bold text-white/10">0{i + 1}</div>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-brand-500/40 lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="container-x py-24">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            center={false}
            eyebrow="Case Studies"
            title={<>Real results for <span className="text-gradient">real brands</span></>}
            subtitle="A look at the growth we’ve driven across industries."
          />
          <Link to="/case-studies/" className="btn-ghost shrink-0">View All <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((c, i) => (
            <Link key={c.slug} to="/case-studies/" className={`group grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="overflow-hidden rounded-3xl">
                <div className="relative h-52 overflow-hidden rounded-t-3xl">
                  <img src={c.img} alt={`${c.client} SEO results`} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">{c.industry}</span>
                </div>
                <div className="rounded-b-3xl bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold text-white">{c.client}</h3>
                  <p className="mt-1 text-sm text-slate-400">{c.summary}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-300">
                    <TrendingUp className="h-4 w-4" /> {c.result}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden py-24">
        <div className="blob -left-20 bottom-10 h-80 w-80 bg-accent-500/15" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>Loved by <span className="text-gradient">clients</span></>}
            subtitle="Don’t take our word for it — take theirs."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`glass lift p-7 reveal reveal-delay-${(i % 3) + 1}`}>
                <Quote className="h-8 w-8 text-brand-400/60" />
                <p className="mt-4 text-sm leading-relaxed text-slate-200">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                  <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                  <div className="ml-auto flex text-amber-400">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient">answered</span></>}
          subtitle="Everything you need to know before working with us."
        />
        <div className="mt-12">
          <FAQList faqs={homeFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
