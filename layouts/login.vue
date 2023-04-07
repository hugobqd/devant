<script setup lang="ts"></script>

<template>
  <section data-layout="login">
    <pre>Login layout</pre>
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  border: 1px solid #ccc;
}
.slot-wrapper {
  padding: 20px;
  border: 1px solid red;
}
</style>
