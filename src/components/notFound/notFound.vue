<template>
    <div id="notFound">
        <!-- html中写国际化 -->
        <!-- <span>{{$t('notFound')}}</span> -->
        <p v-text="notFoundMessage"></p>
        <router-link to="/">返回首页</router-link>
    </div>
</template>
<script>
    export default {
        name:'notFount',
        data () {
            return {
                notFoundMessage: this.$i18n.t('notFound'),//js中写国际化方式
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>

