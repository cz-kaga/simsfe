<template>
  <div id="app">
    <titleunlogined v-if="$store.state.isLogin === false"/>
    <titlelogined v-if="$store.state.isLogin === true"/>
    <router-view/>
  </div>
</template>

<script>
import titleunlogined from "@/components/titleunlogined";
import titlelogined from "@/components/titlelogined"
export default {
  name: 'Home',
  components: {
    titleunlogined,
    titlelogined
  },
  data(){

  },
  watch:{

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
