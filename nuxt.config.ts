// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ["~/assets/css/tailwind.css", "~/assets/css/transition.css", "@fortawesome/fontawesome-svg-core/styles.css"],
    modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@nuxt/eslint", "@nuxtjs/seo"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    runtimeConfig: {
        githubAppId: "",
        githubAppPrivateKey: ""
    },

    app: {
        layoutTransition: {name: 'layout', mode: 'out-in'}
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
