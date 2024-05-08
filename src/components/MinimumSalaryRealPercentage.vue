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

      for (let i = 1; i <= salaries.length; i++) {
        if (i === 1) {
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
  <BarChart :chartId="$options.name" :data="data" />
</template>

<style scoped></style>
