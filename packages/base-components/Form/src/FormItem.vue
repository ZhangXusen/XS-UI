<script lang="ts" setup>
import {
  formContextKey,
  FormItemContext,
  formItemContextKey,
  FormItemInstance,
  FormItemProps,
  FormValidateFailure,
  ValidateStatusProp
} from "./types"
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  provide,
  reactive
} from "vue"
import { isNil } from "lodash-es"
import Schema from "async-validator"

defineOptions({
  name: "XsFormItem"
})
const props = defineProps<FormItemProps>()
const formContext = inject(formContextKey)
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})
const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && isNil(rules[props.prop])) {
    return rules[props.prop]
  } else {
    return []
  }
})
let initialValue = null
const validateState = reactive<ValidateStatusProp>({
  state: "init",
  errorMsg: "",
  loading: false
})

const getTriggeredRules = (trigger?: string) => {
  const rules = itemRules.value
  if (rules) {
    return rules.filter((rule) => {
      if (!rule.trigger || !trigger) return true
      return rule.trigger === trigger
    })
  } else {
    return []
  }
}
const isRequired = computed(() => {
  return itemRules.value.some((rule) => rule.required)
})
const validate = async (trigger?: string) => {
  const modelName = props.prop
  const triggerRules = getTriggeredRules(trigger)
  if (triggerRules.length === 0) {
    return true
  }
  if (modelName) {
    const validator = new Schema({
      [modelName]: triggerRules
    })
    validateState.loading = true
    return validator
      .validate({
        [modelName]: innerValue.value
      })
      .then(() => {
        validateState.state = "success"
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateState.state = "error"
        validateState.errorMsg =
          errors && errors.length > 0 ? errors[0].message || "" : ""
        return Promise.reject(e)
      })
      .finally(() => {
        validateState.loading = false
      })
  }
}
const clearValidate = () => {
  validateState.state = "init"
  validateState.errorMsg = ""
  validateState.loading = false
}

const resetField = () => {
  clearValidate()
  const model = formContext.model
  if (model && props.prop && !isNil(model[props.prop])) {
    model[props.prop] = initialValue
  }
}
const context: FormItemContext = {
  validate,
  prop: props.prop || "",
  clearValidate,
  resetField
}
provide(formItemContextKey, context)
defineExpose<FormItemInstance>({
  validate,
  resetField,
  clearValidate,
  validateState
})
onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = innerValue.value
  }
})
onUnmounted(() => {
  formContext?.removeField(context)
})
</script>

<template>
  <div
    :class="{
      'is-error': validateState.state === 'error',
      'is-success': validateState.state === 'success',
      'is-loading': validateState.loading,
      'is-required': isRequired
    }"
    class="xs-form-item"
  >
    <label :for="prop" class="xs-form-item__label">
      <slot :label="label" name="label">{{ label }}</slot>
    </label>
    <div class="xs-form-item__content">
      <slot :validate="validate"></slot>
      <div
        v-if="validateState.state === 'error'"
        class="xs-form-item__error-msg"
      >
        {{ validateState.errorMsg }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
