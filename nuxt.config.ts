// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
    modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@nuxt/eslint"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    fonts: {
        families: [
            {name: "Monaco", provider: "local"}
        ]
    },

    colorMode: {
        fallback: "light",
    }
})