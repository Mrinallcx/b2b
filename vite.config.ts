import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Build-time absolute OG image URL (Facebook/Twitter require absolute URLs and cache aggressively)
const getOgImageUrl = () => {
  const base =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.VITE_SITE_URL || "https://b2b-ebon.vercel.app";
  return `${base}/Og%20Image.jpg`;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "html-og-image",
      transformIndexHtml(html) {
        const url = getOgImageUrl();
        return html.replace(/__OG_IMAGE_URL__/g, url);
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
