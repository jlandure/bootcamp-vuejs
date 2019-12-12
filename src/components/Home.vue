<template>
  <div>
    <h1>Hello World from Singapore!!</h1>
    <h2>Welcome on TV Manager</h2>
    <h3>{{`${title} 🚀 nb series: ${series.length}`}}</h3>
    <serie
      v-for="serie in series"
      v-bind:key="serie.id"
      :name="serie.show.name"
      :summary="serie.show.summary"
      :image="serie.show.image"
    ></serie>
  </div>
</template>

<script>
import Serie from "./Serie";
import SerieServices from "@/services/series.services.js";
export default {
  name: "Home",
  data() {
    return {
      series: []
    };
  },
  mounted() {
    SerieServices.getSeries().then(series => {
      this.series = series;
    });
  },
  components: {
    Serie
  },
  props: {
    title: { type: String, default: 'Searching for "game"' }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

