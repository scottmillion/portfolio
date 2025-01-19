<script setup lang="ts">
import { useAppStore } from "@/stores/app"

const appStore = useAppStore()
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div>
    <h1>Playground</h1>

    <div>Client variable apiBase: {{ runtimeConfig.public.apiBase }}</div>
    <div>Test Pinia Store Value: {{ appStore.testBoolean }}</div>
    <button @click="appStore.toggleTestBoolean()">Toggle Test Boolean</button>
  </div>
</template>
