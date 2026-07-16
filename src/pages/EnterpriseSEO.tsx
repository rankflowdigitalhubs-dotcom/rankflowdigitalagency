import { Check, ArrowRight, Building2, Code2, PenLine, Link2, Globe, MapPin, Zap, BarChart3, Users, Server, ShieldCheck, Award, TrendingUp, Briefcase, HeartPulse, ShoppingBag, Cpu } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Enterprise SEO Services', path: '/enterprise-seo' },
];

const entFaqs = [
  { q: 'What is enterprise SEO?', a: 'Enterprise SEO is SEO designed for large companies with high-traffic websites, complex site architectures, and multiple stakeholders. It goes beyond standard SEO by addressing the unique challenges of large websites: managing millions of pages, coordinating across departments, implementing SEO at scale, and maintaining performance across international markets and multiple locations.' },
  { q: 'How is enterprise SEO different from regular SEO?', a: 'Regular SEO focuses on small to medium websites with hundreds of pages. Enterprise SEO deals with websites that have thousands or millions of pages, require coordination across multiple teams and departments, need scalable automation processes, and often operate across multiple countries and languages. The technical complexity, organizational coordination, and scale of work are fundamentally different.' },
  { q: 'What size company needs enterprise SEO?', a: 'Enterprise SEO is typically needed by companies with large websites (10,000+ pages), high traffic volumes, multiple locations or international markets, complex site architectures, dedicated marketing teams, and significant organic search revenue at stake. If your SEO challenges involve scale, coordination, and complexity, you need enterprise SEO.' },
  { q: 'How long does enterprise SEO take to show results?', a: 'Enterprise SEO timelines depend on your website size, current performance, and competitive landscape. Most enterprise campaigns show measurable improvements in 3-4 months, with significant growth in 6-12 months. For websites with millions of pages, full implementation can take longer, but we prioritize quick wins early in the campaign.' },
  { q: 'Do you offer a dedicated SEO team?', a: 'Yes. Our enterprise SEO service includes a dedicated team assigned to your account. This typically includes an SEO strategist, technical SEO specialist, content strategist, link building specialist, and project manager. Your team works exclusively on your campaign and is available for regular calls and strategy sessions.' },
  { q: 'How do you handle SEO for websites with millions of pages?', a: 'We use a combination of technical SEO audits, crawl analysis, automation, and prioritized optimization. We identify the highest-impact pages and templates, fix systemic issues that affect large portions of the site, implement automated monitoring, and use scalable content and link building strategies designed for large websites.' },
  { q: 'Can you manage SEO across multiple countries?', a: 'Yes. International enterprise SEO is a core part of our service. We handle hreflang implementation, multi-language content strategies, country-specific keyword research, international link building, and localized landing pages. We ensure your site ranks in every country and language you target.' },
  { q: 'What is multi-location SEO and do you offer it?', a: 'Multi-location SEO is the process of optimizing a website to rank in multiple geographic locations. It involves local landing pages, Google Business Profile optimization for each location, local citations, location-specific content, and review management. We offer full multi-location SEO as part of our enterprise service.' },
  { q: 'What tools do you use for enterprise SEO?', a: 'We use enterprise-grade tools including Screaming Frog, Botify, Sitebulb, Ahrefs, SEMrush, Google Search Console, Google Analytics 4, Looker Studio, and custom-built automation scripts. We also build custom dashboards and reporting tailored to your organization needs.' },
  { q: 'How much do enterprise SEO services cost?', a: 'Enterprise SEO pricing depends on your website size, number of pages, number of locations or countries, competitive landscape, and scope of work. We offer custom enterprise packages with dedicated teams. Contact us for a free enterprise SEO audit and custom quote.' },
  { q: 'How do I get started with enterprise SEO?', a: 'Book a free enterprise SEO audit with us. We will analyze your website architecture, technical SEO health, content strategy, and competitive landscape. Then we will show you exactly what needs to be done to scale your organic search performance. No obligation, just a clear enterprise SEO roadmap.' },
];

const services = [
  { icon: Code2, title: 'Enterprise Technical SEO', desc: 'We handle complex technical SEO for large websites: crawl optimization, site architecture, JavaScript rendering, Core Web Vitals, and scalable schema markup.' },
  { icon: PenLine, title: 'Enterprise Content Strategy', desc: 'We develop content strategies that scale: topic clusters, editorial calendars, content templates, and production workflows for thousands of pages.' },
  { icon: Link2, title: 'Enterprise Link Building', desc: 'We build authority at scale through digital PR, partnerships, content syndication, and high-quality backlinks from authoritative domains.' },
  { icon: Globe, title: 'International Enterprise SEO', desc: 'We manage hreflang, multi-language content, country-specific keyword research, and international link building across all your target markets.' },
  { icon: Server, title: 'Large Website Optimization', desc: 'We optimize websites with millions of pages using crawl analysis, template-level fixes, automated monitoring, and prioritized optimization.' },
  { icon: MapPin, title: 'Multi-Location SEO', desc: 'We optimize your website for hundreds or thousands of locations with local landing pages, Google Business Profiles, and local citations.' },
  { icon: Zap, title: 'SEO Automation', desc: 'We implement automated monitoring, reporting, and optimization processes that scale SEO across large websites without manual intervention.' },
  { icon: BarChart3, title: 'Advanced Reporting', desc: 'We provide executive-level dashboards, custom reports, and real-time analytics that show SEO performance across your entire organization.' },
  { icon: Users, title: 'Dedicated SEO Team', desc: 'You get a dedicated team of SEO specialists, content strategists, and link builders assigned exclusively to your enterprise account.' },
];

const industries = [
  { name: 'eCommerce', icon: ShoppingBag, desc: 'Optimize large product catalogs and category structures.' },
  { name: 'SaaS', icon: Cpu, desc: 'Scale organic growth for software and tech platforms.' },
  { name: 'Healthcare', icon: HeartPulse, desc: 'Manage SEO across hospital systems and clinic networks.' },
  { name: 'Finance', icon: BarChart3, desc: 'Navigate compliance while scaling organic visibility.' },
  { name: 'Real Estate', icon: Building2, desc: 'Optimize for thousands of properties and locations.' },
  { name: 'Corporate', icon: Briefcase, desc: 'Manage SEO for large corporate websites and brands.' },
];

const process = [
  { step: '01', title: 'Enterprise SEO Audit', desc: 'We conduct a comprehensive audit of your entire website, analyzing crawl data, site architecture, technical SEO, content, backlinks, and competitive landscape.' },
  { step: '02', title: 'Strategy Development', desc: 'We develop a scalable enterprise SEO strategy aligned with your corporate goals, resources, and organizational structure.' },
  { step: '03', title: 'Technical Implementation', desc: 'We implement technical SEO fixes at scale: crawl optimization, site architecture, schema markup, Core Web Vitals, and international SEO setup.' },
  { step: '04', title: 'Content & Link Building', desc: 'We execute content strategy and link building campaigns at enterprise scale, using automation and dedicated resources.' },
  { step: '05', title: 'Automation & Monitoring', desc: 'We set up automated monitoring, reporting, and alerting systems so SEO performance is tracked across millions of pages in real time.' },
  { step: '06', title: 'Reporting & Optimization', desc: 'You receive executive dashboards and monthly reports. We continuously optimize based on data to drive compounding growth.' },
];

const whyChoose = [
  { title: 'Enterprise SEO Specialists', desc: 'Our team has years of experience managing SEO for large websites with millions of pages and complex architectures.' },
  { title: 'Dedicated Account Team', desc: 'You get a dedicated SEO team that knows your business, your industry, and your goals inside and out.' },
  { title: 'Scalable Processes', desc: 'We use automation and scalable workflows to manage SEO efficiently across large websites without sacrificing quality.' },
  { title: 'Executive-Level Reporting', desc: 'We provide custom dashboards and reports designed for C-suite and executive stakeholders, not just SEO metrics.' },
  { title: 'Cross-Team Coordination', desc: 'We coordinate with your IT, content, marketing, and product teams to ensure SEO is implemented across your organization.' },
  { title: 'Proven Enterprise Results', desc: 'We have helped enterprise clients achieve double and triple-digit organic traffic growth at scale.' },
];

export default function EnterpriseSEO() {
  return (
    <>
      <SEO
        title="Enterprise SEO Services"
        description="Scalable enterprise SEO for large companies and high-traffic websites. Technical SEO, content strategy, link building, international SEO, and dedicated teams."
        path="/enterprise-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(entFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Enterprise SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-950 sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Enterprise SEO Services Built for <span className="text-gradient">Scale and Growth</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 reveal reveal-delay-2">
                When your website has millions of pages, hundreds of locations, and multiple stakeholders, standard SEO does not work. You need <strong>enterprise SEO services</strong> designed for complexity and scale. Our <strong>enterprise SEO agency</strong> provides technical SEO, content strategy, link building, international SEO, and dedicated teams to drive organic growth for <strong>large businesses</strong>.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Enterprise SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/425135/pexels-photo-425135.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Low-angle view of modern corporate skyscraper building representing enterprise SEO services for large businesses"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ENTERPRISE SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">What Is Enterprise SEO?</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                <strong>Enterprise SEO</strong> is search engine optimization designed for large organizations with complex websites, high traffic volumes, and multiple stakeholders. It addresses challenges that standard SEO cannot handle: managing millions of pages, coordinating SEO across departments, implementing technical fixes at scale, and maintaining performance across international markets.
              </p>
              <p>
                <strong>Corporate SEO</strong> is not just about keywords and backlinks. It is about building systems and processes that scale. When a single template change can affect 100,000 pages, you need a different approach. When your content team publishes 500 articles per month, you need workflows and automation. When you operate in 15 countries, you need <strong>international enterprise SEO</strong> with hreflang, localized content, and country-specific strategies.
              </p>
              <p>
                <strong>Large website SEO</strong> requires specialized tools and expertise. We use enterprise crawlers to analyze millions of pages, automation to monitor performance at scale, and dedicated teams to coordinate SEO across your organization. The goal is not just to rank. It is to build a sustainable organic search engine that drives revenue at corporate scale.
              </p>
              <p>
                Whether you are a Fortune 500 company, a high-growth SaaS platform, or a global eCommerce brand, <strong>SEO for large businesses</strong> ensures your website performs at its best across every page, every location, and every market you serve.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5466250/pexels-photo-5466250.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Statistics displayed on a monitor representing enterprise SEO data analysis and large website analytics"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY ENTERPRISE SEO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8204311/pexels-photo-8204311.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Computer monitor with stock exchange and business growth figures representing why enterprise SEO matters for corporate growth"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Enterprise SEO Matters</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                For large companies, organic search is often the single largest driver of revenue and growth. A 10% increase in organic traffic for a company with millions of monthly visitors translates to significant revenue. Here is why <strong>technical enterprise SEO</strong> matters:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Massive revenue impact</strong> — even small percentage improvements in organic traffic drive significant revenue at enterprise scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Building2 className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Complexity at scale</strong> — managing SEO across millions of pages requires specialized tools, processes, and expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Globe className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Global competition</strong> — enterprise companies compete against other well-resourced organizations in every market</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Users className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Organizational alignment</strong> — SEO must be coordinated across IT, content, marketing, and product teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Award className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Brand authority</strong> — ranking at the top for industry terms reinforces market leadership and brand trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><ShieldCheck className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Risk mitigation</strong> — without proper enterprise SEO, algorithm updates and technical issues can cause catastrophic traffic loss</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ENTERPRISE SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our Enterprise SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            A complete enterprise SEO service covering every aspect of organic search at scale. From technical SEO to content strategy, link building, and international expansion, we handle it all.
          </p>
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

      {/* ENTERPRISE TECHNICAL SEO DEEP DIVE */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Enterprise Technical SEO</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  <strong>Technical enterprise SEO</strong> is the foundation of organic search performance for large websites. When your site has millions of pages, a single technical issue can affect a huge portion of your search visibility. We use enterprise crawlers to analyze your entire site and identify systemic problems.
                </p>
                <p>
                  We optimize crawl budget so Googlebot focuses on your most important pages. We fix JavaScript rendering issues that prevent content from being indexed. We implement structured data at template level so millions of pages get schema markup automatically. We optimize Core Web Vitals across your entire site.
                </p>
                <p>
                  We handle site migrations, URL restructuring, canonical tag strategy, pagination, faceted navigation, and international hreflang implementation. For <strong>large website SEO</strong>, we use automation to monitor and fix issues at scale, ensuring your technical SEO foundation stays solid as your site grows.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5408005/pexels-photo-5408005.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Server racks in data center representing enterprise technical SEO infrastructure and large website optimization"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE CONTENT STRATEGY DEEP DIVE */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7688432/pexels-photo-7688432.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Strategy documents on a desk representing enterprise content strategy and large-scale content planning"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Enterprise Content Strategy</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Content at enterprise scale is not about writing more articles. It is about building systems that produce high-quality, SEO-optimized content consistently across thousands of pages. We develop <strong>enterprise content strategy</strong> that aligns with your business goals and scales with your organization.
              </p>
              <p>
                We build topic clusters that establish authority in your industry. We create content templates that ensure SEO best practices are followed automatically. We develop editorial calendars that coordinate content production across your team. We use data to identify content gaps and opportunities at scale.
              </p>
              <p>
                We also handle content audits, consolidation, and pruning. For large websites, removing or improving low-quality content can have a bigger impact than creating new content. We use automation to identify thin content, duplicate content, and content cannibalization, then provide clear recommendations for each page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE LINK BUILDING DEEP DIVE */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Enterprise Link Building</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  <strong>Enterprise link building</strong> requires a fundamentally different approach than small-scale link building. When your website already has authority, you need high-quality links from top-tier publications, industry authorities, and relevant domains that move the needle at scale.
                </p>
                <p>
                  We use digital PR to earn links from major publications and news outlets. We build partnerships with industry associations and complementary brands. We create linkable assets like research reports, data studies, and interactive tools that naturally attract authority links. We do not do spammy outreach or low-quality directory submissions.
                </p>
                <p>
                  We also audit your existing backlink profile to identify and disavow toxic links that could harm your rankings. For enterprise sites with millions of backlinks, this requires specialized tools and expertise. We ensure your link profile is clean, authoritative, and continuously growing.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Structured cabling system with network cables representing enterprise link building and digital authority connections"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL ENTERPRISE SEO DEEP DIVE */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/586104/pexels-photo-586104.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Colleagues working in modern office with world map on screen representing international enterprise SEO and global business operations"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">International Enterprise SEO</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                <strong>International enterprise SEO</strong> is about ranking in multiple countries and languages at corporate scale. We implement hreflang tags across millions of pages, develop multi-language content strategies, and build country-specific link profiles that signal local authority to Google.
              </p>
              <p>
                We conduct country-specific keyword research for each market, accounting for local search behavior, language nuances, and regional competition. We create localized landing pages that target local keywords and convert international visitors. We optimize URL structures for international targeting.
              </p>
              <p>
                We also manage multi-location SEO for businesses with hundreds or thousands of physical locations. We create local landing pages, optimize Google Business Profiles for each location, build local citations, and manage reviews. Whether you operate in 5 countries or 50, we ensure your site ranks in every market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SEO TEAM */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/32441078/pexels-photo-32441078.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional business meeting near large window representing dedicated enterprise SEO team and corporate collaboration"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="eyebrow">Your Team</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Dedicated SEO Team</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Enterprise SEO is too complex for one person. That is why we assign a dedicated team to your account. Your team works exclusively on your campaign and is available for regular strategy calls, reporting, and ad-hoc requests.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Users className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>SEO Strategist</strong> — leads your campaign, develops strategy, and coordinates the team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Code2 className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Technical SEO Specialist</strong> — handles crawl analysis, site architecture, and technical implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><PenLine className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Content Strategist</strong> — develops content strategy, editorial calendars, and content optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Link2 className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Link Building Specialist</strong> — manages digital PR, outreach, and authority link building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><BarChart3 className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Project Manager</strong> — coordinates timelines, reporting, and cross-team communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">Who We Help</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            We have managed enterprise SEO for companies across every major industry. Each sector has unique search challenges, competitive landscapes, and compliance requirements.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7926209/pexels-photo-7926209.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Coworkers in diverse working attires representing the range of enterprise industries served by Rank Flow Agency"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white p-6 text-center hover:bg-slate-50 transition-colors">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-600 transition-transform group-hover:scale-110">
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-950">{ind.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-600">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENTERPRISE SEO PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Enterprise SEO <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              A proven 6-step process designed for enterprise scale. Every step is built to handle complexity, coordinate across teams, and drive compounding organic growth.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* WHY CHOOSE RANK FLOW */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">Why Us</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Why Choose Rank Flow <span className="text-gradient">Agency</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            We are an <strong>enterprise SEO agency</strong> that understands the unique challenges of large-scale organic search. We do not treat your website like a small business. We build systems, processes, and strategies designed for enterprise growth.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <div key={w.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white p-7 hover:bg-slate-50 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-950">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center reveal reveal-delay-2">
          <button onClick={() => navigate('/contact/')} className="btn-glow">
            Get Free Enterprise SEO Audit <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* FAQS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl reveal reveal-delay-1">
              Enterprise SEO <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              Answers to the most common questions about enterprise SEO and how it drives organic growth for large organizations.
            </p>
          </div>
          <div className="mt-10">
            <FAQList faqs={entFaqs} />
          </div>
        </div>
      </section>
      <RelatedServices currentSlug="enterprise-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal">
                Ready to Scale Your Organic Search Performance?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600 reveal reveal-delay-1">
                Get a free enterprise SEO audit today. We will analyze your website architecture, technical SEO health, content strategy, and competitive landscape. Then we will show you exactly how to scale organic growth across your entire organization. No obligation, just a clear enterprise SEO roadmap.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Enterprise SEO Audit <ArrowRight className="h-4 w-4" />
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
