<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-03-28 20:16:21
 * @LastEditors: 小国际
 * @LastEditTime: 2023-03-28 20:26:53
-->
<template>
	<el-tabs>
		<el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
			<el-scrollbar max-height="300px">
				<div
					class="container"
					v-for="(item1, index1) in item.content"
					:key="index1"
					@click="clickItem(item1, index1)"
				>
					<div class="avatar" v-if="item1.avatar">
						<el-avatar :size="33" :src="item1.avatar"></el-avatar>
					</div>
					<div class="content">
						<div class="content-tit" v-if="item1.title">
							<div>{{ item1.title }}</div>
							<el-tag size="small" :type="item1.tagType" v-if="item1.tag">{{
								item1.tag
							}}</el-tag>
						</div>
						<div class="content-time" v-if="item1.desc">{{ item1.desc }}</div>
						<div class="content-time" v-if="item1.time">{{ item1.time }}</div>
					</div>
				</div>
				<div class="actions">
					<div
						class="a-item"
						v-for="(action, i) in actions"
						:key="i"
						@click="clickAction(action, i)"
					>
						<div class="a-icon" v-if="action.icon">
							<component :is="`el-icon-${toLine(action.icon)}`"></component>
						</div>
						<div class="a-text">{{ action.text }}</div>
					</div>
				</div>
			</el-scrollbar>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup lang="ts">
import { onMounted, PropType } from "vue";
import { toLine } from "../../src/utils";
import { ActionOptions, ListItem, ListOptions } from "./types";

const props = defineProps({
	list: {
		type: Array as PropType<ListItem[]>,
		required: true,
	},
	actions: {
		type: Array as unknown as PropType<ActionOptions>,
		default: () => [],
	},
});
const emits = defineEmits(["clickItem", "clickAction"]);
const clickItem = (item: ListOptions, index: number) => {
	emits("clickItem", { item, index });
};
const clickAction = (action: ActionOptions, index: number) => {
	emits("clickAction", { action, index });
};
</script>

<style lang="scss" scoped>
:deep(.el-tabs__nav) {
	width: 100%;
	display: flex;
}
:deep(.el-tabs__item) {
	display: flex;
	flex: 1;
	justify-content: center;
	text-align: center;
}

.container {
	display: flex;
	align-items: center;
	padding: 12px 20px;
	cursor: pointer;
	.avatar {
		flex: 1;
	}
	&:hover {
		background-color: #e6f6ff;
	}
	.content {
		flex: 3;
		&-time {
			font-size: 12px;
			color: #999;
			margin-top: 5px;
		}
		&-tit {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
}
.actions {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid #eee;
	.a-item {
		height: 50px;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		&:nth-child(1) {
			border-right: 1px solid #eee;
		}
		.a-icon {
			margin-right: 4px;
			position: relative;
			top: 2px;
		}
	}
}
:deep(.el-popper) {
	padding: 0;
}
</style>
