import { createFileRoute } from "@tanstack/react-router";
import GalleryPage from "@/pages/GalleryPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/gallery")({
  component: GalleryPage,
  head: () => pageHead("gallery", "en"),
});
