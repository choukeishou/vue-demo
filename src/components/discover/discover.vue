<template>
    <div id="discover">
        <deputy-header></deputy-header>
        <router-view></router-view>
    </div>
</template>
<script>
    import  deputyHeader from './deputyHeader.vue';
    export default {
        name: "discover",
        components:{deputyHeader},
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        }
    };
</script>
<style lang="scss" scoped>
</style>

