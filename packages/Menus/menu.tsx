import { defineComponent, PropType, useAttrs } from "vue";
import { toLine } from "../utils";
import { MenuItem } from "./types";
import * as Icons from "@element-plus/icons-vue";
export default defineComponent({
  props: {
    data: {
      type: Array as unknown as PropType<MenuItem>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: "",
    },
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    //渲染无限层级方法
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        //每个菜单图标
        item.i = (Icons as any)[item.icon!];
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            );
          },
        };
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        }
        return (
          <el-menu-item index={item.index}>
            <item.i></item.i>
            <span>{item.name}</span>
          </el-menu-item>
        );
      });
    };
    let attrs = useAttrs();

    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      );
    };
  },
});
