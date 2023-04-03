<template>
  <svg-icon :path="mdiMenu" type="mdi"/>
</template>

<script>
import SvgIcon from "vue3-icon"
import {mdiMenu} from "@mdi/js"

export default {
  name: "IconsHamburger",
  components: {SvgIcon},
  setup() {
    return {
      mdiMenu,
    }
  }
}
</script>