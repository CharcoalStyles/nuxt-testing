// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://hds.hub24.com.au/dist/themes/common.css",
        },
        {
          rel: "stylesheet",
          href: "https://hds.hub24.com.au/dist/themes/ni.css",
        }
      ],
    },
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  nitro: {
    prerender: {
      routes: ["/ssg/form", "/ssg/ramp"],
    },
  },
  plugins: ["~/plugins/hub24ds.client"],
  routeRules: {
    "/ssg/form": { prerender: true },
    "/ssg/ramp": { prerender: true },
  },
  typescript: {
    typeCheck: true,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("sl-"),
    },
  },
});
