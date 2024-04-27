<script setup lang="ts">
import {format, parse} from "date-fns"

const route = useRoute()

const path = computed(() => {
  return "/" + route.path.slice(6)
})

const {data} = await useAsyncData('home', () => queryContent(path.value).findOne())
const date = parse(data?.value?.date ?? "1989/06/04", "yyyy/MM/dd", new Date())
</script>

<template>
  <main>
    <div class="container mx-auto px-8 lg:px-16 flex flex-col justify-center items-center">
      <div class="items-start">
        <time v-if="data?.value?.date !== undefined" :datetime="`${format(date, 'yyyy-MM-dd')}`" class="pb-2">
          {{ format(date, "yyyy MMM dd, EEEE") }}
        </time>
        <article class="prose dark:prose-invert prose-pre:not-prose lg:prose-lg">
          <ContentRenderer :value="data ?? undefined">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </article>
      </div>
    </div>
  </main>
</template>
