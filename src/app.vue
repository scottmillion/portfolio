<script setup lang="ts"></script>
<template>
  <div class="@container relative flex h-[100dvh] w-full flex-col items-center overflow-auto">
    <div class="mb-6 flex items-center justify-center border-b border-b-gray-200 py-2">
      <div class="flex gap-x-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/playground">Playground</NuxtLink>
      </div>
    </div>
    <!-- TODO: make default and other layouts -->
    <div
      class="bg-neutral @4xl:w-[800px] mb-6 flex h-full w-full flex-col overflow-scroll rounded p-4"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>
