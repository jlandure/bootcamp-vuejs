<template>
  <div>
    <nav-bar />
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <bootcamp msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Bootcamp from "@/components/Bootcamp.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "home",
  components: {
    Bootcamp,
    NavBar
  }
};
</script>
