<template>
    <div id="discver_recommed">
        <button v-on:click="incre">增加</button>
        推荐页面
        {{count}}
    </div>
</template>
<script>
    export default {
        name:'discoverRecommed',
        data(){
            return {
                message:''
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            }
        },
        methods:{
            incre:function(){
                console.log(111)
                this.$store.commit('increment');
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>

