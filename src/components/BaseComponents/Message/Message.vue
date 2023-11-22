<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-18 20:16:00
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-20 00:19:58
-->
<template>
	<Transition
		:name="transitionName"
		@after-leave="destroyComponent"
		@enter="updateHeight">
		<div
			ref="messageRef"
			class="xs-message"
			v-show="visible"
			role="alert"
			@mouseenter="clearTimer"
			@mouseleave="startTimer"
			:style="cssStyle"
			:class="{ [`xs-message--${type}`]: type, isClose: showClose }">
			<div class="xs-message__content">
				<slot>
					<RenderVNode v-if="message" :v-node="message"></RenderVNode>
				</slot>
			</div>
			<div class="xs-message__close" v-if="showClose" @click="visible = false">
				<Icon icon="xmark"></Icon>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
defineOptions({ name: "XsMessage", inheritAttrs: false });
import { computed, getCurrentInstance, onMounted, ref } from "vue";
import { useEventListener } from "../../../hooks/useEventListener";
import { RenderVNode } from "../Common/RenderVNode";
import Icon from "../Icon/Icon.vue";
import { getLastBottomOffset } from "./method";
import { MessageProps } from "./type";
const props = withDefaults(defineProps<MessageProps>(), {
	type: "info",
	duration: 3000,
	offset: 20,
	transitionName: "fade-up",
});
const messageRef = ref<HTMLElement>(null);
const instance = getCurrentInstance();
const visible = ref(false);
const height = ref(0);
//获取上一个message最底部的坐标
const lastOffset = computed(() => getLastBottomOffset(props.id));
/* 该message距离窗口top的距离：上一个message最底部的坐标+本message的offset */
const topOffset = computed(() => {
	return lastOffset.value + props.offset;
});
/* 该部组件最底部的坐标:topOffset+自身高度 */
const bottomOffset = computed(() => {
	return topOffset.value + height.value;
});
const cssStyle = computed(() => {
	return {
		top: topOffset.value + "px",
		zIndex: props.zIndex,
	};
});

let timer;
const startTimer = () => {
	if (props.duration == 0) return;
	timer = setTimeout(() => {
		visible.value = false;
	}, props.duration);
};
const clearTimer = () => {
	clearTimeout(timer);
};
onMounted(async () => {
	visible.value = true;
	startTimer();
	// await nextTick();
	// height.value = messageRef.value!.getBoundingClientRect().height;
});

/* visible为false时，不仅仅只是v-show:false，还要将整个dom销毁：使用onDestroy里的的render(null,container)方法销毁dom */
// watch(visible, (newVal) => {
// 	if (!newVal) {
// 		props.onDestroy();
// 	}
// });
const destroyComponent = () => {
	props.onDestroy();
};
const updateHeight = () => {
	height.value = messageRef.value!.getBoundingClientRect().height;
};
/* 按esc键，message消失 */
useEventListener(document, "keydown", (e: KeyboardEvent) => {
	if (e.code === "Escape") {
		visible.value = false;
	}
});
defineExpose({
	bottomOffset,
	visible,
});
</script>

<style scoped lang="scss">
.xs-message {
	--xs-message-bg-color: var(--xs-color-info-light-9);
	--xs-message-border-color: var(--xs-border-color-lighter);
	--xs-message-padding: 15px 19px;
	--xs-message-close-size: 16px;
	--xs-message-close-icon-color: var(--xs-text-color-placeholder);
	--xs-message-close-hover-color: var(--xs-text-color-secondary);
}
.xs-message {
	width: fit-content;
	max-width: calc(100% - 32px);
	box-sizing: border-box;
	border-radius: var(--xs-border-radius-base);
	border-width: var(--xs-border-width);
	border-style: var(--xs-border-style);
	border-color: var(--xs-message-border-color);
	position: fixed;
	left: 50%;
	top: 20px;
	transform: translateX(-50%);
	background-color: var(--xs-message-bg-color);
	padding: var(--xs-message-padding);
	display: flex;
	align-items: center;
	transition: top var(--xs-transition-duration),
		opacity var(--xs-transition-duration),
		transform var(--xs-transition-duration);
	.xs-message__content {
		color: var(--xs-message-text-color);
		overflow-wrap: anywhere;
	}
	&.is-close .xs-message__content {
		padding-right: 30px;
	}
	.xs-message__close {
		display: flex;
		align-items: center;
	}
	.xs-message__close svg {
		cursor: pointer;
	}
}
@each $val in info, success, warning, danger {
	.xs-message--#{$val} {
		--xs-message-bg-color: var(--xs-color-#{$val}-light-9);
		--xs-message-border-color: var(--xs-color-#{$val}-light-8);
		--xs-message-text-color: var(--xs-color-#{$val});
		.xs-message__close {
			--xs-icon-color: var(--xs-color-#{$val});
		}
	}
}
.xs-message.fade-up-enter-from,
.xs-message.fade-up-leave-to {
	opacity: 0;
	transform: translate(-50%, -100%);
}
</style>
