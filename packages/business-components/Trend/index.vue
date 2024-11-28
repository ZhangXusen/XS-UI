<template>
  <div class="trend">
    <slot v-if="slots.default"></slot>
    <div v-else :style="{ color: props.textColor }" class="text">
      {{ text }}
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(icon)}`"
        v-if="type === 'up'"
        :class="{ reverse: reverseColor }"
        :style="{ color: props.color }"
      ></component>
      <component
        :is="`el-icon-${toLine(icon)}`"
        v-else
        :class="{ reverse: reverseColor }"
        :style="{ color: props.color }"
      ></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from "vue"
import { toLine } from "@element-plus-plus/utils"

export interface TrendProps {
  type?: string
  text?: string
  color?: string
  reverseColor?: boolean
  textColor?: string
  icon?: string
}

const slots = useSlots()
const props = withDefaults(defineProps<TrendProps>(), {
  type: "up",
  text: "文字",
  color: "red",
  upColor: "red",
  reverseColor: false,
  textColor: "black",
  icon: "arrowup"
})
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    margin-right: 4px;
    font-size: 12px;
  }

  .icon {
    svg {
      width: 1em;
      height: 1em;
    }
  }
}

.reverse {
  filter: invert(100%);
}
</style>
