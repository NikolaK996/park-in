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
import IconMarker from '@/components/base/icons/IconsMarker.vue'
import { useMapStore } from '@/stores/map/mapStore'
import { toast } from 'vue3-toastify'

const mapStore = useMapStore()

function locateUser() {
  if (mapStore.userGeolocation) {
    mapStore.searchAddress(mapStore.userGeolocation)
  } else {
    toast.error(
      'Please allow your browser location so we can show results around you. In case of anxiety, use manually search.',
      {
        multiple: false
      }
    )
  }
}
</script>
