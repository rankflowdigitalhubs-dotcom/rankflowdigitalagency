import { Check, ArrowRight, Shield, HardDrive, RefreshCw, Palette, Link2, Zap, Code2, Activity, Lock, FileText, Server, Users, ShoppingBag, BarChart3, Briefcase, HeartPulse } from 'lucide-react';
import { navigate } from '../router';
import { SEO, breadcrumbSchema, faqSchema } from '../seo';
import { FAQList, RelatedServices } from '../components';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Website Maintenance & SEO', path: '/website-maintenance-seo' },
];

const maintFaqs = [
  { q: 'What is website maintenance?', a: 'Website maintenance is the ongoing process of keeping your website secure, fast, and up-to-date. It includes security monitoring, daily backups, plugin and theme updates, broken link fixes, speed optimization, technical SEO, performance monitoring, and malware protection. Without regular maintenance, your website becomes vulnerable to security threats, slows down, and loses search rankings.' },
  { q: 'Why do I need monthly website maintenance?', a: 'Websites require constant upkeep. Plugins and themes release updates that fix security vulnerabilities. New security threats emerge daily. Links break over time. Performance degrades as content accumulates. Search engines favor fast, secure, well-maintained sites. Monthly maintenance ensures your website stays secure, fast, and ranking well in search results.' },
  { q: 'What is included in your website maintenance services?', a: 'Our monthly maintenance service includes security monitoring, daily website backups, plugin updates, theme updates, broken link fixes, speed optimization, technical SEO, performance monitoring, malware protection, and monthly reports. We handle everything needed to keep your website running at peak performance.' },
  { q: 'How often should my website be backed up?', a: 'We recommend daily backups at minimum. If something breaks, you can restore your site quickly with minimal data loss. Our maintenance service includes daily automated backups stored securely off-site, so you always have a recent recovery point available.' },
  { q: 'What happens if my website gets hacked?', a: 'If your website is compromised, we immediately isolate the threat, clean the malware, restore from a clean backup if needed, patch the vulnerability that allowed the attack, and harden your site against future threats. Our security monitoring catches most issues before they cause damage.' },
  { q: 'Do you update plugins and themes for my website?', a: 'Yes. We monitor for new plugin and theme updates and apply them after testing for compatibility. This ensures you get the latest security patches and features without breaking your website. We also update your CMS core (WordPress, Shopify, etc.) as new versions are released.' },
  { q: 'How does website maintenance affect SEO?', a: 'Website maintenance and SEO are closely connected. Google prioritizes fast, secure, well-maintained websites in search results. Broken links, slow pages, security warnings, and outdated content all hurt your rankings. Our maintenance service includes technical SEO to ensure your site meets Google performance and security standards.' },
  { q: 'What is technical SEO and why is it included?', a: 'Technical SEO is the process of optimizing your website infrastructure for search engines. It includes site speed optimization, mobile responsiveness, structured data, XML sitemaps, robots.txt, canonical tags, and crawlability. We include technical SEO in our maintenance service because it directly impacts your search rankings.' },
  { q: 'How much do website maintenance services cost?', a: 'The cost depends on your website size, platform, complexity, and the level of service required. We offer custom monthly maintenance packages based on your specific needs. Contact us for a free website maintenance audit and custom quote with no obligation.' },
  { q: 'Do you offer maintenance for all website platforms?', a: 'We provide maintenance for WordPress, Shopify, WooCommerce, custom HTML sites, and most major CMS platforms. Our team includes developers experienced in multiple platforms, so we can maintain your site regardless of what it was built on.' },
  { q: 'How do I get started with website maintenance?', a: 'Book a free website maintenance audit with us. We will scan your website for security issues, performance problems, broken links, and SEO gaps. Then we will recommend a monthly maintenance plan that fits your needs and budget. No obligation, just a clear picture of your website health.' },
];

const services = [
  { icon: Shield, title: 'Security Monitoring', desc: 'We monitor your website 24/7 for security threats, suspicious activity, and vulnerabilities, catching issues before they become breaches.' },
  { icon: HardDrive, title: 'Website Backups', desc: 'We create daily automated backups of your entire website and store them securely off-site, so you can always restore quickly if needed.' },
  { icon: RefreshCw, title: 'Plugin Updates', desc: 'We monitor, test, and apply plugin updates to ensure compatibility, security patches, and new features without breaking your site.' },
  { icon: Palette, title: 'Theme Updates', desc: 'We update your theme after testing for compatibility, ensuring design stability and security without visual breakage.' },
  { icon: Link2, title: 'Broken Link Fixes', desc: 'We scan for and fix broken links that hurt user experience and SEO, ensuring every link on your site works correctly.' },
  { icon: Zap, title: 'Speed Optimization', desc: 'We optimize images, caching, code, and server settings to keep your website loading fast and meeting Core Web Vitals.' },
  { icon: Code2, title: 'Technical SEO', desc: 'We handle structured data, sitemaps, canonical tags, robots.txt, and crawlability to keep your site optimized for search engines.' },
  { icon: Activity, title: 'Performance Monitoring', desc: 'We continuously track uptime, page speed, and Core Web Vitals, alerting you immediately if performance drops.' },
  { icon: Lock, title: 'Malware Protection', desc: 'We scan for and remove malware, implement firewall rules, and harden your site against attacks and injections.' },
  { icon: FileText, title: 'Monthly Reports', desc: 'You receive detailed monthly reports showing security status, performance metrics, updates applied, and SEO improvements.' },
];

const industries = [
  { name: 'eCommerce', icon: ShoppingBag, desc: 'Keep your online store fast, secure, and selling.' },
  { name: 'Healthcare', icon: HeartPulse, desc: 'Protect patient data and maintain HIPAA compliance.' },
  { name: 'Real Estate', icon: Briefcase, desc: 'Keep property listings fast and accessible.' },
  { name: 'SaaS', icon: BarChart3, desc: 'Maintain uptime and performance for your app.' },
  { name: 'Corporate', icon: Server, desc: 'Secure and maintain your corporate web presence.' },
  { name: 'Agencies', icon: Users, desc: 'White-label maintenance for your client websites.' },
];

const whyChoose = [
  { title: '24/7 Security Monitoring', desc: 'We watch your website around the clock, catching threats before they cause damage.' },
  { title: 'Daily Backups', desc: 'Your website is backed up daily and stored securely, so recovery is always one click away.' },
  { title: 'Fast Response Times', desc: 'When issues arise, we respond quickly to minimize downtime and keep your site running.' },
  { title: 'SEO Included', desc: 'Unlike most maintenance services, we include technical SEO to keep your site ranking well.' },
  { title: 'Transparent Monthly Reports', desc: 'You see exactly what we did, what we fixed, and how your site performed each month.' },
  { title: 'All Platforms Supported', desc: 'We maintain WordPress, Shopify, WooCommerce, custom sites, and most major platforms.' },
];

export default function WebsiteMaintenanceSEO() {
  return (
    <>
      <SEO
        title="Website Maintenance & SEO Services"
        description="Monthly website maintenance with security monitoring, daily backups, plugin updates, speed optimization, and technical SEO. Keep your site fast and ranking."
        path="/website-maintenance-seo"
        schema={[breadcrumbSchema(crumbs), faqSchema(maintFaqs)]}
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
              <span className="eyebrow mt-6 reveal">Website Maintenance & SEO</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl reveal reveal-delay-1">
                Website Maintenance & SEO Services That Keep Your Site <span className="text-gradient">Fast, Secure, and Ranking</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400 reveal reveal-delay-2">
                Your website is your hardest-working employee. It runs 24/7, but without maintenance, it gets slow, vulnerable, and invisible in search results. Our <strong>monthly website maintenance</strong> service handles security, backups, updates, <strong>website speed optimization</strong>, and <strong>technical SEO</strong> so your site stays fast, secure, and ranking. One plan, complete <strong>website management</strong>.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal reveal-delay-3">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free Maintenance Audit <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/contact')} className="btn-ghost">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/17489150/pexels-photo-17489150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Blue lit computer server rack in data center representing website maintenance services and IT infrastructure"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WEBSITE MAINTENANCE MATTERS */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">The Problem</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Website Maintenance Matters</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                A website is not a one-time project. It is a living system that needs ongoing care. Every day, new security vulnerabilities are discovered. Plugins and themes release updates. Links break. Content goes stale. Performance slowly degrades. Without <strong>website maintenance services</strong>, these issues compound until your site is slow, vulnerable, and dropping in search rankings.
              </p>
              <p>
                <strong>Website security</strong> is the most critical concern. Hackers scan millions of websites daily looking for outdated plugins, weak passwords, and unpatched vulnerabilities. A single breach can leak customer data, get you blacklisted by Google, and destroy the trust you spent years building. Regular maintenance closes those doors before attackers walk through them.
              </p>
              <p>
                <strong>Website speed optimization</strong> is equally important. Google uses page speed as a ranking factor. Slow websites lose visitors and rankings. Studies show that 53% of mobile users abandon a site that takes more than 3 seconds to load. We keep your site fast by optimizing images, caching, code, and server settings.
              </p>
              <p>
                <strong>Technical SEO</strong> ties it all together. Even a fast, secure site needs proper structured data, sitemaps, canonical tags, and crawlability to rank well. Our maintenance service includes all of this, so your website is not just surviving but thriving in search results.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Computer monitor displaying cybersecurity data and code representing website security and maintenance importance"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR MAINTENANCE SERVICES */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -left-20 top-20 h-80 w-80 bg-brand-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">What We Do</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
              Our Maintenance <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              A complete monthly maintenance service covering security, performance, updates, and technical SEO. Everything your website needs to stay fast, secure, and ranking.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Female engineer monitoring data servers in modern server room representing comprehensive website maintenance services"
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
        </div>
      </section>

      {/* SECURITY MONITORING DEEP DIVE */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Security Monitoring</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Website security</strong> is not a one-time setup. It is an ongoing process. New threats emerge every day, and without continuous monitoring, your site is a sitting target. Our security monitoring runs 24/7, scanning for malware, suspicious activity, unauthorized changes, and known vulnerabilities.
              </p>
              <p>
                We implement firewall rules to block malicious traffic before it reaches your site. We scan for malware injections that could steal visitor data or redirect your traffic. We monitor login attempts and block brute-force attacks. When a new vulnerability is disclosed in a plugin or theme you use, we patch it before attackers can exploit it.
              </p>
              <p>
                If the worst happens and your site is compromised, we act immediately. We isolate the threat, clean the infection, restore from a clean backup if needed, and harden your site against future attacks. You get peace of mind knowing your website is being watched and protected around the clock.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team of cybersecurity experts working on data protection representing security monitoring and threat detection"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE BACKUPS DEEP DIVE */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 reveal reveal-delay-2">
              <div className="grad-border rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/37605910/pexels-photo-37605910.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Server equipment in modern data center representing website backups and data protection infrastructure"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <span className="eyebrow">Core Service</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Website Backups</h2>
              <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Backups are your safety net. If your site gets hacked, breaks during an update, or experiences server failure, a clean backup means the difference between a 10-minute recovery and a total loss. Our <strong>website maintenance services</strong> include daily automated backups of your entire website.
                </p>
                <p>
                  We back up your files, database, content, and settings. Backups are stored securely off-site, so even if your server goes down, your backups are safe. We keep multiple recovery points, so you can restore from yesterday, last week, or last month.
                </p>
                <p>
                  We also test backups regularly to make sure they actually work. A backup is only useful if it restores cleanly. We verify that each backup can be restored successfully, so when you need it, it works. No surprises, no lost data, no panic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEED OPTIMIZATION DEEP DIVE */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">Core Service</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Speed Optimization</h2>
            <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>Website speed optimization</strong> is critical for both user experience and SEO. Google uses Core Web Vitals as a ranking factor. Visitors abandon slow sites. Every second of delay reduces conversions. Our maintenance service keeps your site fast and meeting Google performance standards.
              </p>
              <p>
                We optimize images by compressing and converting to modern formats like WebP. We implement browser caching and server-side caching to reduce load times. We minify CSS, JavaScript, and HTML to reduce file sizes. We optimize database queries and clean up post revisions that bloat your database.
              </p>
              <p>
                We monitor Core Web Vitals continuously and alert you if performance drops. We implement lazy loading, CDN integration, and Gzip compression. Every optimization is tested to ensure it improves speed without breaking functionality. The result is a website that loads fast on every device, keeps visitors engaged, and ranks well in Google.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7988114/pexels-photo-7988114.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Developer writing code on laptop representing website speed optimization and performance tuning"
                className="w-full h-[350px] object-cover"
                loading="lazy"
              />
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
              We maintain websites for businesses across every industry. Each has unique security, performance, and compliance requirements, and we know how to meet them.
            </p>
          </div>
          <div className="mt-6 reveal reveal-delay-2">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7654401/pexels-photo-7654401.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Diverse team of business professionals working in modern office representing industries served by website maintenance services"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* WHY CHOOSE RANK FLOW */}
      <section className="container-x py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <div className="grad-border rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/16129728/pexels-photo-16129728.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Focused software developer at desk coding with multiple monitors representing why choose Rank Flow Agency for website maintenance"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Why Choose Rank Flow Agency</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We are a <strong>website support</strong> and maintenance agency that treats your website like our own. We do not just fix problems. We prevent them. Here is why businesses trust us with their <strong>website management</strong>:
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
              Get Free Maintenance Audit <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="relative overflow-hidden py-20">
        <div className="blob -right-20 top-20 h-80 w-80 bg-accent-500/10" />
        <div className="container-x relative">
          <div className="text-center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl reveal reveal-delay-1">
              Maintenance <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 reveal reveal-delay-2">
              Answers to the most common questions about website maintenance and how it keeps your site fast, secure, and ranking.
            </p>
          </div>
          <div className="mt-10">
            <FAQList faqs={maintFaqs} />
          </div>
        </div>
      </section>
      <RelatedServices currentSlug="website-maintenance-seo" />


      {/* STRONG CTA */}
      <section className="container-x py-24">
        <div className="grad-border relative overflow-hidden rounded-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-64 w-64 bg-brand-500/30" />
            <div className="blob -right-10 bottom-0 h-64 w-64 bg-accent-500/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl reveal">
                Is Your Website Fast, Secure, and Ranking?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300 reveal reveal-delay-1">
                Get a free website maintenance audit today. We will scan your site for security issues, performance problems, broken links, and SEO gaps. Then we will show you exactly what needs fixing. No obligation, just a clear picture of your website health.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal reveal-delay-2">
                <button onClick={() => navigate('/contact')} className="btn-glow">
                  Get Free Maintenance Audit <ArrowRight className="h-4 w-4" />
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
