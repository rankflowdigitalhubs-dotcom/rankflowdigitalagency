import { Search, Check, ArrowRight, Link2, Mail, TrendingUp, Users, Award, Target, BarChart3, PenLine, ShieldCheck } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Guest Posting Services', path: '/guest-posting' },
];

const guestPostFaqs = [
  { q: 'What is guest posting and how does it help SEO?', a: 'Guest posting is the practice of writing and publishing content on another website in your industry with a link back to your site. Each guest post earns you a high-quality backlink from an authoritative website, which signals to Google that your site is trustworthy and relevant — directly improving your search rankings and organic traffic.' },
  { q: 'Are your guest post links permanent?', a: 'Yes. Every guest post we secure is placed on a real website with a permanent placement guarantee. If a link is ever removed within the first 12 months, we replace it at no cost. You get lasting SEO value, not temporary links.' },
  { q: 'Do you use PBNs or private blog networks?', a: 'Never. We use 100% white hat link building with manual outreach to real, authoritative websites. No PBNs, no link farms, no paid links, no risky shortcuts. Every link we build is safe, sustainable, and compliant with Google\'s guidelines.' },
  { q: 'What domain authority do the websites have?', a: 'We secure placements on websites with DA 20+ to DA 90+, depending on your package. We match the authority level to your goals and budget. Higher DA links pass more authority, but a mix of DA levels creates a natural, diverse backlink profile.' },
  { q: 'Do you write the content for each guest post?', a: 'Yes. Every guest post includes a professionally written, SEO-optimized article created by our experienced writers. You review and approve the content before it is pitched or published. We handle everything from topic research to final publication.' },
  { q: 'How long does the guest posting process take?', a: 'From outreach to live publication, most guest posts are completed within 7–14 days. Larger campaigns with multiple posts are delivered on a rolling schedule. We provide a timeline upfront and keep you updated at every stage.' },
  { q: 'Can I choose the anchor text for my backlinks?', a: 'Yes. We work with you to determine the best anchor text strategy — branded, exact match, partial match, or generic. We optimize anchor text distribution to look natural to Google while targeting your most valuable keywords.' },
  { q: 'Do you provide a report of all placed links?', a: 'Absolutely. You receive a detailed report for every guest post including the live URL, domain authority, anchor text used, content title, and publication date. Full transparency — you always know exactly what you are getting.' },
  { q: 'What industries do you build links for?', a: 'We have relationships with websites across virtually every industry — SaaS, eCommerce, legal, dental, home services, real estate, finance, health, technology, and more. We only pitch your content to websites that are topically relevant to your niche.' },
  { q: 'How many guest posts do I need per month?', a: 'It depends on your goals and competition. For most businesses, 5–10 high-quality guest posts per month produces steady ranking improvements. We scale up or down based on your budget and the competitive landscape of your niche.' },
];

const services = [
  { icon: Award, title: 'High DA Guest Posts', desc: 'We secure placements on websites with high Domain Authority, passing maximum link equity to your site. Higher DA links mean faster, more impactful ranking improvements.' },
  { icon: Target, title: 'Niche-Relevant Websites', desc: 'We only place guest posts on websites that are topically relevant to your industry. Relevant links carry far more SEO weight than random placements and look natural to Google.' },
  { icon: Mail, title: 'Manual Outreach', desc: 'Every placement is secured through genuine, manual outreach to real website owners and editors. No automated software, no link networks — just real relationships built one at a time.' },
  { icon: Link2, title: 'Contextual Backlinks', desc: 'Your link is placed naturally within the body of the article, surrounded by relevant content. Contextual links are the most powerful type of backlink Google recognizes.' },
  { icon: ShieldCheck, title: 'White Hat Link Building', desc: 'We follow Google\'s guidelines strictly. No PBNs, no link farms, no paid placements. Every link is earned through real outreach and quality content — safe and sustainable.' },
  { icon: PenLine, title: 'Content Writing Included', desc: 'Every guest post includes a professionally written, SEO-optimized article. Our experienced writers create content that website owners want to publish and readers want to read.' },
  { icon: Link2, title: 'DoFollow Links', desc: 'We secure DoFollow backlinks that pass full link authority to your website. No useless NoFollow links — every placement is designed to move your rankings.' },
  { icon: Check, title: 'Permanent Placements', desc: 'Your guest posts and links are permanent. If a link is removed within the first 12 months, we replace it for free. You get lasting SEO value, not temporary fixes.' },
  { icon: Target, title: 'Anchor Text Optimization', desc: 'We develop a natural anchor text strategy using branded, exact match, and partial match anchors. The right anchor text distribution maximizes rankings without triggering spam signals.' },
  { icon: BarChart3, title: 'Link Diversity', desc: 'We build a diverse backlink profile from different domains, authorities, and niches. A natural link profile looks organic to Google and protects against algorithm updates.' },
  { icon: Search, title: 'Competitor Backlink Analysis', desc: 'We analyze your competitors\' backlinks to find link opportunities they are using. Then we target those same websites — and more — to out-rank them.' },
  { icon: TrendingUp, title: 'Monthly Link Building Campaigns', desc: 'We run ongoing monthly campaigns that build momentum over time. Consistent link building compounds, producing faster ranking growth with each passing month.' },
];

const industries = [
  { name: 'SaaS', icon: '💻', desc: 'Build authority in the competitive SaaS space with links from tech publications.' },
  { name: 'eCommerce', icon: '🛒', desc: 'Drive product page rankings with niche-relevant eCommerce backlinks.' },
  { name: 'Dentists', icon: '🦷', desc: 'Earn links from health and dental publications to boost local rankings.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Get featured on food blogs and local publications for more visibility.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Build legal authority with links from law journals and industry sites.' },
  { name: 'Roofers', icon: '🏠', desc: 'Secure home improvement backlinks that boost local search rankings.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Earn links from home service publications to outrank local competitors.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Build property market authority with links from real estate blogs.' },
  { name: 'Shopify Stores', icon: '🏷️', desc: 'Grow Shopify store traffic with eCommerce and retail backlinks.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Compete with bigger brands through strategic authority link building.' },
];

const process = [
  { step: '01', title: 'Website Analysis', desc: 'We analyze your website\'s current backlink profile, domain authority, and ranking goals to determine the right link building strategy for your business.' },
  { step: '02', title: 'Competitor Research', desc: 'We analyze your top competitors\' backlinks to identify link opportunities and websites they are using to rank above you.' },
  { step: '03', title: 'Website Selection', desc: 'We hand-pick niche-relevant, high DA websites for your guest posts. Every target site is vetted for quality, traffic, and topical relevance.' },
  { step: '04', title: 'Topic Research', desc: 'We research topics that align with the target website\'s audience and your SEO goals — ensuring the content is valuable and earns a natural placement.' },
  { step: '05', title: 'SEO Content Writing', desc: 'Our writers craft a professional, SEO-optimized article with your target keywords and a natural, contextual backlink to your site.' },
  { step: '06', title: 'Guest Post Submission', desc: 'We manually pitch the content to the target website\'s editor through genuine outreach, handling all communication and revisions.' },
  { step: '07', title: 'Live Publication', desc: 'Once approved, the guest post goes live with your backlink permanently placed within the content on the target website.' },
  { step: '08', title: 'Reporting', desc: 'You receive a detailed report with every live URL, domain authority, anchor text, and publication date. Full transparency, every time.' },
];

const whyChoose = [
  { title: 'Manual Outreach', desc: 'Every link is earned through genuine, manual outreach to real website owners. No automation, no shortcuts, no link networks.' },
  { title: 'White Hat SEO', desc: 'We follow Google\'s guidelines strictly. Every link is safe, sustainable, and built to last — no risk of penalty.' },
  { title: 'High Authority Websites', desc: 'We secure placements on real, high-DA websites with genuine traffic. No low-quality directories or spam sites.' },
  { title: 'Permanent Links', desc: 'Your links are permanent with a 12-month replacement guarantee. If a link is removed, we replace it for free.' },
  { title: 'Quality Content', desc: 'Every guest post includes a professionally written article. Website owners want to publish it, and readers want to read it.' },
  { title: 'Transparent Reporting', desc: 'You get a detailed report for every placement — live URL, DA, anchor text, and publication date. Nothing hidden, nothing vague.' },
];

export default function GuestPosting() {
  return (
    <>
      <SEO
        title="Guest Posting Services"
        description="Build authority and improve rankings with our guest posting services. High DA backlinks, manual outreach, white hat link building, and quality content included."
        path="/guest-posting"
        schema={[breadcrumbSchema(crumbs), faqSchema(guestPostFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Guest Posting Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-950 sm:text-5xl md:text-6xl reveal reveal-delay-1">
                High-Quality Guest Posting Services That Build Authority & <span className="text-gradient">Improve Rankings</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 reveal reveal-delay-2">
                Backlinks remain one of Google's top ranking factors. But not all links are created equal. Our guest posting service earns you high-quality, niche-relevant backlinks from real authority websites — the kind that move rankings and keep them there.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Request Guest Post
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8761557/pexels-photo-8761557.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professionals networking at business conference representing guest posting outreach and authority link building"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS GUEST POSTING */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">What Is Guest Posting?</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Guest posting is the practice of writing and publishing an article on another website in your industry, with a link back to your own site embedded within the content. It is one of the most effective and Google-approved ways to build high-quality backlinks.
              </p>
              <p>
                Here is why it works. Google treats each backlink to your site as a vote of confidence. When an authoritative website in your niche links to you, Google interprets that as a signal that your site is trustworthy and relevant. The more high-quality votes you have, the higher you rank.
              </p>
              <p>
                But it is not just about links. <strong>Guest blogging</strong> also puts your brand in front of a new audience, builds your reputation as an industry expert, and drives referral traffic from readers who click through to your site. It is one of the few SEO tactics that delivers value on multiple fronts simultaneously.
              </p>
              <p>
                The key is quality. One backlink from a high-DA, niche-relevant website is worth more than hundreds of links from low-quality directories. That is exactly what our <strong>guest posting service</strong> delivers — real links from real websites that move the needle.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5186375/pexels-photo-5186375.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person writing notes next to laptop and smartphone representing guest post content creation and publishing"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY GUEST POSTING MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Laptop displaying data analytics graph representing SEO growth and authority metrics from guest posting"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Guest Posting Matters</h2>
              <p className="mt-4 text-ink-600 leading-relaxed">
                Backlinks are still one of the strongest ranking signals Google uses. But earning them the right way — through quality content on real websites — is what separates lasting SEO growth from risky shortcuts. Here is what guest posting delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Link2 className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>High-quality backlinks</strong> — each guest post earns a contextual, DoFollow link from a real, authoritative website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Better Google rankings</strong> — quality backlinks are a direct ranking factor that lifts your position in search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Award className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Increased domain authority</strong> — links from high-DA sites pass authority to your domain, raising your overall SEO strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Search className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>More organic traffic</strong> — higher rankings bring more visitors who are actively searching for what you offer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Users className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Brand exposure</strong> — your content reaches new audiences on established websites, building awareness and credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-600"><Check className="h-4 w-4" /></span>
                  <span className="text-ink-700"><strong>Long-term SEO growth</strong> — unlike paid ads, quality backlinks compound over time and keep delivering value for years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR GUEST POSTING SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our Guest Posting <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            A complete authority link building programme covering every element needed to build a powerful, natural backlink profile.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/11314561/pexels-photo-11314561.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Assorted magazines on rack representing multiple websites and publications for guest post link building"
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

      {/* MANUAL OUTREACH (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Manual Outreach</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  The difference between a quality backlink and a worthless one comes down to how it was acquired. Automated link building tools and link networks produce links that Google can spot — and penalize. <strong>Manual outreach</strong> produces links that are genuine, safe, and powerful.
                </p>
                <p>
                  We do not buy links. We do not use software. We manually identify real websites in your niche, find the right contact, and send personalized pitches that get responses. Every placement is the result of a real conversation with a real website owner or editor.
                </p>
                <p>
                  This approach takes more time and effort — but it produces links that last. Links earned through manual outreach are on real websites with real traffic, and they are the kind of links that Google rewards with higher rankings.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4133783/pexels-photo-4133783.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Hands typing on laptop with email application open representing manual outreach for guest posting"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGH DA WEBSITES (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/10084450/pexels-photo-10084450.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern display of magazines on wooden shelf representing high DA authority websites for guest post placements"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">High Authority Websites</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Not all backlinks are equal. A link from a high-DA website with real traffic passes far more authority than a link from a low-quality directory. That is why we focus on securing placements on <strong>high DA websites</strong> that actually move your rankings.
              </p>
              <p>
                We target websites with Domain Authority ranging from 20 to 90+, vetting each one for traffic, relevance, content quality, and editorial standards. We avoid spam sites, PBNs, and low-quality directories that could harm your SEO.
              </p>
              <p>
                A single link from a DA 60 website can be worth more than fifty links from DA 10 sites. We help you build a portfolio of <strong>authority backlinks</strong> that signals to Google your site is a trusted source in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT WRITING INCLUDED (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Content Writing Included</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Every guest post needs great content. Website owners and editors only publish articles that are valuable, well-written, and relevant to their audience. That is why content quality is at the heart of our guest posting service.
                </p>
                <p>
                  Our experienced <strong>SEO writers</strong> craft each article from scratch — researched, original, and optimized for both readers and search engines. We handle topic research, writing, editing, and revisions so the content meets the target website\'s editorial standards.
                </p>
                <p>
                  You review and approve every article before it is pitched. The result: guest posts that website owners want to publish, readers want to read, and Google rewards with higher rankings.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4559605/pexels-photo-4559605.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Journalist writing article at table with laptop representing content writing included in guest posting services"
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
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            We have relationships with authoritative websites across virtually every industry — so your guest posts are always placed on topically relevant sites.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8117426/pexels-photo-8117426.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Diverse team of young professionals collaborating representing industries served by Rank Flow Agency guest posting"
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

      {/* OUR GUEST POSTING PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Guest Posting <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              A proven 8-step framework that takes your link building campaign from research to live publication with full transparency.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6804093/pexels-photo-6804093.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Organized whiteboard with colorful sticky notes representing the guest posting process and workflow planning"
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
                src="https://images.pexels.com/photos/7698820/pexels-photo-7698820.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Happy business team celebrating success representing quality results from Rank Flow Agency guest posting services"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              We are not a link marketplace. We are a <strong>guest posting agency</strong> that builds real relationships with real websites — earning links that are safe, powerful, and built to last.
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
              Request Guest Post <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl reveal reveal-delay-1">
            Guest Posting <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            Answers to the most common questions about guest posting and how authority backlinks improve your SEO.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={guestPostFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="guest-posting" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal">
                Ready to Build Authority That Lasts?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600 reveal reveal-delay-1">
                Get a free guest posting consultation today. We will analyze your backlink profile, research your competitors\' links, and build a custom link building campaign to improve your rankings. No obligation, just clarity.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Request Guest Post
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
