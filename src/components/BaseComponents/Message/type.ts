import { ComponentInternalInstance, VNode } from "vue";

export interface MessageProps {
	message?: string | VNode;
	duration?: number; //多久后对话框关闭
	showClose?: boolean; //是否显示关闭按钮
	type?: "success" | "danger" | "warning" | "info";
	onDestroy?: () => void;
	offset?: number; //message距离上面的距离
	id: string;
	zIndex?: number;
	transitionName?: string;
}

export interface MessageContext {
	id: string;
	vnode: VNode;
	props: MessageProps;
	vm: ComponentInternalInstance; //组件自身的示例：通过vnode.compoent或getCurrentInstance()获取
	destroy: () => void;
}
