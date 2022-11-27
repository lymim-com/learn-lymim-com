import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import Guide from './pages/guide/Guide.vue';
import Home from './pages/home/Home.vue';

const routes = [
  { path: '', component: Home },
  { path: '/guide', component: Guide },
  { path: '/guide/:docName', component: Guide },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
