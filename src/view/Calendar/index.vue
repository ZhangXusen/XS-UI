<!--
 * new page
 * @author: ZhangXusen
 * @since: 2022-08-10
 * index.vue
-->
<template>
	<Calendar
		:events="events"
		@date-click="dateClick"
		@event-click="eventClick"
		:event-content="eventContent"
	></Calendar>
</template>

<script setup lang="ts">
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";
import { ref } from "vue";
import Calendar from "../../components/Calendar/index.vue";
import { EventItem } from "../../components/Calendar/types";
let events = ref<EventItem[]>([
	{
		title: "购物",
		start: "2023-3-29",
		end: "2023-4-20",
		editable: true,
	},
	{
		title: "玩电脑",
		start: "2023-3-28",
		end: "2023-4-11",
	},
]);
const dateClick = (info: DateClickArg) => {
	console.log(info); //每一格的信息
	events.value.push({
		title: "学习",
		start: info.dateStr + "12:00",
		end: info.dateStr + "18:00",
	});
};
const eventClick = (info: EventClickArg) => {
	console.log(info); //每一格的信息
};
//自定义单元格内容
const eventContent = (arg: EventContentArg) => {
	let el = document.getElementById("div");
	let timeTextArr = arg.timeText.split("-");

	let start = timeTextArr[0]
		.replace("上午", "")
		.replace("下午", "")
		.replace("时", "");
	let end = timeTextArr[1]
		.replace("上午", "")
		.replace("下午", "")
		.replace("时", "");
	el.innerHTML = `
            111
            <div> 开始时间:${start}</div>
            <div>结束时间:${end}</div>
            <div>标题:${arg.event._def.title}</div>
        `;
	console.log(arg);
	return { domNodes: [el] };
};
</script>

<style scoped lang="scss"></style>
