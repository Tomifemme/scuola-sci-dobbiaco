import { Outlet, createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";

// English site version: /en and /en/*
export const Route = createFileRoute("/en")({
  component: () => (
    <LanguageProvider forced="en">
      <Outlet />
    </LanguageProvider>
  ),
});
