<template>
  <div class="sidebar">
    <li v-for="docname of docs">
      <!-- 使用 router-link 可以在不重新加载页面的情况下更改 URL -->
      <router-link :to="`/guide/${docname}`">{{ docname }}</router-link>
    </li>
  </div>
  <main class="page-content">
    <md-editor v-model="doctext" previewOnly />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const doctext = ref('');

const docs = ref([
  'README',
  'markdown',
  'mermaid',
])

const route = useRoute();

// 初始化时加载文档
onMounted(async () => {
  await updateDoc(route.params.docName);
});

// 路由时加载文档
watch(() => route.params.docName, updateDoc);

async function updateDoc(docName: string | string[]) {
  let t = await fetch(`/guide/${docName}.md`);
  doctext.value = await t.text();
}
</script>

<style scoped lang="scss">

</style>

<style lang="scss" scoped>
h1 {
  font-size: 1.8em;
}

.sidebar {
  position: fixed;
  left: 0;
  width: 200px;
}

.page-content {
  margin-left: 200px;
}
</style>