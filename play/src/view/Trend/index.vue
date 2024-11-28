<template>
  <div class="trends">
    <trend color="blue"></trend>
    <trend color="red" icon="arrowdown" text="下降" type="down"></trend>
    <trend color="blue">插槽</trend>
    <trend color="red" reverseColor text="颜色反转"></trend>
    <trend color="red" text="文字颜色" text-color="red"></trend>
    <trend icon="edit" text="自选图标"></trend>
  </div>
</template>

<script lang="ts" setup>
import { XSTrend as Trend } from "@element-plus-plus/business-components"
</script>

<style lang="scss" scoped>
.trends {
  display: flex;
  flex-direction: row;
  align-items: center;

  .trend {
    margin-right: 10px;
  }
}
</style>
