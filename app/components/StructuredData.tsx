export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mubeen Ahmad - Web Developer",
    "description": "White-label landing page development for marketing agencies. Healthcare-focused websites and appointment systems.",
    "url": "https://your-site.vercel.app",
    "telephone": "+923218492868",
    "email": "mubeenahma1123@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "priceRange": "$100-$500",
    "areaServed": "Worldwide",
    "serviceType": ["Web Development", "Landing Page Design", "Healthcare Website Development"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}