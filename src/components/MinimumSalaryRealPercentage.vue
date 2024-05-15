<script>
import { useMinimumSalaryRealStore } from '@/stores/MinimumSalaryRealStore.js'
import { mapState } from 'pinia'

export default {
  name: 'MinimumSalaryRealPercentage',
  data() {
    return { data: null }
  },
  mounted: function () {
    this.data = {
      labels: this.years,
      datasets: [
        {
          label: 'Crescimento %',
          data: this.getSalaryGrowthPercentages,
          borderWidth: 1
        }
      ]
    }
  },
  computed: {
    ...mapState(useMinimumSalaryRealStore, ['salaries', 'years', 'getSalaryGrowthPercentages'])
  }
}
</script>

<template>
  <DefaultCard :title="'Crescimento em relação ao ano anterior'">
    <BarChart v-if="data" :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
