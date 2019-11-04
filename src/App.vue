<template lang="pug">
    div(id='app',:class='[(hideHeader)? "hideheader":""]')
        myheader(v-show='!hideHeader')
        router-view
</template>

<script>
import myheader from "./components/myHeader";
export default {
    components: {
        myheader
    },
    computed:{
        hideHeader:function(){
            return this.$store.getters.getHideHeader;
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
    padding-top: 60px;
    &.hideheader{
        padding-top:0;
    }
}
</style>
