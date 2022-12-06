import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import Guide from './pages/guide/Guide.vue';
import Home from './pages/Home.vue';
import Practice from './pages/practice/Practice.vue';
import Snippet from './pages/snippet/Snippet.vue';

const routes = [
  { path: '', component: Home },
  { path: '/guide', redirect: '/guide/README' },
  { path: '/guide/:docName', component: Guide },
  { path: '/practice', redirect: '/practice/README' },
  { path: '/practice/:docName', component: Practice },
  { path: '/snippet', redirect: '/snippet/README' },
  { path: '/snippet/:docName', component: Snippet },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
