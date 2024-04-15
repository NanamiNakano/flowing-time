<script setup lang="ts">
const navigations = ref([{title: "About", link: "/about"}])
</script>

<template>
  <ul class="list-none">
    <li v-for="navigation in navigations" class="flex items-center">
      <span class="mr-2">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </span>
      <NuxtLink :to="navigation.link">
        {{ navigation.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
