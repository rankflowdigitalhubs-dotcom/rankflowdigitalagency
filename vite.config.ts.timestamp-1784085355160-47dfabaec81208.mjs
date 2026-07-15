// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///home/project/vite.config.ts";
var __dirname = dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var BASE = "https://rankflowagency.online";
var pageMeta = {
  "/": {
    title: "Rank Flow Digital \u2014 Premium SEO & Digital Marketing Agency",
    description: "Rank Flow Digital is a premium SEO agency helping businesses rank higher and grow revenue with white-hat SEO, content writing, and web design. Get a free audit.",
    h1: "Rank Flow Digital \u2014 Premium SEO & Digital Marketing Agency",
    path: "/"
  },
  "/about/": {
    title: "About Rank Flow Digital \u2014 Our SEO Agency Story",
    description: "Learn about Rank Flow Digital, a data-driven SEO agency helping businesses rank higher, convert better, and grow revenue with proven white-hat strategies.",
    h1: "About Rank Flow Digital",
    path: "/about/"
  },
  "/services/": {
    title: "SEO Services \u2014 Full-Stack Digital Marketing | Rank Flow Digital",
    description: "Explore our full range of SEO services: local SEO, technical SEO, content writing, link building, web design, and more. Get a free audit today.",
    h1: "Our SEO Services",
    path: "/services/"
  },
  "/portfolio/": {
    title: "Portfolio \u2014 SEO Case Studies & Results | Rank Flow Digital",
    description: "See our portfolio of SEO success stories. Real campaigns, real rankings, real revenue growth for businesses across industries.",
    h1: "Our Portfolio",
    path: "/portfolio/"
  },
  "/case-studies/": {
    title: "Case Studies \u2014 Proven SEO Results | Rank Flow Digital",
    description: "Detailed SEO case studies showing how we helped businesses rank higher, increase traffic, and grow revenue with data-driven strategies.",
    h1: "SEO Case Studies",
    path: "/case-studies/"
  },
  "/pricing/": {
    title: "Pricing \u2014 Transparent SEO Packages | Rank Flow Digital",
    description: "Clear, upfront SEO pricing packages. Choose the plan that fits your business goals and budget. No hidden fees, no long-term contracts.",
    h1: "SEO Pricing Plans",
    path: "/pricing/"
  },
  "/blog/": {
    title: "SEO Blog \u2014 Guides, Tips & Strategies | Rank Flow Digital",
    description: "Actionable SEO guides, tips, and strategies from our team of experts. Learn how to rank higher, get more traffic, and grow your business.",
    h1: "Rank Flow Digital Blog",
    path: "/blog/"
  },
  "/contact/": {
    title: "Contact Us \u2014 Get Your Free SEO Audit | Rank Flow Digital",
    description: "Ready to grow your organic traffic? Contact Rank Flow Digital for a free SEO audit and consultation. Let us show you the path to higher rankings.",
    h1: "Contact Rank Flow Digital",
    path: "/contact/"
  },
  "/sitemap/": {
    title: "Sitemap \u2014 All Pages | Rank Flow Digital",
    description: "Browse all pages on the Rank Flow Digital website, including services, blog posts, and resources.",
    h1: "Sitemap",
    path: "/sitemap/"
  },
  "/privacy-policy/": {
    title: "Privacy Policy | Rank Flow Digital",
    description: "Read our privacy policy to understand how Rank Flow Digital collects, uses, and protects your data.",
    h1: "Privacy Policy",
    path: "/privacy-policy/"
  },
  "/terms/": {
    title: "Terms & Conditions | Rank Flow Digital",
    description: "Read the terms and conditions for using Rank Flow Digital services and website.",
    h1: "Terms & Conditions",
    path: "/terms/"
  },
  // Services
  "/seo/": {
    title: "Search Engine Optimization Services | Rank Flow Digital",
    description: "Rank higher and convert better with our proven SEO services. White-hat strategies that drive organic traffic and revenue growth.",
    h1: "Search Engine Optimization",
    path: "/seo/"
  },
  "/local-seo/": {
    title: "Local SEO Services \u2014 Rank in Your Area | Rank Flow Digital",
    description: "Be the first name they find nearby. Our local SEO services help you dominate the map pack and attract local customers.",
    h1: "Local SEO Services",
    path: "/local-seo/"
  },
  "/technical-seo/": {
    title: "Technical SEO Services \u2014 Fix Your Site Foundation | Rank Flow Digital",
    description: "A site Google can crawl, render, and love. Our technical SEO services fix crawlability, speed, and indexation issues.",
    h1: "Technical SEO Services",
    path: "/technical-seo/"
  },
  "/guest-posting/": {
    title: "Guest Posting on High DA/DR Sites | Rank Flow Digital",
    description: "Links that move rankings - not spam. Get high-authority guest posts on real sites with genuine traffic.",
    h1: "Guest Posting on High DA/DR Sites",
    path: "/guest-posting/"
  },
  "/content-writing/": {
    title: "SEO Content Writing Services | Rank Flow Digital",
    description: "Words that work for algorithms and humans. Our content writing service produces SEO-driven content that ranks and converts.",
    h1: "Content Writing Services",
    path: "/content-writing/"
  },
  "/logo-design/": {
    title: "Logo Design Services \u2014 A Mark Worth Remembering | Rank Flow Digital",
    description: "A mark worth remembering. Our logo design service creates distinctive, professional logos that build brand recognition.",
    h1: "Logo Design Services",
    path: "/logo-design/"
  },
  "/website-design/": {
    title: "Website Design & Development Services | Rank Flow Digital",
    description: "Design that earns attention. Code that earns revenue. Our web design and development services create fast, SEO-friendly websites.",
    h1: "Website Design & Development",
    path: "/website-design/"
  },
  "/monthly-seo-management/": {
    title: "Monthly SEO Management Services | Rank Flow Digital",
    description: "SEO that compounds month over month. Our monthly SEO management service handles everything for you with transparent reporting.",
    h1: "Monthly SEO Management",
    path: "/monthly-seo-management/"
  },
  "/link-building/": {
    title: "Link Building Services \u2014 Safe, Manual Outreach | Rank Flow Digital",
    description: "Safe, manual outreach that builds lasting authority. Our link building services get high-quality backlinks from real sites.",
    h1: "Link Building Services",
    path: "/link-building/"
  },
  "/shopify-seo/": {
    title: "Shopify SEO Services \u2014 Drive More Sales | Rank Flow Digital",
    description: "Drive more qualified shoppers to your Shopify store. Our Shopify SEO services optimize your store for search and conversions.",
    h1: "Shopify SEO Services",
    path: "/shopify-seo/"
  },
  "/seo-audit/": {
    title: "SEO Audit Services \u2014 Find What Holds You Back | Rank Flow Digital",
    description: "Find exactly what is stopping your site from ranking. Our comprehensive SEO audit identifies issues and gives you a clear roadmap.",
    h1: "SEO Audit Services",
    path: "/seo-audit/"
  },
  "/google-business-profile/": {
    title: "Google Business Profile Optimization | Rank Flow Digital",
    description: "Dominate local search and Google Maps results. Our Google Business Profile optimization service gets you more visibility and calls.",
    h1: "Google Business Profile Optimization",
    path: "/google-business-profile/"
  },
  "/ecommerce-seo/": {
    title: "E-commerce SEO Services \u2014 Increase Online Revenue | Rank Flow Digital",
    description: "Drive more qualified shoppers and increase online revenue. Our e-commerce SEO services optimize your store for search and sales.",
    h1: "E-commerce SEO Services",
    path: "/ecommerce-seo/"
  },
  "/on-page-seo/": {
    title: "On-Page SEO Services \u2014 Optimize Every Element | Rank Flow Digital",
    description: "Optimize every element on every page. Our on-page SEO services improve your content, meta tags, and internal linking.",
    h1: "On-Page SEO Services",
    path: "/on-page-seo/"
  },
  "/off-page-seo/": {
    title: "Off-Page SEO Services \u2014 Build Authority | Rank Flow Digital",
    description: "Build authority that Google trusts. Our off-page SEO services include link building, brand mentions, and digital PR.",
    h1: "Off-Page SEO Services",
    path: "/off-page-seo/"
  },
  "/white-label-seo/": {
    title: "White Label SEO Services \u2014 Scale Your Agency | Rank Flow Digital",
    description: "Scale your agency with SEO done for you. Our white label SEO services let you offer SEO under your own brand.",
    h1: "White Label SEO Services",
    path: "/white-label-seo/"
  },
  "/international-seo/": {
    title: "International SEO Services \u2014 Reach Customers Worldwide | Rank Flow Digital",
    description: "Reach customers worldwide. Our international SEO services optimize your site for multiple countries and languages.",
    h1: "International SEO Services",
    path: "/international-seo/"
  },
  "/cro-services/": {
    title: "Conversion Rate Optimization Services | Rank Flow Digital",
    description: "Turn more visitors into customers. Our CRO services optimize your funnels, forms, and calls-to-action for maximum conversions.",
    h1: "Conversion Rate Optimization Services",
    path: "/cro-services/"
  },
  "/website-maintenance-seo/": {
    title: "Website Maintenance & SEO Services | Rank Flow Digital",
    description: "Keep your website fast, secure, and ranking. Our website maintenance and SEO service handles updates, monitoring, and optimization.",
    h1: "Website Maintenance & SEO Services",
    path: "/website-maintenance-seo/"
  },
  "/enterprise-seo/": {
    title: "Enterprise SEO Services \u2014 SEO Built for Scale | Rank Flow Digital",
    description: "SEO built for scale. Our enterprise SEO services handle large sites, multiple stakeholders, and complex technical challenges.",
    h1: "Enterprise SEO Services",
    path: "/enterprise-seo/"
  },
  // Blog posts
  "/blog/shopify-store-not-getting-sales/": {
    title: "Why Is My Shopify Store Not Getting Sales? 15 Proven Fixes",
    description: "A practical guide for Shopify store owners. Learn why your store is not getting sales and discover 15 proven fixes to increase conversions.",
    h1: "Why Is My Shopify Store Not Getting Sales?",
    path: "/blog/shopify-store-not-getting-sales/"
  },
  "/blog/roofers-get-more-leads-from-google/": {
    title: "How Roofers Can Get More Leads From Google (15 SEO Strategies)",
    description: "A practical SEO guide for roofing contractors. Learn 15 proven strategies to get more roofing leads from Google search and maps.",
    h1: "How Roofers Can Get More Leads From Google",
    path: "/blog/roofers-get-more-leads-from-google/"
  },
  "/blog/law-firm-not-showing-on-google/": {
    title: "Law Firm Not Showing on Google? 15 Proven SEO Fixes",
    description: "A practical SEO guide for law firms, attorneys, and solicitors. Learn why your firm is not showing on Google and how to fix it.",
    h1: "Law Firm Not Showing on Google?",
    path: "/blog/law-firm-not-showing-on-google/"
  },
  "/blog/plumbing-business-not-getting-calls/": {
    title: "Plumbing Business Not Getting Calls? 15 Proven SEO Fixes",
    description: "A practical guide for plumbers and plumbing companies. Learn why your phone is not ringing and how to get more calls with SEO.",
    h1: "Plumbing Business Not Getting Calls?",
    path: "/blog/plumbing-business-not-getting-calls/"
  },
  "/blog/real-estate-agents-seo-property-leads/": {
    title: "How Real Estate Agents Can Get More Property Leads from Google",
    description: "A practical SEO guide for real estate agents and realtors. Learn 15 proven strategies to generate more property leads from Google.",
    h1: "How Real Estate Agents Can Get More Property Leads",
    path: "/blog/real-estate-agents-seo-property-leads/"
  },
  "/blog/get-more-customers-without-paid-ads/": {
    title: "How to Get More Customers Without Paid Ads (15 Strategies)",
    description: "Stop wasting money on ads. These 15 proven organic strategies help small businesses get more customers without spending on ads.",
    h1: "How to Get More Customers Without Paid Ads",
    path: "/blog/get-more-customers-without-paid-ads/"
  },
  "/blog/local-seo-london-small-businesses/": {
    title: "Local SEO for Small Businesses in London: Complete Guide",
    description: "A practical, city-by-city Local SEO guide for London small businesses. Learn how to rank higher and attract local customers.",
    h1: "Local SEO for Small Businesses in London",
    path: "/blog/local-seo-london-small-businesses/"
  },
  "/blog/why-is-my-website-not-showing-on-google/": {
    title: "Why Is My Website Not Showing on Google? 12 Common Reasons",
    description: "Is your website not showing on Google? Discover the 12 most common reasons your site is not ranking and how to fix each one.",
    h1: "Why Is My Website Not Showing on Google?",
    path: "/blog/why-is-my-website-not-showing-on-google/"
  },
  "/blog/how-to-get-more-dental-patients-from-google/": {
    title: "How to Get More Dental Patients From Google Without Ads",
    description: "Struggling to get new dental patients from Google? Learn 12 proven dental SEO strategies to grow your practice without paid ads.",
    h1: "How to Get More Dental Patients From Google",
    path: "/blog/how-to-get-more-dental-patients-from-google/"
  },
  "/blog/why-is-my-restaurant-not-showing-up-on-google/": {
    title: "Why Is My Restaurant Not Showing Up on Google? 11 Fixes",
    description: "Is your restaurant invisible on Google Maps and Search? Learn 11 proven fixes to get your restaurant ranking and getting bookings.",
    h1: "Why Is My Restaurant Not Showing Up on Google?",
    path: "/blog/why-is-my-restaurant-not-showing-up-on-google/"
  },
  "/blog/how-to-get-sales-on-shopify-without-ads/": {
    title: "How to Get Sales on Shopify Without Ads (Proven Strategies)",
    description: "Getting Shopify traffic but no sales? Learn proven, ad-free strategies to increase conversions and revenue on your Shopify store.",
    h1: "How to Get Sales on Shopify Without Ads",
    path: "/blog/how-to-get-sales-on-shopify-without-ads/"
  },
  "/blog/ecommerce-store-not-performing/": {
    title: "4 Reasons Why Your eCommerce Store Is Not Performing",
    description: "Is your online store getting traffic but not making sales? Discover the 4 biggest reasons and how to fix them for more revenue.",
    h1: "Why Your eCommerce Store Is Not Performing",
    path: "/blog/ecommerce-store-not-performing/"
  },
  "/blog/why-competitors-ranking-higher-on-google/": {
    title: "Why Are My Competitors Ranking Higher on Google?",
    description: "Wondering why competitors outrank you on Google? Discover the real reasons behind their success and how to beat them.",
    h1: "Why Are My Competitors Ranking Higher on Google?",
    path: "/blog/why-competitors-ranking-higher-on-google/"
  },
  "/blog/local-seo-for-small-businesses/": {
    title: "Local SEO for Small Businesses: The Complete Guide",
    description: "Learn how Local SEO helps small businesses rank higher on Google, attract local customers, and grow revenue with proven strategies.",
    h1: "Local SEO for Small Businesses",
    path: "/blog/local-seo-for-small-businesses/"
  },
  "/blog/why-is-my-website-not-ranking-on-google/": {
    title: "Why Is My Website Not Ranking on Google? 12 Common SEO Mistakes",
    description: "Is your website not ranking on Google? Discover the 12 most common SEO mistakes holding your site back and how to fix each one.",
    h1: "Why Is My Website Not Ranking on Google?",
    path: "/blog/why-is-my-website-not-ranking-on-google/"
  },
  "/blog/seo-strategy-that-actually-works/": {
    title: "The SEO Strategy That Actually Works in 2026: Complete Blueprint",
    description: "Most SEO strategies are lists of tactics. This is a complete, repeatable blueprint for driving organic growth in 2026.",
    h1: "The SEO Strategy That Actually Works",
    path: "/blog/seo-strategy-that-actually-works/"
  },
  "/blog/local-seo-guide-2026/": {
    title: "The Complete Local SEO Guide for 2026",
    description: "Everything you need to dominate the map pack, from Google Business Profile to citations, reviews, and local content.",
    h1: "The Complete Local SEO Guide for 2026",
    path: "/blog/local-seo-guide-2026/"
  },
  "/blog/core-web-vitals/": {
    title: "Core Web Vitals: The 2026 Technical SEO Checklist",
    description: "LCP, INP, and CLS explained - with the exact fixes that move the needle on rankings and user experience.",
    h1: "Core Web Vitals: The 2026 Technical SEO Checklist",
    path: "/blog/core-web-vitals/"
  },
  "/blog/link-building-white-hat/": {
    title: "White-Hat Link Building That Actually Works",
    description: "How we build authority backlinks on real sites without risking a single penalty. Safe, manual outreach strategies.",
    h1: "White-Hat Link Building That Actually Works",
    path: "/blog/link-building-white-hat/"
  },
  "/blog/saas-seo-playbook/": {
    title: "The SaaS SEO Playbook: From Trial to Revenue",
    description: "A repeatable framework for turning organic search into a compounding SaaS growth channel.",
    h1: "The SaaS SEO Playbook",
    path: "/blog/saas-seo-playbook/"
  },
  "/blog/content-that-converts/": {
    title: "Writing Content That Ranks AND Converts",
    description: "The balance between SEO optimization and persuasion - with templates you can use to create content that ranks and sells.",
    h1: "Writing Content That Ranks AND Converts",
    path: "/blog/content-that-converts/"
  },
  "/blog/ecommerce-category-pages/": {
    title: "How to Rank E-commerce Category Pages",
    description: "Category pages are your biggest SEO asset. Learn how to optimize them for search rankings and conversions.",
    h1: "How to Rank E-commerce Category Pages",
    path: "/blog/ecommerce-category-pages/"
  },
  "/blog/hvac-business-not-showing-on-google/": {
    title: "Why Is Your HVAC Business Not Showing on Google? 12 Fixes",
    description: "Is your HVAC business invisible on Google Search and Maps? Learn why and discover proven fixes to get more HVAC leads.",
    h1: "Why Is Your HVAC Business Not Showing on Google?",
    path: "/blog/hvac-business-not-showing-on-google/"
  },
  "/blog/electrical-business-not-showing-on-google/": {
    title: "Why Is Your Electrical Business Not Showing on Google? 12 Fixes",
    description: "Is your electrical business invisible on Google Search and Maps? Learn why and discover proven fixes to get more electrical leads.",
    h1: "Why Is Your Electrical Business Not Showing on Google?",
    path: "/blog/electrical-business-not-showing-on-google/"
  },
  "/blog/electricians-get-more-local-customers-without-ads/": {
    title: "How Electricians Can Get More Local Customers Without Ads",
    description: "Stop wasting money on ads. Learn 12 proven ways electricians can generate more local customers with SEO and organic strategies.",
    h1: "How Electricians Can Get More Local Customers Without Ads",
    path: "/blog/electricians-get-more-local-customers-without-ads/"
  },
  "/blog/local-seo-for-electricians-complete-guide/": {
    title: "Local SEO for Electricians: The Complete Guide",
    description: "The complete guide to Local SEO for electricians. Learn how to rank higher on Google, get more local customers, and grow your business.",
    h1: "Local SEO for Electricians: The Complete Guide",
    path: "/blog/local-seo-for-electricians-complete-guide/"
  },
  "/blog/rank-electrical-business-on-google-maps/": {
    title: "How to Rank Your Electrical Business on Google Maps",
    description: "Learn how to rank your electrical business on Google Maps with 12 proven strategies for more visibility and calls.",
    h1: "How to Rank Your Electrical Business on Google Maps",
    path: "/blog/rank-electrical-business-on-google-maps/"
  },
  "/blog/best-seo-tips-for-electricians/": {
    title: "Best SEO Tips for Electricians: 15 Proven Strategies to Get More Local Customers",
    description: "The complete guide to SEO for electricians. Learn 15 proven strategies to improve Google rankings, attract local customers, and grow your electrical business.",
    h1: "Best SEO Tips for Electricians: 15 Proven Strategies to Get More Local Customers",
    path: "/blog/best-seo-tips-for-electricians/"
  },
  "/blog/how-to-get-emergency-electrical-leads-online/": {
    title: "How to Get Emergency Electrical Leads Online (8 Proven Strategies That Work)",
    description: "Learn how to get emergency electrical leads online with 8 proven strategies. Optimize your Google Business Profile, target urgent keywords, and turn local searches into service calls.",
    h1: "How to Get Emergency Electrical Leads Online (8 Proven Strategies That Work)",
    path: "/blog/how-to-get-emergency-electrical-leads-online/"
  },
  "/blog/local-seo-for-real-estate-agents/": {
    title: "Local SEO for Real Estate Agents: 10 Proven Strategies to Get More Buyer & Seller Leads",
    description: "A complete guide to local SEO for real estate agents. Learn 10 proven strategies to improve Google visibility, rank higher on Google Maps, and generate more buyer and seller leads.",
    h1: "Local SEO for Real Estate Agents: 10 Proven Strategies to Get More Buyer & Seller Leads",
    path: "/blog/local-seo-for-real-estate-agents/"
  },
  "/blog/how-to-get-more-property-leads-without-paid-ads/": {
    title: "How to Get More Property Leads Without Paid Ads (10 Proven SEO Strategies)",
    description: "Learn how to get more property leads without paid ads. Discover 10 proven SEO strategies to attract buyer and seller leads organically through Google, Google Maps, and local search.",
    h1: "How to Get More Property Leads Without Paid Ads (10 Proven SEO Strategies)",
    path: "/blog/how-to-get-more-property-leads-without-paid-ads/"
  },
  "/blog/google-business-profile-for-real-estate-agents/": {
    title: "Google Business Profile for Real Estate Agents: 10 Ways to Optimize & Get More Leads",
    description: "A complete guide to Google Business Profile for real estate agents. Learn 10 ways to optimize your profile, rank higher on Google Maps, and generate more buyer and seller leads.",
    h1: "Google Business Profile for Real Estate Agents: 10 Ways to Optimize & Get More Leads",
    path: "/blog/google-business-profile-for-real-estate-agents/"
  }
};
function injectMeta(html, meta) {
  let result = html;
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${BASE}${meta.path}"`
  );
  result = result.replace(
    /<link rel="alternate" hreflang="en" href="[^"]*"/,
    `<link rel="alternate" hreflang="en" href="${BASE}${meta.path}"`
  );
  result = result.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*"/,
    `<link rel="alternate" hreflang="x-default" href="${BASE}${meta.path}"`
  );
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
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`
  );
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`
  );
  const h1Html = `<h1 style="position:absolute;left:-9999px;">${meta.h1}</h1><noscript><p>${meta.description}</p></noscript>`;
  result = result.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${h1Html}</div>`
  );
  return result;
}
function generateStaticRoutes() {
  return {
    name: "generate-static-routes",
    apply: "build",
    closeBundle() {
      const distDir = join(__dirname, "dist");
      const sitemapPath = join(distDir, "sitemap.xml");
      const indexPath = join(distDir, "index.html");
      if (!existsSync(sitemapPath) || !existsSync(indexPath)) {
        console.warn("generate-static-routes: sitemap.xml or index.html not found, skipping.");
        return;
      }
      const indexHtml = readFileSync(indexPath, "utf-8");
      const sitemap = readFileSync(sitemapPath, "utf-8");
      const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      let count = 0;
      let metaCount = 0;
      for (const url of locs) {
        const path = url.replace(BASE, "");
        if (!path || path === "/") continue;
        const dir = join(distDir, path);
        mkdirSync(dir, { recursive: true });
        const meta = pageMeta[path];
        if (meta) {
          writeFileSync(join(dir, "index.html"), injectMeta(indexHtml, meta));
          metaCount++;
        } else {
          writeFileSync(join(dir, "index.html"), indexHtml);
        }
        count++;
      }
      const homeMeta = pageMeta["/"];
      if (homeMeta) {
        writeFileSync(indexPath, injectMeta(indexHtml, homeMeta));
      }
      console.log(`generate-static-routes: created ${count} static route HTML files (${metaCount} with unique SEO meta).`);
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), generateStaticRoutes()],
  base: "/",
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jLCBta2RpclN5bmMsIGV4aXN0c1N5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luLCBkaXJuYW1lIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcblxuY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpO1xuXG50eXBlIFBhZ2VNZXRhID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBoMTogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG59O1xuXG5jb25zdCBCQVNFID0gJ2h0dHBzOi8vcmFua2Zsb3dhZ2VuY3kub25saW5lJztcblxuY29uc3QgcGFnZU1ldGE6IFJlY29yZDxzdHJpbmcsIFBhZ2VNZXRhPiA9IHtcbiAgJy8nOiB7XG4gICAgdGl0bGU6ICdSYW5rIEZsb3cgRGlnaXRhbCBcdTIwMTQgUHJlbWl1bSBTRU8gJiBEaWdpdGFsIE1hcmtldGluZyBBZ2VuY3knLFxuICAgIGRlc2NyaXB0aW9uOiAnUmFuayBGbG93IERpZ2l0YWwgaXMgYSBwcmVtaXVtIFNFTyBhZ2VuY3kgaGVscGluZyBidXNpbmVzc2VzIHJhbmsgaGlnaGVyIGFuZCBncm93IHJldmVudWUgd2l0aCB3aGl0ZS1oYXQgU0VPLCBjb250ZW50IHdyaXRpbmcsIGFuZCB3ZWIgZGVzaWduLiBHZXQgYSBmcmVlIGF1ZGl0LicsXG4gICAgaDE6ICdSYW5rIEZsb3cgRGlnaXRhbCBcdTIwMTQgUHJlbWl1bSBTRU8gJiBEaWdpdGFsIE1hcmtldGluZyBBZ2VuY3knLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbiAgJy9hYm91dC8nOiB7XG4gICAgdGl0bGU6ICdBYm91dCBSYW5rIEZsb3cgRGlnaXRhbCBcdTIwMTQgT3VyIFNFTyBBZ2VuY3kgU3RvcnknLFxuICAgIGRlc2NyaXB0aW9uOiAnTGVhcm4gYWJvdXQgUmFuayBGbG93IERpZ2l0YWwsIGEgZGF0YS1kcml2ZW4gU0VPIGFnZW5jeSBoZWxwaW5nIGJ1c2luZXNzZXMgcmFuayBoaWdoZXIsIGNvbnZlcnQgYmV0dGVyLCBhbmQgZ3JvdyByZXZlbnVlIHdpdGggcHJvdmVuIHdoaXRlLWhhdCBzdHJhdGVnaWVzLicsXG4gICAgaDE6ICdBYm91dCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgcGF0aDogJy9hYm91dC8nLFxuICB9LFxuICAnL3NlcnZpY2VzLyc6IHtcbiAgICB0aXRsZTogJ1NFTyBTZXJ2aWNlcyBcdTIwMTQgRnVsbC1TdGFjayBEaWdpdGFsIE1hcmtldGluZyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ0V4cGxvcmUgb3VyIGZ1bGwgcmFuZ2Ugb2YgU0VPIHNlcnZpY2VzOiBsb2NhbCBTRU8sIHRlY2huaWNhbCBTRU8sIGNvbnRlbnQgd3JpdGluZywgbGluayBidWlsZGluZywgd2ViIGRlc2lnbiwgYW5kIG1vcmUuIEdldCBhIGZyZWUgYXVkaXQgdG9kYXkuJyxcbiAgICBoMTogJ091ciBTRU8gU2VydmljZXMnLFxuICAgIHBhdGg6ICcvc2VydmljZXMvJyxcbiAgfSxcbiAgJy9wb3J0Zm9saW8vJzoge1xuICAgIHRpdGxlOiAnUG9ydGZvbGlvIFx1MjAxNCBTRU8gQ2FzZSBTdHVkaWVzICYgUmVzdWx0cyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlZSBvdXIgcG9ydGZvbGlvIG9mIFNFTyBzdWNjZXNzIHN0b3JpZXMuIFJlYWwgY2FtcGFpZ25zLCByZWFsIHJhbmtpbmdzLCByZWFsIHJldmVudWUgZ3Jvd3RoIGZvciBidXNpbmVzc2VzIGFjcm9zcyBpbmR1c3RyaWVzLicsXG4gICAgaDE6ICdPdXIgUG9ydGZvbGlvJyxcbiAgICBwYXRoOiAnL3BvcnRmb2xpby8nLFxuICB9LFxuICAnL2Nhc2Utc3R1ZGllcy8nOiB7XG4gICAgdGl0bGU6ICdDYXNlIFN0dWRpZXMgXHUyMDE0IFByb3ZlbiBTRU8gUmVzdWx0cyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ0RldGFpbGVkIFNFTyBjYXNlIHN0dWRpZXMgc2hvd2luZyBob3cgd2UgaGVscGVkIGJ1c2luZXNzZXMgcmFuayBoaWdoZXIsIGluY3JlYXNlIHRyYWZmaWMsIGFuZCBncm93IHJldmVudWUgd2l0aCBkYXRhLWRyaXZlbiBzdHJhdGVnaWVzLicsXG4gICAgaDE6ICdTRU8gQ2FzZSBTdHVkaWVzJyxcbiAgICBwYXRoOiAnL2Nhc2Utc3R1ZGllcy8nLFxuICB9LFxuICAnL3ByaWNpbmcvJzoge1xuICAgIHRpdGxlOiAnUHJpY2luZyBcdTIwMTQgVHJhbnNwYXJlbnQgU0VPIFBhY2thZ2VzIHwgUmFuayBGbG93IERpZ2l0YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2xlYXIsIHVwZnJvbnQgU0VPIHByaWNpbmcgcGFja2FnZXMuIENob29zZSB0aGUgcGxhbiB0aGF0IGZpdHMgeW91ciBidXNpbmVzcyBnb2FscyBhbmQgYnVkZ2V0LiBObyBoaWRkZW4gZmVlcywgbm8gbG9uZy10ZXJtIGNvbnRyYWN0cy4nLFxuICAgIGgxOiAnU0VPIFByaWNpbmcgUGxhbnMnLFxuICAgIHBhdGg6ICcvcHJpY2luZy8nLFxuICB9LFxuICAnL2Jsb2cvJzoge1xuICAgIHRpdGxlOiAnU0VPIEJsb2cgXHUyMDE0IEd1aWRlcywgVGlwcyAmIFN0cmF0ZWdpZXMgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdBY3Rpb25hYmxlIFNFTyBndWlkZXMsIHRpcHMsIGFuZCBzdHJhdGVnaWVzIGZyb20gb3VyIHRlYW0gb2YgZXhwZXJ0cy4gTGVhcm4gaG93IHRvIHJhbmsgaGlnaGVyLCBnZXQgbW9yZSB0cmFmZmljLCBhbmQgZ3JvdyB5b3VyIGJ1c2luZXNzLicsXG4gICAgaDE6ICdSYW5rIEZsb3cgRGlnaXRhbCBCbG9nJyxcbiAgICBwYXRoOiAnL2Jsb2cvJyxcbiAgfSxcbiAgJy9jb250YWN0Lyc6IHtcbiAgICB0aXRsZTogJ0NvbnRhY3QgVXMgXHUyMDE0IEdldCBZb3VyIEZyZWUgU0VPIEF1ZGl0IHwgUmFuayBGbG93IERpZ2l0YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhZHkgdG8gZ3JvdyB5b3VyIG9yZ2FuaWMgdHJhZmZpYz8gQ29udGFjdCBSYW5rIEZsb3cgRGlnaXRhbCBmb3IgYSBmcmVlIFNFTyBhdWRpdCBhbmQgY29uc3VsdGF0aW9uLiBMZXQgdXMgc2hvdyB5b3UgdGhlIHBhdGggdG8gaGlnaGVyIHJhbmtpbmdzLicsXG4gICAgaDE6ICdDb250YWN0IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBwYXRoOiAnL2NvbnRhY3QvJyxcbiAgfSxcbiAgJy9zaXRlbWFwLyc6IHtcbiAgICB0aXRsZTogJ1NpdGVtYXAgXHUyMDE0IEFsbCBQYWdlcyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Jyb3dzZSBhbGwgcGFnZXMgb24gdGhlIFJhbmsgRmxvdyBEaWdpdGFsIHdlYnNpdGUsIGluY2x1ZGluZyBzZXJ2aWNlcywgYmxvZyBwb3N0cywgYW5kIHJlc291cmNlcy4nLFxuICAgIGgxOiAnU2l0ZW1hcCcsXG4gICAgcGF0aDogJy9zaXRlbWFwLycsXG4gIH0sXG4gICcvcHJpdmFjeS1wb2xpY3kvJzoge1xuICAgIHRpdGxlOiAnUHJpdmFjeSBQb2xpY3kgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZWFkIG91ciBwcml2YWN5IHBvbGljeSB0byB1bmRlcnN0YW5kIGhvdyBSYW5rIEZsb3cgRGlnaXRhbCBjb2xsZWN0cywgdXNlcywgYW5kIHByb3RlY3RzIHlvdXIgZGF0YS4nLFxuICAgIGgxOiAnUHJpdmFjeSBQb2xpY3knLFxuICAgIHBhdGg6ICcvcHJpdmFjeS1wb2xpY3kvJyxcbiAgfSxcbiAgJy90ZXJtcy8nOiB7XG4gICAgdGl0bGU6ICdUZXJtcyAmIENvbmRpdGlvbnMgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdSZWFkIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBmb3IgdXNpbmcgUmFuayBGbG93IERpZ2l0YWwgc2VydmljZXMgYW5kIHdlYnNpdGUuJyxcbiAgICBoMTogJ1Rlcm1zICYgQ29uZGl0aW9ucycsXG4gICAgcGF0aDogJy90ZXJtcy8nLFxuICB9LFxuICAvLyBTZXJ2aWNlc1xuICAnL3Nlby8nOiB7XG4gICAgdGl0bGU6ICdTZWFyY2ggRW5naW5lIE9wdGltaXphdGlvbiBTZXJ2aWNlcyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JhbmsgaGlnaGVyIGFuZCBjb252ZXJ0IGJldHRlciB3aXRoIG91ciBwcm92ZW4gU0VPIHNlcnZpY2VzLiBXaGl0ZS1oYXQgc3RyYXRlZ2llcyB0aGF0IGRyaXZlIG9yZ2FuaWMgdHJhZmZpYyBhbmQgcmV2ZW51ZSBncm93dGguJyxcbiAgICBoMTogJ1NlYXJjaCBFbmdpbmUgT3B0aW1pemF0aW9uJyxcbiAgICBwYXRoOiAnL3Nlby8nLFxuICB9LFxuICAnL2xvY2FsLXNlby8nOiB7XG4gICAgdGl0bGU6ICdMb2NhbCBTRU8gU2VydmljZXMgXHUyMDE0IFJhbmsgaW4gWW91ciBBcmVhIHwgUmFuayBGbG93IERpZ2l0YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnQmUgdGhlIGZpcnN0IG5hbWUgdGhleSBmaW5kIG5lYXJieS4gT3VyIGxvY2FsIFNFTyBzZXJ2aWNlcyBoZWxwIHlvdSBkb21pbmF0ZSB0aGUgbWFwIHBhY2sgYW5kIGF0dHJhY3QgbG9jYWwgY3VzdG9tZXJzLicsXG4gICAgaDE6ICdMb2NhbCBTRU8gU2VydmljZXMnLFxuICAgIHBhdGg6ICcvbG9jYWwtc2VvLycsXG4gIH0sXG4gICcvdGVjaG5pY2FsLXNlby8nOiB7XG4gICAgdGl0bGU6ICdUZWNobmljYWwgU0VPIFNlcnZpY2VzIFx1MjAxNCBGaXggWW91ciBTaXRlIEZvdW5kYXRpb24gfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdBIHNpdGUgR29vZ2xlIGNhbiBjcmF3bCwgcmVuZGVyLCBhbmQgbG92ZS4gT3VyIHRlY2huaWNhbCBTRU8gc2VydmljZXMgZml4IGNyYXdsYWJpbGl0eSwgc3BlZWQsIGFuZCBpbmRleGF0aW9uIGlzc3Vlcy4nLFxuICAgIGgxOiAnVGVjaG5pY2FsIFNFTyBTZXJ2aWNlcycsXG4gICAgcGF0aDogJy90ZWNobmljYWwtc2VvLycsXG4gIH0sXG4gICcvZ3Vlc3QtcG9zdGluZy8nOiB7XG4gICAgdGl0bGU6ICdHdWVzdCBQb3N0aW5nIG9uIEhpZ2ggREEvRFIgU2l0ZXMgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdMaW5rcyB0aGF0IG1vdmUgcmFua2luZ3MgLSBub3Qgc3BhbS4gR2V0IGhpZ2gtYXV0aG9yaXR5IGd1ZXN0IHBvc3RzIG9uIHJlYWwgc2l0ZXMgd2l0aCBnZW51aW5lIHRyYWZmaWMuJyxcbiAgICBoMTogJ0d1ZXN0IFBvc3Rpbmcgb24gSGlnaCBEQS9EUiBTaXRlcycsXG4gICAgcGF0aDogJy9ndWVzdC1wb3N0aW5nLycsXG4gIH0sXG4gICcvY29udGVudC13cml0aW5nLyc6IHtcbiAgICB0aXRsZTogJ1NFTyBDb250ZW50IFdyaXRpbmcgU2VydmljZXMgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdXb3JkcyB0aGF0IHdvcmsgZm9yIGFsZ29yaXRobXMgYW5kIGh1bWFucy4gT3VyIGNvbnRlbnQgd3JpdGluZyBzZXJ2aWNlIHByb2R1Y2VzIFNFTy1kcml2ZW4gY29udGVudCB0aGF0IHJhbmtzIGFuZCBjb252ZXJ0cy4nLFxuICAgIGgxOiAnQ29udGVudCBXcml0aW5nIFNlcnZpY2VzJyxcbiAgICBwYXRoOiAnL2NvbnRlbnQtd3JpdGluZy8nLFxuICB9LFxuICAnL2xvZ28tZGVzaWduLyc6IHtcbiAgICB0aXRsZTogJ0xvZ28gRGVzaWduIFNlcnZpY2VzIFx1MjAxNCBBIE1hcmsgV29ydGggUmVtZW1iZXJpbmcgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdBIG1hcmsgd29ydGggcmVtZW1iZXJpbmcuIE91ciBsb2dvIGRlc2lnbiBzZXJ2aWNlIGNyZWF0ZXMgZGlzdGluY3RpdmUsIHByb2Zlc3Npb25hbCBsb2dvcyB0aGF0IGJ1aWxkIGJyYW5kIHJlY29nbml0aW9uLicsXG4gICAgaDE6ICdMb2dvIERlc2lnbiBTZXJ2aWNlcycsXG4gICAgcGF0aDogJy9sb2dvLWRlc2lnbi8nLFxuICB9LFxuICAnL3dlYnNpdGUtZGVzaWduLyc6IHtcbiAgICB0aXRsZTogJ1dlYnNpdGUgRGVzaWduICYgRGV2ZWxvcG1lbnQgU2VydmljZXMgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdEZXNpZ24gdGhhdCBlYXJucyBhdHRlbnRpb24uIENvZGUgdGhhdCBlYXJucyByZXZlbnVlLiBPdXIgd2ViIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgc2VydmljZXMgY3JlYXRlIGZhc3QsIFNFTy1mcmllbmRseSB3ZWJzaXRlcy4nLFxuICAgIGgxOiAnV2Vic2l0ZSBEZXNpZ24gJiBEZXZlbG9wbWVudCcsXG4gICAgcGF0aDogJy93ZWJzaXRlLWRlc2lnbi8nLFxuICB9LFxuICAnL21vbnRobHktc2VvLW1hbmFnZW1lbnQvJzoge1xuICAgIHRpdGxlOiAnTW9udGhseSBTRU8gTWFuYWdlbWVudCBTZXJ2aWNlcyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NFTyB0aGF0IGNvbXBvdW5kcyBtb250aCBvdmVyIG1vbnRoLiBPdXIgbW9udGhseSBTRU8gbWFuYWdlbWVudCBzZXJ2aWNlIGhhbmRsZXMgZXZlcnl0aGluZyBmb3IgeW91IHdpdGggdHJhbnNwYXJlbnQgcmVwb3J0aW5nLicsXG4gICAgaDE6ICdNb250aGx5IFNFTyBNYW5hZ2VtZW50JyxcbiAgICBwYXRoOiAnL21vbnRobHktc2VvLW1hbmFnZW1lbnQvJyxcbiAgfSxcbiAgJy9saW5rLWJ1aWxkaW5nLyc6IHtcbiAgICB0aXRsZTogJ0xpbmsgQnVpbGRpbmcgU2VydmljZXMgXHUyMDE0IFNhZmUsIE1hbnVhbCBPdXRyZWFjaCB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NhZmUsIG1hbnVhbCBvdXRyZWFjaCB0aGF0IGJ1aWxkcyBsYXN0aW5nIGF1dGhvcml0eS4gT3VyIGxpbmsgYnVpbGRpbmcgc2VydmljZXMgZ2V0IGhpZ2gtcXVhbGl0eSBiYWNrbGlua3MgZnJvbSByZWFsIHNpdGVzLicsXG4gICAgaDE6ICdMaW5rIEJ1aWxkaW5nIFNlcnZpY2VzJyxcbiAgICBwYXRoOiAnL2xpbmstYnVpbGRpbmcvJyxcbiAgfSxcbiAgJy9zaG9waWZ5LXNlby8nOiB7XG4gICAgdGl0bGU6ICdTaG9waWZ5IFNFTyBTZXJ2aWNlcyBcdTIwMTQgRHJpdmUgTW9yZSBTYWxlcyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ0RyaXZlIG1vcmUgcXVhbGlmaWVkIHNob3BwZXJzIHRvIHlvdXIgU2hvcGlmeSBzdG9yZS4gT3VyIFNob3BpZnkgU0VPIHNlcnZpY2VzIG9wdGltaXplIHlvdXIgc3RvcmUgZm9yIHNlYXJjaCBhbmQgY29udmVyc2lvbnMuJyxcbiAgICBoMTogJ1Nob3BpZnkgU0VPIFNlcnZpY2VzJyxcbiAgICBwYXRoOiAnL3Nob3BpZnktc2VvLycsXG4gIH0sXG4gICcvc2VvLWF1ZGl0Lyc6IHtcbiAgICB0aXRsZTogJ1NFTyBBdWRpdCBTZXJ2aWNlcyBcdTIwMTQgRmluZCBXaGF0IEhvbGRzIFlvdSBCYWNrIHwgUmFuayBGbG93IERpZ2l0YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnRmluZCBleGFjdGx5IHdoYXQgaXMgc3RvcHBpbmcgeW91ciBzaXRlIGZyb20gcmFua2luZy4gT3VyIGNvbXByZWhlbnNpdmUgU0VPIGF1ZGl0IGlkZW50aWZpZXMgaXNzdWVzIGFuZCBnaXZlcyB5b3UgYSBjbGVhciByb2FkbWFwLicsXG4gICAgaDE6ICdTRU8gQXVkaXQgU2VydmljZXMnLFxuICAgIHBhdGg6ICcvc2VvLWF1ZGl0LycsXG4gIH0sXG4gICcvZ29vZ2xlLWJ1c2luZXNzLXByb2ZpbGUvJzoge1xuICAgIHRpdGxlOiAnR29vZ2xlIEJ1c2luZXNzIFByb2ZpbGUgT3B0aW1pemF0aW9uIHwgUmFuayBGbG93IERpZ2l0YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnRG9taW5hdGUgbG9jYWwgc2VhcmNoIGFuZCBHb29nbGUgTWFwcyByZXN1bHRzLiBPdXIgR29vZ2xlIEJ1c2luZXNzIFByb2ZpbGUgb3B0aW1pemF0aW9uIHNlcnZpY2UgZ2V0cyB5b3UgbW9yZSB2aXNpYmlsaXR5IGFuZCBjYWxscy4nLFxuICAgIGgxOiAnR29vZ2xlIEJ1c2luZXNzIFByb2ZpbGUgT3B0aW1pemF0aW9uJyxcbiAgICBwYXRoOiAnL2dvb2dsZS1idXNpbmVzcy1wcm9maWxlLycsXG4gIH0sXG4gICcvZWNvbW1lcmNlLXNlby8nOiB7XG4gICAgdGl0bGU6ICdFLWNvbW1lcmNlIFNFTyBTZXJ2aWNlcyBcdTIwMTQgSW5jcmVhc2UgT25saW5lIFJldmVudWUgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdEcml2ZSBtb3JlIHF1YWxpZmllZCBzaG9wcGVycyBhbmQgaW5jcmVhc2Ugb25saW5lIHJldmVudWUuIE91ciBlLWNvbW1lcmNlIFNFTyBzZXJ2aWNlcyBvcHRpbWl6ZSB5b3VyIHN0b3JlIGZvciBzZWFyY2ggYW5kIHNhbGVzLicsXG4gICAgaDE6ICdFLWNvbW1lcmNlIFNFTyBTZXJ2aWNlcycsXG4gICAgcGF0aDogJy9lY29tbWVyY2Utc2VvLycsXG4gIH0sXG4gICcvb24tcGFnZS1zZW8vJzoge1xuICAgIHRpdGxlOiAnT24tUGFnZSBTRU8gU2VydmljZXMgXHUyMDE0IE9wdGltaXplIEV2ZXJ5IEVsZW1lbnQgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdPcHRpbWl6ZSBldmVyeSBlbGVtZW50IG9uIGV2ZXJ5IHBhZ2UuIE91ciBvbi1wYWdlIFNFTyBzZXJ2aWNlcyBpbXByb3ZlIHlvdXIgY29udGVudCwgbWV0YSB0YWdzLCBhbmQgaW50ZXJuYWwgbGlua2luZy4nLFxuICAgIGgxOiAnT24tUGFnZSBTRU8gU2VydmljZXMnLFxuICAgIHBhdGg6ICcvb24tcGFnZS1zZW8vJyxcbiAgfSxcbiAgJy9vZmYtcGFnZS1zZW8vJzoge1xuICAgIHRpdGxlOiAnT2ZmLVBhZ2UgU0VPIFNlcnZpY2VzIFx1MjAxNCBCdWlsZCBBdXRob3JpdHkgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdCdWlsZCBhdXRob3JpdHkgdGhhdCBHb29nbGUgdHJ1c3RzLiBPdXIgb2ZmLXBhZ2UgU0VPIHNlcnZpY2VzIGluY2x1ZGUgbGluayBidWlsZGluZywgYnJhbmQgbWVudGlvbnMsIGFuZCBkaWdpdGFsIFBSLicsXG4gICAgaDE6ICdPZmYtUGFnZSBTRU8gU2VydmljZXMnLFxuICAgIHBhdGg6ICcvb2ZmLXBhZ2Utc2VvLycsXG4gIH0sXG4gICcvd2hpdGUtbGFiZWwtc2VvLyc6IHtcbiAgICB0aXRsZTogJ1doaXRlIExhYmVsIFNFTyBTZXJ2aWNlcyBcdTIwMTQgU2NhbGUgWW91ciBBZ2VuY3kgfCBSYW5rIEZsb3cgRGlnaXRhbCcsXG4gICAgZGVzY3JpcHRpb246ICdTY2FsZSB5b3VyIGFnZW5jeSB3aXRoIFNFTyBkb25lIGZvciB5b3UuIE91ciB3aGl0ZSBsYWJlbCBTRU8gc2VydmljZXMgbGV0IHlvdSBvZmZlciBTRU8gdW5kZXIgeW91ciBvd24gYnJhbmQuJyxcbiAgICBoMTogJ1doaXRlIExhYmVsIFNFTyBTZXJ2aWNlcycsXG4gICAgcGF0aDogJy93aGl0ZS1sYWJlbC1zZW8vJyxcbiAgfSxcbiAgJy9pbnRlcm5hdGlvbmFsLXNlby8nOiB7XG4gICAgdGl0bGU6ICdJbnRlcm5hdGlvbmFsIFNFTyBTZXJ2aWNlcyBcdTIwMTQgUmVhY2ggQ3VzdG9tZXJzIFdvcmxkd2lkZSB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlYWNoIGN1c3RvbWVycyB3b3JsZHdpZGUuIE91ciBpbnRlcm5hdGlvbmFsIFNFTyBzZXJ2aWNlcyBvcHRpbWl6ZSB5b3VyIHNpdGUgZm9yIG11bHRpcGxlIGNvdW50cmllcyBhbmQgbGFuZ3VhZ2VzLicsXG4gICAgaDE6ICdJbnRlcm5hdGlvbmFsIFNFTyBTZXJ2aWNlcycsXG4gICAgcGF0aDogJy9pbnRlcm5hdGlvbmFsLXNlby8nLFxuICB9LFxuICAnL2Nyby1zZXJ2aWNlcy8nOiB7XG4gICAgdGl0bGU6ICdDb252ZXJzaW9uIFJhdGUgT3B0aW1pemF0aW9uIFNlcnZpY2VzIHwgUmFuayBGbG93IERpZ2l0YWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnVHVybiBtb3JlIHZpc2l0b3JzIGludG8gY3VzdG9tZXJzLiBPdXIgQ1JPIHNlcnZpY2VzIG9wdGltaXplIHlvdXIgZnVubmVscywgZm9ybXMsIGFuZCBjYWxscy10by1hY3Rpb24gZm9yIG1heGltdW0gY29udmVyc2lvbnMuJyxcbiAgICBoMTogJ0NvbnZlcnNpb24gUmF0ZSBPcHRpbWl6YXRpb24gU2VydmljZXMnLFxuICAgIHBhdGg6ICcvY3JvLXNlcnZpY2VzLycsXG4gIH0sXG4gICcvd2Vic2l0ZS1tYWludGVuYW5jZS1zZW8vJzoge1xuICAgIHRpdGxlOiAnV2Vic2l0ZSBNYWludGVuYW5jZSAmIFNFTyBTZXJ2aWNlcyB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ0tlZXAgeW91ciB3ZWJzaXRlIGZhc3QsIHNlY3VyZSwgYW5kIHJhbmtpbmcuIE91ciB3ZWJzaXRlIG1haW50ZW5hbmNlIGFuZCBTRU8gc2VydmljZSBoYW5kbGVzIHVwZGF0ZXMsIG1vbml0b3JpbmcsIGFuZCBvcHRpbWl6YXRpb24uJyxcbiAgICBoMTogJ1dlYnNpdGUgTWFpbnRlbmFuY2UgJiBTRU8gU2VydmljZXMnLFxuICAgIHBhdGg6ICcvd2Vic2l0ZS1tYWludGVuYW5jZS1zZW8vJyxcbiAgfSxcbiAgJy9lbnRlcnByaXNlLXNlby8nOiB7XG4gICAgdGl0bGU6ICdFbnRlcnByaXNlIFNFTyBTZXJ2aWNlcyBcdTIwMTQgU0VPIEJ1aWx0IGZvciBTY2FsZSB8IFJhbmsgRmxvdyBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NFTyBidWlsdCBmb3Igc2NhbGUuIE91ciBlbnRlcnByaXNlIFNFTyBzZXJ2aWNlcyBoYW5kbGUgbGFyZ2Ugc2l0ZXMsIG11bHRpcGxlIHN0YWtlaG9sZGVycywgYW5kIGNvbXBsZXggdGVjaG5pY2FsIGNoYWxsZW5nZXMuJyxcbiAgICBoMTogJ0VudGVycHJpc2UgU0VPIFNlcnZpY2VzJyxcbiAgICBwYXRoOiAnL2VudGVycHJpc2Utc2VvLycsXG4gIH0sXG4gIC8vIEJsb2cgcG9zdHNcbiAgJy9ibG9nL3Nob3BpZnktc3RvcmUtbm90LWdldHRpbmctc2FsZXMvJzoge1xuICAgIHRpdGxlOiAnV2h5IElzIE15IFNob3BpZnkgU3RvcmUgTm90IEdldHRpbmcgU2FsZXM/IDE1IFByb3ZlbiBGaXhlcycsXG4gICAgZGVzY3JpcHRpb246ICdBIHByYWN0aWNhbCBndWlkZSBmb3IgU2hvcGlmeSBzdG9yZSBvd25lcnMuIExlYXJuIHdoeSB5b3VyIHN0b3JlIGlzIG5vdCBnZXR0aW5nIHNhbGVzIGFuZCBkaXNjb3ZlciAxNSBwcm92ZW4gZml4ZXMgdG8gaW5jcmVhc2UgY29udmVyc2lvbnMuJyxcbiAgICBoMTogJ1doeSBJcyBNeSBTaG9waWZ5IFN0b3JlIE5vdCBHZXR0aW5nIFNhbGVzPycsXG4gICAgcGF0aDogJy9ibG9nL3Nob3BpZnktc3RvcmUtbm90LWdldHRpbmctc2FsZXMvJyxcbiAgfSxcbiAgJy9ibG9nL3Jvb2ZlcnMtZ2V0LW1vcmUtbGVhZHMtZnJvbS1nb29nbGUvJzoge1xuICAgIHRpdGxlOiAnSG93IFJvb2ZlcnMgQ2FuIEdldCBNb3JlIExlYWRzIEZyb20gR29vZ2xlICgxNSBTRU8gU3RyYXRlZ2llcyknLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBwcmFjdGljYWwgU0VPIGd1aWRlIGZvciByb29maW5nIGNvbnRyYWN0b3JzLiBMZWFybiAxNSBwcm92ZW4gc3RyYXRlZ2llcyB0byBnZXQgbW9yZSByb29maW5nIGxlYWRzIGZyb20gR29vZ2xlIHNlYXJjaCBhbmQgbWFwcy4nLFxuICAgIGgxOiAnSG93IFJvb2ZlcnMgQ2FuIEdldCBNb3JlIExlYWRzIEZyb20gR29vZ2xlJyxcbiAgICBwYXRoOiAnL2Jsb2cvcm9vZmVycy1nZXQtbW9yZS1sZWFkcy1mcm9tLWdvb2dsZS8nLFxuICB9LFxuICAnL2Jsb2cvbGF3LWZpcm0tbm90LXNob3dpbmctb24tZ29vZ2xlLyc6IHtcbiAgICB0aXRsZTogJ0xhdyBGaXJtIE5vdCBTaG93aW5nIG9uIEdvb2dsZT8gMTUgUHJvdmVuIFNFTyBGaXhlcycsXG4gICAgZGVzY3JpcHRpb246ICdBIHByYWN0aWNhbCBTRU8gZ3VpZGUgZm9yIGxhdyBmaXJtcywgYXR0b3JuZXlzLCBhbmQgc29saWNpdG9ycy4gTGVhcm4gd2h5IHlvdXIgZmlybSBpcyBub3Qgc2hvd2luZyBvbiBHb29nbGUgYW5kIGhvdyB0byBmaXggaXQuJyxcbiAgICBoMTogJ0xhdyBGaXJtIE5vdCBTaG93aW5nIG9uIEdvb2dsZT8nLFxuICAgIHBhdGg6ICcvYmxvZy9sYXctZmlybS1ub3Qtc2hvd2luZy1vbi1nb29nbGUvJyxcbiAgfSxcbiAgJy9ibG9nL3BsdW1iaW5nLWJ1c2luZXNzLW5vdC1nZXR0aW5nLWNhbGxzLyc6IHtcbiAgICB0aXRsZTogJ1BsdW1iaW5nIEJ1c2luZXNzIE5vdCBHZXR0aW5nIENhbGxzPyAxNSBQcm92ZW4gU0VPIEZpeGVzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgcHJhY3RpY2FsIGd1aWRlIGZvciBwbHVtYmVycyBhbmQgcGx1bWJpbmcgY29tcGFuaWVzLiBMZWFybiB3aHkgeW91ciBwaG9uZSBpcyBub3QgcmluZ2luZyBhbmQgaG93IHRvIGdldCBtb3JlIGNhbGxzIHdpdGggU0VPLicsXG4gICAgaDE6ICdQbHVtYmluZyBCdXNpbmVzcyBOb3QgR2V0dGluZyBDYWxscz8nLFxuICAgIHBhdGg6ICcvYmxvZy9wbHVtYmluZy1idXNpbmVzcy1ub3QtZ2V0dGluZy1jYWxscy8nLFxuICB9LFxuICAnL2Jsb2cvcmVhbC1lc3RhdGUtYWdlbnRzLXNlby1wcm9wZXJ0eS1sZWFkcy8nOiB7XG4gICAgdGl0bGU6ICdIb3cgUmVhbCBFc3RhdGUgQWdlbnRzIENhbiBHZXQgTW9yZSBQcm9wZXJ0eSBMZWFkcyBmcm9tIEdvb2dsZScsXG4gICAgZGVzY3JpcHRpb246ICdBIHByYWN0aWNhbCBTRU8gZ3VpZGUgZm9yIHJlYWwgZXN0YXRlIGFnZW50cyBhbmQgcmVhbHRvcnMuIExlYXJuIDE1IHByb3ZlbiBzdHJhdGVnaWVzIHRvIGdlbmVyYXRlIG1vcmUgcHJvcGVydHkgbGVhZHMgZnJvbSBHb29nbGUuJyxcbiAgICBoMTogJ0hvdyBSZWFsIEVzdGF0ZSBBZ2VudHMgQ2FuIEdldCBNb3JlIFByb3BlcnR5IExlYWRzJyxcbiAgICBwYXRoOiAnL2Jsb2cvcmVhbC1lc3RhdGUtYWdlbnRzLXNlby1wcm9wZXJ0eS1sZWFkcy8nLFxuICB9LFxuICAnL2Jsb2cvZ2V0LW1vcmUtY3VzdG9tZXJzLXdpdGhvdXQtcGFpZC1hZHMvJzoge1xuICAgIHRpdGxlOiAnSG93IHRvIEdldCBNb3JlIEN1c3RvbWVycyBXaXRob3V0IFBhaWQgQWRzICgxNSBTdHJhdGVnaWVzKScsXG4gICAgZGVzY3JpcHRpb246ICdTdG9wIHdhc3RpbmcgbW9uZXkgb24gYWRzLiBUaGVzZSAxNSBwcm92ZW4gb3JnYW5pYyBzdHJhdGVnaWVzIGhlbHAgc21hbGwgYnVzaW5lc3NlcyBnZXQgbW9yZSBjdXN0b21lcnMgd2l0aG91dCBzcGVuZGluZyBvbiBhZHMuJyxcbiAgICBoMTogJ0hvdyB0byBHZXQgTW9yZSBDdXN0b21lcnMgV2l0aG91dCBQYWlkIEFkcycsXG4gICAgcGF0aDogJy9ibG9nL2dldC1tb3JlLWN1c3RvbWVycy13aXRob3V0LXBhaWQtYWRzLycsXG4gIH0sXG4gICcvYmxvZy9sb2NhbC1zZW8tbG9uZG9uLXNtYWxsLWJ1c2luZXNzZXMvJzoge1xuICAgIHRpdGxlOiAnTG9jYWwgU0VPIGZvciBTbWFsbCBCdXNpbmVzc2VzIGluIExvbmRvbjogQ29tcGxldGUgR3VpZGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBwcmFjdGljYWwsIGNpdHktYnktY2l0eSBMb2NhbCBTRU8gZ3VpZGUgZm9yIExvbmRvbiBzbWFsbCBidXNpbmVzc2VzLiBMZWFybiBob3cgdG8gcmFuayBoaWdoZXIgYW5kIGF0dHJhY3QgbG9jYWwgY3VzdG9tZXJzLicsXG4gICAgaDE6ICdMb2NhbCBTRU8gZm9yIFNtYWxsIEJ1c2luZXNzZXMgaW4gTG9uZG9uJyxcbiAgICBwYXRoOiAnL2Jsb2cvbG9jYWwtc2VvLWxvbmRvbi1zbWFsbC1idXNpbmVzc2VzLycsXG4gIH0sXG4gICcvYmxvZy93aHktaXMtbXktd2Vic2l0ZS1ub3Qtc2hvd2luZy1vbi1nb29nbGUvJzoge1xuICAgIHRpdGxlOiAnV2h5IElzIE15IFdlYnNpdGUgTm90IFNob3dpbmcgb24gR29vZ2xlPyAxMiBDb21tb24gUmVhc29ucycsXG4gICAgZGVzY3JpcHRpb246ICdJcyB5b3VyIHdlYnNpdGUgbm90IHNob3dpbmcgb24gR29vZ2xlPyBEaXNjb3ZlciB0aGUgMTIgbW9zdCBjb21tb24gcmVhc29ucyB5b3VyIHNpdGUgaXMgbm90IHJhbmtpbmcgYW5kIGhvdyB0byBmaXggZWFjaCBvbmUuJyxcbiAgICBoMTogJ1doeSBJcyBNeSBXZWJzaXRlIE5vdCBTaG93aW5nIG9uIEdvb2dsZT8nLFxuICAgIHBhdGg6ICcvYmxvZy93aHktaXMtbXktd2Vic2l0ZS1ub3Qtc2hvd2luZy1vbi1nb29nbGUvJyxcbiAgfSxcbiAgJy9ibG9nL2hvdy10by1nZXQtbW9yZS1kZW50YWwtcGF0aWVudHMtZnJvbS1nb29nbGUvJzoge1xuICAgIHRpdGxlOiAnSG93IHRvIEdldCBNb3JlIERlbnRhbCBQYXRpZW50cyBGcm9tIEdvb2dsZSBXaXRob3V0IEFkcycsXG4gICAgZGVzY3JpcHRpb246ICdTdHJ1Z2dsaW5nIHRvIGdldCBuZXcgZGVudGFsIHBhdGllbnRzIGZyb20gR29vZ2xlPyBMZWFybiAxMiBwcm92ZW4gZGVudGFsIFNFTyBzdHJhdGVnaWVzIHRvIGdyb3cgeW91ciBwcmFjdGljZSB3aXRob3V0IHBhaWQgYWRzLicsXG4gICAgaDE6ICdIb3cgdG8gR2V0IE1vcmUgRGVudGFsIFBhdGllbnRzIEZyb20gR29vZ2xlJyxcbiAgICBwYXRoOiAnL2Jsb2cvaG93LXRvLWdldC1tb3JlLWRlbnRhbC1wYXRpZW50cy1mcm9tLWdvb2dsZS8nLFxuICB9LFxuICAnL2Jsb2cvd2h5LWlzLW15LXJlc3RhdXJhbnQtbm90LXNob3dpbmctdXAtb24tZ29vZ2xlLyc6IHtcbiAgICB0aXRsZTogJ1doeSBJcyBNeSBSZXN0YXVyYW50IE5vdCBTaG93aW5nIFVwIG9uIEdvb2dsZT8gMTEgRml4ZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnSXMgeW91ciByZXN0YXVyYW50IGludmlzaWJsZSBvbiBHb29nbGUgTWFwcyBhbmQgU2VhcmNoPyBMZWFybiAxMSBwcm92ZW4gZml4ZXMgdG8gZ2V0IHlvdXIgcmVzdGF1cmFudCByYW5raW5nIGFuZCBnZXR0aW5nIGJvb2tpbmdzLicsXG4gICAgaDE6ICdXaHkgSXMgTXkgUmVzdGF1cmFudCBOb3QgU2hvd2luZyBVcCBvbiBHb29nbGU/JyxcbiAgICBwYXRoOiAnL2Jsb2cvd2h5LWlzLW15LXJlc3RhdXJhbnQtbm90LXNob3dpbmctdXAtb24tZ29vZ2xlLycsXG4gIH0sXG4gICcvYmxvZy9ob3ctdG8tZ2V0LXNhbGVzLW9uLXNob3BpZnktd2l0aG91dC1hZHMvJzoge1xuICAgIHRpdGxlOiAnSG93IHRvIEdldCBTYWxlcyBvbiBTaG9waWZ5IFdpdGhvdXQgQWRzIChQcm92ZW4gU3RyYXRlZ2llcyknLFxuICAgIGRlc2NyaXB0aW9uOiAnR2V0dGluZyBTaG9waWZ5IHRyYWZmaWMgYnV0IG5vIHNhbGVzPyBMZWFybiBwcm92ZW4sIGFkLWZyZWUgc3RyYXRlZ2llcyB0byBpbmNyZWFzZSBjb252ZXJzaW9ucyBhbmQgcmV2ZW51ZSBvbiB5b3VyIFNob3BpZnkgc3RvcmUuJyxcbiAgICBoMTogJ0hvdyB0byBHZXQgU2FsZXMgb24gU2hvcGlmeSBXaXRob3V0IEFkcycsXG4gICAgcGF0aDogJy9ibG9nL2hvdy10by1nZXQtc2FsZXMtb24tc2hvcGlmeS13aXRob3V0LWFkcy8nLFxuICB9LFxuICAnL2Jsb2cvZWNvbW1lcmNlLXN0b3JlLW5vdC1wZXJmb3JtaW5nLyc6IHtcbiAgICB0aXRsZTogJzQgUmVhc29ucyBXaHkgWW91ciBlQ29tbWVyY2UgU3RvcmUgSXMgTm90IFBlcmZvcm1pbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnSXMgeW91ciBvbmxpbmUgc3RvcmUgZ2V0dGluZyB0cmFmZmljIGJ1dCBub3QgbWFraW5nIHNhbGVzPyBEaXNjb3ZlciB0aGUgNCBiaWdnZXN0IHJlYXNvbnMgYW5kIGhvdyB0byBmaXggdGhlbSBmb3IgbW9yZSByZXZlbnVlLicsXG4gICAgaDE6ICdXaHkgWW91ciBlQ29tbWVyY2UgU3RvcmUgSXMgTm90IFBlcmZvcm1pbmcnLFxuICAgIHBhdGg6ICcvYmxvZy9lY29tbWVyY2Utc3RvcmUtbm90LXBlcmZvcm1pbmcvJyxcbiAgfSxcbiAgJy9ibG9nL3doeS1jb21wZXRpdG9ycy1yYW5raW5nLWhpZ2hlci1vbi1nb29nbGUvJzoge1xuICAgIHRpdGxlOiAnV2h5IEFyZSBNeSBDb21wZXRpdG9ycyBSYW5raW5nIEhpZ2hlciBvbiBHb29nbGU/JyxcbiAgICBkZXNjcmlwdGlvbjogJ1dvbmRlcmluZyB3aHkgY29tcGV0aXRvcnMgb3V0cmFuayB5b3Ugb24gR29vZ2xlPyBEaXNjb3ZlciB0aGUgcmVhbCByZWFzb25zIGJlaGluZCB0aGVpciBzdWNjZXNzIGFuZCBob3cgdG8gYmVhdCB0aGVtLicsXG4gICAgaDE6ICdXaHkgQXJlIE15IENvbXBldGl0b3JzIFJhbmtpbmcgSGlnaGVyIG9uIEdvb2dsZT8nLFxuICAgIHBhdGg6ICcvYmxvZy93aHktY29tcGV0aXRvcnMtcmFua2luZy1oaWdoZXItb24tZ29vZ2xlLycsXG4gIH0sXG4gICcvYmxvZy9sb2NhbC1zZW8tZm9yLXNtYWxsLWJ1c2luZXNzZXMvJzoge1xuICAgIHRpdGxlOiAnTG9jYWwgU0VPIGZvciBTbWFsbCBCdXNpbmVzc2VzOiBUaGUgQ29tcGxldGUgR3VpZGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnTGVhcm4gaG93IExvY2FsIFNFTyBoZWxwcyBzbWFsbCBidXNpbmVzc2VzIHJhbmsgaGlnaGVyIG9uIEdvb2dsZSwgYXR0cmFjdCBsb2NhbCBjdXN0b21lcnMsIGFuZCBncm93IHJldmVudWUgd2l0aCBwcm92ZW4gc3RyYXRlZ2llcy4nLFxuICAgIGgxOiAnTG9jYWwgU0VPIGZvciBTbWFsbCBCdXNpbmVzc2VzJyxcbiAgICBwYXRoOiAnL2Jsb2cvbG9jYWwtc2VvLWZvci1zbWFsbC1idXNpbmVzc2VzLycsXG4gIH0sXG4gICcvYmxvZy93aHktaXMtbXktd2Vic2l0ZS1ub3QtcmFua2luZy1vbi1nb29nbGUvJzoge1xuICAgIHRpdGxlOiAnV2h5IElzIE15IFdlYnNpdGUgTm90IFJhbmtpbmcgb24gR29vZ2xlPyAxMiBDb21tb24gU0VPIE1pc3Rha2VzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0lzIHlvdXIgd2Vic2l0ZSBub3QgcmFua2luZyBvbiBHb29nbGU/IERpc2NvdmVyIHRoZSAxMiBtb3N0IGNvbW1vbiBTRU8gbWlzdGFrZXMgaG9sZGluZyB5b3VyIHNpdGUgYmFjayBhbmQgaG93IHRvIGZpeCBlYWNoIG9uZS4nLFxuICAgIGgxOiAnV2h5IElzIE15IFdlYnNpdGUgTm90IFJhbmtpbmcgb24gR29vZ2xlPycsXG4gICAgcGF0aDogJy9ibG9nL3doeS1pcy1teS13ZWJzaXRlLW5vdC1yYW5raW5nLW9uLWdvb2dsZS8nLFxuICB9LFxuICAnL2Jsb2cvc2VvLXN0cmF0ZWd5LXRoYXQtYWN0dWFsbHktd29ya3MvJzoge1xuICAgIHRpdGxlOiAnVGhlIFNFTyBTdHJhdGVneSBUaGF0IEFjdHVhbGx5IFdvcmtzIGluIDIwMjY6IENvbXBsZXRlIEJsdWVwcmludCcsXG4gICAgZGVzY3JpcHRpb246ICdNb3N0IFNFTyBzdHJhdGVnaWVzIGFyZSBsaXN0cyBvZiB0YWN0aWNzLiBUaGlzIGlzIGEgY29tcGxldGUsIHJlcGVhdGFibGUgYmx1ZXByaW50IGZvciBkcml2aW5nIG9yZ2FuaWMgZ3Jvd3RoIGluIDIwMjYuJyxcbiAgICBoMTogJ1RoZSBTRU8gU3RyYXRlZ3kgVGhhdCBBY3R1YWxseSBXb3JrcycsXG4gICAgcGF0aDogJy9ibG9nL3Nlby1zdHJhdGVneS10aGF0LWFjdHVhbGx5LXdvcmtzLycsXG4gIH0sXG4gICcvYmxvZy9sb2NhbC1zZW8tZ3VpZGUtMjAyNi8nOiB7XG4gICAgdGl0bGU6ICdUaGUgQ29tcGxldGUgTG9jYWwgU0VPIEd1aWRlIGZvciAyMDI2JyxcbiAgICBkZXNjcmlwdGlvbjogJ0V2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gZG9taW5hdGUgdGhlIG1hcCBwYWNrLCBmcm9tIEdvb2dsZSBCdXNpbmVzcyBQcm9maWxlIHRvIGNpdGF0aW9ucywgcmV2aWV3cywgYW5kIGxvY2FsIGNvbnRlbnQuJyxcbiAgICBoMTogJ1RoZSBDb21wbGV0ZSBMb2NhbCBTRU8gR3VpZGUgZm9yIDIwMjYnLFxuICAgIHBhdGg6ICcvYmxvZy9sb2NhbC1zZW8tZ3VpZGUtMjAyNi8nLFxuICB9LFxuICAnL2Jsb2cvY29yZS13ZWItdml0YWxzLyc6IHtcbiAgICB0aXRsZTogJ0NvcmUgV2ViIFZpdGFsczogVGhlIDIwMjYgVGVjaG5pY2FsIFNFTyBDaGVja2xpc3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnTENQLCBJTlAsIGFuZCBDTFMgZXhwbGFpbmVkIC0gd2l0aCB0aGUgZXhhY3QgZml4ZXMgdGhhdCBtb3ZlIHRoZSBuZWVkbGUgb24gcmFua2luZ3MgYW5kIHVzZXIgZXhwZXJpZW5jZS4nLFxuICAgIGgxOiAnQ29yZSBXZWIgVml0YWxzOiBUaGUgMjAyNiBUZWNobmljYWwgU0VPIENoZWNrbGlzdCcsXG4gICAgcGF0aDogJy9ibG9nL2NvcmUtd2ViLXZpdGFscy8nLFxuICB9LFxuICAnL2Jsb2cvbGluay1idWlsZGluZy13aGl0ZS1oYXQvJzoge1xuICAgIHRpdGxlOiAnV2hpdGUtSGF0IExpbmsgQnVpbGRpbmcgVGhhdCBBY3R1YWxseSBXb3JrcycsXG4gICAgZGVzY3JpcHRpb246ICdIb3cgd2UgYnVpbGQgYXV0aG9yaXR5IGJhY2tsaW5rcyBvbiByZWFsIHNpdGVzIHdpdGhvdXQgcmlza2luZyBhIHNpbmdsZSBwZW5hbHR5LiBTYWZlLCBtYW51YWwgb3V0cmVhY2ggc3RyYXRlZ2llcy4nLFxuICAgIGgxOiAnV2hpdGUtSGF0IExpbmsgQnVpbGRpbmcgVGhhdCBBY3R1YWxseSBXb3JrcycsXG4gICAgcGF0aDogJy9ibG9nL2xpbmstYnVpbGRpbmctd2hpdGUtaGF0LycsXG4gIH0sXG4gICcvYmxvZy9zYWFzLXNlby1wbGF5Ym9vay8nOiB7XG4gICAgdGl0bGU6ICdUaGUgU2FhUyBTRU8gUGxheWJvb2s6IEZyb20gVHJpYWwgdG8gUmV2ZW51ZScsXG4gICAgZGVzY3JpcHRpb246ICdBIHJlcGVhdGFibGUgZnJhbWV3b3JrIGZvciB0dXJuaW5nIG9yZ2FuaWMgc2VhcmNoIGludG8gYSBjb21wb3VuZGluZyBTYWFTIGdyb3d0aCBjaGFubmVsLicsXG4gICAgaDE6ICdUaGUgU2FhUyBTRU8gUGxheWJvb2snLFxuICAgIHBhdGg6ICcvYmxvZy9zYWFzLXNlby1wbGF5Ym9vay8nLFxuICB9LFxuICAnL2Jsb2cvY29udGVudC10aGF0LWNvbnZlcnRzLyc6IHtcbiAgICB0aXRsZTogJ1dyaXRpbmcgQ29udGVudCBUaGF0IFJhbmtzIEFORCBDb252ZXJ0cycsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSBiZXR3ZWVuIFNFTyBvcHRpbWl6YXRpb24gYW5kIHBlcnN1YXNpb24gLSB3aXRoIHRlbXBsYXRlcyB5b3UgY2FuIHVzZSB0byBjcmVhdGUgY29udGVudCB0aGF0IHJhbmtzIGFuZCBzZWxscy4nLFxuICAgIGgxOiAnV3JpdGluZyBDb250ZW50IFRoYXQgUmFua3MgQU5EIENvbnZlcnRzJyxcbiAgICBwYXRoOiAnL2Jsb2cvY29udGVudC10aGF0LWNvbnZlcnRzLycsXG4gIH0sXG4gICcvYmxvZy9lY29tbWVyY2UtY2F0ZWdvcnktcGFnZXMvJzoge1xuICAgIHRpdGxlOiAnSG93IHRvIFJhbmsgRS1jb21tZXJjZSBDYXRlZ29yeSBQYWdlcycsXG4gICAgZGVzY3JpcHRpb246ICdDYXRlZ29yeSBwYWdlcyBhcmUgeW91ciBiaWdnZXN0IFNFTyBhc3NldC4gTGVhcm4gaG93IHRvIG9wdGltaXplIHRoZW0gZm9yIHNlYXJjaCByYW5raW5ncyBhbmQgY29udmVyc2lvbnMuJyxcbiAgICBoMTogJ0hvdyB0byBSYW5rIEUtY29tbWVyY2UgQ2F0ZWdvcnkgUGFnZXMnLFxuICAgIHBhdGg6ICcvYmxvZy9lY29tbWVyY2UtY2F0ZWdvcnktcGFnZXMvJyxcbiAgfSxcbiAgJy9ibG9nL2h2YWMtYnVzaW5lc3Mtbm90LXNob3dpbmctb24tZ29vZ2xlLyc6IHtcbiAgICB0aXRsZTogJ1doeSBJcyBZb3VyIEhWQUMgQnVzaW5lc3MgTm90IFNob3dpbmcgb24gR29vZ2xlPyAxMiBGaXhlcycsXG4gICAgZGVzY3JpcHRpb246ICdJcyB5b3VyIEhWQUMgYnVzaW5lc3MgaW52aXNpYmxlIG9uIEdvb2dsZSBTZWFyY2ggYW5kIE1hcHM/IExlYXJuIHdoeSBhbmQgZGlzY292ZXIgcHJvdmVuIGZpeGVzIHRvIGdldCBtb3JlIEhWQUMgbGVhZHMuJyxcbiAgICBoMTogJ1doeSBJcyBZb3VyIEhWQUMgQnVzaW5lc3MgTm90IFNob3dpbmcgb24gR29vZ2xlPycsXG4gICAgcGF0aDogJy9ibG9nL2h2YWMtYnVzaW5lc3Mtbm90LXNob3dpbmctb24tZ29vZ2xlLycsXG4gIH0sXG4gICcvYmxvZy9lbGVjdHJpY2FsLWJ1c2luZXNzLW5vdC1zaG93aW5nLW9uLWdvb2dsZS8nOiB7XG4gICAgdGl0bGU6ICdXaHkgSXMgWW91ciBFbGVjdHJpY2FsIEJ1c2luZXNzIE5vdCBTaG93aW5nIG9uIEdvb2dsZT8gMTIgRml4ZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnSXMgeW91ciBlbGVjdHJpY2FsIGJ1c2luZXNzIGludmlzaWJsZSBvbiBHb29nbGUgU2VhcmNoIGFuZCBNYXBzPyBMZWFybiB3aHkgYW5kIGRpc2NvdmVyIHByb3ZlbiBmaXhlcyB0byBnZXQgbW9yZSBlbGVjdHJpY2FsIGxlYWRzLicsXG4gICAgaDE6ICdXaHkgSXMgWW91ciBFbGVjdHJpY2FsIEJ1c2luZXNzIE5vdCBTaG93aW5nIG9uIEdvb2dsZT8nLFxuICAgIHBhdGg6ICcvYmxvZy9lbGVjdHJpY2FsLWJ1c2luZXNzLW5vdC1zaG93aW5nLW9uLWdvb2dsZS8nLFxuICB9LFxuICAnL2Jsb2cvZWxlY3RyaWNpYW5zLWdldC1tb3JlLWxvY2FsLWN1c3RvbWVycy13aXRob3V0LWFkcy8nOiB7XG4gICAgdGl0bGU6ICdIb3cgRWxlY3RyaWNpYW5zIENhbiBHZXQgTW9yZSBMb2NhbCBDdXN0b21lcnMgV2l0aG91dCBBZHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnU3RvcCB3YXN0aW5nIG1vbmV5IG9uIGFkcy4gTGVhcm4gMTIgcHJvdmVuIHdheXMgZWxlY3RyaWNpYW5zIGNhbiBnZW5lcmF0ZSBtb3JlIGxvY2FsIGN1c3RvbWVycyB3aXRoIFNFTyBhbmQgb3JnYW5pYyBzdHJhdGVnaWVzLicsXG4gICAgaDE6ICdIb3cgRWxlY3RyaWNpYW5zIENhbiBHZXQgTW9yZSBMb2NhbCBDdXN0b21lcnMgV2l0aG91dCBBZHMnLFxuICAgIHBhdGg6ICcvYmxvZy9lbGVjdHJpY2lhbnMtZ2V0LW1vcmUtbG9jYWwtY3VzdG9tZXJzLXdpdGhvdXQtYWRzLycsXG4gIH0sXG4gICcvYmxvZy9sb2NhbC1zZW8tZm9yLWVsZWN0cmljaWFucy1jb21wbGV0ZS1ndWlkZS8nOiB7XG4gICAgdGl0bGU6ICdMb2NhbCBTRU8gZm9yIEVsZWN0cmljaWFuczogVGhlIENvbXBsZXRlIEd1aWRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb21wbGV0ZSBndWlkZSB0byBMb2NhbCBTRU8gZm9yIGVsZWN0cmljaWFucy4gTGVhcm4gaG93IHRvIHJhbmsgaGlnaGVyIG9uIEdvb2dsZSwgZ2V0IG1vcmUgbG9jYWwgY3VzdG9tZXJzLCBhbmQgZ3JvdyB5b3VyIGJ1c2luZXNzLicsXG4gICAgaDE6ICdMb2NhbCBTRU8gZm9yIEVsZWN0cmljaWFuczogVGhlIENvbXBsZXRlIEd1aWRlJyxcbiAgICBwYXRoOiAnL2Jsb2cvbG9jYWwtc2VvLWZvci1lbGVjdHJpY2lhbnMtY29tcGxldGUtZ3VpZGUvJyxcbiAgfSxcbiAgJy9ibG9nL3JhbmstZWxlY3RyaWNhbC1idXNpbmVzcy1vbi1nb29nbGUtbWFwcy8nOiB7XG4gICAgdGl0bGU6ICdIb3cgdG8gUmFuayBZb3VyIEVsZWN0cmljYWwgQnVzaW5lc3Mgb24gR29vZ2xlIE1hcHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTGVhcm4gaG93IHRvIHJhbmsgeW91ciBlbGVjdHJpY2FsIGJ1c2luZXNzIG9uIEdvb2dsZSBNYXBzIHdpdGggMTIgcHJvdmVuIHN0cmF0ZWdpZXMgZm9yIG1vcmUgdmlzaWJpbGl0eSBhbmQgY2FsbHMuJyxcbiAgICBoMTogJ0hvdyB0byBSYW5rIFlvdXIgRWxlY3RyaWNhbCBCdXNpbmVzcyBvbiBHb29nbGUgTWFwcycsXG4gICAgcGF0aDogJy9ibG9nL3JhbmstZWxlY3RyaWNhbC1idXNpbmVzcy1vbi1nb29nbGUtbWFwcy8nLFxuICB9LFxuICAnL2Jsb2cvYmVzdC1zZW8tdGlwcy1mb3ItZWxlY3RyaWNpYW5zLyc6IHtcbiAgICB0aXRsZTogJ0Jlc3QgU0VPIFRpcHMgZm9yIEVsZWN0cmljaWFuczogMTUgUHJvdmVuIFN0cmF0ZWdpZXMgdG8gR2V0IE1vcmUgTG9jYWwgQ3VzdG9tZXJzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBjb21wbGV0ZSBndWlkZSB0byBTRU8gZm9yIGVsZWN0cmljaWFucy4gTGVhcm4gMTUgcHJvdmVuIHN0cmF0ZWdpZXMgdG8gaW1wcm92ZSBHb29nbGUgcmFua2luZ3MsIGF0dHJhY3QgbG9jYWwgY3VzdG9tZXJzLCBhbmQgZ3JvdyB5b3VyIGVsZWN0cmljYWwgYnVzaW5lc3MuJyxcbiAgICBoMTogJ0Jlc3QgU0VPIFRpcHMgZm9yIEVsZWN0cmljaWFuczogMTUgUHJvdmVuIFN0cmF0ZWdpZXMgdG8gR2V0IE1vcmUgTG9jYWwgQ3VzdG9tZXJzJyxcbiAgICBwYXRoOiAnL2Jsb2cvYmVzdC1zZW8tdGlwcy1mb3ItZWxlY3RyaWNpYW5zLycsXG4gIH0sXG4gICcvYmxvZy9ob3ctdG8tZ2V0LWVtZXJnZW5jeS1lbGVjdHJpY2FsLWxlYWRzLW9ubGluZS8nOiB7XG4gICAgdGl0bGU6ICdIb3cgdG8gR2V0IEVtZXJnZW5jeSBFbGVjdHJpY2FsIExlYWRzIE9ubGluZSAoOCBQcm92ZW4gU3RyYXRlZ2llcyBUaGF0IFdvcmspJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xlYXJuIGhvdyB0byBnZXQgZW1lcmdlbmN5IGVsZWN0cmljYWwgbGVhZHMgb25saW5lIHdpdGggOCBwcm92ZW4gc3RyYXRlZ2llcy4gT3B0aW1pemUgeW91ciBHb29nbGUgQnVzaW5lc3MgUHJvZmlsZSwgdGFyZ2V0IHVyZ2VudCBrZXl3b3JkcywgYW5kIHR1cm4gbG9jYWwgc2VhcmNoZXMgaW50byBzZXJ2aWNlIGNhbGxzLicsXG4gICAgaDE6ICdIb3cgdG8gR2V0IEVtZXJnZW5jeSBFbGVjdHJpY2FsIExlYWRzIE9ubGluZSAoOCBQcm92ZW4gU3RyYXRlZ2llcyBUaGF0IFdvcmspJyxcbiAgICBwYXRoOiAnL2Jsb2cvaG93LXRvLWdldC1lbWVyZ2VuY3ktZWxlY3RyaWNhbC1sZWFkcy1vbmxpbmUvJyxcbiAgfSxcbiAgJy9ibG9nL2xvY2FsLXNlby1mb3ItcmVhbC1lc3RhdGUtYWdlbnRzLyc6IHtcbiAgICB0aXRsZTogJ0xvY2FsIFNFTyBmb3IgUmVhbCBFc3RhdGUgQWdlbnRzOiAxMCBQcm92ZW4gU3RyYXRlZ2llcyB0byBHZXQgTW9yZSBCdXllciAmIFNlbGxlciBMZWFkcycsXG4gICAgZGVzY3JpcHRpb246ICdBIGNvbXBsZXRlIGd1aWRlIHRvIGxvY2FsIFNFTyBmb3IgcmVhbCBlc3RhdGUgYWdlbnRzLiBMZWFybiAxMCBwcm92ZW4gc3RyYXRlZ2llcyB0byBpbXByb3ZlIEdvb2dsZSB2aXNpYmlsaXR5LCByYW5rIGhpZ2hlciBvbiBHb29nbGUgTWFwcywgYW5kIGdlbmVyYXRlIG1vcmUgYnV5ZXIgYW5kIHNlbGxlciBsZWFkcy4nLFxuICAgIGgxOiAnTG9jYWwgU0VPIGZvciBSZWFsIEVzdGF0ZSBBZ2VudHM6IDEwIFByb3ZlbiBTdHJhdGVnaWVzIHRvIEdldCBNb3JlIEJ1eWVyICYgU2VsbGVyIExlYWRzJyxcbiAgICBwYXRoOiAnL2Jsb2cvbG9jYWwtc2VvLWZvci1yZWFsLWVzdGF0ZS1hZ2VudHMvJyxcbiAgfSxcbiAgJy9ibG9nL2hvdy10by1nZXQtbW9yZS1wcm9wZXJ0eS1sZWFkcy13aXRob3V0LXBhaWQtYWRzLyc6IHtcbiAgICB0aXRsZTogJ0hvdyB0byBHZXQgTW9yZSBQcm9wZXJ0eSBMZWFkcyBXaXRob3V0IFBhaWQgQWRzICgxMCBQcm92ZW4gU0VPIFN0cmF0ZWdpZXMpJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xlYXJuIGhvdyB0byBnZXQgbW9yZSBwcm9wZXJ0eSBsZWFkcyB3aXRob3V0IHBhaWQgYWRzLiBEaXNjb3ZlciAxMCBwcm92ZW4gU0VPIHN0cmF0ZWdpZXMgdG8gYXR0cmFjdCBidXllciBhbmQgc2VsbGVyIGxlYWRzIG9yZ2FuaWNhbGx5IHRocm91Z2ggR29vZ2xlLCBHb29nbGUgTWFwcywgYW5kIGxvY2FsIHNlYXJjaC4nLFxuICAgIGgxOiAnSG93IHRvIEdldCBNb3JlIFByb3BlcnR5IExlYWRzIFdpdGhvdXQgUGFpZCBBZHMgKDEwIFByb3ZlbiBTRU8gU3RyYXRlZ2llcyknLFxuICAgIHBhdGg6ICcvYmxvZy9ob3ctdG8tZ2V0LW1vcmUtcHJvcGVydHktbGVhZHMtd2l0aG91dC1wYWlkLWFkcy8nLFxuICB9LFxuICAnL2Jsb2cvZ29vZ2xlLWJ1c2luZXNzLXByb2ZpbGUtZm9yLXJlYWwtZXN0YXRlLWFnZW50cy8nOiB7XG4gICAgdGl0bGU6ICdHb29nbGUgQnVzaW5lc3MgUHJvZmlsZSBmb3IgUmVhbCBFc3RhdGUgQWdlbnRzOiAxMCBXYXlzIHRvIE9wdGltaXplICYgR2V0IE1vcmUgTGVhZHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBjb21wbGV0ZSBndWlkZSB0byBHb29nbGUgQnVzaW5lc3MgUHJvZmlsZSBmb3IgcmVhbCBlc3RhdGUgYWdlbnRzLiBMZWFybiAxMCB3YXlzIHRvIG9wdGltaXplIHlvdXIgcHJvZmlsZSwgcmFuayBoaWdoZXIgb24gR29vZ2xlIE1hcHMsIGFuZCBnZW5lcmF0ZSBtb3JlIGJ1eWVyIGFuZCBzZWxsZXIgbGVhZHMuJyxcbiAgICBoMTogJ0dvb2dsZSBCdXNpbmVzcyBQcm9maWxlIGZvciBSZWFsIEVzdGF0ZSBBZ2VudHM6IDEwIFdheXMgdG8gT3B0aW1pemUgJiBHZXQgTW9yZSBMZWFkcycsXG4gICAgcGF0aDogJy9ibG9nL2dvb2dsZS1idXNpbmVzcy1wcm9maWxlLWZvci1yZWFsLWVzdGF0ZS1hZ2VudHMvJyxcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGluamVjdE1ldGEoaHRtbDogc3RyaW5nLCBtZXRhOiBQYWdlTWV0YSk6IHN0cmluZyB7XG4gIGxldCByZXN1bHQgPSBodG1sO1xuXG4gIC8vIFJlcGxhY2UgdGl0bGVcbiAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoLzx0aXRsZT5bXjxdKjxcXC90aXRsZT4vLCBgPHRpdGxlPiR7bWV0YS50aXRsZX08L3RpdGxlPmApO1xuXG4gIC8vIFJlcGxhY2UgbWV0YSBkZXNjcmlwdGlvblxuICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAvPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlteXCJdKlwiLyxcbiAgICBgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIiR7bWV0YS5kZXNjcmlwdGlvbn1cImBcbiAgKTtcblxuICAvLyBSZXBsYWNlIGNhbm9uaWNhbFxuICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAvPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cIlteXCJdKlwiLyxcbiAgICBgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cIiR7QkFTRX0ke21ldGEucGF0aH1cImBcbiAgKTtcblxuICAvLyBSZXBsYWNlIGhyZWZsYW5nIGFsdGVybmF0ZSBsaW5rcyBmb3Igd29ybGR3aWRlIHRhcmdldGluZ1xuICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAvPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZmxhbmc9XCJlblwiIGhyZWY9XCJbXlwiXSpcIi8sXG4gICAgYDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZsYW5nPVwiZW5cIiBocmVmPVwiJHtCQVNFfSR7bWV0YS5wYXRofVwiYFxuICApO1xuICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAvPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZmxhbmc9XCJ4LWRlZmF1bHRcIiBocmVmPVwiW15cIl0qXCIvLFxuICAgIGA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmbGFuZz1cIngtZGVmYXVsdFwiIGhyZWY9XCIke0JBU0V9JHttZXRhLnBhdGh9XCJgXG4gICk7XG5cbiAgLy8gUmVwbGFjZSBPRyB0YWdzXG4gIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFxuICAgIC88bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlteXCJdKlwiLyxcbiAgICBgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCIke21ldGEudGl0bGV9XCJgXG4gICk7XG4gIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFxuICAgIC88bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlteXCJdKlwiLyxcbiAgICBgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCIke21ldGEuZGVzY3JpcHRpb259XCJgXG4gICk7XG4gIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFxuICAgIC88bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJbXlwiXSpcIi8sXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cIiR7QkFTRX0ke21ldGEucGF0aH1cImBcbiAgKTtcblxuICAvLyBSZXBsYWNlIFR3aXR0ZXIgdGFnc1xuICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAvPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiW15cIl0qXCIvLFxuICAgIGA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCIke21ldGEudGl0bGV9XCJgXG4gICk7XG4gIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFxuICAgIC88bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJbXlwiXSpcIi8sXG4gICAgYDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIiR7bWV0YS5kZXNjcmlwdGlvbn1cImBcbiAgKTtcblxuICAvLyBJbmplY3QgSDEgYW5kIG5vc2NyaXB0IGNvbnRlbnQgaW50byAjcm9vdCBzbyBjcmF3bGVycyBzZWUgaXRcbiAgY29uc3QgaDFIdG1sID0gYDxoMSBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OTlweDtcIj4ke21ldGEuaDF9PC9oMT48bm9zY3JpcHQ+PHA+JHttZXRhLmRlc2NyaXB0aW9ufTwvcD48L25vc2NyaXB0PmA7XG4gIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFxuICAgIC88ZGl2IGlkPVwicm9vdFwiPjxcXC9kaXY+LyxcbiAgICBgPGRpdiBpZD1cInJvb3RcIj4ke2gxSHRtbH08L2Rpdj5gXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTdGF0aWNSb3V0ZXMoKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnZ2VuZXJhdGUtc3RhdGljLXJvdXRlcycsXG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgY2xvc2VCdW5kbGUoKSB7XG4gICAgICBjb25zdCBkaXN0RGlyID0gam9pbihfX2Rpcm5hbWUsICdkaXN0Jyk7XG4gICAgICBjb25zdCBzaXRlbWFwUGF0aCA9IGpvaW4oZGlzdERpciwgJ3NpdGVtYXAueG1sJyk7XG4gICAgICBjb25zdCBpbmRleFBhdGggPSBqb2luKGRpc3REaXIsICdpbmRleC5odG1sJyk7XG5cbiAgICAgIGlmICghZXhpc3RzU3luYyhzaXRlbWFwUGF0aCkgfHwgIWV4aXN0c1N5bmMoaW5kZXhQYXRoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2dlbmVyYXRlLXN0YXRpYy1yb3V0ZXM6IHNpdGVtYXAueG1sIG9yIGluZGV4Lmh0bWwgbm90IGZvdW5kLCBza2lwcGluZy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRleEh0bWwgPSByZWFkRmlsZVN5bmMoaW5kZXhQYXRoLCAndXRmLTgnKTtcbiAgICAgIGNvbnN0IHNpdGVtYXAgPSByZWFkRmlsZVN5bmMoc2l0ZW1hcFBhdGgsICd1dGYtOCcpO1xuICAgICAgY29uc3QgbG9jcyA9IFsuLi5zaXRlbWFwLm1hdGNoQWxsKC88bG9jPihbXjxdKyk8XFwvbG9jPi9nKV0ubWFwKChtKSA9PiBtWzFdKTtcblxuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGxldCBtZXRhQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKGNvbnN0IHVybCBvZiBsb2NzKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB1cmwucmVwbGFjZShCQVNFLCAnJyk7XG4gICAgICAgIGlmICghcGF0aCB8fCBwYXRoID09PSAnLycpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGRpciA9IGpvaW4oZGlzdERpciwgcGF0aCk7XG4gICAgICAgIG1rZGlyU3luYyhkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuXG4gICAgICAgIGNvbnN0IG1ldGEgPSBwYWdlTWV0YVtwYXRoXTtcbiAgICAgICAgaWYgKG1ldGEpIHtcbiAgICAgICAgICB3cml0ZUZpbGVTeW5jKGpvaW4oZGlyLCAnaW5kZXguaHRtbCcpLCBpbmplY3RNZXRhKGluZGV4SHRtbCwgbWV0YSkpO1xuICAgICAgICAgIG1ldGFDb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdyaXRlRmlsZVN5bmMoam9pbihkaXIsICdpbmRleC5odG1sJyksIGluZGV4SHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cblxuICAgICAgLy8gQWxzbyBpbmplY3QgbWV0YSBmb3IgaG9tZXBhZ2VcbiAgICAgIGNvbnN0IGhvbWVNZXRhID0gcGFnZU1ldGFbJy8nXTtcbiAgICAgIGlmIChob21lTWV0YSkge1xuICAgICAgICB3cml0ZUZpbGVTeW5jKGluZGV4UGF0aCwgaW5qZWN0TWV0YShpbmRleEh0bWwsIGhvbWVNZXRhKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGBnZW5lcmF0ZS1zdGF0aWMtcm91dGVzOiBjcmVhdGVkICR7Y291bnR9IHN0YXRpYyByb3V0ZSBIVE1MIGZpbGVzICgke21ldGFDb3VudH0gd2l0aCB1bmlxdWUgU0VPIG1ldGEpLmApO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBnZW5lcmF0ZVN0YXRpY1JvdXRlcygpXSxcbiAgYmFzZTogJy8nLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQWlDO0FBQ25RLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWMsZUFBZSxXQUFXLGtCQUFrQjtBQUNuRSxTQUFTLE1BQU0sZUFBZTtBQUM5QixTQUFTLHFCQUFxQjtBQUpvRyxJQUFNLDJDQUEyQztBQU1uTCxJQUFNLFlBQVksUUFBUSxjQUFjLHdDQUFlLENBQUM7QUFTeEQsSUFBTSxPQUFPO0FBRWIsSUFBTSxXQUFxQztBQUFBLEVBQ3pDLEtBQUs7QUFBQSxJQUNILE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxJQUNoQixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixNQUFNO0FB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
