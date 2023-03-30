<template>
	<ChooseIcon :title="title" v-model:visible="visible" />
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import ChooseIcon from "../../components/ChooseIcon/index.vue";
const visible = ref<boolean>(false);
const title = ref<string>("选择图标");
</script>

<style></style>
