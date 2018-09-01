<template>
    <div>
        <h1>Hello Zenika Nantes!</h1>
        <span>{{msg}}</span>

        <br>
        <div class="field">
          <div class="control">
              <input class="input" v-model="searchText" type="text" placeholder="Find a serie">
            </div>
            <div class="control">
              <a class="button is-info">
                Search
              </a>
          </div>
        </div>
        <br>
        <serie class="serie" @changeFavorite="changeFavorite" :serieData="serie" v-for="serie in getSeries" v-bind:key="serie.id" />

    </div>
</template>

<script>
import Serie from "@/components/Serie.vue";
import api from "@/services/api";
import favoritesService from "@/services/favorites.service";

export default {
  name: "Bootcamp",
  data() {
    return {
      series: [],
      searchText: ""
    };
  },
  props: {
    msg: String
  },
  components: {
    Serie
  },
  methods: {
    changeFavorite(serie) {
      favoritesService.changeFavorite(serie);
    }
  },
  computed: {
    getSeries() {
      if (!this.searchText) return this.series;
      return this.series.filter(
        item =>
          item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
      );
    }
  },
  async mounted() {
    const items = await api.getSeries();
    this.series = items.map(item => item.show);
    console.log(this.series);
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
