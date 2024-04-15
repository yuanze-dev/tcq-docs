<template>
  <div class="imgLayout">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped>
.imgLayout {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
</style>