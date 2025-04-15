// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt'
  ], runtimeConfig: {
    SHOW_AUTH_LINKS: false ,
    public: {
      apiBase: '',
      apiKey: ''
    }
  },
  app: {
    head: {
      title: 'TrackInvest - Investment Tracking Simplified',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        { name: 'theme-color', content: '#000000' }
      ]
    }
  }
})