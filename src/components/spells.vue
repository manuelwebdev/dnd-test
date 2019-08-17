<template>
  <div class="spells">
    <!-- <h2 v-for="(test) in classes">{{ test.name }}</h2> -->
    <v-card max-width="344" class="ml-3" v-for="(test) in classes">
      <v-card-title>{{ test.name }}</v-card-title>
      <v-btn :click="getSpells('test')">get info</v-btn>
    </v-card>
  </div> 
</template>

<script>
import axios from "axios";

export default {
  name: "spells",
  methods: {
      getSpells: (myUrl) => {
        // console.log(myUrl)
    },
  },//end methods
  data() {
    return {
      classes: null
    };
  },//end data
  mounted() {
    const axios = require("axios");
    const url =
      "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells";

    axios
      .get(url)
      //   .then(response => console.log(response.data.results))
      .then(res => {
        this.classes = res.data.results;
      })
      .catch(error => console.log(error));







  },//end mounted
};
</script>

<style lang="scss" scoped>
</style>

