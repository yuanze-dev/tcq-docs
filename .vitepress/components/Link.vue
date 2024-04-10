<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '这里是站点title'
  },
  logo: {
    type: String,
    default: '这里是站点logo'
  },
  link: {
    type: String,
    default: 'https://lusun.com'
  }
})
</script>

<template>
  <div class="main-container">
    <a :href="props.link">
      <slot>
        <div class="link-style">
          <img width="50px" :src="props.logo" alt="">
          <div class="title">{{ props.title }}</div>
        </div>
      </slot>
    </a>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  background-color: var(--card-bg-color);
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-container:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.01);
  transition: transform 0.3s;
}


.link-style {
  color: var(--text-color);
  display: flex;
  justify-content: start;
  align-items: center;
}

.title {
  margin-left: 10px;
}
</style>