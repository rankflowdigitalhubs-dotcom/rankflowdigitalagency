import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Link2, Check, Mail } from 'lucide-react';
import { Link, navigate } from '../router';
import { SEO, breadcrumbSchema, articleSchema, faqSchema } from '../seo';
import { Breadcrumbs, CTASection, SocialIcons } from '../components';
import { blogPosts, articleContent } from '../data';

export default function BlogPost({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  const content = articleContent[slug];
  const [activeId, setActiveId] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  // Scroll-spy for TOC active state.
  useEffect(() => {
    if (!content) return;
    const ids = content.sections.map((s) => s.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [content]);

  if (!post || !content) {
    return (
      <div className="container-x flex min-h-screen flex-col items-center justify-center pt-32 text-center">
        <h1 className="text-3xl font-bold text-white">Article not found</h1>
        <p className="mt-3 text-slate-400">This post may have moved or been removed.</p>
        <Link to="/blog" className="btn-glow mt-6">Back to Blog</Link>
      </div>
    );
  }

  const idx = blogPosts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? blogPosts[idx - 1] : blogPosts[blogPosts.length - 1];
  const next = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : blogPosts[0];
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const shareUrl = `https://rankflowagency.online/blog/${slug}`;
  const shareText = encodeURIComponent(post.title);

  const shareLinks = [
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: 'Twitter', url: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}` },
    { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
  ];

  const copyLink = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${slug}` },
  ];

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt.length > 160 ? post.excerpt.slice(0, 157).trim() + '...' : post.excerpt}
        path={`/blog/${slug}`}
        ogImage={post.img}
        schema={[
          breadcrumbSchema(crumbs),
          articleSchema(post),
          faqSchema(content.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="blob left-1/4 top-10 h-72 w-72 bg-brand-500/20" />
        <div className="container-x relative">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow mt-6 reveal">{post.category}</span>
          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl reveal reveal-delay-1">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400 reveal reveal-delay-2">
            <span className="flex items-center gap-2">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=80" alt={(post as any).author || 'Rank Flow Digital Team'} className="h-9 w-9 rounded-full object-cover" />
              <span className="font-medium text-slate-200">{(post as any).author || 'Rank Flow Digital Team'}</span>
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-brand-400" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand-400" /> {post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="container-x">
        <div className="grad-border overflow-hidden rounded-3xl reveal">
          <img
            src={post.img}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="eager"
            width={1200}
            height={630}
          />
        </div>
      </section>

      {/* Article body + sticky sidebar */}
      <section className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem]">
          {/* Main content */}
          <article className="min-w-0 max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-300 reveal">{post.excerpt}</p>

            <div className="mt-10 space-y-12">
              {content.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">{section.heading}</h2>
                  <div className="article-body mt-4 text-slate-300 [&_a]:text-brand-300 [&_a]:underline [&_a:hover]:text-brand-200 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-white [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-400">
                    {section.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Share row */}
            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <Share2 className="h-4 w-4 text-brand-400" /> Share this article
              </span>
              <div className="flex items-center gap-2">
                {shareLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${s.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-500/15 hover:text-white"
                  >
                    <ShareIcon name={s.name} />
                  </a>
                ))}
                <button
                  onClick={copyLink}
                  aria-label="Copy link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-500/15 hover:text-white"
                >
                  {copied ? <Check className="h-4 w-4 text-brand-300" /> : <Link2 className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Author box */}
            <div className="mt-10 grad-border rounded-3xl">
              <div className="flex flex-col items-start gap-5 rounded-3xl bg-white/[0.03] p-7 sm:flex-row">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Rank Flow Digital Team"
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                />
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-300">Written by</div>
                  <h3 className="mt-1 text-xl font-bold text-white">{(post as any).author || 'Rank Flow Digital Team'}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {(post as any).author
                      ? `${(post as any).author} is an SEO consultant and digital marketing strategist at Rank Flow Digital, helping businesses improve their Google visibility, organic traffic, and website ranking through proven search engine optimization practices.`
                      : 'The Rank Flow Digital team is a group of SEO strategists, content writers, and web designers with over a decade of experience ranking businesses across every industry. We share what we learn from real campaigns so you can grow faster.'}
                  </p>
                  <div className="mt-4"><SocialIcons size="sm" /></div>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link to={`/blog/${prev.slug}`} className="group grad-border lift">
                <div className="flex h-full flex-col rounded-3xl bg-white/[0.03] p-6">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <ArrowLeft className="h-3.5 w-3.5" /> Previous
                  </span>
                  <span className="mt-2 font-semibold text-white group-hover:text-brand-300">{prev.title}</span>
                </div>
              </Link>
              <Link to={`/blog/${next.slug}`} className="group grad-border lift">
                <div className="flex h-full flex-col rounded-3xl bg-white/[0.03] p-6 text-right">
                  <span className="ml-auto flex items-center gap-1.5 text-xs text-slate-400">
                    Next <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="mt-2 font-semibold text-white group-hover:text-brand-300">{next.title}</span>
                </div>
              </Link>
            </div>
          </article>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* TOC */}
              <div className="grad-border rounded-2xl">
                <div className="rounded-2xl bg-white/[0.03] p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Table of Contents</h3>
                  <nav className="mt-4 space-y-1">
                    {content.sections.map((s, i) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`block border-l-2 py-1.5 pl-3 text-sm transition-colors ${
                          activeId === s.id
                            ? 'border-brand-400 text-brand-300'
                            : 'border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="mr-1.5 text-xs text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                        {s.heading}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Share widget */}
              <div className="grad-border rounded-2xl">
                <div className="rounded-2xl bg-white/[0.03] p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Share</h3>
                  <div className="mt-4 flex flex-col gap-2">
                    {shareLinks.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition-all hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
                      >
                        <ShareIcon name={s.name} /> {s.name}
                      </a>
                    ))}
                    <button
                      onClick={copyLink}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition-all hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
                    >
                      {copied ? <Check className="h-4 w-4 text-brand-300" /> : <Link2 className="h-4 w-4" />}
                      {copied ? 'Copied!' : 'Copy link'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mini CTA */}
              <div className="grad-border rounded-2xl">
                <div className="rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/5 p-5 text-center">
                  <h3 className="text-sm font-semibold text-white">Free SEO Audit</h3>
                  <p className="mt-2 text-xs text-slate-400">See where you rank and how to grow — no obligation.</p>
                  <button onClick={() => navigate('/contact')} className="btn-glow mt-4 w-full text-xs">
                    Get My Audit <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <div className="text-center">
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold text-white reveal reveal-delay-1">Frequently asked questions</h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {content.faqs.map((f, i) => (
            <details key={i} className="grad-border group rounded-2xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl bg-white/[0.03] p-5">
                <span className="font-semibold text-white">{f.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300 transition-transform group-open:rotate-45">
                  <ArrowRight className="h-3.5 w-3.5 rotate-90" />
                </span>
              </summary>
              <p className="px-5 pb-5 text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related articles */}
      <section className="container-x py-16">
        <h2 className="text-2xl font-bold text-white">Related articles</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r, i) => (
            <Link key={r.slug} to={`/blog/${r.slug}`} className={`group grad-border lift reveal reveal-delay-${i + 1}`}>
              <div className="overflow-hidden rounded-3xl">
                <div className="relative h-44 overflow-hidden rounded-t-3xl">
                  <img src={r.img} alt={r.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">{r.category}</span>
                </div>
                <div className="rounded-b-3xl bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {r.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {r.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-white">{r.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-x py-12">
        <div className="grad-border rounded-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-12 text-center sm:px-16">
            <div className="blob -left-10 top-0 h-56 w-56 bg-brand-500/25" />
            <div className="blob -right-10 bottom-0 h-56 w-56 bg-accent-500/20" />
            <div className="relative">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-300">
                <Mail className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">Get SEO insights in your inbox</h2>
              <p className="mx-auto mt-3 max-w-md text-slate-400">Join 5,000+ marketers getting actionable SEO tips every week. No spam, ever.</p>
              {subscribed ? (
                <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-xl bg-brand-500/15 px-5 py-4 text-brand-200">
                  <Check className="h-5 w-5" /> You’re subscribed! Check your inbox to confirm.
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                  className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-brand-400"
                  />
                  <button type="submit" className="btn-glow shrink-0">
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to put this strategy to work?" subtitle="Get a free SEO audit and a custom growth plan from our team." />
    </>
  );
}

function ShareIcon({ name }: { name: string }) {
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (name === 'Twitter') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return null;
}
