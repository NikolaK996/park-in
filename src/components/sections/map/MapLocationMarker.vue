<template>
  <l-marker :lat-lng="location.latLng" :name="location.name">
    <l-icon :icon-size="[35, 35]" icon-url="/src/assets/icons/charger.png" />
    <l-popup>
      <span v-if="location.name" class="block text-lg font-bold mb-1">{{ location.name }}</span>
      <span v-if="location.address" class="block mb-1"
        >{{ $t('map.sideBar.marker.address') }}: {{ location.address }}</span
      >
      <span v-if="location.country" class="block mb-1"
        >{{ $t('map.sideBar.marker.country') }}: {{ location.country }}</span
      >
      <span v-if="location.status" class="block mb-1">
        {{ $t('map.sideBar.marker.status') }}:
        <span :class="{ 'text-primary': location.status === 'Available' }">
          {{ location.status }}
        </span>
      </span>
      <span
        class="text-primary underline cursor-pointer"
        @click="mapDirectionsStore.setDirection(location.latLng[0], location.latLng[1], false)"
      >
        Directions
      </span>
    </l-popup>
  </l-marker>
</template>

<script setup>
import { defineProps } from 'vue'

import { LIcon, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'

import { useMapDirectionsStore } from '@/stores/map/directions/mapDirectionsStore'

defineProps({
  location: {
    type: Object,
    required: true,
    default: () => {}
  }
})
const mapDirectionsStore = useMapDirectionsStore()
</script>

<style scoped></style>
