import { defineStore } from 'pinia'
import currency from 'currency.js'
import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json'

export const useMinimumSalaryRealStore = defineStore('MinimumSalaryReal', {
  state() {
    return {
      salaries: Object.values(datasetSalaries),
      countSalaries: Object.values(datasetSalaries).length,
      years: Object.keys(datasetSalaries)
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
      const percentages = this.getSalaryGrowthPercentages()
      const sum = percentages.reduce((ac, cv) => currency(ac).add(cv).value, 0)
      const countPercentagesWithoutFirst = percentages.length - 1

      return currency(sum / countPercentagesWithoutFirst).value
    }
  }
})
