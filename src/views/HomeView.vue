<template>
  <main>
    <div style="height:600px; width:800px">
      <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
        <l-tile-layer
            layer-type="base"
            name="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <map-location-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker.latLng"/>
      </l-map>
    </div>
  </main>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";
import MapLocationMarker from "@/components/base/map/MapLocationMarker.vue";

export default {
  components: {
    LMap,
    LTileLayer,
    MapLocationMarker
  },
  data() {
    return {
      zoom: 16,
      center: [47.313220, -1.319482],
      markers: [
        {
          latLng: [47.313220, -1.319482]
        },
        {
          latLng: [47.314210, -1.319462]
        },
      ]
    };
  },
};
</script>
