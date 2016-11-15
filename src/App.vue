<template>
  <div id="app">
    <div style="width: 100%; height: 300px">
      <google-map :center="center" :zoom="10" @g-rightclick="newMarker">
         <map-marker
           :position.sync="m.position"
           :opacity="m.opacity"
           :draggable.sync="m.draggable"
           v-for="m in markers"
           >
       </map-marker>
      </google-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      markers: [],
      center: { lat: -19.8934596, lng: -44.0586543 }
    }
  },
  mounted () {
    VueGoogleMap.load({
      'key': 'AIzaSyCDoZwHDtJ0GKx-U9Y-SZwgL_5vNDeDBKs'
    })
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
    }
  },
  components: {
    'googleMap': VueGoogleMap.Map,
    'MapMarker': VueGoogleMap.Marker
  }
}
</script>

<style></style>
