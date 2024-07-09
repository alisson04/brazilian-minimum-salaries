<script>
export default {
  name: 'DefaultCard',
  props: ['title']
}
</script>

<template>
  <div class="card mb-3">
    <div class="card-header text-center text-secondary">
      <h4 class="m-0">{{ title }}</h4>
    </div>
    <div class="card-body"><slot></slot></div>
  </div>
</template>

<style scoped></style>
