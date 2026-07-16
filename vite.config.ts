import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

type PageMeta = {
  title: string;
  description: string;
  h1: string;
  path: string;
};

const BASE = 'https://rankflowagency.online';

const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Rank Flow Digital — Premium SEO & Digital Marketing Agency',
    description: 'Rank Flow Digital is a premium SEO agency helping businesses rank higher and grow revenue with white-hat SEO, content writing, and web design. Get a free audit.',
    h1: 'Rank Flow Digital — Premium SEO & Digital Marketing Agency',
    path: '/',
  },
  '/about/': {
    title: 'About Rank Flow Digital — Our SEO Agency Story',
    description: 'Learn about Rank Flow Digital, a data-driven SEO agency helping businesses rank higher, convert better, and grow revenue with proven white-hat strategies.',
    h1: 'About Rank Flow Digital',
    path: '/about/',
  },
  '/services/': {
    title: 'SEO Services — Full-Stack Digital Marketing | Rank Flow Digital',
    description: 'Explore our full range of SEO services: local SEO, technical SEO, content writing, link building, web design, and more. Get a free audit today.',
    h1: 'Our SEO Services',
    path: '/services/',
  },
  '/portfolio/': {
    title: 'Portfolio — SEO Case Studies & Results | Rank Flow Digital',
    description: 'See our portfolio of SEO success stories. Real campaigns, real rankings, real revenue growth for businesses across industries.',
    h1: 'Our Portfolio',
    path: '/portfolio/',
  },
  '/case-studies/': {
    title: 'Case Studies — Proven SEO Results | Rank Flow Digital',
    description: 'Detailed SEO case studies showing how we helped businesses rank higher, increase traffic, and grow revenue with data-driven strategies.',
    h1: 'SEO Case Studies',
    path: '/case-studies/',
  },
  '/pricing/': {
    title: 'Pricing — Transparent SEO Packages | Rank Flow Digital',
    description: 'Clear, upfront SEO pricing packages. Choose the plan that fits your business goals and budget. No hidden fees, no long-term contracts.',
    h1: 'SEO Pricing Plans',
    path: '/pricing/',
  },
  '/blog/': {
    title: 'SEO Blog — Guides, Tips & Strategies | Rank Flow Digital',
    description: 'Actionable SEO guides, tips, and strategies from our team of experts. Learn how to rank higher, get more traffic, and grow your business.',
    h1: 'Rank Flow Digital Blog',
    path: '/blog/',
  },
  '/blog/page/2/': {
    title: 'SEO Blog Page 2 — Guides, Tips & Strategies | Rank Flow Digital',
    description: 'Browse page 2 of our SEO blog — actionable guides, tips, and strategies to help you rank higher, get more traffic, and grow your business.',
    h1: 'Rank Flow Digital Blog — Page 2',
    path: '/blog/page/2/',
  },
  '/blog/page/3/': {
    title: 'SEO Blog Page 3 — Guides, Tips & Strategies | Rank Flow Digital',
    description: 'Browse page 3 of our SEO blog — actionable guides, tips, and strategies to help you rank higher, get more traffic, and grow your business.',
    h1: 'Rank Flow Digital Blog — Page 3',
    path: '/blog/page/3/',
  },
  '/blog/page/4/': {
    title: 'SEO Blog Page 4 — Guides, Tips & Strategies | Rank Flow Digital',
    description: 'Browse page 4 of our SEO blog — actionable guides, tips, and strategies to help you rank higher, get more traffic, and grow your business.',
    h1: 'Rank Flow Digital Blog — Page 4',
    path: '/blog/page/4/',
  },
  '/contact/': {
    title: 'Contact Us — Get Your Free SEO Audit | Rank Flow Digital',
    description: 'Ready to grow your organic traffic? Contact Rank Flow Digital for a free SEO audit and consultation. Let us show you the path to higher rankings.',
    h1: 'Contact Rank Flow Digital',
    path: '/contact/',
  },
  '/sitemap/': {
    title: 'Sitemap — All Pages | Rank Flow Digital',
    description: 'Browse all pages on the Rank Flow Digital website, including services, blog posts, and resources.',
    h1: 'Sitemap',
    path: '/sitemap/',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | Rank Flow Digital',
    description: 'Read our privacy policy to understand how Rank Flow Digital collects, uses, and protects your data.',
    h1: 'Privacy Policy',
    path: '/privacy-policy/',
  },
  '/terms/': {
    title: 'Terms & Conditions | Rank Flow Digital',
    description: 'Read the terms and conditions for using Rank Flow Digital services and website.',
    h1: 'Terms & Conditions',
    path: '/terms/',
  },
  // Services
  '/seo/': {
    title: 'Search Engine Optimization Services | Rank Flow Digital',
    description: 'Rank higher and convert better with our proven SEO services. White-hat strategies that drive organic traffic and revenue growth.',
    h1: 'Search Engine Optimization',
    path: '/seo/',
  },
  '/local-seo/': {
    title: 'Local SEO Services — Rank in Your Area | Rank Flow Digital',
    description: 'Be the first name they find nearby. Our local SEO services help you dominate the map pack and attract local customers.',
    h1: 'Local SEO Services',
    path: '/local-seo/',
  },
  '/technical-seo/': {
    title: 'Technical SEO Services — Fix Your Site Foundation | Rank Flow Digital',
    description: 'A site Google can crawl, render, and love. Our technical SEO services fix crawlability, speed, and indexation issues.',
    h1: 'Technical SEO Services',
    path: '/technical-seo/',
  },
  '/guest-posting/': {
    title: 'Guest Posting on High DA/DR Sites | Rank Flow Digital',
    description: 'Links that move rankings - not spam. Get high-authority guest posts on real sites with genuine traffic.',
    h1: 'Guest Posting on High DA/DR Sites',
    path: '/guest-posting/',
  },
  '/content-writing/': {
    title: 'SEO Content Writing Services | Rank Flow Digital',
    description: 'Words that work for algorithms and humans. Our content writing service produces SEO-driven content that ranks and converts.',
    h1: 'Content Writing Services',
    path: '/content-writing/',
  },
  '/logo-design/': {
    title: 'Logo Design Services — A Mark Worth Remembering | Rank Flow Digital',
    description: 'A mark worth remembering. Our logo design service creates distinctive, professional logos that build brand recognition.',
    h1: 'Logo Design Services',
    path: '/logo-design/',
  },
  '/website-design/': {
    title: 'Website Design & Development Services | Rank Flow Digital',
    description: 'Design that earns attention. Code that earns revenue. Our web design and development services create fast, SEO-friendly websites.',
    h1: 'Website Design & Development',
    path: '/website-design/',
  },
  '/monthly-seo-management/': {
    title: 'Monthly SEO Management Services | Rank Flow Digital',
    description: 'SEO that compounds month over month. Our monthly SEO management service handles everything for you with transparent reporting.',
    h1: 'Monthly SEO Management',
    path: '/monthly-seo-management/',
  },
  '/link-building/': {
    title: 'Link Building Services — Safe, Manual Outreach | Rank Flow Digital',
    description: 'Safe, manual outreach that builds lasting authority. Our link building services get high-quality backlinks from real sites.',
    h1: 'Link Building Services',
    path: '/link-building/',
  },
  '/shopify-seo/': {
    title: 'Shopify SEO Services — Drive More Sales | Rank Flow Digital',
    description: 'Drive more qualified shoppers to your Shopify store. Our Shopify SEO services optimize your store for search and conversions.',
    h1: 'Shopify SEO Services',
    path: '/shopify-seo/',
  },
  '/seo-audit/': {
    title: 'SEO Audit Services — Find What Holds You Back | Rank Flow Digital',
    description: 'Find exactly what is stopping your site from ranking. Our comprehensive SEO audit identifies issues and gives you a clear roadmap.',
    h1: 'SEO Audit Services',
    path: '/seo-audit/',
  },
  '/google-business-profile/': {
    title: 'Google Business Profile Optimization | Rank Flow Digital',
    description: 'Dominate local search and Google Maps results. Our Google Business Profile optimization service gets you more visibility and calls.',
    h1: 'Google Business Profile Optimization',
    path: '/google-business-profile/',
  },
  '/ecommerce-seo/': {
    title: 'E-commerce SEO Services — Increase Online Revenue | Rank Flow Digital',
    description: 'Drive more qualified shoppers and increase online revenue. Our e-commerce SEO services optimize your store for search and sales.',
    h1: 'E-commerce SEO Services',
    path: '/ecommerce-seo/',
  },
  '/on-page-seo/': {
    title: 'On-Page SEO Services — Optimize Every Element | Rank Flow Digital',
    description: 'Optimize every element on every page. Our on-page SEO services improve your content, meta tags, and internal linking.',
    h1: 'On-Page SEO Services',
    path: '/on-page-seo/',
  },
  '/off-page-seo/': {
    title: 'Off-Page SEO Services — Build Authority | Rank Flow Digital',
    description: 'Build authority that Google trusts. Our off-page SEO services include link building, brand mentions, and digital PR.',
    h1: 'Off-Page SEO Services',
    path: '/off-page-seo/',
  },
  '/white-label-seo/': {
    title: 'White Label SEO Services — Scale Your Agency | Rank Flow Digital',
    description: 'Scale your agency with SEO done for you. Our white label SEO services let you offer SEO under your own brand.',
    h1: 'White Label SEO Services',
    path: '/white-label-seo/',
  },
  '/international-seo/': {
    title: 'International SEO Services — Reach Customers Worldwide | Rank Flow Digital',
    description: 'Reach customers worldwide. Our international SEO services optimize your site for multiple countries and languages.',
    h1: 'International SEO Services',
    path: '/international-seo/',
  },
  '/cro-services/': {
    title: 'Conversion Rate Optimization Services | Rank Flow Digital',
    description: 'Turn more visitors into customers. Our CRO services optimize your funnels, forms, and calls-to-action for maximum conversions.',
    h1: 'Conversion Rate Optimization Services',
    path: '/cro-services/',
  },
  '/website-maintenance-seo/': {
    title: 'Website Maintenance & SEO Services | Rank Flow Digital',
    description: 'Keep your website fast, secure, and ranking. Our website maintenance and SEO service handles updates, monitoring, and optimization.',
    h1: 'Website Maintenance & SEO Services',
    path: '/website-maintenance-seo/',
  },
  '/enterprise-seo/': {
    title: 'Enterprise SEO Services — SEO Built for Scale | Rank Flow Digital',
    description: 'SEO built for scale. Our enterprise SEO services handle large sites, multiple stakeholders, and complex technical challenges.',
    h1: 'Enterprise SEO Services',
    path: '/enterprise-seo/',
  },
  // Blog posts
  '/blog/shopify-store-not-getting-sales/': {
    title: 'Why Is My Shopify Store Not Getting Sales? 15 Proven Fixes',
    description: 'A practical guide for Shopify store owners. Learn why your store is not getting sales and discover 15 proven fixes to increase conversions.',
    h1: 'Why Is My Shopify Store Not Getting Sales?',
    path: '/blog/shopify-store-not-getting-sales/',
  },
  '/blog/roofers-get-more-leads-from-google/': {
    title: 'How Roofers Can Get More Leads From Google (15 SEO Strategies)',
    description: 'A practical SEO guide for roofing contractors. Learn 15 proven strategies to get more roofing leads from Google search and maps.',
    h1: 'How Roofers Can Get More Leads From Google',
    path: '/blog/roofers-get-more-leads-from-google/',
  },
  '/blog/law-firm-not-showing-on-google/': {
    title: 'Law Firm Not Showing on Google? 15 Proven SEO Fixes',
    description: 'A practical SEO guide for law firms, attorneys, and solicitors. Learn why your firm is not showing on Google and how to fix it.',
    h1: 'Law Firm Not Showing on Google?',
    path: '/blog/law-firm-not-showing-on-google/',
  },
  '/blog/plumbing-business-not-getting-calls/': {
    title: 'Plumbing Business Not Getting Calls? 15 Proven SEO Fixes',
    description: 'A practical guide for plumbers and plumbing companies. Learn why your phone is not ringing and how to get more calls with SEO.',
    h1: 'Plumbing Business Not Getting Calls?',
    path: '/blog/plumbing-business-not-getting-calls/',
  },
  '/blog/real-estate-agents-seo-property-leads/': {
    title: 'How Real Estate Agents Can Get More Property Leads from Google',
    description: 'A practical SEO guide for real estate agents and realtors. Learn 15 proven strategies to generate more property leads from Google.',
    h1: 'How Real Estate Agents Can Get More Property Leads',
    path: '/blog/real-estate-agents-seo-property-leads/',
  },
  '/blog/get-more-customers-without-paid-ads/': {
    title: 'How to Get More Customers Without Paid Ads (15 Strategies)',
    description: 'Stop wasting money on ads. These 15 proven organic strategies help small businesses get more customers without spending on ads.',
    h1: 'How to Get More Customers Without Paid Ads',
    path: '/blog/get-more-customers-without-paid-ads/',
  },
  '/blog/local-seo-london-small-businesses/': {
    title: 'Local SEO for Small Businesses in London: Complete Guide',
    description: 'A practical, city-by-city Local SEO guide for London small businesses. Learn how to rank higher and attract local customers.',
    h1: 'Local SEO for Small Businesses in London',
    path: '/blog/local-seo-london-small-businesses/',
  },
  '/blog/why-is-my-website-not-showing-on-google/': {
    title: 'Why Is My Website Not Showing on Google? 12 Common Reasons',
    description: 'Is your website not showing on Google? Discover the 12 most common reasons your site is not ranking and how to fix each one.',
    h1: 'Why Is My Website Not Showing on Google?',
    path: '/blog/why-is-my-website-not-showing-on-google/',
  },
  '/blog/how-to-get-more-dental-patients-from-google/': {
    title: 'How to Get More Dental Patients From Google Without Ads',
    description: 'Struggling to get new dental patients from Google? Learn 12 proven dental SEO strategies to grow your practice without paid ads.',
    h1: 'How to Get More Dental Patients From Google',
    path: '/blog/how-to-get-more-dental-patients-from-google/',
  },
  '/blog/why-is-my-restaurant-not-showing-up-on-google/': {
    title: 'Why Is My Restaurant Not Showing Up on Google? 11 Fixes',
    description: 'Is your restaurant invisible on Google Maps and Search? Learn 11 proven fixes to get your restaurant ranking and getting bookings.',
    h1: 'Why Is My Restaurant Not Showing Up on Google?',
    path: '/blog/why-is-my-restaurant-not-showing-up-on-google/',
  },
  '/blog/how-to-get-sales-on-shopify-without-ads/': {
    title: 'How to Get Sales on Shopify Without Ads (Proven Strategies)',
    description: 'Getting Shopify traffic but no sales? Learn proven, ad-free strategies to increase conversions and revenue on your Shopify store.',
    h1: 'How to Get Sales on Shopify Without Ads',
    path: '/blog/how-to-get-sales-on-shopify-without-ads/',
  },
  '/blog/ecommerce-store-not-performing/': {
    title: '4 Reasons Why Your eCommerce Store Is Not Performing',
    description: 'Is your online store getting traffic but not making sales? Discover the 4 biggest reasons and how to fix them for more revenue.',
    h1: 'Why Your eCommerce Store Is Not Performing',
    path: '/blog/ecommerce-store-not-performing/',
  },
  '/blog/why-competitors-ranking-higher-on-google/': {
    title: 'Why Are My Competitors Ranking Higher on Google?',
    description: 'Wondering why competitors outrank you on Google? Discover the real reasons behind their success and how to beat them.',
    h1: 'Why Are My Competitors Ranking Higher on Google?',
    path: '/blog/why-competitors-ranking-higher-on-google/',
  },
  '/blog/local-seo-for-small-businesses/': {
    title: 'Local SEO for Small Businesses: The Complete Guide',
    description: 'Learn how Local SEO helps small businesses rank higher on Google, attract local customers, and grow revenue with proven strategies.',
    h1: 'Local SEO for Small Businesses',
    path: '/blog/local-seo-for-small-businesses/',
  },
  '/blog/why-is-my-website-not-ranking-on-google/': {
    title: 'Why Is My Website Not Ranking on Google? 12 Common SEO Mistakes',
    description: 'Is your website not ranking on Google? Discover the 12 most common SEO mistakes holding your site back and how to fix each one.',
    h1: 'Why Is My Website Not Ranking on Google?',
    path: '/blog/why-is-my-website-not-ranking-on-google/',
  },
  '/blog/seo-strategy-that-actually-works/': {
    title: 'The SEO Strategy That Actually Works in 2026: Complete Blueprint',
    description: 'Most SEO strategies are lists of tactics. This is a complete, repeatable blueprint for driving organic growth in 2026.',
    h1: 'The SEO Strategy That Actually Works',
    path: '/blog/seo-strategy-that-actually-works/',
  },
  '/blog/local-seo-guide-2026/': {
    title: 'The Complete Local SEO Guide for 2026',
    description: 'Everything you need to dominate the map pack, from Google Business Profile to citations, reviews, and local content.',
    h1: 'The Complete Local SEO Guide for 2026',
    path: '/blog/local-seo-guide-2026/',
  },
  '/blog/core-web-vitals/': {
    title: 'Core Web Vitals: The 2026 Technical SEO Checklist',
    description: 'LCP, INP, and CLS explained - with the exact fixes that move the needle on rankings and user experience.',
    h1: 'Core Web Vitals: The 2026 Technical SEO Checklist',
    path: '/blog/core-web-vitals/',
  },
  '/blog/link-building-white-hat/': {
    title: 'White-Hat Link Building That Actually Works',
    description: 'How we build authority backlinks on real sites without risking a single penalty. Safe, manual outreach strategies.',
    h1: 'White-Hat Link Building That Actually Works',
    path: '/blog/link-building-white-hat/',
  },
  '/blog/saas-seo-playbook/': {
    title: 'The SaaS SEO Playbook: From Trial to Revenue',
    description: 'A repeatable framework for turning organic search into a compounding SaaS growth channel.',
    h1: 'The SaaS SEO Playbook',
    path: '/blog/saas-seo-playbook/',
  },
  '/blog/content-that-converts/': {
    title: 'Writing Content That Ranks AND Converts',
    description: 'The balance between SEO optimization and persuasion - with templates you can use to create content that ranks and sells.',
    h1: 'Writing Content That Ranks AND Converts',
    path: '/blog/content-that-converts/',
  },
  '/blog/ecommerce-category-pages/': {
    title: 'How to Rank E-commerce Category Pages',
    description: 'Category pages are your biggest SEO asset. Learn how to optimize them for search rankings and conversions.',
    h1: 'How to Rank E-commerce Category Pages',
    path: '/blog/ecommerce-category-pages/',
  },
  '/blog/hvac-business-not-showing-on-google/': {
    title: 'Why Is Your HVAC Business Not Showing on Google? 12 Fixes',
    description: 'Is your HVAC business invisible on Google Search and Maps? Learn why and discover proven fixes to get more HVAC leads.',
    h1: 'Why Is Your HVAC Business Not Showing on Google?',
    path: '/blog/hvac-business-not-showing-on-google/',
  },
  '/blog/electrical-business-not-showing-on-google/': {
    title: 'Why Is Your Electrical Business Not Showing on Google? 12 Fixes',
    description: 'Is your electrical business invisible on Google Search and Maps? Learn why and discover proven fixes to get more electrical leads.',
    h1: 'Why Is Your Electrical Business Not Showing on Google?',
    path: '/blog/electrical-business-not-showing-on-google/',
  },
  '/blog/electricians-get-more-local-customers-without-ads/': {
    title: 'How Electricians Can Get More Local Customers Without Ads',
    description: 'Stop wasting money on ads. Learn 12 proven ways electricians can generate more local customers with SEO and organic strategies.',
    h1: 'How Electricians Can Get More Local Customers Without Ads',
    path: '/blog/electricians-get-more-local-customers-without-ads/',
  },
  '/blog/local-seo-for-electricians-complete-guide/': {
    title: 'Local SEO for Electricians: The Complete Guide',
    description: 'The complete guide to Local SEO for electricians. Learn how to rank higher on Google, get more local customers, and grow your business.',
    h1: 'Local SEO for Electricians: The Complete Guide',
    path: '/blog/local-seo-for-electricians-complete-guide/',
  },
  '/blog/rank-electrical-business-on-google-maps/': {
    title: 'How to Rank Your Electrical Business on Google Maps',
    description: 'Learn how to rank your electrical business on Google Maps with 12 proven strategies for more visibility and calls.',
    h1: 'How to Rank Your Electrical Business on Google Maps',
    path: '/blog/rank-electrical-business-on-google-maps/',
  },
  '/blog/best-seo-tips-for-electricians/': {
    title: 'Best SEO Tips for Electricians: 15 Proven Strategies to Get More Local Customers',
    description: 'The complete guide to SEO for electricians. Learn 15 proven strategies to improve Google rankings, attract local customers, and grow your electrical business.',
    h1: 'Best SEO Tips for Electricians: 15 Proven Strategies to Get More Local Customers',
    path: '/blog/best-seo-tips-for-electricians/',
  },
  '/blog/how-to-get-emergency-electrical-leads-online/': {
    title: 'How to Get Emergency Electrical Leads Online (8 Proven Strategies That Work)',
    description: 'Learn how to get emergency electrical leads online with 8 proven strategies. Optimize your Google Business Profile, target urgent keywords, and turn local searches into service calls.',
    h1: 'How to Get Emergency Electrical Leads Online (8 Proven Strategies That Work)',
    path: '/blog/how-to-get-emergency-electrical-leads-online/',
  },
  '/blog/local-seo-for-real-estate-agents/': {
    title: 'Local SEO for Real Estate Agents: 10 Proven Strategies to Get More Buyer & Seller Leads',
    description: 'A complete guide to local SEO for real estate agents. Learn 10 proven strategies to improve Google visibility, rank higher on Google Maps, and generate more buyer and seller leads.',
    h1: 'Local SEO for Real Estate Agents: 10 Proven Strategies to Get More Buyer & Seller Leads',
    path: '/blog/local-seo-for-real-estate-agents/',
  },
  '/blog/how-to-get-more-property-leads-without-paid-ads/': {
    title: 'How to Get More Property Leads Without Paid Ads (10 Proven SEO Strategies)',
    description: 'Learn how to get more property leads without paid ads. Discover 10 proven SEO strategies to attract buyer and seller leads organically through Google, Google Maps, and local search.',
    h1: 'How to Get More Property Leads Without Paid Ads (10 Proven SEO Strategies)',
    path: '/blog/how-to-get-more-property-leads-without-paid-ads/',
  },
  '/blog/google-business-profile-for-real-estate-agents/': {
    title: 'Google Business Profile for Real Estate Agents: 10 Ways to Optimize & Get More Leads',
    description: 'A complete guide to Google Business Profile for real estate agents. Learn 10 ways to optimize your profile, rank higher on Google Maps, and generate more buyer and seller leads.',
    h1: 'Google Business Profile for Real Estate Agents: 10 Ways to Optimize & Get More Leads',
    path: '/blog/google-business-profile-for-real-estate-agents/',
  },
  '/blog/best-seo-strategy-for-realtors/': {
    title: 'Best SEO Strategy for Realtors: 10 Steps to Rank Higher on Google & Get More Leads',
    description: 'A complete SEO strategy for realtors. Learn 10 proven steps to rank higher on Google, optimize your Google Business Profile, and generate consistent organic buyer and seller leads.',
    h1: 'Best SEO Strategy for Realtors: 10 Steps to Rank Higher on Google & Get More Leads',
    path: '/blog/best-seo-strategy-for-realtors/',
  },
  '/blog/why-isnt-my-hvac-business-getting-calls/': {
    title: "Why Isn't My HVAC Business Getting Calls? (10 Reasons & 10 Fixes)",
    description: "Discover why your HVAC business isn't getting calls. Learn the 10 most common SEO and local marketing issues and 10 proven fixes to increase phone calls and bookings.",
    h1: "Why Isn't My HVAC Business Getting Calls?",
    path: '/blog/why-isnt-my-hvac-business-getting-calls/',
  },
  '/blog/hvac-seo-how-to-get-more-customers-from-google/': {
    title: 'HVAC SEO: How to Get More Customers From Google (10 Proven Strategies)',
    description: 'A complete HVAC SEO guide. Learn 10 proven strategies to rank higher on Google and Google Maps, optimize your Google Business Profile, and generate more qualified HVAC customers.',
    h1: 'HVAC SEO: How to Get More Customers From Google',
    path: '/blog/hvac-seo-how-to-get-more-customers-from-google/',
  },
  '/blog/local-seo-for-hvac-contractors/': {
    title: 'Local SEO for HVAC Contractors: 10 Strategies to Rank Higher on Google Maps',
    description: 'A complete local SEO guide for HVAC contractors. Learn 10 proven strategies to rank higher on Google Maps, optimize your Google Business Profile, and generate more local service calls.',
    h1: 'Local SEO for HVAC Contractors',
    path: '/blog/local-seo-for-hvac-contractors/',
  },
  '/blog/google-business-profile-tips-for-hvac-companies/': {
    title: 'Google Business Profile Tips for HVAC Companies: 10 Ways to Get More Calls',
    description: 'A complete guide to Google Business Profile for HVAC companies. Learn 10 proven tips to optimize your profile, improve Google Maps rankings, and generate more phone calls.',
    h1: 'Google Business Profile Tips for HVAC Companies',
    path: '/blog/google-business-profile-tips-for-hvac-companies/',
  },
  '/blog/why-your-hvac-website-isnt-ranking/': {
    title: "Why Your HVAC Website Isn't Ranking: 10 Fixes That Work",
    description: 'Is your HVAC website stuck on page 2? Learn the 10 most common reasons HVAC websites do not rank on Google and the exact fixes to improve your rankings, Google Maps visibility, and customer calls.',
    h1: "Why Your HVAC Website Isn't Ranking",
    path: '/blog/why-your-hvac-website-isnt-ranking/',
  },
  '/blog/why-isnt-my-cleaning-business-getting-customers/': {
    title: "Why Isn't My Cleaning Business Getting Customers? 10 Proven Fixes",
    description: 'Not getting enough cleaning customers? Learn the 10 most common SEO and local marketing problems holding back your cleaning business and the exact fixes to increase local visibility and bookings.',
    h1: "Why Isn't My Cleaning Business Getting Customers?",
    path: '/blog/why-isnt-my-cleaning-business-getting-customers/',
  },
  '/blog/how-cleaning-businesses-can-get-more-leads-from-google/': {
    title: 'How Cleaning Businesses Can Get More Leads From Google',
    description: 'Learn 10 proven SEO strategies to generate more qualified cleaning leads from Google Search and Google Maps without relying on paid ads. Includes a checklist and common mistakes to avoid.',
    h1: 'How Cleaning Businesses Can Get More Leads From Google',
    path: '/blog/how-cleaning-businesses-can-get-more-leads-from-google/',
  },
  '/blog/google-business-profile-guide-for-cleaning-services/': {
    title: 'Google Business Profile Guide for Cleaning Services',
    description: 'A complete guide to optimizing your Google Business Profile for cleaning services. Learn 10 actionable steps to improve Google Maps rankings, get more phone calls, and attract consistent local customers.',
    h1: 'Google Business Profile Guide for Cleaning Services',
    path: '/blog/google-business-profile-guide-for-cleaning-services/',
  },
  '/blog/best-seo-strategy-for-cleaning-companies/': {
    title: 'Best SEO Strategy for Cleaning Companies',
    description: 'A complete SEO strategy for cleaning companies. Learn 10 proven steps to rank higher on Google, generate more phone calls, increase website traffic, and attract new customers without paid advertising.',
    h1: 'Best SEO Strategy for Cleaning Companies',
    path: '/blog/best-seo-strategy-for-cleaning-companies/',
  },
  '/blog/dental-seo-how-to-get-more-patients-from-google/': {
    title: 'Dental SEO: How to Get More Patients From Google',
    description: 'A complete dental SEO guide for dentists and clinic owners. Learn 10 proven strategies to rank higher on Google, attract more patient appointments, and grow your practice without relying on paid ads.',
    h1: 'Dental SEO: How to Get More Patients From Google',
    path: '/blog/dental-seo-how-to-get-more-patients-from-google/',
  },
};

function injectMeta(html: string, meta: PageMeta): string {
  let result = html;

  // Replace title
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

  // Replace meta description
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );

  // Replace canonical
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${BASE}${meta.path}"`
  );

  // Replace hreflang alternate links for worldwide targeting
  result = result.replace(
    /<link rel="alternate" hreflang="en" href="[^"]*"/,
    `<link rel="alternate" hreflang="en" href="${BASE}${meta.path}"`
  );
  result = result.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*"/,
    `<link rel="alternate" hreflang="x-default" href="${BASE}${meta.path}"`
  );

  // Replace OG tags
  result = result.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`
  );
  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  );
  result = result.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${BASE}${meta.path}"`
  );

  // Replace Twitter tags
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`
  );
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`
  );

  // Inject H1 and noscript content into #root so crawlers see it
  const h1Html = `<h1 style="position:absolute;left:-9999px;">${meta.h1}</h1><noscript><p>${meta.description}</p></noscript>`;
  result = result.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${h1Html}</div>`
  );

  return result;
}

function generateStaticRoutes(): Plugin {
  return {
    name: 'generate-static-routes',
    apply: 'build',
    closeBundle() {
      const distDir = join(__dirname, 'dist');
      const sitemapPath = join(distDir, 'sitemap.xml');
      const indexPath = join(distDir, 'index.html');

      if (!existsSync(sitemapPath) || !existsSync(indexPath)) {
        console.warn('generate-static-routes: sitemap.xml or index.html not found, skipping.');
        return;
      }

      const indexHtml = readFileSync(indexPath, 'utf-8');
      const sitemap = readFileSync(sitemapPath, 'utf-8');
      const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

      let count = 0;
      let metaCount = 0;

      for (const url of locs) {
        const path = url.replace(BASE, '');
        if (!path || path === '/') continue;

        const dir = join(distDir, path);
        mkdirSync(dir, { recursive: true });

        const meta = pageMeta[path];
        if (meta) {
          writeFileSync(join(dir, 'index.html'), injectMeta(indexHtml, meta));
          metaCount++;
        } else {
          writeFileSync(join(dir, 'index.html'), indexHtml);
        }
        count++;
      }

      // Also inject meta for homepage
      const homeMeta = pageMeta['/'];
      if (homeMeta) {
        writeFileSync(indexPath, injectMeta(indexHtml, homeMeta));
      }

      console.log(`generate-static-routes: created ${count} static route HTML files (${metaCount} with unique SEO meta).`);
    },
  };
}

export default defineConfig({
  plugins: [react(), generateStaticRoutes()],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
