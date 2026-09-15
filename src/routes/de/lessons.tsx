import { createFileRoute } from "@tanstack/react-router";
import LessonsPage from "@/pages/LessonsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/lessons")({
  component: LessonsPage,
  head: () => pageHead("lessons", "de"),
});
