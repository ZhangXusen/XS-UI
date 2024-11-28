/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-10 19:55:43
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-15 15:37:09
 */
export type ButtonType = "primary" | "danger" | "info" | "success" | "warning"
export type ButtonSize = "small" | "medium" | "large"
/* button的原生属性 */
export type NativeType = "button" | "submit" | "reset"
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  round?: boolean
  plain?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType: NativeType
  autofocus?: boolean
  icon?: string
  loading?: boolean
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
