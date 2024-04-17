<template>
  <SpeedInsights/>
  <body class="relative">
    <slot/>
    <div class="absolute bottom-8 right-8">
      <ColorModeSwitch/>
    </div>
  </body>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
