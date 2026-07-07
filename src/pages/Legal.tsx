import { ArrowRight } from 'lucide-react';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero } from '../components';

function LegalLayout({ title, breadcrumb, children }: { title: string; breadcrumb: { name: string; path: string }[]; children: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle="Last updated July 2026." breadcrumbs={breadcrumb} />
      <section className="container-x py-12">
        <div className="mx-auto max-w-3xl space-y-6 text-slate-300 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-8 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-400">
          {children}
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]}>
      <SEO title="Privacy Policy" description="How Rank Flow Digital collects, uses, and protects your personal information." path="/privacy-policy" schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])} />
      <p>Rank Flow Digital (“we”, “us”) respects your privacy. This policy explains what we collect and how we use it.</p>
      <h2>Information We Collect</h2>
      <p>We collect information you provide directly — such as your name, email, and message via our contact form — and basic analytics data like pages visited and referring sites.</p>
      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to inquiries and provide services.</li>
        <li>To send relevant updates if you’ve opted in.</li>
        <li>To improve our website and offerings.</li>
      </ul>
      <h2>Cookies</h2>
      <p>We use minimal cookies for analytics. You can disable cookies in your browser without affecting site functionality.</p>
      <h2>Third Parties</h2>
      <p>We do not sell your data. We may share it with trusted tools (e.g., analytics) solely to operate our business, under their respective privacy policies.</p>
      <h2>Your Rights</h2>
      <p>You may request access to, correction of, or deletion of your personal data at any time by emailing info@rankflowagency.online.</p>
      <h2>Contact</h2>
      <p>Questions about this policy? Email info@rankflowagency.online.</p>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms' }]}>
      <SEO title="Terms & Conditions" description="The terms governing use of Rank Flow Digital’s website and services." path="/terms" schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms' }])} />
      <p>By using this website or engaging our services, you agree to the following terms.</p>
      <h2>Services</h2>
      <p>We provide SEO, content, web design, and related digital marketing services. Specific deliverables are defined in each project agreement.</p>
      <h2>Intellectual Property</h2>
      <p>All website content is owned by Rank Flow Digital. Client-provided materials remain the client’s property. Final deliverables transfer to the client upon full payment.</p>
      <h2>Payment</h2>
      <p>Invoices are due per the terms stated on each invoice. Retainer services are billed monthly in advance.</p>
      <h2>No Guarantees</h2>
      <p>SEO results depend on many factors outside our control. We do not guarantee specific rankings, traffic, or revenue, but we do guarantee a rigorous, transparent process.</p>
      <h2>Limitation of Liability</h2>
      <p>Our liability is limited to the fees paid for the service in question. We are not liable for indirect or consequential damages.</p>
      <h2>Termination</h2>
      <p>Either party may terminate services with written notice per the agreed notice period. Fees for work completed are non-refundable.</p>
      <h2>Contact</h2>
      <p>Questions? Email info@rankflowagency.online.</p>
    </LegalLayout>
  );
}

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you’re looking for doesn’t exist." path="/404" />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="blob left-1/4 top-1/4 h-72 w-72 bg-brand-500/20 animate-float" />
        <div className="blob right-1/4 bottom-1/4 h-72 w-72 bg-accent-500/15 animate-float-slow" />
        <div className="container-x relative text-center">
          <h1 className="font-display text-8xl font-bold text-gradient sm:text-9xl">404</h1>
          <p className="mt-4 text-2xl font-semibold text-white">This page took a wrong turn.</p>
          <p className="mx-auto mt-3 max-w-md text-slate-400">The page you’re looking for may have moved or never existed. Let’s get you back on track.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#/" className="btn-glow">Back to Home <ArrowRight className="h-4 w-4" /></a>
            <a href="#/contact" className="btn-ghost">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
