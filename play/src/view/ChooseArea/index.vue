<template>
  <choose-area @change="changeArea" />
</template>

<script lang="ts" setup>
import { XsChooseArea as ChooseArea } from "@element-plus-plus/business-components"

const changeArea = (val: any) => {
  console.log(val)
}
</script>

<style></style>
