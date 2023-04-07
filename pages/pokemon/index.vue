<script lang="ts" setup>
definePageMeta({
  layout: "app",
});

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

const result_quantity = 15
const page = ref(0)

const offset = computed(()=> result_quantity * page.value)
const uri = computed(()=> {
  return `https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${result_quantity}`
})
const fetch = useFetch<PokemonListResponse>(uri, {key: ''+page})
const { data, pending } = fetch

const getIdFromUrl = (url: string): number | null => {
  const match = url.match(/\/(\d+)\/?$/)
  if (match) {
    return parseInt(match[1])
  } else {
    return null
  }
}

</script>

<template>
  <NuxtLayout>
    <h1>Pokémons</h1>
    <div v-if="pending">Loading...</div>
    <article v-for="result in data?.results" :key="result.url">
      <NuxtLink :to="'/pokemon/'+getIdFromUrl(result.url)">
        <h3>{{ result.name }}</h3>
      </NuxtLink>
    </article>
    <button @click="page--" :disabled="page === 0">Prev</button>
    <span>{{ page + 1 }}</span>
    <button @click="page++">Next</button>
  </NuxtLayout>
</template>