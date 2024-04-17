<template>
  <SpeedInsights/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';

useHead({
  meta: [
    {name: "lang", content: "en"},
  ]
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
  twitterImage: "/img/ogimage.webp"
})
</script>
