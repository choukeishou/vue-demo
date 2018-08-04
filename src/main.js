import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhLang from './assets/common/lang/zh';
import enLang from './assets/common/lang/en';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/element-variables.scss';
import App from './App.vue';
import routes from './assets/config/routes';

Vue.use(VueI18n);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 定义i18n并引入
const i18n = new VueI18n({
  locale:'zh',
  fallbackLocale:'zh',
  messages:{
    zh:zhLang,
    en:enLang
  }
})

new Vue({
  el: '#app',
  i18n,
  router:routes,//201808050114、配置路由应该写成键值对，不要直接引入routes
  render: h => h(App)
})
