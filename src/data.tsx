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
  { slug: 'how-to-get-more-dental-patients-from-google', title: 'How to Get More Dental Patients From Google Without Ads (12 Proven SEO Strategies)', category: 'Dental SEO', date: 'Jul 11, 2026', readTime: '14 min', excerpt: 'Struggling to get new dental patients from Google? Learn 12 proven dental SEO strategies to improve your Google rankings, attract more patients, and grow your practice without paid ads.', img: 'https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { slug: 'why-is-my-restaurant-not-showing-up-on-google', title: 'Why Is My Restaurant Not Showing Up on Google? (11 Proven Fixes to Get Found by More Customers)', category: 'Local SEO', date: 'Jul 11, 2026', readTime: '11 min', excerpt: 'Is your restaurant invisible on Google Maps and Search? Learn 11 proven fixes to improve your local SEO, rank higher, and get more customers through your doors.', img: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { slug: 'how-to-get-sales-on-shopify-without-ads', title: 'How to Get Sales on Shopify Without Ads', category: 'Shopify SEO', date: 'Jul 11, 2026', readTime: '12 min', excerpt: 'Getting Shopify traffic but no sales? Learn proven, ad-free strategies to increase Shopify sales with SEO, email marketing, social media, and conversion optimization.', img: 'https://images.pexels.com/photos/4219989/pexels-photo-4219989.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { slug: 'ecommerce-store-not-performing', title: '4 Reasons Why Your eCommerce Store Is Not Performing Well (And How to Fix Them)', category: 'E-commerce', date: 'Jul 10, 2026', readTime: '10 min', excerpt: 'Is your online store getting traffic but not making sales? Discover the 4 biggest reasons eCommerce stores underperform — and the exact fixes you can apply today.', img: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { slug: 'why-competitors-ranking-higher-on-google', title: 'Why Are My Competitors Ranking Higher on Google?', category: 'SEO', date: 'Jul 9, 2026', readTime: '10 min', excerpt: 'Wondering why competitors outrank you on Google? Discover the real reasons behind their success and learn practical steps to close the gap and rank higher.', img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200' },
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
  'how-to-get-more-dental-patients-from-google': {
    sections: [
      {
        id: 'introduction',
        heading: 'How to Get More Dental Patients From Google Without Ads',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dentist in a modern dental clinic performing a procedure on a patient, representing dental SEO and online visibility"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You built a beautiful dental website. You hired a designer. You listed all your services. You even added a contact form. But when you search for a dentist in your city on Google, your practice is nowhere to be found.
            </p>
            <p>
              Instead, you watch other dental clinics show up at the top of Google Maps and Google Search. They get the calls. They get the new patients. They get the online appointment requests — while your chairs sit empty on weekdays.
            </p>
            <p>
              If that sounds familiar, you are not alone. Most dental practices struggle with the same problem. They have a great website but no organic traffic. And without traffic, a website is just a digital brochure that nobody reads.
            </p>
            <p>
              Here is the truth: patients are searching on Google right now. They type "dentist near me," "emergency dentist in [city]," "cosmetic dentist," "teeth whitening near me." If your practice does not show up for those searches, those patients go to your competitors.
            </p>
            <p>
              The good news is that you do not need a massive advertising budget to fix this. Dental SEO — the process of optimizing your website and online presence to rank higher on Google — can bring you a steady stream of new patients for free. Once you rank, the traffic keeps coming month after month without paying for every click.
            </p>
            <p>
              In this guide, I will walk you through 12 proven dental SEO strategies that actually work. These are the same methods we use at Rank Flow Agency to help dental practices grow. No fluff. No theory. Just practical steps you can start using today.
            </p>
          </>
        ),
      },
      {
        id: 'google-business-profile',
        heading: '1. Optimize Your Google Business Profile',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/6812461/pexels-photo-6812461.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental clinic reception area with modern equipment, representing a Google Business Profile for a dental practice"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Your Google Business Profile is the most powerful tool for local SEO for dentists. It is the listing that appears on Google Maps and in the local pack — the top three results that show up when someone searches for a dentist nearby.
            </p>
            <h3>Why it matters</h3>
            <p>
              When someone searches "dentist near me," Google shows the local pack first. If your profile is incomplete or unoptimized, you will not appear there — and you will lose that patient to a competitor who does.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Choosing "Dentist" as your only category instead of specific categories like "Cosmetic Dentist" or "Emergency Dentist"</li>
              <li>Leaving fields empty — no services listed, no hours, no description</li>
              <li>Not adding photos of your office, team, and equipment</li>
              <li>Ignoring patient questions on the profile</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Go to business.google.com and claim your dental practice</li>
              <li>Choose the most specific primary category (e.g., "Cosmetic Dentist" rather than just "Dentist")</li>
              <li>Fill out every field: hours, phone, website, services, attributes like "wheelchair accessible"</li>
              <li>Write a 750-character description that includes your city, services, and what makes your practice unique</li>
              <li>Add at least 20 photos — your office, team, equipment, before/after smiles</li>
              <li>Post weekly updates about services, offers, or dental tips</li>
            </ul>
            <p>
              <em>Example:</em> A family dentist in Tampa updated their Google Business Profile from a generic "Dentist" category to "Family Dentist" and "Pediatric Dentist." They added 30 photos and started posting weekly. Within six weeks, they appeared in the Google Maps local pack for "family dentist in Tampa" and saw a 40% increase in calls.
            </p>
            <p>
              <strong>Pro Tip:</strong> Use Google Business Profile posts to highlight specific treatments like dental implants or teeth whitening. Each post acts like a mini landing page that can rank for service-specific searches.
            </p>
          </>
        ),
      },
      {
        id: 'local-dental-keywords',
        heading: '2. Target Local Dental Keywords',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/6627413/pexels-photo-6627413.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dentist examining a patient in a modern dental office, representing local dental keyword targeting"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Patients do not search for your practice by name — they search by service and location. "Dentist near me," "emergency dentist in Dallas," "teeth whitening in Austin." If your website does not include these local keywords, Google will not show you for those searches.
            </p>
            <h3>Why it matters</h3>
            <p>
              Local keywords tell Google exactly where you are and what you do. Without them, your website competes nationally — and you will never outrank national dental directories for broad terms like "dentist."
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using only "dentist" on every page with no location modifier</li>
              <li>Stuffing keywords unnaturally into content</li>
              <li>Targeting broad national terms instead of local ones</li>
              <li>Ignoring long-tail keywords like "same-day dental crowns in [city]"</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Use Google Keyword Planner or Ubersuggest to find local dental keywords</li>
              <li>Map each keyword to a specific page on your website</li>
              <li>Include your city and neighborhood in title tags, H1s, and meta descriptions</li>
              <li>Use keywords naturally in your page content — never force them</li>
              <li>Create location pages if you serve multiple areas</li>
            </ul>
            <p>
              <em>Example:</em> A dental implant clinic in Phoenix created a page titled "Dental Implants in Scottsdale, AZ." They used the keyword naturally in the H1, first paragraph, and image alt text. Within three months, the page ranked on page 1 for "dental implants Scottsdale."
            </p>
            <p>
              <strong>Pro Tip:</strong> Do not target the same keyword on multiple pages. Each page should target one primary keyword to avoid competing with yourself.
            </p>
          </>
        ),
      },
      {
        id: 'service-pages',
        heading: '3. Create Service Pages for Every Treatment',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/5355826/pexels-photo-5355826.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental implant model and tools on a clinic table, representing dental service pages for implants and treatments"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Many dental websites have one "Services" page that lists everything in a few bullet points. That is a missed opportunity. Each treatment you offer deserves its own dedicated page. This is one of the most effective dental website SEO strategies.
            </p>
            <h3>Why it matters</h3>
            <p>
              Google ranks pages, not websites. A dedicated page for "teeth whitening" can rank for "teeth whitening in [city]," while a generic services page will rank for nothing. Service pages also help patients find exactly what they are looking for.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Listing all services on a single page with one sentence each</li>
              <li>Using stock descriptions copied from other websites</li>
              <li>Not including pricing, process, or FAQs on service pages</li>
              <li>Forgetting to add a clear call-to-action for appointments</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>List every treatment you offer: implants, whitening, veneers, root canals, Invisalign, emergency care, etc.</li>
              <li>Create a separate page for each treatment (minimum 400 words)</li>
              <li>Include: what the treatment is, who it is for, the process, recovery time, and cost range</li>
              <li>Add 3-5 FAQs per service page to capture question-based searches</li>
              <li>Include a "Book Appointment" button on every service page</li>
            </ul>
            <p>
              <em>Example:</em> A cosmetic dentist in Miami created individual pages for veneers, Invisalign, teeth whitening, and dental bonding. Each page had 500+ words, FAQs, and before/after photos. Within four months, the veneers page ranked #1 for "porcelain veneers in Miami."
            </p>
            <p>
              <strong>Pro Tip:</strong> Add a "Related Treatments" section at the bottom of each service page with internal links. This keeps visitors browsing and helps Google crawl your site.
            </p>
          </>
        ),
      },
      {
        id: 'website-speed',
        heading: '4. Improve Website Speed',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3881292/pexels-photo-3881292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern dental clinic interior with dental chair and equipment, representing a fast-loading dental website"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Website speed is a confirmed Google ranking factor. If your dental website takes more than 3 seconds to load, patients leave. Google knows this and ranks slower websites lower. A fast website improves both your Google rankings and your conversion rate.
            </p>
            <h3>Why it matters</h3>
            <p>
              Studies show that pages taking longer than 3 seconds to load lose over half their visitors. For dental practices, that means more than half of potential patients leave before they even see your services.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using uncompressed hero images that are 5MB or larger</li>
              <li>Running too many plugins or scripts on WordPress</li>
              <li>Using cheap, slow shared hosting</li>
              <li>Not enabling browser caching or compression</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Test your speed with Google PageSpeed Insights (it is free)</li>
              <li>Compress all images to under 200KB each</li>
              <li>Enable GZIP compression and browser caching</li>
              <li>Remove unused WordPress plugins and themes</li>
              <li>Upgrade to faster hosting if your load time is over 4 seconds</li>
              <li>Use a caching plugin like WP Rocket or LiteSpeed Cache</li>
            </ul>
            <p>
              <em>Example:</em> A dental practice in Denver had a website that loaded in 6.8 seconds. After compressing images, removing 8 unused plugins, and enabling caching, load time dropped to 1.9 seconds. Their Google rankings improved within three weeks, and appointment form submissions increased by 28%.
            </p>
            <p>
              <strong>Pro Tip:</strong> Use WebP image format instead of JPEG or PNG. WebP files are 25-35% smaller with the same quality.
            </p>
          </>
        ),
      },
      {
        id: 'mobile-friendly',
        heading: '5. Make Your Website Mobile-Friendly',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/6502623/pexels-photo-6502623.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental chair in a modern clinic, representing a mobile-friendly dental website with easy navigation"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Over 60% of local searches happen on mobile phones. When someone searches "emergency dentist near me" on their phone, they need to find your phone number and address quickly. If your website is hard to use on mobile, they will bounce to a competitor.
            </p>
            <h3>Why it matters</h3>
            <p>
              Google uses mobile-first indexing. This means Google looks at the mobile version of your website first to decide rankings. If your mobile site is broken or slow, your rankings will suffer — even if your desktop site is perfect.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using tiny text that requires zooming to read</li>
              <li>Buttons and links too close together for finger taps</li>
              <li>No click-to-call button for the phone number</li>
              <li>Pop-ups that cover the entire mobile screen</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Test your site with Google's Mobile-Friendly Test tool</li>
              <li>Use a responsive theme that adapts to all screen sizes</li>
              <li>Make your phone number clickable (tel: links)</li>
              <li>Ensure font size is at least 16px on mobile</li>
              <li>Use a sticky header with a "Book Now" button always visible</li>
              <li>Remove full-screen pop-ups on mobile</li>
            </ul>
            <p>
              <em>Example:</em> A dental clinic in Seattle made their phone number clickable and added a sticky "Book Appointment" button on mobile. Mobile conversions (calls and form submissions) increased by 45% within one month.
            </p>
            <p>
              <strong>Pro Tip:</strong> Use Google's Chrome DevTools mobile emulator to test your website on different screen sizes. Every page should be easy to navigate with one thumb.
            </p>
          </>
        ),
      },
      {
        id: 'google-reviews',
        heading: '6. Collect More Google Reviews',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental patient receiving treatment in a clinic, representing Google reviews and patient testimonials for a dental practice"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Reviews are one of the top three ranking factors for local SEO. Dental practices with more reviews and higher ratings rank higher on Google Maps. Reviews also influence whether a patient chooses you over a competitor.
            </p>
            <h3>Why it matters</h3>
            <p>
              When patients see a dental practice with 200 reviews and a 4.8 rating next to one with 12 reviews and a 4.2 rating, they choose the one with more reviews. Reviews build trust — and Google rewards trust with higher rankings.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Never asking patients for reviews</li>
              <li>Only responding to positive reviews (respond to all)</li>
              <li>Buying fake reviews (Google catches and penalizes this)</li>
              <li>Not having a system to collect reviews consistently</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Ask for reviews at the right moment — right after a successful appointment</li>
              <li>Train your front desk staff to mention reviews when patients express satisfaction</li>
              <li>Send a follow-up email or text 24 hours after each appointment with a direct review link</li>
              <li>Place a QR code in your waiting room that links to your Google review page</li>
              <li>Respond to every review — thank happy patients and address concerns professionally</li>
            </ul>
            <p>
              <em>Example:</em> A dental practice in Chicago started sending review request texts after appointments. They went from 34 reviews to 210 reviews in five months. Their Google Maps ranking moved from page 2 to the local pack top 3.
            </p>
            <p>
              <strong>Pro Tip:</strong> Never offer incentives for reviews. Google prohibits paying or offering discounts in exchange for reviews and may remove your listing if caught.
            </p>
          </>
        ),
      },
      {
        id: 'local-citations',
        heading: '7. Build Local Citations',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/6812483/pexels-photo-6812483.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental clinic exterior with signage, representing local citations and directory listings for a dental practice"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Citations are mentions of your dental practice on other websites — directories like Yelp, Healthgrades, Doctor.com, and Apple Maps. Each citation includes your name, address, and phone number (NAP). Google uses these to verify your practice exists and is located where you say it is.
            </p>
            <h3>Why it matters</h3>
            <p>
              Consistent citations across the web build trust with Google. If your phone number is different on Yelp than on your website, Google gets confused and may rank you lower. Consistency is key.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Different phone numbers or addresses across directories</li>
              <li>Ignoring niche dental directories like Healthgrades or Zocdoc</li>
              <li>Duplicate listings on the same platform</li>
              <li>Not claiming listings that were auto-generated</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Search for your practice on Yelp, Healthgrades, Doctor.com, Bing Places, Apple Maps, and Facebook</li>
              <li>Claim each listing and update your NAP to match your Google Business Profile exactly</li>
              <li>Use the same format everywhere (e.g., "123 Main St" not "123 Main Street")</li>
              <li>Add photos and a description to each listing</li>
              <li>Check for duplicates and request removal of old listings</li>
            </ul>
            <p>
              <em>Example:</em> A dental clinic in Atlanta found that their old phone number was still listed on three directories. After updating all citations to match their current number, their Google Maps ranking improved within two weeks.
            </p>
            <p>
              <strong>Pro Tip:</strong> Use a service like BrightLocal or Whitespark to find and fix citation inconsistencies across 40+ directories at once.
            </p>
          </>
        ),
      },
      {
        id: 'dental-blog-content',
        heading: '8. Publish Helpful Dental Blog Content',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/4269682/pexels-photo-4269682.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental tools and instruments arranged in a clinic, representing dental blog content about oral health and treatments"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Most dental websites have no blog at all. That is a huge missed opportunity. Content marketing helps you rank for searches beyond just your service pages. Patients search for questions like "does teeth whitening hurt," "how much do dental implants cost," and "what to eat after wisdom tooth extraction."
            </p>
            <h3>Why it matters</h3>
            <p>
              Every blog post is a new opportunity to rank on Google. A dental practice with 30 blog posts has 30 chances to appear in search results. A practice with zero blog posts has only their service pages — and those are much harder to rank.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Writing about general topics instead of answering patient questions</li>
              <li>Copying content from other dental websites (Google penalizes duplicate content)</li>
              <li>Writing one blog post and then stopping</li>
              <li>Not linking blog posts to relevant service pages</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Make a list of 20 questions your patients ask you every week</li>
              <li>Write one blog post per week answering each question (800-1,200 words)</li>
              <li>Use a simple, friendly tone — write like you are talking to a patient in your chair</li>
              <li>Link each blog post to a relevant service page (e.g., a post about implants links to your implants page)</li>
              <li>Share your blog posts on social media and in your email newsletter</li>
            </ul>
            <p>
              <em>Example:</em> A dental practice in Austin started publishing weekly blog posts answering patient questions. After six months, their blog drove 1,500 monthly visitors. Many of those visitors booked appointments after reading the blog.
            </p>
            <p>
              <strong>Pro Tip:</strong> Use Google's "People Also Ask" feature to find questions patients are searching for. Type "dental implants" into Google and look at the questions that appear — each one is a blog post idea.
            </p>
          </>
        ),
      },
      {
        id: 'internal-linking',
        heading: '9. Improve Internal Linking',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/4687906/pexels-photo-4687906.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dentist consulting with a patient in a clinic, representing internal linking between dental service pages and blog posts"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Internal linking is one of the most underrated dental SEO strategies. It means linking from one page on your website to another. When you link from a blog post about teeth whitening to your teeth whitening service page, you help Google understand the relationship between those pages.
            </p>
            <h3>Why it matters</h3>
            <p>
              Internal links help Google crawl and understand your website. They also keep visitors on your site longer. A patient reading a blog post about Invisalign should be able to click directly to your Invisalign service page — not hunt for it in the menu.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using "click here" as anchor text instead of descriptive keywords</li>
              <li>Only linking from the navigation menu, not within content</li>
              <li>Having orphaned pages that no other page links to</li>
              <li>Linking to the same page 10 times from one article</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Review your top pages and find natural linking opportunities</li>
              <li>Use descriptive anchor text like "our teeth whitening services" not "click here"</li>
              <li>Link from blog posts to relevant service pages (and vice versa)</li>
              <li>Ensure every page has at least 2 internal links pointing to it</li>
              <li>Add a "Related Articles" section at the bottom of each blog post</li>
            </ul>
            <p>
              <em>Example:</em> A dental practice in Portland added internal links from their blog posts to their service pages. The service pages started ranking higher because Google understood them better. Organic traffic to service pages increased by 35% in two months.
            </p>
            <p>
              <strong>Pro Tip:</strong> Use a plugin like Yoast SEO (WordPress) to see which pages have no internal links pointing to them. Fix those orphaned pages first.
            </p>
          </>
        ),
      },
      {
        id: 'title-tags-meta',
        heading: '10. Optimize Title Tags & Meta Descriptions',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/6627447/pexels-photo-6627447.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental professional examining tools in a modern clinic, representing optimized title tags and meta descriptions for dental SEO"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Title tags and meta descriptions are what appear in Google search results. They are the first thing a potential patient sees before they click. If they are boring or generic, people will skip your listing — even if you rank #1.
            </p>
            <h3>Why it matters</h3>
            <p>
              A well-written title tag can dramatically increase your click-through rate. More clicks tell Google your result is relevant, which can improve your ranking. Meta descriptions do not directly affect rankings, but they influence whether people click.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using "Home" or "Services" as title tags</li>
              <li>Not including your city or service keywords</li>
              <li>Writing meta descriptions that are too long or too short</li>
              <li>Duplicating the same title tag across multiple pages</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Write unique title tags for every page (under 60 characters)</li>
              <li>Format: Primary Keyword + City | Practice Name. Example: "Teeth Whitening in Miami | Bright Dental"</li>
              <li>Write meta descriptions of 150-160 characters that include a call-to-action</li>
              <li>Example: "Get professional teeth whitening in Miami at Bright Dental. Safe, fast, and affordable. Book your appointment today!"</li>
              <li>Use Yoast SEO or Rank Math to preview how your title and description will look in Google</li>
            </ul>
            <p>
              <em>Example:</em> A dental practice in Houston changed their homepage title from "Welcome to Smith Dental" to "Best Dentist in Houston TX | Smith Dental Care." Click-through rate from Google increased by 31% within two weeks.
            </p>
            <p>
              <strong>Pro Tip:</strong> Include your phone number in the meta description for service pages. Some patients call directly from the search results without even clicking through to your website.
            </p>
          </>
        ),
      },
      {
        id: 'local-backlinks',
        heading: '11. Earn High-Quality Local Backlinks',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/6812569/pexels-photo-6812569.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern dental office with advanced equipment, representing local backlinks for dental SEO through community partnerships"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Backlinks are links from other websites to yours. Google treats them like votes of confidence. The more high-quality websites link to your dental practice, the more Google trusts you — and the higher you rank.
            </p>
            <h3>Why it matters</h3>
            <p>
              Backlinks remain one of Google's top ranking factors. But not all backlinks are equal. A link from your local dental association is worth more than 50 links from random spam directories. Quality beats quantity.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Buying cheap backlinks from Fiverr (Google penalizes this)</li>
              <li>Getting links from irrelevant websites (a link from a gardening blog does not help a dentist)</li>
              <li>Ignoring local partnership opportunities</li>
              <li>Not checking which sites already link to competitors</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Get listed in your state or national dental association directory</li>
              <li>Sponsor a local sports team, school, or charity and ask for a link on their website</li>
              <li>Partner with local businesses (orthodontists, pharmacies, gyms) for mutual referrals and links</li>
              <li>Write guest posts for local health blogs or community websites</li>
              <li>Use a tool like Ahrefs or Ubersuggest to see which sites link to your competitors and reach out to them</li>
            </ul>
            <p>
              <em>Example:</em> A dental practice in Nashville sponsored a local Little League team and got a link from the league's website. They also joined the Tennessee Dental Association and got a directory link. These two local backlinks helped them rank in the top 3 for "dentist in Nashville" within four months.
            </p>
            <p>
              <strong>Pro Tip:</strong> Focus on local relevance. A link from your city's chamber of commerce is worth more than 10 links from websites in other countries.
            </p>
          </>
        ),
      },
      {
        id: 'google-search-console',
        heading: '12. Track SEO Performance with Google Search Console',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/8260438/pexels-photo-8260438.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental clinic with modern technology and equipment, representing Google Search Console tracking for dental SEO performance"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You cannot improve what you do not measure. Google Search Console is a free tool that shows you exactly how your dental website is performing on Google. It tells you which searches bring you traffic, which pages rank, and what issues need fixing.
            </p>
            <h3>Why it matters</h3>
            <p>
              Without tracking, you are guessing. Google Search Console shows you which keywords are working, which pages need improvement, and whether Google can properly crawl your site. It is the most important free tool for dental SEO.
            </p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Not setting up Google Search Console at all</li>
              <li>Never checking the Performance report for keyword opportunities</li>
              <li>Ignoring coverage and indexing errors</li>
              <li>Not submitting an XML sitemap</li>
            </ul>
            <h3>Step-by-step implementation</h3>
            <ul>
              <li>Go to search.google.com/search-console and add your website</li>
              <li>Verify ownership (Google gives you several methods)</li>
              <li>Submit your XML sitemap</li>
              <li>Check the Performance report weekly to see which keywords drive traffic</li>
              <li>Look for keywords where you rank on page 2 (positions 11-20) and optimize those pages to move to page 1</li>
              <li>Check the Coverage report for indexing errors and fix them</li>
            </ul>
            <p>
              <em>Example:</em> A dental clinic in Orlando found through Google Search Console that they ranked #14 for "affordable dental implants in Orlando." They optimized that page with more content and internal links. Within six weeks, the page moved to #4, bringing in 80+ new visitors per month.
            </p>
            <p>
              <strong>Pro Tip:</strong> Connect Google Search Console to Google Analytics. This gives you a complete picture — which searches bring visitors and what those visitors do on your site.
            </p>
          </>
        ),
      },
      {
        id: 'comparison-table',
        heading: 'Dental SEO vs. Dental Ads: Which Is Better?',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/7800666/pexels-photo-7800666.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental team in a modern clinic, comparing dental SEO versus paid ads for long-term practice growth"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Many dentists wonder whether they should invest in SEO or paid ads. Both have their place, but they work very differently. Here is a comparison to help you decide:
            </p>
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-left font-semibold text-white">Factor</th>
                    <th className="py-3 pr-4 text-left font-semibold text-white">Dental SEO</th>
                    <th className="py-3 text-left font-semibold text-white">Dental Paid Ads</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Cost over time</td>
                    <td className="py-3 pr-4 text-brand-300">Decreases (traffic is free once ranking)</td>
                    <td className="py-3">Increases (pay per click forever)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Time to results</td>
                    <td className="py-3 pr-4">3-6 months</td>
                    <td className="py-3 text-brand-300">Immediate</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Traffic after stopping</td>
                    <td className="py-3 pr-4 text-brand-300">Continues for months or years</td>
                    <td className="py-3">Stops immediately</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Click-through rate</td>
                    <td className="py-3 pr-4 text-brand-300">Higher (organic results trusted more)</td>
                    <td className="py-3">Lower (many users skip ads)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Trust and credibility</td>
                    <td className="py-3 pr-4 text-brand-300">Builds long-term authority</td>
                    <td className="py-3">No lasting authority</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Best for</td>
                    <td className="py-3 pr-4 text-brand-300">Long-term practice growth</td>
                    <td className="py-3">Short-term patient boosts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The smartest dental practices use both — ads for immediate patients while SEO builds, then reduce ads as SEO traffic grows. But if you can only choose one for long-term growth, SEO wins every time.
            </p>
          </>
        ),
      },
      {
        id: 'seo-checklist',
        heading: 'Your Dental SEO Action Checklist',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/4687254/pexels-photo-4687254.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental professional working in a clinic, representing a dental SEO action checklist for practice growth"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Here is a quick checklist you can print and work through. Each item moves you closer to ranking on Google and getting more dental patients:
            </p>
            <ul>
              <li>Claim and fully optimize your Google Business Profile</li>
              <li>Choose specific categories (Cosmetic Dentist, Emergency Dentist, Family Dentist)</li>
              <li>Add 20+ photos to your Google Business Profile</li>
              <li>Research and map local dental keywords to website pages</li>
              <li>Create a dedicated service page for every treatment</li>
              <li>Include 3-5 FAQs on each service page</li>
              <li>Test website speed with Google PageSpeed Insights</li>
              <li>Compress all images to under 200KB</li>
              <li>Test mobile-friendliness with Google's Mobile-Friendly Test</li>
              <li>Add a clickable phone number and sticky "Book Now" button on mobile</li>
              <li>Set up a review collection system (email or text after appointments)</li>
              <li>Respond to every Google review (positive and negative)</li>
              <li>Claim and update listings on Yelp, Healthgrades, Bing Places, and Apple Maps</li>
              <li>Publish one helpful blog post per week answering patient questions</li>
              <li>Add internal links from blog posts to service pages</li>
              <li>Write unique title tags and meta descriptions for every page</li>
              <li>Get listed in your state dental association directory</li>
              <li>Sponsor a local organization and earn a local backlink</li>
              <li>Set up Google Search Console and submit your sitemap</li>
              <li>Check Search Console weekly for keyword opportunities and errors</li>
            </ul>
            <p>
              Work through this list one item at a time. Even completing half of these will put you ahead of most dental practices in your area.
            </p>
          </>
        ),
      },
      {
        id: 'conclusion',
        heading: 'Grow Your Dental Practice with SEO That Lasts',
        body: (
          <>
            <p>
              Getting more dental patients from Google is not about luck. It is about doing the right things consistently. The 12 strategies in this guide are proven to work for dental practices of all sizes.
            </p>
            <p>
              Start with your Google Business Profile — that alone will put you ahead of most competitors. Then create service pages, collect reviews, publish helpful content, and fix technical issues. Each step compounds. In 3-6 months, you will see more organic traffic, more calls, and more new patients booking appointments.
            </p>
            <p>
              But SEO takes time and consistency. If you are running a dental practice, you already have a full-time job. You should not have to become an SEO expert too.
            </p>
            <p>
              That is where Rank Flow Agency comes in. We specialize in dental SEO and dental clinic marketing. We handle everything — your Google Business Profile, website optimization, content creation, review generation, local citations, and technical SEO. Our goal is simple: help you get more dental patients from Google so you can focus on providing great care.
            </p>
            <p>
              <strong>Want to know exactly why your dental practice is not ranking on Google?</strong> <a href="#/contact">Get a free dental SEO audit from Rank Flow Agency today.</a> We will identify every issue and give you a clear, step-by-step plan to grow your practice.
            </p>
            <p>
              For more insights, check out our guides on <a href="#/blog/why-is-my-website-not-ranking-on-google">why your website is not ranking on Google</a> and <a href="#/blog/why-competitors-ranking-higher-on-google">why competitors are ranking higher on Google</a>.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: 'How long does dental SEO take to show results?',
        a: 'Most dental practices see noticeable improvements in Google rankings within 3-6 months of consistent SEO work. Some changes — like optimizing your Google Business Profile — can show results in 2-4 weeks. Long-term ranking gains typically compound over 6-12 months.',
      },
      {
        q: 'Do I need a new website for dental SEO to work?',
        a: 'Not necessarily. If your current website is mobile-friendly and reasonably fast, you can optimize it for SEO without rebuilding. However, if your site is outdated, slow, or not mobile-responsive, a new website will significantly improve your SEO results.',
      },
      {
        q: 'How much does dental SEO cost?',
        a: 'Dental SEO costs vary depending on your location, competition, and the scope of work. Most reputable dental SEO agencies charge between $1,000 and $3,000 per month. The return on investment is typically much higher than paid advertising over the long term.',
      },
      {
        q: 'Can I do dental SEO myself or do I need an agency?',
        a: 'You can start with basic steps like claiming your Google Business Profile, collecting reviews, and optimizing title tags. However, dental SEO requires ongoing work — content creation, technical optimization, link building, and performance tracking. Most busy dentists benefit from hiring an agency to handle it.',
      },
      {
        q: 'What is the most important dental SEO strategy?',
        a: 'Optimizing your Google Business Profile is the single most impactful step. It directly affects your Google Maps ranking and local pack visibility. If you only do one thing, claim and fully optimize your Google Business Profile with specific categories, photos, and regular posts.',
      },
    ],
  },
  'why-is-my-restaurant-not-showing-up-on-google': {
    sections: [
      {
        id: 'introduction',
        heading: 'Why Is My Restaurant Not Showing Up on Google?',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Restaurant owner looking at phone wondering why their restaurant is not showing up on Google Search"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You poured your heart into your restaurant. The food is great. The service is warm. The atmosphere is exactly what your neighborhood needed. But every time someone searches "restaurant near me" on Google, your place is nowhere to be found.
            </p>
            <p>
              Instead, you watch competitors with worse food and higher prices show up at the top of Google Maps. You see them get the reservations, the foot traffic, the online orders — while your tables sit half empty on a Friday night.
            </p>
            <p>
              It is frustrating. It is unfair. And if you do not know how local SEO works, it feels impossible to fix.
            </p>
            <p>
              Here is the good news: getting your restaurant to show up on Google is not magic. It is a system. And once you understand how that system works, you can start ranking higher, getting found by more customers, and filling more tables — without paying for ads.
            </p>
            <p>
              In this guide, I will walk you through 11 proven fixes for restaurant Google ranking. Whether you are a new restaurant just starting out or an established spot that has been invisible on Google for years, these steps will help you improve your online visibility and get more customers through your doors.
            </p>
          </>
        ),
      },
      {
        id: 'google-business-profile',
        heading: '1. Claim and Optimize Your Google Business Profile',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/4252130/pexels-photo-4252130.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Google Business Profile dashboard being optimized for restaurant local SEO with complete business information"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Your Google Business Profile (formerly Google My Business) is the single most important factor in local SEO for restaurants. It is the listing that appears on Google Maps and in the local pack — the top three results that show up when someone searches for a restaurant nearby.
            </p>
            <p>
              If you have not claimed your profile, Google may have created one automatically using publicly available data. That auto-generated profile is often incomplete, inaccurate, and unoptimized. Claiming it gives you control.
            </p>
            <h3>How to optimize your Google Business Profile</h3>
            <ul>
              <li><strong>Verify your ownership.</strong> Go to business.google.com, search for your restaurant, and follow the verification process (usually a postcard with a code arrives in 1-2 weeks).</li>
              <li><strong>Fill out every field.</strong> Hours, phone number, website URL, menu link, reservation link, attributes like "outdoor seating" or "family-friendly" — fill in everything Google asks for.</li>
              <li><strong>Choose the right primary category.</strong> "Restaurant" is too broad. Be specific: "Italian Restaurant," "Sushi Restaurant," "Mexican Restaurant." This single choice affects which searches you appear in.</li>
              <li><strong>Write a compelling description.</strong> Use 750 characters to describe your food, atmosphere, and what makes you unique. Include keywords naturally — do not stuff them.</li>
              <li><strong>Add photos regularly.</strong> Restaurants with 100+ photos get significantly more direction requests and calls than those with fewer than 10.</li>
            </ul>
            <p>
              <em>Example:</em> A family-owned Thai restaurant in Austin was not showing up in local searches at all. After claiming their Google Business Profile, selecting "Thai Restaurant" as their category, and adding 40 photos of their dishes and dining room, they appeared in the Google Maps local pack within three weeks. Calls for reservations increased by 35%.
            </p>
          </>
        ),
      },
      {
        id: 'nap-consistency',
        heading: '2. Fix Your NAP Citations Across the Web',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3214788/pexels-photo-3214788.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Local business directory listings showing consistent NAP information for restaurant local SEO"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              NAP stands for Name, Address, and Phone number. Google uses these citations across the web to verify your restaurant's existence and location. If your NAP is inconsistent — different phone numbers on Yelp, Facebook, and your website — Google loses trust and may rank you lower.
            </p>
            <h3>How to fix your NAP citations</h3>
            <ul>
              <li>Search for your restaurant on Yelp, TripAdvisor, Facebook, Apple Maps, Bing Places, and Yellow Pages.</li>
              <li>Claim each listing and update the name, address, and phone number to match your Google Business Profile exactly.</li>
              <li>Use the exact same format everywhere. If your Google profile says "123 Main St," do not write "123 Main Street" elsewhere.</li>
              <li>Check for duplicate listings and request removal of any old or closed listings.</li>
            </ul>
            <p>
              <em>Example:</em> A burger joint in Chicago had two different phone numbers listed online — their old landline and their new mobile. Google saw conflicting data and demoted their listing. After updating all citations to the correct number, their Google Maps ranking improved within two weeks.
            </p>
          </>
        ),
      },
      {
        id: 'on-page-seo',
        heading: '3. Optimize Your Restaurant Website for SEO',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Restaurant website being optimized for SEO with menu pages and local keywords"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Many restaurants do not have a website at all. Others have a single-page site with a PDF menu and nothing else. Neither helps you rank on Google. Restaurant website SEO is about creating pages that Google can understand and rank for local searches.
            </p>
            <h3>Essential pages for restaurant website SEO</h3>
            <ul>
              <li><strong>Homepage:</strong> Include your restaurant name, cuisine type, city, and neighborhood in the title tag and H1. Example: "Best Italian Restaurant in Downtown Seattle | Marco's Trattoria"</li>
              <li><strong>Menu page:</strong> Use text, not a PDF. Google cannot read PDFs well. Include dish names, descriptions, and prices as HTML text.</li>
              <li><strong>About page:</strong> Tell your story. Google values unique, original content. A 300-word about page helps.</li>
              <li><strong>Contact page:</strong> Include your full address, phone number, hours, and an embedded Google Map.</li>
              <li><strong>Location/neighborhood page:</strong> Create a page targeting your area. Example: "Italian Restaurant in Capitol Hill, Seattle."</li>
            </ul>
            <p>
              <em>Example:</em> A pizza restaurant in Brooklyn replaced their PDF menu with an HTML text menu page. Within six weeks, they started ranking for searches like "best pepperoni pizza in Brooklyn" and "pizza delivery near me" in their neighborhood.
            </p>
          </>
        ),
      },
      {
        id: 'reviews',
        heading: '4. Get More Google Reviews (And Respond to All of Them)',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3775535/pexels-photo-3775535.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Google reviews and star ratings on a phone showing customer feedback for a restaurant"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Reviews are one of the top three ranking factors for local SEO. Restaurants with more reviews and higher ratings rank higher on Google Maps. But it is not just about quantity — Google also looks at how recent your reviews are and whether you respond to them.
            </p>
            <h3>How to get more Google reviews</h3>
            <ul>
              <li><strong>Ask at the right moment.</strong> Train your staff to ask for a review when customers express satisfaction — right after a great meal, not at the end of a rushed bill.</li>
              <li><strong>Use a QR code.</strong> Place a QR code on your check presenter or receipt that links directly to your Google review page.</li>
              <li><strong>Follow up by email.</strong> If you take online orders, send a follow-up email 24 hours later asking for a review with a direct link.</li>
              <li><strong>Respond to every review.</strong> Thank happy customers by name. For negative reviews, apologize professionally and offer to make it right. Google sees active engagement as a positive signal.</li>
            </ul>
            <p>
              <em>Example:</em> A sushi restaurant in Miami started placing QR codes on their tables linking to their Google review page. They went from 23 reviews to 187 reviews in four months. Their Google Maps ranking jumped from page 3 to the local pack (top 3).
            </p>
          </>
        ),
      },
      {
        id: 'local-keywords',
        heading: '5. Target Local Keywords on Your Website',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Local keyword research for restaurant SEO showing searches like best restaurant near me and food nearby"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              People do not search for your restaurant by name — they search by cuisine and location. "Best tacos near me," "Italian restaurant in downtown," "brunch in Austin." If your website does not include these local keywords, Google will not show you for those searches.
            </p>
            <h3>Where to use local keywords</h3>
            <ul>
              <li><strong>Title tags:</strong> "Best Tacos in East Austin | El Paso Taco Co."</li>
              <li><strong>Meta descriptions:</strong> "Looking for authentic street tacos in East Austin? Visit El Paso Taco Co. for fresh, handmade tacos daily."</li>
              <li><strong>Page headings:</strong> Use H2 and H3 tags with local keywords like "Our East Austin Taco Menu."</li>
              <li><strong>Image alt text:</strong> "Carne asada tacos at El Paso Taco Co. in East Austin."</li>
              <li><strong>URL slugs:</strong> /east-austin-taco-menu instead of /page-3.</li>
            </ul>
            <p>
              <em>Example:</em> A breakfast spot in Portland added a page titled "Best Brunch in Pearl District, Portland." Within two months, they ranked on page 1 for "brunch in Pearl District" and "breakfast near me" in that neighborhood.
            </p>
          </>
        ),
      },
      {
        id: 'website-speed-mobile',
        heading: '6. Make Your Website Fast and Mobile-Friendly',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Mobile-friendly restaurant website loading fast on a smartphone showing menu and reservation options"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Over 60% of restaurant searches happen on mobile phones. If your website takes more than 3 seconds to load, most people will leave. Google also uses mobile page speed as a ranking factor — slow sites rank lower.
            </p>
            <h3>Quick wins for speed and mobile</h3>
            <ul>
              <li>Compress all images. A 5MB hero photo should be under 300KB.</li>
              <li>Use a mobile-responsive theme. Test it on Google's Mobile-Friendly Test tool.</li>
              <li>Remove unused plugins and scripts.</li>
              <li>Use a fast hosting provider.</li>
              <li>Enable browser caching so returning visitors load faster.</li>
            </ul>
            <p>
              <em>Example:</em> A steakhouse in Denver had a website that took 7 seconds to load on mobile. After compressing images and removing three unused plugins, load time dropped to 2.1 seconds. Their bounce rate fell from 68% to 41%, and Google rankings improved within a month.
            </p>
          </>
        ),
      },
      {
        id: 'schema-markup',
        heading: '7. Add Restaurant Schema Markup to Your Website',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Schema markup code being added to a restaurant website for rich snippets in Google Search results"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Schema markup is a type of code that helps Google understand your website better. For restaurants, it lets Google display rich snippets — like your menu, price range, hours, and star ratings — directly in search results. These snippets make your listing more attractive and increase click-through rates.
            </p>
            <p>
              You do not need to be a developer to add schema. Use Google's Structured Data Markup Helper or a WordPress plugin like Yoast Local SEO. The key fields to include are:
            </p>
            <ul>
              <li>Restaurant name, address, and phone number</li>
              <li>Opening hours for each day</li>
              <li>Price range (e.g., $)</li>
              <li>Cuisine type</li>
              <li>Menu URL</li>
              <li>Reservation URL</li>
              <li>Aggregate rating (if you have reviews on your site)</li>
            </ul>
            <p>
              <em>Example:</em> A Mediterranean restaurant in Los Angeles added restaurant schema markup to their homepage. Their Google search listing started showing their price range ($) and hours directly in results. Click-through rate from Google Search increased by 22%.
            </p>
          </>
        ),
      },
      {
        id: 'content-marketing',
        heading: '8. Create Local Content That Attracts Organic Traffic',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Restaurant blog content marketing strategy showing local food guides and neighborhood articles"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Most restaurant websites have zero blog content. That is a missed opportunity. Content marketing helps you rank for searches beyond just your restaurant name. People search for "best pizza in [city]," "where to eat in [neighborhood]," and "date night restaurants in [area]." If you create content around these searches, you can capture that organic traffic.
            </p>
            <h3>Content ideas for restaurants</h3>
            <ul>
              <li>"Top 5 Date Night Restaurants in [Your Neighborhood]" (feature yourself and others)</li>
              <li>"The History of [Your Cuisine] in [Your City]"</li>
              <li>"How to Choose the Best Wine for Italian Food" (educational content)</li>
              <li>"What Makes Our [Signature Dish] Special" (behind-the-scenes story)</li>
              <li>"A Local's Guide to Eating in [Your Neighborhood]"</li>
            </ul>
            <p>
              <em>Example:</em> A ramen shop in San Francisco started writing monthly blog posts about Japanese food culture and neighborhood dining guides. After five months, their blog posts were driving 1,200 monthly visitors — many of whom discovered the restaurant through the blog and became regular customers.
            </p>
            <p>
              For more content marketing strategies, check out our guide on <a href="#/blog/seo-strategy-that-actually-works">SEO strategy that actually works</a>.
            </p>
          </>
        ),
      },
      {
        id: 'social-media',
        heading: '9. Use Social Media to Boost Your Local Search Presence',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Restaurant social media marketing on Instagram showing food photos and customer engagement"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Social media is not a direct Google ranking factor, but it supports your local SEO in two important ways. First, social profiles often rank on Google themselves — your Instagram or Facebook page can show up when people search for your restaurant. Second, social media drives traffic to your website, which Google interprets as a sign of popularity.
            </p>
            <h3>How restaurants should use social media for local SEO</h3>
            <ul>
              <li>Post photos of your dishes on Instagram with location tags and local hashtags.</li>
              <li>Share customer photos and tag them (with permission).</li>
              <li>Post your daily specials on Facebook and Instagram Stories.</li>
              <li>Link your social profiles back to your website.</li>
              <li>Engage with local food bloggers and influencers in your area.</li>
            </ul>
            <p>
              <em>Example:</em> A taco truck in Austin posted daily specials on Instagram with the hashtag #AustinTacos. A local food blogger found them through the hashtag, visited, and wrote a review. That review linked to their website, which helped their Google ranking. Within three months, they were in the Google Maps local pack for "tacos near me" in their area.
            </p>
          </>
        ),
      },
      {
        id: 'comparison-table',
        heading: '10. Compare Your Online Presence Against Competitors',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Competitor analysis dashboard comparing restaurant online visibility and Google rankings"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You cannot fix what you do not measure. Search for your top competitors on Google Maps and compare their online presence to yours. Look at their reviews, photos, website quality, and Google Business Profile completeness. This comparison will show you exactly where you are falling behind.
            </p>
            <h3>Restaurant local SEO: You vs. Competitors</h3>
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-left font-semibold text-white">Factor</th>
                    <th className="py-3 pr-4 text-left font-semibold text-white">Your Restaurant</th>
                    <th className="py-3 text-left font-semibold text-white">Top Competitor</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Google reviews</td>
                    <td className="py-3 pr-4">12</td>
                    <td className="py-3 text-brand-300">347</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Average rating</td>
                    <td className="py-3 pr-4">4.2</td>
                    <td className="py-3 text-brand-300">4.7</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Profile photos</td>
                    <td className="py-3 pr-4">8</td>
                    <td className="py-3 text-brand-300">120+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Website</td>
                    <td className="py-3 pr-4">No website</td>
                    <td className="py-3 text-brand-300">Mobile-optimized</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Menu format</td>
                    <td className="py-3 pr-4">PDF only</td>
                    <td className="py-3 text-brand-300">HTML text</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Posts per week</td>
                    <td className="py-3 pr-4">0</td>
                    <td className="py-3 text-brand-300">3-4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Once you see the gap, you know exactly what to fix. Start with the biggest gap first — usually reviews and photos — and work your way down the list.
            </p>
            <p>
              <em>Example:</em> A coffee shop in Seattle compared their profile to the top-ranked cafe in their neighborhood. They had 15 photos vs. the competitor's 200. They started adding 5 photos per week. After two months, they moved from page 2 to the bottom of the local pack. After four months, they were in the top 3.
            </p>
          </>
        ),
      },
      {
        id: 'technical-seo',
        heading: '11. Fix Technical SEO Issues Holding You Back',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Technical SEO audit for restaurant website showing crawl errors and indexing issues in Google Search Console"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Technical SEO is the behind-the-scenes work that helps Google crawl and index your website. If your site has technical issues, Google may not rank your pages — even if your content is great. Run a free audit using Google Search Console or a tool like Screaming Frog.
            </p>
            <h3>Common technical SEO issues for restaurant websites</h3>
            <ul>
              <li><strong>Missing title tags and meta descriptions</strong> — Google does not know what your pages are about.</li>
              <li><strong>Duplicate content</strong> — Multiple pages with the same text confuse Google.</li>
              <li><strong>Broken links</strong> — Links to deleted menu pages or old URLs create 404 errors.</li>
              <li><strong>No XML sitemap</strong> — Google may miss important pages on your site.</li>
              <li><strong>Missing SSL certificate</strong> — HTTP sites are ranked lower than HTTPS sites.</li>
              <li><strong>Blocked by robots.txt</strong> — A misconfigured file can block Google from indexing your site entirely.</li>
            </ul>
            <p>
              <em>Example:</em> A family restaurant in Phoenix had a beautiful website but was not ranking anywhere. An SEO audit revealed their robots.txt file was accidentally blocking Google from indexing all pages. After removing the block, their site was indexed within one week and started appearing in local searches.
            </p>
            <p>
              For a deeper dive, read our guide on <a href="#/blog/why-is-my-website-not-ranking-on-google">why your website is not ranking on Google</a> and our analysis of <a href="#/blog/why-competitors-ranking-higher-on-google">why competitors are ranking higher on Google</a>.
            </p>
          </>
        ),
      },
      {
        id: 'conclusion',
        heading: 'Get Found by More Customers Starting Today',
        body: (
          <>
            <p>
              Your restaurant deserves to be seen. The food is great, the service is warm, and your customers love what you do. But none of that matters if people cannot find you on Google.
            </p>
            <p>
              The 11 fixes in this guide — from optimizing your Google Business Profile to fixing technical SEO issues — are proven to improve your restaurant Google ranking. You do not need to do all 11 today. Start with claiming and optimizing your Google Business Profile. That alone will put you ahead of most restaurants in your area.
            </p>
            <p>
              Then work through the list. Get more reviews. Fix your website. Add local keywords. Create content. Each step compounds, and over 3-6 months, you will see more organic traffic, more calls, more reservations, and more customers walking through your door.
            </p>
            <p>
              But if you do not have time to do all of this yourself — and most restaurant owners do not — that is where Rank Flow Agency comes in. We specialize in local SEO for restaurants. We handle your Google Business Profile, website optimization, review generation, content marketing, and technical SEO — so you can focus on what you do best: making great food.
            </p>
            <p>
              <strong>Want to know exactly why your restaurant is not showing up on Google?</strong> <a href="#/contact">Get a free local SEO audit from Rank Flow Agency today.</a> We will identify every issue and give you a clear, prioritized plan to get your restaurant found by more customers.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: 'Why is my restaurant not showing up on Google Maps?',
        a: 'The most common reason is an unclaimed or incomplete Google Business Profile. Other causes include inconsistent NAP citations across the web, few Google reviews, no website, and technical SEO issues. Claim your profile, fill out every field, and start collecting reviews to improve your Google Maps ranking.',
      },
      {
        q: 'How long does it take for my restaurant to show up on Google?',
        a: 'After claiming and optimizing your Google Business Profile, you can appear in local searches within 1-2 weeks. Significant ranking improvements typically take 3-6 months of consistent effort — adding photos, collecting reviews, and optimizing your website.',
      },
      {
        q: 'How many Google reviews do I need to rank higher?',
        a: 'There is no exact number, but restaurants in the Google Maps local pack (top 3) typically have 100+ reviews with an average rating of 4.3 or higher. Aim for at least 5 new reviews per month to stay competitive.',
      },
      {
        q: 'Do I need a website for my restaurant to rank on Google?',
        a: 'You can appear on Google Maps with just a Google Business Profile, but having a website significantly improves your ranking. Google favors businesses with websites, and a website lets you rank for searches beyond just your restaurant name.',
      },
      {
        q: 'What is the best category for my restaurant on Google Business Profile?',
        a: 'Choose the most specific category that describes your cuisine. "Italian Restaurant" is better than "Restaurant." "Sushi Restaurant" is better than "Japanese Restaurant." The right category determines which searches you appear in.',
      },
    ],
  },
  'how-to-get-sales-on-shopify-without-ads': {
    sections: [
      {
        id: 'introduction',
        heading: 'Getting Traffic But No Sales on Shopify? You Are Not Alone',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/4219989/pexels-photo-4219989.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Shopify store owner looking at laptop with low sales dashboard and feeling frustrated"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You built your Shopify store. You picked the products. You spent hours designing the layout. And when you finally launched, you waited for the sales to roll in. But they did not. Your traffic is low, your conversion rate is worse, and you are watching competitors rack up reviews while your store sits in silence.
            </p>
            <p>
              Maybe you tried running ads. Maybe you burned through a hundred dollars on Facebook ads with nothing to show for it. Or maybe you simply do not have the budget to pour money into paid ads right now. Either way, you are stuck. You know your products are good. You know people would buy them if they could just find your store. But you do not know how to make that happen without spending money you do not have.
            </p>
            <p>
              Here is the truth: ads are not the only way to get Shopify sales. In fact, many successful Shopify stores get most of their revenue from organic traffic, email marketing, and word-of-mouth. These channels are free. They just take time, effort, and the right strategy.
            </p>
            <p>
              In this guide, I will show you exactly how to increase Shopify sales without spending a single dollar on ads. We will cover Shopify SEO, email marketing, social media, content marketing, and Shopify conversion optimization. By the end, you will have a clear, practical plan to turn your struggling store into a revenue-generating machine.
            </p>
          </>
        ),
      },
      {
        id: 'shopify-seo-foundation',
        heading: '1. Master Shopify SEO to Get Free Organic Traffic',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Shopify SEO optimization showing product pages ranking on Google search results"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              If your Shopify store does not show up on Google, you are invisible to the people who are actively searching for your products. Shopify SEO is the process of optimizing your store so Google ranks your product pages higher in search results. Higher Google rankings mean more organic traffic. And organic traffic is free.
            </p>
            <p>
              The beauty of SEO is that it compounds over time. Unlike ads, where you pay for every click, SEO traffic keeps coming month after month without additional cost. Once your product pages start ranking, they can drive sales for years.
            </p>
            <h3>Product page SEO: The foundation of Shopify SEO</h3>
            <p>
              Every product page is an opportunity to rank on Google. But most Shopify store owners waste that opportunity. They use manufacturer descriptions, generic titles, and image filenames like "IMG_4032.jpg." Google sees these pages as thin and not worth ranking.
            </p>
            <p>
              Here is how to fix your product page SEO:
            </p>
            <ul>
              <li><strong>Write unique product descriptions.</strong> Do not copy what the manufacturer wrote. Explain the benefits in your own words. Aim for 200+ words per product.</li>
              <li><strong>Optimize your title tags.</strong> Include your target keyword naturally. For example, "Red Leather Running Shoes | Brand Name" is better than just "Running Shoes."</li>
              <li><strong>Use clean URLs.</strong> Shopify auto-generates URLs, but you can edit them. Keep them short and keyword-rich: "/products/red-leather-running-shoes" not "/products/2024-new-arrival-style-12345".</li>
              <li><strong>Add alt text to every product image.</strong> Describe what the image shows using keywords. This helps Google understand your images and can drive traffic from Google Images.</li>
              <li><strong>Add product schema markup.</strong> This lets Google display rich snippets like price, availability, and reviews directly in search results.</li>
            </ul>
            <h3>Technical SEO: Fix the hidden issues holding you back</h3>
            <p>
              Technical SEO is the behind-the-scenes work that helps Google crawl and index your store. If your store has technical issues, Google may not rank your pages even if your content is great.
            </p>
            <p>
              Common technical SEO issues on Shopify stores include:
            </p>
            <ul>
              <li><strong>Duplicate content</strong> from product variants creating multiple URLs for the same product.</li>
              <li><strong>Slow page speed</strong> from large images and too many apps.</li>
              <li><strong>Broken links</strong> from deleted products that return 404 errors.</li>
              <li><strong>Missing canonical tags</strong> that tell Google which version of a page to index.</li>
            </ul>
            <p>
              <em>Example:</em> A Shopify store selling handmade jewelry had 80 products but only 12 were indexed by Google. After a technical SEO audit, they discovered a robots.txt rule blocking their product directory. Once fixed, 76 products were indexed within three weeks and organic traffic grew by 45%.
            </p>
            <p>
              Want to dig deeper into why your store might not be ranking? Check out our guide on <a href="#/blog/why-competitors-ranking-higher-on-google">why your competitors are ranking higher on Google</a> and our deep dive on <a href="#/blog/ecommerce-store-not-performing">eCommerce store performance issues</a>.
            </p>
          </>
        ),
      },
      {
        id: 'email-marketing',
        heading: '2. Build an Email List and Turn Visitors Into Repeat Buyers',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/5386485/pexels-photo-5386485.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Email marketing campaign on laptop showing newsletter signup form for Shopify store"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Email marketing is one of the highest-ROI channels for Shopify stores. For every dollar spent on email marketing, the average return is $36. And unlike ads, you own your email list. No algorithm change can take it away from you.
            </p>
            <p>
              But here is the catch: you need a list first. Most Shopify stores do not collect emails because they do not give visitors a reason to subscribe. A generic "Subscribe to our newsletter" popup does not work. People get enough emails already. You need to offer something valuable in exchange.
            </p>
            <h3>How to build your email list without ads</h3>
            <ol>
              <li><strong>Offer a discount code.</strong> "Get 10% off your first order" is simple and effective. Most visitors will trade their email for a discount.</li>
              <li><strong>Create a free guide.</strong> If you sell fitness products, offer a free "7-Day Home Workout Plan" PDF in exchange for an email.</li>
              <li><strong>Use exit-intent popups.</strong> These appear when a visitor is about to leave your store. Offer your discount or guide right before they go.</li>
              <li><strong>Add a signup form in your footer.</strong> Not everyone wants a popup. Give them a low-friction option at the bottom of every page.</li>
            </ol>
            <h3>Email sequences that drive Shopify sales</h3>
            <p>
              Once you have a list, you need to send emails that actually sell. Here is a simple three-email sequence that works for any Shopify store:
            </p>
            <ul>
              <li><strong>Email 1 (Welcome):</strong> Deliver the discount code or free guide. Introduce your brand story. Make a good first impression.</li>
              <li><strong>Email 2 (Bestsellers):</strong> Send 2-3 days later. Show your best-selling products with direct links to buy.</li>
              <li><strong>Email 3 (Social proof):</strong> Send 5-7 days later. Share customer reviews, testimonials, or user-generated photos.</li>
            </ul>
            <p>
              <em>Example:</em> A Shopify store selling organic skincare products started collecting emails with a 15% discount popup. In three months, they built a list of 2,400 subscribers. Their welcome sequence generated $4,200 in sales — all without spending on ads.
            </p>
          </>
        ),
      },
      {
        id: 'social-media-organic',
        heading: '3. Use Social Media to Drive Free Shopify Traffic',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Social media marketing on phone showing Instagram and TikTok for Shopify store promotion"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Social media is free distribution. You do not need to pay for ads to get reach. You need to create content that people want to engage with. The platforms that work best for Shopify stores right now are Instagram, TikTok, and Pinterest.
            </p>
            <p>
              The key is consistency. You do not need to post five times a day. But you do need to show up regularly with content that your target audience finds useful, entertaining, or inspiring.
            </p>
            <h3>Content ideas that drive Shopify traffic</h3>
            <ul>
              <li><strong>Product demos.</strong> Show your product in action. People want to see how it works before they buy.</li>
              <li><strong>Behind-the-scenes content.</strong> Show how your products are made. This builds trust and sets you apart from dropshippers.</li>
              <li><strong>Customer features.</strong> Share photos or videos from happy customers (with permission). This is the most powerful form of social proof.</li>
              <li><strong>Educational content.</strong> If you sell coffee, share brewing tips. If you sell fitness gear, share workout advice. Give value first, sell second.</li>
              <li><strong>Trending audio and formats.</strong> Use trending sounds on TikTok and Reels to get more reach without paying for it.</li>
            </ul>
            <p>
              <em>Example:</em> A Shopify store selling handmade candles started posting 15-second TikTok videos showing the candle-making process. One video got 240,000 views organically. That single video drove 1,800 visitors to their store and generated $3,100 in sales over two weeks — all for free.
            </p>
          </>
        ),
      },
      {
        id: 'content-marketing',
        heading: '4. Start Content Marketing to Attract Buyers From Google',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Content marketing strategy on laptop showing blog posts that drive organic traffic to Shopify store"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Content marketing means creating helpful articles, guides, or videos that answer questions your potential customers are searching for. When someone searches "best running shoes for flat feet" on Google, the stores that show up are the ones with content that answers that question.
            </p>
            <p>
              Most Shopify stores only have product pages and a homepage. That is not enough to rank on Google. You need content that targets the questions your customers ask before they are ready to buy. This is called top-of-funnel content, and it is one of the best ways to get organic traffic.
            </p>
            <h3>How to start content marketing for your Shopify store</h3>
            <ol>
              <li><strong>Find questions your customers ask.</strong> Use Google's "People Also Ask" section, AnswerThePublic, or just think about the questions you get from customers.</li>
              <li><strong>Write helpful blog posts.</strong> Each post should answer one question thoroughly. Aim for 1,000-1,500 words. Use simple language.</li>
              <li><strong>Link to your products.</strong> Every blog post should include natural links to relevant products. Do not be pushy. Just make it easy for readers to explore.</li>
              <li><strong>Promote your content.</strong> Share your posts on social media, in your email newsletter, and in relevant online communities.</li>
            </ol>
            <p>
              <em>Example:</em> A Shopify store selling dog accessories started a blog. They wrote articles like "How to Choose the Right Dog Harness for Your Breed" and linked to their harness product pages. After six months, their blog was driving 3,500 monthly visitors, and 12% of those visitors clicked through to product pages. That is 420 potential buyers every month — all from free content.
            </p>
            <p>
              For more on this approach, read our article on <a href="#/blog/why-is-my-website-not-ranking-on-google">why your website is not ranking on Google</a> and our <a href="#/blog/seo-strategy-that-actually-works">SEO strategy that actually works</a>.
            </p>
          </>
        ),
      },
      {
        id: 'conversion-optimization',
        heading: '5. Improve Shopify Conversion Optimization to Sell More From Existing Traffic',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Shopify conversion optimization showing checkout page improvements and A/B testing"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Getting more traffic is only half the battle. If your store converts at 1%, doubling your traffic only doubles your sales. But if you also improve your conversion rate from 1% to 2%, you quadruple your sales. Shopify conversion optimization is about making the most of every visitor you already have.
            </p>
            <p>
              The average Shopify conversion rate is around 1.4%. Top-performing stores hit 3% or higher. The difference is not traffic. It is trust, clarity, and ease of buying.
            </p>
            <h3>Conversion rate comparison: Average vs. Optimized Shopify store</h3>
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-left font-semibold text-white">Metric</th>
                    <th className="py-3 pr-4 text-left font-semibold text-white">Average Store</th>
                    <th className="py-3 text-left font-semibold text-white">Optimized Store</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Conversion rate</td>
                    <td className="py-3 pr-4">1.4%</td>
                    <td className="py-3 text-brand-300">3.2%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Cart abandonment</td>
                    <td className="py-3 pr-4">70%</td>
                    <td className="py-3 text-brand-300">45%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Checkout steps</td>
                    <td className="py-3 pr-4">5 steps</td>
                    <td className="py-3 text-brand-300">2 steps</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Mobile conversion</td>
                    <td className="py-3 pr-4">0.9%</td>
                    <td className="py-3 text-brand-300">2.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Practical ways to improve your Shopify conversion rate</h3>
            <ul>
              <li><strong>Enable guest checkout.</strong> Forcing account creation is the number one reason people abandon carts. Let them buy as guests.</li>
              <li><strong>Show shipping costs upfront.</strong> Surprise costs at checkout cause 50% of cart abandonments. Be transparent from the product page.</li>
              <li><strong>Add trust signals.</strong> Display security badges, return policy, and customer reviews near the Add to Cart button.</li>
              <li><strong>Use high-quality product images.</strong> Include multiple angles and zoom. Shoppers cannot touch products online — images are all they have.</li>
              <li><strong>Simplify your checkout.</strong> Reduce it to two steps: information and payment. Remove unnecessary fields.</li>
              <li><strong>Optimize for mobile.</strong> Over 60% of Shopify traffic comes from phones. If your mobile checkout is clunky, you are losing most of your sales.</li>
            </ul>
            <p>
              <em>Example:</em> A Shopify store selling home decor enabled guest checkout, added review badges, and showed shipping costs on the product page. Their conversion rate went from 1.1% to 2.6% in five weeks. Same traffic, more than double the sales.
            </p>
          </>
        ),
      },
      {
        id: 'action-plan',
        heading: 'Your Ad-Free Shopify Sales Plan: Week by Week',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/7651975/pexels-photo-7651975.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Week by week action plan checklist for increasing Shopify sales without ads"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You do not need to do everything at once. But you do need a plan. Here is a realistic schedule you can follow even if you are running your store alone:
            </p>
            <ul>
              <li><strong>Week 1:</strong> Audit your store. Check Google Search Console for indexing issues. Review your top 10 product pages for SEO basics.</li>
              <li><strong>Week 2:</strong> Fix product page SEO. Rewrite descriptions, optimize titles, add alt text, and compress images for speed.</li>
              <li><strong>Week 3:</strong> Set up email capture. Add a discount popup, create a welcome sequence, and start collecting subscribers.</li>
              <li><strong>Week 4:</strong> Start posting on social media. Commit to 3 posts per week. Focus on product demos and behind-the-scenes content.</li>
              <li><strong>Week 5:</strong> Write your first blog post. Answer a question your customers ask. Link to your products naturally.</li>
              <li><strong>Week 6:</strong> Improve conversion rate. Enable guest checkout, add trust signals, and simplify your mobile checkout.</li>
              <li><strong>Week 7 onwards:</strong> Keep going. SEO and content marketing compound over time. The stores that win are the ones that stay consistent.</li>
            </ul>
            <p>
              You will not see results overnight. But if you follow this plan for 90 days, you will see more organic traffic, more email subscribers, and more Shopify sales — all without spending on ads.
            </p>
          </>
        ),
      },
      {
        id: 'conclusion',
        heading: 'You Do Not Need Ads to Grow Your Shopify Store',
        body: (
          <>
            <p>
              Ads can work. But they are not the only way to get Shopify sales. And they are definitely not the best option when you are just starting out and do not have money to burn.
            </p>
            <p>
              The strategies in this guide — Shopify SEO, email marketing, social media, content marketing, and Shopify conversion optimization — are proven, sustainable, and free. They take effort. But they build a foundation that ads cannot. When you stop paying for ads, the traffic stops. When you invest in SEO and content, the traffic keeps coming.
            </p>
            <p>
              You do not have to figure this out alone. At Rank Flow Agency, we help Shopify store owners increase sales through organic traffic, better SEO, and conversion optimization. We handle the technical work, the content, and the strategy — so you can focus on running your business.
            </p>
            <p>
              <strong>Want to know exactly what is holding your Shopify store back?</strong> <a href="#/contact">Get a free SEO audit from Rank Flow Agency today.</a> We will identify every issue and give you a clear, prioritized plan to fix it — no ads required.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: 'Can I really get Shopify sales without running any ads?',
        a: 'Yes. Many successful Shopify stores get most of their sales from organic traffic, email marketing, and social media. These channels take time to build but are free and sustainable long-term. Ads can accelerate growth, but they are not required to make sales.',
      },
      {
        q: 'How long does Shopify SEO take to show results?',
        a: 'Most Shopify stores see noticeable improvements in Google rankings and organic traffic within 3-6 months. Product page SEO fixes can show results faster, sometimes within 4-8 weeks. Competitive niches may take longer, but consistent effort always pays off.',
      },
      {
        q: 'What is a good conversion rate for a Shopify store?',
        a: 'The average Shopify conversion rate is around 1.4%. Stores above 2.5% are performing well. If your conversion rate is below 1%, focus on simplifying checkout, adding trust signals, and improving product page quality before investing in more traffic.',
      },
      {
        q: 'What is the best free email marketing tool for Shopify?',
        a: 'Klaviyo offers a free plan for up to 250 contacts and 500 emails per month. Mailchimp also has a free tier. For new Shopify stores, Klaviyo is recommended because it integrates deeply with Shopify and tracks revenue from each email.',
      },
      {
        q: 'Do I need to write blog posts for my Shopify store?',
        a: 'You do not have to, but content marketing is one of the most effective ways to get organic traffic from Google. Writing helpful articles that answer your customers questions builds authority, drives traffic, and creates natural links to your product pages. One post per month is a good starting point.',
      },
    ],
  },
  'ecommerce-store-not-performing': {
    sections: [
      {
        id: 'introduction',
        heading: 'Is Your eCommerce Store Struggling to Make Sales?',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="eCommerce store dashboard showing low sales and traffic metrics"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You launched your online store with high hopes. You added products, set up payment, and maybe even ran some ads. But the sales are not coming in the way you expected. Your website traffic is low, your conversion rate is disappointing, and you are watching competitors rack up reviews while your store sits in silence.
            </p>
            <p>
              If this sounds familiar, you are not alone. Most eCommerce store owners hit this wall. The problem is usually not your product — it is how your store is built, optimized, and presented to both Google and your customers.
            </p>
            <p>
              After running SEO audits on dozens of online stores, we see the same four issues over and over. The good news is that each one has a clear fix. In this article, we will break down exactly why your store is underperforming and what you can do today to turn it around.
            </p>
          </>
        ),
      },
      {
        id: 'reason-1-poor-product-page-seo',
        heading: 'Reason 1: Your Product Pages Are Not Optimized for Search',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Product page with SEO elements like title tags and meta descriptions being optimized"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Your product pages are the heart of your online store. They are where browsers become buyers. But if those pages are not optimized for search, Google will not show them — and customers will never find them.
            </p>
            <p>
              Many store owners copy manufacturer descriptions, use generic image filenames like "IMG_4032.jpg," and skip writing meta titles altogether. These mistakes tell Google your pages are thin and not worth ranking.
            </p>
            <h3>Common product page SEO mistakes</h3>
            <ul>
              <li><strong>Duplicate descriptions</strong> — Using the same manufacturer text as 50 other stores means Google sees no unique value.</li>
              <li><strong>Missing or generic title tags</strong> — "Product Name | Store" is not enough. You need keywords customers actually search for.</li>
              <li><strong>No customer reviews</strong> — Reviews add fresh, unique content that Google loves and shoppers trust.</li>
              <li><strong>Thin content</strong> — A one-line description gives Google nothing to rank. Aim for 200+ words of helpful, original text.</li>
            </ul>
            <h3>How to fix your product pages</h3>
            <ul>
              <li>Write unique descriptions for every product. Explain benefits, not just features.</li>
              <li>Include your target keyword in the title tag, H1, URL, and first 100 words.</li>
              <li>Add structured data (schema markup) so Google can display rich snippets like price and availability.</li>
              <li>Rename image files with descriptive keywords (e.g., "red-leather-running-shoes.jpg" instead of "IMG_4032.jpg").</li>
              <li>Encourage and display customer reviews on every product page.</li>
            </ul>
            <p>
              A Shopify SEO client in the fitness niche rewrote 40 product descriptions and added review schema. Within three months, their product pages started ranking for long-tail keywords and organic traffic grew by 62%.
            </p>
          </>
        ),
      },
      {
        id: 'reason-2-slow-website-speed',
        heading: 'Reason 2: Your Website Speed Is Driving Customers Away',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/4218627/pexels-photo-4218627.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Website speed test showing slow page load times on a mobile device"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Website speed is not just a technical detail — it directly affects your sales. Research shows that a 1-second delay in page load time can reduce conversion rates by 7%. If your store takes 4 seconds or more to load, you are losing customers before they even see your products.
            </p>
            <p>
              Google also uses page speed as a ranking factor. Slow sites rank lower in search results, which means less website traffic from Google rankings. It is a double loss: fewer visitors and fewer sales from the visitors you do get.
            </p>
            <h3>What slows down eCommerce stores</h3>
            <ul>
              <li>Large, uncompressed product images (the #1 cause of slow stores)</li>
              <li>Too many apps or plugins running at once</li>
              <li>Bloated theme code with unused features</li>
              <li>No caching or content delivery network (CDN)</li>
              <li>Render-blocking JavaScript and CSS files</li>
            </ul>
            <h3>Speed comparison: Before vs. After optimization</h3>
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-4 text-left font-semibold text-white">Metric</th>
                    <th className="py-3 pr-4 text-left font-semibold text-white">Before</th>
                    <th className="py-3 text-left font-semibold text-white">After</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Page load time</td>
                    <td className="py-3 pr-4">5.8 seconds</td>
                    <td className="py-3 text-brand-300">1.9 seconds</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Page size</td>
                    <td className="py-3 pr-4">4.2 MB</td>
                    <td className="py-3 text-brand-300">1.1 MB</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Google PageSpeed score</td>
                    <td className="py-3 pr-4">34 / 100</td>
                    <td className="py-3 text-brand-300">89 / 100</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Conversion rate</td>
                    <td className="py-3 pr-4">1.2%</td>
                    <td className="py-3 text-brand-300">2.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>How to speed up your store</h3>
            <ul>
              <li>Compress all product images. Use WebP format instead of PNG or JPG.</li>
              <li>Remove apps and plugins you are not actively using.</li>
              <li>Enable lazy loading so images only load when the visitor scrolls to them.</li>
              <li>Use a CDN like Cloudflare to serve images from servers close to your customers.</li>
              <li>Minify CSS and JavaScript files to reduce their size.</li>
            </ul>
            <p>
              A WooCommerce SEO client reduced their load time from 5.8 to 1.9 seconds. Their conversion rate jumped from 1.2% to 2.8% — more than doubling their sales from the same amount of traffic.
            </p>
          </>
        ),
      },
      {
        id: 'reason-3-weak-technical-seo',
        heading: 'Reason 3: Technical SEO Issues Are Blocking Google',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Technical SEO audit showing crawl errors and indexing issues in Google Search Console"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              Technical SEO is the foundation that everything else is built on. If Google cannot crawl and index your store properly, your products will not show up in search results — no matter how good your content is.
            </p>
            <p>
              Many store owners do not even know these problems exist because they are invisible. You need to run an SEO audit to find them.
            </p>
            <h3>Common technical SEO issues in eCommerce</h3>
            <ul>
              <li><strong>Indexation problems</strong> — Google may be blocked from indexing your product pages due to robots.txt or noindex tags.</li>
              <li><strong>Broken links and 404 errors</strong> — When products go out of stock or are removed, the old URLs create errors that waste Google's crawl budget.</li>
              <li><strong>Missing canonical tags</strong> — Product variants (size, color) can create duplicate URLs that confuse Google.</li>
              <li><strong>Poor URL structure</strong> — URLs like "/collections/all/products/item?id=123" are messy. Clean URLs like "/products/red-leather-jacket" rank better.</li>
              <li><strong>No XML sitemap</strong> — Without a sitemap, Google may miss important pages on larger stores.</li>
            </ul>
            <h3>How to fix technical SEO issues</h3>
            <ul>
              <li>Run a full SEO audit using Google Search Console and a tool like Screaming Frog or Ahrefs Site Audit.</li>
              <li>Set up 301 redirects for discontinued products to point to similar items or category pages.</li>
              <li>Add canonical tags to product variant pages to point to the main product URL.</li>
              <li>Submit an updated XML sitemap through Google Search Console.</li>
              <li>Fix URL structures to be clean, short, and keyword-rich.</li>
              <li>Check that your robots.txt file is not accidentally blocking important pages.</li>
            </ul>
            <p>
              An online clothing store had 800 product pages, but Google was only indexing 200 of them. After a technical SEO audit, they discovered a robots.txt rule was blocking their product directory. Once fixed, indexed pages jumped to 780 within four weeks.
            </p>
          </>
        ),
      },
      {
        id: 'reason-4-poor-conversion-rate',
        heading: "Reason 4: Your Store's Conversion Rate Is Too Low",
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="eCommerce checkout page being optimized to improve conversion rate and reduce cart abandonment"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You could have thousands of visitors every month and still not make many sales if your conversion rate is low. Conversion rate is the percentage of visitors who actually buy something. The average eCommerce conversion rate is around 2-3%. If yours is below 1%, your store has a problem.
            </p>
            <p>
              Low conversion usually comes down to one thing: trust. If shoppers do not trust your store, they will not give you their money. And trust is built through dozens of small signals on your website.
            </p>
            <h3>What kills your conversion rate</h3>
            <ul>
              <li><strong>Complicated checkout</strong> — Too many steps, forced account creation, or hidden shipping costs make people leave.</li>
              <li><strong>No trust signals</strong> — Missing return policy, no security badges, no reviews, and no contact information.</li>
              <li><strong>Low-quality product images</strong> — Shoppers cannot touch or try products online. They rely on images to decide.</li>
              <li><strong>Unclear pricing</strong> — Surprise costs at checkout (tax, shipping) cause cart abandonment.</li>
              <li><strong>No mobile optimization</strong> — Over 60% of online shopping happens on phones. If checkout is hard on mobile, you lose sales.</li>
            </ul>
            <h3>How to improve your conversion rate</h3>
            <ul>
              <li>Enable guest checkout so customers can buy without creating an account.</li>
              <li>Show shipping costs upfront on the product page, not at the final checkout step.</li>
              <li>Add trust badges (SSL, payment security, money-back guarantee) near the "Add to Cart" button.</li>
              <li>Use high-quality product images from multiple angles. Include zoom functionality.</li>
              <li>Add a clear, easy-to-find return policy.</li>
              <li>Display customer reviews and ratings prominently on each product page.</li>
              <li>Simplify your checkout to 3 steps or fewer: information, shipping, payment.</li>
            </ul>
            <p>
              A home goods store added guest checkout, visible shipping costs, and review badges. Their conversion rate went from 0.8% to 2.4% in six weeks — tripling their sales from the same traffic.
            </p>
          </>
        ),
      },
      {
        id: 'action-plan',
        heading: 'Your eCommerce Fix Plan: Step by Step',
        body: (
          <>
            <img
              src="https://images.pexels.com/photos/7651975/pexels-photo-7651975.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="eCommerce optimization action plan checklist with step-by-step tasks"
              className="my-6 w-full rounded-2xl border border-white/10"
              loading="lazy"
              width={1200}
              height={630}
            />
            <p>
              You do not need to fix everything at once. But you do need a plan. Here is a prioritized schedule you can follow:
            </p>
            <ul>
              <li><strong>Week 1:</strong> Run a full SEO audit on your store. Identify technical issues, broken links, and indexation problems.</li>
              <li><strong>Week 2:</strong> Fix website speed. Compress all images, remove unused apps, and set up a CDN.</li>
              <li><strong>Week 3:</strong> Rewrite your top 10 product page descriptions. Add unique titles, meta descriptions, and schema markup.</li>
              <li><strong>Week 4:</strong> Improve your checkout flow. Enable guest checkout, add trust badges, and show shipping costs upfront.</li>
              <li><strong>Week 5 onwards:</strong> Continue optimizing product pages in batches of 10 per week. Monitor Google Search Console for improvements.</li>
            </ul>
            <p>
              eCommerce SEO is not a one-time fix. It is an ongoing process of testing, improving, and measuring. But if you follow this plan, you will see results within 3-6 months.
            </p>
          </>
        ),
      },
      {
        id: 'conclusion',
        heading: 'Turn Your Struggling Store into a Revenue Machine',
        body: (
          <>
            <p>
              Your online store has potential. The products are there. The market is there. What is missing is the optimization that turns visitors into buyers and Google rankings into traffic.
            </p>
            <p>
              The four issues we covered — poor product page SEO, slow website speed, technical SEO problems, and low conversion rates — are the most common reasons eCommerce stores underperform. Fix them, and you will see more traffic, more sales, and more growth.
            </p>
            <p>
              But we know that running a business leaves little time for SEO audits, image compression, and schema markup. That is where Rank Flow Agency comes in. Our team specializes in eCommerce SEO for Shopify and WooCommerce stores. We handle the technical work, the optimization, and the content — so you can focus on running your business.
            </p>
            <p>
              <strong>Want to know exactly what is holding your store back?</strong> Get a free SEO audit from Rank Flow Agency. We will identify every issue and give you a clear, prioritized plan to fix it.
            </p>
            <p>
              <a href="#/contact">Contact Rank Flow Agency today and let us turn your store into a revenue machine.</a>
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: 'How long does eCommerce SEO take to show results?',
        a: 'Most online stores see noticeable improvements in Google rankings and website traffic within 3-6 months. Product page optimization and speed fixes can show results faster — sometimes within 4-8 weeks. Competitive niches may take longer.',
      },
      {
        q: 'Should I choose Shopify or WooCommerce for SEO?',
        a: 'Both platforms can rank well with proper optimization. Shopify SEO is easier for beginners because it handles technical basics out of the box. WooCommerce SEO offers more flexibility and control but requires more technical knowledge. The best choice depends on your team and needs.',
      },
      {
        q: 'How many product pages should I optimize first?',
        a: 'Start with your top 10 best-selling or highest-traffic product pages. These give you the fastest return. Once those are optimized, work through the rest in batches of 10 per week.',
      },
      {
        q: 'What is a good conversion rate for an eCommerce store?',
        a: 'The average eCommerce conversion rate is 2-3%. Stores above 3% are doing well. If your rate is below 1%, focus on checkout simplification, trust signals, and product page improvements.',
      },
      {
        q: 'Do I need to hire an agency for eCommerce SEO?',
        a: 'You can handle basic SEO yourself with free tools and guides. But if your store has hundreds of products, technical issues, or you lack time, an agency like Rank Flow Agency can save you months of trial and error and get results faster.',
      },
    ],
  },
  'why-competitors-ranking-higher-on-google': {
    sections: [
      {
        id: 'introduction',
        heading: 'The Frustration of Watching Competitors Outrank You',
        body: (
          <>
            <p>You put hours into your website. You wrote pages, added images, and maybe even paid for ads. But when you search for your main keyword on Google, your competitor shows up first. Sometimes they take up three spots on the first page while you sit on page two or three.</p>
            <p>It is one of the most frustrating things a business owner can experience. You know your product is good. You know your service is better. So why does Google keep picking them over you?</p>
            <p>Here is the truth: Google does not pick favorites. It picks the pages that best match what people are looking for. Your competitors are ranking higher because they are doing certain things better than you. The good news is that once you understand what those things are, you can fix them.</p>
            <p>In this guide, we will break down the real reasons your competitors outrank you. No jargon, no confusing tech talk. Just clear, simple explanations and practical steps you can take today.</p>
            <p><em>[Image placeholder: A side-by-side comparison of two Google search results pages, one showing a competitor ranking at the top and the other showing a business ranking lower]</em></p>
          </>
        ),
      },
      {
        id: 'google-ranking-factors',
        heading: 'How Google Decides Who Ranks First',
        body: (
          <>
            <p>Before we look at why your competitors are beating you, it helps to understand how Google makes its decisions. Google uses a system called an algorithm. Think of it as a judge in a contest. It looks at hundreds of different signals to decide which pages deserve the top spots.</p>
            <p>Here are the main things Google looks at:</p>
            <ul>
              <li><strong>Relevance:</strong> Does your page actually answer the question the person is asking? If someone searches "best plumber in Chicago," Google wants to show pages about plumbers in Chicago, not a general article about plumbing.</li>
              <li><strong>Authority:</strong> Does your website have a good reputation? Google looks at how many other websites link to yours. Think of each link as a vote of confidence.</li>
              <li><strong>Quality:</strong> Is your content well-written, helpful, and better than what is already out there? Google wants to send people to pages that truly help them.</li>
              <li><strong>User experience:</strong> Is your site fast, easy to use, and mobile-friendly? If people click your link and leave right away, Google notices.</li>
              <li><strong>Freshness:</strong> Is your content up to date? For some topics, Google prefers recently updated pages.</li>
            </ul>
            <p>Google does not look at just one of these things. It looks at all of them together. Your competitor might not beat you in every category, but they probably beat you in enough of them to earn a higher spot.</p>
          </>
        ),
      },
      {
        id: 'content-quality',
        heading: 'Reason 1: Their Content Is More Helpful',
        body: (
          <>
            <p>This is the most common reason. When someone searches for something, Google wants to show them the best possible answer. If your competitor wrote a more detailed, more useful page than you did, Google will rank them higher.</p>
            <h3>What "better content" really means</h3>
            <p>Better content does not mean longer content. It means content that does a better job of answering the question. Here is what that looks like:</p>
            <ul>
              <li>It covers the topic fully instead of skimming the surface</li>
              <li>It uses simple language that anyone can understand</li>
              <li>It includes examples, steps, or tips that people can actually use</li>
              <li>It answers follow-up questions before the reader even asks them</li>
              <li>It is structured clearly with headings and bullet points</li>
            </ul>
            <h3>A practical example</h3>
            <p>Say you and your competitor both wrote about "how to choose a roof material." Your page lists five materials with a short sentence about each. Your competitor wrote a page that lists the same five materials but also includes the cost, lifespan, pros and cons, and which climate each material works best in.</p>
            <p>Which page would you rather read? Which page would you share with a friend? That is the same decision Google is making. The more helpful page wins.</p>
            <p>If you want to learn how to write content that ranks and converts, check out our guide on <a href="#/blog/content-that-converts">writing content that ranks AND converts</a>.</p>
            <p><em>[Image placeholder: Two article pages shown side by side, one thin and sparse, the other rich with headings, bullet points, and examples]</em></p>
          </>
        ),
      },
      {
        id: 'backlinks',
        heading: 'Reason 2: They Have More Quality Backlinks',
        body: (
          <>
            <p>A backlink is when another website links to yours. Google treats each backlink like a vote. The more votes you have from good websites, the more Google trusts you. If your competitor has more backlinks from trusted websites, they will likely rank higher.</p>
            <h3>Quality matters more than quantity</h3>
            <p>Not all backlinks are equal. One link from a well-known news site or industry blog is worth more than fifty links from random, low-quality sites. Google looks at where the link comes from, not just how many links you have.</p>
            <h3>How to build backlinks the right way</h3>
            <p>Here are some ways to earn quality backlinks:</p>
            <ul>
              <li>Write content so good that other sites want to link to it naturally</li>
              <li>Reach out to blogs in your industry and offer to write a guest post</li>
              <li>Get listed in local business directories and industry associations</li>
              <li>Create original data or research that others will reference</li>
              <li>Partner with complementary businesses for cross-promotion</li>
            </ul>
            <p>Building backlinks takes time, but it is one of the strongest signals Google uses. For a deeper dive, read our guide on <a href="#/blog/link-building-white-hat">white-hat link building that actually works</a>.</p>
            <p><em>[Image placeholder: A diagram showing arrows from various websites pointing to one central website, representing backlinks]</em></p>
          </>
        ),
      },
      {
        id: 'technical-seo',
        heading: 'Reason 3: Their Website Is Faster and Easier to Use',
        body: (
          <>
            <p>Google wants to send people to websites that load quickly and work smoothly. If your site takes too long to load or is hard to use on a phone, Google will lower your ranking. Your competitor might be winning simply because their site is faster.</p>
            <h3>Speed matters more than you think</h3>
            <p>Studies show that people leave a site if it takes more than three seconds to load. If people leave your site quickly, Google sees that as a sign your site is not good enough. This is called a high bounce rate, and it can hurt your rankings.</p>
            <h3>Simple ways to speed up your site</h3>
            <ul>
              <li>Compress your images so they load faster</li>
              <li>Use a fast hosting provider</li>
              <li>Remove plugins or scripts you do not need</li>
              <li>Enable caching so returning visitors load faster</li>
              <li>Make sure your site works well on mobile phones</li>
            </ul>
            <p>Technical issues can quietly hold your site back without you knowing. Our <a href="#/blog/core-web-vitals">Core Web Vitals checklist</a> walks through the exact fixes that move the needle.</p>
            <p><em>[Image placeholder: A speedometer graphic showing a fast-loading website on the left and a slow-loading one on the right]</em></p>
          </>
        ),
      },
      {
        id: 'keyword-targeting',
        heading: 'Reason 4: They Target the Right Keywords',
        body: (
          <>
            <p>Keywords are the words people type into Google. If your competitor is targeting the exact keywords your customers are using, and you are not, they will rank higher. It is that simple.</p>
            <h3>What makes a keyword "right"</h3>
            <p>The right keyword has three things:</p>
            <ul>
              <li><strong>Search volume:</strong> People are actually searching for it</li>
              <li><strong>Relevance:</strong> It matches what your business offers</li>
              <li><strong>Low competition:</strong> Not too many strong sites are already ranking for it</li>
            </ul>
            <h3>A practical example</h3>
            <p>Say you run a bakery in Austin. You might be trying to rank for "best bakery." That is a very broad keyword with huge competition. But if you target "best gluten-free bakery in Austin," you have a much better chance. The search volume is lower, but the people searching are more likely to become customers.</p>
            <p>Your competitors probably did their keyword research. They found the sweet spot where people are searching but competition is manageable. You can do the same by thinking about what your customers actually type into Google.</p>
            <p><em>[Image placeholder: A keyword research dashboard showing search volume and competition metrics for several keywords]</em></p>
          </>
        ),
      },
      {
        id: 'domain-age',
        heading: 'Reason 5: They Have Been Around Longer',
        body: (
          <>
            <p>This one is tough to hear, but it is real. Older websites often have an advantage. They have had more time to build backlinks, publish content, and earn Google's trust. If your competitor has been online for ten years and you launched six months ago, they have a head start.</p>
            <h3>But age is not everything</h3>
            <p>Do not let this discourage you. A new site with great content and good backlinks can absolutely outrank an older site that has gone stale. Google cares more about what you are doing now than how long you have existed. If your competitor stopped updating their site and you keep publishing helpful content, you will close the gap over time.</p>
            <h3>How to compete as a newer site</h3>
            <ul>
              <li>Focus on longer, more specific keywords with less competition</li>
              <li>Publish content more often than your competitors do</li>
              <li>Build backlinks actively through outreach and partnerships</li>
              <li>Make your site faster and more user-friendly than theirs</li>
              <li>Target local searches where big national sites are not competing</li>
            </ul>
            <p>If you are a local business, our <a href="#/blog/local-seo-for-small-businesses">local SEO guide for small businesses</a> shows you how to win in your area even as a newer site.</p>
          </>
        ),
      },
      {
        id: 'user-experience',
        heading: 'Reason 6: They Give Visitors a Better Experience',
        body: (
          <>
            <p>Google watches what people do after they click your link. If they stay on your site and read multiple pages, that is a good sign. If they leave after a few seconds, Google takes that as a signal that your site did not help them.</p>
            <h3>Signs of a good user experience</h3>
            <ul>
              <li>Pages load quickly on both desktop and mobile</li>
              <li>Text is easy to read with clear headings</li>
              <li>Navigation is simple and intuitive</li>
              <li>Pages are not cluttered with pop-ups and ads</li>
              <li>It is easy to find contact info or take the next step</li>
            </ul>
            <h3>Signs of a poor user experience</h3>
            <ul>
              <li>Slow loading pages that make people wait</li>
              <li>Text that is too small or hard to read on a phone</li>
              <li>Confusing menus that make it hard to find things</li>
              <li>Pop-ups that block the screen before people can read</li>
              <li>No clear way to contact you or buy your product</li>
            </ul>
            <p>Think about your own browsing habits. When you visit a site that is slow and confusing, you leave. Your visitors do the same thing. Fixing your user experience can improve your rankings because Google sees that people stay on your site longer.</p>
            <p><em>[Image placeholder: A clean, well-organized website layout on the left versus a cluttered, confusing layout on the right]</em></p>
          </>
        ),
      },
      {
        id: 'content-freshness',
        heading: 'Reason 7: They Update Their Content Regularly',
        body: (
          <>
            <p>Google loves fresh content. If your competitor updates their pages regularly and you published yours two years ago and never touched it, they have an edge. This is especially true for topics that change over time, like pricing, trends, or technology.</p>
            <h3>How often should you update?</h3>
            <p>You do not need to rewrite everything every month. But you should review your key pages every few months. Here is a simple schedule:</p>
            <ul>
              <li><strong>Every 3 months:</strong> Review your most important pages for accuracy</li>
              <li><strong>Every 6 months:</strong> Update statistics, dates, and examples</li>
              <li><strong>Every 12 months:</strong> Do a full content audit and refresh or remove weak pages</li>
            </ul>
            <h3>What to update</h3>
            <p>When you update a page, do not just change a word or two. Add new information, update old examples, fix broken links, and improve the structure. Google can tell the difference between a real update and a tiny tweak.</p>
            <p>If you want a complete framework for planning and executing your SEO, our <a href="#/blog/seo-strategy-that-actually-works">SEO strategy blueprint</a> covers how to build a system that compounds over time.</p>
          </>
        ),
      },
      {
        id: 'how-to-close-the-gap',
        heading: 'How to Close the Gap and Outrank Them',
        body: (
          <>
            <p>Now you know why your competitors are ranking higher. The question is: what are you going to do about it? Here is a step-by-step plan to close the gap.</p>
            <h3>Step 1: Audit your current rankings</h3>
            <p>Before you fix anything, you need to know where you stand. Search for your main keywords and write down where you rank. Note which competitors appear above you. This gives you a baseline to measure your progress.</p>
            <h3>Step 2: Study what your competitors are doing</h3>
            <p>Visit the pages that outrank yours. Read them carefully. Ask yourself:</p>
            <ul>
              <li>What topics do they cover that I do not?</li>
              <li>How is their content structured?</li>
              <li>What keywords are they targeting?</li>
              <li>How fast does their page load compared to mine?</li>
              <li>What kind of sites are linking to them?</li>
            </ul>
            <p>Do not copy them. Learn from them and then do it better.</p>
            <h3>Step 3: Improve your content</h3>
            <p>Take your most important pages and make them better than your competitor's version. Add more detail, include real examples, answer common questions, and make the layout easy to follow.</p>
            <h3>Step 4: Build backlinks</h3>
            <p>Start reaching out to websites in your industry. Offer to write guest posts, share your expertise, or collaborate on content. Every quality backlink you earn brings you closer to your competitor's authority level.</p>
            <h3>Step 5: Fix your technical issues</h3>
            <p>Make sure your site is fast, mobile-friendly, and easy to navigate. Fix broken links, compress images, and clean up any code that slows things down.</p>
            <h3>Step 6: Be patient and consistent</h3>
            <p>SEO is not an overnight game. It takes months to see results. But if you are consistent, you will see progress. Keep publishing, keep improving, and keep building. Your competitors did not get to the top in a day, and neither will you. But you will get there.</p>
            <p><em>[Image placeholder: A step-by-step roadmap graphic showing the six steps from audit to consistent improvement]</em></p>
          </>
        ),
      },
      {
        id: 'conclusion',
        heading: 'Stop Wondering and Start Closing the Gap',
        body: (
          <>
            <p>Your competitors are not ranking higher because they are lucky. They are ranking higher because they are doing the right things consistently. They have better content, more backlinks, a faster website, and a stronger overall SEO foundation.</p>
            <p>The good news is that none of these things are secrets. They are all things you can do too. It takes time, effort, and a clear plan, but the results are worth it. Every improvement you make brings you one step closer to that top spot.</p>
            <p>If you are tired of watching competitors take your customers from Google, let Rank Flow Agency help. We specialize in helping businesses outrank their competition with proven SEO strategies. <a href="#/contact">Contact us today for a free SEO audit</a> and a custom plan to get you to the top of Google.</p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: 'How long does it take to outrank a competitor on Google?',
        a: 'It depends on how strong your competitor is and how much work you put in. For most businesses, you can start seeing improvements in 3 to 6 months. Outranking a well-established competitor can take 6 to 12 months of consistent effort. The key is to start now and stay consistent.',
      },
      {
        q: 'Can a new website outrank an older competitor?',
        a: 'Yes. While older websites have a head start, a new site with better content, faster loading speed, and good backlinks can absolutely outrank them. Google cares more about the quality of your site today than how long it has existed.',
      },
      {
        q: 'Do I need to hire an SEO agency to outrank competitors?',
        a: 'You can do a lot of SEO work yourself, especially if you have the time to learn and implement it. However, an experienced SEO agency can speed up the process, avoid costly mistakes, and give you a clear strategy tailored to your business. It comes down to your time, budget, and goals.',
      },
      {
        q: 'What is the single most important thing I can do to rank higher?',
        a: 'If you had to focus on just one thing, make your content the most helpful version on the internet for your topic. Google wants to send people to pages that truly answer their questions. Better content beats almost every other factor over time.',
      },
      {
        q: 'Why did my ranking suddenly drop after going up?',
        a: 'Ranking fluctuations are normal. Google constantly updates its algorithm, and competitors are always improving their sites too. A sudden drop could also mean a technical issue, a lost backlink, or outdated content. Review your site, fix any issues, and keep publishing quality content.',
      },
    ],
  },
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
  emails: ['info@rankflowagency.online', 'emilyisla732@gmail.com', 'rankflowdigitalhubs@gmail.com'],
  website: 'https://rankflowagency.online',
  websiteLabel: 'rankflowagency.online',
  location: 'Remote · Worldwide',
};
