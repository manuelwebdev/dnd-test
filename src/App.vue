<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/SpellBook">Spells</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  background-color: #2c3e50;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  width: 12rem;
  margin: 0 auto;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
