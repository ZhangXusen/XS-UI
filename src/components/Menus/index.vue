<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, i) in data" :key="i">
      <!-- 父菜单 -->
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item.index"
      >
        <component
          v-if="item[icon]"
          :is="`el-icon-${toLine(item[icon])}`"
        ></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <!-- 子菜单 -->
      <el-sub-menu
        v-if="item[children] && item[children].length"
        :index="item[index]"
      >
        <!-- 父导航的标题 -->
        <template #title>
          <component
            v-if="item[icon]"
            :is="`el-icon-${toLine(item[icon])}`"
          ></component>
          <span>{{ item[name] }}</span>
        </template>
        <!-- 导航栏的内容 -->
        <el-menu-item
          :index="item1[index]"
          v-for="(item1, i1) in item[children]"
          :key="i1"
        >
          <component
            v-if="item1[icon]"
            :is="`el-icon-${toLine(item1[icon])}`"
          ></component>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { toLine } from "../../utils/index.js";
// import { MenuItem } from "./types.js";

const props = defineProps({
  data: {
    type: Array as unknown as PropType<any[]>,
    required: true,
  },
  defaultActive: {
    type: String,
    default: "",
  },
  router: {
    type: Boolean,
    default: false,
  },
  //键名
  name: {
    type: String,
    default: "name",
  },
  index: {
    type: String,
    default: "index",
  },
  icon: {
    type: String,
    default: "icon",
  },
  children: {
    type: String,
    default: "children",
  },
});
</script>

<style></style>
