<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const apiBaseUrlTest = runtimeConfig.public.apiBase
</script>
<template>
  <div>
    <div class="mb-4 border-b border-b-gray-300">
      <div>
        <button @click="navigateTo('/')">Navigate to /</button>

        <button @click="navigateTo('/playground')">Navigate to /playground</button>
      </div>
      <div>
        clientSide:
        {{ apiBaseUrlTest }}
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
