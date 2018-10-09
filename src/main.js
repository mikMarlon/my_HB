// 导入vue
import Vue from 'vue'
// 导入入口文件
import App from './App.vue'
// 导入路由文件
import VueRouter from 'vue-router'

// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入首页index
import index from './components/index.vue'

// 调用路由use方法
Vue.use(VueRouter);

// 定义路由规则
const routes = [
  {
    path:"/",
    component:index
  },
  {
    path:"/index",
    component:index
  }
]

// 实例化路由对象
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false;

new Vue({
  // 把入口用render方法渲染出来
  render: h => h(App),
  router
}).$mount('#app')
