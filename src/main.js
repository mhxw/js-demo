import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import './assets/js/rem';
import i18n from './i18n/i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use('my-component', ElementUI);

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
