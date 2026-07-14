import { Check, ArrowRight, Search, TrendingUp, Zap, Gauge, Smartphone, Code2, Link2, BarChart3, Tag, FileText, Image as ImageIcon, Layout, ShoppingCart } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'E-commerce SEO Services', path: '/ecommerce-seo' },
];

const ecommerceFaqs = [
  { q: 'What is e-commerce SEO?', a: 'E-commerce SEO is the process of optimizing your online store to rank higher in search engine results. It includes product page optimization, category page SEO, technical fixes, schema markup, content creation, and link building — all designed to drive more organic traffic and increase online sales.' },
  { q: 'How long does it take to see results from e-commerce SEO?', a: 'Most online stores see initial improvements in 2-3 months with significant growth in 4-6 months. SEO is a long-term strategy, not a quick fix. The timeline depends on your industry competition, current website health, and the aggressiveness of your campaign.' },
  { q: 'Do you work with Shopify stores?', a: 'Yes. We have extensive experience with Shopify SEO, including product page optimization, collection page SEO, technical fixes, and speed optimization. We also work with WooCommerce, Magento, BigCommerce, and custom e-commerce platforms.' },
  { q: 'How much do e-commerce SEO services cost?', a: 'The cost depends on the size of your store, the number of products, the level of competition, and the scope of work. We offer flexible packages for stores of all sizes. Contact us for a free audit and custom quote — no obligation.' },
  { q: 'Can you optimize product pages for SEO?', a: 'Absolutely. Product page optimization is a core part of our e-commerce SEO service. We optimize product titles, descriptions, images, URLs, schema markup, and internal linking to help each product rank for its target keywords.' },
  { q: 'What is category page SEO and why does it matter?', a: 'Category page SEO optimizes your store\'s category and collection pages to rank for broad, high-volume keywords. Category pages often drive more traffic than individual product pages because they target keywords with higher search volume and commercial intent.' },
  { q: 'Do you offer link building for e-commerce stores?', a: 'Yes. We build white hat backlinks to your store through guest posting, blogger outreach, digital PR, and content marketing. Quality backlinks improve your domain authority and help your product and category pages rank higher.' },
  { q: 'Will SEO help me sell more products?', a: 'Yes. SEO drives targeted organic traffic — people actively searching for the products you sell. More qualified traffic means more product views, more add-to-cart events, and ultimately more sales. SEO also improves user experience, which boosts conversion rates.' },
  { q: 'Do you provide reporting and analytics?', a: 'Yes. We provide monthly reports covering organic traffic, keyword rankings, conversion rates, and revenue attribution. You always know exactly how your SEO campaign is performing and what impact it is having on your bottom line.' },
  { q: 'Can you help with a new e-commerce store?', a: 'Yes. We work with new stores to build a strong SEO foundation from day one. This includes keyword research, site structure planning, technical setup, schema implementation, and content strategy. Starting with SEO early gives you a significant competitive advantage.' },
];

const services = [
  { icon: Search, title: 'Store SEO Audit', desc: 'A complete analysis of your online store\'s SEO health — technical issues, content gaps, keyword opportunities, and competitor benchmarking.' },
  { icon: Search, title: 'Keyword Research', desc: 'We find the keywords your customers actually search — product keywords, category keywords, and long-tail buying keywords with commercial intent.' },
  { icon: Tag, title: 'Product Page Optimization', desc: 'We optimize every product page — titles, descriptions, images, URLs, and schema markup — to rank for its target keyword and convert visitors.' },
  { icon: Layout, title: 'Category Page SEO', desc: 'We optimize category and collection pages to rank for high-volume keywords that drive traffic to multiple products at once.' },
  { icon: Code2, title: 'Technical SEO', desc: 'We fix crawl errors, indexing issues, site architecture, canonical tags, and XML sitemaps so Google can find and rank every product.' },
  { icon: Zap, title: 'Site Speed Optimization', desc: 'We optimize images, code, caching, and server response times so your store loads fast — improving both rankings and conversion rates.' },
  { icon: Gauge, title: 'Core Web Vitals', desc: 'We measure and optimize LCP, FID, and CLS scores to pass Google\'s page experience metrics and avoid ranking penalties.' },
  { icon: Code2, title: 'Schema Markup', desc: 'We implement product schema, review schema, and breadcrumb schema so your products appear with rich snippets in Google search results.' },
  { icon: Tag, title: 'Product Schema', desc: 'Product schema shows prices, availability, ratings, and reviews directly in search results — increasing click-through rates and traffic.' },
  { icon: Link2, title: 'Internal Linking', desc: 'We build a strategic internal linking structure that distributes authority across your store and helps Google understand product relationships.' },
  { icon: FileText, title: 'Blog SEO', desc: 'We create SEO-optimized blog content that attracts top-of-funnel traffic, educates customers, and builds topical authority for your store.' },
  { icon: FileText, title: 'Content Optimization', desc: 'We optimize existing content — product descriptions, category text, and blog posts — to target keywords and improve search visibility.' },
  { icon: ImageIcon, title: 'Image SEO', desc: 'We optimize product images with descriptive filenames, alt text, compression, and lazy loading for faster pages and image search traffic.' },
  { icon: Code2, title: 'URL Optimization', desc: 'We clean up product and category URLs to be short, descriptive, and keyword-rich — improving both SEO and user experience.' },
  { icon: Link2, title: 'Link Building', desc: 'We build white hat backlinks from authority websites to improve your store\'s domain authority and product page rankings.' },
  { icon: BarChart3, title: 'Monthly Reporting', desc: 'Transparent monthly reports covering traffic, rankings, conversions, and revenue — so you always know your SEO ROI.' },
];

const industries = [
  { name: 'Fashion', icon: '👗', desc: 'Fashion and apparel stores needing product and collection page SEO.' },
  { name: 'Beauty', icon: '💄', desc: 'Beauty and cosmetics brands looking to increase online sales.' },
  { name: 'Electronics', icon: '📱', desc: 'Electronics stores with large product catalogs and technical specs.' },
  { name: 'Furniture', icon: '🛋️', desc: 'Furniture stores needing category SEO and local search visibility.' },
  { name: 'Jewelry', icon: '💍', desc: 'Jewelry stores looking to rank for high-value product keywords.' },
  { name: 'Sports', icon: '⚽', desc: 'Sports and fitness equipment stores with seasonal demand.' },
  { name: 'Health', icon: '💊', desc: 'Health and wellness stores needing trust-building content SEO.' },
  { name: 'Home Decor', icon: '🖼️', desc: 'Home decor stores with visual products needing image SEO.' },
  { name: 'Pet Stores', icon: '🐾', desc: 'Pet supply stores targeting passionate, high-intent shoppers.' },
  { name: 'Automotive', icon: '🚗', desc: 'Auto parts and accessories stores with complex catalogs.' },
];

const process = [
  { step: '01', title: 'Website Audit', desc: 'We perform a full SEO audit of your online store — technical health, content quality, keyword gaps, and competitor analysis.' },
  { step: '02', title: 'Keyword Research', desc: 'We identify high-value product and category keywords with search volume, commercial intent, and manageable competition.' },
  { step: '03', title: 'Competitor Analysis', desc: 'We analyze your top competitors\' SEO strategies — their keywords, backlinks, content, and technical performance — to find gaps.' },
  { step: '04', title: 'Technical SEO', desc: 'We fix crawl errors, indexing issues, site speed, Core Web Vitals, schema markup, and site architecture for optimal Google visibility.' },
  { step: '05', title: 'Content Optimization', desc: 'We optimize product descriptions, category content, and blog posts to target keywords and improve search rankings.' },
  { step: '06', title: 'Product SEO', desc: 'We optimize every product page — titles, descriptions, images, URLs, schema, and internal links — for maximum search visibility.' },
  { step: '07', title: 'Link Building', desc: 'We build white hat backlinks from authority websites to increase your store\'s domain authority and product page rankings.' },
  { step: '08', title: 'Monthly Reports', desc: 'We provide transparent monthly reports on traffic, rankings, conversions, and revenue — so you always know your ROI.' },
];

const whyChoose = [
  { title: 'Experienced eCommerce SEO Specialists', desc: 'Our team has years of experience optimizing online stores across Shopify, WooCommerce, Magento, and BigCommerce. We know what works for e-commerce.' },
  { title: 'White Hat SEO', desc: 'Every strategy follows Google\'s guidelines. No risky shortcuts, no black hat tactics. We build sustainable rankings that last for years.' },
  { title: 'Transparent Reporting', desc: 'You get clear, detailed monthly reports showing traffic, rankings, conversions, and revenue. No vanity metrics — just real business impact.' },
  { title: 'Proven Strategies', desc: 'Our e-commerce SEO strategies are tested across hundreds of stores. We know what drives traffic and sales for online retailers.' },
  { title: 'Affordable Packages', desc: 'We offer flexible SEO packages for stores of all sizes — from small Shopify shops to large multi-brand retailers. No hidden fees.' },
  { title: 'Long-Term Growth', desc: 'We focus on sustainable, long-term growth — not quick fixes. Our goal is to build a search presence that keeps driving sales for years.' },
];

export default function EcommerceSEO() {
  return (
    <>
      <SEO
        title="E-commerce SEO Services"
        description="Increase organic traffic and online sales with our e-commerce SEO services. Product page optimization, category SEO, and link building for all major platforms."
        path="/ecommerce-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(ecommerceFaqs)]}
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
              <span className="eyebrow mt-6 reveal">E-commerce SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                E-commerce SEO Services That Increase <span className="text-gradient">Organic Traffic & Online Sales</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                Your products deserve to be found. Our <strong>e-commerce SEO services</strong> optimize every product page, category page, and technical element so your store ranks higher on Google, attracts more qualified shoppers, and converts more visitors into paying customers.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Request Proposal
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="MacBook with miniature shopping cart and money representing e-commerce SEO services and online store growth"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS E-COMMERCE SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is E-commerce SEO?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>E-commerce SEO</strong> is the process of optimizing your online store to rank higher in search engine results pages. It is SEO built specifically for the unique structure of online stores — with hundreds or thousands of product pages, category pages, filters, and faceted navigation that all need to be crawlable, indexable, and optimized.
              </p>
              <p>
                Unlike traditional SEO, <strong>online store SEO</strong> requires a different approach. Every product page is a potential landing page. Every category page targets a broad keyword. Every image needs alt text. Every URL needs to be clean. And every page needs schema markup so Google understands exactly what you sell.
              </p>
              <p>
                A proper e-commerce SEO strategy covers <strong>product page SEO</strong>, <strong>category page SEO</strong>, <strong>technical SEO</strong>, content marketing, and link building. When done right, it creates a steady stream of free, targeted traffic — shoppers who are actively searching for the products you sell and are ready to buy.
              </p>
              <p>
                Whether you run a Shopify store, a WooCommerce shop, or a Magento marketplace, e-commerce SEO is the most cost-effective way to grow your online sales without relying entirely on paid ads.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6612276/pexels-photo-6612276.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person purchasing goods online on laptop representing e-commerce SEO and digital shopping experience"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY E-COMMERCE SEO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/20206391/pexels-photo-20206391.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Chart on laptop screen showing data graphs and trends representing why e-commerce SEO matters for sales growth"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why E-commerce SEO Matters</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Paid ads get expensive fast. Social media traffic is unpredictable. But <strong>organic traffic</strong> from Google is free, consistent, and highly targeted. Here is what e-commerce SEO delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><ShoppingCart className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More product sales</strong> — targeted traffic from shoppers actively searching for your products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More organic visitors</strong> — a steady stream of free traffic that grows month over month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Search className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Higher Google rankings</strong> — your products appear at the top when customers search for them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Smartphone className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better user experience</strong> — faster pages, cleaner navigation, and easier product discovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><BarChart3 className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Increased revenue</strong> — more qualified traffic means more add-to-cart events and completed purchases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Long-term growth</strong> — SEO compounds over time, delivering increasing returns for years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR E-COMMERCE SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our E-commerce SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A complete SEO service for online stores — from product page optimization to technical SEO, content, and link building. Everything your store needs to rank and sell.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Black digital tablet displaying web analytics dashboard representing comprehensive e-commerce SEO services and analysis"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT PAGE OPTIMIZATION (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Product Page Optimization</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Every product page is a potential landing page. When a shopper searches for a specific product, your page needs to appear — and once they click through, the page needs to convert. <strong>Product page SEO</strong> makes both happen.
                </p>
                <p>
                  We optimize every element: compelling, keyword-rich product titles. Unique, detailed product descriptions that sell. High-quality images with proper alt text. Clean, descriptive URLs. Product schema markup that shows prices, ratings, and availability in search results. And strategic internal linking that connects related products and categories.
                </p>
                <p>
                  The result: each product page ranks for its target keyword, attracts qualified traffic, and converts visitors into buyers. Whether you have 50 products or 5,000, every page gets optimized to perform.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7256060/pexels-photo-7256060.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Nude-color cosmetic products displayed representing product page optimization and e-commerce product photography"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SEO FOR E-COMMERCE (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="MacBook Pro on brown table representing technical SEO for e-commerce and website performance optimization"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Technical SEO for E-commerce</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                E-commerce sites are technically complex. With hundreds of product pages, faceted navigation, filter combinations, and pagination, it is easy for Google to get lost. <strong>Technical SEO</strong> ensures Google can crawl, understand, and index every important page.
              </p>
              <p>
                We fix crawl errors, optimize site architecture, implement proper canonical tags to avoid duplicate content, configure XML sitemaps, and manage robots directives. We optimize site speed and Core Web Vitals — critical for both rankings and conversion rates. And we implement product, review, and breadcrumb schema markup so your products appear with rich snippets.
              </p>
              <p>
                Whether you are on <strong>Shopify SEO</strong>, <strong>WooCommerce SEO</strong>, <strong>Magento SEO</strong>, or BigCommerce, we handle the technical details so your store performs at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">Who We Serve</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              We have optimized online stores across dozens of industries — each with unique products, search behavior, and competitive landscapes.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/37080676/pexels-photo-37080676.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern fashion store interior with clothing racks representing diverse e-commerce industries served by Rank Flow Agency"
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
        </div>
      </section>

      {/* OUR SEO PROCESS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our SEO <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A proven 8-step process that takes your online store from audit to sustained growth.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8518616/pexels-photo-8518616.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Man and woman working together using laptop representing the SEO process and strategy planning workflow"
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
      </section>

      {/* WHY CHOOSE RANK FLOW */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7698822/pexels-photo-7698822.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professionals collaborating in modern office representing why choose Rank Flow Agency for e-commerce SEO services"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="eyebrow">Why Us</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We are an <strong>eCommerce SEO agency</strong> that understands online retail. We do not just chase rankings — we focus on traffic, conversions, and revenue. Here is why online stores choose us:
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
                Get Free SEO Audit <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl reveal reveal-delay-1">
            E-commerce SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about e-commerce SEO and how it grows online stores.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={ecommerceFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="ecommerce-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Ready to Grow Your Online Store?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Request a free e-commerce SEO audit today. We will analyze your store, identify the issues keeping you from ranking, and show you exactly how to increase organic traffic and online sales. No obligation, just results.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Request Proposal
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
