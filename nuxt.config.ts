// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
    modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@nuxt/eslint", "@nuxtjs/seo"],

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
        fallback: "light"
    },

    site: {
        url: "https://www.thynanami.dev",
        name: "流水の歳月",
        description: "I can not hear the people sing.",
        defaultLocale: "en"
    }
})
