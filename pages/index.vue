<script lang="ts" setup>
useHead({
  title: "Home",
});
</script>

<template>
  <NuxtLayout>
    <h1 class="text-xl mb-3">Welcome home 🏡</h1>
    <NuxtLink to="/login" class="text-teal-600">Login</NuxtLink>
    <NuxtLink to="/pokemon/">Pokemon</NuxtLink>
  </NuxtLayout>
</template>
