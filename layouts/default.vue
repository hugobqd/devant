<script lang="ts" setup>
import DvButton from '~~/components/ui/DvButton.vue';
import { useTheme } from 'vuetify'
const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'dark'
  console.log(theme.global.name.value)
}
</script>

<template>
  <section>
    <pre>Default layout</pre>
    <DvButton @click="toggleTheme">{{theme.global.current.value.dark ? '🌓 dark' : '🌗 light'}}</DvButton>
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  border: 1px solid #ccc;
}
.slot-wrapper {
  padding: 20px;
  border: 1px solid black;
}
</style>
