<script lang="ts" setup>
useHead({
  title: "Pokemons",
});
definePageMeta({
  layout: "app",
});

interface Pokemon {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
}
const { id } = useRoute().params
const uri = 'https://pokeapi.co/api/v2/pokemon/' + id

const { data } = await useFetch<Pokemon>(uri)

</script>

<template>
  <NuxtLayout>
    <div v-if="!!data">
      <h1>{{ data.name }}</h1>
      <img :src="data.sprites.other['official-artwork'].front_default" />
      <ul v-if="!!data.types.length">
        <li 
          :key="type.type.name"
          v-for="type in data.types" 
        >
          {{ type.type.name }}
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>
