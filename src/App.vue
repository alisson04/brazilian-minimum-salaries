<script>
export default {
  name: 'App',
  data() {
    return { resizeKey: 0 }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.resizeKey += 1
    }
  }
}
</script>

<template>
  <main class="container-fluid pt-3">
    <h1 class="text-center text-secondary">Salário mínimo - Histórico e projeções</h1>
    <hr class="my-4" />
    <div :key="resizeKey" class="row">
      <div class="col-sm-12 col-lg-6 p-2">
        <MinimumSalaryReal />
      </div>
      <div class="col-sm-12 col-lg-6 p-2">
        <MinimumSalaryRealPercentage />
      </div>
      <div class="col-sm-12 col-lg-6 p-2">
        <MinimumSalaryRealAverageGrowth />
      </div>
      <div class="col-sm-12 col-lg-6 p-2">
        <MinimumSalaryRealArithmeticSequence />
      </div>
    </div>
  </main>
</template>
