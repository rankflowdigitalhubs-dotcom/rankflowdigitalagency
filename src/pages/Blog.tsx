import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { Link } from '../router';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, CTASection } from '../components';
import { blogPosts } from '../data';

export default function Blog() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <SEO
        title="Blog"
        description="SEO insights, guides, and playbooks from the Rank Flow Digital team — local SEO, technical SEO, link building, content, and more."
        path="/blog"
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])}
      />
      <PageHero
        eyebrow="Blog & Insights"
        title={<>Learn from the <span className="text-gradient">experts</span></>}
        subtitle="Actionable SEO and digital marketing insights you can use today."
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]}
      />

      <section className="container-x py-12">
        {/* Featured */}
        <Link to="/blog" className="group grad-border lift block reveal">
          <div className="grid items-stretch gap-0 rounded-3xl lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
              <img src={featured.img} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">Featured</span>
            </div>
            <div className="rounded-b-3xl bg-white/[0.03] p-8 lg:rounded-r-3xl lg:rounded-bl-none">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="rounded-full bg-brand-500/15 px-3 py-1 font-semibold text-brand-300">{featured.category}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-slate-400">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Link key={post.slug} to="/blog" className={`group grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="overflow-hidden rounded-3xl">
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img src={post.img} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">{post.category}</span>
                </div>
                <div className="rounded-b-3xl bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{post.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection title="Ready to put these insights to work?" />
    </>
  );
}
