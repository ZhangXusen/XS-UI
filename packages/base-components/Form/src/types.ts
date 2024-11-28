import { InjectionKey } from "vue"
import { RuleItem, ValidateError, ValidateFieldsError } from "async-validator"

export interface FormItemProps {
  label: string
  prop?: string
  rule: FormRules
}

export interface FormItemRule extends RuleItem {
  trigger?: string
}

export type FormRules = Record<string, FormItemRule[]>

export interface FormProps {
  model: Record<string, any>
  rules: FormRules
}

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export interface FormItemContext {
  validate: (trigger?: string) => Promise<any>
  prop: string
  resetField: () => void
  clearValidate: () => void
}

export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export interface ValidateStatusProp {
  state: "init" | "error" | "success"
  errorMsg: string
  loading: boolean
}

export interface FormInstance {
  validate: (
    callback?: (errors: FormValidateFailure | null) => void
  ) => Promise<any>
  resetFields: (keys: string[]) => void
  clearValidate: (keys: string[]) => void
}

export interface FormItemInstance {
  validate: (
    callback?: (errors: FormValidateFailure | null) => void
  ) => Promise<any>
  resetFields: (keys: string[]) => void
  clearValidate: (keys: string[]) => void
  validateState: ValidateStatusProp
}

export const formContextKey: InjectionKey<FormContext> = Symbol("formContext")
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol("formItemContext")
