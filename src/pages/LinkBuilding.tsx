import { Search, Check, ArrowRight, Link2, Mail, TrendingUp, Award, Target, BarChart3, ShieldCheck, Wrench, FileSearch } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Link Building Services', path: '/link-building' },
];

const linkFaqs = [
  { q: 'What is link building and why does it matter for SEO?', a: 'Link building is the process of earning backlinks from other websites to your own. Google treats each backlink as a vote of confidence — the more quality links you have, the more authoritative your site appears. Quality backlinks are one of the strongest ranking factors Google uses, making link building essential for any serious SEO strategy.' },
  { q: 'Are your backlinks safe and Google-friendly?', a: 'Yes. We use 100% white hat link building techniques that comply with Google\'s guidelines. No PBNs, no link farms, no paid links, no spammy directories. Every link is earned through genuine outreach and quality content — safe, sustainable, and penalty-free.' },
  { q: 'What is the difference between white hat and black hat link building?', a: 'White hat link building follows Google\'s guidelines — earning links through real outreach, quality content, and genuine relationships. Black hat link building uses shortcuts like buying links, using PBNs, or automated spam. Black hat tactics may produce short-term gains but lead to penalties. We only use white hat techniques.' },
  { q: 'How long does it take to see results from link building?', a: 'Most clients see initial ranking improvements within 4–8 weeks of links going live, with significant growth in 3–6 months. SEO link building compounds over time — the more quality links you build, the faster your rankings improve. We track every link and report on its impact monthly.' },
  { q: 'What types of backlinks do you build?', a: 'We build a diverse range of white hat backlinks including guest posts, niche edits, contextual backlinks, resource page links, broken link building, and blogger outreach placements. We tailor the mix to your industry, goals, and current backlink profile for a natural, effective link portfolio.' },
  { q: 'Do you guarantee permanent links?', a: 'Yes. Every link we build is permanent with a 12-month replacement guarantee. If a link is removed within the first 12 months, we replace it at no cost. We build links on real websites with genuine traffic, so they are built to last.' },
  { q: 'How many links do I need per month?', a: 'It depends on your competition and goals. For most businesses, 5–15 high-quality links per month produces steady ranking growth. We analyze your niche and competitors to recommend the right volume — quality always matters more than quantity.' },
  { q: 'What is a niche edit and how is it different from a guest post?', a: 'A niche edit is a backlink placed into an existing, already-published article on another website. A guest post is a brand new article written and published on another website. Both are valuable — niche edits are faster and often cheaper, while guest posts provide more context and content control.' },
  { q: 'Do you provide reports for all links built?', a: 'Absolutely. You receive a detailed monthly report with every link built — including the live URL, domain authority, anchor text, link type, and placement date. Full transparency so you always know exactly what you are paying for.' },
  { q: 'Can you analyze my competitors\' backlinks?', a: 'Yes. Our competitor backlink analysis identifies the websites linking to your top competitors, then we target those same sites (and more) for your link building campaign. This is one of the most effective ways to find link opportunities and close the ranking gap.' },
];

const services = [
  { icon: ShieldCheck, title: 'White Hat Link Building', desc: 'Every link we build follows Google\'s guidelines. No PBNs, no link farms, no risky shortcuts. Just safe, sustainable link building that produces lasting results without penalty risk.' },
  { icon: FileText, title: 'Guest Posting', desc: 'We write and publish original articles on authoritative websites in your niche, each containing a contextual backlink to your site. The gold standard for quality link building.' },
  { icon: Wrench, title: 'Niche Edits', desc: 'We secure backlinks within existing, already-ranking articles on relevant websites. Faster than guest posts and often placed on pages with established authority and traffic.' },
  { icon: Link2, title: 'Contextual Backlinks', desc: 'Your links are placed naturally within the body of relevant content — the most powerful type of backlink Google recognizes. No footer links, no sidebar spam.' },
  { icon: Award, title: 'Authority Backlinks', desc: 'We target high-DA websites that pass maximum link equity to your domain. A single authority backlink can outperform dozens of low-quality links.' },
  { icon: Mail, title: 'Blogger Outreach', desc: 'We build genuine relationships with bloggers and website owners in your industry, earning natural backlinks through real outreach — not automated software or paid placements.' },
  { icon: FileSearch, title: 'Resource Page Links', desc: 'We find resource pages and link roundups in your niche and pitch your content for inclusion. These pages are specifically designed to link out, making them ideal link building targets.' },
  { icon: Wrench, title: 'Broken Link Building', desc: 'We find broken links on relevant websites and offer your content as a replacement. This helps the website owner fix their broken link while earning you a valuable backlink.' },
  { icon: Search, title: 'Competitor Backlink Analysis', desc: 'We analyze your competitors\' backlink profiles to find link opportunities they are using. Then we target those same websites to close the ranking gap and surpass them.' },
  { icon: BarChart3, title: 'Link Gap Analysis', desc: 'We identify the backlink gaps between you and your competitors — the websites linking to them but not to you. These gaps represent your fastest path to higher rankings.' },
  { icon: Target, title: 'Anchor Text Strategy', desc: 'We develop a natural anchor text distribution using branded, exact match, and partial match anchors. The right strategy maximizes rankings without triggering spam signals.' },
  { icon: TrendingUp, title: 'Monthly Link Building Campaigns', desc: 'We run ongoing monthly campaigns that build momentum over time. Consistent link building compounds, producing faster ranking growth with each passing month.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Dental backlinks from health and medical authority websites.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Food blog and local publication backlinks for restaurants.' },
  { name: 'Roofers', icon: '🏠', desc: 'Home improvement and contractor site backlinks for roofers.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Home service and local directory backlinks for plumbers.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Legal industry and law journal backlinks for law firms.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Property blog and real estate publication backlinks.' },
  { name: 'Shopify Stores', icon: '🏷️', desc: 'eCommerce and retail backlinks for Shopify store growth.' },
  { name: 'SaaS', icon: '💻', desc: 'Tech publication and software review backlinks for SaaS.' },
  { name: 'eCommerce', icon: '🛒', desc: 'Product review and shopping blog backlinks for stores.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Local and industry-relevant backlinks for small business SEO.' },
];

const process = [
  { step: '01', title: 'Website Audit', desc: 'We audit your current backlink profile, domain authority, and ranking position to understand your starting point and identify toxic links that need disavowing.' },
  { step: '02', title: 'Competitor Analysis', desc: 'We analyze your top competitors\' backlinks to find link opportunities and websites they are using to rank above you in search results.' },
  { step: '03', title: 'Prospect Research', desc: 'We hand-pick high-quality, niche-relevant websites for outreach. Every prospect is vetted for domain authority, traffic, content quality, and topical relevance.' },
  { step: '04', title: 'Manual Outreach', desc: 'We send personalized, manual outreach emails to each website owner or editor. No automated software — every pitch is crafted individually for maximum response rates.' },
  { step: '05', title: 'Content Creation', desc: 'When content is needed, our writers create professional, SEO-optimized articles that website owners want to publish and readers want to read.' },
  { step: '06', title: 'Link Placement', desc: 'We secure the placement of your backlink within the content on the target website — naturally, contextually, and permanently.' },
  { step: '07', title: 'Quality Check', desc: 'Every placed link is verified for correctness, DoFollow status, anchor text, and placement quality. If anything is off, we get it fixed before reporting.' },
  { step: '08', title: 'Monthly Reporting', desc: 'You receive a detailed report with every link built — live URL, domain authority, anchor text, link type, and placement date. Full transparency, every month.' },
];

const whyChoose = [
  { title: 'White Hat Techniques', desc: 'We follow Google\'s guidelines strictly. Every link is earned through genuine outreach and quality content — no PBNs, no link farms, no risky shortcuts.' },
  { title: 'Manual Outreach', desc: 'Every link is secured through personalized, manual outreach to real website owners. No automation, no software, no spam — just real relationships.' },
  { title: 'High Authority Websites', desc: 'We target real websites with genuine traffic and high domain authority. No low-quality directories, no spam sites, no link networks.' },
  { title: 'Natural Backlinks', desc: 'We build a diverse, natural backlink profile that looks organic to Google. Different domains, authorities, link types, and anchor texts — the way Google wants to see it.' },
  { title: 'Transparent Reporting', desc: 'You get a detailed report for every link — live URL, DA, anchor text, link type, and placement date. Nothing hidden, nothing vague, nothing unverified.' },
  { title: 'Long-Term SEO Growth', desc: 'We do not chase quick wins. We build a backlink foundation that compounds over time, producing sustainable ranking growth that lasts for years.' },
];

export default function LinkBuilding() {
  return (
    <>
      <SEO
        title="Link Building Services"
        description="Improve rankings and authority with our white hat link building services. Guest posts, niche edits, blogger outreach, and authority backlinks. Get a free audit."
        path="/link-building"
        schema={[breadcrumbSchema(crumbs), faqSchema(linkFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Link Building Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Professional Link Building Services That Improve Rankings & <span className="text-gradient">Authority</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                Backlinks are the backbone of Google's ranking algorithm. But earning them the right way — through genuine outreach and quality content — is what separates lasting SEO growth from risky shortcuts. Our <strong>link building services</strong> deliver safe, white hat backlinks from real authority websites.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free Backlink Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/20716466/pexels-photo-20716466.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Metal chain with interlocked links representing backlink building and website authority connections"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS LINK BUILDING */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is Link Building?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                Link building is the process of earning backlinks — links from other websites that point to yours. Think of each backlink as a vote of confidence. When a website links to you, it is telling Google: "This content is worth recommending."
              </p>
              <p>
                Google uses these votes to determine which websites deserve to rank at the top of search results. The more quality backlinks you have from authoritative, relevant websites, the higher Google ranks you. It is one of the most powerful ranking factors in Google's algorithm — and it has been since the beginning.
              </p>
              <p>
                But not all links are equal. A single backlink from a high-authority website in your niche can be worth more than hundreds of links from low-quality directories. That is why <strong>backlink building</strong> is not about volume — it is about quality, relevance, and natural growth.
              </p>
              <p>
                As a dedicated <strong>link building agency</strong>, we specialize in earning those high-quality votes through white hat outreach, quality content, and genuine relationships with website owners. The result is a backlink profile that Google trusts and rewards with higher <strong>organic rankings</strong>.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/35740122/pexels-photo-35740122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Close-up of metal chain link in warm light representing website connections and backlink authority building"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY LINK BUILDING MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Graph and line chart on paper representing SEO growth and ranking improvements from link building"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Link Building Matters</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                You can have the best content, the fastest website, and the most thorough on-page SEO — but without quality backlinks, you will struggle to rank for competitive keywords. Here is what link building delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Higher Google rankings</strong> — quality backlinks are a direct ranking factor that lifts your position in search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Award className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Increased Domain Authority</strong> — links from high-DA sites pass authority to your domain, raising your overall SEO strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Search className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More organic traffic</strong> — higher rankings bring more visitors who are actively searching for what you offer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Target className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Faster keyword growth</strong> — a strong backlink profile helps new content rank faster and existing pages climb quicker</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><ShieldCheck className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Improved trust</strong> — Google sees quality backlinks as a signal that your site is a credible, authoritative source</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Check className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Long-term SEO success</strong> — unlike paid ads, quality backlinks compound over time and keep delivering value for years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR LINK BUILDING SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our Link Building <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A complete <strong>off-page SEO</strong> programme covering every white hat link building strategy needed to build a powerful, natural backlink profile.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/9227484/pexels-photo-9227484.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Colorful puzzle pieces representing diverse link building strategies and comprehensive backlink services"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="group h-full rounded-3xl bg-white/[0.03] p-7 hover:bg-white/[0.06] transition-colors">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHITE HAT LINK BUILDING (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">White Hat Link Building</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  There are two ways to build backlinks: the right way and the risky way. The risky way — buying links, using PBNs, automated spam — may produce short-term gains, but Google catches up. When it does, your rankings collapse and your site can be penalized.
                </p>
                <p>
                  <strong>White hat link building</strong> is the right way. It means earning every link through genuine outreach, quality content, and real relationships with website owners. Every link is placed on a real website with real traffic because the website owner genuinely wants to link to your content.
                </p>
                <p>
                  This approach takes more time and effort — but it produces links that last. Links that are safe from algorithm updates. Links that Google rewards with higher rankings, not penalties. When you work with us, you get the peace of mind that comes from knowing every link is built the right way.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8828681/pexels-photo-8828681.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Compass on world map representing white hat link building and ethical SEO direction"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOGGER OUTREACH (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8284724/pexels-photo-8284724.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person using laptop with messaging app open representing blogger outreach and professional link building communication"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Blogger Outreach</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Blogger outreach</strong> is the heart of white hat link building. It means finding real bloggers and website owners in your niche, building genuine relationships with them, and earning natural backlinks because your content is worth linking to.
              </p>
              <p>
                We do not buy links. We do not use automated software. We manually identify the right websites, find the right contact, and send personalized pitches that get responses. Every placement is the result of a real conversation with a real person who decided your content was worth featuring.
              </p>
              <p>
                This approach produces the highest-quality, most natural backlinks possible — the kind that Google loves and that stand the test of time. It is slower and harder than buying links, but it is the only approach that produces lasting <strong>SEO link building</strong> results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BROKEN LINK BUILDING (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Broken Link Building</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong>Broken link building</strong> is one of the most effective and underused link building strategies. Here is how it works: we find broken links on relevant websites in your niche — links that point to pages that no longer exist — and offer your content as a replacement.
                </p>
                <p>
                  It is a win-win. The website owner fixes a broken link that is hurting their user experience, and you earn a valuable backlink on an established, relevant page. Because you are helping them solve a problem, response rates are high.
                </p>
                <p>
                  We use specialized tools to crawl target websites, identify broken outbound links, find or create replacement content on your site, and reach out to the website owner with a helpful, personalized pitch. It is one of the most white hat link building methods available — and it works.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4144768/pexels-photo-4144768.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Magnifying glass on blue surface representing broken link building and research for backlink opportunities"
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
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            We have outreach relationships with authoritative websites across virtually every industry — so your backlinks always come from topically relevant sources.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8355476/pexels-photo-8355476.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Diverse group of professionals in strategic discussion representing industries served by Rank Flow Agency link building"
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

      {/* OUR LINK BUILDING PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Link Building <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              A proven 8-step framework that takes your link building campaign from research to live placement with full transparency at every stage.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7679944/pexels-photo-7679944.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Wooden blocks forming staircase with upward arrow representing the link building process and systematic workflow"
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
        </div>
      </section>

      {/* WHY CHOOSE RANK FLOW */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6350012/pexels-photo-6350012.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Darts hitting dartboard target with precision representing quality results from Rank Flow Agency link building services"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We are not a link marketplace. We are a <strong>link building agency</strong> that earns real backlinks through genuine outreach — building a backlink profile that is safe, powerful, and built to last.
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
            <button onClick={() => navigate('/contact')} className="btn-glow mt-8">
              Get Free Backlink Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl reveal reveal-delay-1">
            Link Building <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about link building and how quality backlinks improve your SEO.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={linkFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="link-building" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Ready to Build a Backlink Profile That Ranks?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Get a free backlink strategy consultation today. We will audit your current backlink profile, analyze your competitors\' links, and build a custom link building campaign to improve your rankings. No obligation, just clarity.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free Backlink Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Talk to a Strategist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FileText({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
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
