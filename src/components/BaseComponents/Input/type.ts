/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-22 15:51:12
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-23 00:29:10
 */
export interface InputProps {
	type: string;
	modelValue: string;
	size?: "large" | "small";
	clearable?: boolean;
	showPassword?: boolean;
	disabled?: boolean;
	/* 原生属性 */
	placeholder?: string;
	readonly?: boolean;
	autocomplete?: string;
	autofocus?: boolean;
	form?: string;
}

export interface InputEmits {
	(e: "update:modelValue", value: string): void;
	(e: "input", value: string): void;
	(e: "change", value: string): void;
	(e: "focus", value: FocusEvent): void;
	(e: "blur", value: FocusEvent): void;
	(e: "clear"): void;
}

export interface InputInstance {
	ref: HTMLInputElement | HTMLTextAreaElement;
}
