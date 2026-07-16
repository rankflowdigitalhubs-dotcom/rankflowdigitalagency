import { Search, Check, ArrowRight, Gauge, Smartphone, Zap, Bug, Database, Code2, Link2, BarChart3, Target, TrendingUp, FileText } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'SEO Audit Services', path: '/seo-audit' },
];

const auditFaqs = [
  { q: 'What is an SEO audit?', a: 'An SEO audit is a comprehensive analysis of your website\'s search engine optimization. It examines technical performance, on-page elements, off-page factors, content quality, and user experience to identify issues that are preventing your site from ranking higher on Google. The result is a detailed report with actionable recommendations.' },
  { q: 'How long does an SEO audit take?', a: 'Most SEO audits are completed within 3–5 business days. The exact timeline depends on the size of your website, the complexity of issues, and the depth of analysis required. Larger sites with hundreds of pages may take a week or more to fully audit.' },
  { q: 'Is the SEO audit really free?', a: 'Yes. We offer a free initial SEO audit that covers the basics — technical health, key issues, and top opportunities. This gives you a clear picture of where your website stands. If you want a deeper, more comprehensive audit with prioritized recommendations and a growth strategy, we offer that as a paid service.' },
  { q: 'What does an SEO audit include?', a: 'Our SEO audit includes technical SEO analysis, on-page SEO review, off-page backlink analysis, Core Web Vitals assessment, mobile SEO check, site speed analysis, crawl error detection, indexing review, schema markup audit, internal linking analysis, competitor analysis, and keyword opportunity research.' },
  { q: 'Do I need an SEO audit if my website is new?', a: 'Yes. An SEO audit for a new website ensures it is built on a solid SEO foundation from the start. We check that your site is properly indexed, has no technical issues, and is optimized for your target keywords. Fixing issues early is much easier than fixing them after months of poor performance.' },
  { q: 'How often should I get an SEO audit?', a: 'We recommend a full SEO audit at least once a year, and a mini-audit quarterly. SEO is constantly evolving — Google updates its algorithm, competitors change their strategies, and your website grows. Regular audits ensure you stay ahead of issues before they impact rankings.' },
  { q: 'Will the SEO audit tell me exactly what to fix?', a: 'Yes. Every issue we find is documented with a clear explanation of what is wrong, why it matters, and exactly how to fix it. We prioritize recommendations by impact so you know what to tackle first for the biggest ranking improvements.' },
  { q: 'Can you fix the issues found in the audit?', a: 'Absolutely. After the audit, we can implement the recommendations for you — from technical fixes and on-page optimization to content improvements and link building. You can also take the report to your own developer. The audit is yours to keep either way.' },
  { q: 'What is the difference between a technical SEO audit and a full SEO audit?', a: 'A technical SEO audit focuses on the backend — site speed, crawlability, indexation, Core Web Vitals, and code-level issues. A full SEO audit covers technical, on-page (content, keywords, meta tags), off-page (backlinks), and competitive analysis. We offer both, but recommend the full audit for the most complete picture.' },
  { q: 'How much does a comprehensive SEO audit cost?', a: 'The cost depends on your website size and the depth of analysis. Our free audit covers the essentials. A comprehensive paid audit with prioritized recommendations and a custom growth strategy is priced based on your needs. Contact us for a custom quote — no obligation.' },
];

const auditIncludes = [
  { icon: Code2, title: 'Technical SEO Audit', desc: 'We crawl your entire site to find technical issues — broken links, redirect chains, canonical errors, robots.txt problems, and crawlability issues that block Google from indexing your pages.' },
  { icon: FileText, title: 'On-Page SEO Audit', desc: 'We analyze every page\'s title tags, meta descriptions, headings, content quality, keyword usage, and URL structure to ensure each page is fully optimized for its target keywords.' },
  { icon: Link2, title: 'Off-Page SEO Review', desc: 'We examine your backlink profile — total links, referring domains, anchor text distribution, link quality, and toxic links that could be holding your rankings back.' },
  { icon: Gauge, title: 'Core Web Vitals', desc: 'We measure your LCP, FID, and CLS scores — the specific performance metrics Google uses as ranking factors — and identify what needs to be fixed to pass.' },
  { icon: Smartphone, title: 'Mobile SEO', desc: 'We test your website on mobile devices to ensure it is mobile-friendly, responsive, and provides a good user experience on smartphones and tablets.' },
  { icon: Zap, title: 'Speed Analysis', desc: 'We analyze your page loading speed across devices, identify bottlenecks — large images, render-blocking scripts, server response times — and provide a speed optimization plan.' },
  { icon: Bug, title: 'Crawl Error Analysis', desc: 'We find and document every crawl error — 404s, 500s, soft 404s, and blocked URLs — that prevents Google from properly crawling and indexing your website.' },
  { icon: Database, title: 'Indexing Review', desc: 'We check Google Search Console to see which pages are indexed, which are excluded, and why. We identify indexing issues that prevent your content from appearing in search results.' },
  { icon: Code2, title: 'Schema Audit', desc: 'We review your structured data and schema markup to ensure it is correctly implemented, error-free, and eligible for rich snippets in Google search results.' },
  { icon: Link2, title: 'Internal Linking Audit', desc: 'We map your internal link structure to identify orphan pages, broken links, and opportunities to improve how authority flows through your website.' },
  { icon: BarChart3, title: 'Competitor Analysis', desc: 'We analyze your top competitors\' SEO — their keywords, backlinks, content, and technical health — to find gaps and opportunities you can exploit.' },
  { icon: Target, title: 'Keyword Opportunity Analysis', desc: 'We identify high-value keyword opportunities your website is missing — keywords with search volume, manageable competition, and strong commercial intent.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Dental practice SEO audits for more patient appointments.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Restaurant SEO audits to attract more local diners.' },
  { name: 'Roofers', icon: '🏠', desc: 'Roofing company SEO audits for more service calls.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Plumbing business SEO audits for emergency call leads.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Law firm SEO audits for more case inquiries.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Real estate SEO audits for more property inquiries.' },
  { name: 'Shopify Stores', icon: '🏷️', desc: 'Shopify SEO audits for more product sales.' },
  { name: 'eCommerce', icon: '🛒', desc: 'eCommerce SEO audits for more online revenue.' },
  { name: 'SaaS', icon: '💻', desc: 'SaaS company SEO audits for more trial signups.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Small business SEO audits for more local customers.' },
];

const process = [
  { step: '01', title: 'Website Analysis', desc: 'We perform a deep crawl of your entire website, analyzing every page, URL, and element. We use professional SEO tools combined with manual review to identify issues that automated tools miss.' },
  { step: '02', title: 'Technical Scan', desc: 'We run a comprehensive technical scan — checking site speed, Core Web Vitals, mobile responsiveness, crawl errors, indexing status, schema markup, and internal linking structure.' },
  { step: '03', title: 'SEO Report', desc: 'We compile a detailed SEO report documenting every issue found, organized by category — technical, on-page, off-page, and content — with clear explanations and severity levels.' },
  { step: '04', title: 'Priority Recommendations', desc: 'We prioritize every recommendation by impact and effort. You get a clear action plan showing exactly what to fix first for the biggest ranking improvements, and what can wait.' },
  { step: '05', title: 'Growth Strategy', desc: 'We provide a custom growth strategy that outlines the steps needed to improve your rankings, increase traffic, and outperform competitors — with timelines and expected outcomes.' },
];

const whyChoose = [
  { title: 'Detailed Reports', desc: 'Our audit reports are thorough, clear, and actionable. Every issue is documented with screenshots, explanations, and step-by-step fix instructions. No vague recommendations — just clarity.' },
  { title: 'Actionable Recommendations', desc: 'We do not just list problems — we provide specific, prioritized solutions. You know exactly what to fix, in what order, and what impact each fix will have on your rankings.' },
  { title: 'White Hat SEO', desc: 'Every recommendation follows Google\'s guidelines. No risky shortcuts, no black hat tactics. We help you build a sustainable SEO foundation that lasts.' },
  { title: 'Experienced SEO Specialists', desc: 'Our audits are performed by experienced SEO consultants who have audited hundreds of websites across dozens of industries. We know what to look for and what actually matters.' },
  { title: 'Transparent Process', desc: 'You see exactly what we check, what we find, and how we prioritize. No black boxes, no mystery metrics. Full transparency from audit to recommendation.' },
  { title: 'Ongoing Support', desc: 'After the audit, we are here to help. Whether you want us to implement the fixes or just answer questions about the report, we provide ongoing support to ensure your SEO improves.' },
];

export default function SEOAudit() {
  return (
    <>
      <SEO
        title="SEO Audit Services"
        description="Discover what is holding your website back with our professional SEO audit services. Technical SEO, on-page, off-page, Core Web Vitals, and competitor analysis."
        path="/seo-audit"
        schema={[breadcrumbSchema(crumbs), faqSchema(auditFaqs)]}
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
              <span className="eyebrow mt-6 reveal">SEO Audit Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Professional SEO Audit Services That Discover What's Holding Your Website <span className="text-gradient">Back</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                Your website is not ranking the way it should — and you do not know why. Our <strong>SEO audit services</strong> uncover every technical issue, on-page gap, and missed opportunity that is keeping your site off the first page of Google. Clear answers, prioritized fixes, real results.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Request Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6120217/pexels-photo-6120217.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Magnifying glass and documents with financial charts representing professional SEO audit services and website analysis"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AN SEO AUDIT */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is an SEO Audit?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                An <strong>SEO audit</strong> is a complete health check for your website. It is a systematic analysis of every factor that affects how your site ranks on Google — from technical performance and site speed to content quality, keyword usage, and backlink strength.
              </p>
              <p>
                Think of it like a medical checkup for your website. A doctor does not just look at one symptom — they run a full panel of tests to find underlying issues you may not even know about. An <strong>SEO analysis</strong> does the same thing for your website, uncovering hidden problems that are quietly dragging down your <strong>Google rankings</strong>.
              </p>
              <p>
                A thorough <strong>website SEO audit</strong> examines three main areas: technical SEO (can Google crawl and index your site properly?), on-page SEO (is your content optimized for the right keywords?), and off-page SEO (does your site have quality backlinks building authority?). It also looks at user experience, mobile performance, and competitor strategies.
              </p>
              <p>
                The result is a detailed <strong>SEO report</strong> that tells you exactly what is working, what is broken, and what to fix first. No guesswork — just a clear roadmap to better rankings and more <strong>organic traffic</strong>.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8978610/pexels-photo-8978610.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Checklist on clipboard with pen representing SEO audit process and detailed website analysis report"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY EVERY WEBSITE NEEDS AN SEO AUDIT */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5310563/pexels-photo-5310563.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Hand drawing upward growth graph on whiteboard representing why every website needs an SEO audit for improved performance"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Every Website Needs an SEO Audit</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                You would not drive a car for years without a service. Your website is no different. Without a regular SEO audit, issues accumulate quietly — slowly eroding your rankings, traffic, and revenue. Here is what an audit delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better rankings</strong> — fix the issues that are keeping your site off the first page of Google</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Search className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More traffic</strong> — optimized pages attract more visitors who are searching for what you offer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Target className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Higher conversions</strong> — better content and user experience turn more visitors into customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Smartphone className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Improved user experience</strong> — a faster, cleaner site keeps visitors engaged and reduces bounce rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Zap className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Faster website</strong> — speed optimization improves both rankings and user satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Database className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better indexing</strong> — ensure Google can find, crawl, and index all your important pages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SEO AUDIT INCLUDES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Check</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our SEO Audit <span className="text-gradient">Includes</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A comprehensive 12-point <strong>website audit</strong> that examines every factor affecting your search engine performance.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7109291/pexels-photo-7109291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Purple data analytics chart on computer screen representing comprehensive SEO audit metrics and dashboard analysis"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {auditIncludes.map((item, i) => (
            <div key={item.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white/[0.03] p-7 hover:bg-white/[0.06] transition-colors">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 transition-transform group-hover:scale-110">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SEO AUDIT (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Technical SEO Audit</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  A <strong>technical SEO audit</strong> is the foundation of every SEO campaign. It examines the backend of your website — the code, server configuration, and architecture that determine whether Google can effectively crawl, understand, and index your pages.
                </p>
                <p>
                  We crawl your entire site with professional tools to find technical issues that are invisible to the naked eye. Broken links, redirect chains, canonical tag errors, duplicate content, robots.txt misconfigurations, XML sitemap issues, JavaScript rendering problems — we find them all.
                </p>
                <p>
                  Technical issues are often the biggest barrier to better rankings. You can have great content and quality backlinks, but if Google cannot crawl your site properly, none of it matters. Our technical audit identifies and prioritizes every fix needed to get your site performing at its best.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4597280/pexels-photo-4597280.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Server room with hardware racks and network cables representing technical SEO audit and website infrastructure inspection"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ON-PAGE SEO AUDIT (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Notebook with SEO terms and keywords on keyboard representing on-page SEO audit and content optimization analysis"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">On-Page SEO Audit</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                On-page SEO is everything on your website that you can control — title tags, meta descriptions, headings, content, images, and URL structure. Our on-page audit examines each element to ensure it is fully optimized for your target keywords.
              </p>
              <p>
                We check that every page has a unique, compelling title tag and meta description. We review heading structure to ensure proper hierarchy. We analyze content quality, keyword density, and topical relevance. We check image alt text, internal linking, and URL structure.
              </p>
              <p>
                On-page optimization is often the fastest way to improve rankings. Small changes — a better title tag, a keyword in an H2, a rewritten meta description — can produce significant ranking improvements. Our audit shows you exactly which pages need attention and what to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE WEB VITALS (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Core Web Vitals Audit</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Core Web Vitals are Google's official page experience metrics — specific measurements of loading speed, interactivity, and visual stability. Google uses these metrics as ranking factors, so they directly impact your <strong>Google rankings</strong>.
                </p>
                <p>
                  We measure three key metrics: Largest Contentful Paint (LCP) — how fast your main content loads, First Input Delay (FID) — how quickly your page responds to user interaction, and Cumulative Layout Shift (CLS) — how stable your page layout is while loading.
                </p>
                <p>
                  If your Core Web Vitals scores are poor, Google penalizes your rankings. We identify exactly what is causing poor scores — large images, render-blocking JavaScript, unused CSS, server response times — and provide a specific optimization plan to pass all three metrics.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7521882/pexels-photo-7521882.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Close-up of speedometer gauge representing Core Web Vitals audit and website performance measurement"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE HELP */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">Who We Help</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Help</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            We have audited websites across dozens of industries — each with unique SEO challenges, competitive landscapes, and ranking opportunities.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7988690/pexels-photo-7988690.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Diverse team of business professionals collaborating over tablet representing industries helped by SEO audit services"
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

      {/* OUR SEO AUDIT PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our SEO Audit <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              A proven 5-step framework that takes your website from analysis to actionable growth strategy.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6804091/pexels-photo-6804091.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project manager organizing tasks with sticky notes on board representing the SEO audit process and systematic workflow"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                src="https://images.pexels.com/photos/8068833/pexels-photo-8068833.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business team meeting with diverse professionals representing why choose Rank Flow Agency for SEO audit services"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We are not just an <strong>SEO agency</strong> that runs automated tools and hands you a generic report. Our <strong>SEO experts</strong> manually analyze your website, interpret the data, and provide specific, prioritized recommendations that actually move the needle.
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
              Request Free SEO Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl reveal reveal-delay-1">
            SEO Audit <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about SEO audits and how they improve your website\'s performance.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={auditFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="seo-audit" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Find Out What's Holding Your Website Back
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Request a free SEO audit today. We will analyze your website, identify the issues keeping you off the first page of Google, and show you exactly what to fix to improve your rankings and traffic. No obligation, just answers.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Request Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Talk to an SEO Expert
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
