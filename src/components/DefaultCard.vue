<script>
export default {
  name: 'DefaultCard',
  props: ['title']
}
</script>

<template>
  <div class="card">
    <div class="card-header text-center">{{ title }}</div>
    <div class="card-body"><slot></slot></div>
  </div>
</template>

<style scoped></style>
