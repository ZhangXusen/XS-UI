/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-23 21:55:28
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-23 22:43:27
 */
export type SwitchValueType = boolean | string | number;

export interface SwitchProps {
	modelValue: SwitchValueType;
	disabled?: boolean;
	activeText?: string;
	inactiveText?: string;
	activeValue?: SwitchValueType;
	inactiveValue?: SwitchValueType;
	name?: string;
	id?: string;
	size?: "large" | "small";
}

export interface SwitchEmits {
	(e: "change", value: SwitchValueType): void;
	(e: "update:modelValue", value: SwitchValueType): void;
}
