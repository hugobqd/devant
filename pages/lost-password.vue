<script lang="ts" setup>
import DvButton from "../components/ui/DvButton.vue";
import DvInput from "../components/ui/DvInput.vue";

useHead({
  title: "Lost password",
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
    <h2 class="text-3xl mb-6">Lost password ?</h2>
    <form class="flex flex-col gap-5 justify-center items-start">
      <DvInput type="email" />
      <DvButton @click="debug('button click')" class="w-full">
        Récupérer le mot de passe
      </DvButton>
      <NuxtLink :to="'/login'" class="text-slate-500">Se connecter</NuxtLink>
    </form>
  </NuxtLayout>
</template>
