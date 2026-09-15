import { useEffect, type ReactNode } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ChatWidget from "@/components/ChatWidget";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const SITE_URL = "https://scuolasci-dobbiaco.com/";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/daba281a-f7f1-437c-8d86-69bd0d05638e/id-preview-1a6ee43b--90565fcc-7e80-4f71-ab05-bd15e7023161.lovable.app-1773932156762.png";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Scuola Sci Dobbiaco",
  alternateName: [
    "Skischule Toblach",
    "Ski School Dobbiaco",
    "Ski School Toblach",
    "Scuola Sci Toblach",
    "Skischule Dobbiaco",
  ],
  url: SITE_URL,
  description:
    "Scuola Sci Dobbiaco / Skischule Toblach: corsi di sci, snowboard e freeride nelle Dolomiti - 3 Zinnen Dolomites.",
  telephone: "+390474972581",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Dolomiti 5",
    addressLocality: "Dobbiaco / Toblach",
    postalCode: "39034",
    addressRegion: "BZ",
    addressCountry: "IT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 46.735, longitude: 12.2225 },
  areaServed: ["Toblach", "Dobbiaco", "Alta Pusteria", "Hochpustertal", "3 Zinnen Dolomites"],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Scuola Sci Dobbiaco | Skischule Toblach | Ski School Dolomites" },
      {
        name: "description",
        content:
          "Scuola Sci Dobbiaco: corsi di sci per adulti e bambini, snowboard e freeride nelle Dolomiti. Skischule Toblach: Skikurse in den 3 Zinnen Dolomites. Ski school in Dobbiaco/Toblach.",
      },
      { name: "author", content: "Scuola Sci Dobbiaco - Skischule Toblach" },
      {
        name: "keywords",
        content:
          "scuola sci dobbiaco, scuola sci toblach, corsi sci dolomiti, lezioni sci bambini, skischule toblach, skischule dobbiaco, skikurse dolomiten, skilehrer toblach, kinderskikurse, ski school toblach, ski school dobbiaco, ski lessons dolomites, snowboard, freeride, 3 zinnen dolomites",
      },
      {
        property: "og:title",
        content: "Scuola Sci Dobbiaco | Skischule Toblach | Ski School Dolomites",
      },
      {
        property: "og:description",
        content:
          "Corsi di sci per adulti e bambini, snowboard e freeride nelle Dolomiti dal 1975. Skikurse in Toblach.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Scuola Sci Dobbiaco - Skischule Toblach" },
      { property: "og:locale", content: "it_IT" },
      { property: "og:locale:alternate", content: "de_DE" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Scuola Sci Dobbiaco | Skischule Toblach" },
      {
        name: "twitter:description",
        content: "Corsi di sci, snowboard e freeride nelle Dolomiti. Skikurse in den Dolomiten.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/logo-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON_LD }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const htmlLang = /^\/de(\/|$)/.test(pathname) ? "de" : /^\/en(\/|$)/.test(pathname) ? "en" : "it";
  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Outlet />
            <ChatWidget />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2">This page didn't load</h1>
        <p className="text-muted-foreground mb-6">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a className="px-4 py-2 rounded-md border border-border" href="/">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
