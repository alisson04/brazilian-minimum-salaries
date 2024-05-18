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
          label: 'Crescimento %',
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
  <DefaultCard :title="'Projeção com regressão linear'">
    <BarChart :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
