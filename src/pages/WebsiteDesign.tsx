import { Check, ArrowRight, Smartphone, Zap, Search, Mail, MessageCircle, MapPin, Share2, Lock, Menu, Palette, Image as ImageIcon, Code2, ShoppingBag, Globe, FileCode, Layout, RefreshCw, Gauge } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Website Design Services', path: '/website-design' },
];

const designFaqs = [
  { q: 'How much does a professional website cost?', a: 'Website design costs vary based on the type of website, number of pages, features required, and design complexity. A simple small business website starts at a few hundred dollars, while a full eCommerce store with custom functionality costs more. Contact us for a free quote tailored to your specific needs — no obligation.' },
  { q: 'How long does it take to design and build a website?', a: 'Most small business websites are completed within 1–2 weeks. Larger websites with custom features, eCommerce functionality, or extensive content take 3–6 weeks. We provide a clear timeline upfront during the consultation phase and keep you updated at every stage of the process.' },
  { q: 'Will my website be mobile responsive?', a: 'Yes. Every website we design is fully responsive — meaning it looks and works perfectly on desktops, tablets, and smartphones. Mobile responsiveness is not optional; it is a standard feature included in every project. Google also prioritizes mobile-friendly websites in search results.' },
  { q: 'Do you build SEO-friendly websites?', a: 'Absolutely. Every website we build follows SEO best practices — clean code, fast loading speed, proper heading structure, meta tags, schema markup, image optimization, and mobile responsiveness. A beautiful website that cannot be found on Google is useless, so SEO is built into every project from day one.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We offer professional website redesign services. Whether your current site is outdated, slow, not mobile-friendly, or simply not converting visitors into customers, we can redesign it while preserving your existing SEO rankings and content. A redesign can dramatically improve results without starting from scratch.' },
  { q: 'Do you build eCommerce and Shopify websites?', a: 'Yes. We design and develop eCommerce websites, including Shopify stores, WooCommerce stores, and custom eCommerce solutions. We handle product page design, shopping cart setup, payment gateway integration, and SEO optimization so your online store is ready to sell from day one.' },
  { q: 'Will I be able to update my website myself?', a: 'Yes. We build websites on user-friendly platforms like WordPress and Shopify that include intuitive content management systems. After launch, you can easily update text, images, products, and blog posts without needing technical skills. We also provide training and documentation.' },
  { q: 'Do you provide ongoing support and maintenance?', a: 'Yes. We offer ongoing support and maintenance packages to keep your website secure, updated, and running smoothly. From content updates to security patches and performance optimization, we are here to support your website long after launch.' },
  { q: 'What platforms do you use to build websites?', a: 'We build websites on WordPress, Shopify, and custom HTML/CSS/JavaScript depending on your needs. WordPress is ideal for content-driven sites and small businesses, Shopify for eCommerce stores, and custom builds for unique requirements. We recommend the best platform for your specific goals.' },
  { q: 'Do you provide hosting and domain registration?', a: 'We can help you set up hosting and register your domain, or work with your existing hosting provider. We recommend reliable, fast hosting providers that support good website performance and SEO. We handle the technical setup so you do not have to.' },
];

const services = [
  { icon: Layout, title: 'Business Website Design', desc: 'Professional websites that represent your brand, build trust, and convert visitors into customers. Clean, modern, and built to grow your business.' },
  { icon: Layout, title: 'Small Business Websites', desc: 'Affordable, high-quality websites designed specifically for small businesses. Get a professional online presence without the enterprise price tag.' },
  { icon: FileCode, title: 'Landing Page Design', desc: 'High-converting landing pages designed for specific campaigns, products, or services. Optimized for conversions and built to turn clicks into customers.' },
  { icon: Layout, title: 'Portfolio Websites', desc: 'Stunning portfolio websites that showcase your work, skills, and projects. Perfect for freelancers, agencies, and creative professionals.' },
  { icon: Globe, title: 'Corporate Websites', desc: 'Professional corporate websites that communicate your brand values, services, and expertise. Built for credibility and lead generation.' },
  { icon: ShoppingBag, title: 'eCommerce Websites', desc: 'Full-featured online stores with product catalogs, shopping carts, secure checkout, and payment integration. Built to sell from day one.' },
  { icon: ShoppingBag, title: 'Shopify Website Design', desc: 'Custom Shopify store design that stands out from the competition. Product page optimization, collection design, and conversion-focused layouts.' },
  { icon: FileCode, title: 'WordPress Website Design', desc: 'Custom WordPress websites with themes tailored to your brand. Easy to manage, SEO-friendly, and built on the world\'s most popular CMS.' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'Transform your outdated website into a modern, fast, conversion machine. We preserve your SEO rankings while giving your site a complete visual upgrade.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Every website we build is fully responsive — looking and functioning perfectly on desktops, tablets, and smartphones. Mobile-first is our standard.' },
  { icon: Gauge, title: 'Speed Optimization', desc: 'We build fast websites. Optimized images, clean code, caching, and Core Web Vitals compliance ensure your site loads quickly and ranks higher.' },
  { icon: Search, title: 'SEO-Friendly Development', desc: 'Clean code, proper heading structure, schema markup, and fast loading — every website is built on a foundation that Google loves from day one.' },
];

const features = [
  { icon: Smartphone, title: 'Mobile Responsive Design', desc: 'Looks perfect on every device — desktop, tablet, and smartphone.' },
  { icon: Zap, title: 'Fast Loading Speed', desc: 'Optimized for speed so visitors stay and Google ranks you higher.' },
  { icon: Search, title: 'SEO-Friendly Structure', desc: 'Built with clean code and proper structure for search engine visibility.' },
  { icon: Mail, title: 'Contact Forms', desc: 'Easy-to-use contact forms that capture leads and customer inquiries.' },
  { icon: MessageCircle, title: 'WhatsApp Integration', desc: 'Let customers reach you instantly with WhatsApp click-to-chat buttons.' },
  { icon: MapPin, title: 'Google Maps Integration', desc: 'Show your location and help local customers find you easily.' },
  { icon: Share2, title: 'Social Media Integration', desc: 'Connect your social profiles and let visitors share your content.' },
  { icon: Lock, title: 'SSL Ready', desc: 'Secure your website with SSL encryption — essential for trust and SEO.' },
  { icon: Menu, title: 'Easy Navigation', desc: 'Intuitive menus and structure so visitors find what they need fast.' },
  { icon: Palette, title: 'Modern UI/UX', desc: 'Beautiful, user-friendly interfaces designed for engagement and conversions.' },
  { icon: ImageIcon, title: 'Image Optimization', desc: 'Compressed, optimized images that load fast and look sharp.' },
  { icon: Code2, title: 'Clean Code', desc: 'W3C-valid, semantic code that is fast, accessible, and maintainable.' },
];

const industries = [
  { name: 'Dentists', icon: '🦷', desc: 'Dental websites that attract new patients and build trust.' },
  { name: 'Restaurants', icon: '🍽️', desc: 'Restaurant websites with menus, reservations, and photos.' },
  { name: 'Law Firms', icon: '⚖️', desc: 'Professional law firm websites that build authority.' },
  { name: 'Roofers', icon: '🏠', desc: 'Roofing websites that showcase services and generate leads.' },
  { name: 'Plumbers', icon: '🔧', desc: 'Plumbing websites with service areas and emergency contact.' },
  { name: 'Real Estate', icon: '🏡', desc: 'Property websites with listings, search, and agent profiles.' },
  { name: 'eCommerce', icon: '🛒', desc: 'Online stores designed to sell products and drive revenue.' },
  { name: 'Shopify Stores', icon: '🏷️', desc: 'Custom Shopify store design that stands out and converts.' },
  { name: 'Consultants', icon: '💼', desc: 'Consulting websites that establish expertise and capture leads.' },
  { name: 'Small Businesses', icon: '🏢', desc: 'Affordable professional websites for any small business.' },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'We start with a free consultation to understand your business, goals, target audience, and design preferences. This is where we learn what makes your business unique.' },
  { step: '02', title: 'Planning', desc: 'We create a detailed project plan including site structure, page layout, content strategy, and technical requirements. A clear roadmap ensures nothing is missed.' },
  { step: '03', title: 'Wireframe & Design', desc: 'We create wireframes and visual mockups of your website. You see exactly how your site will look before any code is written — and we revise until you are happy.' },
  { step: '04', title: 'Development', desc: 'Our developers bring the designs to life with clean, fast, SEO-friendly code. We build on the platform that best suits your needs — WordPress, Shopify, or custom.' },
  { step: '05', title: 'Mobile Optimization', desc: 'We optimize every page for mobile devices — ensuring perfect display and functionality on smartphones and tablets, where most of your visitors will be.' },
  { step: '06', title: 'SEO Optimization', desc: 'We implement SEO best practices throughout — meta tags, schema markup, heading structure, image optimization, and site speed — so Google loves your site from day one.' },
  { step: '07', title: 'Testing', desc: 'We rigorously test your website across browsers, devices, and screen sizes. We check forms, links, speed, and functionality to ensure everything works flawlessly.' },
  { step: '08', title: 'Launch & Support', desc: 'We launch your website, submit it to Google, and provide ongoing support. We are here to help with updates, maintenance, and questions long after launch.' },
];

const whyChoose = [
  { title: 'Modern Designs', desc: 'We create beautiful, contemporary websites that make a strong first impression and set you apart from competitors. No templates — every design is custom.' },
  { title: 'SEO-Friendly Websites', desc: 'Every website is built on an SEO foundation — clean code, fast loading, proper structure, and schema markup. Your site is designed to rank from day one.' },
  { title: 'Mobile Responsive', desc: 'Every website looks and works perfectly on all devices. With most web traffic coming from mobile, responsive design is not optional — it is standard.' },
  { title: 'Fast Loading', desc: 'We build fast websites. Optimized images, clean code, and performance best practices ensure your site loads quickly and passes Core Web Vitals.' },
  { title: 'Affordable Pricing', desc: 'Professional website design does not have to break the bank. We offer flexible packages for businesses of all sizes — from startups to established brands.' },
  { title: 'Ongoing Support', desc: 'We are with you long after launch. From content updates to maintenance and technical support, we provide ongoing help to keep your website performing.' },
];

export default function WebsiteDesign() {
  return (
    <>
      <SEO
        title="Professional Website Design Services"
        description="Get a modern, responsive, SEO-friendly website that grows your business. We offer business, eCommerce, Shopify, and WordPress website design. Get a free quote."
        path="/website-design"
        schema={[breadcrumbSchema(crumbs), faqSchema(designFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Website Design Services</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-950 sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Professional Website Design Services That <span className="text-gradient">Grow Your Business</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 reveal reveal-delay-2">
                Your website is your digital storefront. It is the first thing potential customers see — and the place they decide whether to trust you or your competitor. We design modern, fast, <strong>SEO-friendly websites</strong> that build trust, generate leads, and turn visitors into paying customers.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Start Your Project
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/36729918/pexels-photo-36729918.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern web design workspace with designers working on website projects representing professional website design services"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY EVERY BUSINESS NEEDS A PROFESSIONAL WEBSITE */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Foundation</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Every Business Needs a Professional Website</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                In today's digital world, your website is your most important marketing asset. It works for you 24/7 — attracting visitors, building trust, and generating leads while you focus on running your business. But not just any website will do.
              </p>
              <p>
                A <strong>professional website design</strong> builds instant credibility. When a potential customer lands on a modern, fast, well-designed site, they feel confident in your business. When they land on a slow, outdated, or broken site, they leave — and they go straight to your competitor.
              </p>
              <p>
                Here is what a professional website delivers: it builds <strong>trust</strong> with visitors before they ever contact you. It improves your <strong>credibility</strong> — 75% of consumers judge a company's credibility based on its website design. It generates <strong>leads</strong> through contact forms, calls, and WhatsApp integration. And it supports <strong>SEO</strong> — giving Google a fast, well-structured site that ranks for the keywords your customers search.
              </p>
              <p>
                Whether you are a dentist, a plumber, a restaurant, a law firm, or an online store, your website is the foundation of your digital presence. Every marketing channel — SEO, social media, paid ads, email — ultimately sends people to your website. If that foundation is weak, everything else underperforms.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/10020052/pexels-photo-10020052.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business professional using tablet and laptop representing why every business needs a professional website"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR WEBSITE DESIGN SERVICES */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">What We Do</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Website Design <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              From small business websites to full eCommerce stores, we design and build websites that look great, load fast, and convert visitors into customers.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/16323580/pexels-photo-16323580.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Web design agency workspace representing comprehensive website design services and creative portfolio"
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
        </div>
      </section>

      {/* BUSINESS WEBSITE DESIGN (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Business Website Design</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                A <strong>business website</strong> is more than a digital brochure. It is your hardest-working employee — representing your brand, answering customer questions, and generating leads around the clock. We design business websites that do exactly that.
              </p>
              <p>
                Every business website we build is custom-designed to reflect your brand identity and communicate your unique value proposition. We focus on what matters: clear messaging, easy navigation, strong calls-to-action, and fast loading. Visitors should know what you do, why they should choose you, and how to contact you within seconds of landing on your site.
              </p>
              <p>
                Whether you need a <strong>small business website</strong> with five pages or a <strong>corporate website</strong> with dozens of pages and complex functionality, we build it on a platform that is easy for you to manage and optimized for both users and search engines.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Stylish workspace with laptop and monitors displaying design software representing professional business website design"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ECOMMERCE WEBSITE DESIGN (deep dive) */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Mini shopping cart with cash next to laptop representing eCommerce website design and online store development"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">eCommerce Website Design</h2>
              <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Selling products online requires more than a pretty website. You need an <strong>eCommerce website</strong> designed to showcase products, simplify shopping, and make checkout frictionless. Every element — from product page layout to cart design to payment flow — impacts your sales.
                </p>
                <p>
                  We design and build eCommerce websites and <strong>Shopify website design</strong> that convert. We optimize product pages with high-quality images, compelling descriptions, and clear pricing. We streamline the checkout process to reduce cart abandonment. And we build everything on a fast, SEO-friendly foundation so your products rank on Google.
                </p>
                <p>
                  Whether you are launching a new online store or redesigning an existing one, we create eCommerce experiences that make shopping easy and selling profitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORDPRESS WEBSITE DESIGN (deep dive) */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">WordPress Website Design</h2>
            <div className="mt-6 space-y-4 text-ink-600 leading-relaxed">
              <p>
                WordPress powers over 40% of all websites on the internet — and for good reason. It is flexible, SEO-friendly, and easy to manage. We build custom <strong>WordPress website design</strong> that gives you full control over your content without needing technical skills.
              </p>
              <p>
                We do not use generic templates. Every WordPress site we build is custom-designed to match your brand and tailored to your specific needs. We use lightweight, fast-loading themes and clean code to ensure your site performs well in both speed and SEO.
              </p>
              <p>
                After launch, you can easily update text, images, blog posts, and pages through WordPress's intuitive editor. We provide training and documentation so you feel confident managing your own website. And we are always here for ongoing support when you need it.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Man working on computer viewing website representing WordPress website design and content management"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES INCLUDED */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">Standard In Every Project</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Features <span className="text-gradient">Included</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              Every website we design comes loaded with features that improve user experience, boost SEO, and drive conversions. No add-ons, no hidden fees — these are standard.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6289025/pexels-photo-6289025.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern UI UX design elements with phone and credit card representing website features and interface components"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} className={`grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="group h-full rounded-3xl bg-white p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 text-brand-600 transition-transform group-hover:scale-110">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-950">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">Who We Serve</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            We have designed websites for businesses across dozens of industries — each with its own design needs, user expectations, and conversion goals.
          </p>
        </div>
        <div className="mt-6 reveal reveal-delay-2">
          <div className="grad-border rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184667/pexels-photo-3184667.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Young man working at computer in modern office representing diverse industries served by Rank Flow Agency website design"
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

      {/* OUR WEBSITE DESIGN PROCESS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Website Design <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
              A proven 8-step process that takes your website from concept to launch — with you involved at every stage.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Notebook with wireframe sketches and smartphone representing the website design process and workflow"
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
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Two women working together on software representing the Rank Flow Agency design team and creative professionals"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-ink-600 leading-relaxed">
              We are not just a <strong>web design agency</strong> — we are your digital growth partner. We design websites that look stunning, load fast, rank on Google, and convert visitors into customers. Here is why businesses choose us:
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
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="container-x py-20">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl reveal reveal-delay-1">
            Website Design <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-600 reveal reveal-delay-2">
            Answers to the most common questions about our website design services.
          </p>
        </div>
        <div className="mt-10">
          <FAQList faqs={designFaqs} />
        </div>
      </section>
      <RelatedServices currentSlug="website-design" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-slate-50 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-950 sm:text-4xl md:text-5xl reveal">
                Ready to Launch a Website That Grows Your Business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-600 reveal reveal-delay-1">
                Get a free consultation and quote for your website project today. We will discuss your goals, show you design options, and explain exactly how we will build a website that drives results. No obligation, just clarity.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact/')} className="btn-glow">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact/')} className="btn-ghost">
                  Start Your Project
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
