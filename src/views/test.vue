<template lang="pug">
    div
        ul
            li(class='yoyo',v-for='item in fakeData') {{ item }}

</template>
<script>
export default {
    data: function() {
        return {
            fakeData: ["111", "222", "333", "444", "555"]
        };
    },
    mounted(){
        this.$store.commit('setHideHeader',true)
    }
};
</script>