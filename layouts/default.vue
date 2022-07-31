<script setup lang="ts">
const toto: string = "toto";
</script>

<template>
  <section>
    Default layout shared across all pages {{ toto }}
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
