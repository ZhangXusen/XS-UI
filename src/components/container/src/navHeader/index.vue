<template>
	<span @click="Toggle">
		<el-icon-expand style="margin-right: 10px" v-if="Collapse"></el-icon-expand>
		<el-icon-fold v-else></el-icon-fold>
	</span>
</template>

<script setup lang="ts">
const props = defineProps<{
	Collapse: boolean;
}>();
const emits = defineEmits(["update:Collapse"]);
const Toggle = () => {
	emits("update:Collapse", !props.Collapse);
};
</script>

<style></style>
