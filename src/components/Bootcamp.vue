<template>
    <div>
        <h1>Hello Zenika Nantes!</h1>
        <span>{{msg}}</span>
        <serie />
        <serie />
        <serie />
    </div>
</template>

<script>
import Serie from "@/components/Serie.vue";
export default {
  name: "Bootcamp",
  props: {
    msg: String
  },
  components: {
    Serie
  }
};
</script>

<style scoped>
</style>
