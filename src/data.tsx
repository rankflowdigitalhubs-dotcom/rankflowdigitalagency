import {
  Search, MapPin, Wrench, FileText, PenLine, Palette, Code2, LineChart,
  type LucideIcon,
} from 'lucide-react';
import { Link } from './router';

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  deliverables: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    short: 'Full-spectrum SEO that lifts rankings, traffic, and revenue.',
    icon: Search,
    tagline: 'Rank higher. Convert better.',
    description:
      'Our flagship SEO program combines technical, on-page, off-page, and content into one compounding growth engine. We target the keywords your customers actually search, fix what blocks Google from ranking you, and build authority that lasts.',
    deliverables: [
      'Keyword opportunity map & intent clustering',
      'Technical site health audit',
      'On-page optimization (titles, schema, internal links)',
      'Authority link building campaign',
      'Monthly performance dashboard',
    ],
    process: [
      { title: 'Discovery', desc: 'Learn your business, goals, and competitive landscape.' },
      { title: 'Audit', desc: 'Full technical and content audit with prioritized fixes.' },
      { title: 'Strategy', desc: 'Keyword map, content plan, and link roadmap.' },
      { title: 'Execution', desc: 'On-page, technical, content, and link building sprints.' },
      { title: 'Reporting', desc: 'Transparent monthly reports tied to revenue metrics.' },
    ],
    faqs: [
      { q: 'How long until I see results?', a: 'Most clients see meaningful movement in 90 days and significant gains in 4–6 months, depending on competition and starting point.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No reputable agency guarantees a specific position. We guarantee a rigorous process, transparent reporting, and real revenue growth.' },
      { q: 'Is your SEO white-hat?', a: 'Yes. We follow Google’s guidelines strictly — no link farms, no PBNs, no risky shortcuts that could get you penalized.' },
    ],
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    short: 'Dominate the map pack and win customers near you.',
    icon: MapPin,
    tagline: 'Be the first name they find nearby.',
    description:
      'Local SEO puts your business in front of nearby customers searching right now. We optimize your Google Business Profile, build local citations, manage reviews, and create location pages that rank in the map pack.',
    deliverables: [
      'Google Business Profile optimization',
      'Local citation building & cleanup',
      'Review generation strategy',
      'Location landing pages',
      'Local rank tracking',
    ],
    process: [
      { title: 'Audit', desc: 'Assess GBP, citations, and local competition.' },
      { title: 'Optimize', desc: 'Complete and refine your Google Business Profile.' },
      { title: 'Citations', desc: 'Build consistent NAP across directories.' },
      { title: 'Reviews', desc: 'Automate review requests and responses.' },
      { title: 'Track', desc: 'Monitor map pack rankings by location.' },
    ],
    faqs: [
      { q: 'How many locations can you manage?', a: 'From a single location to hundreds — we scale citation building and GBP management to match your footprint.' },
      { q: 'Do you help with reviews?', a: 'Yes. We set up compliant review request flows and respond to reviews on your behalf with your approval.' },
    ],
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO',
    short: 'Fix the crawl, speed, and structure issues holding you back.',
    icon: Wrench,
    tagline: 'A site Google can crawl, render, and love.',
    description:
      'Technical SEO is the foundation everything else stands on. We audit and fix crawlability, indexation, Core Web Vitals, structured data, site architecture, and JavaScript rendering so search engines can fully access and rank your content.',
    deliverables: [
      'Full crawl & indexation audit',
      'Core Web Vitals optimization',
      'Schema markup implementation',
      'Site architecture & URL strategy',
      'JavaScript rendering review',
    ],
    process: [
      { title: 'Crawl', desc: 'Deep crawl with enterprise-grade tools.' },
      { title: 'Diagnose', desc: 'Prioritize issues by impact and effort.' },
      { title: 'Fix', desc: 'Implement fixes with your dev team or directly.' },
      { title: 'Validate', desc: 'Re-crawl and confirm resolution.' },
      { title: 'Monitor', desc: 'Ongoing alerts for regressions.' },
    ],
    faqs: [
      { q: 'Do you work with our developers?', a: 'Absolutely. We deliver clear, prioritized specs your team can implement, or we can make changes directly with access.' },
      { q: 'Can you help with Core Web Vitals?', a: 'Yes — LCP, INP, and CLS diagnostics plus concrete fixes for scripts, images, fonts, and layout.' },
    ],
  },
  {
    slug: 'guest-posting',
    title: 'Guest Posting on High DA/DR Sites',
    short: 'Authority backlinks from real, relevant websites.',
    icon: FileText,
    tagline: 'Links that move rankings — not spam.',
    description:
      'We secure genuine editorial backlinks on high-DA/DR websites in your niche. Every placement is hand-pitched, contextually relevant, and published on a real site with real traffic — never a link farm or PBN.',
    deliverables: [
      'Prospect list of niche-relevant sites',
      'Hand-crafted pitch emails',
      'Original, high-quality content',
      'Contextual do-follow links',
      'Full placement report',
    ],
    process: [
      { title: 'Research', desc: 'Identify high-authority, relevant sites.' },
      { title: 'Pitch', desc: 'Craft personalized outreach to editors.' },
      { title: 'Write', desc: 'Create original content that fits the host site.' },
      { title: 'Publish', desc: 'Secure placement with a contextual link.' },
      { title: 'Report', desc: 'Deliver live URLs and metrics.' },
    ],
    faqs: [
      { q: 'Are these links safe?', a: 'Yes. We only pursue editorial links on real sites with real traffic — fully compliant with Google’s guidelines.' },
      { q: 'What DA/DR can you target?', a: 'We typically secure placements from DA 30+ up to DA 90+, depending on your budget and niche.' },
    ],
  },
  {
    slug: 'content-writing',
    title: 'Content Writing',
    short: 'SEO-driven content that ranks and converts.',
    icon: PenLine,
    tagline: 'Words that work for algorithms and humans.',
    description:
      'Our content team blends SEO research with editorial craft. We produce blog posts, landing pages, pillar guides, and product copy that rank for high-intent keywords and persuade real readers to act.',
    deliverables: [
      'Keyword & topic research',
      'SEO-optimized blog posts',
      'Pillar & cluster content',
      'Landing page copy',
      'Editorial review & proofing',
    ],
    process: [
      { title: 'Research', desc: 'Find topics with intent and volume.' },
      { title: 'Outline', desc: 'Structure built to rank and convert.' },
      { title: 'Write', desc: 'Expert writers with SEO training.' },
      { title: 'Optimize', desc: 'On-page tuning and internal links.' },
      { title: 'Publish', desc: 'Ready-to-publish final draft.' },
    ],
    faqs: [
      { q: 'Who writes the content?', a: 'A vetted team of writers with subject-matter expertise, trained in SEO best practices and edited by senior reviewers.' },
      { q: 'Do you handle publishing?', a: 'We can deliver drafts or publish directly to your CMS with formatting and schema in place.' },
    ],
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    short: 'Distinctive brand marks built for every screen.',
    icon: Palette,
    tagline: 'A mark worth remembering.',
    description:
      'We design timeless logos and complete brand identity systems that look sharp from a favicon to a billboard. You get multiple concepts, unlimited revisions, and full source files.',
    deliverables: [
      '3 unique logo concepts',
      'Unlimited revisions',
      'Full color, mono, and inverse variants',
      'Source vector files (AI, SVG, PDF)',
      'Brand color & typography guide',
    ],
    process: [
      { title: 'Brief', desc: 'Understand your brand and audience.' },
      { title: 'Concepts', desc: 'Three distinct design directions.' },
      { title: 'Refine', desc: 'Unlimited revisions on chosen direction.' },
      { title: 'Deliver', desc: 'All formats and a brand guide.' },
    ],
    faqs: [
      { q: 'How many concepts do I get?', a: 'Three unique concepts, then unlimited revisions on your favorite.' },
      { q: 'Do I own the files?', a: 'Yes — full ownership and all source files are delivered on completion.' },
    ],
  },
  {
    slug: 'web-design',
    title: 'Website Design & Development',
    short: 'Fast, beautiful sites engineered to convert.',
    icon: Code2,
    tagline: 'Design that earns attention. Code that earns revenue.',
    description:
      'We design and build conversion-focused websites that load fast, rank well, and turn visitors into customers. From landing pages to full marketing sites, every build is responsive, accessible, and SEO-ready.',
    deliverables: [
      'UX wireframes & visual design',
      'Responsive, accessible front-end',
      'CMS integration',
      'On-page SEO & schema setup',
      'Performance optimization',
    ],
    process: [
      { title: 'Strategy', desc: 'Goals, audience, and conversion paths.' },
      { title: 'Design', desc: 'Wireframes then high-fidelity mockups.' },
      { title: 'Build', desc: 'Fast, semantic, responsive front-end.' },
      { title: 'Launch', desc: 'QA, SEO setup, and go-live.' },
      { title: 'Support', desc: 'Ongoing maintenance and updates.' },
    ],
    faqs: [
      { q: 'What platforms do you build on?', a: 'We build on modern stacks — React/Vite, Next.js, Webflow, and headless CMS — chosen to fit your team.' },
      { q: 'Will my site be SEO-ready?', a: 'Yes. Every build includes semantic HTML, schema, fast load times, and on-page SEO fundamentals.' },
    ],
  },
  {
    slug: 'monthly-seo-management',
    title: 'Monthly SEO Management',
    short: 'An ongoing SEO partner invested in your growth.',
    icon: LineChart,
    tagline: 'SEO that compounds month over month.',
    description:
      'SEO is never one-and-done. Our monthly management retainer keeps your campaign moving with continuous optimization, fresh content, link building, technical monitoring, and transparent reporting tied to revenue.',
    deliverables: [
      'Dedicated SEO strategist',
      'Monthly content production',
      'Ongoing link building',
      'Technical monitoring & fixes',
      'Monthly strategy & reporting call',
    ],
    process: [
      { title: 'Plan', desc: 'Monthly sprint plan aligned to goals.' },
      { title: 'Execute', desc: 'Content, links, and technical work.' },
      { title: 'Report', desc: 'Transparent monthly performance review.' },
      { title: 'Refine', desc: 'Adjust strategy based on data.' },
    ],
    faqs: [
      { q: 'Is there a long contract?', a: 'We work on month-to-month or quarterly agreements — no long lock-ins. Stay because you’re growing.' },
      { q: 'What reporting do I get?', a: 'A live dashboard plus a monthly call covering rankings, traffic, leads, and revenue — not vanity metrics.' },
    ],
  },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const stats = [
  { value: 320, suffix: '+', label: 'Projects Completed' },
  { value: 8400, suffix: '+', label: 'Keywords Ranked' },
  { value: 412, suffix: '%', label: 'Avg. Traffic Growth' },
  { value: 180, suffix: '+', label: 'Happy Clients' },
];

export const whyChooseUs = [
  { title: '10+ Years Experience', desc: 'A decade of ranking businesses across the most competitive niches on the web.' },
  { title: 'Full Transparency', desc: 'Live dashboards and plain-English reports. You always know what we’re doing and why.' },
  { title: '100% White Hat', desc: 'Strict adherence to Google’s guidelines. No shortcuts, no risk to your domain.' },
  { title: 'Fast Communication', desc: 'Same-day replies from a dedicated strategist who knows your business.' },
  { title: 'Affordable Pricing', desc: 'Flexible plans for startups to enterprises — no bloated retainers.' },
  { title: 'Results Driven', desc: 'We measure success by your revenue, not vanity metrics.' },
];

export const processSteps = [
  { title: 'Website Audit', desc: 'Deep technical and content audit to find every opportunity and blocker.' },
  { title: 'Research', desc: 'Keyword, competitor, and audience research to map the path to growth.' },
  { title: 'SEO Strategy', desc: 'A documented plan with priorities, timelines, and revenue projections.' },
  { title: 'Optimization', desc: 'On-page and technical fixes implemented with precision.' },
  { title: 'Content', desc: 'SEO-driven content that ranks and converts your visitors.' },
  { title: 'Link Building', desc: 'Authority backlinks from real, relevant websites.' },
  { title: 'Reporting', desc: 'Transparent monthly reports tied to traffic, leads, and revenue.' },
];

export const testimonials = [
  { name: 'Sarah Mitchell', role: 'CEO, BrightPath Law', quote: 'Rank Flow took our firm from page 3 to the top of local search in five months. We’ve doubled intake calls.', rating: 5, img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'David Chen', role: 'Founder, Nimbus SaaS', quote: 'The most data-driven agency we’ve worked with. Organic signups grew 280% in two quarters.', rating: 5, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Dr. Amara Okafor', role: 'Director, Lakeside Dental', quote: 'New patient bookings from Google have never been higher. The team is responsive and genuinely cares.', rating: 5, img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Marcus Reed', role: 'CMO, UrbanNest Realty', quote: 'They rebuilt our site and our rankings at the same time. Leads are up 3x and the site is gorgeous.', rating: 5, img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Priya Nair', role: 'Owner, Bloom Boutique', quote: 'As a small e-commerce store, we didn’t think SEO could compete. We were wrong — sales are up 190%.', rating: 5, img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'James Whitfield', role: 'Marketing Director, Apex White Label', quote: 'We white-label their SEO for 20+ clients. Reliable, transparent, and our clients keep growing.', rating: 5, img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

export const homeFaqs = [
  { q: 'What makes Rank Flow Digital different from other SEO agencies?', a: 'We tie every effort to revenue, not vanity metrics. You get a dedicated strategist, live dashboards, and a white-hat process refined over a decade across hundreds of campaigns.' },
  { q: 'How soon will I see SEO results?', a: 'Most clients see meaningful ranking movement within 90 days and significant traffic gains in 4–6 months. Local SEO often moves faster; competitive national terms take longer.' },
  { q: 'Do you work with my industry?', a: 'We specialize in local businesses, startups, SaaS, e-commerce, law firms, dentists, medical clinics, real estate, and white-label agency partners — but we’ve ranked businesses in nearly every vertical.' },
  { q: 'Are your link building practices safe?', a: 'Yes. We only build editorial links on real, relevant websites with genuine traffic. No PBNs, no link farms, no spam — fully compliant with Google’s guidelines.' },
  { q: 'Do you require long-term contracts?', a: 'No long lock-ins. We work on month-to-month or quarterly agreements. We’d rather earn your retention with results than a contract clause.' },
  { q: 'Can you redesign my website while doing SEO?', a: 'Absolutely. Our web team builds fast, accessible, SEO-ready sites — so you can redesign and rank at the same time without losing traffic.' },
  { q: 'What reporting will I receive?', a: 'A live dashboard plus a monthly call covering rankings, traffic, leads, and revenue. Everything is in plain English with clear next steps.' },
  { q: 'Do you offer a free SEO audit?', a: 'Yes. Every prospect gets a complimentary audit covering technical health, keyword opportunities, and quick wins — no obligation.' },
  { q: 'Can you manage SEO for multiple locations?', a: 'From a single storefront to hundreds of locations, we scale local SEO with citation building, GBP management, and location pages.' },
  { q: 'How do I get started?', a: 'Book a free consultation or request an audit. We’ll review your site, map opportunities, and send a proposal within 48 hours.' },
];

export const caseStudies = [
  { slug: 'brightpath-law', client: 'BrightPath Law', industry: 'Law Firm', result: '+212% organic leads in 5 months', img: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800', summary: 'A regional law firm needed more intake calls from local search. We rebuilt their local SEO and content engine.' },
  { slug: 'nimbus-saas', client: 'Nimbus SaaS', industry: 'SaaS', result: '+280% organic signups in 2 quarters', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', summary: 'A B2B SaaS platform wanted to reduce paid acquisition costs with compounding organic growth.' },
  { slug: 'lakeside-dental', client: 'Lakeside Dental', industry: 'Dentist', result: '3x new patient bookings', img: 'https://images.pexels.com/photos/3779605/pexels-photo-3779605.jpeg?auto=compress&cs=tinysrgb&w=800', summary: 'A dental practice needed to fill chairs. We optimized their Google Business Profile and local presence.' },
  { slug: 'urbannest-realty', client: 'UrbanNest Realty', industry: 'Real Estate', result: '3x leads + new website', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800', summary: 'A real estate brokerage wanted a site that ranks and converts. We delivered both in one engagement.' },
  { slug: 'bloom-boutique', client: 'Bloom Boutique', industry: 'E-commerce', result: '+190% online sales', img: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800', summary: 'A small e-commerce store competing with giants. We found niche keywords and built category authority.' },
  { slug: 'apex-white-label', client: 'Apex Agency (White Label)', industry: 'Marketing Agency', result: '20+ clients managed, 95% retention', img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800', summary: 'A full-service agency needed a reliable SEO partner to white-label to their clients.' },
];

export const portfolioItems = [
  { title: 'BrightPath Law — Local SEO', category: 'Local SEO', img: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Law' },
  { title: 'Nimbus SaaS — Technical SEO', category: 'Technical SEO', img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'SaaS' },
  { title: 'Lakeside Dental — GBP', category: 'Local SEO', img: 'https://images.pexels.com/photos/3779605/pexels-photo-3779605.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Medical' },
  { title: 'UrbanNest — Web + SEO', category: 'Web Design', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Real Estate' },
  { title: 'Bloom Boutique — E-commerce', category: 'SEO', img: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'E-commerce' },
  { title: 'Apex Agency — White Label', category: 'SEO', img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Agency' },
  { title: 'Veridian Health — Content', category: 'Content', img: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Medical' },
  { title: 'Northwind Coffee — Local', category: 'Local SEO', img: 'https://images.pexels.com/photos/185521/pexels-photo-185521.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Local' },
  { title: 'Stratus Finance — Logo', category: 'Logo Design', img: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Finance' },
];

export const blogPosts = [
  { slug: 'seo-strategy-that-actually-works', title: 'The SEO Strategy That Actually Works in 2026: A Complete Blueprint', category: 'SEO Strategy', date: 'Jul 7, 2026', readTime: '13 min', excerpt: 'Most SEO strategies are lists of tactics. This is a complete, repeatable blueprint — from audit to authority — that compounds into real revenue.', img: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { slug: 'local-seo-guide-2026', title: 'The Complete Local SEO Guide for 2026', category: 'Local SEO', date: 'Jul 2, 2026', readTime: '12 min', excerpt: 'Everything you need to dominate the map pack, from Google Business Profile to citations and reviews.', img: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'core-web-vitals', title: 'Core Web Vitals: The 2026 Technical SEO Checklist', category: 'Technical SEO', date: 'Jun 24, 2026', readTime: '9 min', excerpt: 'LCP, INP, and CLS explained — with the exact fixes that move the needle on rankings.', img: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'link-building-white-hat', title: 'White-Hat Link Building That Actually Works', category: 'Link Building', date: 'Jun 15, 2026', readTime: '11 min', excerpt: 'How we build authority backlinks on real sites without risking a single penalty.', img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'saas-seo-playbook', title: 'The SaaS SEO Playbook: From Trial to Revenue', category: 'SaaS', date: 'Jun 6, 2026', readTime: '14 min', excerpt: 'A repeatable framework for turning organic search into a compounding SaaS growth channel.', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'content-that-converts', title: 'Writing Content That Ranks AND Converts', category: 'Content', date: 'May 28, 2026', readTime: '8 min', excerpt: 'The balance between SEO optimization and persuasion — with templates you can use today.', img: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { slug: 'ecommerce-category-pages', title: 'How to Rank E-commerce Category Pages', category: 'E-commerce', date: 'May 19, 2026', readTime: '10 min', excerpt: 'Category pages are your biggest SEO asset. Here’s how to optimize them for revenue.', img: 'https://images.pexels.com/photos/421965/pexels-photo-421965.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export type ArticleSection = { id: string; heading: string; body: React.ReactNode };

export const articleContent: Record<string, { sections: ArticleSection[]; faqs: { q: string; a: string }[] }> = {
  'seo-strategy-that-actually-works': {
    sections: [
      {
        id: 'introduction',
        heading: 'Why Most SEO Strategies Fail',
        body: (
          <>
            <p>Most SEO strategies fail for one simple reason: they are lists of tactics, not strategies. A checklist of "fix title tags, build links, write content" is not a strategy — it is a to-do list. Real strategy answers three questions first: <strong>where are we now, where do we need to be, and what is the most efficient path between the two?</strong></p>
            <p>At Rank Flow Digital, we have run over 320 SEO campaigns across nearly every industry — from local dentists to multi-location SaaS platforms. The blueprint below is the exact framework we use, refined over a decade. It is not a list of tricks. It is a repeatable system that compounds into real revenue.</p>
          </>
        ),
      },
      {
        id: 'step-1-audit',
        heading: 'Step 1: The Foundation — A Real SEO Audit',
        body: (
          <>
            <p>Before you optimize anything, you need to know exactly where you stand. A proper audit covers four pillars: <strong>technical health, content gaps, backlink profile, and competitive position</strong>. Skip any one and your strategy is built on assumptions.</p>
            <h3>What a real audit includes</h3>
            <ul>
              <li><strong>Technical crawl:</strong> indexation, broken links, redirect chains, Core Web Vitals, and JavaScript rendering issues.</li>
              <li><strong>Content inventory:</strong> which pages rank, which are cannibalizing each other, and which topics you are missing entirely.</li>
              <li><strong>Backlink analysis:</strong> referring domains, anchor text distribution, toxic links, and competitor link gaps.</li>
              <li><strong>Keyword landscape:</strong> what your audience actually searches, grouped by intent and difficulty.</li>
            </ul>
            <p>If your <Link to="/technical-seo">technical SEO</Link> foundation is cracked, everything you build on top of it will underperform. Fix the foundation first.</p>
          </>
        ),
      },
      {
        id: 'step-2-research',
        heading: 'Step 2: Research — Keywords With Intent',
        body: (
          <>
            <p>Keyword research is not about volume. It is about <strong>intent</strong>. A keyword with 10,000 monthly searches that never converts is worth less than a keyword with 200 searches that turns into a paying client. Group every keyword into one of four intent buckets:</p>
            <ul>
              <li><strong>Informational:</strong> the searcher is learning. Capture with blog posts and guides.</li>
              <li><strong>Navigational:</strong> the searcher is looking for a specific brand or page.</li>
              <li><strong>Commercial:</strong> the searcher is comparing options. Capture with comparison and pricing content.</li>
              <li><strong>Transactional:</strong> the searcher is ready to buy. Capture with service and landing pages.</li>
            </ul>
            <p>Map each keyword to a specific page on your site. If two keywords share the same intent, they should target the same page — not compete with each other. This is how you avoid keyword cannibalization, one of the most common mistakes we see in audits.</p>
          </>
        ),
      },
      {
        id: 'step-3-on-page',
        heading: 'Step 3: On-Page Optimization',
        body: (
          <>
            <p>On-page SEO is where strategy meets execution. Every page should have a single primary keyword, a clear search intent, and a reason to exist beyond "we need a page for this keyword." The essentials:</p>
            <h3>The on-page checklist</h3>
            <ul>
              <li><strong>Title tag:</strong> include the primary keyword near the front, keep it under 60 characters, and make it compelling.</li>
              <li><strong>Meta description:</strong> 150–160 characters that earn the click, not just describe the page.</li>
              <li><strong>H1:</strong> one per page, containing the primary keyword naturally.</li>
              <li><strong>Internal links:</strong> link to and from your most important pages using descriptive anchor text.</li>
              <li><strong>Schema markup:</strong> Article, FAQ, Breadcrumb, and Organization schema where relevant.</li>
            </ul>
            <p>Our <Link to="/seo">Search Engine Optimization</Link> service handles all of this with documented templates, so nothing is left to guesswork.</p>
          </>
        ),
      },
      {
        id: 'step-4-content',
        heading: 'Step 4: Content That Ranks AND Converts',
        body: (
          <>
            <p>Content is where most SEO campaigns win or lose. The old approach — publish thin, keyword-stuffed pages — does not work anymore. Google rewards content that demonstrates <strong>experience, expertise, authority, and trust</strong> (E-E-A-T). That means:</p>
            <ul>
              <li>Original research, data, or insights that no competitor has.</li>
              <li>Comprehensive coverage that answers the searcher’s full question, not just the headline query.</li>
              <li>Clear, scannable formatting with proper heading hierarchy.</li>
              <li>Internal links that guide readers to related topics and conversion pages.</li>
            </ul>
            <p>If writing is not your team’s strength, our <Link to="/content-writing">Content Writing</Link> service produces SEO-driven content that ranks and persuades — without sounding like it was written for a robot.</p>
          </>
        ),
      },
      {
        id: 'step-5-local',
        heading: 'Step 5: Local SEO — If You Serve a Geographic Area',
        body: (
          <>
            <p>If you serve customers in a specific city or region, <Link to="/local-seo">Local SEO</Link> is not optional — it is the highest-ROI work you can do. The map pack (the top three local results on Google) captures the majority of clicks for local-intent searches.</p>
            <h3>The local SEO essentials</h3>
            <ul>
              <li><strong>Google Business Profile:</strong> complete every field, add photos weekly, and post updates.</li>
              <li><strong>Citations:</strong> consistent Name, Address, and Phone (NAP) across all directories.</li>
              <li><strong>Reviews:</strong> ask every happy customer for a review and respond to every single one.</li>
              <li><strong>Location pages:</strong> a unique, useful page for each city or neighborhood you serve.</li>
            </ul>
          </>
        ),
      },
      {
        id: 'step-6-links',
        heading: 'Step 6: Authority — Link Building Done Right',
        body: (
          <>
            <p>Links remain one of Google’s top ranking signals — but the bar for quality has never been higher. One link from a relevant, high-authority site is worth more than a hundred links from low-quality directories. Focus on:</p>
            <ul>
              <li><strong>Digital PR:</strong> create data-driven stories that journalists want to cite.</li>
              <li><strong>Guest posting:</strong> publish original content on real sites in your niche — not link farms.</li>
              <li><strong>Resource pages:</strong> get listed on curated resource lists where your content genuinely belongs.</li>
              <li><strong>Broken link building:</strong> find broken links on relevant sites and offer your content as a replacement.</li>
            </ul>
            <p>Every link should come from a site with real traffic and real relevance to your industry. If a link would not make sense to a human, it will not help your rankings long-term.</p>
          </>
        ),
      },
      {
        id: 'step-7-reporting',
        heading: 'Step 7: Measure What Matters',
        body: (
          <>
            <p>The final step is measurement — and most agencies measure the wrong things. Rankings are a leading indicator, but they are not the goal. Traffic is closer, but it is still not the goal. The goal is <strong>revenue</strong>. Track the full funnel:</p>
            <ul>
              <li><strong>Rankings:</strong> are you moving up for your target keywords?</li>
              <li><strong>Organic traffic:</strong> is it growing, and from which pages?</li>
              <li><strong>Conversions:</strong> how many organic visitors become leads or customers?</li>
              <li><strong>Revenue:</strong> what is the dollar value of those conversions?</li>
            </ul>
            <p>If your agency reports rankings but not revenue, you are working with the wrong agency. <Link to="/contact">Book a free consultation</Link> with us and we will show you what transparent reporting actually looks like.</p>
          </>
        ),
      },
      {
        id: 'conclusion',
        heading: 'Putting It All Together',
        body: (
          <>
            <p>A winning SEO strategy is not a secret. It is a disciplined process: audit, research, optimize, create, build authority, and measure — then repeat. The compounding effect is real. Every month you execute this framework, your moat grows wider and your competitors fall further behind.</p>
            <p>If you want a team that has executed this blueprint across hundreds of campaigns, <Link to="/contact">get a free SEO audit</Link>. We will show you exactly where you stand and the most efficient path to growth — no obligation.</p>
          </>
        ),
      },
    ],
    faqs: [
      { q: 'How long does an SEO strategy take to show results?', a: 'Most campaigns show meaningful ranking movement within 90 days and significant traffic gains in 4–6 months. Local SEO often moves faster; competitive national terms take longer. The blueprint above is designed to compound, so results accelerate over time.' },
      { q: 'Do I need to do all seven steps, or can I skip some?', a: 'Every step builds on the previous one. Skipping the audit leads to wasted optimization; skipping content means you have nothing to rank; skipping links means your content will not outrank competitors. The steps are sequential for a reason.' },
      { q: 'Is this SEO strategy white-hat?', a: 'Yes, 100%. Every tactic in this blueprint follows Google’s guidelines. No PBNs, no link farms, no keyword stuffing — only strategies that build lasting authority and withstand algorithm updates.' },
      { q: 'Can I execute this SEO strategy myself, or do I need an agency?', a: 'A motivated in-house team can execute much of this blueprint. However, it requires significant time, specialized tools, and expertise across technical SEO, content, and link building. Most businesses see faster results by partnering with an experienced agency.' },
      { q: 'How much does an SEO strategy cost?', a: 'It depends on your industry, competition, and goals. Our plans start at $899/month for local businesses and scale up for multi-location and enterprise needs. See our pricing page or book a free consultation for a custom quote.' },
    ],
  },
};

export const pricingPlans = [
  {
    name: 'Starter',
    price: 899,
    period: '/mo',
    tagline: 'For local businesses ready to grow.',
    features: ['Local SEO essentials', 'Google Business Profile', '5 target keywords', 'Monthly content (2 posts)', 'Basic link building', 'Monthly report'],
    cta: 'Start Growing',
    featured: false,
  },
  {
    name: 'Growth',
    price: 1899,
    period: '/mo',
    tagline: 'For scaling brands that need momentum.',
    features: ['Full SEO program', '15 target keywords', 'Monthly content (6 posts)', 'Authority link building', 'Technical SEO audits', 'Bi-weekly strategy calls', 'Live dashboard'],
    cta: 'Scale With Us',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 3499,
    period: '/mo',
    tagline: 'For demanding niches and multi-location.',
    features: ['Dedicated strategist', 'Unlimited target keywords', 'Content + link building at scale', 'Multi-location SEO', 'Web design & dev support', 'Weekly strategy calls', 'Custom reporting'],
    cta: 'Talk to Sales',
    featured: false,
  },
];

export const clientLogos = ['BrightPath', 'Nimbus', 'Lakeside', 'UrbanNest', 'Bloom', 'Apex', 'Veridian', 'Northwind'];

export const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61591547398435', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/rankflowdigitalhubs/', icon: 'instagram' },
  { name: 'Fiverr', url: 'https://www.fiverr.com/s/kL9AD5w', icon: 'fiverr' },
];

export const contactInfo = {
  email: 'info@rankflowagency.online',
  website: 'https://rankflowagency.online',
  websiteLabel: 'rankflowagency.online',
  location: 'Remote · Worldwide',
};
