<template>
  <div class="relative">
    <div class="flex flex-col h-screen">
      <slot/>
    </div>
    <div class="absolute bottom-8 right-8">
      <ColorModeSwitch/>
    </div>
  </div>
</template>
