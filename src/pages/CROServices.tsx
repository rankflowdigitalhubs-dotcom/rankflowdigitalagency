import { Check, ArrowRight, TrendingUp, Target, BarChart3, MousePointerClick, Eye, Smartphone, ShoppingCart, Filter, PenLine, Users, ShieldCheck, Award, Zap, GitCompare, ArrowLeftRight } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'CRO Services', path: '/cro-services' },
];

const croFaqs = [
  { q: 'What is conversion rate optimization (CRO)?', a: 'Conversion rate optimization is the process of improving your website to increase the percentage of visitors who take a desired action, whether that is making a purchase, filling out a lead form, signing up for a newsletter, or clicking a call-to-action button. CRO uses data, testing, and user behavior analysis to make changes that turn more of your existing traffic into customers, without spending more on ads.' },
  { q: 'How is CRO different from SEO?', a: 'SEO brings more visitors to your website. CRO makes sure more of those visitors convert. SEO increases traffic. CRO increases the percentage of that traffic that takes action. Both work together: SEO fills the funnel, CRO maximizes the results. Without CRO, you are paying for traffic that leaves without converting.' },
  { q: 'How long does CRO take to show results?', a: 'Most CRO campaigns show measurable improvements within 4-6 weeks. Significant conversion lifts typically appear in 2-3 months as A/B tests reach statistical significance and winning variations are implemented. The timeline depends on your current traffic volume, the number of test variations, and how quickly changes can be deployed.' },
  { q: 'What is A/B testing and how does it work?', a: 'A/B testing is a method of comparing two versions of a web page to see which performs better. We show version A to half your visitors and version B to the other half, then measure which version gets more conversions. The winner becomes the new baseline, and we test the next hypothesis. This removes guesswork and lets data drive every decision.' },
  { q: 'What is heatmap analysis?', a: 'Heatmap analysis uses visual tools to show where visitors click, scroll, and move on your website. Heatmaps reveal which elements attract attention, which get ignored, where users get stuck, and where they drop off. This behavioral data helps us identify exactly what to test and improve on each page.' },
  { q: 'Do you offer CRO for eCommerce stores?', a: 'Yes. We specialize in eCommerce CRO, optimizing product pages, checkout flows, cart pages, and category pages to increase sales and average order value. We test product descriptions, pricing displays, button colors, trust signals, shipping information, and checkout steps to remove friction and boost conversions.' },
  { q: 'How much traffic do I need for CRO to work?', a: 'You need enough traffic for A/B tests to reach statistical significance. As a general rule, we recommend at least 1,000 monthly visitors and 100+ monthly conversions for reliable testing. However, we can still improve conversions for lower-traffic sites through heuristic analysis, user testing, and best-practice implementation without testing.' },
  { q: 'What tools do you use for CRO?', a: 'We use industry-leading tools including Google Optimize, Optimizely, VWO, Hotjar, Crazy Egg, Google Analytics, Google Tag Manager, and Microsoft Clarity. The specific tools depend on your website platform, traffic volume, and testing needs. We also build custom dashboards to track your conversion metrics.' },
  { q: 'Can you help with mobile conversion optimization?', a: 'Yes. Mobile CRO is a core part of our service. Over 60% of web traffic now comes from mobile devices, but mobile conversion rates are typically lower than desktop. We optimize mobile layouts, touch targets, page speed, form fields, and checkout flows to improve mobile conversion rates specifically.' },
  { q: 'How much do CRO services cost?', a: 'The cost depends on your website complexity, traffic volume, number of pages to test, and scope of work. We offer custom CRO packages based on your specific needs and goals. Contact us for a free CRO audit and custom quote with no obligation.' },
  { q: 'How do I get started with CRO?', a: 'Book a free CRO audit with us. We will analyze your website, identify conversion bottlenecks, estimate your potential lift, and show you exactly what changes will increase your conversions. No obligation, just a clear roadmap for improvement.' },
];

const services = [
  { icon: Target, title: 'Landing Page Optimization', desc: 'We optimize your landing pages for maximum conversions, testing headlines, copy, layout, images, and CTAs to turn more visitors into leads and customers.' },
  { icon: GitCompare, title: 'A/B Testing', desc: 'We run controlled split tests comparing page variations to identify exactly which elements drive conversions, removing guesswork from optimization.' },
  { icon: Eye, title: 'Heatmap Analysis', desc: 'We use heatmaps and session recordings to see where visitors click, scroll, and drop off, revealing hidden conversion barriers.' },
  { icon: ArrowLeftRight, title: 'User Journey Optimization', desc: 'We map and optimize the complete path from entry to conversion, removing friction points and streamlining every step of the funnel.' },
  { icon: MousePointerClick, title: 'CTA Optimization', desc: 'We test button text, color, size, placement, and design to find the calls-to-action that get the most clicks and conversions.' },
  { icon: Filter, title: 'Form Optimization', desc: 'We reduce form friction by testing field count, layout, labels, validation, and progress indicators to increase form completion rates.' },
  { icon: Smartphone, title: 'Mobile CRO', desc: 'We optimize your mobile experience, improving touch targets, page speed, navigation, and checkout flows for higher mobile conversion rates.' },
  { icon: ShoppingCart, title: 'eCommerce CRO', desc: 'We optimize product pages, cart flows, and checkout processes to increase sales, average order value, and customer retention.' },
  { icon: TrendingUp, title: 'Lead Generation Optimization', desc: 'We optimize lead forms, landing pages, and offer pages to increase the percentage of visitors who become qualified leads.' },
];

const industries = [
  { name: 'eCommerce', icon: ShoppingCart, desc: 'Increase online sales and average order value.' },
  { name: 'SaaS', icon: BarChart3, desc: 'Boost trial signups and free-to-paid conversions.' },
  { name: 'Lead Gen', icon: Filter, desc: 'Capture more qualified leads from existing traffic.' },
  { name: 'Real Estate', icon: Target, desc: 'Convert more property inquiries and bookings.' },
  { name: 'Healthcare', icon: ShieldCheck, desc: 'Increase patient appointment bookings online.' },
  { name: 'Finance', icon: TrendingUp, desc: 'Optimize application forms and signup flows.' },
  { name: 'Education', icon: PenLine, desc: 'Boost course enrollments and inquiry forms.' },
  { name: 'B2B', icon: Users, desc: 'Convert more demo requests and consultation calls.' },
];

const process = [
  { step: '01', title: 'Conversion Audit', desc: 'We audit your website to identify conversion bottlenecks, friction points, and quick-win opportunities. We analyze your funnel, forms, CTAs, and user journey.' },
  { step: '02', title: 'Data Analysis', desc: 'We dive into your analytics, heatmaps, and session recordings to understand how visitors behave, where they drop off, and what stops them from converting.' },
  { step: '03', title: 'Hypothesis Development', desc: 'Based on data, we develop testable hypotheses about what changes will improve conversions. Every hypothesis is backed by evidence, not guesswork.' },
  { step: '04', title: 'A/B Test Design', desc: 'We design and launch A/B tests to validate our hypotheses. We create test variations, set up tracking, and run experiments until statistical significance is reached.' },
  { step: '05', title: 'Implementation', desc: 'We implement winning variations on your live website. We document what worked, what did not, and why, building a knowledge base for future tests.' },
  { step: '06', title: 'Continuous Optimization', desc: 'CRO is never done. We continuously run new tests, iterate on winners, and optimize new pages and funnels to keep your conversion rate climbing.' },
];

const whyChoose = [
  { title: 'Data-Driven Approach', desc: 'Every change we make is backed by data, not opinions. We test, measure, and validate before implementing anything on your website.' },
  { title: 'Proven Conversion Lifts', desc: 'We have helped businesses increase conversion rates by 20%, 50%, even 100%+ through systematic testing and optimization.' },
  { title: 'Full-Funnel Optimization', desc: 'We do not just optimize one page. We optimize the entire funnel from first click to final conversion to maximize results.' },
  { title: 'Transparent Reporting', desc: 'You see every test, every result, and every change in clear monthly reports. No black boxes, no hidden metrics.' },
  { title: 'Dedicated CRO Specialist', desc: 'You get a dedicated CRO expert who knows your business, your audience, and your goals inside and out.' },
  { title: 'Fast Implementation', desc: 'We do not wait months to make changes. We launch tests within weeks and implement winners immediately.' },
];

export default function CROServices() {
  return (
    <>
      <SEO
        title="Conversion Rate Optimization (CRO) Services"
        description="Increase leads and conversions without more ad spend. Our CRO services include A/B testing, heatmap analysis, mobile CRO, and landing page optimization."
        path="/cro-services"
        schema={[breadcrumbSchema(crumbs), faqSchema(croFaqs)]}
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
              <span className="eyebrow mt-6 reveal">CRO Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Conversion Rate Optimization Services That Turn More Visitors Into <span className="text-gradient">Customers</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                You are paying for traffic. But most of it leaves without converting. Our <strong>conversion rate optimization</strong> services fix that. We use <strong>A/B testing</strong>, <strong>heatmap analysis</strong>, and data-driven <strong>website conversion optimization</strong> to increase leads, sales, and revenue without increasing your advertising budget. More conversions from the same traffic.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free CRO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6612279/pexels-photo-6612279.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Person shopping online with credit card on laptop representing conversion rate optimization and eCommerce conversion"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CRO */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Basics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What Is Conversion Rate Optimization?</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Conversion rate optimization (CRO)</strong> is the process of improving your website so that a higher percentage of visitors take the action you want them to take. That action could be buying a product, filling out a lead form, booking a call, signing up for a newsletter, or downloading a guide.
              </p>
              <p>
                Every visitor who lands on your site and leaves without converting is a missed opportunity. You already paid to get them there, through SEO, ads, social media, or email. <strong>Website conversion optimization</strong> makes sure more of those visitors actually do something valuable before they leave.
              </p>
              <p>
                CRO is not about guessing what might work. It is about using data to find out what does work. We use <strong>A/B testing</strong> to compare page variations, <strong>heatmap analysis</strong> to see how users behave, and analytics to measure the results. Every change we make is backed by evidence.
              </p>
              <p>
                As a <strong>CRO agency</strong>, we help businesses of all sizes improve their conversion rates. Whether you are running an eCommerce store, a SaaS platform, or a lead generation site, <strong>sales funnel optimization</strong> ensures you get the maximum return from every visitor.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7693758/pexels-photo-7693758.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Person using laptop to look at graphs and data representing CRO analysis and website optimization"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CRO MATTERS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7947999/pexels-photo-7947999.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Person using laptop with analytics dashboard representing why CRO matters for revenue growth and performance improvement"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">The Impact</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why CRO Matters</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                If your website converts at 2%, that means 98 out of 100 visitors leave without doing anything. Doubling your conversion rate to 4% doubles your revenue from the same traffic. No extra ad spend. No extra SEO work. Just better conversions. Here is why CRO is critical:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><TrendingUp className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Lower acquisition costs</strong> — more conversions from the same traffic means each customer costs less to acquire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Target className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Higher ROI on ad spend</strong> — your paid traffic converts better, so every ad dollar goes further</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><BarChart3 className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Better user experience</strong> — removing friction helps visitors find what they want faster</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><ShoppingCart className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>More revenue per visitor</strong> — increased average order value and conversion rate compound your growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Award className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Competitive advantage</strong> — competitors who do not optimize are leaving money on the table</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300"><Zap className="h-4 w-4" /></span>
                  <span className="text-slate-200"><strong>Compounding growth</strong> — every optimization builds on the last, creating sustained improvement over time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR CRO SERVICES */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our CRO <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A complete conversion rate optimization service covering every aspect of your website and funnel. From landing pages to checkout flows, we optimize it all.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/36950598/pexels-photo-36950598.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business analysis on tablet with graphs and charts representing comprehensive CRO services and analytics dashboards"
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

      {/* A/B TESTING DEEP DIVE */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A/B Testing</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong>A/B testing</strong> is the backbone of conversion rate optimization. Instead of guessing what might improve your conversions, we test it. We create two versions of a page, split your traffic between them, and let data tell us which one wins.
                </p>
                <p>
                  We test everything: headlines, button colors, page layouts, form lengths, images, pricing displays, trust signals, checkout steps, and more. Each test runs until it reaches statistical significance, so we know the result is real and not just random chance.
                </p>
                <p>
                  The winning version becomes your new baseline. Then we test the next hypothesis. Over time, these incremental improvements compound, turning your website into a conversion machine. Every test is documented, so you always know what worked, what did not, and why.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6930432/pexels-photo-6930432.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="People looking at graphs on laptop and tablet representing A/B testing and data comparison for conversion optimization"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEATMAP ANALYSIS DEEP DIVE */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7693706/pexels-photo-7693706.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Businesswoman looking at data on iPad representing heatmap analysis and user behavior tracking for CRO"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Heatmap Analysis</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Heatmap analysis</strong> shows us exactly how visitors interact with your website. Heatmaps create a visual overlay of where people click, how far they scroll, and where their mouse moves. This reveals behavior that analytics alone cannot show.
              </p>
              <p>
                We see which elements attract attention and which get ignored. We spot where users hesitate, where they click in frustration, and where they abandon the page. Session recordings let us watch real visitors navigate your site, uncovering friction points you never knew existed.
              </p>
              <p>
                This behavioral data drives our optimization strategy. Instead of testing random changes, we test changes informed by actual user behavior. The result is faster wins, bigger lifts, and a website that works the way your visitors expect it to.
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
            <span className="eyebrow reveal">Who We Help</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              We have optimized conversion rates for businesses across dozens of industries. Each industry has unique conversion challenges, and we know how to solve them.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7654185/pexels-photo-7654185.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Four people working in office representing diverse industries served by CRO services"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <div key={ind.name} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="group h-full rounded-3xl bg-white/[0.03] p-6 text-center hover:bg-white/[0.06] transition-colors">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-300 transition-transform group-hover:scale-110">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{ind.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CRO PROCESS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Our CRO <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            A proven 6-step process that turns data into conversions. Every step is designed to find, test, and implement changes that grow your revenue.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7316661/pexels-photo-7316661.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Man in suit holding tablet pointing at graph representing the CRO process and step-by-step strategy workflow"
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

      {/* WHY CHOOSE RANK FLOW */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5439481/pexels-photo-5439481.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Coworkers in conference room meeting representing why choose Rank Flow Agency for CRO services"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="eyebrow">Why Us</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We are a <strong>CRO agency</strong> that focuses on one thing: turning more of your visitors into customers. We do not chase vanity metrics. We chase revenue. Here is why businesses choose us:
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
                Get Free CRO Audit <ArrowRight className="h-4 w-4" />
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
            CRO <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
            Answers to the most common questions about conversion rate optimization and how it helps your business.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={croFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="cro-services" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Ready to Turn More Visitors Into Customers?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Get a free CRO audit today. We will analyze your website, identify conversion bottlenecks, and show you exactly what changes will increase your leads, sales, and revenue. No obligation, just actionable insights.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free CRO Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Contact Us
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
