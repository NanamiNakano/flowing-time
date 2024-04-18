<template>
  <header class="py-8">
    <div class="container mx-auto flex justify-between items-center px-8">
      <div class="container justify-between flex items-center pr-4">
        <NuxtLink to="/" class="text-xl font-extrabold">thynanami.dev</NuxtLink>
        <slot class="justify-end"/>
      </div>
      <ColorModeSwitch/>
    </div>
  </header>
</template>
