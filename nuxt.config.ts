// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dir: {
    // tell it where to find these directories
    pages: 'src/pages',
    assets: 'src/assets',
    layouts: 'src/layouts',
  },
  components: {
    dirs: ['src/components'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
})
