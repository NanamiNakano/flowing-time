<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton label="Add yours" color="pink" variant="outline" @click="isOpen = true"/>

    <UModal v-model="isOpen">
      <div class="p-4 flex justify-center">
        <NuxtLink to="https://github.com/NanamiNakano/flowing-time/edit/main/assets/data/links.json" target="_blank">
          <UButton class="flex" color="pink">
            <FontAwesomeIcon :icon="['fab', 'github']" size="lg"/>
            Edit on GitHub
          </UButton>
        </NuxtLink>
      </div>
    </UModal>
  </div>
</template>
