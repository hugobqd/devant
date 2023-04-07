<!-- Layout du perron ('porch' : connexion, login, mot de passe perdu, etc) -->

<script setup lang="ts"></script>

<template>
  <section data-layout="login" class="h-screen bg-slate-200 grid lg:grid-cols-2">
    
    <div class="center grid place-items-center relative">
      <header class="absolute top-4 left-4">
        <NuxtLink class="font-semibold text-teal-600" to="/">Home</NuxtLink>
      </header>
      <div data-part="layout-content" class="border border-slate-300 p-5 rounded-xl bg-white">
        <slot></slot>
      </div>
    </div>
    <div class="bg-indigo-500 grid place-items-center">
      <div class="text-9xl">🐥</div>
    </div>
  </section>
</template>
