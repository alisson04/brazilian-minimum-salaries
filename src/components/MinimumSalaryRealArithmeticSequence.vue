<script>
import { useMinimumSalaryRealStore } from '@/stores/MinimumSalaryRealStore.js'
import { mapState } from 'pinia'

export default {
  name: 'MinimumSalaryRealArithmeticSequence',
  data() {
    return { data: null }
  },
  mounted: function () {
    this.data = {
      labels: Object.keys(this.getSalariesWithProjectionByArithmeticSequence),
      datasets: [
        {
          label: 'Reais R$',
          data: this.getSalariesWithProjectionByArithmeticSequence,
          borderWidth: 1
        }
      ]
    }
  },
  computed: {
    ...mapState(useMinimumSalaryRealStore, [
      'years',
      'getSalariesWithProjectionByArithmeticSequence'
    ])
  }
}
</script>

<template>
  <DefaultCard :title="'Salário mínimo - Projeção por sequência aritmetica'">
    <BarChart :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
