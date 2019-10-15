<template>
  <div class="spells">
    <!-- <v-card max-width="344" class="ml-3" v-for="spells in classes">
      <v-card-title>{{ spells.name }}</v-card-title>
      <p>{{ spells.desc }}</p>
    </v-card> -->
    
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
      "https://api.open5e.com/spells/?format=json";

    axios
      .get(url)
        // .then(response => console.log(response.data.results))
      .then(res => {
        this.classes = res.data.results;
      })
      .catch(error => console.log(error));







  },//end mounted
};
</script>

<style lang="scss" scoped>
</style>

