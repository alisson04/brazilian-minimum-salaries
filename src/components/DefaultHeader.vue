<script>
export default {
  name: 'DefaultHeader',
  props: ['title']
}
</script>

<template>
  <header class="d-flex justify-content-center py-3 border-bottom bg-body-tertiary">
    <h1 class="text-center text-secondary">Salário mínimo - Histórico e projeções</h1>
  </header>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}
</style>
