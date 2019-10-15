<template>
  <div class="spells">
    <!-- <v-card max-width="344" class="ml-3" v-for="spells in classes">
      <v-card-title>{{ spells.name }}</v-card-title>
      <p>{{ spells.desc }}</p>
    </v-card>-->
    <v-row>
      <v-col cols="3">
        <v-card v-for="spells in classes" class="">
          <v-card-title>{{ spells.name }}</v-card-title>
          <div class="d-flex flex-column justify-start align-start">
            <v-card-subtitle>{{ spells.level }}</v-card-subtitle>
            <v-card-subtitle>{{ spells.school }}</v-card-subtitle>
          </div>
          <v-card-subtitle> {{ spells.dnd_class }} </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "spells",
  methods: {
    getSpells: myUrl => {
      // console.log(myUrl)
    }
  }, //end methods
  data() {
    return {
      classes: null
    };
  }, //end data
  mounted() {
    const axios = require("axios");
    const url = "https://api.open5e.com/spells/?format=json";

    axios
      .get(url)
      // .then(response => console.log(response.data.results))
      .then(res => {
        this.classes = res.data.results;
      })
      .catch(error => console.log(error));
  } //end mounted
};
</script>

<style lang="scss" scoped>
</style>

