import { ref } from 'vue'

export function useMapSidebar() {
  const sideBarVisible = ref(false)

  function toggleSidebar() {
    sideBarVisible.value = !sideBarVisible.value
  }

  return {
    sideBarVisible,
    toggleSidebar
  }
}