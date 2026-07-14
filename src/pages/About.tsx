import { Target, Eye, Heart, Award, Users, Rocket } from 'lucide-react';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, SectionHeading, CTASection, Counter } from '../components';
import { stats, whyChooseUs, testimonials } from '../data';
import { Star } from 'lucide-react';
import { Link } from '../router';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Rank Flow Digital is a team of SEO strategists, content writers, and web designers on a mission to help ambitious brands grow through organic search."
        path="/about"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])}
      />
      <PageHero
        eyebrow="About Us"
        title={<>We turn search traffic into <span className="text-gradient">revenue</span></>}
        subtitle="For over a decade, we’ve helped local businesses, startups, SaaS, e-commerce, law firms, dentists, and real estate brands rank higher and grow faster — with white-hat SEO and transparent reporting."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
      />

      {/* Story */}
      <section className="container-x py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Built by marketers who got tired of empty promises</h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              Rank Flow Digital started with a simple frustration: too many agencies sell vanity metrics instead of revenue.
              We built a different kind of agency — one that ties every effort to your bottom line, reports in plain English,
              and only uses strategies that stand the test of Google’s updates.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Today we’re a team of strategists, writers, designers, and developers serving clients across six continents —
              from solo dentists to multi-location SaaS platforms. Our mission hasn’t changed: help good businesses get found.
            </p>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Rank Flow Digital team collaborating" className="h-full w-full rounded-3xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: 'Mission', desc: 'To help ambitious brands grow through honest, data-driven SEO that compounds over time.' },
            { icon: Eye, title: 'Vision', desc: 'A web where great businesses get found — not just the ones with the biggest ad budgets.' },
            { icon: Heart, title: 'Values', desc: 'Transparency, white-hat integrity, fast communication, and an obsession with results.' },
          ].map((v, i) => (
            <div key={v.title} className={`glass lift p-8 reveal reveal-delay-${i + 1}`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container-x py-16">
        <div className="grad-border rounded-3xl">
          <div className="grid grid-cols-2 gap-8 rounded-3xl bg-ink-900/60 p-10 lg:grid-cols-4">
            {stats.map((s) => <Counter key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>What sets us <span className="text-gradient">apart</span></>}
          subtitle="The principles that guide every campaign we run."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <div key={w.title} className={`glass lift p-7 reveal reveal-delay-${(i % 3) + 1}`}>
              <h3 className="text-lg font-semibold text-white">{w.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team values strip */}
      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, label: '10+ Years', sub: 'of SEO experience' },
            { icon: Users, label: '180+', sub: 'happy clients' },
            { icon: Rocket, label: '412%', sub: 'avg. traffic growth' },
            { icon: Target, label: '100%', sub: 'white-hat methods' },
          ].map((t, i) => (
            <div key={t.label} className={`glass p-6 text-center reveal reveal-delay-${i + 1}`}>
              <t.icon className="mx-auto h-8 w-8 text-brand-300" />
              <div className="mt-3 font-display text-2xl font-bold text-white">{t.label}</div>
              <div className="text-sm text-slate-400">{t.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-16">
        <SectionHeading eyebrow="Testimonials" title={<>What clients <span className="text-gradient">say</span></>} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={t.name} className={`glass lift p-7 reveal reveal-delay-${i + 1}`}>
              <div className="flex text-amber-400">{[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-200">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links to services */}
      <section className="container-x py-12">
        <div className="text-center">
          <span className="eyebrow reveal">Our Services</span>
          <h2 className="mt-4 text-2xl font-bold text-white reveal reveal-delay-1">What we do</h2>
          <p className="mt-3 text-slate-400">Explore our full range of SEO and digital marketing services.</p>
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

      <CTASection title="Let’s grow together" subtitle="Partner with an agency that measures success by your revenue." />
    </>
  );
}
