<template>
	<Progress :percentage="60" Animation></Progress>
	<Progress
		:percentage="60"
		Animation
		:text-inside="true"
		:stroke-width="20"
		status="exception"
	></Progress>
	<Progress
		:percentage="100"
		Animation
		:text-inside="true"
		:stroke-width="20"
		status="exception"
        type="dashboard"
	></Progress>
</template>

<script setup lang="ts">
import Progress from "../../components/Progress/index.vue";
</script>

<style lang="scss" scoped>
:deep(svg){
    height: 120px;
    width: 120px;
}
</style>
