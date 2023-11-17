import { defineComponent } from "vue";

const RenderVNode = defineComponent({
	props: {
		vNode: {
			type: [String, Object],
			required: true,
		},
	},
	setup(props, ctx) {
		return () => props.vNode;
	},
});

export default RenderVNode;
