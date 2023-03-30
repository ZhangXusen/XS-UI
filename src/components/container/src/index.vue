<template>
  <el-container>
    <el-aside width="auto">
      <NavSide v-model:Collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:Collapse="isCollapse" />
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import NavSide from "./navSide/index.vue";
import NavHeader from "./navHeader/index.vue";

const isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
</style>
