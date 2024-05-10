<script>
import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json'

export default {
  name: 'MinimumSalaryRealPercentage',
  data() {
    return {
      data: {
        labels: Object.keys(datasetSalaries),
        datasets: [
          {
            label: 'Crescimento %',
            data: this.getSalariesPercentage(),
            borderWidth: 1
          }
        ]
      }
    }
  },
  methods: {
    getSalariesPercentage() {
      let percentages = []
      const salaries = Object.values(datasetSalaries)

      for (let i = 0; i < salaries.length; i++) {
        if (i === 0) {
          percentages.push(0)
        } else {
          const percentage = ((salaries[i] - salaries[i - 1]) / salaries[i - 1]) * 100

          percentages.push(percentage)
        }
      }

      return percentages
    }
  }
}
</script>

<template>
  <DefaultCard :title="'Crescimento em relação ao ano anterior'">
    <BarChart :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
