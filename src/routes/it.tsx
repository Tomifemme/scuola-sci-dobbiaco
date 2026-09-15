import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

// Legacy old-site URL: /it and /it/* redirect to the homepage.
export const Route = createFileRoute("/it")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  component: Outlet,
});
