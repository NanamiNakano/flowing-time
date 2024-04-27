<script setup lang="ts">
const quotable = ref("")

onMounted(async () => {
  const {data} = await useFetch("https://api.quotable.io/random")
  quotable.value = (<Quotable>data.value).content
})

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
      <h2 class="text-4xl">Articles</h2>
      <ContentList path="/" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <ArticleCard :title="article.title" :description="article.description" :path="article._path"
                       :date="article.date"/>
        </div>
      </ContentList>
    </div>
  </main>
</template>
