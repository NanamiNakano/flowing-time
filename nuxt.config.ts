export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		"~/assets/css/tailwind.css",
		"~/assets/css/transition.css",
		"@fortawesome/fontawesome-svg-core/styles.css",
	],
	modules: [
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxt/ui",
		"@nuxt/eslint",
		"@nuxtjs/seo",
		"@nuxt/content",
		"@nuxtjs/sitemap",
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
			},
		},
		github: {
			privateKey: "",
			clientSecret: "",
		},
	},

	app: {
		layoutTransition: { name: "layout", mode: "out-in" },
		pageTransition: { name: "layout", mode: "out-in" },
	},

	fonts: {
		families: [
			{ name: "Monaco", provider: "local" },
		],
	},

	colorMode: {
		fallback: "light",
	},

	site: {
		url: "https://www.thynanami.dev",
		name:
        "流水の歳月",
		description:
        "I can not hear the people sing.",
		defaultLocale:
        "en",
	},

	content: {
		highlight: {
			theme: "min-dark",
		},
	},

	eslint: {
		config: {
			stylistic: {
				indent: "tab",
				quotes: "double",
				jsx: false,
			},
		},
	},

	sitemap: {
		sources: [
			"/api/__sitemap__/urls",
		],
	},

	nitro: {
		prerender: {
			routes: ["/feed.xml"],
		},
	},
})
