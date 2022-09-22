import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

App.mpType = 'app'
import uView from "uview-ui";

// import clipboard from 'clipboard';
//注册到vue原型上
// Vue.prototype.clipboard = clipboard;
Vue.prototype.$beseURL = "http://8.140.56.185:8085"
Vue.use(uView);
const app = new Vue({
    ...App
})
app.$mount()
