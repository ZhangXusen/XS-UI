/**
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-13 23:22:32
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-13 23:29:43
 */
import { Options, Placement } from "@popperjs/core"
import { computed, defineComponent, Fragment, PropType, ref } from "vue"
import TooltipVue from "../Tooltips/Tooltip.vue"
import { MenuOptions } from "./type"

export const Dropdown = defineComponent({
  name: "XsDropdown",
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: "bottom"
    },
    trigger: {
      type: String as PropType<"hover" | "click">,
      default: "hover"
    },
    transition: {
      type: String,
      default: "fade"
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popperOptions: {
      type: Object as PropType<Options>
    },
    menuOptions: {
      type: Array as PropType<MenuOptions[]>,
      required: true
    },
    hideAfterClick: {
      type: Boolean,
      default: true
    },
    manual: {
      type: Boolean
    }
  },
  emits: ["visible-change", "select"],
  setup(props, { slots, emit, expose }) {
    const tooltipRef = ref(null)
    const itemClick = (e: MenuOptions) => {
      if (e.disable) {
        return
      }
      emit("select", e)
    }
    const visibleChange = (e: boolean) => {
      emit("visible-change", e)
    }
    const options = computed(() => {
      return props.menuOptions.map((item) => {
        return (
          <Fragment key={item.key}>
            {item.divided ? (
              <li role="separator" class="divided-placeholder" />
            ) : (
              ""
            )}
            <li
              class={{
                "xs-dropdown__item": true,
                "is-disabled": item.disable,
                "is-divided": item.divided
              }}
              id={`dropdown-item-${item.key}`}
              onClick={() => itemClick(item)}
            >
              {item.label}
            </li>
          </Fragment>
        )
      })
    })
    return () => (
      <div class="vk-dropdown">
        <TooltipVue
          trigger={props.trigger}
          placement={props.placement}
          popperOptions={props.popperOptions}
          manual={props.manual}
          ref={tooltipRef}
          onVisibleChange={visibleChange}
        >
          {{
            default: () => slots.default && slots.default(),
            content: () => <ul class="vk-dropdown__menu">{options.value}</ul>
          }}
        </TooltipVue>
      </div>
    )
  }
})
