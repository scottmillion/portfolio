<script setup lang="ts">
import { STANDARD_LEVELS_CLASSES } from "@/constants"
import { type StandardLevel } from "@/types"

const props = defineProps<{
  disabled?: boolean
  hasOutline?: boolean
  level: StandardLevel
}>()

defineEmits(["buttonClicked"])
</script>

<template>
  <button
    class="rounded-full px-8 py-4 hover:brightness-75 active:text-gray-800 active:brightness-125"
    :class="[
      STANDARD_LEVELS_CLASSES[props.level],
      hasOutline ? 'outline outline-1 outline-gray-500' : '',
    ]"
    @click="$emit('buttonClicked')"
  >
    <slot />
  </button>
</template>
