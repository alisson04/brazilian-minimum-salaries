<script>
export default {
  name: 'App'
}
</script>

<template>
  <main class="container-fluid pt-3">
    <DefaultCard :title="'Salário mínimo (Real R$)'">
      <div class="row">
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
    </DefaultCard>
  </main>
</template>
