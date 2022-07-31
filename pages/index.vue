<script lang="ts" setup>
useHead({
  title: "Home",
});
</script>

<template>
  <NuxtLayout>
    <h1>Welcome home!</h1>
    <NuxtLink to="/login">Login</NuxtLink>
  </NuxtLayout>
</template>
