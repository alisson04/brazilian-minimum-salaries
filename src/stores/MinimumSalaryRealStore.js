import { defineStore } from 'pinia'
import currency from 'currency.js'
import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json'

export const useMinimumSalaryRealStore = defineStore('MinimumSalaryReal', {
  state() {
    return {
      countSalaries: Object.values(datasetSalaries).length,
      salaries: Object.values(datasetSalaries),
      years: Object.keys(datasetSalaries),
      yearToStopPredction: 2060
    }
  },

  actions: {
    predictNextNumber(sequence) {
      // Calcula a diferença média entre os números consecutivos na sequência
      let totalDiference = 0
      for (let i = 1; i < sequence.length; i++) {
        totalDiference += sequence[i] - sequence[i - 1]
      }
      let averageDireference = totalDiference / (sequence.length - 1)

      let nextNumber = sequence[sequence.length - 1] + averageDireference

      return nextNumber
    },
    increaseByPercentage(value, percentage) {
      return value + value * (percentage / 100)
    }
  },

  getters: {
    getLastYear() {
      return this.years[this.years.length - 1]
    },
    getSalariesWithProjectionByArithmeticSequence() {
      let salaryPrediction = Object.assign({}, datasetSalaries)

      const nextYear = currency(this.getLastYear).add(1).value

      for (var i = nextYear; i <= this.yearToStopPredction; i++) {
        let predictedValue = this.predictNextNumber(Object.values(salaryPrediction))
        salaryPrediction[i] = predictedValue
      }

      return salaryPrediction
    },
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

      for (let i = nextYear; i <= this.yearToStopPredction; i++) {
        const previousSalary = salariesProjection[i - 1]
        salariesProjection[i] = this.increaseByPercentage(previousSalary, generalAverage)
      }

      return salariesProjection
    }
  }
})
