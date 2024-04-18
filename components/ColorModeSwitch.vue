<script setup lang="ts">


import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference === "light" ? colorMode.preference = "dark" : colorMode.preference = "light"
}

const computedIcon = computed(() => {
  return colorMode.preference === "light" ? ["fas", "moon"] : ["fas", "sun"]
})
</script>

<template>
  <button @click="toggleColorMode">
    <FontAwesomeIcon :icon="computedIcon" size="xl"/>
  </button>
</template>
