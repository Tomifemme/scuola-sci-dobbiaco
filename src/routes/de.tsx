import { Outlet, createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";

// German site version: /de and /de/*
export const Route = createFileRoute("/de")({
  component: () => (
    <LanguageProvider forced="de">
      <Outlet />
    </LanguageProvider>
  ),
});
