import { App } from "vue"

export * from "./hooks"

//转为小写驼峰命名法
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase()
}

export const withInstall = (component: any) => {
  component.install = (app: App) => {
    app.component(component.name, component)
  }
  return component
}
