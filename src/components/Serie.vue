<template>
    <div>
    <article v-for="serie in series" v-bind:key="serie.id" class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img v-if="serie.image" v-bind:src="serie.image.medium">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
    <strong>{{serie.name}}</strong>&nbsp;&nbsp;
    <small v-if="serie.network">{{serie.network.name}}</small>&nbsp;&nbsp;
    <!-- <small>{{serie.numberOfEpisodes}} episodes</small> --> -->
                <br>
                <span v-html="serie.summary" />
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </div>
    </article>
    </div>
</template>

<script>
import logo from "@/assets/logo.png";
import api from "@/services/api";
export default {
  data() {
    return {
      series: []
    };
  },
  async mounted() {
    const items = await api.getSeries();
    this.series = items.map(item => item.show);
    console.log(this.series);
  }
};
</script>

<style>
</style>
