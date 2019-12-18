<template>
  <v-toolbar>
    <v-toolbar-title class="primary">D&D Companion</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text><router-link to="/">Home</router-link></v-btn>
      <v-btn text><router-link to="/SpellBook">Spells</router-link></v-btn>
    </v-toolbar-items>

    <template v-if="$vuetify.breakpoint.smAndUp">
      <v-btn icon>
        <v-icon>mdi-export-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-delete-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>