<template>
  <el-menu router :default-active="activeIndex" mode="horizontal" background-color="#545c64" text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item style="display:inline" index="/">
      <el-icon :size="30" color="white">
        <HomeFilled />
      </el-icon>
    </el-menu-item>
    <el-menu-item index="/guide">指南</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template> 

<script setup lang="ts">
import { HomeFilled } from '@element-plus/icons-vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeIndex = ref<string | null>(null);

onMounted(() => {
  // 刷新时，route.path 的默认值是 '/'，然后变成刷新前的地址，这将导致刷新时抖动；
  // 因此在 100ms 后检查路径情况，如果仍为未设置状态，则设置为 '/'
  setTimeout(() => activeIndex.value = activeIndex.value ?? '/', 50);
})

watch(() => route.path, () => activeIndex.value = route.path);
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
