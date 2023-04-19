<template>
  <l-marker
    ref="marker"
    :lat-lng="location.latLng"
    :name="location.name"
    @popupclose="closePopupHandler"
  >
    <l-popup>
      <span v-if="location.name" class="block text-lg font-bold mb-1">{{ location.name }}</span>
      <span v-if="location.address" class="block mb-1">Address: {{ location.address }}</span>
      <span v-if="location.status" class="block">
        E-charging:
        <span :class="{ 'text-primary': location.status === 'Available' }">
          {{ location.status }}
        </span>
      </span>
    </l-popup>
  </l-marker>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'
import { LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import { useMapStore } from '@/stores/map/map'

const props = defineProps({
  location: {
    type: Object,
    required: true,
    default: () => {}
  }
})
const mapStore = useMapStore()
const marker = ref(null)

function closePopupHandler() {
  mapStore.locations.find((item) => item.id === props.location.id).active = false
}

watch(
  props.location,
  () => {
    if (props.location.active) {
      marker.value.leafletObject.openPopup()
    }
  },
  { deep: true }
)
</script>

<style scoped></style>