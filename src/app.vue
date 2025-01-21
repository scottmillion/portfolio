<script setup lang="ts">
import { ROUTE_NAMES } from "@/constants"

const NAV_ITEM_DEFAULT_CLASSLIST = "px-2 pb-2"
const NAV_ITEM_ACTIVE_CLASSLIST = "border-b border-b-gray-200"
const NAV_LINK_INACTIVE_CLASSLIST = "hover:text-neutral-950"

const router = useRouter()
const currentRoute = computed(() => router.currentRoute.value.name)
</script>
<template>
  <div
    class="@container relative flex h-[100dvh] w-full flex-col items-center overflow-auto bg-gradient-to-br from-indigo-900 to-indigo-700"
  >
    <nav
      class="@2xl:text-xl @lg:text-lg @2xl:mb-3 mx-2 mb-2 mt-4 flex items-center justify-center text-base"
    >
      <ul class="flex gap-x-4">
        <li
          :class="[
            NAV_ITEM_DEFAULT_CLASSLIST,
            currentRoute === ROUTE_NAMES.ROOT ? NAV_ITEM_ACTIVE_CLASSLIST : '',
          ]"
        >
          <NuxtLink
            :class="[currentRoute === ROUTE_NAMES.ROOT ? '' : NAV_LINK_INACTIVE_CLASSLIST]"
            to="/"
            >Home</NuxtLink
          >
        </li>
        <li
          :class="[
            NAV_ITEM_DEFAULT_CLASSLIST,
            currentRoute === ROUTE_NAMES.PLAYGROUND ? NAV_ITEM_ACTIVE_CLASSLIST : '',
          ]"
        >
          <NuxtLink
            :class="[currentRoute === ROUTE_NAMES.PLAYGROUND ? '' : NAV_LINK_INACTIVE_CLASSLIST]"
            to="/playground"
            >Playground</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <!-- TODO: make default and other layouts -->
    <div
      class="@4xl:w-[800px] @5xl:w-[1000px] @4xl:border-x @4xl:rounded mb-6 flex h-full w-full flex-col overflow-auto border-y border-indigo-500 bg-neutral-950 p-8 shadow-[2px_2px_5px_2px_rgba(0,_0,_0,_0.1)]"
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
