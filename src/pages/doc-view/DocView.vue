<template>
  <div class="sidebar">
    <!-- 使用 router-link 可以在不重新加载页面的情况下更改 URL -->
    <router-link :to="`/${group}/${docname}`" class="link" v-for="docname of docs">{{ docname }}</router-link>
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

const group = ref('guide');
const docName = ref('README');
const doctext = ref('');

const docs = ref([
  'README',
]);

const allDocs = {
  'guide': [
    'README',
    'markdown',
    'mermaid',
  ],
  'practice': [
    'README',
  ],
  'snippet': [
    'README',
    'Vs-CodeSnippet',
    'WPF-ButtonStyle',
    'WPF-ColorPalette',
    'WPF-FindAncestor',
    'WPF-TreeView',
    'WPF-UserControl',
    'CSharp-ReadCSV',
  ]
};

const route = useRoute();

// 初始化时加载文档
onMounted(async () => {
  group.value = route.params.group;
  docs.value = allDocs[route.params.group];
  docName.value = route.params.docName;
  await updateDoc();
});

// 路由时加载文档
watch(() => route.params.group, g => {
  group.value = g;
  docs.value = allDocs[g];
  updateDoc();
});
watch(() => route.params.docName, doc => {
  docName.value = doc;
  updateDoc();
});

async function updateDoc() {
  let t = await fetch(`/${group.value}/${docName.value}.md`);
  doctext.value = await t.text();
}
</script>

<style lang="scss">
h1 {
  font-size: 2.2em;
}
</style>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  width: 202px;
  display: block;
  padding: 48px 32px 0;

  .link {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    padding: 10px 16px;
    line-height: 1.5;
    font-size: .9rem;
    border-radius: 8px;
    display: block;
    text-decoration: none;
    color: #606266;

    &:active {
      color: #409eff;
    }

    &:hover {
      color: #409eff;
    }
  }

  .router-link-active {
    background-color: #409eff1a;
    font-weight: 600;
    color: #409eff;
    transition: color .25s;
  }
}

.page-content {
  margin-left: 266px;
  padding: 30px;
}
</style>