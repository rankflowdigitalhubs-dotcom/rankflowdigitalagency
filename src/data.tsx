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
  { slug: 'local-seo-for-small-businesses', title: 'Local SEO for Small Businesses: The Complete Guide to Getting More Local Customers in 2026', category: 'Local SEO', date: 'Jul 8, 2026', readTime: '8 min', excerpt: 'Learn how Local SEO helps small businesses rank higher on Google, attract local customers, and increase sales with proven strategies.', img: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { slug: 'why-is-my-website-not-ranking-on-google', title: 'Why Is My Website Not Ranking on Google? 12 Common Reasons & How to Fix Them', category: 'SEO', date: 'Jul 8, 2026', readTime: '8 min', excerpt: 'Is your website not ranking on Google? Discover the 12 most common SEO mistakes that prevent websites from ranking and learn practical ways to improve your search visibility.', img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200' },
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
  'why-is-my-website-not-ranking-on-google': {
    sections: [
      {
        id: 'introduction',
        heading: 'Why Is My Website Not Ranking on Google?',
        body: (
          <>
            <p>You spent weeks—maybe even months—building your website. You chose a professional design, wrote content, added your services, and finally hit the publish button. Then you waited, expecting visitors to start finding your business through Google.</p>
            <p>Days passed.</p>
            <p>Then weeks.</p>
            <p>But nothing happened.</p>
            <p>No traffic. No inquiries. No phone calls. No new customers.</p>
            <p>If this sounds familiar, you're not alone.</p>
            <p>One of the biggest misconceptions about websites is that simply launching one is enough to attract visitors. In reality, Google indexes billions of web pages, and every day thousands of new websites compete for the same audience.</p>
            <p>The good news is that if your website isn't ranking today, it doesn't mean it never will. In most cases, there are clear reasons behind the problem—and most of them can be fixed.</p>
            <p>Let's look at the most common reasons your website may not be ranking on Google.</p>
          </>
        ),
      },
      {
        id: 'reason-1-new-website',
        heading: '1. Your Website Is Still New',
        body: (
          <>
            <p>If your website was launched recently, patience is important.</p>
            <p>Google doesn't instantly trust every new website. Search engines first need time to discover your pages, understand your content, and evaluate your site's quality before showing it in search results.</p>
            <p>Many new website owners expect rankings within a few days, but SEO is a long-term strategy.</p>
            <h3>How to fix it</h3>
            <ul>
              <li>Publish useful content consistently.</li>
              <li>Submit your sitemap to Google Search Console.</li>
              <li>Build your website's authority over time.</li>
              <li>Keep improving your pages instead of waiting.</li>
            </ul>
          </>
        ),
      },
      {
        id: 'reason-2-not-indexed',
        heading: '2. Google Hasn\'t Indexed Your Website',
        body: (
          <>
            <p>If Google hasn't indexed your pages, they simply cannot appear in search results.</p>
            <p>A surprising number of websites remain invisible because they were never submitted to Google or because technical issues prevent indexing.</p>
            <h3>How to check</h3>
            <p>Search Google for:</p>
            <p><code>site:yourdomain.com</code></p>
            <p>If no pages appear, your website may not be indexed.</p>
            <h3>How to fix it</h3>
            <ul>
              <li>Verify your site in Google Search Console.</li>
              <li>Submit your XML sitemap.</li>
              <li>Request indexing for important pages.</li>
              <li>Make sure your pages aren't blocked by robots.txt or "noindex" tags.</li>
            </ul>
          </>
        ),
      },
      {
        id: 'reason-3-wrong-keywords',
        heading: '3. You\'re Targeting the Wrong Keywords',
        body: (
          <>
            <p>Many businesses try to rank for extremely competitive keywords such as:</p>
            <ul>
              <li>SEO</li>
              <li>Digital Marketing</li>
              <li>Web Design</li>
            </ul>
            <p>The problem?</p>
            <p>Thousands of established websites have been competing for these keywords for years.</p>
            <p>Instead, focus on keywords that match your audience's search intent.</p>
            <p>For example, instead of targeting:</p>
            <p><strong>SEO Services</strong></p>
            <p>Try something more specific like:</p>
            <p><strong>Affordable SEO Services for Small Businesses</strong></p>
            <p>or</p>
            <p><strong>Local SEO Services for Restaurants</strong></p>
            <p>Long-tail keywords usually have less competition and attract visitors who know exactly what they're looking for.</p>
          </>
        ),
      },
      {
        id: 'reason-4-content-quality',
        heading: '4. Your Content Doesn\'t Solve Real Problems',
        body: (
          <>
            <p>Google's goal is simple:</p>
            <p>Show users the most helpful answer.</p>
            <p>If your page only contains a few hundred words with general information, it probably won't compete with websites offering detailed, practical guidance.</p>
            <p>Ask yourself:</p>
            <ul>
              <li>Does my article answer the reader's question?</li>
              <li>Would someone learn something useful after reading it?</li>
              <li>Does my content provide examples, tips, or solutions?</li>
            </ul>
            <p>If the answer is "not really," it's time to improve your content. Our <Link to="/content-writing">Content Writing</Link> service creates in-depth, helpful content that ranks.</p>
          </>
        ),
      },
      {
        id: 'reason-5-slow-speed',
        heading: '5. Your Website Loads Too Slowly',
        body: (
          <>
            <p>Speed matters.</p>
            <p>Visitors don't enjoy waiting for slow websites, and neither does Google.</p>
            <p>If your pages take several seconds to load, users often leave before they even read your content.</p>
            <p>This increases bounce rates and creates a poor user experience.</p>
            <h3>Ways to improve speed</h3>
            <ul>
              <li>Compress large images.</li>
              <li>Remove unnecessary scripts.</li>
              <li>Enable browser caching.</li>
              <li>Use modern image formats.</li>
              <li>Minify CSS and JavaScript.</li>
            </ul>
            <p>A faster website creates a better experience for visitors and supports stronger SEO performance.</p>
          </>
        ),
      },
      {
        id: 'reason-6-not-mobile-friendly',
        heading: '6. Your Website Isn\'t Mobile-Friendly',
        body: (
          <>
            <p>Today, most Google searches happen on mobile devices.</p>
            <p>If your website looks great on a desktop but difficult to use on a phone, you're losing both visitors and ranking opportunities.</p>
            <p>Check whether:</p>
            <ul>
              <li>Text is easy to read.</li>
              <li>Buttons are easy to tap.</li>
              <li>Images fit the screen.</li>
              <li>Navigation works smoothly.</li>
            </ul>
            <p>Google primarily evaluates the mobile version of your website, so mobile usability is no longer optional.</p>
          </>
        ),
      },
      {
        id: 'reason-7-few-backlinks',
        heading: '7. You Have Very Few Backlinks',
        body: (
          <>
            <p>Think of backlinks as recommendations.</p>
            <p>When trusted websites link to your content, Google sees those links as signals that your website provides value.</p>
            <p>A website with no quality backlinks often struggles to compete against more established competitors.</p>
            <p>Focus on earning backlinks naturally through:</p>
            <ul>
              <li>Helpful blog content</li>
              <li>Guest posting</li>
              <li>Industry partnerships</li>
              <li>Resource pages</li>
              <li>Digital PR</li>
            </ul>
            <p>Remember, quality always matters more than quantity.</p>
          </>
        ),
      },
      {
        id: 'reason-8-on-page-seo',
        heading: '8. Your On-Page SEO Needs Improvement',
        body: (
          <>
            <p>Even great content can struggle to rank if it's not properly optimized.</p>
            <p>On-page SEO helps search engines understand what your page is about.</p>
            <p>Here are a few basics every page should include:</p>
            <ul>
              <li>A clear and descriptive title tag</li>
              <li>A compelling meta description</li>
              <li>One H1 heading</li>
              <li>Organized H2 and H3 headings</li>
              <li>Natural keyword placement</li>
              <li>Internal links to related pages</li>
              <li>Optimized images with alt text</li>
            </ul>
            <p>Avoid stuffing the same keyword into every paragraph. Write naturally and focus on helping your readers first. Our <Link to="/seo">SEO Services</Link> handle every on-page element with documented precision.</p>
          </>
        ),
      },
      {
        id: 'reason-9-technical-seo',
        heading: '9. Your Website Has Technical SEO Issues',
        body: (
          <>
            <p>Technical SEO is the foundation of your website. If search engines can't crawl or understand your pages, your rankings can suffer no matter how good your content is.</p>
            <p>Common technical issues include:</p>
            <ul>
              <li>Broken links</li>
              <li>Missing XML sitemap</li>
              <li>Duplicate pages</li>
              <li>Incorrect redirects</li>
              <li>Crawl errors</li>
              <li>Poor URL structure</li>
              <li>Missing HTTPS security</li>
            </ul>
            <p>Run regular SEO audits to identify and fix these issues before they affect your visibility. Our <Link to="/technical-seo">Technical SEO</Link> service covers every item on this list.</p>
          </>
        ),
      },
      {
        id: 'reason-10-topical-authority',
        heading: '10. Your Website Lacks Topical Authority',
        body: (
          <>
            <p>Google prefers websites that cover a topic in depth rather than publishing one article and moving on.</p>
            <p>For example, if you want to rank for SEO-related searches, don't publish only one article about SEO.</p>
            <p>Instead, create a complete library of helpful content such as:</p>
            <ul>
              <li>What Is SEO?</li>
              <li>On-Page SEO Guide</li>
              <li>Technical SEO Checklist</li>
              <li>Local SEO Tips</li>
              <li>Keyword Research Guide</li>
              <li>Link Building Strategies</li>
              <li>SEO Audit Checklist</li>
              <li>Common SEO Mistakes</li>
            </ul>
            <p>When your content covers an entire subject, Google begins to recognize your website as a trusted resource.</p>
          </>
        ),
      },
      {
        id: 'reason-11-not-updating',
        heading: '11. You\'re Not Updating Your Content',
        body: (
          <>
            <p>SEO is not a one-time task.</p>
            <p>Search engines prefer content that stays accurate and relevant.</p>
            <p>Review your important articles every few months.</p>
            <p>Update:</p>
            <ul>
              <li>Statistics</li>
              <li>Screenshots</li>
              <li>Examples</li>
              <li>SEO recommendations</li>
              <li>Internal links</li>
            </ul>
            <p>Fresh content sends positive signals that your website is actively maintained.</p>
          </>
        ),
      },
      {
        id: 'reason-12-expecting-results-too-quickly',
        heading: '12. You\'re Expecting Results Too Quickly',
        body: (
          <>
            <p>This is one of the biggest reasons people give up on SEO.</p>
            <p>Unlike paid advertising, SEO takes time.</p>
            <p>Depending on your industry, competition, and website quality, meaningful improvements may take several months.</p>
            <p>The businesses that succeed with SEO are usually the ones that stay consistent.</p>
            <p>Publishing valuable content, improving technical performance, and building authority over time creates lasting results.</p>
          </>
        ),
      },
      {
        id: 'quick-seo-checklist',
        heading: 'Quick SEO Checklist',
        body: (
          <>
            <p>If your website isn't ranking, go through this checklist:</p>
            <ul>
              <li>✅ Verify your website in Google Search Console.</li>
              <li>✅ Submit your XML sitemap.</li>
              <li>✅ Publish helpful, original content.</li>
              <li>✅ Target realistic keywords.</li>
              <li>✅ Improve page speed.</li>
              <li>✅ Make your website mobile-friendly.</li>
              <li>✅ Build quality backlinks.</li>
              <li>✅ Fix technical SEO issues.</li>
              <li>✅ Add internal links between related pages.</li>
              <li>✅ Update older articles regularly.</li>
            </ul>
            <p>Consistency is more important than shortcuts.</p>
          </>
        ),
      },
      {
        id: 'free-seo-audit-cta',
        heading: 'Get Your Free SEO Audit',
        body: (
          <>
            <p>If you're struggling to understand why your website isn't getting traffic, a professional SEO audit can uncover the issues holding it back.</p>
            <p>At Rank Flow Digital, we help businesses improve their online visibility through:</p>
            <ul>
              <li>Technical SEO</li>
              <li>On-Page SEO</li>
              <li><Link to="/local-seo">Local SEO</Link></li>
              <li>Content Optimization</li>
              <li>SEO Audits</li>
              <li>High-Quality Link Building</li>
            </ul>
            <p>Request your Free SEO Audit today and discover the opportunities to grow your organic traffic. <Link to="/contact">Contact us</Link> to get started.</p>
          </>
        ),
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        body: (
          <>
            <p>If your website isn't ranking on Google, don't assume something is permanently wrong. In most cases, the issue comes down to a combination of content quality, technical SEO, keyword strategy, and consistency.</p>
            <p>SEO is not about finding a secret trick or shortcut. It's about building a website that genuinely helps users, answers their questions, and provides a great experience.</p>
            <p>Start by fixing the basics, continue publishing valuable content, and monitor your progress regularly. Small improvements made consistently often lead to significant long-term results.</p>
          </>
        ),
      },
    ],
    faqs: [
      { q: 'Why is my website not showing up on Google?', a: 'Your website may not be indexed, may target highly competitive keywords, or may have technical SEO issues. Checking Google Search Console is a good first step.' },
      { q: 'How long does SEO take?', a: 'SEO is a long-term strategy. Some improvements can appear within a few weeks, while competitive keywords often take several months depending on your niche and website authority.' },
      { q: 'Can I rank without backlinks?', a: 'It is possible for some low-competition keywords, but earning high-quality backlinks generally improves your chances of ranking for more competitive searches.' },
      { q: 'Does publishing more content improve rankings?', a: 'Publishing more high-quality and relevant content can strengthen your website\'s topical authority. However, quality is always more important than simply increasing the number of articles.' },
    ],
  },
  'local-seo-for-small-businesses': {
    sections: [
      {
        id: 'introduction',
        heading: 'Local SEO for Small Businesses: The Complete Guide to Getting More Local Customers',
        body: (
          <>
            <p>Imagine this...</p>
            <p>A customer in your city takes out their phone and searches:</p>
            <p>"Best plumber near me."</p>
            <p>or</p>
            <p>"SEO agency near me."</p>
            <p>or</p>
            <p>"Coffee shop near me."</p>
            <p>Within seconds, Google displays a list of local businesses.</p>
            <p>Now ask yourself one simple question:</p>
            <p>Is your business one of them?</p>
            <p>If the answer is no, you're likely missing valuable customers every single day.</p>
            <p>The good news is that you don't need a huge advertising budget to compete with larger companies. By using Local SEO effectively, even a small business can appear in front of nearby customers who are actively looking for its products or services.</p>
            <p>In this guide, you'll learn what Local SEO is, why it matters, and the practical steps you can take to improve your local visibility and attract more customers.</p>
          </>
        ),
      },
      {
        id: 'what-is-local-seo',
        heading: 'What Is Local SEO?',
        body: (
          <>
            <p>Local SEO (Local Search Engine Optimization) is the process of optimizing your online presence so your business appears in local search results.</p>
            <p>Unlike traditional SEO, which targets a global or national audience, Local SEO focuses on people searching for products or services in a specific city or area.</p>
            <p>For example:</p>
            <ul>
              <li>Best dentist in London</li>
              <li>Roofing company in Manchester</li>
              <li>SEO agency in Birmingham</li>
              <li>Coffee shop near me</li>
            </ul>
            <p>These searches have strong buying intent because people are usually ready to contact or visit a business.</p>
            <p>That's why Local SEO is one of the most valuable marketing strategies for service-based businesses. Learn more about how it fits into a broader strategy in our <Link to="/seo">SEO Services</Link> overview.</p>
          </>
        ),
      },
      {
        id: 'why-local-seo-matters',
        heading: 'Why Local SEO Matters',
        body: (
          <>
            <p>Think about your own habits.</p>
            <p>When you need a nearby restaurant, mechanic, or digital marketing agency, you probably search on Google instead of asking everyone you know.</p>
            <p>Your potential customers do exactly the same.</p>
            <p>If your business doesn't appear in local search results, they'll likely choose one of your competitors.</p>
            <p>Local SEO helps your business:</p>
            <ul>
              <li>Get found by nearby customers</li>
              <li>Increase website traffic</li>
              <li>Receive more phone calls</li>
              <li>Generate more leads</li>
              <li>Build trust through reviews</li>
              <li>Grow without relying entirely on paid advertising</li>
            </ul>
            <p>For many small businesses, Local SEO becomes their most consistent source of qualified leads.</p>
          </>
        ),
      },
      {
        id: 'how-local-seo-works',
        heading: 'How Local SEO Works',
        body: (
          <>
            <p>Google wants to show users the most relevant and trustworthy businesses.</p>
            <p>When someone searches for a local service, Google evaluates several factors before deciding which businesses to display.</p>
            <p>These include:</p>
            <h3>Relevance</h3>
            <p>Does your business match what the customer is searching for?</p>
            <h3>Distance</h3>
            <p>How close is your business to the searcher?</p>
            <h3>Prominence</h3>
            <p>How well-known and trusted is your business online?</p>
            <p>This is why businesses with complete profiles, positive reviews, and optimized websites often rank higher.</p>
          </>
        ),
      },
      {
        id: '7-proven-local-seo-strategies',
        heading: '7 Proven Local SEO Strategies',
        body: (
          <>
            <h3>1. Optimize Your Google Business Profile</h3>
            <p>Your Google Business Profile is one of the most important ranking factors for Local SEO.</p>
            <p>Make sure your profile includes:</p>
            <ul>
              <li>Business name</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Website</li>
              <li>Business hours</li>
              <li>Services</li>
              <li>High-quality photos</li>
              <li>Business description</li>
            </ul>
            <p>Keep everything accurate and up to date.</p>
            <h3>2. Use Local Keywords</h3>
            <p>Instead of targeting broad keywords, include location-based phrases naturally throughout your website.</p>
            <p>For example:</p>
            <p>Instead of:</p>
            <p><strong>SEO Services</strong></p>
            <p>Use:</p>
            <p><strong>SEO Services in Birmingham</strong></p>
            <p>or</p>
            <p><strong>Affordable SEO Agency in London</strong></p>
            <p>These keywords help Google understand the areas you serve.</p>
            <h3>3. Create Location-Specific Pages</h3>
            <p>If you work in multiple cities, create separate pages for each location.</p>
            <p>Example:</p>
            <ul>
              <li>SEO Services in London</li>
              <li>SEO Services in Manchester</li>
              <li>SEO Services in Birmingham</li>
            </ul>
            <p>Each page should contain unique content rather than copying the same text and changing only the city name.</p>
            <h3>4. Encourage Customer Reviews</h3>
            <p>Positive reviews improve both trust and local rankings.</p>
            <p>After completing a project, politely ask your clients to leave an honest review.</p>
            <p>Respond to every review, whether it's positive or negative.</p>
            <p>Google values businesses that actively engage with their customers.</p>
            <h3>5. Keep Your Contact Information Consistent</h3>
            <p>Your business name, address, and phone number should remain consistent across:</p>
            <ul>
              <li>Your website</li>
              <li>Google Business Profile</li>
              <li>Business directories</li>
              <li>Social media profiles</li>
            </ul>
            <p>Inconsistent information can confuse both customers and search engines.</p>
            <h3>6. Publish Helpful Local Content</h3>
            <p>Create blog posts that answer questions your local audience is searching for.</p>
            <p>Examples:</p>
            <ul>
              <li>Best SEO Tips for Small Businesses in Birmingham</li>
              <li>How Local Businesses Can Rank Higher on Google</li>
              <li>Common SEO Mistakes Local Companies Make</li>
            </ul>
            <p>Useful content not only attracts visitors but also builds trust and authority. Our <Link to="/content-writing">Content Writing</Link> service produces exactly this kind of location-aware content.</p>
            <h3>7. Make Your Website Fast and Mobile-Friendly</h3>
            <p>Most local searches happen on mobile devices.</p>
            <p>If your website loads slowly or is difficult to use on a phone, visitors may leave before contacting you.</p>
            <p>Focus on:</p>
            <ul>
              <li>Fast loading pages</li>
              <li>Responsive design</li>
              <li>Easy navigation</li>
              <li>Click-to-call buttons</li>
              <li>Simple contact forms</li>
            </ul>
            <p>A better user experience often leads to better rankings and more conversions.</p>
          </>
        ),
      },
      {
        id: 'common-local-seo-mistakes',
        heading: 'Common Local SEO Mistakes to Avoid',
        body: (
          <>
            <p>Even businesses that invest time in SEO often make mistakes that prevent them from achieving better rankings. The good news is that most of these mistakes are easy to fix once you know what to look for.</p>
            <h3>Ignoring Google Business Profile</h3>
            <p>Many business owners create a Google Business Profile but never update it again. An incomplete profile with missing information, outdated hours, or no photos is less likely to attract customers.</p>
            <p>Keep your profile active by updating your services, posting business updates, and adding new photos regularly.</p>
            <h3>Using the Same Content for Every City</h3>
            <p>If you serve multiple locations, don't copy the same page and simply replace the city name.</p>
            <p>Google values original content.</p>
            <p>Instead, write unique pages that mention local landmarks, customer needs, and services specific to that location.</p>
            <h3>Ignoring Customer Reviews</h3>
            <p>Reviews are one of the strongest trust signals for both Google and potential customers.</p>
            <p>Don't wait for customers to leave reviews on their own.</p>
            <p>After successfully completing a project, politely ask them for honest feedback.</p>
            <p>A steady flow of genuine reviews can significantly improve your local visibility.</p>
            <h3>Forgetting Mobile Users</h3>
            <p>Imagine someone searching for your business while standing outside your competitor's store.</p>
            <p>If your website is slow or difficult to use on a mobile phone, they'll likely leave before contacting you.</p>
            <p>Always test your website on different screen sizes and ensure visitors can quickly find your contact details.</p>
          </>
        ),
      },
      {
        id: 'build-local-citations',
        heading: 'Build Local Citations',
        body: (
          <>
            <p>A local citation is any online mention of your business's:</p>
            <ul>
              <li>Business Name</li>
              <li>Address</li>
              <li>Phone Number</li>
            </ul>
            <p>These mentions help Google verify that your business is legitimate.</p>
            <p>Some common places for citations include:</p>
            <ul>
              <li>Google Business Profile</li>
              <li>Bing Places</li>
              <li>Apple Maps</li>
              <li>Yelp</li>
              <li>Facebook Business</li>
              <li>Local business directories</li>
            </ul>
            <p>The important thing is consistency. Your business information should match across every platform.</p>
          </>
        ),
      },
      {
        id: 'earn-quality-local-backlinks',
        heading: 'Earn Quality Local Backlinks',
        body: (
          <>
            <p>Backlinks remain an important ranking factor for Local SEO.</p>
            <p>Instead of chasing hundreds of low-quality links, focus on earning links from trusted and relevant websites.</p>
            <p>Some effective ideas include:</p>
            <ul>
              <li>Writing guest posts for local blogs</li>
              <li>Sponsoring community events</li>
              <li>Joining local business associations</li>
              <li>Collaborating with nearby businesses</li>
              <li>Getting featured in local news websites</li>
            </ul>
            <p>A few high-quality backlinks often provide more value than dozens of weak ones.</p>
          </>
        ),
      },
      {
        id: 'track-your-local-seo-performance',
        heading: 'Track Your Local SEO Performance',
        body: (
          <>
            <p>SEO is never a one-time task.</p>
            <p>Monitor your progress regularly using free tools such as:</p>
            <ul>
              <li>Google Search Console</li>
              <li>Google Analytics 4</li>
              <li>Google Business Profile Insights</li>
            </ul>
            <p>Pay attention to:</p>
            <ul>
              <li>Organic traffic</li>
              <li>Phone calls</li>
              <li>Contact form submissions</li>
              <li>Keyword rankings</li>
              <li>Website clicks</li>
              <li>Direction requests</li>
              <li>Customer reviews</li>
            </ul>
            <p>Tracking these metrics helps you understand what's working and where improvements are needed.</p>
          </>
        ),
      },
      {
        id: 'local-seo-checklist',
        heading: 'Local SEO Checklist',
        body: (
          <>
            <p>Before publishing your website, make sure you've completed these essential steps:</p>
            <ul>
              <li>✅ Create and verify your Google Business Profile.</li>
              <li>✅ Add your business name, address, and phone number consistently.</li>
              <li>✅ Optimize every service page with local keywords.</li>
              <li>✅ Publish location-specific content.</li>
              <li>✅ Collect genuine customer reviews.</li>
              <li>✅ Improve website speed.</li>
              <li>✅ Make your website mobile-friendly.</li>
              <li>✅ Add internal links between related pages.</li>
              <li>✅ Submit your XML sitemap to Google Search Console.</li>
              <li>✅ Continue publishing helpful blog content.</li>
            </ul>
            <p>Following this checklist will give your business a stronger foundation for long-term local search success.</p>
          </>
        ),
      },
      {
        id: 'free-seo-audit-cta',
        heading: 'Ready to Grow Your Local Business?',
        body: (
          <>
            <p>If your business isn't attracting enough local customers, now is the perfect time to improve your online visibility.</p>
            <p>At Rank Flow Digital, we help businesses increase local rankings through:</p>
            <ul>
              <li><Link to="/local-seo">Local SEO Optimization</Link></li>
              <li>Google Business Profile Optimization</li>
              <li><Link to="/technical-seo">Technical SEO</Link></li>
              <li>On-Page SEO</li>
              <li><Link to="/content-writing">Content Writing</Link></li>
              <li>SEO Audits</li>
              <li>Link Building</li>
            </ul>
            <p>Request your FREE SEO Audit today and discover how your website can attract more local customers and generate more leads. <Link to="/contact">Contact us</Link> to get started.</p>
          </>
        ),
      },
      {
        id: 'final-thoughts',
        heading: 'Final Thoughts',
        body: (
          <>
            <p>Local SEO isn't just about appearing on Google—it's about connecting with people who are already looking for the products or services you offer.</p>
            <p>Whether you're running a local restaurant, a plumbing company, a law firm, or a digital marketing agency, investing in Local SEO can help you attract more qualified customers, build trust in your community, and grow your business over time.</p>
            <p>Remember, success doesn't come from trying to trick search engines. It comes from providing useful information, maintaining an excellent user experience, and consistently improving your online presence.</p>
            <p>Small improvements made consistently often lead to significant long-term results.</p>
          </>
        ),
      },
    ],
    faqs: [
      { q: 'How long does Local SEO take?', a: 'Local SEO is a long-term strategy. While some businesses notice improvements within a few weeks, significant results often take several months depending on competition, website quality, and consistency.' },
      { q: 'Is Local SEO only for businesses with physical locations?', a: 'No. Service-area businesses such as SEO agencies, plumbers, electricians, consultants, and home service providers can also benefit from Local SEO by targeting the locations they serve.' },
      { q: 'Do customer reviews really help rankings?', a: 'Yes. Genuine customer reviews help build trust with both Google and potential customers. Businesses with strong review profiles often have an advantage in local search results.' },
      { q: 'Can I do Local SEO without paying for ads?', a: 'Absolutely. Local SEO focuses on improving your organic visibility. While paid advertising can complement your marketing efforts, many businesses generate valuable leads through Local SEO alone.' },
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
