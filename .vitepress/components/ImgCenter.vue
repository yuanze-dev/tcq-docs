<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
</style>