<script>
import Chart from 'chart.js/auto'

export default {
  props: ['chartId', 'data'],
  watch: {
    data() {
      if (this.data) {
        const ctx = document.getElementById(this.chartId)

        new Chart(ctx, {
          type: 'bar',
          data: this.data,
          options: {
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
          }
        })
      }
    }
  }
}
</script>

<template>
  <div class="chart-container" style="position: relative; min-height: 30vh">
    <canvas :id="chartId"></canvas>
  </div>
</template>

<style scoped></style>
