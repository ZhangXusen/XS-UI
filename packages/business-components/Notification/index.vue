<template>
  <el-popover
    :width="300"
    placement="bottom"
    popper-class="zxs-popper"
    trigger="click"
  >
    <template #reference>
      <el-badge :is-dot="isDot" :max="max" :value="value" class="badge">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
    <template #default>
      <slot></slot>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { toLine } from "@element-plus-plus/utils"

export interface props {
  icon?: string
  value?: number | string
  max?: number | string
  isDot?: boolean
}

withDefaults(defineProps<props>(), {
  icon: "Bell",
  value: 0,
  max: 100,
  isDot: false
})
</script>

<style lang="scss" scoped>
.badge {
  cursor: pointer;
}
</style>
