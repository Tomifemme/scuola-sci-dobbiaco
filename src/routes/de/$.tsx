import { createFileRoute } from "@tanstack/react-router";

// Matched only so /de/<anything> resolves; the parent /de route redirects to /.
export const Route = createFileRoute("/de/$")({
  component: () => null,
});
