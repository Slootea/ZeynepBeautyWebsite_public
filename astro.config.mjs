import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const isProd = process.env.NODE_ENV === "production";
const repo = "ZeynepBeautyWebsite_public";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  site: isProd ? `https://example.com/${repo}` : "http://localhost:4321",
  base: isProd ? `/${repo}` : "/",
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
  build: {
    assets: "_assets",
  },
});
