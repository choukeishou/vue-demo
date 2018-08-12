<template>
    <div id="myMusic">
        {{message}}{{count}}
    </div>
</template>
<script>
    export default{
        name:'myMusic',
        data(){
            return {
                message:"这是我的音乐界面"
            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>

