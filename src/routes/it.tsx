import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

// Italian is served at the root, so /it and /it/* redirect to the same page
// without the prefix (e.g. /it/lessons -> /lessons).
export const Route = createFileRoute("/it")({
  beforeLoad: ({ location }) => {
    const target = location.pathname.replace(/^\/it/, "") || "/";
    throw redirect({ to: target as never, replace: true });
  },
  component: Outlet,
});
