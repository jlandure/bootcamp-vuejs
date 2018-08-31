<template>
  <div>
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

export default {
  name: "home",
  components: {
    Bootcamp
  }
};
</script>
