<template>
  <div class="spells">
    <h2>This is the spells component</h2>
    <div>{{info}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "spells",
  mounted() {
    const axios = require("axios");

    axios.get("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells")
      .then(response => console.log(response.data.results[0].name))
      .catch(error => console.log(error)); 

  }
};
</script>

<style lang="scss" scoped>
</style>

