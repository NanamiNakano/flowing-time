<template>
  <div class="flex flex-col h-screen">
    <!-- 大屏幕上的布局 -->
    <div class="hidden lg:flex flex-grow">
      <div class="w-1/2 max-w-2xl p-8 mx-auto flex justify-center items-center">
        <div class="h-full flex justify-center items-center">
          <MainAvatar/>
        </div>
      </div>

      <div class="w-1/2 p-8 overflow-y-auto flex justify-start items-center">
        <div class="text-left">
          <h1 class="text-4xl font-bold mb-4">&lt;Nanami Nakano/&gt;</h1>
          <div class="py-4">
            <SocialProfileLinks/>
          </div>
          <p class="text-lg mb-4">
            A few word about you.
          </p>
          <PageNavigations/>
        </div>
      </div>
    </div>

    <!-- 小屏幕上的布局 -->
    <div class="lg:hidden flex-grow">
      <div class="h-2/5 p-8 mx-auto flex justify-center items-center">
        <div class="w-80 flex justify-center items-center">
          <MainAvatar/>
        </div>
      </div>

      <div class="p-8 overflow-y-auto">
        <h1 class="text-4xl font-bold mb-4 mt-4">&lt;Nanami Nakano/&gt;</h1>
        <div class="py-2">
          <SocialProfileLinks/>
        </div>
        <p class="text-lg mb-4 mt-4">
          A few word about you.
        </p>
        <PageNavigations/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
h1 {
  font-family: monaco, Consolas, "Lucida Console", monospace;
}
</style>
