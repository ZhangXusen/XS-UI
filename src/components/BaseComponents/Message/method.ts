/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-18 20:57:08
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-19 23:14:20
 */
import { h, render, shallowReactive } from "vue";
import useZIndex from "../../../hooks/useZIndex";
import Message from "./Message.vue";
import { MessageContext, MessageProps } from "./type";

const instances: MessageContext[] = shallowReactive([]); //当前的message队列
let seed = 1;
/* 函数式生成Message */
/* Omit:排除onDestroy这个属性 */
export const createMessage = (
	props: Omit<MessageProps, "onDestroy" | "id">
) => {
	const id = `message_${seed++}`;
	const { nextZIndex } = useZIndex(20);
	const container = document.createElement("div");
	/* 销毁 */
	const destroy = () => {
		/* 销毁 */
		const idx = instances.findIndex((instance) => instance.id === id);
		if (idx === -1) return;
		/* 在队列中删除 */
		instances.splice(idx, 1);
		/* 将container清空 */
		render(null, container);
	};
	/* 手动销毁:手动切换组件expose出来的visible的值 */
	const manualDestroy = () => {
		const instance = instances.find((instance) => instance.id === id);
		if (instance) {
			instance.vm.exposed.visible.value = false;
		}
	};
	const newProps = {
		...props,
		id,
		onDestroy: destroy,
		zIndex: nextZIndex(),
	};
	const vNode = h(Message, newProps);
	render(vNode, container);

	document.body.appendChild(container.firstElementChild!);
	// console.log(vNode);
	const vm = vNode.component!;
	const instance: MessageContext = {
		id,
		vnode: vNode,
		props: newProps,
		vm,
		destroy: manualDestroy,
	};

	instances.push(instance);
	return instance;
};

export function getLastInstance() {
	return instances.at[-1];
	//at(-1),slice(-1) 不改变数组
}

/* 获取前一项的bottomOffset */
export function getLastBottomOffset(id: string) {
	const idx = instances.findIndex((instance) => instance.id === id);
	if (idx <= 0) {
		return 0;
	} else {
		const prev = instances[idx - 1]; //前一项
		return prev.vm!.exposed!.bottomOffset.value;
	}
}
