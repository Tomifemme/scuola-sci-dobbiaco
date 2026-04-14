import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

interface SEOProps {
  title: Record<Language, string>;
  description: Record<Language, string>;
  path: string;
  type?: string;
}

const BASE_URL = "https://scuolasci-dobbiaco.com";

const SEO = ({ title, description, path, type = "website" }: SEOProps) => {
  const { lang } = useLanguage();
  const pageTitle = title[lang];
  const pageDesc = description[lang];
  const url = `${BASE_URL}${path}`;

  const jsonLd = path === "/"
    ? {
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        name: "Scuola Sci Dobbiaco - Skischule Toblach",
        description: description.en,
        url: BASE_URL,
        telephone: "+390474972581",
        email: "info@scuolasci-dobbiaco.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via Dolomiti 5",
          addressLocality: "Dobbiaco",
          postalCode: "39040",
          addressRegion: "BZ",
          addressCountry: "IT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 46.735,
          longitude: 12.2225,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "11:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "15:00",
            closes: "19:00",
          },
        ],
        sameAs: [],
      }
    : undefined;

  return (
    <Helmet>
      <html lang={lang === "it" ? "it" : lang === "de" ? "de" : "en"} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Scuola Sci Dobbiaco" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />

      {/* Alternate language hints */}
      <link rel="alternate" hrefLang="it" href={url} />
      <link rel="alternate" hrefLang="de" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
