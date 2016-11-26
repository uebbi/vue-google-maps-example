import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCDoZwHDtJ0GKx-U9Y-SZwgL_5vNDeDBKs'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
