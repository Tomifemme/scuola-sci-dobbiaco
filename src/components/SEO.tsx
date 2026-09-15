import type { Language } from "@/i18n/translations";

interface SEOProps {
  title: Record<Language, string>;
  description: Record<Language, string>;
  path: string;
  type?: string;
}

/**
 * Head metadata is now server-rendered per route via the `head()` option
 * (see src/lib/seo.ts), so this component intentionally renders nothing.
 * Kept as a no-op to avoid duplicate <title>/<link rel="canonical"> tags.
 */
const SEO = (_props: SEOProps) => null;

export default SEO;
