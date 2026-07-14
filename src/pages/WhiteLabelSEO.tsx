import { Check, ArrowRight, TrendingUp, Link2, BarChart3, Briefcase, Users, ShieldCheck, Award, MapPin, Wrench, PenLine, ShoppingBag, ClipboardCheck, LineChart, FileSearch } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'White Label SEO Services', path: '/white-label-seo' },
];

const whiteLabelFaqs = [
  { q: 'What is white label SEO?', a: 'White label SEO is when our team handles all the SEO work for your clients under your brand name. Your clients never know we exist. You get the credit, the reports carry your logo, and you set the prices. We work behind the scenes as your dedicated SEO department while you focus on client relationships and growing your agency.' },
  { q: 'How does white label SEO pricing work?', a: 'You pay us wholesale rates for the SEO work. You charge your clients retail rates. The difference is your profit margin. We offer flexible packages so you can scale up or down based on client demand. There are no minimums, no long-term contracts, and no hidden fees. You only pay for the services your clients need.' },
  { q: 'Will my clients know the work is outsourced?', a: 'No. Everything we do is white labeled. Reports carry your logo and brand colors. Communication goes through you. We never contact your clients directly. We can even use your email domain for reporting if needed. Your clients see a seamless, fully branded experience from your agency.' },
  { q: 'What SEO services can you white label?', a: 'We offer a full range of white label SEO services including local SEO, technical SEO, on-page SEO, off-page SEO, link building, guest posting, content writing, Shopify SEO, SEO audits, and monthly SEO management. You can offer all of these services to your clients without hiring a single in-house SEO specialist.' },
  { q: 'Do you sign NDAs?', a: 'Yes. We are happy to sign mutual NDAs and non-compete agreements. We understand that agency-client confidentiality is critical. We never disclose our agency partners to anyone, and we never contact your clients. Your partnership with us remains completely private.' },
  { q: 'How fast can you onboard a new client?', a: 'Most new clients are onboarded within 3-5 business days. We start with a discovery call to understand the client, their industry, and their goals. Then we perform an initial audit and deliver a strategy within the first week. Implementation begins immediately after strategy approval.' },
  { q: 'What do the white label reports look like?', a: 'Our reports are fully branded with your agency logo, colors, and domain. They cover keyword rankings, organic traffic growth, backlinks acquired, work completed, and next steps. You can send these reports directly to your clients or review them first. Reports are available in PDF format and through a white label dashboard portal.' },
  { q: 'Can you handle multiple clients at once?', a: 'Yes. We work with agencies that have 1 client and agencies that have 100+ clients. Our team scales to match your needs. Each client gets a dedicated SEO specialist who manages their campaign end-to-end. You get a single point of contact at our agency for all account management.' },
  { q: 'Do you offer white label link building?', a: 'Yes. Our white label link building service includes manual outreach, guest posting, niche edits, and digital PR. All links are white hat and placed on real, authoritative websites. Link building reports are white labeled with your branding so your clients see the value you are delivering.' },
  { q: 'What if a client asks to speak to the SEO team?', a: 'We can handle this in two ways. Most agencies prefer to act as the intermediary, passing questions between the client and our team. If you prefer, we can join client calls as a white label member of your team, using your brand name. We are flexible and adapt to your preferred workflow.' },
  { q: 'How do I get started with white label SEO?', a: 'Book a free strategy call with us. We will learn about your agency, your clients, and your goals. Then we will recommend the best white label SEO package for your needs. There is no obligation, no pressure, and no commitment required to have the call.' },
];

const services = [
  { icon: MapPin, title: 'White Label Local SEO', desc: 'We optimize your clients Google Business Profiles, local citations, and local search rankings under your brand.' },
  { icon: Wrench, title: 'White Label Technical SEO', desc: 'We fix crawl errors, site speed, Core Web Vitals, and technical issues for your clients with white labeled reporting.' },
  { icon: FileSearch, title: 'White Label On-Page SEO', desc: 'We optimize titles, meta tags, headings, content, and schema markup on every page of your clients websites.' },
  { icon: Link2, title: 'White Label Off-Page SEO', desc: 'We build authority through backlinks, brand mentions, and digital PR campaigns for your clients behind the scenes.' },
  { icon: Link2, title: 'White Label Link Building', desc: 'We secure high authority backlinks through manual outreach and guest posting, all delivered under your brand.' },
  { icon: PenLine, title: 'White Label Guest Posting', desc: 'We write and publish guest posts on authoritative websites with contextual backlinks for your clients.' },
  { icon: PenLine, title: 'White Label Content Writing', desc: 'We create SEO-optimized blog posts, product descriptions, and landing page copy that ranks and converts.' },
  { icon: ShoppingBag, title: 'White Label Shopify SEO', desc: 'We optimize Shopify stores for your clients including product pages, collections, and technical SEO.' },
  { icon: ClipboardCheck, title: 'White Label SEO Audits', desc: 'We perform comprehensive SEO audits for your clients and deliver them under your agency branding.' },
  { icon: LineChart, title: 'Monthly SEO Management', desc: 'We handle ongoing monthly SEO for your clients including optimization, link building, and reporting.' },
  { icon: BarChart3, title: 'Reporting Under Your Brand', desc: 'Every report carries your logo, your colors, and your domain. Your clients see only your agency.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Dental practice SEO for more patient appointments.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Restaurant SEO to attract more local diners.' },
  { name: 'Roofers', icon: '🏠', desc: 'Roofing company SEO for more service calls.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Plumbing business SEO for emergency call leads.' },
  { name: 'Lawyers', icon: '⚖️', desc: 'Law firm SEO for more case inquiries.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Real estate SEO for more property inquiries.' },
  { name: 'eCommerce', icon: '🛒', desc: 'eCommerce SEO for more online sales.' },
  { name: 'Medical Clinics', icon: '🏥', desc: 'Medical clinic SEO for more patient bookings.' },
  { name: 'SaaS', icon: '💻', desc: 'SaaS company SEO for more trial signups.' },
  { name: 'Small Businesses', icon: '💼', desc: 'Small business SEO for local market growth.' },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn about your agency, your clients, your goals, and your preferred workflow. We discuss pricing, reporting, and communication preferences.' },
  { step: '02', title: 'Client Analysis', desc: 'We analyze each client website, industry, competitors, and current SEO performance to identify opportunities and build a baseline.' },
  { step: '03', title: 'SEO Strategy', desc: 'We develop a custom SEO strategy for each client based on their industry, competition, and goals. You review and approve before we begin.' },
  { step: '04', title: 'Implementation', desc: 'Our team executes the SEO work: technical fixes, content optimization, link building, and local SEO. All done behind the scenes under your brand.' },
  { step: '05', title: 'Monthly Reporting', desc: 'You receive white label reports with your branding covering rankings, traffic, links, and work completed. Send them directly to your clients.' },
  { step: '06', title: 'Continuous Optimization', desc: 'We continuously monitor, adjust, and optimize campaigns based on performance data, algorithm updates, and client feedback.' },
];

const whyChoose = [
  { title: 'White Label Reports', desc: 'Every report carries your logo, your colors, and your domain. Your clients see a seamless, fully branded experience from your agency.' },
  { title: 'NDA Friendly', desc: 'We are happy to sign mutual NDAs and non-compete agreements. Your partnership with us remains completely private and confidential.' },
  { title: 'Dedicated SEO Specialists', desc: 'Each client gets a dedicated SEO specialist who manages their campaign end-to-end. You get a single point of contact for all accounts.' },
  { title: 'Transparent Communication', desc: 'We keep you informed at every step. You always know what work is being done, what results are being achieved, and what is coming next.' },
  { title: 'Fast Turnaround', desc: 'We deliver audits in 3-5 days, content in 3-5 days, and link building reports monthly. No long waits, no delays, no excuses.' },
  { title: 'Long-Term Partnership', desc: 'We are not a one-off vendor. We build long-term relationships with our agency partners, growing alongside your business for years to come.' },
];

export default function WhiteLabelSEO() {
  return (
    <>
      <SEO
        title="White Label SEO Services"
        description="Scale your agency with white label SEO from Rank Flow Agency. White label link building, content writing, technical SEO, and local SEO under your brand name."
        path="/white-label-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(whiteLabelFaqs)]}
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
              <span className="eyebrow mt-6 reveal">White Label SEO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                White Label SEO Services for Agencies That Want to <span className="text-gradient">Scale</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                You run the client relationships. We run the <strong>SEO outsourcing</strong>. Our <strong>white label SEO services</strong> give your agency a full SEO team without the hiring costs. We do the work, you put your brand on the reports, and your clients never know we exist. Scale faster, deliver better results, and increase your agency revenue.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Book Free Strategy Call <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Become a White Label Partner
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8069428/pexels-photo-8069428.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Business partners shaking hands representing white label SEO services and agency partnership for scaling"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS WHITE LABEL SEO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is White Label SEO?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>White label SEO</strong> is a partnership where our team does all the SEO work for your clients, but everything is delivered under your brand name. Your clients see your logo on the reports, your name on the emails, and your agency on the deliverables. They never know the work is outsourced.
              </p>
              <p>
                Think of it as having a full SEO department without the overhead. You do not need to hire SEO specialists, train them, pay salaries, or worry about turnover. We handle the strategy, the implementation, the reporting, and the results. You handle the client relationship and collect the revenue.
              </p>
              <p>
                As an <strong>SEO reseller</strong>, you buy our services at wholesale rates and sell them to your clients at retail prices. The margin between what you pay us and what you charge your client is your profit. You set the prices, you control the relationship, and you decide what services to offer.
              </p>
              <p>
                Whether you are a web design agency that wants to offer <strong>SEO for agencies</strong>, a marketing consultant who needs an <strong>agency SEO partner</strong>, or a digital marketing agency looking to scale without hiring, white label SEO gives you the team you need without the costs.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6476366/pexels-photo-6476366.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person using computer focused on digital marketing work representing white label SEO and behind-the-scenes outsourcing"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY AGENCIES CHOOSE WHITE LABEL SEO */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6592690/pexels-photo-6592690.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Group of businesspeople working in collaboration representing why agencies choose white label SEO for scaling and growth"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Agencies Choose White Label SEO</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Hiring an in-house SEO team is expensive, slow, and risky. White label SEO gives you an experienced team on day one, without the overhead. Here is what it delivers for your agency:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Scale faster</strong> — add SEO services to your agency overnight without hiring or training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Briefcase className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Save hiring costs</strong> — no salaries, no benefits, no office space, no turnover risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Users className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Expert SEO team</strong> — get experienced specialists who know what works across industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Award className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Deliver better results</strong> — your clients get better rankings and more traffic with expert work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><ShieldCheck className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Keep your brand</strong> — everything is white labeled with your logo, colors, and domain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><BarChart3 className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Increase agency revenue</strong> — add a high-margin recurring service without increasing overhead</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WHITE LABEL SEO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our White Label SEO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A complete white label SEO service covering every aspect of search engine optimization. Offer all of these to your clients without hiring a single in-house specialist.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6476191/pexels-photo-6476191.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Group of people collaborating near computer representing comprehensive white label SEO services and analytics dashboard"
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

      {/* WHITE LABEL LINK BUILDING (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">White Label Link Building</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong>White label link building</strong> is one of our most popular services for agencies. We build high authority backlinks for your clients through manual outreach, guest posting, and digital PR. Every link is white hat, placed on real websites with genuine traffic.
                </p>
                <p>
                  Your clients get the rankings boost. You get the credit. We do the work behind the scenes. Link building reports are fully white labeled with your branding, showing every link acquired, the domain authority of each linking site, and the anchor text used.
                </p>
                <p>
                  We never use PBNs, link farms, or paid links. Every backlink is earned through genuine outreach to real website owners. This protects your clients from Google penalties and ensures long-term, sustainable ranking growth that keeps your clients happy and retained.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8937900/pexels-photo-8937900.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Person typing on laptop representing white label link building and manual outreach for backlink acquisition"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE LABEL CONTENT WRITING (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7595273/pexels-photo-7595273.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person writing on content planner representing white label content writing and SEO content creation"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">White Label Content Writing</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>White label content writing</strong> gives your clients SEO-optimized content without you having to hire writers. We create blog posts, product descriptions, landing page copy, and long-form articles that rank on Google and convert visitors into customers.
              </p>
              <p>
                Every piece of content is researched, written, and optimized by our team of SEO content specialists. We target the right keywords, structure content for readability, and ensure it matches search intent. Your clients get content that drives traffic. You get the credit.
              </p>
              <p>
                All content is delivered as white label, meaning you can put your agency name on it, publish it to your clients sites, and present it as your own work. No bylines, no watermarks, no attribution. Just high-quality, SEO-optimized content under your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES YOUR AGENCY CAN SERVE */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">Who You Can Serve</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Industries Your Agency Can <span className="text-gradient">Serve</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              With our white label SEO services, your agency can serve clients across dozens of industries. We have the expertise to deliver results in each niche.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7710144/pexels-photo-7710144.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Group of people having meeting in office representing diverse industries your agency can serve with white label SEO"
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

      {/* OUR WHITE LABEL PROCESS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our White Label <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A simple 6-step process that makes white label SEO seamless for your agency and your clients.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/17724741/pexels-photo-17724741.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="People making a plan on a board representing the white label SEO process and strategy workflow"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* WHY PARTNER WITH RANK FLOW */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6285086/pexels-photo-6285086.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Men shaking hands at work representing why partner with Rank Flow Agency for white label SEO services"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="eyebrow">Why Us</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Partner With Rank Flow Agency</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We are a <strong>white label SEO agency</strong> that treats your clients like our own. We work behind the scenes, deliver under your brand, and help you grow your agency revenue. Here is why agencies partner with us:
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
                Become a White Label Partner <ArrowRight className="h-4 w-4" />
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
            White Label SEO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about white label SEO and how it works for agencies.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={whiteLabelFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="white-label-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Ready to Scale Your Agency With White Label SEO?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Book a free strategy call today. We will learn about your agency, your clients, and your goals, then show you exactly how our <strong>SEO reseller services</strong> can help you scale faster, deliver better results, and increase your revenue. No obligation, no pressure.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Book Free Strategy Call <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Become a White Label Partner
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
