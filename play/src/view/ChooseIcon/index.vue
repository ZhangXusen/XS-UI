<template>
  <ChooseIcon v-model:visible="visible" :title="title" />
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { XsChooseIcon as ChooseIcon } from "@element-plus-plus/business-components"

const visible = ref<boolean>(false)
const title = ref<string>("选择图标")
</script>

<style></style>
