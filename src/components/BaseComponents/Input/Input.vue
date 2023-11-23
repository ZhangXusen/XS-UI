<template>
	<div
		class="xs-input"
		:class="{
			[`xs-input--${type}`]: type,
			[`xs-input--${size}`]: size,
			'is-disabled': disabled,
			'is-prepend': $slots.prepend,
			'is-append': $slots.append,
			'is-prefix': $slots.prefix,
			'is-suffix': $slots.suffix,
			'is-focus': isFocus,
		}">
		<!-- input -->
		<template v-if="type !== 'textarea'">
			<!-- prepend-slot -->
			<div class="xs-input__prepend" v-if="$slots.prepend">
				<slot name="prepend"></slot>
			</div>
			<!-- native -->
			<div class="xs-input__wrapper">
				<!-- prefix -->
				<span class="xs-input__prefix" v-if="$slots.prefix">
					<slot name="prefix"></slot>
				</span>
				<input
					class="xs-input__inner"
					:disabled="disabled"
					:type="
						showPassword ? (isPasswordVisible ? 'text' : 'password') : type
					"
					:value="modelValue"
					@input="handleInput"
					@change="handleChange"
					@focus="handleFocus"
					@blur="handleBlur"
					:autocomplete="autocomplete"
					:autofocus="autofocus"
					:placeholder="placeholder"
					:form="form"
					:readonly="readonly"
					v-bind="$attrs"
					ref="InputRef" />
				<!-- suffix -->
				<span
					class="xs-input__suffix"
					v-if="$slots.suffix || disabled || clearable || showPassword"
					@click="keepFocus">
					<!-- 自定义 -->
					<slot name="suffix"></slot>
					<!--清空图标  -->
					<Icon
						icon="circle-xmark"
						v-if="showClear"
						@click="clear"
						class="xs-input__clear"
						@mousedown.prevent="" />
					<!-- 显示密码的图标： -->
					<Icon
						icon="eye-slash"
						v-if="showPassword && !disabled && modelValue && isPasswordVisible"
						@click="isPasswordVisible = false"
						class="xs-input__password" />
					<!-- 隐藏密码的图标-->
					<Icon
						icon="eye"
						v-if="showPassword && !disabled && modelValue && !isPasswordVisible"
						@click="isPasswordVisible = true"
						class="xs-input__password" />
				</span>
			</div>
			<!-- append -->
			<div class="xs-input__append" v-if="$slots.append">
				<slot name="append"></slot>
			</div>
		</template>
		<!-- textarea -->
		<template v-else>
			<textarea
				class="xs-textarea__wrapper"
				:disabled="disabled"
				:value="modelValue"
				@input="handleInput"
				@focus="handleFocus"
				@blur="handleBlur"
				@change="handleChange"
				:autocomplete="autocomplete"
				:autofocus="autofocus"
				:placeholder="placeholder"
				:form="form"
				:readonly="readonly"
				v-bind="$attrs"
				ref="InputRef"></textarea>
		</template>
	</div>
</template>

<script setup lang="ts">
import { Ref, computed, nextTick, ref } from "vue";
import Icon from "../Icon/Icon.vue";
import { InputEmits, InputProps } from "./type";
defineOptions({ name: "XsInput", inheritAttrs: false });
const props = withDefaults(defineProps<InputProps>(), {
	type: "text",
	autocomplete: "off",
});
const emits = defineEmits<InputEmits>();
const InputRef = ref(null) as Ref<HTMLInputElement>;
const isFocus = ref(false);
/* 密码的显示与隐藏 */
const isPasswordVisible = ref(false);

const handleInput = (e) => {
	emits("update:modelValue", e.target.value);
	emits("input", e.target.value);
};
const handleChange = (e) => {
	emits("change", e.target.value);
};
/* 处理聚焦 */
const handleFocus = (e: FocusEvent) => {
	isFocus.value = true;
	emits("focus", e);
};
/* 处理失焦 */
const handleBlur = (e: FocusEvent) => {
	isFocus.value = false;
	emits("blur", e);
};

const showClear = computed(() => {
	return (
		//clearable为true
		//不被禁用
		//modelValue不为空
		//正在被聚焦
		props.clearable && !props.disabled && !!props.modelValue && isFocus.value
	);
});
const clear = (e) => {
	// console.log("clear");
	emits("update:modelValue", "");
	emits("clear");
	emits("input", "");
	emits("change", "");
};

/* 点击suffix后继续聚焦input */
const keepFocus = async () => {
	await nextTick();
	InputRef.value.focus();
};

defineExpose({
	ref: InputRef,
	handleFocus,
	handleBlur,
	handleInput,
	handleChange,
	clear,
});
</script>

<style scoped lang="scss">
.xs-input {
	--xs-input-text-color: var(--xs-text-color-regular);
	--xs-input-border: var(--xs-border);
	--xs-input-hover-border: var(--xs-border-color-hover);
	--xs-input-focus-border: var(--xs-color-primary);
	--xs-input-transparent-border: 0 0 0 1px transparent inset;
	--xs-input-border-color: var(--xs-border-color);
	--xs-input-border-radius: var(--xs-border-radius-base);
	--xs-input-bg-color: var(--xs-fill-color-blank);
	--xs-input-icon-color: var(--xs-text-color-placeholder);
	--xs-input-placeholder-color: var(--xs-text-color-placeholder);
	--xs-input-hover-border-color: var(--xs-border-color-hover);
	--xs-input-clear-hover-color: var(--xs-text-color-secondary);
	--xs-input-focus-border-color: var(--xs-color-primary);
}

.xs-input {
	--xs-input-height: var(--xs-component-size);
	position: relative;
	font-size: var(--xs-font-size-base);
	display: inline-flex;
	width: 100%;
	line-height: var(--xs-input-height);
	box-sizing: border-box;
	vertical-align: middle;
	&.is-disabled {
		cursor: not-allowed;
		.xs-input__wrapper {
			background-color: var(--xs-disabled-bg-color);
			box-shadow: 0 0 0 1px var(--xs-disabled-border-color) inset;
		}
		.xs-input__inner {
			color: var(--xs-disabled-text-color);
			-webkit-text-fill-color: var(--xs-disabled-text-color);
			cursor: not-allowed;
		}
		.xs-textarea__inner {
			background-color: var(--xs-disabled-bg-color);
			box-shadow: 0 0 0 1px var(--xs-disabled-border-color) inset;
			color: var(--xs-disabled-text-color);
			-webkit-text-fill-color: var(--xs-disabled-text-color);
			cursor: not-allowed;
		}
	}
	&.is-prepend {
		> .xs-input__wrapper {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
	&.is-append {
		> .xs-input__wrapper {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}
}

.xs-input--large {
	--xs-input-height: var(--xs-component-size-large);
	font-size: 14px;
	.xs-input__wrapper {
		padding: 1px 15px;
		.xs-input__inner {
			--xs-input-inner-height: calc(var(--xs-input-height, 40px) - 2px);
		}
	}
}
.xs-input--small {
	--xs-input-height: var(--xs-component-size-small);
	font-size: 12px;
	.xs-input__wrapper {
		padding: 1px 7px;
		.xs-input__inner {
			--xs-input-inner-height: calc(var(--xs-input-height, 24px) - 2px);
		}
	}
}
.xs-input__prefix,
.xs-input__suffix {
	display: inline-flex;
	white-space: nowrap;
	flex-shrink: 0;
	flex-wrap: nowrap;
	height: 100%;
	text-align: center;
	color: var(--xs-input-icon-color, var(--xs-text-color-placeholder));
	transition: all var(--xs-transition-duration);
}
.xs-input__prefix {
	> :first-child {
		margin-left: 0px !important;
	}
	> :last-child {
		margin-right: 8px !important;
	}
}
.xs-input__suffix {
	> :first-child {
		margin-left: 8px !important;
	}
	> :last-child {
		margin-right: 0px !important;
	}
}
.xs-input__prepend,
.xs-input__append {
	background-color: var(--xs-fill-color-light);
	color: var(--xs-color-info);
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 100%;
	border-radius: var(--xs-input-border-radius);
	padding: 0 20px;
	white-space: nowrap;
}
.xs-input__prepend {
	border-right: 0;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	box-shadow: 1px 0 0 0 var(--xs-input-border-color) inset,
		0 1px 0 0 var(--xs-input-border-color) inset,
		0 -1px 0 0 var(--xs-input-border-color) inset;
}
.xs-input__append {
	border-left: 0;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	box-shadow: 0 1px 0 0 var(--xs-input-border-color) inset,
		0 -1px 0 0 var(--xs-input-border-color) inset,
		-1px 0 0 0 var(--xs-input-border-color) inset;
	& > .xs-input__wrapper {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
}

.xs-input--textarea {
	position: relative;
	display: inline-block;
	width: 100%;
	vertical-align: bottom;
	font-size: var(--xs-font-size-base);
}
.xs-textarea__wrapper {
	position: relative;
	display: block;
	resize: vertical;
	padding: 5px 11px;
	line-height: 1.5;
	box-sizing: border-box;
	width: 100%;
	font-size: inherit;
	font-family: inherit;
	color: var(--xs-input-text-color, var(--xs-text-color-regular));
	background-color: var(--xs-input-bg-color, var(--xs-fill-color-blank));
	background-image: none;
	-webkit-appearance: none;
	box-shadow: 0 0 0 1px var(--xs-input-border-color, var(--xs-border-color))
		inset;
	border-radius: var(--xs-input-border-radius, var(--xs-border-radius-base));
	transition: var(--xs-transition-box-shadow);
	border: none;
	&:focus {
		outline: none;
		box-shadow: 0 0 0 1px var(--xs-input-focus-border-color) inset;
	}
	&::placeholder {
		color: var(--xs-input-placeholder-color);
	}
}
.xs-input__wrapper {
	display: inline-flex;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	padding: 1px 11px;
	background-color: var(--xs-input-bg-color, var(--xs-fill-color-blank));
	background-image: none;
	border-radius: var(--xs-input-border-radius, var(--xs-border-radius-base));
	transition: var(--xs-transition-box-shadow);
	box-shadow: 0 0 0 1px var(--xs-input-border-color, var(--xs-border-color))
		inset;
	&:hover {
		box-shadow: 0 0 0 1px var(--xs-input-hover-border-color) inset;
	}
	&.is-focus {
		box-shadow: 0 0 0 1px var(--xs-input-focus-border-color) inset;
	}
	.xs-input__inner {
		--xs-input-inner-height: calc(var(--xs-input-height, 32px) - 2px);
		width: 100%;
		flex-grow: 1;
		-webkit-appearance: none;
		color: var(--xs-input-text-color, var(--xs-text-color-regular));
		font-size: inherit;
		height: var(--xs-input-inner-height);
		line-height: var(--xs-input-inner-height);
		padding: 0;
		outline: none;
		border: none;
		background: none;
		box-sizing: border-box;
		&::placeholder {
			color: var(--xs-input-placeholder-color);
		}
	}
	.xs-icon {
		height: inherit;
		line-height: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all var(--xs-transition-duration);
		margin-left: 8px;
	}
	.xs-input__clear,
	.xs-input__password {
		color: var(--xs-input-icon-color);
		font-size: 14px;
		cursor: pointer;
		&:hover {
			color: var(--xs-input-clear-hover-color);
		}
	}
}
</style>
