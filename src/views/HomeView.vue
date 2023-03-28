<template>
  <main>
    <div style="height:600px; width:800px">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :use-global-leaflet="false">
        <l-tile-layer
            layer-type="base"
            name="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
      </l-map>
    </div>
  </main>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 2,
    };
  },
};
</script>
