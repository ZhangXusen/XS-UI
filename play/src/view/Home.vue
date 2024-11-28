<template>
  <div>
    <el-icon-edit></el-icon-edit>
    <xs-chooseIcon :title="title" v-model:visible="visible" />
    <xs-cityPicker />
    <xs-chooseArea @change="changeArea" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
const visible = ref<boolean>(false)
const title = ref<string>("选择图标")
const changeArea = (val: any) => {
  console.log(val)
}
</script>
