<template>
  <Progress :percentage="60" Animation></Progress>
  <Progress
    :percentage="60"
    :stroke-width="20"
    :text-inside="true"
    Animation
    status="exception"
  ></Progress>
  <Progress
    :percentage="100"
    :stroke-width="20"
    :text-inside="true"
    Animation
    status="exception"
    type="dashboard"
  ></Progress>
</template>

<script lang="ts" setup>
import { XsProgress as Progress } from "@element-plus-plus/business-components"
</script>

<style lang="scss" scoped>
:deep(svg) {
  width: 120px;
  height: 120px;
}
</style>
