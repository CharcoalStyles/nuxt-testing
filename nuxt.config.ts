// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  nitro: {
    prerender: {
      routes: ["/ssg"],
    },
  },
  routeRules: {
    "/ssg": { prerender: true },
  },
});
