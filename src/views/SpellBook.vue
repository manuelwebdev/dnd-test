<template>
  <div class="spellBook">
    <h1>This is an Spells page</h1>
    <spells />
  </div>
</template>

<script>
import spells from "./components/Spells.vue";

export default {
  name: "spellbook",
  components: {
    spells,
  }
  
}
</script>
