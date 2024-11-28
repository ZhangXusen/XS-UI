import { InjectionKey, Ref } from "vue"

export interface CollapseProps {
  modelValue: NameType[]
  according?: boolean
}
export type NameType = string | number
export interface ItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

export interface CollapseContextProps {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}
export const CollapseContextKey: InjectionKey<CollapseContextProps> =
  Symbol("CollapseContextKey")

export interface CollapseEmits {
  (e: "update:modelValue", values: NameType[]): void
  (e: "change", values: NameType[]): void
}
