<script>
import Chart from 'chart.js/auto'

export default {
  props: ['data'],
  mounted() {
    const ctx = document.getElementById('barChart')

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
  <canvas id="barChart"></canvas>
</template>

<style scoped></style>
