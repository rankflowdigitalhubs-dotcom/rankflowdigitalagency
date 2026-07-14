import { SEO, breadcrumbSchema } from '../seo';
import { PageHero } from '../components';
import { Link } from '../router';
import { services, blogPosts, caseStudies, portfolioItems, navLinks } from '../data';

export default function Sitemap() {
  const mainPages = navLinks.filter((l) => l.path !== '/');
  const legalPages = [
    { label: 'Privacy Policy', path: '/privacy-policy/' },
    { label: 'Terms & Conditions', path: '/terms/' },
  ];

  return (
    <>
      <SEO
        title="Sitemap"
        description="Browse every page on the Rank Flow Digital website — services, blog posts, case studies, portfolio, and more."
        path="/sitemap"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Sitemap', path: '/sitemap' }])}
      />
      <PageHero
        eyebrow="Site Map"
        title={<>Every page, <span className="text-gradient">all in one place</span></>}
        subtitle="Find any page on our website quickly. Services, blog posts, case studies, portfolio, and legal pages."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Sitemap', path: '/sitemap' }]}
      />

      <section className="container-x py-12">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-400">
          Welcome to the Rank Flow Digital sitemap. This page provides a complete directory of every page on our website,
          including all SEO and digital marketing services, blog posts with actionable growth strategies, client case studies,
          portfolio samples, pricing plans, and legal pages. Use the sections below to navigate to any page on our site.
          If you can't find what you're looking for, feel free to <Link to="/contact/" className="text-brand-300 hover:text-brand-200 underline">contact our team</Link> and we'll be happy to help.
        </p>
      </section>

      <section className="container-x pb-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Main pages */}
          <div>
            <h2 className="text-lg font-semibold text-white">Main Pages</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-brand-300">Home</Link></li>
              {mainPages.map((p) => (
                <li key={p.path}><Link to={p.path} className="text-slate-400 hover:text-brand-300">{p.label}</Link></li>
              ))}
              <li><Link to="/sitemap/" className="text-slate-400 hover:text-brand-300">Sitemap</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services/" className="text-slate-400 hover:text-brand-300">All Services</Link></li>
              {services.map((s) => (
                <li key={s.slug}><Link to={`/${s.slug}/`} className="text-slate-400 hover:text-brand-300">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h2 className="text-lg font-semibold text-white">Blog Posts</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/blog/" className="text-slate-400 hover:text-brand-300">All Blog Posts</Link></li>
              {blogPosts.map((p) => (
                <li key={p.slug}><Link to={`/blog/${p.slug}/`} className="text-slate-400 hover:text-brand-300">{p.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h2 className="text-lg font-semibold text-white">Case Studies</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/case-studies/" className="text-slate-400 hover:text-brand-300">All Case Studies</Link></li>
              {caseStudies.map((c) => (
                <li key={c.slug}><Link to="/case-studies/" className="text-slate-400 hover:text-brand-300">{c.client}</Link></li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h2 className="text-lg font-semibold text-white">Portfolio</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/portfolio/" className="text-slate-400 hover:text-brand-300">All Portfolio Items</Link></li>
              {portfolioItems.map((p) => (
                <li key={p.slug}><Link to="/portfolio/" className="text-slate-400 hover:text-brand-300">{p.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-lg font-semibold text-white">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalPages.map((p) => (
                <li key={p.path}><Link to={p.path} className="text-slate-400 hover:text-brand-300">{p.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
