import { defineComponent } from "vue"

export const RenderVNode = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props, ctx) {
    return () => props.vNode
  }
})
