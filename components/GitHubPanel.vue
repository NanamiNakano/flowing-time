<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton label="Add yours" color="pink" variant="outline" @click="isOpen = true"/>

    <UModal v-model="isOpen">
      <div class="p-4">
        <USkeleton class="h-48"/>
      </div>
    </UModal>
  </div>
</template>
