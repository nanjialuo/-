// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import $ from 'jquery'

// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 iView 
import iView from 'iview';
import 'iview/dist/styles/iview.css';


// 引入 公共样式
import './assets/css/common.css'
import './assets/fonts/iconfont.css'

// 引入 兼容ie9
import 'babel-polyfill'

// 处理axios的三个问题
import axios from 'axios';

//  基路径
axios.defaults.baseURL = 'http://localhost:3000';
// 每次引入axios
Vue.prototype.$axios = axios;

axios.interceptors.request.use(
  function(config) {
    // 拦截每次请求,携带token
    config.headers.Authorization = localStorage.getItem('token');

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 引入公共组件
import CommonStep from "./components/common/CommonStep.vue"
import CommonHead from "./components/common/CommonHead.vue"
import CommonHeadnav from './components/common/CommonHeadnav.vue'

Vue.use(ElementUI)
Vue.use(iView);
Vue.component("common-step",CommonStep);
Vue.component("common-head",CommonHead);
Vue.component("common-headnav",CommonHeadnav);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
