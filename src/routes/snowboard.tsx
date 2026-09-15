import { createFileRoute } from "@tanstack/react-router";
import SnowboardPage from "@/pages/SnowboardPage";

export const Route = createFileRoute("/snowboard")({
  component: SnowboardPage,
});
