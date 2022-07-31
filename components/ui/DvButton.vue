<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button type="button">
    <span v-if="props.icon" style="margin-right: 0.5em;">{{ props.icon }}</span>
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: dodgerblue;
  border-radius: 6px;
  cursor: pointer;
}

button:hover,
button:focus-visible {
  background-color: blue;
}
</style>
