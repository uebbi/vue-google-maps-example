<template>
  <div>
    <div style="width: 100%; height: 300px">
      <google-map :center="center" :zoom="10" @rightclick="newMarker">
         <map-marker
           :position="m.position"
           :opacity="m.opacity"
           :draggable="m.draggable"
           @position_changed="updMarker(m, $event)"
		   @dragend="logMarker(m)"
           v-for="m in markers"
           >
       </map-marker>
      </google-map>
    </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  data () {
    return {
      markers: [],
      center: { lat: -19.8934596, lng: -44.0586543 }
    }
  },
  methods: {
    newMarker (mouseArgs) {
      const createdMarker = this.addMarker()
      createdMarker.position.lat = mouseArgs.latLng.lat()
      createdMarker.position.lng = mouseArgs.latLng.lng()
      console.log(createdMarker.position.lat, createdMarker.position.lng)
    },
    addMarker () {
      this.markers.push({
        position: { lat: 48.8538302, lng: 2.2982161 },
        draggable: true,
        enabled: true
      })
      return this.markers[this.markers.length - 1]
    },
    updMarker (m, event) {
      m.position = {
        lat: event.lat(),
        lng: event.lng()
      }
    },
    logMarker (m) {
      console.log(m.position.lat, m.position.lng)
    }
  },
  components: {
    'googleMap': VueGoogleMaps.Map,
    'MapMarker': VueGoogleMaps.Marker
  }
}
</script>

<style></style>
