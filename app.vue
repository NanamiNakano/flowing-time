<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
	meta: [
		{ name: "lang", content: "en" },
		{ name: "icon", content: "/img/apple-touch-icon.png" },
	],
})

useSeoMeta({
	ogTitle: "流水の歳月",
	twitterTitle: "流水の歳月",
	description: "I can not hear the people sing.",
	ogDescription: "I can not hear the people sing.",
	twitterDescription: "I can not hear the people sing.",
	ogUrl: "https://www.thynanami.dev",
	twitterCard: "summary_large_image",
	ogImage: "/img/ogimage.webp",
	twitterImage: "/img/ogimage.webp",
})
</script>
