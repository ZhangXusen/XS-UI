<template>
  <button
    ref="_ref"
    :autofocus="autofocus"
    :class="{
      [`xs-button--${type}`]: type,
      [`xs-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }"
    :disabled="disabled || loading"
    :type="nativeType"
    class="xs-button"
  >
    <!-- loading -->
    <Icon v-if="loading && !$slots.loading" icon="spinner" spin />
    <template v-if="loading">
      <slot name="loading"></slot>
    </template>
    <!-- icon -->
    <Icon v-if="icon" :icon="icon" />
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import Icon from "../../Icon"
import type { ButtonProps } from "./type"

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button"
})
defineOptions({ name: "XsButton" })
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>

<style lang="scss" scoped></style>
