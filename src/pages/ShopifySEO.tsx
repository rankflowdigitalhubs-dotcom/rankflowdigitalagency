import { Search, Check, ArrowRight, TrendingUp, ShoppingCart, Tag, Gauge, Link2, Image as ImageIcon, Code2, FileText, BarChart3, ShoppingBag, Globe } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Shopify SEO Services', path: '/shopify-seo' },
];

const shopifyFaqs = [
  { q: 'What is Shopify SEO?', a: 'Shopify SEO is the process of optimizing your Shopify store to rank higher on Google and other search engines. It includes keyword research, product page optimization, collection page optimization, technical SEO, site speed improvements, content creation, and link building — all designed to increase organic traffic and sales for your Shopify store.' },
  { q: 'How long does it take to see results from Shopify SEO?', a: 'Most Shopify stores see initial traffic improvements within 2–3 months and significant growth in 4–6 months. SEO is a long-term strategy that compounds over time. The speed of results depends on your niche competition, current website health, and the aggressiveness of your SEO campaign.' },
  { q: 'Do you work with all types of Shopify stores?', a: 'Yes. We work with fashion stores, beauty brands, electronics, home decor, jewelry, health and wellness, pet stores, furniture, sports and fitness, and general eCommerce stores. Our Shopify SEO strategies are tailored to your specific industry and product types.' },
  { q: 'Can you optimize my existing Shopify store or do I need a new one?', a: 'We can optimize your existing Shopify store. In most cases, we do not need to rebuild your store — we improve its SEO foundation, product pages, collection pages, technical performance, and content. If a migration or redesign is needed, we handle the SEO preservation so you do not lose rankings.' },
  { q: 'Will Shopify SEO increase my sales?', a: 'Yes. Shopify SEO drives more qualified organic traffic to your store — visitors who are actively searching for your products. More targeted traffic combined with optimized product pages and improved conversion rates leads to more sales. Our goal is not just traffic but revenue growth.' },
  { q: 'What is the difference between Shopify SEO and Shopify marketing?', a: 'Shopify SEO focuses on earning organic (free) traffic from Google search results. Shopify marketing typically refers to paid advertising like Google Ads, Facebook Ads, and social media marketing. Both are important — SEO provides long-term sustainable traffic while paid ads provide immediate traffic. We recommend a combined approach for best results.' },
  { q: 'Do you offer Shopify migration SEO services?', a: 'Yes. If you are migrating to Shopify from another platform (or vice versa), we ensure your SEO is preserved during the migration. We handle URL redirects, meta tag transfers, content migration, and schema markup so you do not lose your existing Google rankings during the transition.' },
  { q: 'How much do Shopify SEO services cost?', a: 'Our pricing depends on your store size, product count, niche competition, and goals. We offer flexible monthly packages for stores of all sizes — from small boutiques to large catalogs. Contact us for a free Shopify SEO audit and custom quote with no obligation.' },
  { q: 'Do you provide reports for Shopify SEO performance?', a: 'Yes. You receive detailed monthly reports covering organic traffic growth, keyword rankings, conversion rates, sales attributed to organic search, backlink growth, and technical health. Full transparency so you always know how your SEO investment is performing.' },
  { q: 'Can you help with Shopify blog SEO?', a: 'Absolutely. Blog content is one of the most effective ways to drive organic traffic to your Shopify store. We handle blog strategy, keyword research, content creation, internal linking, and optimization so your blog posts attract visitors and funnel them to your product pages.' },
];

const services = [
  { icon: Search, title: 'Shopify SEO Audit', desc: 'A comprehensive audit of your store\'s SEO health — identifying technical issues, keyword gaps, content opportunities, and quick wins that can improve rankings immediately.' },
  { icon: Search, title: 'Keyword Research', desc: 'We find the keywords your customers actually search — including product keywords, long-tail terms, and informational queries — mapped to buying intent for maximum ROI.' },
  { icon: Tag, title: 'Product Page Optimization', desc: 'We optimize titles, descriptions, headings, image alt text, and schema for every product page — so Google understands what you sell and ranks it for the right searches.' },
  { icon: Tag, title: 'Collection Page Optimization', desc: 'We optimize your collection and category pages for broad product keywords, improving their ability to rank and drive traffic to your individual products.' },
  { icon: Code2, title: 'Technical Shopify SEO', desc: 'We fix crawlability, indexation, URL structure, canonical tags, robots.txt, and sitemap issues that prevent Google from properly indexing your store.' },
  { icon: Gauge, title: 'Site Speed Optimization', desc: 'We improve your store\'s loading speed by optimizing images, reducing code, leveraging caching, and eliminating render-blocking resources that slow down your site.' },
  { icon: Gauge, title: 'Core Web Vitals Optimization', desc: 'We optimize LCP, FID, and CLS metrics — the specific performance metrics Google uses as ranking factors — to improve both rankings and user experience.' },
  { icon: Link2, title: 'Internal Linking', desc: 'We build a strategic internal linking structure that passes authority between pages, helps Google understand your site architecture, and guides visitors to your products.' },
  { icon: ImageIcon, title: 'Image SEO', desc: 'We optimize your product images with descriptive filenames, alt text, compression, and lazy loading — improving image search rankings and page speed.' },
  { icon: Code2, title: 'Schema Markup', desc: 'We add product, review, price, and availability schema markup so Google displays rich snippets in search results — increasing click-through rates.' },
  { icon: FileText, title: 'Blog SEO', desc: 'We create SEO-optimized blog content that attracts top-of-funnel traffic, answers customer questions, and funnels readers to your product pages.' },
  { icon: FileText, title: 'Content Optimization', desc: 'We optimize existing content, product descriptions, and collection page copy to target additional keywords and improve relevance signals for Google.' },
  { icon: Globe, title: 'Shopify Migration SEO', desc: 'Migrating to or from Shopify? We preserve your SEO during migration with proper redirects, meta tag transfers, and content mapping so you do not lose rankings.' },
  { icon: Link2, title: 'Link Building', desc: 'We build high-quality, niche-relevant backlinks to your store through guest posting, blogger outreach, and digital PR — increasing your domain authority and rankings.' },
  { icon: BarChart3, title: 'Monthly SEO Reporting', desc: 'You receive detailed monthly reports covering traffic, rankings, conversions, sales, and technical health — with clear recommendations for continuous improvement.' },
];

const industries = [
  { name: 'Fashion Stores', icon: '👗', desc: 'Fashion and apparel SEO that ranks product and collection pages.' },
  { name: 'Beauty Brands', icon: '💄', desc: 'Beauty and cosmetics SEO for product visibility and reviews.' },
  { name: 'Electronics', icon: '📱', desc: 'Electronics store SEO for competitive product categories.' },
  { name: 'Home Decor', icon: '🛋️', desc: 'Home decor and furniture SEO for visual product searches.' },
  { name: 'Jewelry', icon: '💎', desc: 'Jewelry store SEO for high-value product rankings.' },
  { name: 'Health & Wellness', icon: '🌿', desc: 'Health and wellness SEO with trust-building content.' },
  { name: 'Pet Stores', icon: '🐾', desc: 'Pet supply store SEO for product and category pages.' },
  { name: 'Furniture', icon: '🪑', desc: 'Furniture store SEO for large catalog optimization.' },
  { name: 'Sports & Fitness', icon: '⚽', desc: 'Sports and fitness SEO for seasonal product demand.' },
  { name: 'General eCommerce', icon: '🛒', desc: 'Custom SEO for any type of online store or product catalog.' },
];

const process = [
  { step: '01', title: 'SEO Audit', desc: 'We perform a comprehensive audit of your Shopify store — analyzing technical health, keyword rankings, content gaps, competitor performance, and conversion opportunities.' },
  { step: '02', title: 'Competitor Analysis', desc: 'We analyze your top-ranking competitors to understand their SEO strategy, keyword targeting, backlink profile, and content approach — then build a plan to outrank them.' },
  { step: '03', title: 'Keyword Research', desc: 'We identify the keywords your customers search at every stage of the buying journey — from product searches to informational queries that attract new visitors.' },
  { step: '04', title: 'Technical Optimization', desc: 'We fix technical SEO issues — site speed, Core Web Vitals, crawlability, indexation, canonical tags, URL structure, and schema markup — to build a solid SEO foundation.' },
  { step: '05', title: 'Product SEO', desc: 'We optimize every product page and collection page — titles, descriptions, headings, images, schema, and internal links — to rank for your most valuable product keywords.' },
  { step: '06', title: 'Content Strategy', desc: 'We create a content plan that includes blog posts, buying guides, and resource pages designed to attract organic traffic and funnel visitors to your products.' },
  { step: '07', title: 'Link Building', desc: 'We build high-quality, niche-relevant backlinks to your store through guest posting, blogger outreach, and digital PR — increasing your domain authority and rankings.' },
  { step: '08', title: 'Performance Reporting', desc: 'You receive detailed monthly reports covering organic traffic, keyword rankings, conversion rates, sales from organic search, and technical health — with clear next steps.' },
];

const whyChoose = [
  { title: 'Shopify SEO Specialists', desc: 'We specialize in Shopify SEO. We know the platform inside out — its limitations, its strengths, and the specific optimization techniques that work for Shopify stores.' },
  { title: 'White Hat SEO', desc: 'We follow Google\'s guidelines strictly. No risky shortcuts, no black hat tactics. Every optimization is safe, sustainable, and designed to produce lasting results.' },
  { title: 'eCommerce Experience', desc: 'We have optimized Shopify stores across dozens of industries. We understand eCommerce SEO — product pages, collection pages, schema markup, and conversion optimization.' },
  { title: 'Transparent Reports', desc: 'You get detailed monthly reports with clear metrics — traffic, rankings, conversions, sales, and technical health. Nothing hidden, nothing vague.' },
  { title: 'Long-Term Growth Strategy', desc: 'We do not chase quick wins. We build a sustainable SEO foundation that compounds over time, producing traffic and sales growth that lasts for years.' },
  { title: 'Dedicated Support', desc: 'You get a dedicated SEO strategist who knows your store, your goals, and your industry. Direct communication, quick responses, and proactive recommendations.' },
];

export default function ShopifySEO() {
  return (
    <>
      <SEO
        title="Shopify SEO Services"
        description="Increase traffic, rankings, and sales with our Shopify SEO services. Product page optimization, technical SEO, content strategy, and link building for Shopify."
        path="/shopify-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(shopifyFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Shopify SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-950 sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Shopify SEO Services That Increase Traffic, Rankings & <span className="text-gradient">Sales</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 reveal reveal-delay-2">
                Your Shopify store has great products. But if customers cannot find you on Google, you are leaving sales on the table. Our <strong>Shopify SEO services</strong> optimize your store to rank higher, attract more qualified shoppers, and turn organic traffic into revenue.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Shopify SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/29502362/pexels-photo-29502362.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="E-commerce shopping on laptop and smartphone representing Shopify SEO services and online store optimization"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SHOPIFY SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">What Is Shopify SEO?</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Shopify SEO is the process of optimizing your Shopify store so it ranks higher on Google and other search engines. It is about making sure that when someone searches for the products you sell, your store shows up — not your competitors.
              </p>
              <p>
                Shopify is a fantastic platform for building an online store. But out of the box, it is not fully optimized for SEO. Product pages need better titles and descriptions. Collection pages need unique content. Site speed needs improvement. Images need alt text. And your store needs quality backlinks to build authority.
              </p>
              <p>
                <strong>Shopify store SEO</strong> covers all of this and more. It combines <strong>eCommerce SEO</strong> best practices with Shopify-specific optimization techniques — from fixing duplicate content issues caused by variant URLs to implementing product schema markup for rich snippets.
              </p>
              <p>
                The goal is simple: when a shopper searches for a product you sell, your store appears at the top of Google, they click through, and they buy. That is what a <strong>Shopify SEO expert</strong> delivers.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="E-commerce website on computer screen representing Shopify store management and SEO dashboard"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY SHOPIFY SEO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7948055/pexels-photo-7948055.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Magnifying glass over financial trend graphs representing Shopify SEO growth and sales analytics"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Shopify SEO Matters</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Paid ads get expensive. Social media algorithms change. But organic search traffic is free, consistent, and compounds over time. Here is what Shopify SEO delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>More organic traffic</strong> — higher rankings bring a steady stream of shoppers who are actively searching for your products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Search className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Higher Google rankings</strong> — optimized product and collection pages rank for the keywords your customers search</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><ShoppingBag className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>More product visibility</strong> — your products appear in Google Shopping, image search, and organic results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><ShoppingCart className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Increased sales</strong> — more qualified traffic combined with optimized product pages means more conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Check className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Better conversion rates</strong> — SEO improves user experience, site speed, and content quality — all of which boost conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Long-term business growth</strong> — unlike paid ads, organic traffic compounds over time and keeps delivering value for years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SHOPIFY SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our Shopify SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            A complete Shopify optimization programme covering every aspect of eCommerce SEO — from technical foundations to content strategy and link building.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6483592/pexels-photo-6483592.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Laptop with digital marketing strategy on screen representing comprehensive Shopify SEO services and analytics dashboard"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white p-7 hover:bg-slate-50 transition-colors">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-600 transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
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
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Product Page Optimization</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Your product pages are where shoppers become customers. But they are also where Google decides whether to rank you or your competitors. <strong>Product page SEO</strong> is about making sure both Google and shoppers understand exactly what you sell.
                </p>
                <p>
                  We optimize every element of your product pages — SEO titles, meta descriptions, headings, product descriptions, image alt text, URL structure, and schema markup. We write product descriptions that include target keywords naturally while persuading shoppers to buy.
                </p>
                <p>
                  We also implement product schema markup so Google can display rich snippets — star ratings, prices, and availability — directly in search results. Rich snippets increase click-through rates and make your listings stand out from competitors.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Hands interacting with shopping website on laptop screen representing product page optimization for Shopify SEO"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SHOPIFY SEO (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7970815/pexels-photo-7970815.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Laptop with marketing strategy documents representing technical Shopify SEO and site performance optimization"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Technical Shopify SEO</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Technical SEO is the foundation of your store\'s search performance. If Google cannot crawl, index, and understand your store, nothing else matters — no matter how great your content or products are.
              </p>
              <p>
                We fix the technical issues that hold Shopify stores back: duplicate content from variant URLs, canonical tag errors, crawl budget waste, indexation problems, broken links, and redirect chains. We optimize your robots.txt, XML sitemap, and site architecture.
              </p>
              <p>
                We also tackle <strong>site speed optimization</strong> and <strong>Core Web Vitals</strong> — the specific performance metrics Google uses as ranking factors. Faster stores rank higher and convert better. We optimize images, reduce code bloat, leverage caching, and eliminate render-blocking resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOPIFY MIGRATION SEO (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Shopify Migration SEO</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Migrating to Shopify from another platform — WooCommerce, Magento, BigCommerce, or a custom site? Or moving from Shopify to another platform? Migration is risky for SEO. Done wrong, you can lose years of Google rankings overnight.
                </p>
                <p>
                  Our <strong>Shopify migration SEO</strong> service ensures your search rankings survive the transition. We map every old URL to its new equivalent, implement 301 redirects, transfer meta tags and schema markup, preserve content, and submit updated sitemaps to Google.
                </p>
                <p>
                  We monitor rankings and traffic closely before, during, and after migration — catching and fixing any issues before they impact your business. Your SEO investment is protected every step of the way.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/15845375/pexels-photo-15845375.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Packages in warehouse with worker representing Shopify migration SEO and platform transition logistics"
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
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Help</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            We have optimized Shopify stores across dozens of industries — each with its own SEO challenges, keyword landscape, and customer search behavior.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8981523/pexels-photo-8981523.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Variety of beauty products displayed representing diverse eCommerce industries and Shopify store types"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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

      {/* OUR SHOPIFY SEO PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Shopify SEO <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              A proven 8-step framework that takes your Shopify store from SEO audit to sustained traffic and sales growth.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/927576/pexels-photo-927576.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sticky notes and pencil on notebook with SEO strategy planner representing the Shopify SEO audit process"
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
                src="https://images.pexels.com/photos/7434022/pexels-photo-7434022.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business team celebrating success with papers in air representing Shopify SEO results from Rank Flow Agency"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              We are not a generic SEO agency. We are a <strong>Shopify SEO company</strong> that specializes in eCommerce. We know the platform, the competition, and the strategies that drive Shopify store growth.
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
              Get Free Shopify SEO Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl reveal reveal-delay-1">
            Shopify SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            Answers to the most common questions about Shopify SEO and how it helps your online store grow.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={shopifyFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="shopify-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal">
                Ready to Turn Google Traffic Into Shopify Sales?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600 reveal reveal-delay-1">
                Get a free Shopify SEO audit today. We will analyze your store, identify ranking opportunities, and show you exactly what to fix to increase traffic and sales. No obligation, just clarity.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Shopify SEO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Talk to a Shopify Expert
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
