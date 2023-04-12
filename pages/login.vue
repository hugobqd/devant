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

    <h2>Login</h2>
    <form
      :style="{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
      }"
    >
      <UiDvInput type="text" />
      <UiDvInput type="password" />
      <UiDvButton @click="debug('button click')" icon="🔒">
        Login
      </UiDvButton>
    </form>
  </NuxtLayout>
</template>
