// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/image-edge',
    ],
    components: [
        {
        path: '~/components',
        pathPrefix: false,
        },
    ],  
})
