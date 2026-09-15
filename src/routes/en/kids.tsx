import { createFileRoute } from "@tanstack/react-router";
import KidsPage from "@/pages/KidsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/kids")({
  component: KidsPage,
  head: () => pageHead("kids", "en"),
});
