<script lang="ts" setup>
import {
  FormContext,
  formContextKey,
  FormInstance,
  FormItemContext,
  FormProps,
  FormValidateFailure
} from "./types"
import { provide } from "vue"
import { ValidateFieldsError } from "async-validator"

defineOptions({
  name: "XsForm"
})
const props = defineProps<FormProps>()
const fileds: FormItemContext[] = []
const addField: FormContext["addField"] = (field) => {
  fileds.push(field)
}
const removeField: FormContext["removeField"] = (field) => {
  if (!field.prop) return
  if (!fileds.includes(field)) return
  fileds.splice(fileds.indexOf(field), 1)
}
const resetFields = (keys: string[] = []) => {
  const filterFields =
    keys.length > 0 ? fileds.filter((item) => keys.includes(item.prop)) : fileds
  filterFields.forEach((item) => {
    item.resetField()
  })
}
const clearValidate = (keys: string[] = []) => {
  const filterFields =
    keys.length > 0 ? fileds.filter((item) => keys.includes(item.prop)) : fileds
  filterFields.forEach((item) => {
    item.clearValidate()
  })
}
const validate = async () => {
  let validationErrors: ValidateFieldsError = {}
  for (let filed of fileds) {
    try {
      await filed.validate("")
    } catch (e) {
      const error = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...error.fields
      }
    }
  }
  if (Object.keys(validationErrors).length === 0) return true
  return Promise.reject(validationErrors)
}
provide(formContextKey, {
  ...props,
  addField,
  removeField
})
defineExpose<FormInstance>({
  validate,
  resetFields,
  clearValidate
})
</script>

<template>
  <form class="xs-form" model="">
    <slot />
  </form>
</template>

<style lang="scss" scoped></style>
