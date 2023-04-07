<script lang="ts" setup>
</script>

<template>
  <section data-comp="NavBar">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/pokemon/">Pokemons</NuxtLink>
      <NuxtLink to="/login">login</NuxtLink>
    </nav>
  </section>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}
</style>