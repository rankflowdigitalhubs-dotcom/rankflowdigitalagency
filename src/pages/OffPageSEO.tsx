import { Check, ArrowRight, Search, TrendingUp, Link2, Globe, BarChart3, Target, PenLine, Megaphone, Building2, Users, ShieldCheck, Award, FileText, Trash2, Repeat } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Off-Page SEO Services', path: '/off-page-seo' },
];

const offPageFaqs = [
  { q: 'What is off-page SEO?', a: 'Off-page SEO is the process of building your website authority through external signals like backlinks, brand mentions, social signals, and digital PR. While on-page SEO optimizes elements on your website, off-page SEO tells Google that other websites trust and reference your content. The more quality backlinks and mentions you earn, the higher your domain authority and search rankings climb.' },
  { q: 'How long does off-page SEO take to work?', a: 'Most campaigns show ranking improvements within 2-3 months as Google discovers and credits new backlinks. Significant growth typically appears in 4-6 months. The timeline depends on your industry competition, current domain authority, and the volume of quality links being built. SEO is a long-term strategy, not a quick fix.' },
  { q: 'What is the difference between on-page and off-page SEO?', a: 'On-page SEO optimizes elements on your website like content, title tags, meta descriptions, and headings. Off-page SEO focuses on external signals like backlinks, brand mentions, and digital PR that build your site authority. Both are essential and work together to improve your overall search rankings.' },
  { q: 'Are your backlinks white hat and safe?', a: 'Yes. We use 100% white hat link building techniques. No PBNs, no link farms, no paid links, no spammy directories. Every backlink is earned through genuine manual outreach to real, authoritative websites. We follow Google Webmaster Guidelines strictly to protect your site from penalties.' },
  { q: 'What is domain authority and why does it matter?', a: 'Domain Authority is a score from 1 to 100 that predicts how well your website will rank on search engines. It is influenced primarily by the quality and quantity of backlinks pointing to your site. Higher domain authority means better rankings, more traffic, and more visibility for your content.' },
  { q: 'Do you offer guest posting services?', a: 'Yes. Guest posting is a core part of our off-page SEO service. We write high-quality, relevant content and publish it on authoritative websites in your niche with a contextual backlink to your site. Every guest post is placed on a real website with real traffic and genuine authority.' },
  { q: 'What is digital PR and how does it help SEO?', a: 'Digital PR is the process of getting your brand mentioned on news sites, blogs, and authoritative publications. It builds brand awareness, earns natural backlinks, and improves your site trust signals. Digital PR combines traditional public relations with SEO-focused link building to maximize both visibility and authority.' },
  { q: 'How do you find link building opportunities?', a: 'We use a combination of competitor backlink analysis, link gap analysis, and manual prospecting to find the best link opportunities for your niche. We look for websites with high domain authority, relevant content, and genuine traffic. Every opportunity is vetted for quality before we begin outreach.' },
  { q: 'Can you remove toxic backlinks?', a: 'Yes. We conduct a toxic link audit to identify harmful backlinks from spammy or low-quality websites. We then work to disavow these links through Google Disavow Tool to protect your site from potential penalties and ensure your backlink profile remains clean and healthy.' },
  { q: 'How much do off-page SEO services cost?', a: 'The cost depends on your industry competition, current domain authority, and the number of backlinks needed. We offer flexible packages for businesses of all sizes, from local shops to enterprise brands. Contact us for a free consultation and custom quote with no obligation.' },
];

const services = [
  { icon: PenLine, title: 'Guest Posting', desc: 'We write high-quality content and publish it on authoritative websites in your niche with contextual backlinks to your site.' },
  { icon: Users, title: 'Manual Outreach', desc: 'We do personalized, one-by-one outreach to website owners and bloggers to secure genuine, editorial backlinks.' },
  { icon: Link2, title: 'High Authority Backlinks', desc: 'We secure backlinks from websites with high domain authority to boost your search rankings and credibility.' },
  { icon: FileText, title: 'Niche Edits', desc: 'We get contextual links placed within existing, already-indexed articles on relevant, authoritative websites.' },
  { icon: Megaphone, title: 'Digital PR', desc: 'We get your brand featured on news sites, blogs, and publications to earn natural backlinks and media coverage.' },
  { icon: Globe, title: 'Brand Mentions', desc: 'We build your brand presence across the web with strategic mentions on relevant websites and platforms.' },
  { icon: Building2, title: 'Local Citations', desc: 'We build consistent local business citations across directories to improve local search visibility and trust.' },
  { icon: Building2, title: 'Business Directory Submissions', desc: 'We submit your website to high-quality, relevant business directories for authoritative backlinks.' },
  { icon: Users, title: 'Social Profile Creation', desc: 'We create and optimize social media profiles that link to your website and build your online presence.' },
  { icon: Search, title: 'Competitor Backlink Analysis', desc: 'We analyze your competitors backlink profiles to find link opportunities you can replicate and surpass.' },
  { icon: Target, title: 'Link Gap Analysis', desc: 'We identify the backlinks your competitors have that you do not, then build a plan to close the gap.' },
  { icon: Link2, title: 'Anchor Text Optimization', desc: 'We optimize your anchor text distribution to signal relevance to Google without over-optimization.' },
  { icon: Trash2, title: 'Toxic Link Audit', desc: 'We identify and disavow harmful backlinks from spammy websites that could trigger Google penalties.' },
  { icon: Repeat, title: 'Monthly Link Building Campaigns', desc: 'We run ongoing monthly link building campaigns that consistently grow your backlink profile and authority.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Dental practice off-page SEO for more patient appointments.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Restaurant off-page SEO to attract more local diners.' },
  { name: 'Roofers', icon: '🏠', desc: 'Roofing company off-page SEO for more service calls.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Plumbing business off-page SEO for emergency call leads.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Law firm off-page SEO for more case inquiries.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Real estate off-page SEO for more property inquiries.' },
  { name: 'eCommerce', icon: '🛒', desc: 'eCommerce off-page SEO for more online sales.' },
  { name: 'Shopify', icon: '🏷️', desc: 'Shopify store off-page SEO for product page authority.' },
  { name: 'SaaS', icon: '💻', desc: 'SaaS company off-page SEO for more trial signups.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Small business off-page SEO for local market growth.' },
];

const process = [
  { step: '01', title: 'Website Audit', desc: 'We analyze your current backlink profile, domain authority, and link velocity to establish a baseline for growth.' },
  { step: '02', title: 'Competitor Analysis', desc: 'We analyze your top competitors backlink profiles to find link opportunities and understand their authority strategy.' },
  { step: '03', title: 'Backlink Strategy', desc: 'We develop a custom link building strategy based on your niche, competition, and target keywords.' },
  { step: '04', title: 'Manual Outreach', desc: 'We conduct personalized, one-by-one outreach to website owners, bloggers, and journalists to secure genuine backlinks.' },
  { step: '05', title: 'Quality Link Acquisition', desc: 'We secure high-authority backlinks from real, relevant websites with genuine traffic and editorial standards.' },
  { step: '06', title: 'Authority Building', desc: 'We build your brand presence across the web with digital PR, brand mentions, and strategic content placement.' },
  { step: '07', title: 'Performance Tracking', desc: 'We track new backlinks, domain authority growth, ranking improvements, and organic traffic increases.' },
  { step: '08', title: 'Monthly Reporting', desc: 'You receive transparent monthly reports showing every link built, authority growth, and ranking improvements.' },
];

const whyChoose = [
  { title: 'White Hat SEO', desc: 'Every backlink is earned through genuine outreach. No PBNs, no link farms, no paid links. We follow Google guidelines strictly to protect your site.' },
  { title: 'Manual Link Building', desc: 'We do not use automated tools or spammy software. Every link is built through personalized, human outreach to real website owners.' },
  { title: 'High Quality Backlinks', desc: 'We secure links from real, authoritative websites with genuine traffic. Quality over quantity, every single time.' },
  { title: 'Transparent Reporting', desc: 'You see every link we build, with the domain, URL, and authority metrics. No mystery links, no hidden practices, full transparency.' },
  { title: 'Affordable Packages', desc: 'We offer flexible link building packages for businesses of all sizes. From local shops to enterprise brands, we have a plan that fits your budget.' },
  { title: 'Long-Term Growth Strategy', desc: 'We build sustainable authority that compounds over time. Our links are designed to last, delivering ranking growth for years to come.' },
];

export default function OffPageSEO() {
  return (
    <>
      <SEO
        title="Off-Page SEO Services"
        description="Build authority and increase Google rankings with our off-page SEO services. White hat link building, guest posting, digital PR, and competitor analysis."
        path="/off-page-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(offPageFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Off-Page SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Off-Page SEO Services That Build Authority &amp; Increase <span className="text-gradient">Google Rankings</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                On-page SEO gets your house in order. <strong>Off-page SEO services</strong> get the rest of the internet to vouch for you. We build <strong>high authority backlinks</strong>, earn brand mentions, and run <strong>digital PR</strong> campaigns that tell Google your website is trusted, authoritative, and worthy of top <strong>organic rankings</strong>.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free SEO Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Request SEO Strategy
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Robotic hand touching digital network representing off-page SEO services and authority building through backlinks"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS OFF-PAGE SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is Off-Page SEO?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Off-page SEO</strong> is everything you do outside your own website to improve its search engine rankings. While on-page SEO focuses on optimizing your content and code, off-page SEO focuses on building authority through external signals, primarily <strong>backlink building</strong>.
              </p>
              <p>
                Think of it this way: on-page SEO is your resume. It shows Google what you know and what you offer. Off-page SEO is your references. It shows Google what others think of you. The more respected websites that link to yours, the more Google trusts your content and the higher you rank.
              </p>
              <p>
                Off-page SEO includes <strong>guest posting services</strong>, manual outreach, <strong>digital PR</strong>, brand mentions, local citations, social signals, and influencer partnerships. Each external link acts as a vote of confidence. The more high-quality votes you have from authoritative websites, the stronger your <strong>domain authority</strong> becomes.
              </p>
              <p>
                When done right with <strong>white hat SEO</strong> techniques, off-page SEO compounds over time. Each new quality backlink strengthens your authority, pushing your rankings higher and driving more organic traffic to your website for years to come.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5354506/pexels-photo-5354506.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Patch cables plugged into network panel representing off-page SEO link building and digital connections between websites"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY OFF-PAGE SEO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Multiple growth graphs on laptop screen representing why off-page SEO matters for domain authority and rankings"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Off-Page SEO Matters</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                You can have the best content on the web, but without off-page signals, Google has no way to know it is trustworthy. Off-page SEO builds the authority that turns good content into top-ranking content. Here is what it delivers:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Higher Google rankings</strong> — quality backlinks are one of the top three ranking factors Google uses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><BarChart3 className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better domain authority</strong> — each quality backlink increases your site overall authority score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Search className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More organic traffic</strong> — higher rankings mean more clicks, more visitors, and more customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Award className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Strong brand reputation</strong> — being featured on authoritative sites builds trust with your audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><ShieldCheck className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better trust signals</strong> — Google sees your brand mentioned across the web and treats you as an authority</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Long-term SEO growth</strong> — quality backlinks compound, delivering increasing returns over time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OFF-PAGE SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our Off-Page SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A complete off-page optimization service covering every aspect of authority building. From guest posting to digital PR, we build the signals that Google trusts.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Person holding chart and bar graph representing off-page SEO services and data-driven link building analysis"
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

      {/* GUEST POSTING (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Guest Posting</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong>Guest posting services</strong> are one of the most effective off-page SEO strategies. We write high-quality, relevant articles and publish them on authoritative websites in your niche, with a contextual backlink pointing to your site.
                </p>
                <p>
                  Every guest post is placed on a real website with real traffic and genuine authority. We do not use private blog networks or low-quality sites. Each placement is earned through manual outreach and editorial review, ensuring the backlink carries real SEO value.
                </p>
                <p>
                  Guest posts do more than build backlinks. They put your brand in front of new audiences, establish your expertise, and drive referral traffic. When a reader on an authoritative site sees your content and clicks through to your website, you gain both a backlink and a potential customer.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Person using MacBook Pro for content creation representing guest posting services and writing articles for external websites"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL PR (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6950229/pexels-photo-6950229.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Television reporter in front of conference room representing digital PR and media relations for brand mentions"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Digital PR</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Digital PR</strong> is the modern evolution of public relations, focused on getting your brand featured on news sites, industry blogs, and authoritative publications. It combines traditional PR outreach with SEO-focused link building to maximize both visibility and authority.
              </p>
              <p>
                We craft compelling stories, data-driven content, and newsworthy announcements that journalists and bloggers want to cover. When they write about your brand, they naturally link to your website, earning you high-authority backlinks that are nearly impossible to get through standard outreach.
              </p>
              <p>
                Digital PR builds more than backlinks. It builds brand awareness, credibility, and trust. When potential customers see your brand mentioned on sites they already trust, they are more likely to trust you too. That trust translates into higher click-through rates, more traffic, and more conversions.
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
              We have built off-page SEO campaigns for businesses across dozens of industries. Each industry has unique link building opportunities, authority sources, and competitive landscapes.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7108268/pexels-photo-7108268.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Colleagues in office setting representing diverse businesses and industries served by off-page SEO services"
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
            A proven 8-step process that takes your website from audit to sustained authority growth.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5324974/pexels-photo-5324974.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Businesspeople examining schemes on papers representing the off-page SEO process and strategy planning workflow"
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
                  src="https://images.pexels.com/photos/31709104/pexels-photo-31709104.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern office team working at desks representing why choose Rank Flow Agency for off-page SEO services"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="eyebrow">Why Us</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We are an <strong>off-page SEO agency</strong> that builds authority the right way. No shortcuts, no spam, no risky tactics. Just genuine, manual outreach that earns real backlinks from real websites. Here is why businesses choose us:
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
                Get Free SEO Consultation <ArrowRight className="h-4 w-4" />
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
            Off-Page SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about off-page SEO and how it builds your website authority.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={offPageFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="off-page-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Ready to Build Authority That Google Trusts?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Request a free off-page SEO consultation today. We will analyze your backlink profile, assess your domain authority, and show you exactly how to build the authority that drives higher rankings and more organic traffic. No obligation, just results.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free SEO Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Request SEO Strategy
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
