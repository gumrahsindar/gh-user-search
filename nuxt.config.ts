// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/styles/index.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Github User Search',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'User searching applicatin for Github.',
        },
        { name: 'theme-color', content: '#000000' },

        {
          key: 'og:title',
          property: 'og:title',
          content: 'Github User Search',
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'Github User Search',
        },
        { key: 'og:image', property: 'og:image', content: '/og-image.jpg' },
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://github-user-search.vercel.app',
        },

        // Twitter
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Github User Search',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Github User Search',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: '/og-image.jpg',
        },
      ],
    },
  },
})
