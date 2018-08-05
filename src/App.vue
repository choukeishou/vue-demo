<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import headerNav from './components/header/headerNav.vue';
export default {
  name: "app",
  components:{headerNav},
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}

#app .app_container{
  width: 1110px;
  margin: 0 auto;
}
</style>
