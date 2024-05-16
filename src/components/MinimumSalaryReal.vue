<script>
import { useMinimumSalaryRealStore } from '@/stores/MinimumSalaryRealStore.js'
import { mapState } from 'pinia'

export default {
  name: 'MinimumSalaryReal',
  data() {
    return { data: null }
  },
  mounted: function () {
    this.data = {
      labels: this.years,
      datasets: [{ label: 'Reais R$', data: this.salaries, borderWidth: 1 }]
    }
  },
  computed: {
    ...mapState(useMinimumSalaryRealStore, ['salaries', 'years'])
  }
}
</script>

<template>
  <DefaultCard :title="'Salário mínimo anual'">
    <BarChart v-if="data" :chartId="$options.name" :data="data" />
  </DefaultCard>
</template>

<style scoped></style>
