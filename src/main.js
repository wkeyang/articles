// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
// 接口
import axios from 'axios'
let base = process.env.NODE_ENV === 'production' ? 'http://218.28.6.71' : '/apis'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = base
// axios.defaults.baseURL ='http://www.xiaorui.store'

import qs from 'qs'
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事

  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  else if (config.method === 'get') {
    config.data = qs.parse(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
Vue.use(VueAwesomeSwiper)
/*组件方式引用*/
import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  }
}
// Vue.prototype.$axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
