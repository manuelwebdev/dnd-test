<template>
  <div class="spells">
    <h2>This is the spells component</h2>
    <ul>
      <li v-for="classe in classes">{{ classe }}</li>
    </ul>
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
      //   .then(response => console.log(response.data.results))
      .then(res => {
        this.classes = res.data.results;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
</style>

