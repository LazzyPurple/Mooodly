<template>
  <BarChart :chart-data="chartData" />
  <div>
    <Card v-for="(item, index) in cardData" :key="index" :cardData="item" />
  </div>
</template>

<script>
import { ref } from 'vue'
import BarChart from '../components/BarChart.vue'
import Card from '../components/ReasonCard.vue'

export default {
  components: {
    BarChart,
    Card
  },
  setup() {
    const chartData = ref({
      labels: ['Mauvaise', 'Maussade', 'Neutre', 'Bonne', 'Tout va bien'],
      datasets: [
        {
          label: "Humeur de l'equipe",
          data: [8, 4, 13, 22, 6]
        }
      ]
    })
    const cardData = ref([
      { title: 'Mauvaise humeur', description: 'Raisons personelles' },
      { title: 'Humeur Maussade', description: 'En rapport au management' },
      { title: 'Bonne Humeur', description: 'En rapport à l’équipe' },
      { title: 'Humeur Neutre', description: 'En rapport au management' },
      { title: 'Bonne Humeur', description: 'En rapport au projet' }
    ])

    // You can update `datacollection` here when you fetch new data

    return { chartData, cardData }
  }
}
</script>

/*
// Dans le script setup pour faire marcher avec Strapi``
axios.get('url-de-votre-endpoint-strapi').then((response) => {
  chartData.value = {
    labels: response.data.map(item => item.label),
    datasets: [{
      label: 'Humeur',
      data: response.data.map(item => item.value)
    }]
  };
});
*/