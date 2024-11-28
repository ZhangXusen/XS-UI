<template>
  <div
    :class="{
      [`xs-input--${type}`]: type,
      [`xs-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus
    }"
    class="xs-input"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend-slot -->
      <div v-if="$slots.prepend" class="xs-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <!-- native -->
      <div class="xs-input__wrapper">
        <!-- prefix -->
        <span v-if="$slots.prefix" class="xs-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          ref="InputRef"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :disabled="disabled"
          :form="form"
          :placeholder="placeholder"
          :readonly="readonly"
          :type="
            showPassword ? (isPasswordVisible ? 'text' : 'password') : type
          "
          :value="modelValue"
          class="xs-input__inner"
          v-bind="$attrs"
          @blur="handleBlur"
          @change="handleChange"
          @focus="handleFocus"
          @input="handleInput"
        />
        <!-- suffix -->
        <span
          v-if="$slots.suffix || disabled || clearable || showPassword"
          class="xs-input__suffix"
          @click="keepFocus"
        >
          <!-- 自定义 -->
          <slot name="suffix"></slot>
          <!--清空图标  -->
          <Icon
            v-if="showClear"
            class="xs-input__clear"
            icon="circle-xmark"
            @click="clear"
            @mousedown.prevent=""
          />
          <!-- 显示密码的图标： -->
          <Icon
            v-if="showPassword && !disabled && modelValue && isPasswordVisible"
            class="xs-input__password"
            icon="eye-slash"
            @click="isPasswordVisible = false"
          />
          <!-- 隐藏密码的图标-->
          <Icon
            v-if="showPassword && !disabled && modelValue && !isPasswordVisible"
            class="xs-input__password"
            icon="eye"
            @click="isPasswordVisible = true"
          />
        </span>
      </div>
      <!-- append -->
      <div v-if="$slots.append" class="xs-input__append">
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        ref="InputRef"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :disabled="disabled"
        :form="form"
        :placeholder="placeholder"
        :readonly="readonly"
        :value="modelValue"
        class="xs-textarea__wrapper"
        v-bind="$attrs"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @input="handleInput"
      ></textarea>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, nextTick, Ref, ref } from "vue"
import Icon from "../../Icon"
import { InputEmits, InputProps } from "./type"
import { formItemContextKey } from "../../Form"

defineOptions({ name: "XsInput", inheritAttrs: false })
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  autocomplete: "off"
})
const emits = defineEmits<InputEmits>()
const InputRef = ref(null) as Ref<HTMLInputElement>
const isFocus = ref(false)
/* 密码的显示与隐藏 */
const isPasswordVisible = ref(false)
const formItemContext = inject(formItemContextKey)
const runValidation = (trigger?: string) => {
  formItemContext.validate(trigger).catch((e) => {
    console.log(e)
  })
}
const handleInput = (e) => {
  emits("update:modelValue", e.target.value)
  emits("input", e.target.value)
  runValidation("input")
}
const handleChange = (e) => {
  emits("change", e.target.value)
  runValidation("change")
}
/* 处理聚焦 */
const handleFocus = (e: FocusEvent) => {
  isFocus.value = true
  emits("focus", e)
  runValidation("focus")
}
/* 处理失焦 */
const handleBlur = (e: FocusEvent) => {
  isFocus.value = false
  emits("blur", e)
  runValidation("blur")
}

const showClear = computed(() => {
  return (
    //clearable为true
    //不被禁用
    //modelValue不为空
    //正在被聚焦
    props.clearable && !props.disabled && !!props.modelValue && isFocus.value
  )
})
const clear = (e) => {
  // console.log("clear");
  emits("update:modelValue", "")
  emits("clear")
  emits("input", "")
  emits("change", "")
}

/* 点击suffix后继续聚焦input */
const keepFocus = async () => {
  await nextTick()
  InputRef.value.focus()
}

defineExpose({
  ref: InputRef,
  handleFocus,
  handleBlur,
  handleInput,
  handleChange,
  clear
})
</script>

<style lang="scss" scoped>
.xs-input {
  --xs-input-text-color: var(--xs-text-color-regular);
  --xs-input-border: var(--xs-border);
  --xs-input-hover-border: var(--xs-border-color-hover);
  --xs-input-focus-border: var(--xs-color-primary);
  --xs-input-transparent-border: 0 0 0 1px transparent inset;
  --xs-input-border-color: var(--xs-border-color);
  --xs-input-border-radius: var(--xs-border-radius-base);
  --xs-input-bg-color: var(--xs-fill-color-blank);
  --xs-input-icon-color: var(--xs-text-color-placeholder);
  --xs-input-placeholder-color: var(--xs-text-color-placeholder);
  --xs-input-hover-border-color: var(--xs-border-color-hover);
  --xs-input-clear-hover-color: var(--xs-text-color-secondary);
  --xs-input-focus-border-color: var(--xs-color-primary);
}

.xs-input {
  --xs-input-height: var(--xs-component-size);

  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  width: 100%;
  font-size: var(--xs-font-size-base);
  line-height: var(--xs-input-height);
  vertical-align: middle;

  &.is-disabled {
    cursor: not-allowed;

    .xs-input__wrapper {
      background-color: var(--xs-disabled-bg-color);
      box-shadow: 0 0 0 1px var(--xs-disabled-border-color) inset;
    }

    .xs-input__inner {
      color: var(--xs-disabled-text-color);
      -webkit-text-fill-color: var(--xs-disabled-text-color);
      cursor: not-allowed;
    }

    .xs-textarea__inner {
      color: var(--xs-disabled-text-color);
      cursor: not-allowed;
      background-color: var(--xs-disabled-bg-color);
      box-shadow: 0 0 0 1px var(--xs-disabled-border-color) inset;
      -webkit-text-fill-color: var(--xs-disabled-text-color);
    }
  }

  &.is-prepend {
    > .xs-input__wrapper {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &.is-append {
    > .xs-input__wrapper {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

.xs-input--large {
  --xs-input-height: var(--xs-component-size-large);

  font-size: 14px;

  .xs-input__wrapper {
    padding: 1px 15px;

    .xs-input__inner {
      --xs-input-inner-height: calc(var(--xs-input-height, 40px) - 2px);
    }
  }
}

.xs-input--small {
  --xs-input-height: var(--xs-component-size-small);

  font-size: 12px;

  .xs-input__wrapper {
    padding: 1px 7px;

    .xs-input__inner {
      --xs-input-inner-height: calc(var(--xs-input-height, 24px) - 2px);
    }
  }
}

.xs-input__prefix,
.xs-input__suffix {
  display: inline-flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  height: 100%;
  color: var(--xs-input-icon-color, var(--xs-text-color-placeholder));
  text-align: center;
  white-space: nowrap;
  transition: all var(--xs-transition-duration);
}

.xs-input__prefix {
  > :first-child {
    margin-left: 0 !important;
  }

  > :last-child {
    margin-right: 8px !important;
  }
}

.xs-input__suffix {
  > :first-child {
    margin-left: 8px !important;
  }

  > :last-child {
    margin-right: 0 !important;
  }
}

.xs-input__prepend,
.xs-input__append {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0 20px;
  color: var(--xs-color-info);
  white-space: nowrap;
  background-color: var(--xs-fill-color-light);
  border-radius: var(--xs-input-border-radius);
}

.xs-input__prepend {
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 1px 0 0 0 var(--xs-input-border-color) inset,
    0 1px 0 0 var(--xs-input-border-color) inset,
    0 -1px 0 0 var(--xs-input-border-color) inset;
}

.xs-input__append {
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: 0 1px 0 0 var(--xs-input-border-color) inset,
    0 -1px 0 0 var(--xs-input-border-color) inset,
    -1px 0 0 0 var(--xs-input-border-color) inset;

  & > .xs-input__wrapper {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.xs-input--textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: var(--xs-font-size-base);
  vertical-align: bottom;
}

.xs-textarea__wrapper {
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 5px 11px;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5;
  color: var(--xs-input-text-color, var(--xs-text-color-regular));
  appearance: none;
  resize: vertical;
  background-color: var(--xs-input-bg-color, var(--xs-fill-color-blank));
  background-image: none;
  border: none;
  border-radius: var(--xs-input-border-radius, var(--xs-border-radius-base));
  box-shadow: 0 0 0 1px var(--xs-input-border-color, var(--xs-border-color))
    inset;
  transition: var(--xs-transition-box-shadow);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--xs-input-focus-border-color) inset;
  }

  &::placeholder {
    color: var(--xs-input-placeholder-color);
  }
}

.xs-input__wrapper {
  display: inline-flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 1px 11px;
  background-color: var(--xs-input-bg-color, var(--xs-fill-color-blank));
  background-image: none;
  border-radius: var(--xs-input-border-radius, var(--xs-border-radius-base));
  box-shadow: 0 0 0 1px var(--xs-input-border-color, var(--xs-border-color))
    inset;
  transition: var(--xs-transition-box-shadow);

  &:hover {
    box-shadow: 0 0 0 1px var(--xs-input-hover-border-color) inset;
  }

  &.is-focus {
    box-shadow: 0 0 0 1px var(--xs-input-focus-border-color) inset;
  }

  .xs-input__inner {
    --xs-input-inner-height: calc(var(--xs-input-height, 32px) - 2px);

    box-sizing: border-box;
    flex-grow: 1;
    width: 100%;
    height: var(--xs-input-inner-height);
    padding: 0;
    font-size: inherit;
    line-height: var(--xs-input-inner-height);
    color: var(--xs-input-text-color, var(--xs-text-color-regular));
    appearance: none;
    background: none;
    border: none;
    outline: none;

    &::placeholder {
      color: var(--xs-input-placeholder-color);
    }
  }

  .xs-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    margin-left: 8px;
    line-height: inherit;
    transition: all var(--xs-transition-duration);
  }

  .xs-input__clear,
  .xs-input__password {
    font-size: 14px;
    color: var(--xs-input-icon-color);
    cursor: pointer;

    &:hover {
      color: var(--xs-input-clear-hover-color);
    }
  }
}
</style>
