<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const navigations = ref([{title: "About", link: "/about"}])
</script>

<template>
  <nav class="list-none flex items-center">
    <NuxtLink v-for="navigation in navigations" :key="navigation.title" :to="navigation.link">
      <span class="mr-2">
        <FontAwesomeIcon :icon="['fas', 'arrow-right']"/>
      </span>
      {{ navigation.title }}
    </NuxtLink>
  </nav>
</template>
