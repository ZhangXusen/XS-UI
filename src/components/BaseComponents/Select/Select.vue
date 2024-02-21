<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-12-01 17:32:37
 * @LastEditors: 小国际
 * @LastEditTime: 2023-12-05 22:19:43
-->
<template>
	<div
		class="xs-select"
		:class="{ 'is-disabled': disabled }"
		@click="toggleDropdown"
		@mouseenter="states.mouseHovered = true"
		@mouseleave="states.mouseHovered = false">
		<Tooltips
			placement="bottom-start"
			manual
			ref="tooltipRef"
			:popper-options="popperOptions"
			:trigger="'click'"
			@click-outside="controlDropdown(false)">
			<Input
				ref="inputRef"
				v-model="states.inputValue"
				:disabled="disabled"
				:placeholder="filterPlaceholder"
				:readonly="!filterable || !isDropdownOpen"
				@input="debounceFilter"
				@keydown="handleKeydown">
				<template #suffix>
					<Icon
						v-if="showClearIcon"
						icon="circle-xmark"
						class="xs-input__clear"
						@mousedown.prevent=""
						@click.stop="clear">
					</Icon>
					<Icon
						v-else
						icon="angle-down"
						class="header-angle"
						:class="{ 'is-active': isDropdownOpen }" />
				</template>
			</Input>

			<template #content>
				<div
					class="xs-select__nodata"
					v-if="filterable && filterOptions.length === 0">
					no matching data
				</div>
				<ul class="xs-select__menu" v-else>
					<template v-for="(item, index) in filterOptions" :key="index">
						<li
							class="xs-select__menu-item"
							:class="{
								'is-disabled': item.disabled,
								'is-selected': states.selectedOption?.value === item.value,
								'is-highlighted': states.highlightIndex === index,
							}"
							:id="`select-item-${item.value}`"
							@click="selectItem(item)">
							<RenderVNode
								:v-node="renderLabel ? renderLabel(item) : item.label" />
						</li>
					</template>
				</ul>
			</template>
		</Tooltips>
	</div>
</template>

<script setup lang="ts">
import { debounce, isFunction } from "lodash";
import { computed, reactive, ref, watch } from "vue";
import { RenderVNode } from "../Common/RenderVNode";
import Icon from "../Icon/Icon.vue";
import Input from "../Input/Input.vue";
import Tooltips from "../Tooltips/Tooltip.vue";
import { SelectEmits, SelectOption, SelectProps, SelectStates } from "./type";
defineOptions({
	name: "XsSelect",
});
const findOption = (value: string) => {
	const option = props.options.find((item) => item.value == value);
	return option ? option : null;
};
const props = withDefaults(defineProps<SelectProps>(), {
	options: () => [],
});
const emits = defineEmits<SelectEmits>();
const initOption = findOption(props.modelValue);
const tooltipRef = ref();
const inputRef = ref();
const isDropdownOpen = ref(false);
const states = reactive<SelectStates>({
	inputValue: initOption ? initOption.label : "",
	selectedOption: initOption,
	mouseHovered: false,
	loading: false,
	highlightIndex: -1,
});
const timeout = computed(() => (props.remote ? 300 : 0));
/* 过滤,搜索 */
const filterOptions = ref(props.options);
watch(
	() => props.options,
	(newVal) => {
		filterOptions.value = newVal;
	}
);
const filterPlaceholder = computed(() => {
	//filter模式下，再次选择时的placeholder=上次选择的值
	if (props.filterable && states.selectedOption && isDropdownOpen.value) {
		return states.selectedOption.label;
	} else {
		//默认的placeholder
		return props.placeholder;
	}
});
const generateFiltersOptions = async (searchValue: string) => {
	if (!props.filterable) return;
	if (props.filterMethod && isFunction(props.filterMethod)) {
		filterOptions.value = props.filterMethod(searchValue);
	} else if (
		props.remote &&
		props.remoteMethod &&
		isFunction(props.remoteMethod)
	) {
		filterOptions.value = await props.remoteMethod(searchValue);
		console.log(filterOptions.value);
	} else {
		filterOptions.value = props.options.filter((option) =>
			option.label.includes(searchValue)
		);
	}
	states.highlightIndex = -1;
};
const onFilter = () => {
	generateFiltersOptions(states.inputValue);
};
const debounceFilter = debounce(onFilter, timeout.value);
const controlDropdown = (isOpen: boolean) => {
	if (isOpen) {
		/* filter模式,再次选择时 */
		if (props.filterable && states.selectedOption) {
			states.inputValue = "";
		}
		if (props.filterable) {
			generateFiltersOptions(states.inputValue);
		}
		tooltipRef.value.show();
	} else {
		/*再次选择，但没选时，inputValue为上次的值 */
		if (props.filterable) {
			states.inputValue = states.selectedOption
				? states.selectedOption.label
				: "";
		}
		tooltipRef.value.hide();
		states.highlightIndex = -1;
	}
	isDropdownOpen.value = isOpen;
	emits("visible-change", isOpen);
};
const toggleDropdown = () => {
	if (props.disabled) return;
	if (isDropdownOpen.value) {
		controlDropdown(false);
	} else {
		controlDropdown(true);
	}
};

/* 选择选项功能： */
const selectItem = (e: SelectOption) => {
	if (e.disabled) return;
	states.inputValue = e.label;
	states.selectedOption = e;
	emits("change", e.value);
	emits("update:modelValue", e.value);
	inputRef.value.ref.focus();
};
/* 键盘控制 */
const handleKeydown = (e: KeyboardEvent) => {
	switch (e.key) {
		case "Enter":
			//下拉框收起，按enter打开
			if (!isDropdownOpen.value) {
				controlDropdown(true);
			} else {
				//下拉框打开，选择了选项，按enter选择
				if (
					states.highlightIndex >= 0 &&
					filterOptions.value[states.highlightIndex]
				) {
					selectItem(filterOptions.value[states.highlightIndex]);
				} else {
					//下拉框打开，没选选项，按enter收起下拉框
					controlDropdown(false);
				}
			}

			break;
		case "Escape":
			if (isDropdownOpen.value) {
				controlDropdown(false);
			}
		case "ArrowUp":
			e.preventDefault();
			if (filterOptions.value.length > 0) {
				if (states.highlightIndex === -1 || states.highlightIndex === 0) {
					states.highlightIndex = filterOptions.value.length - 1;
				} else {
					states.highlightIndex--;
				}
			}
			break;
		case "ArrowDown":
			e.preventDefault();
			if (filterOptions.value.length > 0) {
				if (
					states.highlightIndex === filterOptions.value.length - 1 ||
					states.highlightIndex === -1
				) {
					states.highlightIndex = 0;
				} else {
					states.highlightIndex++;
				}
			}
			break;
		default:
			break;
	}
};
/* popper样式设置 */
const popperOptions: any = {
	modifiers: [
		{
			name: "offset",
			options: {
				offset: [0, 9],
			},
		},
		{
			name: "sameWidth",
			enabled: true,
			fn: ({ state }: { state: any }) => {
				state.styles.popper.width = `${state.rects.reference.width}px`;
			},
			phase: "beforeWrite",
			requires: ["computeStyles"],
		},
	],
};

/* 清空功能 */
const showClearIcon = computed(() => {
	return (
		props.clearable &&
		states.mouseHovered &&
		states.selectedOption &&
		states.inputValue.trim() !== ""
	);
});
const clear = () => {
	states.inputValue = "";
	emits("clear");
	emits("change", "");
	emits("update:modelValue", "");
};
</script>

<style scoped lang="scss">
.xs-select {
	--xs-select-item-hover-bg-color: var(--xs-fill-color-light);
	--xs-select-item-font-size: var(--xs-font-size-base);
	--xs-select-item-font-color: var(--xs-text-color-regular);
	--xs-select-item-selected-font-color: var(--xs-color-primary);
	--xs-select-item-disabled-font-color: var(--xs-text-color-placeholder);
	--xs-select-input-focus-border-color: var(--xs-color-primary);
}

.xs-select {
	display: inline-block;
	vertical-align: middle;
	line-height: 32px;
	.xs-tooltip .xs-tooltip__popper {
		padding: 0;
	}
	.xs-input.is-focus .xs-input__wrapper {
		box-shadow: 0 0 0 1px var(--xs-select-input-focus-border-color) inset !important;
	}
	.xs-input {
		.header-angle {
			transition: transform var(--xs-transition-duration);
			&.is-active {
				transform: rotate(180deg);
			}
		}
	}

	.xs-input__inner {
		cursor: pointer;
	}
	.xs-select__nodata,
	.xs-select__loading {
		padding: 10px 0;
		margin: 0;
		text-align: center;
		color: var(--xs-text-color-secondary);
		font-size: var(--xs-select-font-size);
	}
	.xs-select__menu {
		list-style: none;
		margin: 6px 0;
		padding: 0;
		box-sizing: border-box;
	}
	.xs-select__menu-item {
		margin: 0;
		font-size: var(--xs-select-item-font-size);
		padding: 0 32px 0 20px;
		position: relative;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(--xs-select-item-font-color);
		height: 34px;
		line-height: 34px;
		box-sizing: border-box;
		cursor: pointer;
		&:hover {
			background-color: var(--xs-select-item-hover-bg-color);
		}
		&.is-selected {
			color: var(--xs-select-item-selected-font-color);
			font-weight: 700;
		}
		&.is-highlighted {
			background-color: var(--xs-select-item-hover-bg-color);
		}
		&.is-disabled {
			color: var(--xs-select-item-disabled-font-color);
			cursor: not-allowed;
			&:hover {
				background-color: transparent;
			}
		}
	}
}
</style>
