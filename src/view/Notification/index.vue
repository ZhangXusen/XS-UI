<template>
	<Notification :value="55" :max="50">
		<template #default>
			<NoticeList @clickItem="handleItem"  @clickAction="handleAction" :list="list" :actions="actions"></NoticeList>
		</template>
	</Notification>
	<br />
	<br />
	<!-- <Notification :value="10" :max="50"></Notification><br />
	<br />
	<Notification :value="55" :max="50" :isDot="true"></Notification><br />
	<br />
	<Notification :value="55" :max="50" icon="ChatRound"></Notification> -->
</template>

<script setup lang="ts">
import { list, actions } from "./data.ts";
import Notification from "../../components/Notification/index.vue";
import NoticeList from "../../components/NoticeList/index.vue";

const handleItem=(val:any)=>{
console.log(val);
}
const handleAction=(val:any)=>{
	console.log(val);
}
</script>

<style></style>
