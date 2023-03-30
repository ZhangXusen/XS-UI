<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-03-28 20:16:21
 * @LastEditors: 小国际
 * @LastEditTime: 2023-03-28 20:25:50
-->
<template>
  <Menu :data="data" defaultActive="1" router :collapse="Collapse"></Menu>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Menu from "../../../Menus/index.vue";
const props = defineProps<{
  Collapse: boolean;
}>();

const data = [
  {
    icon: "HomeFilled",
    name: "首页",
    index: "/",
  },
  {
    icon: "ElementPlus",
    name: "图标选择器",
    index: "/icon",
  },
  {
    icon: "Location",
    name: "区域选择",
    index: "/area",
  },
  {
    icon: "Position",
    name: "城市选择",
    index: "/citypicker",
  },
  {
    icon: "Sort",
    name: "趋势",
    index: "/trend",
  },
  {
    icon: "Bell",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "Menu",
    name: "导航栏",
    index: "/menus",
  },
  {
    icon: "Calendar",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "Setting",
    name: "表单",
    index: "/form",
  },
  {
    icon: "Timer",
    name: "时间选择",
    index: "/timepicker",
  },
  {
    icon: "Histogram",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "Setting",
    name: "弹出框表单",
    index: "/modalform",
  },
  {
    icon: "List",
    name: "表格",
    index: "/table",
  },
];
const handleOpen = () => {};
const handleClose = () => {};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
:deep(.el-menu-item svg) {
  height: 1.5em;
  margin-right: 4px;
}
</style>
