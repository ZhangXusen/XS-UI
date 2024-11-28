<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, i) in data" :key="i">
      <!-- 父菜单 -->
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item.index"
      >
        <component
          :is="`el-icon-${toLine(item[icon])}`"
          v-if="item[icon]"
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
            :is="`el-icon-${toLine(item[icon])}`"
            v-if="item[icon]"
          ></component>
          <span>{{ item[name] }}</span>
        </template>
        <!-- 导航栏的内容 -->
        <el-menu-item
          v-for="(item1, i1) in item[children]"
          :key="i1"
          :index="item1[index]"
        >
          <component
            :is="`el-icon-${toLine(item1[icon])}`"
            v-if="item1[icon]"
          ></component>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { toLine } from "@element-plus-plus/utils"
// import { MenuItem } from "./types.js";

const props = defineProps({
  data: {
    type: Array as unknown as PropType<any[]>,
    required: true
  },
  defaultActive: {
    type: String,
    default: ""
  },
  router: {
    type: Boolean,
    default: false
  },
  //键名
  name: {
    type: String,
    default: "name"
  },
  index: {
    type: String,
    default: "index"
  },
  icon: {
    type: String,
    default: "icon"
  },
  children: {
    type: String,
    default: "children"
  }
})
</script>

<style></style>
