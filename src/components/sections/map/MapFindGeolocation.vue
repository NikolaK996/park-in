<template>
  <l-control>
    <button
      class="p-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-md shadow-md"
      @click="locateUser"
    >
      <IconMarker />
    </button>
  </l-control>
</template>

<script setup>
import { LControl } from '@vue-leaflet/vue-leaflet'

import { toast } from 'vue3-toastify'

import IconMarker from '@/components/base/icons/IconsMarker.vue'
import { useGeolocationStore } from '@/stores/geolocation/geolocationStore'
import { useMapStore } from '@/stores/map/mapStore'

const geolocationStore = useGeolocationStore()
const mapStore = useMapStore()

function locateUser() {
  geolocationStore.resume()

  if (geolocationStore.error) {
    toast.warn(
      'Please allow location in your browser to enable live tracking feature and overall better experience.',
      {
        multiple: false
      }
    )
  }

  if (geolocationStore.latitude && geolocationStore.longitude) {
    mapStore.centerMap(geolocationStore.latitude, geolocationStore.longitude)
    mapStore.setZoom(18)
  }
}
</script>
