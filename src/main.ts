import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory, RouteLocation } from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import Guide from './pages/guide/Guide.vue';
import Home from './pages/Home.vue';

const routes = [
  { path: '', component: Home },
  {
    path: '/:group(guide|practice|snippet)',
    redirect: (to: RouteLocation) => ({ path: `/${to.params.group}/README` })
  },
  { path: '/:group(guide|practice|snippet)/:docName', component: Guide },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
