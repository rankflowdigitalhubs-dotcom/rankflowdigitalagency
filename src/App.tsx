import { useEffect } from 'react';
import { useRoute } from './router';
import { Loader, Cursor, Navbar, Footer, BackToTop } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import LocalSeo from './pages/LocalSeo';
import TechnicalSeo from './pages/TechnicalSeo';
import ContentWriting from './pages/ContentWriting';
import GuestPosting from './pages/GuestPosting';
import LinkBuilding from './pages/LinkBuilding';
import ShopifySEO from './pages/ShopifySEO';
import WebsiteDesign from './pages/WebsiteDesign';
import SEOAudit from './pages/SEOAudit';
import Portfolio from './pages/Portfolio';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import { PrivacyPolicy, Terms, NotFound } from './pages/Legal';
import { services } from './data';

const serviceSlugs = new Set(services.map((s) => s.slug));

function App() {
  const path = useRoute();

  // Re-run reveal observer on route change (after render).
  useEffect(() => {
    const t = setTimeout(() => {
      const els = document.querySelectorAll('.reveal:not(.is-visible)');
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach((el) => io.observe(el));
    }, 60);
    return () => clearTimeout(t);
  }, [path]);

  const render = () => {
    if (path === '/') return <Home />;
    if (path === '/about') return <About />;
    if (path === '/services') return <Services />;
    if (path === '/portfolio') return <Portfolio />;
    if (path === '/case-studies') return <CaseStudies />;
    if (path === '/pricing') return <Pricing />;
    if (path === '/blog') return <Blog />;
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return <BlogPost slug={slug} />;
    }
    if (path === '/contact') return <Contact />;
    if (path === '/privacy-policy') return <PrivacyPolicy />;
    if (path === '/terms') return <Terms />;
    if (path === '/local-seo') return <LocalSeo />;
    if (path === '/technical-seo') return <TechnicalSeo />;
    if (path === '/content-writing') return <ContentWriting />;
    if (path === '/guest-posting') return <GuestPosting />;
    if (path === '/link-building') return <LinkBuilding />;
    if (path === '/shopify-seo') return <ShopifySEO />;
    if (path === '/website-design') return <WebsiteDesign />;
    if (path === '/seo-audit') return <SEOAudit />;
    const serviceMatch = path.match(/^\/([a-z-]+)$/);
    if (serviceMatch && serviceSlugs.has(serviceMatch[1])) {
      return <ServiceDetail slug={serviceMatch[1]} />;
    }
    return <NotFound />;
  };

  return (
    <div className="relative min-h-screen">
      <Loader />
      <Cursor />
      <Navbar />
      <main key={path} className="animate-fade-in">
        {render()}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
