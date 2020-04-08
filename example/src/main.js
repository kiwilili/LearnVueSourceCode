// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   render:	h	=>	h(App) 
// })

// 全局与局部组件注册
// Vue.component('App', App)
// new Vue({
//   el: '#app',
//   template: "<app />"
// })

// 异步组件
// 工厂
// Vue.component('HelloWorld', function(resolve, reject) {
//   // 这个特殊的require 语法告诉 webpack
//   // 自动将编译后的代码分割成不同的块
//   require(['./components/HelloWorld'], function(res) {
//     resolve(res)
//   })
// })

// promise
// Vue.component('HelloWorld',
//   // 该 'import' 函数返回一个 'Promise' 对象
//   () => import('./components/HelloWorld')
// )

// 高级异步组件
const LodaingComp = {
  template: '<div>loading</div>'
}
const ErrorComp = {
  template: '<div>error</div>'
}
const AsyncComp = () => ({
  // 需要加载的组件，总当是一个 Promise
  component: import('./components/HelloWorld.vue'),
  // 加载中应当渲染的组件
  loading: LodaingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染加载中组件前的等待时间。默认200ms
  delay: 200,
  // 最长等待时间，超出此时间则渲染错误组件，默认:Infinity
  timeout: 1000
})
Vue.component('HelloWorld', AsyncComp)

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
