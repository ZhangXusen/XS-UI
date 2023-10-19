<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-17 21:06:57
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-19 21:51:47
-->

<template>
	<div
		class="xs-collapse-items"
		:class="{
			'is-disabled': disabled,
		}">
		<div
			class="xs-collapse-item__header"
			:id="`item-header-${name}`"
			:class="{
				'is-disabled': disabled,
				'is-active': isActive,
			}"
			@click="handleClick">
			<slot name="title">
				{{ title }}
			</slot>
		</div>
		<Transition name="slide" v-on="TransitionEvent">
			<div class="xs-collapse-item__wrapper" v-show="isActive">
				<div :id="`item-content-${name}`">
					<slot></slot>
				</div>
			</div>
		</Transition>
	</div>
</template>
<script setup lang="ts">
import { computed, inject } from "vue";
import { CollapseContextKey, ItemProps } from "./type";
defineOptions({ name: "XsCollapseItem" });
const props = defineProps<ItemProps>();

const CollapseContextProp = inject(CollapseContextKey);

const isActive = computed(() =>
	CollapseContextProp?.activeNames.value.includes(props.name)
);
const handleClick = () => {
	if (props.disabled) return;
	CollapseContextProp?.handleItemClick(props.name);
};

/* 特效 */
const TransitionEvent = {
	beforeEnter(el) {
		el.style.height = "0px";
	},
	enter(el) {
		el.style.height = `${el.scrollHeight}px`;
	},
	afterEnter(el) {
		el.style.height = "";
		el.style.overflow = "";
	},
	beforeLeave(el) {
		el.style.height = `${el.scrollHeight}px`;
		el.style.overflow = "hidden";
	},
	leave(el) {
		el.style.height = "0px";
	},
	afterLeave(el) {
		el.style.height = "";
		el.style.overflow = "";
	},
};
</script>

<style scoped lang="scss">
.xs-collapse-item__header {
	font-size: 14px;
}
</style>
