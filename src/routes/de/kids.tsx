import { createFileRoute } from "@tanstack/react-router";
import KidsPage from "@/pages/KidsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/kids")({
  component: KidsPage,
  head: () => pageHead("kids", "de"),
});
