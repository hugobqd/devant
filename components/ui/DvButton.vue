<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  colorScheme: {
    type: String,
    default: "indigo",
  },
});
</script>

<template>
  <button
    type="button"
    class="DvButton text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
  >
    <span v-if="!!props.icon" class="mr-2 text-lg">{{
      props.icon
    }}</span>
    <slot />
  </button>
</template>
