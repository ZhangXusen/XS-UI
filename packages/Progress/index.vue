<template>
	<el-progress :percentage="p" v-bind="$attrs"></el-progress>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps({
	percentage: {
		type: Number,
		default: 0,
	},
	Animation: {
		type: Boolean,
		default: false,
	},
	time: {
		type: Number,
		default: 3000,
	},
});
let p = ref(props.percentage);
onMounted(() => {
	if (props.Animation) {
		p.value = 0;
		//规定时间内加载完成
		//每秒加载多长
		let speed = Math.ceil(props.time / props.percentage);
		let timer = setInterval(() => {
			p.value += 1;
			if (p.value >= props.percentage) {
				clearInterval(timer);
			}
		}, speed);
	}
});
</script>

<style></style>
