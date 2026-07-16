import { Search, Check, ArrowRight, FileText, Layout, MapPin, ShoppingBag, FileBarChart, RefreshCw, Bot, ClipboardList, TrendingUp, Users, Star, BookOpen } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'SEO Content Writing Services', path: '/content-writing' },
];

const contentFaqs = [
  { q: 'What is SEO content writing?', a: 'SEO content writing is the process of creating content that ranks on Google and converts readers into customers. It combines keyword research, search intent matching, engaging writing, and on-page optimization so that every piece of content drives organic traffic and generates leads for your business.' },
  { q: 'How is SEO content different from regular content?', a: 'Regular content is written for readers. SEO content is written for both readers and search engines. It targets specific keywords, answers search intent, follows a structured format Google can understand, and includes optimized titles, headings, meta descriptions, and internal links — all while remaining natural and valuable to the reader.' },
  { q: 'Do you write all content by hand?', a: 'Yes. Every piece of content we deliver is written by experienced human writers. We never spin content or publish raw AI-generated text. When AI tools are used for research or outlining, a human writer always writes, edits, and polishes the final draft to ensure originality, accuracy, and a natural voice.' },
  { q: 'How long should my blog posts be for SEO?', a: 'It depends on the topic and competition. Most SEO blog posts perform best at 1,500–2,500 words, while pillar content and comprehensive guides can run 3,000+ words. We determine the ideal length by analyzing what already ranks on Google for your target keywords.' },
  { q: 'How often should I publish new content?', a: 'Consistency matters more than volume. For most businesses, publishing 2–4 high-quality blog posts per month is enough to build momentum. We help you create a content calendar that fits your budget and goals so you can publish consistently without burning out.' },
  { q: 'Do you offer content for specific industries?', a: 'Yes. We have writers experienced in dental, legal, real estate, home services, SaaS, eCommerce, restaurants, and more. Each writer understands the terminology, regulations, and customer concerns specific to your industry so the content is accurate and authoritative.' },
  { q: 'Can you optimize my existing content?', a: 'Absolutely. Our content refresh and optimization service analyzes your existing pages, identifies keyword gaps, updates outdated information, improves readability, and re-optimizes for current search intent. Refreshed content often sees ranking improvements within weeks.' },
  { q: 'How long until I see results from SEO content?', a: 'Most clients see initial traffic gains within 2–3 months and significant growth in 4–6 months. SEO content compounds over time — the more high-quality content you publish, the faster your traffic grows. We track every piece and report on its performance monthly.' },
  { q: 'Do you handle content strategy and planning?', a: 'Yes. We do not just write random blog posts. We build a full content strategy based on keyword research, competitor analysis, and your business goals. You get a monthly editorial calendar with topics, target keywords, and content types mapped to your sales funnel.' },
  { q: 'How much do SEO content writing services cost?', a: 'Our pricing depends on content type, length, and volume. We offer flexible packages for businesses of all sizes — from single blog posts to full monthly content programmes. Contact us for a free consultation and custom quote with no obligation.' },
];

const services = [
  { icon: BookOpen, title: 'Blog Writing', desc: 'Engaging, SEO-optimized blog posts that target your customers\' search queries, answer their questions, and drive organic traffic to your website month after month.' },
  { icon: FileText, title: 'Website Content', desc: 'Clear, persuasive website copy that communicates your value proposition, builds trust, and guides visitors toward becoming customers.' },
  { icon: Layout, title: 'Landing Pages', desc: 'High-converting landing page copy designed for a single goal — whether that is capturing leads, driving sign-ups, or selling a product. Every word earns its place.' },
  { icon: FileText, title: 'Service Pages', desc: 'Detailed service pages that explain what you do, how you help, and why visitors should choose you — optimized for the keywords your customers search.' },
  { icon: MapPin, title: 'Location Pages', desc: 'Geo-targeted location pages that rank in local search for every city or neighbourhood you serve, driving foot traffic and local leads.' },
  { icon: ShoppingBag, title: 'Product Descriptions', desc: 'Compelling product descriptions that highlight benefits, answer buyer questions, and include the keywords shoppers use to find your products.' },
  { icon: Layout, title: 'Category Pages', desc: 'SEO-optimized category page content that helps your eCommerce store rank for broad product terms and guides shoppers to the right products.' },
  { icon: FileText, title: 'SEO Articles', desc: 'Authoritative articles and thought-leadership pieces that build your brand\'s expertise, earn backlinks, and rank for competitive industry keywords.' },
  { icon: FileBarChart, title: 'Pillar Content', desc: 'Comprehensive, long-form pillar pages that cover a topic exhaustively, rank for dozens of related keywords, and serve as the hub for your content cluster.' },
  { icon: RefreshCw, title: 'Content Refresh & Optimization', desc: 'We audit your existing content, update outdated information, fill keyword gaps, and re-optimize for current search intent to boost rankings without writing from scratch.' },
  { icon: Bot, title: 'AI Content Editing & Humanization', desc: 'Have AI-generated drafts? We edit and humanize them — adding original insights, natural voice, factual accuracy, and SEO optimization so they read like a human wrote them.' },
  { icon: ClipboardList, title: 'Content Strategy', desc: 'A full content roadmap built on keyword research, competitor analysis, and your business goals — so every piece of content has a purpose and a measurable target.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Dental content that educates patients and fills your appointment calendar.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Mouth-watering menu descriptions and local content that brings in diners.' },
  { name: 'Roofers', icon: '🏠', desc: 'Authoritative roofing content that ranks locally and generates service calls.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Emergency-focused plumbing content that captures urgent local searches.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Accurate, authoritative legal content that builds trust and wins clients.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Property listings and neighbourhood guides that attract buyers and sellers.' },
  { name: 'Shopify Stores', icon: '🏷️', desc: 'Product descriptions and blog content that drive Shopify store traffic.' },
  { name: 'eCommerce', icon: '🛒', desc: 'Category pages and product content that rank and convert shoppers.' },
  { name: 'SaaS', icon: '💻', desc: 'Technical content that explains your software and ranks for feature keywords.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Professional content that helps your small business compete with bigger brands.' },
];

const process = [
  { step: '01', title: 'Business Research', desc: 'We learn your business, audience, tone of voice, and goals. Every piece of content starts with understanding what makes your business unique.' },
  { step: '02', title: 'Keyword Research', desc: 'We identify the keywords your customers actually search — including search volume, difficulty, and intent — so every piece targets terms with real traffic potential.' },
  { step: '03', title: 'Competitor Analysis', desc: 'We analyze what already ranks on Google for your target keywords to understand the content length, structure, and depth needed to outrank them.' },
  { step: '04', title: 'Content Outline', desc: 'We create a detailed outline with headings, key points, target keywords, and internal linking opportunities before a single sentence is written.' },
  { step: '05', title: 'Writing', desc: 'An experienced writer crafts your content following the outline — engaging, original, and written in your brand\'s voice with real expertise.' },
  { step: '06', title: 'SEO Optimization', desc: 'We optimize titles, meta descriptions, headings, keyword density, image alt text, and internal links to maximize search visibility.' },
  { step: '07', title: 'Editing & Proofreading', desc: 'Every piece goes through a rigorous editing process — checking grammar, readability, accuracy, flow, and SEO compliance before it reaches you.' },
  { step: '08', title: 'Final Delivery', desc: 'You receive the finished content in your preferred format, ready to publish. We include a content brief with target keywords and publishing recommendations.' },
];

const whyChoose = [
  { title: 'Experienced SEO Writers', desc: 'Our writers have years of experience creating content that ranks. They understand search intent, keyword placement, and how to write for both Google and humans.' },
  { title: 'Human-Written Content', desc: 'Every word is written by a person. No spinning, no raw AI output. Just original, thoughtful content that reflects real expertise and reads naturally.' },
  { title: 'SEO Optimized', desc: 'Every piece is optimized for target keywords, search intent, readability, and on-page SEO factors. We do not just write — we write to rank.' },
  { title: 'Original Content', desc: 'Plagiarism is never tolerated. Every piece is original and passes Copyscape. You own the content outright with full rights to edit and publish.' },
  { title: 'Reader-Friendly Writing', desc: 'We write for humans first. Clear, engaging, and easy to read — because content that bores readers also bores Google. Great content does both.' },
  { title: 'Fast Delivery', desc: 'We respect your deadlines. Most blog posts are delivered within 3–5 business days, with larger projects scoped to your timeline. Rush options available.' },
];

export default function ContentWriting() {
  return (
    <>
      <SEO
        title="SEO Content Writing Services"
        description="Drive organic traffic with our SEO content writing services. Human-written blog posts, website copy, landing pages, and content strategy. Free consultation."
        path="/content-writing"
        schema={[breadcrumbSchema(crumbs), faqSchema(contentFaqs)]}
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
              <span className="eyebrow mt-6 reveal">SEO Content Writing Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-950 sm:text-5xl md:text-6xl reveal reveal-delay-1">
                SEO Content Writing Services That Drive Traffic & <span className="text-gradient">Generate Leads</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 reveal reveal-delay-2">
                Content is how you get found on Google. But not just any content — it needs to be well-researched, beautifully written, and optimized for the keywords your customers actually search. Our SEO content writing services produce content that ranks, engages, and converts.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8036326/pexels-photo-8036326.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional writer typing on laptop in cozy library representing SEO content writing services"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SEO CONTENT WRITING */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">What Is SEO Content Writing?</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                SEO content writing is the art of creating content that serves two masters: your readers and Google. It is content written to answer the questions your customers are searching for, structured in a way that Google can understand and rank, and crafted in a voice that keeps readers engaged from the first sentence to the last.
              </p>
              <p>
                Here is how it works. When someone types a question into Google — "how to choose a roofing contractor" or "best teeth whitening options" — Google looks for the most relevant, helpful, and authoritative content to show them. <strong>SEO content writing</strong> makes sure that content is yours.
              </p>
              <p>
                It starts with <strong>keyword research</strong> — finding the exact phrases people search for. Then it requires matching <strong>search intent</strong> — are they looking for information, a service, or a product? Finally, it demands great writing — because Google rewards content that keeps readers on the page, answers their questions, and compels them to take action.
              </p>
              <p>
                The result is <strong>organic traffic</strong> — visitors who find you through Google, not paid ads. And because they searched for what you offer, they are already qualified leads when they arrive.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7983364/pexels-photo-7983364.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Close-up of hands typing on laptop representing SEO content creation and digital writing"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIGH-QUALITY CONTENT MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5951356/pexels-photo-5951356.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Office desk with laptop, coffee, and notebook representing productivity and content engagement"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why High-Quality Content Matters</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Google processes over 8 billion searches per day. Every one of those searches is an opportunity — but only if your content shows up. Here is what high-quality SEO content delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Higher Google rankings</strong> — well-optimized content ranks for target keywords and stays there</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Search className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>More organic traffic</strong> — every ranking piece becomes a permanent traffic source</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Users className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Better user engagement</strong> — content that answers questions keeps visitors on your site longer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Check className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>More leads</strong> — educated visitors who trust your expertise become qualified leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><ArrowRight className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Increased conversions</strong> — persuasive content guides readers toward taking action</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Star className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Stronger brand authority</strong> — consistent, valuable content positions you as the expert in your field</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SEO CONTENT WRITING SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Write</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our SEO Content Writing <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            From blog posts to pillar pages, we write every type of content your business needs to attract, engage, and convert your audience.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8036340/pexels-photo-8036340.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Laptop surrounded by books and scripts representing variety of SEO content writing services"
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

      {/* BLOG WRITING (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Blog Writing</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Your blog is one of the most powerful tools for driving organic traffic. Every well-written, SEO-optimized blog post is a permanent asset that brings visitors to your site for months and years after it is published.
                </p>
                <p>
                  We write blog posts that do three things: rank on Google for keywords your customers search, provide genuine value that keeps readers engaged, and naturally guide readers toward your products or services. No fluff, no keyword stuffing — just useful, well-crafted content.
                </p>
                <p>
                  Each post is based on <strong>keyword research</strong>, structured with clear headings, optimized for featured snippets where possible, and includes internal links to your service pages. We handle everything from topic ideation to the final polished draft.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5238140/pexels-photo-5238140.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Woman writing in notebook with laptop and coffee representing blog writing services"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE CONTENT & COPYWRITING (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/26093502/pexels-photo-26093502.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Woman writing notes at desk with laptop representing website copywriting and content creation"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Website Content & Copywriting</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Your website content is your digital salesperson. It works 24/7, greeting every visitor, answering their questions, and persuading them to take the next step. If the copy is weak, visitors leave. If it is strong, they convert.
              </p>
 <p>
                We write <strong>website copy</strong> that is clear, compelling, and conversion-focused. From your homepage to your about page, service pages to product descriptions, every word is crafted to communicate your value, build trust, and move visitors toward becoming customers.
              </p>
              <p>
                Our <strong>SEO copywriting</strong> combines persuasive writing with on-page optimization. We target the right keywords, structure content for readability, and include clear calls-to-action that turn readers into leads. The result: a website that ranks well and converts even better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT STRATEGY & OPTIMIZATION (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Content Strategy & Optimization</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Writing without a strategy is like driving without a map. You might move, but you will not get where you want to go. Our <strong>content strategy</strong> service builds the roadmap that turns random blog posts into a compounding traffic engine.
                </p>
                <p>
                  We start with keyword research and competitor analysis to identify content gaps and opportunities. Then we build a monthly editorial calendar with topics, target keywords, content types, and funnel stages mapped out. Every piece of content has a purpose — whether it is attracting top-of-funnel traffic, nurturing leads, or driving conversions.
                </p>
                <p>
                  We also provide <strong>content optimization</strong> for your existing pages. We audit what you already have, update outdated information, fill keyword gaps, improve readability, and re-optimize for current search intent. Refreshed content often sees ranking improvements within weeks — without writing from scratch.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/15635251/pexels-photo-15635251.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Journal on wooden desk with pen representing content strategy and editorial planning"
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
          <span className="eyebrow reveal">Who We Write For</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            We have writers experienced in your industry\'s terminology, regulations, and customer concerns — so your content is always accurate and authoritative.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8355406/pexels-photo-8355406.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Diverse group of business professionals reviewing documents representing industries served by Rank Flow Agency"
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

      {/* OUR CONTENT WRITING PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Content Writing <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              A proven 8-step framework that turns research and keywords into content that ranks and converts.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8052171/pexels-photo-8052171.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person editing papers with red pen representing the content writing and proofreading process"
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
                src="https://images.pexels.com/photos/7434019/pexels-photo-7434019.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Diverse business professionals celebrating success representing quality content writing results from Rank Flow Agency"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              We are not a content mill. We are a team of experienced SEO writers who care about quality, accuracy, and results. Here is why businesses choose us:
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
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl reveal reveal-delay-1">
            Content Writing <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            Answers to the most common questions about SEO content writing and how it helps your business grow.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={contentFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="content-writing" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal">
                Ready to Turn Content Into Your Best Marketing Channel?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600 reveal reveal-delay-1">
                Get a free content strategy consultation today. We will review your existing content, identify keyword opportunities, and show you exactly what to write to attract more traffic and generate more leads. No obligation, just clarity.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Talk to a Writer
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
