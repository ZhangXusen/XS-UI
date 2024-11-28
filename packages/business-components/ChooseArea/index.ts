import { App } from "vue"
import ChooseArea from "./src/index.vue"
// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component("xs-chooseArea", ChooseArea)
  }
}
export const XsChooseArea = ChooseArea
