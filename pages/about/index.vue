<template>
  <div class="container mx-auto px-8">
    <div class="flex flex-col lg:flex-row justify-between lg:items-center">
      <div class="text-left space-y-4">
        <h1 class="text-5xl font-light">World, Hello!</h1>
        <h1 class="text-4xl font-semibold">I'm Nanami Nakano.</h1>
      </div>
      <div class="flex justify-end mt-4 lg:mt-0 lg:ml-4">
        <p class="text-right truncate whitespace-normal text-xl" style="max-width: 400px;">
          16 y.o. full-stack developer from China, current high school freshman, CS & Math majors(AP Course), want to
          learn art.
        </p>
      </div>
    </div>
    <UDivider class="py-4"/>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About"
})

definePageMeta({
  layout: "about"
})
</script>
