<template>
  <div class="xs-dropdown">
    <Tooltip
      ref="tooltipRef"
      :manual="manual"
      :placement="placement"
      :popper-options="popperOptions"
      :trigger="trigger"
      @visible-change="visibleChange"
    >
      <slot></slot>
      <template #content>
        <div>
          <ul class="xs-dropdown__menu">
            <template v-for="item in menuOptions" :key="item.key">
              <li v-if="item.divided" class="divided-placeholder"></li>
              <li
                :id="`xs-dropdown-${item.key}`"
                :class="{
                  'is-disabled': item.disable,
                  'is-divided': item.divided
                }"
                class="xs-dropdown__item"
                @click="itemClick(item)"
              >
                <RenderVNode :vNode="item.label"></RenderVNode>
              </li>
            </template>
          </ul>
        </div>
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { RenderVNode } from "../../Common"
import Tooltip from "../../Tooltips"
import { DropdownEmits, DropdownProps, MenuOptions } from "./type"

const props = withDefaults(defineProps<DropdownProps>(), {})
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref(null)

/* 继续往外透传popover的isOpen */
const visibleChange = (isOpen: boolean) => {
  emits("visible-change", isOpen)
}
const itemClick = (e: MenuOptions) => {
  if (e.disable) {
    return
  }
  emits("select", e)
}

defineExpose({})
</script>

<style lang="scss" scoped>
.xs-dropdown .xs-dropdown__menu {
  --xs-dropdown-menuItem-hover-fill: var(--xs-color-primary-light-9);
  --xs-dropdown-menuItem-hover-color: var(--xs-color-primary);
  --xs-dropdown-menuItem-disabled-color: var(--xs-border-color-lighter);
  --xs-dropdown-menuItem-divided-color: var(--xs-border-color-lighter);
}

.xs-dropdown {
  display: inline-block;

  .xs-tooltip {
    --xs-popover-padding: 5px 0;
  }
}

.xs-dropdown__menu {
  padding: 0;
  margin: 0;
  list-style-type: none;

  .xs-dropdown__item {
    display: flex;
    align-items: center;
    padding: 5px 16px;
    margin: 0;
    font-size: var(--xs-font-size-base);
    line-height: 22px;
    color: var(--xs-text-color-regular);
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    outline: none;

    &:hover {
      color: var(--xs-dropdown-menuItem-hover-color);
      background-color: var(--xs-dropdown-menuItem-hover-fill);
    }

    &.is-disabled {
      color: var(--xs-dropdown-menuItem-disabled-color);
      cursor: not-allowed;
      background-image: none;
    }
  }

  .divided-placeholder {
    margin: 6px 0;
    border-top: 1px solid var(--xs-dropdown-menuItem-divided-color);
  }
}
</style>
