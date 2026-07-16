import { Check, ArrowRight, Search, TrendingUp, Code2, Link2, FileText, Image as ImageIcon, Tag, Gauge, Smartphone, BarChart3, Target, Type, Layers, Award } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'On-Page SEO Services', path: '/on-page-seo' },
];

const onPageFaqs = [
  { q: 'What is on-page SEO?', a: 'On-page SEO is the process of optimizing elements directly on your website pages to improve search engine rankings. This includes title tags, meta descriptions, heading structure, content quality, keyword placement, URL structure, image alt text, internal linking, and schema markup. Unlike off-page SEO which focuses on backlinks, on-page SEO is entirely within your control.' },
  { q: 'How long does it take to see results from on-page SEO?', a: 'Most pages show ranking improvements within 2-4 weeks after optimization. Full results typically appear in 1-3 months as Google re-crawls and re-indexes your updated pages. The timeline depends on your website authority, competition level, and how frequently Google crawls your site.' },
  { q: 'What is the difference between on-page SEO and technical SEO?', a: 'On-page SEO focuses on optimizing individual page elements like content, titles, meta tags, and headings. Technical SEO focuses on backend factors like site speed, crawlability, indexing, Core Web Vitals, and site architecture. Both are essential and work together to improve your overall search rankings.' },
  { q: 'Do you optimize existing content or create new content?', a: 'We do both. Our on-page SEO service includes optimizing your existing pages to improve their rankings, as well as creating new SEO-optimized content when needed. We start by auditing your current content and recommending whether to optimize, rewrite, or create new pages.' },
  { q: 'How do you choose which keywords to target?', a: 'We conduct thorough keyword research using professional tools to find keywords with good search volume, manageable competition, and strong commercial intent. We consider your business goals, target audience, and current rankings to prioritize the keywords most likely to drive qualified traffic and conversions.' },
  { q: 'What are title tags and why do they matter?', a: 'Title tags are HTML elements that define the title of a web page. They appear as clickable headlines in search engine results and as browser tab titles. Title tags are one of the most important on-page SEO factors because they tell Google what your page is about and influence whether users click on your result.' },
  { q: 'What is schema markup and do I need it?', a: 'Schema markup is structured data code that helps search engines understand your page content better. It can enable rich snippets like star ratings, product prices, FAQ accordions, and breadcrumbs in search results. Schema markup improves click-through rates and helps Google display your pages more prominently.' },
  { q: 'Can on-page SEO help with featured snippets?', a: 'Yes. We specifically optimize content to target featured snippets, which are the answer boxes that appear at the top of Google search results. We structure content with clear headings, concise answers, lists, and tables that Google can easily extract for snippet displays.' },
  { q: 'Do you work with all website platforms?', a: 'Yes. We work with WordPress, Shopify, Wix, Squarespace, Webflow, custom HTML sites, and all major CMS platforms. The on-page SEO principles are the same across platforms, though implementation methods may vary slightly.' },
  { q: 'How much do on-page SEO services cost?', a: 'The cost depends on the number of pages to optimize, the complexity of your website, and the level of competition in your industry. We offer flexible packages for businesses of all sizes. Contact us for a free consultation and custom quote with no obligation.' },
];

const services = [
  { icon: Search, title: 'Keyword Research', desc: 'We find the keywords your customers search and map them to the right pages on your website for maximum ranking impact.' },
  { icon: Type, title: 'SEO Title Optimization', desc: 'We craft compelling, keyword-rich title tags that improve rankings and increase click-through rates from search results.' },
  { icon: FileText, title: 'Meta Description Optimization', desc: 'We write persuasive meta descriptions that drive more clicks from search results and accurately describe each page.' },
  { icon: Layers, title: 'Heading Structure (H1-H6)', desc: 'We organize your content with proper heading hierarchy so Google understands your page structure and key topics.' },
  { icon: Link2, title: 'URL Optimization', desc: 'We clean up URLs to be short, descriptive, and keyword-rich for better SEO and user experience.' },
  { icon: Link2, title: 'Internal Linking', desc: 'We build a strategic internal linking structure that distributes authority and helps Google discover all your pages.' },
  { icon: ImageIcon, title: 'Image SEO', desc: 'We optimize image filenames, alt text, compression, and lazy loading for faster pages and image search traffic.' },
  { icon: Tag, title: 'ALT Tags', desc: 'We write descriptive alt text for every image to improve accessibility and help Google understand your visual content.' },
  { icon: FileText, title: 'Content Optimization', desc: 'We optimize your content with natural keyword placement, better readability, and topical depth for higher rankings.' },
  { icon: Target, title: 'Keyword Placement', desc: 'We strategically place keywords in titles, headings, first paragraphs, and meta tags for maximum ranking signal.' },
  { icon: Code2, title: 'Schema Markup', desc: 'We implement structured data schema so Google understands your content and displays rich snippets in search results.' },
  { icon: TrendingUp, title: 'Featured Snippet Optimization', desc: 'We structure content to target featured snippets and position zero on Google for maximum visibility.' },
  { icon: Award, title: 'E-E-A-T Improvements', desc: 'We enhance Experience, Expertise, Authoritativeness, and Trustworthiness signals that Google uses to evaluate content quality.' },
  { icon: Gauge, title: 'Core Web Vitals Recommendations', desc: 'We provide specific recommendations to improve LCP, FID, and CLS scores for better page experience and rankings.' },
];

const industries = [
  { name: 'Small Businesses', icon: '💼', desc: 'Small business on-page SEO for local visibility and growth.' },
  { name: 'Local Businesses', icon: '📍', desc: 'Local business on-page SEO to rank in local search results.' },
  { name: 'Shopify Stores', icon: '🛍️', desc: 'Shopify store on-page SEO for product and collection pages.' },
  { name: 'WordPress Sites', icon: '📝', desc: 'WordPress on-page SEO for blogs and business websites.' },
  { name: 'Law Firms', icon: '⚖️', desc: 'Law firm on-page SEO for practice area and attorney pages.' },
  { name: 'Dentists', icon: '🦷', desc: 'Dental practice on-page SEO for service and location pages.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Restaurant on-page SEO for menu and location pages.' },
  { name: 'Roofers', icon: '🏠', desc: 'Roofing company on-page SEO for service area pages.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Plumbing business on-page SEO for emergency service pages.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Real estate on-page SEO for property and area pages.' },
  { name: 'eCommerce Stores', icon: '🛒', desc: 'eCommerce on-page SEO for product and category pages.' },
  { name: 'Startups', icon: '🚀', desc: 'Startup on-page SEO for landing pages and feature pages.' },
];

const process = [
  { step: '01', title: 'Website Audit', desc: 'We perform a full on-page SEO audit of every page, identifying issues with titles, meta, headings, content, and technical elements.' },
  { step: '02', title: 'Keyword Research', desc: 'We identify high-value keywords for each page based on search volume, competition, and commercial intent.' },
  { step: '03', title: 'Competitor Analysis', desc: 'We analyze your top competitors to understand what they rank for and find content gaps you can exploit.' },
  { step: '04', title: 'Technical SEO', desc: 'We fix technical issues that affect on-page SEO: site speed, Core Web Vitals, mobile responsiveness, and crawlability.' },
  { step: '05', title: 'Content Optimization', desc: 'We optimize every page element: titles, meta descriptions, headings, content, keyword placement, and readability.' },
  { step: '06', title: 'Product SEO', desc: 'For eCommerce sites, we optimize product and category pages with targeted keywords and schema markup.' },
  { step: '07', title: 'Link Building', desc: 'We build internal links to distribute authority and acquire external backlinks to boost page-level rankings.' },
  { step: '08', title: 'Monthly Reports', desc: 'We track ranking improvements, organic traffic growth, and conversions with transparent monthly reporting.' },
];

const whyChoose = [
  { title: 'Experienced On-Page SEO Specialists', desc: 'Our team has optimized hundreds of websites across dozens of industries. We know exactly which on-page elements move the needle and which are a waste of time.' },
  { title: 'White Hat SEO', desc: 'Every optimization follows Google Webmaster Guidelines. No keyword stuffing, no hidden text, no risky tactics. Just clean, effective on-page SEO.' },
  { title: 'Transparent Reporting', desc: 'You get clear monthly reports showing ranking improvements, traffic growth, and conversion changes. No vanity metrics, just real business impact.' },
  { title: 'Proven Strategies', desc: 'Our on-page SEO strategies are tested across hundreds of websites. We use data-driven approaches that consistently produce ranking improvements.' },
  { title: 'Affordable Packages', desc: 'We offer flexible on-page SEO packages for businesses of all sizes, from small local shops to large eCommerce stores. No hidden fees.' },
  { title: 'Long-Term Growth', desc: 'We focus on sustainable, long-term ranking growth, not quick fixes. Our on-page optimizations build a foundation that keeps delivering for years.' },
];

export default function OnPageSEO() {
  return (
    <>
      <SEO
        title="On-Page SEO Services"
        description="Improve your Google rankings with our on-page SEO services. Keyword research, title tags, meta descriptions, headings, internal linking, and schema markup."
        path="/on-page-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(onPageFaqs)]}
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
              <span className="eyebrow mt-6 reveal">On-Page SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-950 sm:text-5xl md:text-6xl reveal reveal-delay-1">
                On-Page SEO Services That Boost <span className="text-gradient">Rankings, Traffic & Conversions</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 reveal reveal-delay-2">
                Every element on your page affects your rankings. Our <strong>on-page SEO services</strong> optimize your titles, meta tags, headings, content, images, and schema markup so every page ranks higher, attracts more <strong>organic rankings</strong>, and converts more visitors into customers.
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
                  src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Close-up of HTML code on a computer monitor representing on-page SEO services and website optimization"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ON-PAGE SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">What Is On-Page SEO?</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                <strong>On-page SEO</strong> is the practice of optimizing elements directly on your website pages to improve their search engine rankings. Unlike off-page SEO, which focuses on backlinks and external signals, on-page SEO is entirely within your control. Every title tag, heading, image, and paragraph can be optimized to send the right signals to Google.
              </p>
              <p>
                When Google crawls your page, it looks at dozens of on-page elements to understand what your page is about and whether it deserves to rank. <strong>Title tags</strong> tell Google the main topic. <strong>Meta descriptions</strong> summarize the content. <strong>Headings</strong> structure the information. <strong>Content</strong> demonstrates expertise. <strong>Internal links</strong> connect related topics. And <strong>schema markup</strong> provides explicit context.
              </p>
              <p>
                Effective <strong>website optimization</strong> means making each of these elements work together. A well-optimized page has a keyword-rich title, a compelling meta description, a logical heading structure, high-quality content with natural keyword placement, descriptive image alt text, strategic internal links, and proper schema markup.
              </p>
              <p>
                When all these elements are aligned, Google understands exactly what your page is about, trusts its quality, and ranks it higher. That means more <strong>organic rankings</strong>, more traffic, and more conversions from every page on your site.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/14092457/pexels-photo-14092457.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Woman writing in a notebook with laptop and coffee representing on-page SEO content editing and page optimization"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY ON-PAGE SEO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7674633/pexels-photo-7674633.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Abstract data analytics visualization with growth charts representing why on-page SEO matters for rankings improvement"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why On-Page SEO Matters</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                You can build all the backlinks you want, but if your pages are not optimized, you will not rank. On-page SEO is the foundation of every successful SEO campaign. Here is what it delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Higher rankings</strong> — optimized title tags, headings, and content signal relevance to Google</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Search className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>More organic traffic</strong> — better optimization means more keywords ranking and more clicks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Target className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Higher conversions</strong> — compelling meta descriptions and content turn visitors into customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Smartphone className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Better user experience</strong> — clear headings, fast loading, and structured content keep visitors engaged</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><BarChart3 className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Featured snippets</strong> — properly structured content can win position zero on Google</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Award className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Stronger E-E-A-T</strong> — expertise, authority, and trust signals improve your site credibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ON-PAGE SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our On-Page SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            A complete on-page optimization service covering every element that affects your search rankings. From keyword research to schema markup, we optimize it all.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/35501997/pexels-photo-35501997.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sleek laptop showcasing data analytics and graphs representing comprehensive on-page SEO services and optimization tools"
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

      {/* KEYWORD RESEARCH (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Keyword Research</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Every great on-page SEO campaign starts with <strong>keyword research</strong>. Before we optimize a single title tag, we need to know exactly what your customers are searching for and which keywords will drive the most qualified traffic to your site.
                </p>
                <p>
                  We use professional keyword research tools to find keywords with good search volume, manageable competition, and strong commercial intent. We look at what your competitors rank for, identify content gaps, and map each keyword to the most relevant page on your website.
                </p>
                <p>
                  We do not just target high-volume keywords. We find the sweet spot: keywords that your customers actually search, that you have a realistic chance of ranking for, and that will drive actual business results. This research forms the foundation of every on-page optimization we make.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/38285024/pexels-photo-38285024.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Clean workspace with laptop and spiral notebook representing keyword research and search term analysis for on-page SEO"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT OPTIMIZATION (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1462226/pexels-photo-1462226.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person typing on laptop with notes and papers representing content optimization and text writing for on-page SEO"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Content Optimization</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Content is the heart of on-page SEO. Google ranks pages, not websites, and the quality of your page content determines whether it deserves to rank. Our <strong>SEO optimization</strong> service ensures every page has content that is both search-engine-friendly and genuinely useful to your visitors.
              </p>
              <p>
                We optimize content with natural keyword placement in the first paragraph, headings, and throughout the body. We improve readability with shorter sentences, clear structure, and engaging formatting. We add depth to thin content, remove duplicate content, and ensure every page comprehensively covers its topic.
              </p>
              <p>
                We also optimize for search intent, making sure your content matches what users are actually looking for when they type your target keyword. Whether it is informational, commercial, or transactional intent, your content needs to give Google exactly what it expects to see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SEO / SCHEMA (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Schema Markup &amp; Technical SEO</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  <strong>Schema markup</strong> is structured data code that helps search engines understand exactly what your page is about. It tells Google whether your page is an article, a product, a recipe, a FAQ, or a local business. This enables rich snippets in search results like star ratings, prices, and FAQ accordions.
                </p>
                <p>
                  We implement the right schema for each page type: Product schema for eCommerce, Article schema for blog posts, LocalBusiness schema for local businesses, FAQ schema for question pages, and BreadcrumbList schema for navigation. Each schema type unlocks different rich snippet opportunities.
                </p>
                <p>
                  Combined with our <strong>technical SEO</strong> recommendations, we ensure your pages are not just optimized for keywords but for the technical signals Google uses to evaluate page quality. Core Web Vitals, mobile responsiveness, and page speed all affect on-page rankings.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/14553730/pexels-photo-14553730.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Detailed view of HTML code on a computer screen representing schema markup and technical SEO code editing"
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
          <span className="eyebrow reveal">Who We Serve</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            We have optimized on-page SEO for websites across dozens of industries. Each industry has unique search behavior, competition, and optimization requirements.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/14851464/pexels-photo-14851464.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Group of diverse business people in a meeting representing different industries served by on-page SEO services"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white p-6 text-center hover:bg-slate-50 transition-colors">
                <div className="text-4xl">{ind.icon}</div>
                <h3 className="mt-4 text-base font-semibold text-ink-950">{ind.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-600">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR SEO PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our SEO <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              A proven 8-step process that takes your website from audit to optimized pages ranking higher and converting better.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5361087/pexels-photo-5361087.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business team in a strategy meeting with charts representing the on-page SEO process and workflow"
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
        </div>
      </section>

      {/* WHY CHOOSE RANK FLOW */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/32716845/pexels-photo-32716845.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional business team in a modern office environment representing why choose Rank Flow Agency for on-page SEO services"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              We are an <strong>on-page SEO agency</strong> that focuses on what actually moves rankings. We do not chase algorithm loopholes or use risky tactics. We optimize every on-page element the right way, building a foundation for sustainable organic growth.
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
              Get Free SEO Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl reveal reveal-delay-1">
            On-Page SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            Answers to the most common questions about on-page SEO and how it improves your website rankings.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={onPageFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="on-page-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal">
                Ready to Optimize Every Page on Your Website?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600 reveal reveal-delay-1">
                Request a free on-page SEO audit today. We will analyze your pages, identify the issues keeping you from ranking, and show you exactly what to fix to improve your rankings, traffic, and conversions. No obligation, just results.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
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
