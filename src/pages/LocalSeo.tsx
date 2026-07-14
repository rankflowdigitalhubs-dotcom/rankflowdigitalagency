import { MapPin, Search, Check, ArrowRight, Phone, TrendingUp, Users, Star, Navigation, FileBarChart, PenLine, Link2, Building2, Settings, ClipboardList } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Local SEO Services', path: '/local-seo' },
];

const localSeoFaqs = [
  { q: 'What is Local SEO and how does it work?', a: 'Local SEO optimizes your online presence so your business appears in local search results and the Google Maps pack when nearby customers search for your services. It combines Google Business Profile optimization, local citations, reviews, on-page SEO, and local link building to put you in front of people ready to buy.' },
  { q: 'How long does Local SEO take to show results?', a: 'Most clients see map pack improvements within 4–8 weeks. Significant ranking and traffic gains typically appear in 3–6 months depending on your industry, competition, and starting point. Google Business Profile optimizations often produce the fastest visible results.' },
  { q: 'How much do Local SEO services cost?', a: 'Our Local SEO packages start at affordable monthly rates designed for small businesses. Pricing depends on the number of locations, competition level, and scope of work. Contact us for a free audit and custom quote — no obligation.' },
  { q: 'Do you manage Google Business Profile for me?', a: 'Yes. We fully optimize and manage your Google Business Profile — including category selection, service descriptions, photos, posts, Q&A, and review responses — so it ranks higher and converts more visitors into customers.' },
  { q: 'Can you help me get more Google reviews?', a: 'Absolutely. We set up automated, Google-compliant review request flows that make it easy for happy customers to leave reviews. We also respond to reviews on your behalf to build trust and improve local rankings.' },
  { q: 'What is NAP consistency and why does it matter?', a: 'NAP stands for Name, Address, Phone number. Consistent NAP across all directories and your website tells Google your business information is accurate, which improves local search rankings. Inconsistent NAP confuses Google and can lower your rankings.' },
  { q: 'Do you work with multiple business locations?', a: 'Yes. We manage Local SEO for single-location businesses and multi-location franchises. Each location gets its own Google Business Profile, location landing page, citation set, and review strategy.' },
  { q: 'What is the Google Maps pack and how do I get in it?', a: 'The Google Maps pack (also called the Local Pack) is the top 3 business listings that appear on Google search with a map. To rank there you need an optimized Google Business Profile, consistent citations, strong reviews, and local relevance — exactly what our service delivers.' },
  { q: 'Do you offer Local SEO for specific industries?', a: 'Yes. We have specialized Local SEO strategies for dentists, restaurants, roofers, plumbers, lawyers, electricians, real estate, medical clinics, Shopify stores, and other local service businesses. Each industry has unique ranking factors we target.' },
  { q: 'How do I track my Local SEO results?', a: 'You receive a detailed monthly report showing map pack rankings, organic traffic, Google Business Profile insights (calls, directions, website clicks), review growth, and citation progress. We also set up Google Analytics and Google Search Console so you can monitor performance in real time.' },
];

const services = [
  { icon: MapPin, title: 'Google Business Profile Optimization', desc: 'We claim, verify, and fully optimize your Google Business Profile with accurate categories, keyword-rich descriptions, service areas, photos, and regular posts. This is the foundation of Local SEO and the fastest way to appear in the Google Maps pack.' },
  { icon: Search, title: 'Local Keyword Research', desc: 'We identify the exact keywords your local customers search for — including "near me" terms, city + service combinations, and neighbourhood-specific phrases. Every page and piece of content targets keywords with real buying intent.' },
  { icon: FileBarChart, title: 'On-Page SEO', desc: 'We optimize title tags, meta descriptions, headings, and content with local keywords. Each page is structured to tell Google exactly what you do and where you do it, so you rank for the right local searches.' },
  { icon: Settings, title: 'Technical SEO', desc: 'We fix crawlability, site speed, mobile usability, and structured data issues that block Google from ranking your site. A technically sound site is the backbone of every successful Local SEO campaign.' },
  { icon: Building2, title: 'Local Citations', desc: 'We build consistent business listings across top local directories — Yelp, Bing Places, Apple Maps, Yellow Pages, and 50+ niche directories. Each citation strengthens your local authority and improves map rankings.' },
  { icon: Check, title: 'NAP Consistency', desc: 'We audit and fix your Name, Address, and Phone number across the web. Consistent NAP signals trust to Google and prevents ranking confusion. Inconsistent NAP is one of the most common Local SEO mistakes.' },
  { icon: Navigation, title: 'Google Maps Optimization', desc: 'We optimize your Maps listing with geo-tagged images, accurate service areas, keyword-optimized titles, and review strategies designed to push you into the top 3 map pack results.' },
  { icon: PenLine, title: 'Content Optimization', desc: 'We create and optimize location pages, service pages, and blog content targeting local keywords. Content that answers local search queries drives organic traffic and establishes your local authority.' },
  { icon: Link2, title: 'Internal Linking', desc: 'We structure your internal links to pass authority to your most important local pages. A strong internal linking strategy helps Google understand your site and boosts rankings for your target keywords.' },
  { icon: TrendingUp, title: 'Local Link Building', desc: 'We earn backlinks from local newspapers, chambers of commerce, business associations, and relevant local blogs. Local links are one of the strongest ranking signals for Google Maps and local search.' },
  { icon: ClipboardList, title: 'Monthly SEO Reports', desc: 'Every month you receive a transparent report showing map pack rankings, organic traffic growth, Google Business Profile insights, review growth, and next steps. No jargon — just clear results and action items.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Fill your chairs with new patients searching for dental services nearby.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Get found by hungry locals searching for dining options near them.' },
  { name: 'Roofers', icon: '🏠', desc: 'Rank for emergency roof repairs and roofing services in your service area.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Capture urgent plumbing searches and become the go-to plumber in your city.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Dominate local legal searches and convert searchers into clients.' },
  { name: 'Electricians', icon: '⚡', desc: 'Be the first electrician found when someone searches for electrical services.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Attract buyers and sellers searching for local real estate agents.' },
  { name: 'Medical Clinics', icon: '🏥', desc: 'Connect with patients searching for nearby medical and urgent care services.' },
  { name: 'Shopify Stores', icon: '🛒', desc: 'Drive local traffic to your online store with geo-targeted SEO strategies.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Compete with bigger brands in your local market and win nearby customers.' },
];

const process = [
  { step: '01', title: 'Website Audit', desc: 'We run a full technical and content audit of your website to identify what is helping and what is hurting your local search rankings.' },
  { step: '02', title: 'Keyword Research', desc: 'We discover the local keywords your customers actually search — including city + service terms, "near me" queries, and neighbourhood phrases.' },
  { step: '03', title: 'Competitor Analysis', desc: 'We analyze the top-ranking local competitors in your area to understand exactly what they are doing — and build a strategy to beat them.' },
  { step: '04', title: 'Technical SEO', desc: 'We fix site speed, mobile usability, structured data, and crawlability issues so Google can index and rank your pages properly.' },
  { step: '05', title: 'Content Optimization', desc: 'We optimize your existing pages and create new location and service pages targeting local keywords with buying intent.' },
  { step: '06', title: 'Google Business Profile', desc: 'We fully optimize your Google Business Profile — categories, descriptions, photos, posts, and service areas — to rank in the Google Maps pack.' },
  { step: '07', title: 'Link Building', desc: 'We build local citations and earn backlinks from local directories, chambers of commerce, and relevant local websites.' },
  { step: '08', title: 'Monthly Reporting', desc: 'You receive a clear monthly report showing rankings, traffic, calls, directions, and reviews — plus the next month\'s action plan.' },
];

const whyChoose = [
  { title: 'Experienced SEO Specialists', desc: 'Our team has years of hands-on Local SEO experience across dozens of industries. We know what works and what does not.' },
  { title: 'White Hat SEO Only', desc: 'We follow Google\'s guidelines strictly. No shortcuts, no risk. Your rankings are safe and sustainable for the long term.' },
  { title: 'Transparent Reporting', desc: 'You get a detailed monthly report with real numbers — rankings, traffic, calls, reviews. No hidden metrics, no vanity stats.' },
  { title: 'Affordable Packages', desc: 'Our Local SEO services are priced for small businesses. You get enterprise-level strategy at a small business budget.' },
  { title: 'Long-Term Growth Strategy', desc: 'We do not chase quick wins that fade. We build a compounding local presence that grows stronger every month.' },
  { title: 'Dedicated Support', desc: 'You get a dedicated strategist who knows your business and is available whenever you need help or have questions.' },
];

export default function LocalSeo() {
  return (
    <>
      <SEO
        title="Local SEO Services for Small Businesses"
        description="Rank higher on Google Maps and local search with our Local SEO services. We optimize your Google Business Profile, build citations, and drive more calls."
        path="/local-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(localSeoFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Local SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Get Found by Local Customers <span className="text-gradient">Searching Right Now</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                When someone in your city searches for your services, do they find you or your competitors? Our Local SEO services put your business at the top of Google Maps and local search — driving more phone calls, website visits, and walk-in customers.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional using smartphone with navigation app on urban street representing local SEO for small businesses"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS LOCAL SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is Local SEO?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                Local SEO is the process of optimizing your online presence so your business appears in local search results when nearby customers search for your products or services. It is how you show up in the Google Maps pack — those top 3 listings with the map pin that appear above regular search results.
              </p>
              <p>
                Think about how you search for a local business. You type "dentist near me" or "roofing company in [your city]" and Google shows you a map with three businesses at the top. Those businesses get the calls. Local SEO is the work that puts <em>your</em> business in those top three spots.
              </p>
              <p>
                It combines <strong>Google Business Profile optimization</strong>, local keyword targeting, citation building, review management, and on-page SEO — all working together to tell Google that your business is the most relevant and trustworthy result for local searches in your area.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5444631/pexels-photo-5444631.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Google Maps navigation on smartphone showing local search results for nearby businesses"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY LOCAL SEO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6169861/pexels-photo-6169861.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Smartphone screen showing Google search results in dark mode representing local search visibility"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Local SEO Matters for Your Business</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Local SEO is not optional anymore. It is the difference between being found and being invisible. Here is what happens when your business ranks at the top of local search:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Phone className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More phone calls</strong> — 64% of local customers call a business directly from Google search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Users className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More website visitors</strong> — top map pack listings get the majority of local search clicks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Navigation className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More Google Maps visibility</strong> — customers find you faster and get directions with one tap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><MapPin className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More local customers</strong> — reach people in your area who are ready to buy right now</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Star className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Higher trust</strong> — businesses in the map pack are perceived as more established and trustworthy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LOCAL SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our Local SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A complete Local SEO programme covering every ranking factor Google uses to decide who appears in the map pack and local search results.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7693745/pexels-photo-7693745.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Workspace with hands analyzing marketing data on laptop representing comprehensive local SEO services"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white/[0.03] p-7 hover:bg-white/[0.06] transition-colors">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE BUSINESS PROFILE OPTIMIZATION (deep dive with image) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Google Business Profile Optimization</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Your Google Business Profile is the single most important factor in Local SEO. It is what Google uses to decide if you appear in the Maps pack — and it is often the first thing a potential customer sees about your business.
                </p>
                <p>
                  We optimize every element: primary and secondary categories, keyword-rich business description, service and product listings, service areas, business hours, photos, posts, Q&A responses, and review replies. Every detail is tuned to maximize your visibility and conversion rate.
                </p>
                <p>
                  An incomplete or poorly optimized profile is like having a storefront with no sign. We make sure your profile is fully claimed, verified, and optimized to rank at the top.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4542998/pexels-photo-4542998.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Smartphone displaying GPS map of New York City representing Google Business Profile optimization"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CITATIONS & NAP (deep dive with image) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Traditional local shop with vendor at entrance representing local business citations and NAP consistency"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Local Citations & NAP Consistency</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                A local citation is any mention of your business name, address, and phone number (NAP) on the web — directories, review sites, social platforms, and local blogs. Google uses these citations to verify your business exists and is located where you say it is.
              </p>
              <p>
                If your NAP is inconsistent — different phone numbers on Yelp vs Google vs your website — Google loses confidence in your business information and your rankings drop. We audit every citation, fix inconsistencies, and build new listings on the directories that matter most for your industry.
              </p>
              <p>
                We submit your business to <strong>50+ top local directories</strong> including Yelp, Bing Places, Apple Maps, Yellow Pages, and niche industry directories. Every listing is hand-checked for accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS OPTIMIZATION (deep dive with image) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Google Maps Optimization</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Ranking in the Google Maps pack is the holy grail of Local SEO. The top 3 map results capture over 44% of all clicks from local search. If you are not in the top 3, you are losing customers to competitors who are.
                </p>
                <p>
                  We optimize your Maps listing with geo-tagged images, keyword-optimized business titles, accurate service areas, review velocity strategies, and proximity signals that tell Google your business is the best match for local searches in your area.
                </p>
                <p>
                  Combined with citation building and review management, our <strong>Google Maps SEO</strong> strategy is designed to push you into the top 3 — and keep you there.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5444625/pexels-photo-5444625.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Woman holding smartphone with GPS navigation displayed representing Google Maps optimization for local businesses"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">Who We Help</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            We have proven Local SEO strategies tailored to the unique ranking factors and customer behaviour of each industry.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8422729/pexels-photo-8422729.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Smiling waiter near modern food truck representing diverse local businesses served by Rank Flow Agency"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white/[0.03] p-6 text-center hover:bg-white/[0.06] transition-colors">
                <div className="text-4xl">{ind.icon}</div>
                <h3 className="mt-4 text-base font-semibold text-white">{ind.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR LOCAL SEO PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Local SEO <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              A proven 8-step framework that takes your business from invisible to dominant in local search.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7651801/pexels-photo-7651801.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Diverse team planning business strategy around wooden table representing the Local SEO process at Rank Flow Agency"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="rounded-3xl bg-white/[0.03] p-7">
                  <div className="font-display text-4xl font-bold text-white/10">{p.step}</div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE RANK FLOW */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7947757/pexels-photo-7947757.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Financial analysis with graphs and charts representing measurable growth from Rank Flow Agency's Local SEO services"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We are not just another SEO agency. We are your local growth partner — focused on real business outcomes, not vanity metrics.
            </p>
            <ul className="mt-6 space-y-4">
              {whyChoose.map((w) => (
                <li key={w.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-semibold text-white">{w.title}</span>
                    <p className="mt-0.5 text-sm text-slate-400">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('/contact/')} className="btn-glow mt-8">
              Get Your Free Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl reveal reveal-delay-1">
            Local SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about Local SEO and how it helps your business grow.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={localSeoFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="local-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Ready to Dominate Local Search?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Get a free Local SEO audit today. We will show you exactly what is holding your business back from ranking in the Google Maps pack — and how to fix it. No obligation, just clarity.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Talk to a Strategist
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
    <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
      {crumbs.map((item, i) => (
        <span key={item.path} className="flex items-center gap-2">
          {i > 0 && <span className="text-slate-600">/</span>}
          <button
            onClick={() => navigate(item.path)}
            className={i === crumbs.length - 1 ? 'text-white' : 'hover:text-brand-300'}
          >
            {item.name}
          </button>
        </span>
      ))}
    </nav>
  );
}
