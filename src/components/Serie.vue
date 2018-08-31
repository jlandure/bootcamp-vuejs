<template>
    <div>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img v-if="serieData.image" v-bind:src="serieData.image.medium">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <strong>{{serieData.name}}</strong>&nbsp;&nbsp;
                <small v-if="serieData.network">{{serieData.network.name}}</small>&nbsp;&nbsp;
                <!-- <small>{{serie.numberOfEpisodes}} episodes</small> -->
                <br>
                <span v-html="serieData.summary" />
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small" @click="changeFavorite"><i class="fas fa-heart" :class="[isFav ? 'red' : 'grey']"></i></span>
        </div>
    </article>
    </div>
</template>

<script>
import favoritesService from "@/services/favorites.service";

export default {
  data() {
    return { favoritesService };
  },
  props: {
    serieData: Object,
    isFavorite: Function
  },
  methods: {
    changeFavorite() {
      this.$emit("changeFavorite", this.serieData);
    }
  },
  computed: {
    isFav() {
      return this.favoritesService.isFavorite(this.serieData);
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.grey {
  color: grey;
}
</style>
