<template>
  <div id="app">
    <myheader />
    <router-view/>
  </div>
</template>

<script>
import myheader from './components/myHeader'

export default {
  components:{
    myheader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
