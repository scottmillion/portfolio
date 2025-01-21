// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    rootAttrs: {
      "data-theme": "synthwave",
    },
  },
  compatibilityDate: "2025-01-18",
  css: ["~/assets/css/tailwind.css"],
  devtools: { enabled: true },
  fonts: {
    defaults: {
      weights: [400, 500, 600],
      styles: ["normal", "italic"],
    },
  },
  modules: ["@prisma/nuxt", "@nuxt/fonts", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "",
    },
  },
  srcDir: "src/",
  serverDir: "server/",
})
