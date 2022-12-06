<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <li v-for="docname of docs">
          <a :href="`/snippet/${docname}`">{{ docname }}</a>
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
  'README',
  'Vs-CodeSnippet',
  'WPF-ButtonStyle',
  'WPF-ColorPalette',
  'WPF-FindAncestor',
  'WPF-TreeView',
  'WPF-UserControl',
  'CSharp-ReadCSV',
])

const route = useRoute();
let docName = route.params.docName;
onMounted(async () => {
  let t = await fetch(`/snippet/${docName}.md`);
  doctext.value = await t.text();
});
</script>
  
<style scoped lang="scss">

</style>
  
<style lang="scss">
h1 {
  font-size: 1.8em;
}
</style>
