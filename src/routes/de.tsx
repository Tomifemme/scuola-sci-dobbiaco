import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

// Legacy old-site URL: /de and /de/* redirect to the homepage.
export const Route = createFileRoute("/de")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: Outlet,
});
