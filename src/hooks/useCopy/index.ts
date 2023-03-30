import { ElMessage } from "element-plus";
export const useCopy = (text: string) => {
	let input = document.createElement("input"); //创建输入框
	input.value = text; //给input赋值
	document.body.appendChild(input); //挂载到body上
	input.select(); //选择输入框
	document.execCommand("Copy"); //复制
	document.body.removeChild(input);
	// 提示用户
	ElMessage.success("复制成功");
};
