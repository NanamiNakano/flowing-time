// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: ["@nuxt/fonts", "@nuxt/image"],
    fonts: {
        families: [
            {name: "Monaco", provider: "local"}
        ]
    }
})