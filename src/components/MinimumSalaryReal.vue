<script>
import { useMinimumSalaryRealStore } from '@/stores/MinimumSalaryRealStore.js'

export default {
  name: 'MinimumSalaryReal',
  data() {
    return { data: null }
  },
  mounted: function () {
    const minimumSalaryReal = useMinimumSalaryRealStore()

    this.data = {
      labels: minimumSalaryReal.years,
      datasets: [
        {
          label: 'Reais R$',
          data: minimumSalaryReal.salaries,
          borderWidth: 1
        }
      ]
    }
  }
}
</script>

<template>
  <DefaultCard :title="'Salário mínimo anual'">
    <BarChart v-if="data" :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
