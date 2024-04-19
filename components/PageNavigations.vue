<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const navigations = ref([{title: "About", link: "/about"}, {title: "Friends", link: "/friends"}]);
</script>

<template>
  <nav class="list-none flex flex-col justify-start">
    <NuxtLink v-for="navigation in navigations" :key="navigation.title" :to="navigation.link"  target="_blank">
      <span class="mr-2">
        <FontAwesomeIcon :icon="['fas', 'arrow-right']"/>
      </span>
      <UButton :label="navigation.title" color="white" variant="link"/>
    </NuxtLink>
  </nav>
</template>
