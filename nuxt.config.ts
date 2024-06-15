// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt', '@nuxt/fonts'],
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  fonts: {
    provider: 'google',
    families: [{ name: 'Roboto' }, { name: 'Poppins' }],

    defaults: {
      weights: [400, 500],
      styles: ['normal'],
    },
  },
})
