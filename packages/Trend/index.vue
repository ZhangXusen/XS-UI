<template>
	<div class="trend">
		<slot v-if="slots.default"> </slot>
		<div v-else class="text" :style="{ color: props.textColor }">
			{{ text }}
		</div>
		<div class="icon">
			<component
				:is="`el-icon-${toLine(icon)}`"
				:style="{ color: props.color }"
				v-if="type === 'up'"
				:class="{ reverse: reverseColor }"
			></component>
			<component
				:is="`el-icon-${toLine(icon)}`"
				:style="{ color: props.color }"
				v-else
				:class="{ reverse: reverseColor }"
			></component>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ArrowDown } from "@element-plus/icons-vue";
import { computed, onMounted, useSlots } from "vue";
import { toLine } from "../../src/utils";
export interface props {
	type?: string;
	text?: string;
	color?: string;
	reverseColor?: boolean;
	textColor?: string;
	icon?: string;
}
const slots = useSlots();
const props = withDefaults(defineProps<props>(), {
	type: "up",
	text: "文字",
	color: "red",
	upColor: "red",
	reverseColor: false,
	textColor: "black",
	icon: "arrowup",
});
</script>

<style lang="scss" scoped>
.trend {
	display: flex;
	align-items: center;
	.text {
		font-size: 12px;
		margin-right: 4px;
	}
	.icon {
		svg {
			width: 1em;
			height: 1em;
		}
	}
}
.reverse {
	filter: invert(100%);
}
</style>
