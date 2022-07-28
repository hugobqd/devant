<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage title="Devant" />
  </NuxtLayout>
</template>
