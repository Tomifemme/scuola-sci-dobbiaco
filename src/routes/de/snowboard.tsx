import { createFileRoute } from "@tanstack/react-router";
import SnowboardPage from "@/pages/SnowboardPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/snowboard")({
  component: SnowboardPage,
  head: () => pageHead("snowboard", "de"),
});
