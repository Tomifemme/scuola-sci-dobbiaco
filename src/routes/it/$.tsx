import { createFileRoute } from "@tanstack/react-router";

// Matched only so /it/<anything> resolves; the parent /it route redirects.
export const Route = createFileRoute("/it/$")({
  component: () => null,
});
