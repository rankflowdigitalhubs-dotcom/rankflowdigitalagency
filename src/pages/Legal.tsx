import { ArrowRight } from 'lucide-react';
import { SEO, breadcrumbSchema } from '../seo';
import { PageHero } from '../components';
import { Link } from '../router';

function LegalLayout({ title, breadcrumb, children }: { title: string; breadcrumb: { name: string; path: string }[]; children: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle="Last updated July 2026." breadcrumbs={breadcrumb} />
      <section className="container-x py-12">
        <div className="mx-auto max-w-3xl space-y-6 text-ink-600 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink-950 [&_h2]:mt-8 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-ink-600">
          {children}
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]}>
      <SEO title="Privacy Policy" description="Learn how Rank Flow Digital collects, uses, and protects your personal information. Read our full privacy policy covering data, cookies, and your rights." path="/privacy-policy" schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])} />
      <p>Rank Flow Digital ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains what information we collect, how we use it, and the choices you have. This policy applies to our website and all <Link to="/services/" className="text-brand-600 hover:text-brand-600">services</Link> provided by Rank Flow Digital. If you have any questions after reading this policy, please <Link to="/contact/" className="text-brand-600 hover:text-brand-600">contact us</Link> directly.</p>
      <h2>Information We Collect</h2>
      <p>We collect information you provide directly to us when you fill out our <Link to="/contact/" className="text-brand-600 hover:text-brand-600">contact form</Link>, request a free SEO audit, or engage our services. This may include your name, email address, phone number, company name, website URL, and any details you share in your message. We also collect basic analytics data such as pages visited, time spent on our site, browser type, device information, and referring websites. This data helps us understand how visitors use our site so we can improve the experience.</p>
      <h2>How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To respond to your inquiries and provide the <Link to="/seo/" className="text-brand-600 hover:text-brand-600">SEO</Link>, <Link to="/content-writing/" className="text-brand-600 hover:text-brand-600">content writing</Link>, or <Link to="/website-design/" className="text-brand-600 hover:text-brand-600">web design</Link> services you request.</li>
        <li>To send you relevant updates, proposals, and reports related to your project or campaign.</li>
        <li>To send occasional newsletters or marketing communications if you have opted in. You can unsubscribe at any time.</li>
        <li>To improve our website, services, and content based on user behavior and feedback.</li>
        <li>To analyze trends, monitor usage, and detect and prevent fraud or abuse.</li>
        <li>To comply with legal obligations and protect our rights and property.</li>
      </ul>
      <h2>Cookies and Tracking Technologies</h2>
      <p>We use minimal cookies and similar tracking technologies on our website. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our site. We use analytics cookies to collect aggregate data about website traffic and user behavior. We do not use cookies to identify you personally. You can control and disable cookies through your browser settings at any time without affecting the functionality of our website. Disabling cookies may limit some features but will not prevent you from accessing our content.</p>
      <h2>Third-Party Services</h2>
      <p>We do not sell, rent, or trade your personal data with third parties. We may share limited information with trusted third-party tools and service providers that help us operate our business, such as analytics platforms, email service providers, and project management tools. These providers are bound by their own privacy policies and are only given access to the information necessary to perform their functions. We review their practices to ensure they meet our standards. If you would like to learn more about how we handle data in our <Link to="/monthly-seo-management/" className="text-brand-600 hover:text-brand-600">monthly SEO management</Link> programs, we are happy to provide details.</p>
      <h2>Data Security</h2>
      <p>We take reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission, secure storage systems, access controls limited to authorized personnel, and regular security reviews. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security. If you are concerned about data handling as part of our <Link to="/technical-seo/" className="text-brand-600 hover:text-brand-600">technical SEO</Link> or <Link to="/seo-audit/" className="text-brand-600 hover:text-brand-600">SEO audit</Link> services, please discuss your requirements with us before engagement.</p>
      <h2>Data Retention</h2>
      <p>We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. Client data related to active projects is kept for the duration of the engagement plus a reasonable period afterward for reference and support. Analytics data is retained in aggregate form and does not identify individual users.</p>
      <h2>Your Rights</h2>
      <p>Depending on your location, you may have the following rights regarding your personal data:</p>
      <ul>
        <li>The right to access the personal data we hold about you.</li>
        <li>The right to request correction of inaccurate or incomplete data.</li>
        <li>The right to request deletion of your personal data, subject to legal exceptions.</li>
        <li>The right to object to or restrict certain processing of your data.</li>
        <li>The right to withdraw consent for marketing communications at any time.</li>
        <li>The right to request a copy of your data in a portable format.</li>
      </ul>
      <p>To exercise any of these rights, please email us at info@rankflowagency.online. We will respond to your request within 30 days.</p>
      <h2>Children's Privacy</h2>
      <p>Our website and services are intended for businesses and professionals. We do not knowingly collect personal information from children under 16. If you believe we have collected data from a minor, please contact us and we will promptly delete it.</p>
      <h2>International Data Transfers</h2>
      <p>Rank Flow Digital serves clients worldwide. Your information may be transferred to and processed in countries other than your own, including countries that may have different data protection laws. We take steps to ensure your data is protected in accordance with this policy regardless of where it is processed. If you are engaging our <Link to="/international-seo/" className="text-brand-600 hover:text-brand-600">international SEO</Link> services, we can discuss specific data handling requirements for your region.</p>
      <h2>Changes to This Policy</h2>
      <p>We may update this privacy policy from time to time to reflect changes in our practices, technology, or legal requirements. We will post the updated policy on this page and revise the "last updated" date at the top. We encourage you to review this page periodically to stay informed about how we protect your data.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions, concerns, or requests regarding this privacy policy or your personal data, please contact us at info@rankflowagency.online or visit our <Link to="/contact/" className="text-brand-600 hover:text-brand-600">contact page</Link>. We are committed to resolving any issues promptly and transparently.</p>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms' }]}>
      <SEO title="Terms & Conditions" description="Read the terms and conditions governing use of Rank Flow Digital's website and SEO, content, and web design services. Understand your rights." path="/terms" schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms' }])} />
      <p>By using this website or engaging the services of Rank Flow Digital, you agree to the following terms and conditions. These terms govern your use of our website and all <Link to="/services/" className="text-brand-600 hover:text-brand-600">services</Link> we provide, including <Link to="/seo/" className="text-brand-600 hover:text-brand-600">SEO</Link>, <Link to="/content-writing/" className="text-brand-600 hover:text-brand-600">content writing</Link>, <Link to="/website-design/" className="text-brand-600 hover:text-brand-600">web design</Link>, and related digital marketing services. If you do not agree with these terms, please do not use our website or engage our services. We encourage you to review these terms periodically as they may be updated from time to time.</p>
      <h2>Services</h2>
      <p>Rank Flow Digital provides SEO, content writing, web design, <Link to="/link-building/" className="text-brand-600 hover:text-brand-600">link building</Link>, and related digital marketing services. The specific scope, deliverables, timelines, and pricing for each engagement are defined in a separate project agreement, proposal, or statement of work. We reserve the right to modify or discontinue any service offering at any time. For details on our pricing, please visit our <Link to="/pricing/" className="text-brand-600 hover:text-brand-600">pricing page</Link>. Any custom services or packages not listed on our website will be documented in a written agreement before work begins.</p>
      <h2>Client Responsibilities</h2>
      <p>To ensure successful project outcomes, clients are expected to provide timely access to necessary accounts, platforms, and information. This includes providing website credentials, analytics access, brand guidelines, and any other materials required for the agreed scope of work. Delays in providing access or feedback may impact project timelines and results. Clients are also responsible for the accuracy of all information provided to us and for reviewing and approving deliverables in a timely manner.</p>
      <h2>Intellectual Property</h2>
      <p>All content, designs, code, and materials created by Rank Flow Digital for a client project transfer to the client upon full payment of all outstanding invoices. Until full payment is received, Rank Flow Digital retains ownership of all deliverables. Client-provided materials, including but not limited to logos, images, text, and brand assets, remain the property of the client. We reserve the right to showcase completed work in our <Link to="/portfolio/" className="text-brand-600 hover:text-brand-600">portfolio</Link> and <Link to="/case-studies/" className="text-brand-600 hover:text-brand-600">case studies</Link> unless otherwise agreed in writing. Our website content, including text, graphics, logos, and design elements, is owned by Rank Flow Digital and may not be reproduced without permission.</p>
      <h2>Payment Terms</h2>
      <p>Invoices are due per the terms stated on each invoice, typically within 15 days of issuance unless otherwise agreed. <Link to="/monthly-seo-management/" className="text-brand-600 hover:text-brand-600">Monthly retainer services</Link> are billed in advance at the beginning of each billing cycle. One-time project fees are typically billed as 50% upfront and 50% upon completion, unless a different structure is agreed in the project proposal. Late payments may incur additional fees or result in a pause of services. We accept payment via bank transfer, credit card, and other methods specified on our invoices.</p>
      <h2>No Guarantees</h2>
      <p>SEO and digital marketing results depend on many factors outside our control, including search engine algorithm changes, competitor activity, market conditions, and client cooperation. We do not guarantee specific rankings, traffic levels, lead volumes, or revenue outcomes. What we do guarantee is a rigorous, transparent, and ethical process using industry best practices. Our <Link to="/seo-audit/" className="text-brand-600 hover:text-brand-600">SEO audit services</Link> and ongoing campaigns are designed to maximize your potential, but results vary by industry, competition, and starting point. Any claims or case studies presented on our website represent individual results and are not indicative of future performance.</p>
      <h2>Confidentiality</h2>
      <p>Both parties agree to keep confidential any proprietary information shared during the course of a project. This includes business strategies, financial information, customer data, and any other non-public information. We do not disclose client information to third parties without consent, except as required by law. Our team follows strict data handling protocols to protect your information throughout and after the engagement.</p>
      <h2>Limitation of Liability</h2>
      <p>Rank Flow Digital's liability is limited to the fees paid by the client for the specific service in question. We are not liable for indirect, incidental, special, or consequential damages, including but not limited to lost profits, lost revenue, or business interruption. We are not responsible for issues arising from third-party platforms, search engine algorithm updates, or factors beyond our control. Clients acknowledge that SEO and digital marketing involve inherent risks and that no provider can guarantee specific outcomes.</p>
      <h2>Termination</h2>
      <p>Either party may terminate services with written notice per the agreed notice period in the project agreement. For monthly retainers, a 30-day notice period is standard unless otherwise specified. Upon termination, fees for work completed up to the termination date are non-refundable. Any prepaid fees for services not yet rendered will be prorated and refunded. We will provide all completed deliverables and relevant project files upon termination, subject to full payment of outstanding invoices.</p>
      <h2>Website Use</h2>
      <p>You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair the website or interfere with another user's use. Unauthorized access, scraping, or reproduction of our content is prohibited. We may modify, suspend, or discontinue any part of the website at any time without notice. For questions about our website or services, please <Link to="/contact/" className="text-brand-600 hover:text-brand-600">contact us</Link> at any time.</p>
      <h2>Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services will be resolved through good-faith negotiation first, and if necessary, through appropriate legal channels. By engaging our services, you acknowledge that you have read, understood, and agreed to these terms.</p>
      <h2>Changes to These Terms</h2>
      <p>We may update these terms and conditions from time to time. Changes will be posted on this page with a revised "last updated" date. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms. We recommend reviewing this page periodically.</p>
      <h2>Contact</h2>
      <p>Questions about these terms? Email info@rankflowagency.online or visit our <Link to="/contact/" className="text-brand-600 hover:text-brand-600">contact page</Link>. We are happy to clarify any aspect of these terms before you engage our services.</p>
    </LegalLayout>
  );
}

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist. Visit Rank Flow Digital for premium SEO, content writing, and web design services." path="/404" />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="blob left-1/4 top-1/4 h-72 w-72 bg-brand-500/20 animate-float" />
        <div className="blob right-1/4 bottom-1/4 h-72 w-72 bg-accent-500/15 animate-float-slow" />
        <div className="container-x relative text-center">
          <h1 className="font-display text-8xl font-bold text-gradient sm:text-9xl">404</h1>
          <p className="mt-4 text-2xl font-semibold text-ink-950">This page took a wrong turn.</p>
          <p className="mx-auto mt-3 max-w-md text-ink-600">The page you're looking for may have moved or never existed. Let's get you back on track.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn-glow">Back to Home <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact/" className="btn-ghost">Contact Us</Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link to="/services/" className="btn-ghost text-sm">Our Services</Link>
            <Link to="/blog/" className="btn-ghost text-sm">Blog</Link>
            <Link to="/pricing/" className="btn-ghost text-sm">Pricing</Link>
            <Link to="/case-studies/" className="btn-ghost text-sm">Case Studies</Link>
            <Link to="/portfolio/" className="btn-ghost text-sm">Portfolio</Link>
            <Link to="/sitemap/" className="btn-ghost text-sm">Sitemap</Link>
          </div>
        </div>
      </section>
    </>
  );
}
