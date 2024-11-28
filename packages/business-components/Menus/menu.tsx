import { defineComponent, PropType, useAttrs } from "vue"
import { MenuItem } from "./types"
import * as Icons from "@element-plus/icons-vue"
import { ElMenu, ElMenuItem, ElSubMenu } from "element-plus"

export default defineComponent({
  props: {
    data: {
      type: Array as unknown as PropType<MenuItem>,
      required: true
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    //渲染无限层级方法
    const renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        //每个菜单图标
        item.i = (Icons as any)[item.icon!]
        const slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            )
          }
        }
        if (item.children && item.children.length) {
          return (
            <ElSubMenu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </ElSubMenu>
          )
        }
        return (
          <ElMenuItem index={item.index}>
            <item.i></item.i>
            <span>{item.name}</span>
          </ElMenuItem>
        )
      })
    }
    const attrs = useAttrs()

    return () => {
      return (
        <ElMenu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </ElMenu>
      )
    }
  }
})
