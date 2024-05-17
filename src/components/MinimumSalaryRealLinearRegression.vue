<script>
import { useMinimumSalaryRealStore } from '@/stores/MinimumSalaryRealStore.js'
import { mapState } from 'pinia'

export default {
  name: 'MinimumSalaryRealLinearRegression',
  data() {
    return { data: null }
  },
  mounted: function () {
    this.data = {
      labels: Object.keys(this.getSalariesWithProjectionByLinearRegression),
      datasets: [
        {
          label: 'Crescimento %',
          data: this.getSalariesWithProjectionByLinearRegression,
          borderWidth: 1
        }
      ]
    }
  },
  computed: {
    ...mapState(useMinimumSalaryRealStore, ['years', 'getSalariesWithProjectionByLinearRegression'])
  }
}
</script>

<template>
  <DefaultCard :title="'Projeção com regressão linear'">
    <BarChart :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
