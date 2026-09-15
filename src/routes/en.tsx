import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

// Legacy old-site URL: /en and /en/* redirect to the homepage.
export const Route = createFileRoute("/en")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: Outlet,
});
