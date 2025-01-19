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
    <article class="prose prose-sm lg:prose-base xl:prose-lg w-full">
      <h1>Playground</h1>

      <section>
        <h2>Runtime Config</h2>
        <p>Client variable apiBase: {{ runtimeConfig.public.apiBase }}</p>
      </section>

      <section>
        <h2>Buttons & Colors</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn outline outline-1 outline-gray-500">Default w/ Outline</button>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-neutral outline outline-1 outline-gray-500">
            Neutral w/ Outline
          </button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
        </div>
      </section>

      <section>
        <h2>Debounce & Pinia</h2>
        <p>Test Pinia Store Value: {{ appStore.testBoolean }}</p>
        <div class="flex w-full flex-col justify-center gap-y-2">
          <button
            class="btn btn-secondary max-w-[300px]"
            @click="appStore.toggleTestBoolean"
          >
            Toggle Test Boolean
          </button>
          <button
            class="btn btn-primary max-w-[300px]"
            @click="toggleTestBooleanDebounce"
          >
            Toggle Test Boolean Debounce
          </button>
        </div>
      </section>
    </article>
  </div>
</template>
