// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      /*
      TODO:
         
          script: [
            // <script src="https://myawesome-lib.js"></script>
            { src: 'https://awesome-lib.js' }
          ],
          link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            { rel: 'stylesheet', href: 'https://awesome-lib.css' }
          ],
          // please note that this is an area that is likely to change
          style: [
            // <style type="text/css">:root { color: red }</style>
            { children: ':root { color: red }', type: 'text/css' }
          ],
          noscript: [
            // <noscript>JavaScript is required</noscript>
            { children: 'JavaScript is required' }
          ]
        }
      }
      */

      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    rootAttrs: {
      "data-theme": "synthwave",
    },
  },
  compatibilityDate: "2025-01-18",
  devtools: { enabled: true },
  fonts: {
    defaults: {
      weights: [400, 500, 600],
      styles: ["normal", "italic"],
    },
  },
  modules: ["@nuxt/fonts", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  postcss: {
    // TODO: Dupe of tailwindcss? Do we need postcss with new nuxt?
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    // TODO: dupe of postcss?
  },

  //https://nuxt.com/docs/getting-started/configuration
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "",
    },
  },
  srcDir: "src/",

  /*
    TODO: boilerplate for deployment

    $production: {
      routeRules: {
        "/**": { isr: true },
      },
    },
    $development: {
      //
    },
    $env: {
      staging: {
        //
      },
    },
  */
})
