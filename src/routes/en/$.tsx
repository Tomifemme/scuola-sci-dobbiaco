import { createFileRoute } from "@tanstack/react-router";

// Matched only so /en/<anything> resolves; the parent /en route redirects to /.
export const Route = createFileRoute("/en/$")({
  component: () => null,
});
