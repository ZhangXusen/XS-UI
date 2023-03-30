<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-03-28 20:16:21
 * @LastEditors: 小国际
 * @LastEditTime: 2023-03-28 20:23:55
-->
<template>
	<div class="zxs-choose-dialog-body">
		<el-button @click="handleClick" type="primary">选择图标</el-button>
		<el-dialog :title="title" v-model="dialogVisible">
			<el-scrollbar>
				<div class="container">
					<div
						v-for="(item, index) in Object.keys(Icons)"
						:key="index"
						class="icon-list"
						@click="copyIcon(item)"
					>
						<div>
							<component :is="`el-icon-${toLine(item)}`"></component>
						</div>
						<div class="text">{{ item }}</div>
					</div>
				</div>
			</el-scrollbar>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
import * as Icons from "@element-plus/icons-vue";
import { ref, watch } from "vue";
import { toLine } from "../../../src/utils";
import { useCopy } from "../../../src/hooks/useCopy";
const props = defineProps<{
	title: string;
	visible: boolean;
}>();

//拷贝一份父组件传的props
const dialogVisible = ref<boolean>(props.visible);
const emits = defineEmits(["update:visible"]);
const handleClick = () => {
	console.log("click chooseIcon");
	emits("update:visible", !props.visible);
};
// 监听visible变化
watch(
	() => props.visible,
	(newval) => {
		dialogVisible.value = newval;
	}
);
watch(
	() => dialogVisible.value,
	(newVal) => {
		emits("update:visible", newVal);
	}
);

//复制图标
const copyIcon = (item: string) => {
	let text = `<el-text-${toLine(item)} />`;
	useCopy(text);
	dialogVisible.value = false;
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
}
.icon-list {
	width: 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	cursor: pointer;
	height: 70px;
}
svg {
	height: 2em;
	width: 2em;
}
.text {
	font-size: 14px;
}
</style>
