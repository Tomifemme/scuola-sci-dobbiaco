import { Outlet, createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";

// Italian is served at the root; /it and /it/* stay available as aliases.
export const Route = createFileRoute("/it")({
  component: () => (
    <LanguageProvider forced="it">
      <Outlet />
    </LanguageProvider>
  ),
});
