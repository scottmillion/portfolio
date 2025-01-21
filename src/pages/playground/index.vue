<script setup lang="ts">
import { useAppStore } from "@/stores/app"
import { useDebounceFn } from "@vueuse/core"
import StandardButton from "@/components/shared/buttons/StandardButton.vue"
import { STANDARD_LEVELS } from "@/constants"

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
          <StandardButton
            hasOutline
            :level="STANDARD_LEVELS.default"
          >
            Default w/ Outline
          </StandardButton>

          <StandardButton :level="STANDARD_LEVELS.primary"> Primary </StandardButton>

          <StandardButton :level="STANDARD_LEVELS.secondary"> Secondary </StandardButton>

          <StandardButton :level="STANDARD_LEVELS.accent"> Accent </StandardButton>

          <StandardButton :level="STANDARD_LEVELS.info"> Info </StandardButton>

          <StandardButton
            hasOutline
            :level="STANDARD_LEVELS.neutral"
          >
            Neutral w/ Outline
          </StandardButton>

          <StandardButton :level="STANDARD_LEVELS.success"> Success </StandardButton>

          <StandardButton :level="STANDARD_LEVELS.warning"> Warning </StandardButton>

          <StandardButton :level="STANDARD_LEVELS.error"> Error </StandardButton>
        </div>
      </section>

      <section>
        <h2>Debounce & Pinia</h2>
        <p>Test Pinia Store Value: {{ appStore.testBoolean }}</p>
        <div class="flex max-w-[400px] flex-col justify-center gap-y-2">
          <StandardButton
            :level="STANDARD_LEVELS.secondary"
            @button-clicked="appStore.toggleTestBoolean"
          >
            Toggle Test Boolean
          </StandardButton>

          <StandardButton
            :level="STANDARD_LEVELS.primary"
            @button-clicked="toggleTestBooleanDebounce"
          >
            Toggle Test Boolean Debounce
          </StandardButton>
        </div>
      </section>

      <section>
        <h2>Runtime Config</h2>
        <p>Client variable apiBase: {{ runtimeConfig.public.apiBase }}</p>
      </section>
    </article>
  </div>
</template>
