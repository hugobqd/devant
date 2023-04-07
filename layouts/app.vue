<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
</script>

<template>
  <section data-layout="app">
    <NavBar/>
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
</style>
