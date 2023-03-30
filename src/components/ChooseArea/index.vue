<template>
	<div>
		<el-select placeholder="请选择省份" clearable v-model="province">
			<el-option :value="item.name" v-for="item in AllAreas" :key="item.code">{{
				item.name
			}}</el-option>
		</el-select>
		<el-select
			:disabled="!province"
			placeholder="请选择城市"
			v-model="city"
			style="margin: 0 10px"
			clearable
		>
			<el-option
				v-for="item in selectCity"
				:key="item.code"
				:value="item.name"
				:label="item.name"
				>{{ item.name }}</el-option
			>
		</el-select>
		<el-select
			:disabled="!province || !city"
			placeholder="请选择区域"
			v-model="area"
			clearable
		>
			<el-option
				v-for="item in selectArea"
				:key="item.code"
				:value="item.name"
				:label="item.name"
				>{{ item.name }}</el-option
			>
		</el-select>
	</div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { emit } from "process";
import AllAreas from "./lib/pca-code.json";
export interface AreaItem {
	name: string;
	code: string;
	children?: AreaItem[];
}
export interface Data {
	name: string;
	code: string;
}
const province = ref<string>(""); //省份
const city = ref<string>(""); //城市
const area = ref<string>(""); //区域
const Areas = ref(AllAreas); //所有
const selectCity = ref<AreaItem[]>([]);
const selectArea = ref<AreaItem[]>([]);

const emits = defineEmits(["change"]);

//监听省,以更新城市
watch(
	() => province.value,
	(newVal) => {
		if (newVal) {
			let cities = Areas.value.find(
				(item) => item.name === province.value
			)!.children;
			selectCity.value = cities;
			city.value = "";
			area.value = "";
		}
	}
);
//监听城市,以更新区域
watch(
	() => city.value,
	(newVal) => {
		if (newVal) {
			let areas = selectCity.value.find(
				(item: { name: string }) => item.name === city.value
			)!.children!;
			selectArea.value = areas;
			area.value = "";
		}
	}
);
//监听区域
watch(
	() => area.value,
	(newVal) => {
		if (newVal) {
			let provinceData: Data = {
				code:
					province.value &&
					AllAreas.find((item) => item.name === province.value)!.code,
				name: province.value,
			};
			let cityData: Data = {
				code:
					city.value &&
					selectCity.value.find(
						(item: { name: string }) => item.name === city.value
					)!.code,
				name: city.value,
			};
			let areaData: Data = {
				code:
					newVal &&
					city.value &&
					selectArea.value.find((item) => item.name === area.value)!.code,
				name: newVal,
			};
			emits("change", {
				province: provinceData,
				city: cityData,
				area: areaData,
			});
		}
	}
);
</script>

<style lang="scss">
.el-select {
	margin-top: 10px;
}
</style>
