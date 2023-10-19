<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-17 21:00:03
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-19 21:54:19
-->

<template>
	<div class="xs-collapse">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from "vue";
import {
	CollapseContextKey,
	type CollapseEmits,
	type CollapseProps,
	type NameType,
} from "./type";

defineOptions({ name: "XsCollapse" });
const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmits>();
const activeNames = ref<NameType[]>(props.modelValue);
watch(
	() => props.modelValue,
	() => {
		activeNames.value = props.modelValue;
	}
);
/* 对手风琴的处理 */
if (props.according && activeNames.value.length > 1) {
	console.error("手风琴只能有一个active item");
}
/* 手风琴判断结束 */

/* 点击每个item */
const handleItemClick = (itemName: NameType) => {
	/* 手风琴处理 */
	if (props.according) {
		activeNames.value = [activeNames.value.includes(itemName) ? "" : itemName]; //保持只有一个itemName,已经打开则清空，无则打开
	}
	/* 处理结束 */
	const index = activeNames.value.indexOf(itemName);
	if (index > -1) {
		/* item在数组中：已打开 */
		activeNames.value.splice(index, 1);
	} else {
		/* 不在数组中：关闭 */
		activeNames.value.push(itemName);
	}
	emit("update:modelValue", activeNames.value);
	emit("change", activeNames.value);
};

provide(CollapseContextKey, {
	activeNames,
	handleItemClick,
});
</script>

<style scoped lang="scss">
.xs-collapse {
	height: 100%;
}
</style>
