<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const navigations = ref([{title: "About", link: "/about"}])
</script>

<template>
  <ul class="list-none">
    <li v-for="navigation in navigations" :key="navigation.title" class="flex items-center">
      <NuxtLink :to="navigation.link">
      <span class="mr-2">
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
      </span>
        {{ navigation.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
