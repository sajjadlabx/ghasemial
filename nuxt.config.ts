// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxt/icon/module', '@nuxt/fonts'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
    app: {
    head: {
      title: 'بلیط هواپیما - خرید بلیط هواپیما | قاسمی ایرلاینز',
      titleTemplate: '%s',
      htmlAttrs: {
        lang: 'fa',
        dir: 'rtl',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
    },
  },
})
