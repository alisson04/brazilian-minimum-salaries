<script>
import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json'
import currency from 'currency.js'

export default {
  name: 'MinimumSalaryRealAverageGrowth',
  data() {
    return {
      data: {
        labels: Object.keys(this.getSalariesWithProjection()),
        datasets: [
          {
            label: ' R$',
            data: Object.values(this.getSalariesWithProjection()),
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
    },
    getGeneralAverage() {
      const percentages = this.getSalariesPercentage()
      const sum = percentages.reduce((ac, cv) => ac + cv, 0)
      const totalYearsWithoutTheFirstYear = percentages.length - 1

      return currency(sum / totalYearsWithoutTheFirstYear).value
    },
    getSalariesWithProjection() {
      const years = Object.keys(datasetSalaries).map((str) => parseInt(str))
      const nextYear = years[years.length - 1] + 1
      const genetalAverage = this.getGeneralAverage()
      let salariesProjection = { ...datasetSalaries }

      for (let i = nextYear; i <= 2060; i++) {
        const previousSalary = salariesProjection[i - 1]
        salariesProjection[i] = this.increaseByPercentage(previousSalary, genetalAverage)
      }

      return salariesProjection
    },
    increaseByPercentage(value, percentage) {
      return value + value * (percentage / 100)
    }
  }
}
</script>

<template>
  <DefaultCard
    :title="'Projeção com base não media de crescimento ' + this.getGeneralAverage() + '%'"
  >
    <BarChart :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
