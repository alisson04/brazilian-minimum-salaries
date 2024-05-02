<script setup>
  import Chart from 'chart.js/auto';
  import BarChart from '@/components/charts/BarChart.vue'
  import datasetSalaries from '@/assets/datasets/minimumSalariesReal.json';

  const data = {
    labels: Object.keys(datasetSalaries),
    datasets: [{
      label: 'Reais R$',
      data: Object.values(datasetSalaries),
      borderWidth: 1
    }]
  };
</script>

<template>
  <BarChart :data="data" />
</template>

<style scoped></style>
