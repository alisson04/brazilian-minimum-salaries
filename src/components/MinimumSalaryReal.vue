<script>
import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json'

export default {
  name: 'App',
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
  123
  <BarChart :data="data" />
</template>

<style scoped></style>
