<template>
  <div
    :class="{
      'is-disabled': disabled
    }"
    class="xs-collapse-items"
  >
    <div
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      class="xs-collapse-item__header"
      @click="handleClick"
    >
      <slot name="title">
        {{ title }}
      </slot>
      <Icon class="header-angle" icon="angle-right" />
    </div>
    <Transition name="slide" v-on="TransitionEvent">
      <div v-show="isActive" class="xs-collapse-item__wrapper">
        <div :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import { computed, inject } from "vue"
import Icon from "../../Icon"
import { CollapseContextKey, ItemProps } from "./type"

defineOptions({ name: "XsCollapseItem" })
const props = defineProps<ItemProps>()

const CollapseContextProp = inject(CollapseContextKey)

const isActive = computed(() =>
  CollapseContextProp?.activeNames.value.includes(props.name)
)
const handleClick = () => {
  if (props.disabled) return
  CollapseContextProp?.handleItemClick(props.name)
}

/* 特效 */
const TransitionEvent = {
  beforeEnter(el) {
    el.style.height = "0px"
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ""
    el.style.overflow = ""
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = "hidden"
  },
  leave(el) {
    el.style.height = "0px"
  },
  afterLeave(el) {
    el.style.height = ""
    el.style.overflow = ""
  }
}
</script>

<style lang="scss" scoped>
.xs-collapse-item__header {
  font-size: 14px;
}
</style>
