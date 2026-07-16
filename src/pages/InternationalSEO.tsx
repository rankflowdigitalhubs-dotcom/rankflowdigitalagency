import { Check, ArrowRight, Search, TrendingUp, Globe, BarChart3, Compass, MapPin, Wrench, FileSearch, Link2, PenLine, ShieldCheck, Award, Code2, LineChart } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'International SEO Services', path: '/international-seo' },
];

const intlFaqs = [
  { q: 'What is international SEO?', a: 'International SEO is the process of optimizing your website to rank in multiple countries and languages. It involves hreflang tags, country-specific keyword research, localized content, URL structure optimization, and global link building. The goal is to make sure Google shows the right version of your site to the right audience in each country.' },
  { q: 'How is international SEO different from regular SEO?', a: 'Regular SEO focuses on ranking in one country or language. International SEO expands that to multiple countries and languages. It requires hreflang tags to tell Google which language and country version to show, separate keyword research for each market, localized content that resonates with each audience, and backlinks from websites in each target country.' },
  { q: 'What are hreflang tags and why do they matter?', a: 'Hreflang tags are HTML attributes that tell Google which language and region a page is intended for. They prevent duplicate content issues across country versions and ensure Google shows the correct localized page to each user. Without proper hreflang implementation, Google may show the wrong language version to international visitors, hurting your rankings and user experience.' },
  { q: 'How long does international SEO take to work?', a: 'Most international SEO campaigns show ranking improvements in 3-4 months as Google indexes localized content and hreflang tags. Significant growth typically appears in 6-9 months as international backlinks are discovered and credited. The timeline depends on the number of target countries, competition in each market, and your current domain authority.' },
  { q: 'Do I need separate domains for each country?', a: 'Not necessarily. You can use a single domain with subdirectories (e.g., /en/us/, /en/uk/), subdomains (e.g., us.example.com), or separate country-code domains (e.g., example.co.uk). Each approach has pros and cons. We recommend the best URL structure based on your business goals, budget, and technical resources.' },
  { q: 'What is multi-language SEO?', a: 'Multi-language SEO is the process of optimizing your website content for multiple languages. This includes translating and localizing content, implementing hreflang tags, conducting keyword research in each language, and building backlinks from websites in each language. It ensures your site ranks for searches made in different languages across the world.' },
  { q: 'How do you do international keyword research?', a: 'We conduct keyword research for each target country separately. Search behavior, keyword volume, and competition vary significantly between countries. We use local keyword tools, native language research, and competitor analysis to find the best keywords for each market. What works in the US may not work in Germany or France.' },
  { q: 'Can you help with local link building for different countries?', a: 'Yes. Global link building is a core part of our international SEO service. We build backlinks from websites in each of your target countries, in the local language where possible. This signals to Google that your site is relevant and authoritative in each specific country market.' },
  { q: 'Do you offer international SEO for eCommerce stores?', a: 'Yes. We specialize in international SEO for eCommerce brands, including Shopify and WooCommerce stores. We optimize product pages, category pages, and checkout flows for multiple countries and languages, implement hreflang tags, and build country-specific backlinks to drive international sales.' },
  { q: 'How much do international SEO services cost?', a: 'The cost depends on the number of target countries, languages, competition level, and scope of work. We offer custom packages based on your specific needs. Contact us for a free international SEO audit and custom quote with no obligation.' },
  { q: 'How do I get started with international SEO?', a: 'Book a free international SEO audit with us. We will analyze your current website, identify international growth opportunities, and show you exactly how to reach customers in your target countries. No obligation, just a clear roadmap for global growth.' },
];

const services = [
  { icon: FileSearch, title: 'International SEO Audit', desc: 'We analyze your current international SEO setup, identify issues with hreflang, URL structure, and localization, and build a roadmap for global growth.' },
  { icon: Search, title: 'Country-Specific Keyword Research', desc: 'We research keywords for each target country separately, accounting for local search behavior, language nuances, and regional competition.' },
  { icon: Code2, title: 'hreflang Tag Implementation', desc: 'We implement and validate hreflang tags so Google shows the right language and country version of your pages to the right audience.' },
  { icon: Wrench, title: 'International Technical SEO', desc: 'We fix crawlability, site speed, Core Web Vitals, and structured data issues that affect your rankings across all target countries.' },
  { icon: Globe, title: 'Multi-Country SEO Strategy', desc: 'We develop a comprehensive SEO strategy for each country you want to target, tailored to local competition and search behavior.' },
  { icon: Compass, title: 'Multi-Language SEO', desc: 'We optimize your content for multiple languages, ensuring each version ranks for searches made in that language across the world.' },
  { icon: Globe, title: 'URL Structure Optimization', desc: 'We recommend and implement the best URL structure for international targeting: subdirectories, subdomains, or country-code domains.' },
  { icon: PenLine, title: 'International Content Optimization', desc: 'We optimize your content for each target market, ensuring it resonates with local audiences and ranks for local search queries.' },
  { icon: MapPin, title: 'Localized Landing Pages', desc: 'We create country and language-specific landing pages that target local keywords and convert international visitors into customers.' },
  { icon: Link2, title: 'Global Link Building', desc: 'We build backlinks from websites in each of your target countries to signal local relevance and authority to Google.' },
  { icon: BarChart3, title: 'International Competitor Analysis', desc: 'We analyze your competitors in each target country to find gaps and opportunities for your international SEO strategy.' },
  { icon: LineChart, title: 'Monthly SEO Reporting', desc: 'You receive transparent monthly reports showing rankings, traffic, and conversions for each country and language.' },
];

const countries = [
  { name: 'United States', flag: '🇺🇸', desc: 'Rank across all 50 states with US-specific keyword targeting.' },
  { name: 'United Kingdom', flag: '🇬🇧', desc: 'Capture UK search traffic with localized British English content.' },
  { name: 'Canada', flag: '🇨🇦', desc: 'Target both English and French Canadian search markets.' },
  { name: 'Australia', flag: '🇦🇺', desc: 'Reach Australian customers with localized SEO and content.' },
  { name: 'Germany', flag: '🇩🇪', desc: 'Rank in German search results with native-language optimization.' },
  { name: 'France', flag: '🇫🇷', desc: 'Capture French search traffic with localized French content.' },
  { name: 'United Arab Emirates', flag: '🇦🇪', desc: 'Target UAE and Middle East markets with Arabic and English SEO.' },
  { name: 'Singapore', flag: '🇸🇬', desc: 'Reach Southeast Asian customers through Singapore-targeted SEO.' },
  { name: 'New Zealand', flag: '🇳🇿', desc: 'Expand your reach to New Zealand with localized search strategy.' },
  { name: 'Global Businesses', flag: '🌍', desc: 'Target multiple countries simultaneously with a unified strategy.' },
];

const process = [
  { step: '01', title: 'Business Analysis', desc: 'We analyze your business, current international presence, target markets, and global SEO goals to establish a baseline.' },
  { step: '02', title: 'Market Research', desc: 'We research each target country market, including search volume, competition, local search behavior, and cultural nuances.' },
  { step: '03', title: 'Country Keyword Research', desc: 'We conduct keyword research for each country separately, identifying the best opportunities in each local market.' },
  { step: '04', title: 'Technical SEO Setup', desc: 'We implement hreflang tags, optimize URL structure, and fix technical issues that affect international rankings.' },
  { step: '05', title: 'Content Localization', desc: 'We create and optimize localized landing pages and content that resonate with each target country audience.' },
  { step: '06', title: 'International Link Building', desc: 'We build backlinks from websites in each target country to signal local relevance and authority to Google.' },
  { step: '07', title: 'Performance Tracking', desc: 'We track rankings, traffic, and conversions for each country and language to measure international growth.' },
  { step: '08', title: 'Monthly Reporting', desc: 'You receive transparent monthly reports showing performance across all target countries and languages.' },
];

const whyChoose = [
  { title: 'International SEO Specialists', desc: 'Our team includes international SEO experts who understand the nuances of ranking in multiple countries and languages.' },
  { title: 'White Hat SEO', desc: 'We use 100% white hat techniques that comply with Google guidelines, protecting your site from penalties in every country.' },
  { title: 'Technical SEO Experts', desc: 'We handle complex hreflang implementation, URL structure optimization, and multi-language technical SEO with precision.' },
  { title: 'Global Growth Strategies', desc: 'We build strategies that scale across countries, ensuring sustainable growth in every market you enter.' },
  { title: 'Transparent Monthly Reports', desc: 'You see rankings, traffic, and conversions for each country with clear, detailed monthly reports.' },
  { title: 'Dedicated Support', desc: 'You get a dedicated international SEO specialist who manages your campaign and is available for questions anytime.' },
];

export default function InternationalSEO() {
  return (
    <>
      <SEO
        title="International SEO Services"
        description="Rank in multiple countries with our international SEO services. hreflang implementation, multi-language SEO, keyword research, and global link building."
        path="/international-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(intlFaqs)]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="blob left-1/4 top-10 h-72 w-72 bg-brand-500/20" />
        <div className="blob -right-20 top-40 h-80 w-80 bg-accent-500/15" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Breadcrumbs />
              <span className="eyebrow mt-6 reveal">International SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-950 sm:text-5xl md:text-6xl reveal reveal-delay-1">
                International SEO Services That Help Your Business Reach Customers <span className="text-gradient">Worldwide</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 reveal reveal-delay-2">
                Your customers are not limited to one country. Why should your SEO be? Our <strong>international SEO services</strong> help you rank in multiple countries, target multiple languages, and capture <strong>international organic traffic</strong> that drives global growth. From <strong>hreflang SEO</strong> to <strong>multi-country SEO</strong> strategy, we handle everything.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free International SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Close-up of a globe highlighting North America representing international SEO services and global business reach"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS INTERNATIONAL SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">What Is International SEO?</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                <strong>International SEO</strong> is the process of optimizing your website so Google understands which countries and languages you want to target. It tells the search engine which version of your site to show to a user in Germany, which to show to a user in France, and which to show to a user in the United States.
              </p>
              <p>
                Think of it this way: regular SEO helps you rank in one country. <strong>Global SEO</strong> helps you rank in many. It uses <strong>hreflang tags</strong> to signal language and country targeting, creates localized content that resonates with each audience, and builds backlinks from websites in each target country to establish local authority.
              </p>
              <p>
                <strong>Multi-language SEO</strong> goes beyond translation. Search behavior differs by country. The keywords people use in the UK are not the same as those used in the US, even though both speak English. <strong>International keyword research</strong> uncovers these differences and ensures you target the right terms in each market.
              </p>
              <p>
                Whether you are an eCommerce brand shipping worldwide, a SaaS company serving global users, or a manufacturer exporting to multiple countries, <strong>SEO for global businesses</strong> ensures your website is visible to customers in every market you serve.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7411970/pexels-photo-7411970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Laptop with world map on screen representing international SEO and global connectivity for multi-country targeting"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY INTERNATIONAL SEO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7947853/pexels-photo-7947853.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Paper report with global export data and graphs representing why international SEO matters for global growth"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why International SEO Matters</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                If you are only ranking in one country, you are leaving global revenue on the table. Customers in other countries are searching for what you offer right now. <strong>Worldwide SEO</strong> ensures they find you instead of your competitors. Here is what it delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Globe className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Reach global customers</strong> — expand your audience beyond your domestic market to every country you serve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Increase international organic traffic</strong> — capture search traffic from users in multiple countries and languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Award className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Improve global brand visibility</strong> — make your brand visible and recognizable across international markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><BarChart3 className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Rank in multiple countries</strong> — appear at the top of Google results in each of your target markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Higher international sales</strong> — more visibility means more traffic, more leads, and more revenue from global markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><ShieldCheck className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Long-term business growth</strong> — international SEO compounds over time, delivering increasing returns as you expand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR INTERNATIONAL SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our International SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            A complete international SEO service covering every aspect of global search optimization. From hreflang implementation to multi-language content, we handle it all.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/36950633/pexels-photo-36950633.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Analyst using tablet for data visualization with charts representing international SEO services and global analytics dashboards"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white p-6 hover:bg-slate-50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-600 transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COUNTRIES WE HELP TARGET */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">Global Targeting</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Countries We Help <span className="text-gradient">Target</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              We have helped businesses rank in countries around the world. Each market has unique search behavior, competition, and opportunities. Here are some of the countries we target:
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="World map with country flags on pins representing international SEO multi-country targeting and global market expansion"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {countries.map((c, i) => (
              <div key={c.name} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="group h-full rounded-3xl bg-white p-6 text-center hover:bg-slate-50 transition-colors">
                  <div className="text-4xl">{c.flag}</div>
                  <h3 className="mt-4 text-base font-semibold text-ink-950">{c.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-600">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR INTERNATIONAL SEO PROCESS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our International SEO <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            A proven 8-step process that takes your business from domestic to global, one country at a time.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/17724742/pexels-photo-17724742.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="People making a plan on a board with sticky notes representing the international SEO process and strategy workflow"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.step} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="rounded-3xl bg-white p-7">
                <div className="font-display text-4xl font-bold text-ink-950/10">{p.step}</div>
                <h3 className="mt-2 text-lg font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE RANK FLOW */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Businesspeople brainstorming in modern office meeting representing why choose Rank Flow Agency for international SEO services"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="eyebrow">Why Us</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Choose Rank Flow Agency</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                We are an <strong>international SEO agency</strong> that understands global search. We have helped businesses rank in countries across the world, from the US to Singapore. Here is why companies choose us for <strong>worldwide SEO</strong>:
              </p>
              <ul className="mt-6 space-y-4">
                {whyChoose.map((w) => (
                  <li key={w.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="font-semibold text-ink-950">{w.title}</span>
                      <p className="mt-0.5 text-sm text-ink-600">{w.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/contact/')} className="btn-glow mt-8">
                Get Free International SEO Audit <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl reveal reveal-delay-1">
            International SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            Answers to the most common questions about international SEO and how it helps your business reach global customers.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={intlFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="international-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal">
                Ready to Reach Customers Around the World?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600 reveal reveal-delay-1">
                Request a free international SEO consultation today. We will analyze your website, identify global growth opportunities, and show you exactly how to rank in your target countries. No obligation, just a clear path to worldwide growth.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free International SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Breadcrumbs() {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-600" aria-label="Breadcrumb">
      {crumbs.map((item, i) => (
        <span key={item.path} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink-600">/</span>}
          <button
            onClick={() => navigate(item.path)}
            className={i === crumbs.length - 1 ? 'text-ink-950' : 'hover:text-brand-600'}
          >
            {item.name}
          </button>
        </span>
      ))}
    </nav>
  );
}
