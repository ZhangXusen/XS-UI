import { App } from "vue"
import Form from "./index.vue"

export default {
  install(app: App) {
    app.component("xs-form", Form)
  }
}
export const XsForm = Form
export * from "./types"
