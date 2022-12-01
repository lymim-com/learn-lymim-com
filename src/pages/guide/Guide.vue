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

// 由于 MdEditor 依赖的 mermaid 版本存在问题，暂时手动设置版本
MdEditor.config({
  editorExtensions: {
    mermaid: {
      js: 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.2.2/mermaid.min.js',
    }
  }
})

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

<style lang="scss">
h1{
  font-size: 1.8em;
}
</style>