import { createFileRoute } from "@tanstack/react-router";
import FreeridePage from "@/pages/FreeridePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/freeride")({
  component: FreeridePage,
  head: () => pageHead("freeride", "en"),
});
