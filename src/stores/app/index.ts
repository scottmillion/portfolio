import { defineStore } from "pinia"

export const useAppStore = defineStore("app", () => {
  const testBoolean = ref(false)

  const toggleTestBoolean = () => {
    testBoolean.value = !testBoolean.value
  }

  return {
    testBoolean,

    toggleTestBoolean,
  }
})
