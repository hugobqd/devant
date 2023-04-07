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

    <h2 class="text-3xl mb-6">Login</h2>
    <form class="flex flex-col gap-5 justify-center items-start">
      <DvInput type="text" />
      <DvInput type="password" />
      <DvButton @click="debug('button click')" icon="🔒" colorScheme="red" class="w-full">
        Login
      </DvButton>
      <NuxtLink :to="'/lost-password'" class="text-slate-500">Mot de passe perdu ?</NuxtLink>
    </form>
  </NuxtLayout>
</template>
