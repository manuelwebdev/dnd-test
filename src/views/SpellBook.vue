<template>
  <div class="spellBook">
    <h1>This is an Spells page</h1>
    <spells />
  </div>
</template>

<script>
import spells from "../components/spells";
export default {
  name: "spellbook",
  components: {
    spells,
  }
  
}
</script>

<style lang="scss" scoped>
.spellbook {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
}
</style>