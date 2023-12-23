<template>
    <!-- ... -->
    <bar-chart :chart-data="datacollection" />
    <!-- ... -->
  </template>
  
  <script>
  import BarChart from '../components/BarChart.vue';
  
  export default {
    components: {
      BarChart
    },
    data() {
      return {
        datacollection: null
      };
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        // Exemple de données
        this.datacollection = {
          labels: ['Mauvaise', 'Neutre', 'Bonne'],
          datasets: [
            {
              label: 'Humeur',
              backgroundColor: ['#f87979', '#7acbf9', '#8ef779'],
              data: [5, 10, 15] // Remplacer par les données réelles
            }
          ]
        };
      }
    }
  }
  </script>
  