import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  component: Index,
  head: () => pageHead("index", "en"),
});
