<script setup lang="ts">
import { useAppStore } from "@/stores/app"
import { useDebounceFn } from "@vueuse/core"

const appStore = useAppStore()
const runtimeConfig = useRuntimeConfig()

const DEBOUNCE_WAIT = 500
const toggleTestBooleanDebounce = useDebounceFn(() => {
  appStore.toggleTestBoolean()
}, DEBOUNCE_WAIT)
</script>

<template>
  <div>
    <article class="flex flex-col gap-y-8">
      <h1>Playground</h1>

      <section>
        <h2 class="">Buttons & Colors</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn outline outline-1 outline-gray-500">Default w/ Outline</button>
          <button class="btn btn-primary text-white">Primary</button>
          <button class="btn btn-secondary text-white">Secondary</button>

          <button class="btn btn-accent text-white">Accent</button>
          <button class="btn btn-info text-white">Info</button>
          <button class="btn btn-neutral outline outline-1 outline-gray-500">
            Neutral w/ Outline
          </button>
          <button class="btn btn-success text-white">Success</button>
          <button class="btn btn-warning text-white">Warning</button>
          <button class="btn btn-error text-white">Error</button>
        </div>
      </section>

      <section>
        <h2>Debounce & Pinia</h2>
        <p>Test Pinia Store Value: {{ appStore.testBoolean }}</p>
        <div class="flex w-full flex-col justify-center gap-y-2">
          <button
            class="btn btn-secondary max-w-[300px] text-white"
            @click="appStore.toggleTestBoolean"
          >
            Toggle Test Boolean
          </button>
          <button
            class="btn btn-primary max-w-[300px] text-white"
            @click="toggleTestBooleanDebounce"
          >
            Toggle Test Boolean Debounce
          </button>
        </div>
      </section>

      <section>
        <h2>Runtime Config</h2>
        <p>Client variable apiBase: {{ runtimeConfig.public.apiBase }}</p>
      </section>
    </article>
  </div>
</template>
