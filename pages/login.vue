<script lang="ts" setup>
import DvButton from "../components/ui/DvButton.vue";
import DvInput from "../components/ui/DvInput.vue";

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
      <DvInput type="text" />
      <DvInput type="password" />
      <DvButton @click="debug('button click')" icon="🔒">
        Login
      </DvButton>
    </form>
  </NuxtLayout>
</template>
