import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import zhLang from './assets/common/lang/zh';
import enLang from './assets/common/lang/en';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/element-variables.scss';
import App from './App.vue';
import routes from './assets/config/routes';

Vue.use(VueI18n);
Vue.use(Vuex);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 定义store
const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment:function(state){
      state.count++
    }
  },
  actions:{

  }
})
// 定义i18n并引入
const i18n = new VueI18n({
  locale:'zh',
  fallbackLocale:'zh',
  messages:{
    zh:Object.assign({},zhLocale,zhLang),
    en:Object.assign({},enLocale,enLang)
  }
})
ElementLocale.i18n((key, value) => i18n.t(key, value));//为了实现element插件的多语言切换

new Vue({
  el: '#app',
  i18n,
  store,
  router:routes,//201808050114、配置路由应该写成键值对，不要直接引入routes
  render: h => h(App)
})
