<template>
	<ChooseArea @change="changeArea"/>
</template>

<script setup lang="ts">
import ChooseArea from "../../components/ChooseArea/index.vue";
const changeArea=(val: any)=>{
	console.log(val);
}
</script>

<style></style>
