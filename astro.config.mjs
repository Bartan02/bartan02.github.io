// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl", "nl", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inria Sans",
      display: "swap",
      cssVariable: "--font-inria-header",
      fallbacks: ["ui-serif", "serif"],
      weights: [700],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inria Sans",
      display: "swap",
      cssVariable: "--font-inria",
      fallbacks: ["system-ui", "sans-serif"],
      weights: [400],
      subsets: ["latin", "latin-ext"],
    },
  ],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://badamczyk.eu",
  integrations: [sitemap()],
});