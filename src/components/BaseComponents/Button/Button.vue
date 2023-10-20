<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-10 19:55:47
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-20 15:19:36
-->
<!--
 * new page
 * @author: ZhangXusen
 * @since: 2023-10-10
 * Button.vue
-->
<template>
	<button
		ref="_ref"
		class="xs-button"
		:class="{
			[`xs-button--${type}`]: type,
			[`xs-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
		}"
		:disabled="disabled || loading"
		:autofocus="autofocus"
		:type="nativeType">
		<!-- loading -->
		<Icon icon="spinner" spin v-if="loading && !$slots.loading" />
		<template v-if="loading">
			<slot name="loading"></slot>
		</template>
		<!-- icon -->
		<Icon :icon="icon" v-if="icon" />
		<span><slot></slot></span>
	</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "../Icon/Icon.vue";
import type { ButtonProps } from "./type";
withDefaults(defineProps<ButtonProps>(), {
	nativeType: "button",
});
defineOptions({ name: "XsButton" });
const _ref = ref<HTMLButtonElement>();
defineExpose({
	ref: _ref,
});
</script>

<style scoped lang="scss"></style>
