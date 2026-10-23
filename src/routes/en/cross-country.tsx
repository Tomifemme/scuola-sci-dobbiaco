import { createFileRoute } from "@tanstack/react-router";
import CrossCountryPage from "@/pages/CrossCountryPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/cross-country")({
  component: CrossCountryPage,
  head: () => pageHead("crossCountry", "en"),
});