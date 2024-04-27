<script setup lang="ts">
defineProps({
  path: {
    type: String,
    default: "/typography"
  },
  title: {
    type: String,
    default: "Lorem Ipsum"
  },
  description: {
    type: String,
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  date: {
    type: String,
    default: "1980/01/01"
  }
})
</script>

<template>
  <UButton :to="`/blog${path}`" color="white" variant="link" :padded="false">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p>{{ date }}</p>
  </UButton>
</template>
