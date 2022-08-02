// https://dev.to/codybontecou/how-to-use-vuetify-with-nuxt-3-9h9

import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#f2e81f',
    'primary-darken-1': '#e39517',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
  
  const VBtn = nuxtApp.vueApp.component('VBtn')
  console.log(VBtn)
  VBtn.props.ripple.default = false;

})