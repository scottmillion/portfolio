// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // alias: {
  //   "@": "./src",
  // },

  compatibilityDate: "2024-11-01",
  css: ["./src/assets/css/main.css"], // tailwind

  devtools: { enabled: true },

  postcss: {
    // tailwind
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // TODO
  // app: {
  //   head: {
  //     meta: [
  //       // <meta name="viewport" content="width=device-width, initial-scale=1">
  //       { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  //     ],
  //     script: [
  //       // <script src="https://myawesome-lib.js"></script>
  //       { src: 'https://awesome-lib.js' }
  //     ],
  //     link: [
  //       // <link rel="stylesheet" href="https://myawesome-lib.css">
  //       { rel: 'stylesheet', href: 'https://awesome-lib.css' }
  //     ],
  //     // please note that this is an area that is likely to change
  //     style: [
  //       // <style type="text/css">:root { color: red }</style>
  //       { children: ':root { color: red }', type: 'text/css' }
  //     ],
  //     noscript: [
  //       // <noscript>JavaScript is required</noscript>
  //       { children: 'JavaScript is required' }
  //     ]
  //   }
  // }

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

  // TODO: boilerplate for later
  // $production: {
  //   routeRules: {
  //     "/**": { isr: true },
  //   },
  // },
  // $development: {
  //   //
  // },
  // $env: {
  //   staging: {
  //     //
  //   },
  // },
});
