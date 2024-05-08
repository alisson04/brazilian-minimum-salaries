<script>
import Chart from 'chart.js/auto'

export default {
  props: ['chartId', 'data'],
  mounted() {
    const ctx = document.getElementById(this.chartId)

    new Chart(ctx, {
      type: 'bar',
      data: this.data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}
</script>

<template>
  <canvas :id="chartId"></canvas>
</template>

<style scoped></style>
