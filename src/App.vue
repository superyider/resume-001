<template>
    <div id="app">
        <myheader />
        <router-view />
    </div>
</template>

<script>
import myheader from "./components/myHeader";
export default {
    components: {
        myheader
    },
    mounted(){
      this.getData();
    },
    methods: {
        getData() {
          const cors = 'https://cors-anywhere.herokuapp.com/';
          const url = 'http://api.komavideo.com/news/list';
          let that = this;
            that.axios.get(`${cors}${url}`).then(response => console.log(response.data));
        }
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
