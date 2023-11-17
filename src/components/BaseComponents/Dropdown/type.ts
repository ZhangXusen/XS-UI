import { VNode } from "vue";
import { TooltipProps } from "../Tooltips";

export interface DropdownProps extends TooltipProps {
	menuOptions: MenuOptions[];
}
export interface MenuOptions {
	label: string | VNode;
	key: string | number;
	disable?: boolean;
	divided?: boolean;
}

export interface DropdownEmits {
	(e: "visible-change", value: boolean): void;
	(e: "select", value: MenuOptions): void;
}

export interface DropdownInstance {
	show: () => void;
	hide: () => void;
}
