<template>
  <TimePicker
    :endOptions="startOptions"
    :startOptions="startOptions"
  ></TimePicker>
</template>

<script lang="ts" setup>
import { XsTimePicker as TimePicker } from "@element-plus-plus/business-components"

const startOptions = {
  size: "large"
}
</script>

<style></style>
