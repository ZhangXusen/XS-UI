/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-03-29 22:44:52
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-20 19:52:21
 */
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "elements-plus-plus/style.css"
import DefaultTheme from "vitepress/theme"
// import "plugin-that-access-window-on-import";
import { AntDesignContainer } from "@vitepress-demo-preview/component"
import "@vitepress-demo-preview/component/dist/style.css"
import "./global.css"
export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component("demo-preview", AntDesignContainer)
    if (!import.meta.env.SSR) {
      const zxUI = await import("elements-plus-plus")
      app.use(zxUI.default)
    }
  }
}
