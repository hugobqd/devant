// https://dev.to/codybontecou/how-to-use-vuetify-with-nuxt-3-9h9

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
  
  const VBtn = nuxtApp.vueApp.component('VBtn')
  VBtn.props.ripple.default = false;
  console.log('VBtn', VBtn)

})