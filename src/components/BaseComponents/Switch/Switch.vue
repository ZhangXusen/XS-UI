<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-23 21:55:24
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-23 23:21:47
-->
<template>
	<div
		class="xs-switch"
		@click="switchValue"
		:class="{
			[`xs-switch--${size}`]: size,
			'is-disabled': disabled,
			'is-checked': checked,
		}">
		<input
			class="xs-switch__input"
			type="checkbox"
			role="switch"
			:name="name"
			:disabled="disabled"
			@keydown.enter="switchValue"
			ref="inputRef" />
		<div class="xs-switch__core">
			<div class="xs-switch__core-inner">
				<span
					class="xs-switch__core-inner-text"
					v-if="activeText || inactiveText">
					{{ checked ? activeText : inactiveText }}
				</span>
			</div>
			<div class="xs-switch__core-action"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import type { SwitchEmits, SwitchProps } from "./type";
defineOptions({ name: "XsSwitch", inheritAttrs: false });
const props = withDefaults(defineProps<SwitchProps>(), {
	activeValue: true,
	inactiveValue: false,
});
const emits = defineEmits<SwitchEmits>();

const innerValue = ref(props.modelValue);
const checked = computed(() => innerValue.value === props.activeValue);
const inputRef = ref<HTMLInputElement>();
const switchValue = () => {
	if (props.disabled) return;
	const newVal = checked.value ? props.inactiveValue : props.activeValue;
	innerValue.value = newVal;
	emits("update:modelValue", newVal);
	emits("change", newVal);
};
onMounted(() => {
	inputRef.value!.checked = checked.value;
});
watch(checked, (newVal) => {
	inputRef.value!.checked = newVal;
});
watch(
	() => props.modelValue,
	(newVal) => {
		innerValue.value = newVal;
	}
);
</script>

<style scoped lang="scss">
.xs-switch {
	--xs-switch-on-color: var(--xs-color-primary);
	--xs-switch-off-color: var(--xs-border-color);
	--xs-switch-on-border-color: var(--xs-color-primary);
	--xs-switch-off-border-color: var(--xs-border-color);
}

.xs-switch {
	display: inline-flex;
	align-items: center;
	font-size: 14px;
	line-height: 20px;
	height: 32px;
	.xs-switch__input {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;
		margin: 0;
		&:focus-visible {
			& ~ .xs-switch__core {
				outline: 2px solid var(--xs-switch-on-color);
				outline-offset: 1px;
			}
		}
	}
	&.is-disabled {
		opacity: 0.6;
		.xs-switch__core {
			cursor: not-allowed;
		}
	}
	&.is-checked {
		.xs-switch__core {
			border-color: var(--xs-switch-on-border-color);
			background-color: var(--xs-switch-on-color);
			.xs-switch__core-action {
				left: calc(100% - 17px);
			}
			.xs-switch__core-inner {
				padding: 0 18px 0 4px;
			}
		}
	}
}
.xs-switch--large {
	font-size: 14px;
	line-height: 24px;
	height: 40px;
	.xs-switch__core {
		min-width: 50px;
		height: 24px;
		border-radius: 12px;
		.xs-switch__core-action {
			width: 20px;
			height: 20px;
		}
	}
	&.is-checked {
		.xs-switch__core .xs-switch__core-action {
			left: calc(100% - 21px);
			color: var(--xs-switch-on-color);
		}
	}
}
.xs-switch--small {
	font-size: 12px;
	line-height: 16px;
	height: 24px;
	.xs-switch__core {
		min-width: 30px;
		height: 16px;
		border-radius: 8px;
		.xs-switch__core-action {
			width: 12px;
			height: 12px;
		}
	}
	&.is-checked {
		.xs-switch__core .xs-switch-core-action {
			left: calc(100% - 13px);
			color: var(--xs-switch-on-color);
		}
	}
}
.xs-switch__core {
	display: inline-flex;
	align-items: center;
	position: relative;
	height: 20px;
	min-width: 40px;
	border: 1px solid var(--xs-switch-off-border-color);
	outline: none;
	border-radius: 10px;
	box-sizing: border-box;
	background: var(--xs-switch-off-color);
	cursor: pointer;
	transition: border-color var(--xs-transition-duration),
		background-color var(--xs-transition-duration);
	.xs-switch__core-action {
		position: absolute;
		left: 1px;
		border-radius: var(--xs-border-radius-circle);
		width: 16px;
		height: 16px;
		background-color: var(--xs-color-white);
		transition: all var(--xs-transition-duration);
	}
	.xs-switch__core-inner {
		width: 100%;
		transition: all var(--xs-transition-duration);
		height: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 0 4px 0 22px;
		.xs-switch__core-inner-text {
			font-size: 12px;
			color: var(--xs-color-white);
			user-select: none;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
</style>
