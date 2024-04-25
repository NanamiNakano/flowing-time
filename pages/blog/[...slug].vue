<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

const path = computed(() => {
  return "/" + route.path.slice(6)
})
</script>

<template>
  <main>
    <div class="container mx-auto px-8 lg:px-16 flex justify-center">
      <article class="prose dark:prose-invert lg:prose-lg">
        <ContentDoc :path="path"/>
      </article>
    </div>
  </main>
</template>
