import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import Docs from './pages/docs/Docs.vue';
import Home from './pages/home/Home.vue';

const routes = [
  { path: '', component: Home },
  { path: '/docs', component: Docs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
