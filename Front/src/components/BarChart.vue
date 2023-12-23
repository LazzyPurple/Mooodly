<template>
  <div class="chart-container">
    <bar-chart :chart-data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import { Bar, mixins } from 'vue-chart.js';
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 500px; /* or the height you want */
}
</style>
