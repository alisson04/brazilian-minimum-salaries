import { defineStore } from 'pinia'
import currency from 'currency.js'
import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json'

export const useMinimumSalaryRealStore = defineStore('MinimumSalaryReal', {
  state() {
    return {
      countSalaries: Object.values(datasetSalaries).length,
      salaries: Object.values(datasetSalaries),
      years: Object.keys(datasetSalaries)
    }
  },

  actions: {
    increaseByPercentage(value, percentage) {
      return value + value * (percentage / 100)
    }
  },

  getters: {
    getSalaryGrowthPercentages() {
      let percentages = []

      for (let i = 0; i < this.countSalaries; i++) {
        const isFirstPositionOfSalaryWithoutPreviusToCompare = i === 0

        if (isFirstPositionOfSalaryWithoutPreviusToCompare) {
          percentages.push(0)
          continue
        }

        const currentYearSalary = this.salaries[i]
        const previusYearSalary = this.salaries[i - 1]
        const growthPercentage = currency(currentYearSalary)
          .subtract(previusYearSalary)
          .divide(previusYearSalary)
          .multiply(100).value

        percentages.push(growthPercentage)
      }

      return percentages
    },
    getAveragePercentageGrowth() {
      const percentages = this.getSalaryGrowthPercentages
      const sum = percentages.reduce((ac, cv) => currency(ac).add(cv).value, 0)
      const countPercentagesWithoutFirst = percentages.length - 1

      return currency(sum).divide(countPercentagesWithoutFirst).value
    },
    getSalariesWithProjection() {
      const IntYears = this.years.map((str) => parseInt(str))
      const nextYear = IntYears[IntYears.length - 1] + 1
      const generalAverage = this.getAveragePercentageGrowth
      let salariesProjection = { ...datasetSalaries }

      for (let i = nextYear; i <= 2060; i++) {
        const previousSalary = salariesProjection[i - 1]
        salariesProjection[i] = this.increaseByPercentage(previousSalary, generalAverage)
      }

      return salariesProjection
    }
  }
})
