import Vue from 'vue';
import Router from 'vue-router';
import discover from '../../components/discover.vue';//发现音乐
import myMusic from '../../components/myMusic/myMusic';//我的音乐,不带后缀也可以识别的
import notFound from '../../components/notFound/notFound.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: discover
    },
    {//首页
      path: '/discover',
      name: 'discover',
      component: discover
    }, {
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