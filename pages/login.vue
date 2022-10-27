<script lang="ts" setup>
useHead({
  title: "Login",
});
definePageMeta({
  layout: "login",
});

const debug = (message: string) => {
  console.log(message);
};
</script>

<template>
  <NuxtLayout>
    <NuxtLink to="/">Home</NuxtLink>

    <h2 class="text-3xl mb-6">Login</h2>
    <form class="flex flex-col gap-5 justify-center items-start">
      <UiDvInput type="text" />
      <UiDvInput type="password" />
      <UiDvButton @click="debug('button click')" icon="🔒">
        Login
      </UiDvButton>
    </form>
  </NuxtLayout>
</template>
