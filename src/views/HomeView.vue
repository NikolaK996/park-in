<template>
  <main>
    <div v-if="headerHeight" :style="{ height: `calc(100vh - ${ headerHeight }px`}" class="relative w-full">
      <input class="absolute" type="text"/>
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
      zoom: 18,
      center: [47.313220, -1.319482],
      markers: [
        {
          latLng: [47.313220, -1.319482]
        },
        {
          latLng: [47.314210, -1.319462]
        },
      ],
      headerHeight: null
    };
  },
  created() {
    this.headerHeight = document.querySelector('header').clientHeight;
  }
};
</script>