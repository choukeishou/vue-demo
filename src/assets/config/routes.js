import Vue from 'vue'
import Router from 'vue-router'
import home from '../../components/home.vue';//首页

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'home',
      component: home
    }
  ]
})