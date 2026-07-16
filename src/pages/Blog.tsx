import { Clock, ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from '../router';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero, CTASection } from '../components';
import { blogPosts } from '../data';

const POSTS_PER_PAGE = 10;

export default function Blog({ page = 1 }: { page?: number }) {
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages);

  const [featured, ...rest] = blogPosts;
  const isPageOne = currentPage === 1;

  // Page 1: featured post + first 9 from rest (10 total)
  // Page 2+: 10 posts from the appropriate slice
  let postsToShow: typeof blogPosts;
  if (isPageOne) {
    postsToShow = rest.slice(0, POSTS_PER_PAGE - 1);
  } else {
    const offset = (currentPage - 1) * POSTS_PER_PAGE - 1;
    postsToShow = blogPosts.slice(offset + 1, offset + 1 + POSTS_PER_PAGE);
  }

  const pageTitle = isPageOne
    ? 'SEO Blog — Guides, Tips & Strategies | Rank Flow Digital'
    : `SEO Blog Page ${currentPage} — Guides, Tips & Strategies | Rank Flow Digital`;
  const pageDesc = isPageOne
    ? 'Actionable SEO guides, tips, and strategies from our team of experts. Learn how to rank higher, get more traffic, and grow your business.'
    : `Browse page ${currentPage} of our SEO blog — actionable guides, tips, and strategies to help you rank higher, get more traffic, and grow your business.`;

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        path={isPageOne ? '/blog' : `/blog/page/${currentPage}/`}
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          ...(isPageOne ? [] : [{ name: `Page ${currentPage}`, path: `/blog/page/${currentPage}/` }]),
        ])}
      />
      <PageHero
        eyebrow="Blog & Insights"
        title={<>Learn from the <span className="text-gradient">experts</span></>}
        subtitle="Actionable SEO and digital marketing insights you can use today."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          ...(isPageOne ? [] : [{ name: `Page ${currentPage}`, path: `/blog/page/${currentPage}/` }]),
        ]}
      />

      <section className="container-x py-12">
        {isPageOne && (
          <Link to={`/blog/${featured.slug}/`} className="group grad-border lift block reveal">
            <div className="grid items-stretch gap-0 rounded-3xl lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <img src={featured.img} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-ink-950">Featured</span>
              </div>
              <div className="rounded-b-3xl bg-white p-8 lg:rounded-r-3xl lg:rounded-bl-none">
                <div className="flex items-center gap-3 text-xs text-ink-600">
                  <span className="rounded-full bg-brand-500/15 px-3 py-1 font-semibold text-brand-600">{featured.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-ink-950 sm:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-ink-600">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((post, i) => (
            <Link key={post.slug} to={`/blog/${post.slug}/`} className={`group grad-border lift reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="overflow-hidden rounded-3xl">
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <img src={post.img} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-ink-950">{post.category}</span>
                </div>
                <div className="rounded-b-3xl bg-white p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-600">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-950">{post.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Blog pagination">
            <Link
              to={currentPage <= 2 ? '/blog/' : `/blog/page/${currentPage - 1}/`}
              className={`flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                currentPage === 1
                  ? 'pointer-events-none border-slate-100 bg-slate-50 text-ink-600 opacity-40'
                  : 'border-slate-200 bg-white text-ink-600 hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-600'
              }`}
              aria-disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Link>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  to={pageNum === 1 ? '/blog/' : `/blog/page/${pageNum}/`}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition-all ${
                    pageNum === currentPage
                      ? 'border-brand-500 bg-brand-500 text-ink-950 shadow-lg shadow-brand-500/25'
                      : 'border-slate-200 bg-white text-ink-600 hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-600'
                  }`}
                  aria-label={`Go to page ${pageNum}`}
                  aria-current={pageNum === currentPage ? 'page' : undefined}
                >
                  {pageNum}
                </Link>
              ))}
            </div>

            <Link
              to={currentPage >= totalPages - 1 ? '/blog/' : `/blog/page/${currentPage + 1}/`}
              className={`flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                currentPage === totalPages
                  ? 'pointer-events-none border-slate-100 bg-slate-50 text-ink-600 opacity-40'
                  : 'border-slate-200 bg-white text-ink-600 hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-600'
              }`}
              aria-disabled={currentPage === totalPages}
            >
              Next <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        )}
      </section>

      {/* Quick links */}
      <section className="container-x py-12">
        <div className="text-center">
          <span className="eyebrow reveal">Our Services</span>
          <h2 className="mt-4 text-2xl font-bold text-ink-950 reveal reveal-delay-1">Explore our services</h2>
          <p className="mt-3 text-ink-600">Learn more about the SEO services we offer.</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/seo/" className="btn-ghost text-sm">SEO Services</Link>
          <Link to="/local-seo/" className="btn-ghost text-sm">Local SEO</Link>
          <Link to="/technical-seo/" className="btn-ghost text-sm">Technical SEO</Link>
          <Link to="/seo-audit/" className="btn-ghost text-sm">SEO Audit</Link>
          <Link to="/link-building/" className="btn-ghost text-sm">Link Building</Link>
          <Link to="/content-writing/" className="btn-ghost text-sm">Content Writing</Link>
          <Link to="/website-design/" className="btn-ghost text-sm">Web Design</Link>
        </div>
      </section>

      <CTASection title="Ready to put these insights to work?" />
    </>
  );
}
