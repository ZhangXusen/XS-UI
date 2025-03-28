import { App } from "vue"
import Calendar from "./src/index.vue"
// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component("xs-calendar", Calendar)
  }
}
export const XsCalendar = Calendar
export * from "./src/types"
