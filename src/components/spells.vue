<template>
  <div class="spells">
    <!-- <h2>This is the spells component</h2>
    <h2 v-for="classes in classes" class="display-1">{{ classes.name }}</h2>
    <v-btn v-for="classes in classes">{{classes.name}}</v-btn> -->
    <v-card 12 max-width="344" class="mx-auto">
      <v-card-title>I'm a title</v-card-title>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "spells",
  data() {
    return {
      classes: null
    };
  },
  mounted() {
    const axios = require("axios");
    const url =
      "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes";

    axios
      .get(url)
      .then(response => console.log(response.data.results))
      .then(res => {
        this.classes = res.data.results;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
</style>

