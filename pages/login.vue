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
  <NuxtLayout layout="'login'">
    <NuxtLink to="/">Home</NuxtLink>

    <h2 class="text-3xl mb-6">Login</h2>
    <form class="flex flex-col gap-5 justify-center items-start">
      <DvInput type="text" />
      <DvInput type="password" />
      <DvButton @click="debug('button click')" icon="🔒" colorScheme="red">
        Login
      </DvButton>
    </form>
  </NuxtLayout>
</template>
