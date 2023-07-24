<template>
  <header class="navbar">
    <el-menu router :default-active="activeIndex" mode="horizontal" background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item style="display:inline" index="/">
        <el-icon :size="30" color="white">
          <HomeFilled />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="/guide">指南</el-menu-item>
      <el-menu-item index="/practice">实践</el-menu-item>
      <el-menu-item index="/snippet">片段</el-menu-item>
      <el-menu-item index="/industry">行业</el-menu-item>
      <!-- <el-menu-item index="/nce">NCE</el-menu-item> -->
    </el-menu>
  </header>
  <div class="content">
    <router-view></router-view>
  </div>
</template> 

<script setup lang="ts">
import { HomeFilled } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeIndex = ref<string | null>(null);

onMounted(() => {
  console.log(route.path);
  // 因为未知原因，刷新页面或导航时，此处直接读取 route.path 的结果总是 '/'，
  // 在 setTimeout 中则可以读取到正确地址，即使设置的延时是 0
  setTimeout(() => {
    if (route.path == '/') {
      activeIndex.value = `/`;
    } else {
      // 此处提取路径 /lv1path/lv2path 中的 lv1path 部分
      var lv1Path = route.path.split('/')[1];
      // 当路径有效而选中菜单无效时，应用路径中的选中项
      if (lv1Path && !activeIndex.value) {
        activeIndex.value = `/${lv1Path}`;
      }
    }
  }, 0);
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  /* 如果使用 sticky，在 iPad 下下拉回弹效果会带动标题一起移动 */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 59px;
  z-index: 11;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}

.content {
  display: block;
  padding-top: 59px;
}
</style>
