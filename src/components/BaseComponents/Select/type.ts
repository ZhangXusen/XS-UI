import { VNode } from "vue";

/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-12-01 17:32:47
 * @LastEditors: 小国际
 * @LastEditTime: 2023-12-05 21:40:52
 */
export interface SelectProps {
	modelValue: string;
	options?: SelectOption[];
	placeholder?: string;
	disabled?: boolean;
	clearable?: boolean;
	renderLabel?: (option: SelectOption) => VNode;
	filterable?: boolean;
	filterMethod?: (value: string) => SelectOption[];
	remote?: boolean;
	remoteMethod?: (value: any) => Promise<SelectOption[]>;
}

export interface SelectOption {
	label: string;
	value: string | number;
	disabled?: boolean;
}
export interface SelectStates {
	inputValue: string;
	selectedOption: null | SelectOption;
	mouseHovered: boolean; //鼠标是否hover到组件上
	loading: boolean;
	highlightIndex: number;
}

export interface SelectEmits {
	(e: "update:modelValue", value: string | number): void;
	(e: "change", value: string | number): void;
	(e: "clear"): void;
	(e: "visible-change", value: boolean): void;
}
