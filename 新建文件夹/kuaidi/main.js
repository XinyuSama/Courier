import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

App.mpType = 'app'
import uView from "uview-ui";

import clipboard from 'clipboard';
//注册到vue原型上
Vue.prototype.clipboard = clipboard;
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.use(uView);
const app = new Vue({
    ...App,
})
app.$mount()
