import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Menu, X, ChevronDown, Mail, Globe, MapPin, ArrowRight } from 'lucide-react';
import { Link, navigate, useRoute, scrollToId } from './router';
import { navLinks, services } from './data';

/* ---------------- Loader ---------------- */
export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-2 border-brand-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-400 animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent-400 animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-gradient">RF</span>
          </div>
        </div>
        <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 animate-marquee" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Custom cursor ---------------- */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const raf = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(raf);
    };
    window.addEventListener('mousemove', move);
    const id = requestAnimationFrame(raf);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(id);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[90] -ml-1 h-2 w-2 rounded-full bg-brand-400 mix-blend-difference" />
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[90] -ml-4 h-8 w-8 rounded-full border border-brand-400/40 transition-[width,height,opacity] duration-200 hidden md:block" />
    </>
  );
}

/* ---------------- Navbar ---------------- */
export function Navbar() {
  const path = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [path]);

  const isActive = (p: string) => (p === '/' ? path === '/' : path === p || path.startsWith(p + '/'));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow-sm">
            <span className="font-display text-sm font-bold text-white">RF</span>
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Rank<span className="text-gradient">Flow</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) =>
            l.label === 'Services' ? (
              <div key={l.path} className="relative group">
                <button
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive('/services') || path.match(/^\/(seo|local-seo|technical-seo|guest-posting|content-writing|logo-design|web-design|monthly-seo-management)/)
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="grad-border w-[34rem] rounded-2xl p-2">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl bg-ink-900/95 p-2">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                        >
                          <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                          <div>
                            <div className="text-sm font-semibold text-white">{s.title}</div>
                            <div className="text-xs text-slate-400">{s.short}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.path}
                to={l.path}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(l.path) ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {l.label}
                {isActive(l.path) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                )}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={() => navigate('/contact')} className="btn-glow text-sm">
            Free SEO Audit <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="container-x mt-3 lg:hidden">
          <div className="grad-border rounded-2xl p-3">
            <div className="rounded-2xl bg-ink-900/95 p-3">
              {navLinks.map((l) =>
                l.label === 'Services' ? (
                  <div key={l.path}>
                    <button
                      onClick={() => setServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200"
                    >
                      Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        <Link to="/services" className="block rounded-lg px-3 py-2 text-sm text-slate-300">All Services</Link>
                        {services.map((s) => (
                          <Link key={s.slug} to={`/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-300">
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={l.path} to={l.path} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200">
                    {l.label}
                  </Link>
                )
              )}
              <button onClick={() => navigate('/contact')} className="btn-glow mt-2 w-full text-sm">
                Free SEO Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Back to top ---------------- */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700">
                <span className="font-display text-sm font-bold text-white">RF</span>
              </span>
              <span className="font-display text-lg font-semibold text-white">Rank<span className="text-gradient">Flow</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A premium SEO & digital marketing agency helping ambitious brands rank higher, grow traffic, and convert visitors into clients.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <a href="mailto:info@rankflowagency.online" className="flex items-center gap-2 hover:text-brand-300">
                <Mail className="h-4 w-4 text-brand-400" /> info@rankflowagency.online
              </a>
              <a href="https://rankflowagency.online" className="flex items-center gap-2 hover:text-brand-300">
                <Globe className="h-4 w-4 text-brand-400" /> rankflowagency.online
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400" /> Remote · Worldwide
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.path}><Link to={l.path} className="text-slate-400 hover:text-brand-300">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}><Link to={`/${s.slug}`} className="text-slate-400 hover:text-brand-300">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/privacy-policy" className="text-slate-400 hover:text-brand-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-brand-300">Terms & Conditions</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-300">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Rank Flow Digital. All rights reserved.</p>
          <p>Designed & built for performance, accessibility, and conversion.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Reusable bits ---------------- */
export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow reveal">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">{subtitle}</p>}
    </div>
  );
}

export function CTASection({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="container-x py-24">
      <div className="grad-border relative overflow-hidden rounded-3xl">
        <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
          <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
          <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
              {title || 'Ready to grow your organic traffic?'}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
              {subtitle || 'Get a free SEO audit and a custom growth plan. No obligation, just clarity.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
              <button onClick={() => navigate('/contact')} className="btn-glow">
                Get Free SEO Audit <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => navigate('/contact')} className="btn-ghost">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.path} className="flex items-center gap-2">
          {i > 0 && <span className="text-slate-600">/</span>}
          <Link to={item.path} className={i === items.length - 1 ? 'text-white' : 'hover:text-brand-300'}>{item.name}</Link>
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs }: { eyebrow: string; title: React.ReactNode; subtitle: string; breadcrumbs: { name: string; path: string }[] }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="blob left-1/4 top-10 h-72 w-72 bg-brand-500/20" />
      <div className="container-x relative">
        <Breadcrumbs items={breadcrumbs} />
        <span className="eyebrow mt-6 reveal">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">{subtitle}</p>
      </div>
    </section>
  );
}

/* ---------------- Counter ---------------- */
export function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const formatted = n >= 1000 ? n.toLocaleString() : n;
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-white sm:text-5xl">
        {formatted}<span className="text-gradient">{suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">{label}</div>
    </div>
  );
}

/* ---------------- FAQ accordion ---------------- */
export function FAQList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="grad-border rounded-2xl">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white/[0.03] p-5 text-left"
          >
            <span className="font-semibold text-white">{f.q}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-brand-300 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-slate-400">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Contact form ---------------- */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  if (sent) {
    return (
      <div className="grad-border rounded-3xl p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
          <ArrowRight className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-white">Thank you!</h3>
        <p className="mt-2 text-slate-400">We’ve received your message and will reply within one business day.</p>
        <button onClick={() => setSent(false)} className="btn-ghost mt-6">Send another</button>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="grad-border rounded-3xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Jane Doe" />
        <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
        <Field label="Company" name="company" placeholder="Company Inc." />
        <Field label="Website" name="website" placeholder="https://" />
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">Service of Interest</label>
        <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-400">
          {services.map((s) => <option key={s.slug} className="bg-ink-900">{s.title}</option>)}
          <option className="bg-ink-900">Other</option>
        </select>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
        <textarea required rows={4} placeholder="Tell us about your goals…" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-brand-400" />
      </div>
      <button type="submit" className="btn-glow mt-6 w-full">Send Message <ArrowRight className="h-4 w-4" /></button>
    </form>
  );
}

function Field({ label, name, type = 'text', placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      <input required name={name} type={type} placeholder={placeholder} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-brand-400" />
    </div>
  );
}

/* ---------------- Mouse parallax wrapper ---------------- */
export function Parallax({ children, strength = 20 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const parent = el.parentElement;
    parent?.addEventListener('mousemove', onMove);
    return () => parent?.removeEventListener('mousemove', onMove);
  }, [strength]);
  return <div ref={ref} className="will-change-transform transition-transform duration-300 ease-out">{children}</div>;
}

export { scrollToId };
