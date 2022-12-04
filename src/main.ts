import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import Guide from './pages/guide/Guide.vue';
import Home from './pages/home/Home.vue';
import Practice from './pages/practice/Practice.vue';

const routes = [
  { path: '', component: Home },
  { path: '/guide', redirect: '/guide/README' },
  { path: '/guide/:docName', component: Guide },
  { path: '/practice', component: Practice },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
