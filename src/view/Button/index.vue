<!--
 * @Description: 
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-10 20:10:29
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-13 23:18:26
-->
<script setup lang="ts">
import { h, onMounted, ref } from "vue";
import Button from "../../components/BaseComponents/Button/Button.vue";
import { ButtonInstance } from "../../components/BaseComponents/Button/type";
import Dropdown from "../../components/BaseComponents/Dropdown/Dropdown.vue";
import Icon from "../../components/BaseComponents/Icon/Icon.vue";
import Tooltip from "../../components/BaseComponents/Tooltips";

const buttonRef = ref<ButtonInstance | null>(null);
const menuOptions = [
	{ label: "11111", key: 1 },
	{ label: "22222", key: 2, disable: true },
	{ label: h("b", "粗体标签"), key: 2 },
	{ label: "33333", key: 3, divided: true },
	{ label: "44444", key: 4 },
	{ label: "55555", key: 4 },
];
onMounted(() => {
	if (buttonRef.value) {
		console.log(buttonRef);
	}
});
</script>
<template>
	<div class="">
		<div style="margin-top: 10px">
			<Button ref="buttonRef" type="primary">Primary</Button>
			<Button type="info">Info</Button>
			<Button type="danger">Danger</Button>
			<Button type="success">Success</Button>
			<Button type="warning">Warning</Button>
		</div>
		<div style="margin-top: 10px">
			<Button type="primary" plain>Primary</Button>
			<Button type="info" plain>Info</Button>
			<Button type="danger" plain>Danger</Button>
			<Button type="success" plain>Success</Button>
			<Button type="warning" plain>Warning</Button>
		</div>
		<div style="margin-top: 10px">
			<Button type="primary" round>Primary</Button>
			<Button type="info" round>Info</Button>
			<Button type="danger" round>Danger</Button>
			<Button type="success" round>Success</Button>
			<Button type="warning" round>Warning</Button>
		</div>
		<div style="margin-top: 10px">
			<Button type="primary" disabled>Primary</Button>
			<Button type="info" disabled>Info</Button>
			<Button type="danger" disabled>Danger</Button>
			<Button type="success" disabled>Success</Button>
			<Button type="warning" disabled>Warning</Button>
		</div>
		<div style="margin-top: 10px">
			<Button type="primary" size="large">Primary</Button>
			<Button type="primary" size="medium">Primary</Button>
			<Button type="primary" size="small">Primary</Button>
		</div>

		<div style="margin-top: 10px">
			<Button rounded type="primary">圆角</Button>
			<Button circle type="primary">圆</Button>
		</div>
		<div style="margin-top: 10px">
			<Button icon="search" type="primary" circle></Button>
			<Button icon="user" size="small">用户</Button>
			<Button icon="user" size="medium">用户</Button>
			<Button icon="user" size="large">用户</Button>
		</div>
		<div style="margin-top: 10px">
			<Button :loading="true">加载</Button>
			<Button :loading="true">
				<template #loading>
					<Icon icon="search" spin></Icon>
					自定义加载按钮
				</template>
			</Button>
		</div>
	</div>
	<div style="margin-top: 10px" class="tooltip-list">
		<Tooltip content="这是一个提示" trigger="hover"
			><Button>hover</Button></Tooltip
		>
		<Tooltip trigger="click">
			<Button>点我一下</Button>
			<template #content>
				<span>这是一个提示自定义插槽</span>
			</template>
		</Tooltip>
		<Tooltip content="这是一个提示" trigger="hover" placement="left"
			><Button>hover</Button></Tooltip
		>
		<Tooltip content="这是一个提示" trigger="hover" placement="right"
			><Button>hover</Button></Tooltip
		><Tooltip content="这是一个提示" trigger="hover" placement="bottom"
			><Button>hover</Button></Tooltip
		><Tooltip content="这是一个提示" trigger="hover" placement="top"
			><Button>hover</Button></Tooltip
		>
	</div>
	<div style="margin-top: 10px">
		<Dropdown placement="bottom" trigger="click" :menu-options="menuOptions">
			<Button>Dropdown</Button>
		</Dropdown>
	</div>
</template>

<style scoped lang="scss">
.tooltip-list {
	display: flex;
	div {
		margin-left: 20px;
	}
}
</style>
