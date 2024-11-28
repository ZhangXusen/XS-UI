/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-12 21:47:48
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-12 21:48:12
 */
import type { App } from "vue"
import Icon from "./src/Icon.vue"

Icon.install = (app: App) => {
  app.component(Icon.name, Icon)
}
export const XsIcon = Icon
export default Icon

export * from "./src/type"
