import { createFileRoute } from "@tanstack/react-router";
import FreeridePage from "@/pages/FreeridePage";

export const Route = createFileRoute("/freeride")({
  component: FreeridePage,
});
