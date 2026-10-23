import { createFileRoute } from "@tanstack/react-router";
import CrossCountryPage from "@/pages/CrossCountryPage";
import { pageHead } from "@/lib/seo";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/cross-country")({
  component: () => <LanguageProvider forced="it"><CrossCountryPage /></LanguageProvider>,
  head: () => pageHead("crossCountry", "it"),
});