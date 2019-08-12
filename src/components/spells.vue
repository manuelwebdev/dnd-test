<template>
    <div class="spells">
        <h2>This is the spells component</h2>
    </div>
    
</template>

<script>
import axios from "axios";

export default {
    name: "spells",
    mounted() {
        const axios = require("axios");

        axios.get("http://dnd5eapi.co/api/spells")
        .then(function(response) {
            console.log(response);
            
        })
    }   
}
</script>

<style lang="scss" scoped>

</style>

