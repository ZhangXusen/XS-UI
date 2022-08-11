<template>
	<div class="trends">
		<trend color="blue"> </trend>
		<trend text="下降" icon="arrowdown" type="down" color="red"> </trend>
		<trend color="blue"> 插槽 </trend>
		<trend color="red" text="颜色反转" reverseColor></trend>
		<trend color="red" text="文字颜色" text-color="red"></trend>
		<trend text="自选图标" icon="edit"></trend>
	</div>
</template>

<script setup lang="ts">
import Trend from "../../components/Trend/index.vue";
</script>

<style lang="scss" scoped>
.trends {
	display: flex;
	flex-direction: row;
	align-items: center;
	.trend {
		margin-right: 10px;
	}
}
</style>
