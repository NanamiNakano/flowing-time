export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        "~/assets/css/tailwind.css",
        "~/assets/css/transition.css",
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    modules: [
        "@nuxt/fonts",
        "@nuxt/image",
        "@nuxt/ui",
        "@nuxt/eslint",
        "@nuxtjs/seo",
        "@nuxt/content"
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    runtimeConfig: {
        public: {
            site: {
                uri: "",
            },
            github: {
                appId: "",
                appName: "",
                clientId: "",
            }
        },
        github: {
            privateKey: "",
            clientSecret: "",
        }
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
        name:
            "流水の歳月",
        description:
            "I can not hear the people sing.",
        defaultLocale:
            "en"
    },

    content: {
        highlight: {
            theme: {
                default: "min-dark",
                dark: "min-dark",
                light: "min-light",
            }
        }
    }
})
