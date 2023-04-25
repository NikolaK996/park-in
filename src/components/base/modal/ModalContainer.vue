<template>
  <section
    class="fixed backdrop-blur-sm flex items-center justify-center top-0 left-0 w-full h-full z-6"
    @click="emit('close')"
  >
    <div class="modal-content bg-white shadow-xl" @click.stop>
      <slot />
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['close'])
</script>
