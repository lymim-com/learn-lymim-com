<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <li v-for="doc of docs">
          <a :href="`/guide/${doc.title}`">{{ doc.title }}</a>
        </li>
      </el-aside>
      <el-main width="200px">
        <md-editor v-model="doctext" previewOnly />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const doctext = ref('');

const docs = ref([
  {
    title: 'markdown',
    content: '# title\n - ul1\n - ul2',
  },
  {
    title: 'mermaid',
    content: '```mermaid\ngraph TD;\n    A-->B;\n    A-->C;\n    B & C -->D;\n```',
  }
])

const route = useRoute();
let docName = route.params.docName;
onMounted(async () => {
  let t = await fetch(`/${docName}.md`);
  doctext.value = await t.text();
});
</script>

<style scoped lang="scss">

</style>