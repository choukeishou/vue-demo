import Vue from 'vue';
import Router from 'vue-router';
import discover from '../../components/discover/discover.vue';//发现音乐
import myMusic from '../../components/myMusic/myMusic';//我的音乐,不带后缀也可以识别的
import notFound from '../../components/notFound/notFound.vue';
import recommed from '../../components/discover/recommed/recommed.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/discover'
    },
    {//首页
      path: '/discover',
      // name: 'discover',
      component: discover,
      children:[{
        path:'/',
        component:recommed
      },{
        path:'/discover/recommed',
        component:recommed
      }]
    },
    {
      path: '/my',
      name: 'my',
      component: myMusic
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ]
});