import { createFileRoute } from "@tanstack/react-router";
import KidsPage from "@/pages/KidsPage";

export const Route = createFileRoute("/kids")({
  component: KidsPage,
});
