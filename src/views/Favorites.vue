<template>
    <div>
        <h1>Hello my favorites!</h1>
        <br>
        <serie @changeFavorite="changeFavorite" class="serie" :serieData="serie" v-for="serie in series" v-bind:key="serie.id" />
        <section class="hero is-primary is-bold" v-if="series.length ===0">
        <div class="hero-body">
            <div class="container">
            <h1 class="title">
                Hey, no favorite!
            </h1>
            <h2 class="subtitle">
                Here is a unicorn!
            </h2>
            <img src="https://i.pinimg.com/originals/81/7d/c1/817dc10faa484234d79bb4d7224d36ac.png" />
            </div>
        </div>
        </section>
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
