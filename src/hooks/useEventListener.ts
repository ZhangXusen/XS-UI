import type { Ref } from "vue";
import { isRef, onMounted, onUnmounted, unref, watch } from "vue";
export const useEventListener = (
	target: Ref<EventTarget | null> | EventTarget,
	event: string,
	handler: (e: Event) => any
) => {
	if (isRef(target)) {
		watch(target, (newVal, oldVal) => {
			oldVal?.removeEventListener(event, handler);
			newVal?.addEventListener(event, handler);
		});
	} else {
		onMounted(() => {
			target.addEventListener(event, handler);
		});
	}
	onUnmounted(() => {
		/* unref :如果target是响应式则解除响应式，不是则啥也不做*/
		unref(target)?.removeEventListener(event, handler);
	});
};
