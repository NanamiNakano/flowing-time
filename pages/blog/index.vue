<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const quotable = ref("")
const reversed = ref(true)

onMounted(async () => {
  const {data} = await useFetch("https://api.quotable.io/random")
  quotable.value = (<Quotable>data.value).content
})

const articles = ref(await queryContent("/").sort({date: -1}).find())

const icon = computed(() => {
  if (reversed.value) {
    return ['fas', 'arrow-up-wide-short']
  } else {
    return ['fas', 'arrow-down-short-wide']
  }
})

function changeSort() {
  reversed.value = !reversed.value
  articles.value.reverse()
}
</script>

<template>
  <main>
    <div class="container mx-auto px-8 lg:px-16">
      <div class="flex flex-col lg:flex-row justify-between lg:items-center">
        <div class="text-left space-y-4">
          <h1 class="text-5xl font-semibold">Blog</h1>
          <h2 class="lg:text-lg">{{ quotable }}</h2>
        </div>
      </div>
      <UDivider class="py-4"/>
      <div class="flex">
        <h2 class="text-4xl">Articles</h2>
        <UButton color="white" variant="ghost" @click="changeSort">
          <FontAwesomeIcon :icon="icon" size="lg"/>
        </UButton>
      </div>
      <div v-for="article in articles" :key="article._path">
        <ArticleCard
            :title="article.title" :description="article.description" :path="article._path"
            :date="article.date"/>
      </div>
    </div>
  </main>
</template>
