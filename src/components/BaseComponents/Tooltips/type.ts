import { Options, Placement } from "@popperjs/core";

/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-12 17:30:17
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-13 21:55:41
 */
export interface TooltipProps {
	content?: string; //内容
	trigger?: "hover" | "click"; //触发方式
	placement?: Placement; //提示位置
	manual?: boolean; //手动控制
	popperOptions?: Partial<Options>;
	transition?: string;
}

export interface ToolTipEmit {
	(e: "visible-change", value: boolean): void;
}
