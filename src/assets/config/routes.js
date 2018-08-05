import Vue from 'vue'
import Router from 'vue-router'
import home from '../../components/home.vue';//首页
import notFound from '../../components/notFound/notFound.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {//首页
        path: '/home',
        name: 'home',
        component: home
      },{
          path:'*',
          name:'notFound',
          component:notFound
      }
  ]
})