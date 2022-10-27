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
    class="DvButton text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    :class="`bg-${colorScheme}-600`"
  >
    <span v-if="!!props.icon" style="margin-right: 0.5em;">{{
      props.icon
    }}</span>
    <slot />
  </button>
</template>
