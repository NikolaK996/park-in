<template>
  <l-marker :lat-lng="latLng"/>
</template>

<script>
import {LMarker} from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapLocationMarker",
  components: {
    LMarker
  },
  props: {
    latLng: {
      type: Array,
      required: true,
      default: () => [0, 0]
    }
  }
}
</script>

<style scoped>

</style>