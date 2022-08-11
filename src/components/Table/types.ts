export interface TableOptions {
	label: string; //表头
	prop: string; //字段名词
	width?: string | number;
	align?: "left" | "center" | "right";
	slot?: string; //自定义列表模板名
    action?:boolean; //是否为可操作项
    editable?: boolean; //
}
