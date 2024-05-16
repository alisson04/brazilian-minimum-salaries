<script>
import { mapState } from 'pinia'
import { useMinimumSalaryRealStore } from '@/stores/MinimumSalaryRealStore.js'

export default {
  name: 'MinimumSalaryRealAverageGrowth',
  data() {
    return { data: null }
  },
  mounted: function () {
    this.data = {
      labels: Object.keys(this.getSalariesWithProjection),
      datasets: [
        {
          label: ' R$',
          data: Object.values(this.getSalariesWithProjection),
          borderWidth: 1
        }
      ]
    }
  },
  computed: {
    ...mapState(useMinimumSalaryRealStore, [
      'getSalariesWithProjection',
      'getAveragePercentageGrowth'
    ])
  }
}
</script>

<template>
  <DefaultCard
    :title="'Projeção com base na média de crescimento ' + this.getAveragePercentageGrowth + '%'"
  >
    <BarChart v-if="data" :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
