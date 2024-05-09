<script>
import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json'

export default {
  name: 'MinimumSalaryReal',
  data() {
    return {
      data: {
        labels: Object.keys(datasetSalaries),
        datasets: [
          {
            label: 'Reais R$',
            data: Object.values(datasetSalaries),
            borderWidth: 1
          }
        ]
      }
    }
  }
}
</script>

<template>
  <DefaultCard :title="'Salário Mínimo R$'">
    <BarChart :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
