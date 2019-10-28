<template>
  <div class="spells">
    <v-row>
      <v-col cols="3" v-for="spells in classes" :key="spells.document__slug" class="mySpell">
        <v-card class="myCard">
          <h1 class="title">{{ spells.name }}</h1>
          <h2 class="body-1">{{ spells.level }} - {{ spells.school }}</h2>
          <h2 class="body-1">{{ spells.dnd_class }}</h2>
          <v-divider></v-divider>
          <div class="myCast">
            <h3 class="body-1">Concentration: {{ spells.concentration }}</h3>
            <v-divider vertical></v-divider>
            <h3 class="body-1">Ritual: {{ spells.ritual }}</h3>
          </div>
          <v-divider></v-divider>
          <div class="spellGroup">
            <div class="spellItem castTime">
              <v-chip class="myChip" color="primary" outlined>
                <i class="far fa-clock fa-1x"></i>
                <p class="body-1 castHead">Casting Time</p>
              </v-chip>
              <h3 class="body-1">{{ spells.casting_time }}</h3>
            </div>
            <div class="spellItem castTime">
              <v-chip class="myChip" color="primary" outlined>
                <i class="fas fa-scroll fa-1x"></i>
                <p class="body-1 castHead">Components</p>
              </v-chip>
              <h3 class="body-1">{{ spells.components }}</h3>
            </div>
            <div class="spellItem castTime">
              <v-chip class="myChip" color="primary" outlined>
                <i class="fas fa-hourglass-half fa-1x"></i>
                <p class="body-1 castHead">Duration</p>
              </v-chip>
              <h3 class="body-1">{{ spells.duration }}</h3>
            </div>
            <div class="spellItem castTime">
              <v-chip class="myChip" color="primary" outlined>
                <i class="fas fa-bullseye fa-1x"></i>
                <p class="body-1 castHead">Range</p>
              </v-chip>
              <h3 class="body-1">{{ spells.range }}</h3>
            </div>
          </div>
          <v-divider></v-divider>
          <p class="body-2 description">{{ spells.desc }}</p>
        </v-card>
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
.myDivide {
  margin: 1rem 0;
}
.vertDivide {
  margin: 1rem;
}
.mySpell {
  margin: 1rem;
  padding: 0.5rem;

  .myCard {
    padding: 1rem;

  .myCast {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .spellGroup {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .spellItem {
      width: 40%;
      margin: 0 0.75rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      .myChip {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0.5rem;
        .castHead {
          margin: 0 0.5rem;
        }
      }
    }
  }
  .description {
    padding: 1rem 0;
  }
  }
}
</style>

