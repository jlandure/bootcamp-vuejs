<template>
  <div>
    <h3>{{name}}</h3>
    <img v-if="image" v-bind:src="image.medium" />
    <!-- <section>{{summary}}</section> -->
  </div>
</template>

<script>
export default {
  name: "Serie",
  props: {
    name: String,
    summary: String,
    image: Object
  }
  // data() {
  //   return {
  //     name: "GOT",
  //     summary: " Il était une fois !",
  //     image: {
  //       medium:
  //         "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F2819172%2Fimages%2Fn-TRNE-DE-FER-GAME-OF-THRONES-628x314.jpg"
  //     }
  //   };
  // }
};
</script>

<style>
</style>
