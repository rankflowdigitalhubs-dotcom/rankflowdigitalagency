import { Mail, Globe, MapPin, MessageSquare } from 'lucide-react';
import { SEO, breadcrumbSchema, localBusinessSchema, faqSchema } from '../seo';
import { PageHero, ContactForm, FAQList, SocialIcons } from '../components';
import { Link } from '../router';
import { contactInfo } from '../data';

const contactFaqs = [
  { q: 'How quickly will you respond?', a: 'We reply to all inquiries within one business day, often the same day during business hours.' },
  { q: 'Is the SEO audit really free?', a: 'Yes. Every prospect receives a complimentary audit covering technical health, keyword opportunities, and quick wins — no obligation.' },
  { q: 'Do you work with clients in any country?', a: 'We work with clients worldwide. Our team operates remotely across multiple time zones for smooth communication.' },
  { q: 'What happens after I submit the form?', a: 'A strategist will review your message and website, then reach out to schedule a free consultation call within one business day.' },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Rank Flow Digital for a free SEO audit, consultation, or proposal. Email us at info@rankflowagency.online or send a message."
        path="/contact"
        schema={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]), localBusinessSchema, faqSchema(contactFaqs)]}
      />
      <PageHero
        eyebrow="Contact"
        title={<>Let’s talk about <span className="text-gradient">your growth</span></>}
        subtitle="Tell us about your goals and get a free SEO audit plus a custom growth plan within 48 hours."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
      />

      <section className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Info */}
          <div className="space-y-6">
            <div className="glass p-7">
              <h3 className="text-lg font-semibold text-ink-950">Get in touch</h3>
              <p className="mt-2 text-sm text-ink-600">We typically reply within one business day.</p>
              <div className="mt-6 space-y-4">
                {contactInfo.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 group">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600"><Mail className="h-5 w-5" /></span>
                    <div>
                      <div className="text-xs text-ink-600">Email</div>
                      <div className="text-sm font-medium text-ink-950 group-hover:text-brand-600">{email}</div>
                    </div>
                  </a>
                ))}
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600"><Globe className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs text-ink-600">Website</div>
                    <div className="text-sm font-medium text-ink-950 group-hover:text-brand-600">{contactInfo.websiteLabel}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600"><MapPin className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs text-ink-600">Location</div>
                    <div className="text-sm font-medium text-ink-950">{contactInfo.location}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="text-xs uppercase tracking-wider text-ink-600">Message us</div>
                <div className="mt-3"><SocialIcons /></div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="grad-border rounded-3xl overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-ink-800 to-slate-50">
                <div className="absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-brand-600 animate-pulse-ring">
                    <MapPin className="h-7 w-7" />
                  </span>
                  <p className="text-sm text-ink-600">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm text-ink-600">
              <MessageSquare className="h-4 w-4 text-brand-400" /> Fields marked with * are required.
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Quick links to services */}
      <section className="container-x py-12">
        <div className="text-center">
          <span className="eyebrow reveal">Our Services</span>
          <h2 className="mt-4 text-2xl font-bold text-ink-950 reveal reveal-delay-1">Not sure where to start?</h2>
          <p className="mt-3 text-ink-600">Explore our most popular services and see how we can help your business grow.</p>
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

      {/* FAQ */}
      <section className="container-x py-16">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 reveal reveal-delay-1">Before you reach out</h2>
        </div>
        <div className="mt-10">
          <FAQList faqs={contactFaqs} />
        </div>
      </section>
    </>
  );
}
