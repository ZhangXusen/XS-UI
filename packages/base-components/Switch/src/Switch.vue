<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-23 21:55:24
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-23 23:21:47
-->
<template>
  <div
    class="xs-switch"
    @click="switchValue"
    :class="{
      [`xs-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked
    }"
  >
    <input
      class="xs-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
      ref="inputRef"
    />
    <div class="xs-switch__core">
      <div class="xs-switch__core-inner">
        <span
          class="xs-switch__core-inner-text"
          v-if="activeText || inactiveText"
        >
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="xs-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue"
import type { SwitchEmits, SwitchProps } from "./type"
defineOptions({ name: "XsSwitch", inheritAttrs: false })
const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false
})
const emits = defineEmits<SwitchEmits>()

const innerValue = ref(props.modelValue)
const checked = computed(() => innerValue.value === props.activeValue)
const inputRef = ref<HTMLInputElement>()
const switchValue = () => {
  if (props.disabled) return
  const newVal = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newVal
  emits("update:modelValue", newVal)
  emits("change", newVal)
}
onMounted(() => {
  inputRef.value!.checked = checked.value
})
watch(checked, (newVal) => {
  inputRef.value!.checked = newVal
})
watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  }
)
</script>

<style scoped lang="scss">
.xs-switch {
  --xs-switch-on-color: var(--xs-color-primary);
  --xs-switch-off-color: var(--xs-border-color);
  --xs-switch-on-border-color: var(--xs-color-primary);
  --xs-switch-off-border-color: var(--xs-border-color);
}

.xs-switch {
  display: inline-flex;
  align-items: center;
  height: 32px;
  font-size: 14px;
  line-height: 20px;

  .xs-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    opacity: 0;

    &:focus-visible {
      & ~ .xs-switch__core {
        outline: 2px solid var(--xs-switch-on-color);
        outline-offset: 1px;
      }
    }
  }

  &.is-disabled {
    opacity: 0.6;

    .xs-switch__core {
      cursor: not-allowed;
    }
  }

  &.is-checked {
    .xs-switch__core {
      background-color: var(--xs-switch-on-color);
      border-color: var(--xs-switch-on-border-color);

      .xs-switch__core-action {
        left: calc(100% - 17px);
      }

      .xs-switch__core-inner {
        padding: 0 18px 0 4px;
      }
    }
  }
}

.xs-switch--large {
  height: 40px;
  font-size: 14px;
  line-height: 24px;

  .xs-switch__core {
    min-width: 50px;
    height: 24px;
    border-radius: 12px;

    .xs-switch__core-action {
      width: 20px;
      height: 20px;
    }
  }

  &.is-checked {
    .xs-switch__core .xs-switch__core-action {
      left: calc(100% - 21px);
      color: var(--xs-switch-on-color);
    }
  }
}

.xs-switch--small {
  height: 24px;
  font-size: 12px;
  line-height: 16px;

  .xs-switch__core {
    min-width: 30px;
    height: 16px;
    border-radius: 8px;

    .xs-switch__core-action {
      width: 12px;
      height: 12px;
    }
  }

  &.is-checked {
    .xs-switch__core .xs-switch-core-action {
      left: calc(100% - 13px);
      color: var(--xs-switch-on-color);
    }
  }
}

.xs-switch__core {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  min-width: 40px;
  height: 20px;
  cursor: pointer;
  background: var(--xs-switch-off-color);
  border: 1px solid var(--xs-switch-off-border-color);
  border-radius: 10px;
  outline: none;
  transition: border-color var(--xs-transition-duration),
    background-color var(--xs-transition-duration);

  .xs-switch__core-action {
    position: absolute;
    left: 1px;
    width: 16px;
    height: 16px;
    background-color: var(--xs-color-white);
    border-radius: var(--xs-border-radius-circle);
    transition: all var(--xs-transition-duration);
  }

  .xs-switch__core-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 16px;
    padding: 0 4px 0 22px;
    overflow: hidden;
    transition: all var(--xs-transition-duration);

    .xs-switch__core-inner-text {
      overflow: hidden;
      font-size: 12px;
      color: var(--xs-color-white);
      text-overflow: ellipsis;
      white-space: nowrap;
      user-select: none;
    }
  }
}
</style>
