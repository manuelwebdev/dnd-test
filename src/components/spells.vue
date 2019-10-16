<template>
  <div class="spells">
    <v-row>
      <v-col cols="3" v-for="spells in classes" :key="spells.document__slug" class="mySpell">
        <h1 class="title">{{ spells.name }}</h1>
        <h2 class="body-1">{{ spells.level }} {{ spells.school }}</h2>
        <h2 class="body-1">{{ spells.dnd_class }}</h2>
        <v-divider></v-divider>
        <div class="myCast">
          <h3 class="body-1 conc">Concentration: {{ spells.concentration }}</h3>
          <v-divider vertical></v-divider>
          <h3 class="body-1 conc">Ritual: {{ spells.ritual }}</h3>
        </div>
        <v-divider></v-divider>
        <div class="spellInfo">
          <div class="castTime">
            <v-chip class="myChip" color="success" outlined>
              <i class="far fa-clock fa-1x"></i>
              <p class="body-1 castHead">Casting Time</p>
            </v-chip>
            <h3 class="body-1">{{ spells.casting_time }}</h3>
          </div>
          <div class="components">
            <v-chip class="myChip" color="success" outlined>
              <i class="far fa-clock fa-1x"></i>
              <p class="body-1 castHead">Casting Time</p>
            </v-chip>
            <h3 class="body-1">{{ spells.casting_time }}</h3>
          </div>
          <div class="duration">
            <v-chip class="myChip" color="success" outlined>
              <i class="far fa-clock fa-1x"></i>
              <p class="body-1 castHead">Casting Time</p>
            </v-chip>
            <h3 class="body-1">{{ spells.casting_time }}</h3>
          </div>
          <div class="range">
            <v-chip class="myChip" color="success" outlined>
              <i class="far fa-clock fa-1x"></i>
              <p class="body-1 castHead">Casting Time</p>
            </v-chip>
            <h3 class="body-1">{{ spells.casting_time }}</h3>
          </div>
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "spells",
  methods: {}, //end methods
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
.mySpell {
  margin: 1rem;
  padding: 0.5rem;

  .myCast {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    .conc {
      margin: 0.5rem 0.25rem;
    }
  }
  .spellInfo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .castTime, .components, .duration, .range {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 49%;
    }
    .castTime {
      
      .castHead {
        margin: 0.25rem 0.5rem;
      }
    }
    .components {
    }
    .duration {
    }
    .range {
    }
  }
}
.myChip {
  width: 100%;
}
</style>

