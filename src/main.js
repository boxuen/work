import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import blogPost from './components/blogPost.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'

// 定義元件
//const HomePage = { template: '<h1>Home Page</h1>' }
//const blogPost = { template: '<h1> blogPost</h1>' }

// 定義路由
const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: blogPost }
]

// 建立 Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 建立 App 實例並掛載
const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.config.globalProperties.$axios = axios // ✅ 全域註冊 axios
app.mount('#app')
