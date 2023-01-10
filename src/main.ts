import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory, RouteLocation } from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import DocView from './pages/doc-view/DocView.vue';
import Home from './pages/Home.vue';

const routes = [
  { path: '', component: Home },
  {
    path: '/:group(guide|practice|snippet|industry|nce)',
    redirect: (to: RouteLocation) => ({ path: `/${to.params.group}/README` })
  },
  { path: '/:group(guide|practice|snippet|industry|nce)/:docName', component: DocView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
