import { createFileRoute } from "@tanstack/react-router";
import GalleryPage from "@/pages/GalleryPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/de/gallery")({
  component: GalleryPage,
  head: () => pageHead("gallery", "de"),
});
