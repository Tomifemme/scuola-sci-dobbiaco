import { createFileRoute } from "@tanstack/react-router";
import LessonsPage from "@/pages/LessonsPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/lessons")({
  component: LessonsPage,
  head: () => pageHead("lessons", "en"),
});
