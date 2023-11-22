<template>
	<div class="xs-dropdown">
		<Tooltip
			:trigger="trigger"
			:placement="placement"
			:popper-options="popperOptions"
			:manual="manual"
			@visible-change="visibleChange"
			ref="tooltipRef">
			<slot></slot>
			<template #content>
				<div>
					<ul class="xs-dropdown__menu">
						<template v-for="item in menuOptions" :key="item.key">
							<li class="divided-placeholder" v-if="item.divided"></li>
							<li
								class="xs-dropdown__item"
								:class="{
									'is-disabled': item.disable,
									'is-divided': item.divided,
								}"
								:id="`xs-dropdown-${item.key}`"
								@click="itemClick(item)">
								<RenderVNode :vNode="item.label"></RenderVNode>
							</li>
						</template>
					</ul>
				</div>
			</template>
		</Tooltip>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RenderVNode } from "../Common/RenderVNode";
import Tooltip from "../Tooltips/Tooltip.vue";
import { DropdownEmits, DropdownProps, MenuOptions } from "./type";

const props = withDefaults(defineProps<DropdownProps>(), {});
const emits = defineEmits<DropdownEmits>();
const tooltipRef = ref(null);

/* 继续往外透传popover的isOpen */
const visibleChange = (isOpen: boolean) => {
	emits("visible-change", isOpen);
};
const itemClick = (e: MenuOptions) => {
	if (e.disable) {
		return;
	}
	emits("select", e);
};

defineExpose({});
</script>

<style scoped lang="scss">
.xs-dropdown .xs-dropdown__menu {
	--xs-dropdown-menuItem-hover-fill: var(--xs-color-primary-light-9);
	--xs-dropdown-menuItem-hover-color: var(--xs-color-primary);
	--xs-dropdown-menuItem-disabled-color: var(--xs-border-color-lighter);
	--xs-dropdown-menuItem-divided-color: var(--xs-border-color-lighter);
}
.xs-dropdown {
	display: inline-block;
	.xs-tooltip {
		--xs-popover-padding: 5px 0;
	}
}
.xs-dropdown__menu {
	list-style-type: none;
	margin: 0;
	padding: 0;
	.xs-dropdown__item {
		display: flex;
		align-items: center;
		white-space: nowrap;
		list-style: none;
		line-height: 22px;
		padding: 5px 16px;
		margin: 0;
		font-size: var(--xs-font-size-base);
		color: var(--xs-text-color-regular);
		cursor: pointer;
		outline: none;
		&:hover {
			background-color: var(--xs-dropdown-menuItem-hover-fill);
			color: var(--xs-dropdown-menuItem-hover-color);
		}
		&.is-disabled {
			color: var(--xs-dropdown-menuItem-disabled-color);
			cursor: not-allowed;
			background-image: none;
		}
	}
	.divided-placeholder {
		margin: 6px 0;
		border-top: 1px solid var(--xs-dropdown-menuItem-divided-color);
	}
}
</style>
