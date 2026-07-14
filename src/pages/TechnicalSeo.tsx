import { Search, Check, ArrowRight, Gauge, Smartphone, Code2, ShieldCheck, FileCode, Link2, Image as ImageIcon, Settings, AlertTriangle, RefreshCw, FileBarChart, Map as MapIcon } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Technical SEO Services', path: '/technical-seo' },
];

const techSeoFaqs = [
  { q: 'What is Technical SEO and why do I need it?', a: 'Technical SEO is the process of optimizing your website\'s infrastructure so search engines can crawl, index, and rank your pages efficiently. Without it, even the best content will struggle to rank. Technical SEO fixes speed issues, indexing errors, mobile problems, and structured data gaps that hold your site back.' },
  { q: 'How long does a Technical SEO audit take?', a: 'A full technical audit typically takes 5–10 business days depending on your website size. We deliver a prioritized report with every issue identified, its severity, and the exact steps to fix it. Most fixes are implemented within the first month.' },
  { q: 'What are Core Web Vitals and why do they matter?', a: 'Core Web Vitals are Google\'s official metrics for measuring page experience: Largest Contentful Paint (loading speed), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). They are direct ranking factors — poor scores mean lower rankings.' },
  { q: 'How do you fix crawl errors and indexing issues?', a: 'We run a full crawl of your site to identify 404 errors, soft 404s, blocked resources, orphan pages, and indexing failures. We then fix each issue by updating robots.txt, XML sitemaps, canonical tags, and server configurations so Google can index every important page.' },
  { q: 'Do you work with WordPress, Shopify, and custom websites?', a: 'Yes. We have deep expertise in WordPress, Shopify, Webflow, Wix, Squarespace, and custom-built websites. Each platform has unique technical SEO challenges and we know exactly what to fix on each one.' },
  { q: 'How much do Technical SEO services cost?', a: 'Our Technical SEO services are priced based on website size and complexity. We offer one-time audit packages and ongoing monthly monitoring. Contact us for a free audit and custom quote — no obligation.' },
  { q: 'What is structured data and schema markup?', a: 'Structured data is code you add to your website that helps Google understand your content — products, reviews, FAQs, events, business info, and more. Schema markup can earn rich snippets in search results, which increase click-through rates and visibility.' },
  { q: 'How does page speed affect my SEO rankings?', a: 'Page speed is a confirmed Google ranking factor. Slow pages frustrate users and increase bounce rates. Google rewards fast-loading pages with higher rankings. We optimize images, code, caching, and server response times to get your site loading in under 2 seconds.' },
  { q: 'What is the difference between a 301 and 302 redirect?', a: 'A 301 redirect is permanent — it passes link authority to the new URL. A 302 redirect is temporary — it does not pass authority. Using the wrong redirect type can waste link equity and hurt rankings. We audit and fix all redirect chains and errors.' },
  { q: 'Do you provide ongoing monitoring after the initial fixes?', a: 'Yes. Technical SEO is not a one-time fix — new issues arise as your site grows. We provide monthly monitoring with crawl reports, Core Web Vitals tracking, and proactive fixes to keep your site healthy and ranking.' },
];

const services = [
  { icon: FileBarChart, title: 'Technical SEO Audit', desc: 'A comprehensive crawl of your entire website identifying every technical issue affecting your rankings — from indexing errors to speed bottlenecks to broken links.' },
  { icon: Search, title: 'Website Crawl Analysis', desc: 'We simulate how Googlebot crawls your site, identifying blocked resources, orphan pages, crawl depth issues, and structural problems that prevent proper indexing.' },
  { icon: AlertTriangle, title: 'Indexing & Crawl Error Fixes', desc: 'We fix 404 errors, soft 404s, server errors, and pages blocked from indexing. Every important page gets crawled and indexed by Google.' },
  { icon: MapIcon, title: 'XML Sitemap Optimization', desc: 'We build and optimize a clean XML sitemap that guides Google to your most important pages, with proper priority settings and automatic submission to Google Search Console.' },
  { icon: Settings, title: 'Robots.txt Optimization', desc: 'We configure your robots.txt to allow crawling of important pages while blocking low-value sections, preventing crawl budget waste on irrelevant content.' },
  { icon: Gauge, title: 'Core Web Vitals Optimization', desc: 'We optimize LCP, FID, and CLS scores to meet Google\'s page experience standards. Better Core Web Vitals mean better rankings and a smoother user experience.' },
  { icon: Gauge, title: 'Page Speed Optimization', desc: 'We compress images, minify CSS and JavaScript, implement lazy loading, configure browser caching, and optimize server response times to load your site in under 2 seconds.' },
  { icon: Smartphone, title: 'Mobile SEO', desc: 'We ensure your site is fully mobile-friendly with responsive design, proper viewport settings, tap-target sizing, and mobile-first indexing compliance.' },
  { icon: Code2, title: 'Structured Data (Schema Markup)', desc: 'We implement schema markup for products, reviews, FAQs, events, local business, breadcrumbs, and more — earning rich snippets that increase click-through rates.' },
  { icon: ShieldCheck, title: 'HTTPS & Security Checks', desc: 'We audit your SSL certificate, mixed content issues, and security headers. A secure site is a ranking requirement — we make sure yours passes every security check.' },
  { icon: FileCode, title: 'Canonical Tag Optimization', desc: 'We implement and fix canonical tags to prevent duplicate content issues, ensuring Google indexes the correct version of every page and consolidates link authority.' },
  { icon: RefreshCw, title: 'Redirect Management (301/302)', desc: 'We audit all redirects, fix redirect chains and loops, and ensure the correct redirect type is used. Proper redirect management preserves link equity and prevents ranking loss.' },
  { icon: AlertTriangle, title: 'Broken Link Fixes', desc: 'We find and fix every broken internal and external link on your site. Broken links waste crawl budget and create a poor user experience that Google penalizes.' },
  { icon: Link2, title: 'Internal Linking Optimization', desc: 'We restructure your internal links to pass authority to your most important pages, improve crawl efficiency, and help Google understand your site architecture.' },
  { icon: ImageIcon, title: 'Image Optimization', desc: 'We compress images, implement next-gen formats (WebP), add descriptive alt text, and set up lazy loading so images do not slow down your pages.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Fast-loading dental websites that rank well and convert patients.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Mobile-optimized restaurant sites with schema for menus and reviews.' },
  { name: 'Roofers', icon: '🏠', desc: 'Technical foundations that help roofing sites rank in local search.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Speed-optimized plumber websites that load fast on mobile devices.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Secure, fast law firm websites with proper schema and indexing.' },
  { name: 'Real Estate', icon: '🏡', desc: 'High-performance property sites that handle large image catalogs.' },
  { name: 'eCommerce', icon: '🛒', desc: 'Technical SEO for large online stores with thousands of product pages.' },
  { name: 'Shopify Stores', icon: '🏷️', desc: 'Shopify-specific speed, schema, and indexing optimizations.' },
  { name: 'SaaS Companies', icon: '💻', desc: 'Scalable technical infrastructure for SaaS websites and apps.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Enterprise-grade technical SEO at small business pricing.' },
];

const process = [
  { step: '01', title: 'Full Website Audit', desc: 'We crawl your entire website with industry-leading tools to identify every technical issue affecting your search performance.' },
  { step: '02', title: 'Technical Analysis', desc: 'We analyze server logs, crawl data, rendering behavior, and site architecture to understand how Google sees your site.' },
  { step: '03', title: 'Error Identification', desc: 'We categorize every issue by severity — critical errors, warnings, and opportunities — so you know exactly what to fix first.' },
  { step: '04', title: 'Priority Fixes', desc: 'We implement the highest-impact fixes first: indexing errors, broken redirects, canonical issues, and crawl-blocking problems.' },
  { step: '05', title: 'Speed Optimization', desc: 'We compress assets, optimize code, configure caching, and improve server response times to get your site loading fast.' },
  { step: '06', title: 'Core Web Vitals', desc: 'We optimize LCP, FID, and CLS to pass Google\'s page experience thresholds and earn the ranking boost that comes with them.' },
  { step: '07', title: 'Testing & Validation', desc: 'We re-crawl the site, run speed tests, validate schema markup, and confirm every fix is working before reporting back to you.' },
  { step: '08', title: 'Monthly Monitoring', desc: 'We monitor your site continuously, catching new issues before they affect rankings and keeping your technical foundation solid.' },
];

const whyChoose = [
  { title: 'Experienced Technical SEO Experts', desc: 'Our team has years of hands-on experience fixing technical issues on sites of all sizes — from small business sites to enterprise eCommerce.' },
  { title: 'White Hat SEO Only', desc: 'We follow Google\'s guidelines strictly. Every fix we make is safe, sustainable, and designed to improve rankings without risk of penalty.' },
  { title: 'Transparent Reports', desc: 'You get a detailed report showing every issue found, every fix implemented, and the measurable impact on your rankings and traffic.' },
  { title: 'Affordable Solutions', desc: 'Our Technical SEO services are priced for businesses of all sizes. You get enterprise-level expertise at a price that makes sense.' },
  { title: 'Long-Term SEO Growth', desc: 'We do not just fix today\'s problems. We build a technical foundation that supports sustainable ranking growth for years to come.' },
  { title: 'Ongoing Support', desc: 'Technical SEO is never one-and-done. We provide ongoing monitoring and support to keep your site healthy as it grows and evolves.' },
];

export default function TechnicalSeo() {
  return (
    <>
      <SEO
        title="Technical SEO Services"
        description="Fix crawl errors, improve Core Web Vitals, optimize page speed, and rank higher with our Technical SEO services. Get a free technical SEO audit today."
        path="/technical-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(techSeoFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Technical SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Technical SEO Services That Help Your Website <span className="text-gradient">Rank Higher</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                Is your website technically sound? If Google cannot crawl it, index it, or load it fast, your content will not rank — no matter how good it is. Our Technical SEO services fix the infrastructure issues holding your site back so you can rank higher and grow faster.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Programming code on computer screen representing technical SEO and website optimization services"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS TECHNICAL SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is Technical SEO?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                Technical SEO is the foundation of your website's search performance. It is the process of optimizing your site's infrastructure — server, code, speed, structure, and security — so that search engines like Google can crawl, index, and rank your pages efficiently.
              </p>
              <p>
                Think of it this way: your content is the product, and technical SEO is the store. If the doors are locked, the shelves are messy, and the lights are flickering, nobody buys — no matter how good the product is. <strong>Technical SEO fixes the store</strong> so Google can walk in, find everything, and recommend you to customers.
              </p>
              <p>
                It covers everything from <strong>XML sitemaps</strong> and <strong>robots.txt</strong> files to <strong>Core Web Vitals</strong>, page speed, structured data, canonical tags, redirect management, mobile optimization, and HTTPS security. Each element tells Google your site is fast, reliable, and worthy of ranking.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern data center with server racks representing website infrastructure and technical SEO architecture"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY TECHNICAL SEO IS IMPORTANT */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Colorful programming code on screen representing website performance and technical SEO optimization"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Technical SEO Is Important</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                You can write the best content in your industry, build the most beautiful pages, and earn the strongest backlinks — but if your site is technically broken, none of it will rank. Here is what technical SEO delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Search className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better Google crawling</strong> — Googlebot can access and understand every page on your site without hitting roadblocks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><RefreshCw className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Faster indexing</strong> — new and updated pages get discovered and indexed by Google in days, not weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUpIcon /></span>
                  <span className="text-slate-200"><strong>Higher rankings</strong> — a technically sound site ranks higher because Google trusts it more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Gauge className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Improved website speed</strong> — fast-loading pages rank higher and keep visitors engaged longer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Check className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better Core Web Vitals</strong> — passing Google's page experience signals gives you a ranking edge over competitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Smartphone className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better user experience</strong> — a fast, secure, mobile-friendly site keeps visitors happy and converts more of them</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TECHNICAL SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our Technical SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A complete technical optimization programme covering every ranking factor Google uses to evaluate your website's infrastructure.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/34804018/pexels-photo-34804018.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="AI-assisted coding and debugging on screen representing technical SEO audit and code analysis services"
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

      {/* CORE WEB VITALS & PAGE SPEED (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Core Web Vitals & Page Speed</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Google uses Core Web Vitals as a ranking signal. If your site loads slowly, shifts layout while loading, or feels unresponsive, Google demotes it. We optimize all three Core Web Vitals metrics:
                </p>
                <p>
                  <strong>Largest Contentful Paint (LCP)</strong> — we get your main content loading in under 2.5 seconds by optimizing images, server response times, and render-blocking resources.
                </p>
                <p>
                  <strong>Cumulative Layout Shift (CLS)</strong> — we eliminate visual jumps and layout shifts by setting explicit dimensions on images, ads, and dynamic content.
                </p>
                <p>
                  <strong>First Input Delay (FID)</strong> — we reduce JavaScript execution time and break up long tasks so your site responds instantly to user interaction.
                </p>
                <p>
                  The result: a site that passes Google's page experience thresholds, ranks higher, and keeps visitors engaged instead of bouncing.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2818118/pexels-photo-2818118.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Laptop displaying data analytics and performance graphs representing Core Web Vitals and page speed optimization"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURED DATA & SCHEMA MARKUP (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/17793437/pexels-photo-17793437.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="HTML and CSS code on computer screen representing structured data and schema markup implementation"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Structured Data & Schema Markup</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                Structured data is a special code format that helps Google understand exactly what your content is about — products, reviews, FAQs, events, local business info, recipes, articles, and more.
              </p>
              <p>
                When implemented correctly, <strong>schema markup</strong> can earn <strong>rich snippets</strong> in search results — star ratings, pricing, availability, FAQ accordions, and breadcrumb trails that make your listing stand out and get more clicks.
              </p>
              <p>
                We implement schema across your site using JSON-LD (Google's preferred format), validate it with Google's Rich Results Test, and monitor it for errors. Whether you need product schema for an eCommerce store, FAQ schema for a service page, or local business schema for your Google Business Profile, we handle it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE SEO (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Mobile SEO</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Google uses mobile-first indexing — meaning it ranks your site based on its mobile version, not the desktop version. If your site is not fully mobile-friendly, your rankings suffer across the board.
                </p>
                <p>
                  We ensure your site is fully responsive with proper viewport settings, appropriately sized tap targets, no intrusive interstitials, and content that reads perfectly on any screen size. We test on real devices across iOS and Android to verify.
                </p>
                <p>
                  A fast, smooth mobile experience is not just good for rankings — it is where over 60% of your visitors are. We make sure every one of them has a flawless experience.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/28870000/pexels-photo-28870000.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Hand holding modern smartphone representing mobile SEO and responsive website optimization"
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
            We have specialized Technical SEO strategies for the unique infrastructure challenges each industry faces.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/24709142/pexels-photo-24709142.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Person using laptop for online shopping representing diverse industries served by Rank Flow Agency"
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

      {/* OUR TECHNICAL SEO PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Technical SEO <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              A proven 8-step framework that finds every technical issue, fixes it, and keeps your site healthy long-term.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/33693528/pexels-photo-33693528.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Colorful coding text on dark screen representing the technical SEO process and workflow"
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
                src="https://images.pexels.com/photos/14553705/pexels-photo-14553705.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Financial analysis with graphs and charts representing measurable growth from Rank Flow Agency's Technical SEO services"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We are not just another SEO agency. We are technical SEO specialists who live and breathe website infrastructure, performance optimization, and search engine mechanics.
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
            <button onClick={() => navigate('/contact')} className="btn-glow mt-8">
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
            Technical SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about Technical SEO and how it helps your website rank higher.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={techSeoFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="technical-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Is Your Website Technically Holding You Back?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Get a free Technical SEO audit today. We will crawl your entire site, identify every issue affecting your rankings, and show you exactly how to fix it. No obligation, just clarity.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Talk to a Specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrendingUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
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
