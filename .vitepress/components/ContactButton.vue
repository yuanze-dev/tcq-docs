<template>
  <div class="button-container" @click="openCustomerService">
    <span class="button-text">联系客服</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const openCustomerService = () => {
  window.open(props.url, '_blank');
};
</script>

<style scoped>
.button-container {
  display: inline-flex;
  align-items: center;
  padding: 4px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 8px; /* 圆角 */
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影 */
}

.button-text {
  vertical-align: middle;
  font-weight: bold; /* 加粗文字 */
}

.button-container:hover {
  background-color: #45a049;
}
</style>
