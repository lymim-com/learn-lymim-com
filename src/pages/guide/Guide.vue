<template>
  <div class="sidebar">
    <li v-for="docname of docs">
      <a :href="`/guide/${docname}`">{{ docname }}</a>
    </li>
  </div>
  <main class="page-content">
    <md-editor v-model="doctext" previewOnly />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
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
let docName = route.params.docName;
onMounted(async () => {
  let t = await fetch(`/guide/${docName}.md`);
  doctext.value = await t.text();
});
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