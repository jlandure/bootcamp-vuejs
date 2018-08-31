<template>
    <div>
        <h1>Hello my favorites!</h1>
        <serie @changeFavorite="changeFavorite" class="serie" :serieData="serie" v-for="serie in series" v-bind:key="serie.id" />

    </div>
</template>

<script>
// @ is an alias to /src
import Serie from "@/components/Serie.vue";
import favoritesService from "@/services/favorites.service";

export default {
  name: "home",
  data() {
    return {
      series: []
    };
  },
  components: {
    Serie
  },
  mounted() {
    this.series = favoritesService.getFavorites();
  },
  methods: {
    changeFavorite(serie) {
      favoritesService.changeFavorite(serie);
    }
  }
};
</script>

<style scoped>
.serie {
  border-radius: 6px;
  border: 2px solid #f5f5f5;
  padding: 1.5rem;
}
</style>
