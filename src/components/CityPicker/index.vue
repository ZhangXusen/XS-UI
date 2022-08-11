<template>
	<el-popover
		v-model:visible="visible"
		placement="bottom-start"
		:width="500"
		trigger="click"
	>
		<template #reference>
			<div class="result">
				<div>{{ result }}</div>
				<div>
					<el-icon-arrowup :class="{ rotate: visible }"></el-icon-arrowup>
				</div>
			</div>
		</template>
		<div class="container">
			<el-row>
				<el-col :span="8">
					<el-radio-group v-model="radioVal">
						<el-radio-button label="按城市" />
						<el-radio-button label="按省份" />
					</el-radio-group>
				</el-col>
				<el-col :span="14" :offset="2">
					<el-select
						v-model="selectVal"
						filterable
						:filter-method="filterMethod"
						placeholder="请输入城市"
						@change="changeSelect"
					>
						<el-option
							v-for="item in options"
							:key="item.id"
							:label="item.name"
							:value="item.id"
						/>
					</el-select>
				</el-col>
			</el-row>
			<template v-if="radioVal === '按城市'">
				<el-row>
					<div class="city">
						<div
							class="city-item"
							v-for="(value, key, index) in cities"
							:key="index"
							@click="clickAlp(key)"
						>
							{{ key }}
						</div>
						<!-- a标签href实现点击跳转 -->
						<!-- <a 
						:href="`#+${key}`" 
						class="city-item"
						v-for="(value, key, index) in cities"
						:key="index"
						@click="clickAlp(key)"
					>
						{{ key }}
					</a> -->
						<!-- <div
						v-for="(item, index) in Object.keys(cities)"
						class="city-item"
						:key="index"
						@click="clickAlp(item)"
					>
						{{ item }}
					</div> -->
					</div>
				</el-row>
				<el-scrollbar max-height="300px">
					<template v-for="(value, key) in cities" :key="key">
						<el-row style="margin-bottom: 10px" :id="key">
							<el-col :span="2">{{ key }}:</el-col>
							<el-col :span="22" class="cities">
								<div
									v-for="item in value"
									:key="item.id"
									@click="clickItem(item)"
								>
									<div>{{ item.name }}</div>
								</div>
							</el-col>
						</el-row>
					</template>
				</el-scrollbar>
			</template>
			<template v-else>
				<div class="province">
					<div
						class="province-item"
						v-for="(value, key, index) in provinces"
						:key="index"
						@click="clickAlp(value[0].id)"
					>
						{{ key }}
					</div>
					<el-scrollbar max-height="300px">
						<template
							v-for="(item, index) in Object.values(provinces)"
							:key="index"
						>
							<template v-for="(item1, index1) in item" :key="index1">
								<el-row style="margin-bottom: 10px" :id="item1.id">
									<el-col :span="4">{{ item1.name }}:</el-col>
									<el-col :span="20" class="cities">
										<div
											v-for="(item2, index2) in item1.data"
											:key="index2"
											@click="clickProvince(item2)"
										>
											<div>{{ item2 }}</div>
										</div>
									</el-col>
								</el-row>
							</template>
						</template>
					</el-scrollbar>
				</div>
			</template>
		</div>
	</el-popover>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { scrollIntoView } from "element-plus/lib/utils";
import city from "./lib/cities.js";
import province from "./lib/province.json";
import { City, Province } from "./types.ts";
const emits = defineEmits(["chooseCity", "chooseProvince"]);
//选择结果
const result = ref<string>("请选择");
const visible = ref<boolean>(false);

const radioVal = ref<string>("按城市");
const selectVal = ref<string>("");
const cities = ref(city.cities);
const provinces = ref(province);
//所有Cities的备份
const allCity = ref<City[]>([]);
//搜索下拉框
const options = ref([]);
onMounted(() => {
	let values = Object.values(cities.value).flat(2);
	options.value = values;
	allCity.value = values;
});

//搜索框过滤方法
const filterMethod = (val: string) => {
	let values = Object.values(cities.value).flat(2);
	if (val === "") {
		options.value = values;
	} else {
		if (radioVal.value === "按城市") {
			options.value = values.filter((item) => {
				return item.name.includes(val) || item.spell.includes(val);
			});
		} else {
			options.value = values.filter((item) => {
				return item.name.includes(val);
			});
		}
	}
};
//下拉框选择
const changeSelect = (id: number) => {
	console.log(id);
	let city = allCity.value.find((item) => item.id === id);
	console.log(city);
	result.value = city.name;
	if (radioVal.value === "按城市") {
		emits("chooseCity", city);
	} else {
		emits("chooseProvince", city.name);
	}
};
//点击每个城市
const clickItem = (item: City) => {
	result.value = item.name;
	visible.value = false;
	emits("chooseCity", item);
};
const clickProvince = (item: string) => {
	result.value = item;
	visible.value = false;
	emits("chooseProvince", item);
};
const clickAlp = (alpha: string) => {
	console.log(alpha);
	let el = document.getElementById(alpha);
	if (el) el.scrollIntoView(); //滚动到当前id元素的位置
};
</script>

<style lang="scss" scoped>
.result {
	display: flex;
	align-items: center;
	width: fit-content;
	cursor: pointer;
	svg {
		margin-left: 5px;
		position: relative;
		top: 2px;
		margin-left: 4px;
		transition: all 0.25s linear;
	}
	.rotate {
		transform: rotate(180deg);
	}
}
.container {
	padding: 6px;
	.city,
	.province {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 10px;
		&-item {
			padding: 3px 6px;
			margin-right: 4px;
			margin-bottom: 6px;
			margin-top: 5px;
			border: 1px solid #eee;
			cursor: pointer;
		}
	}
	.cities {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		& > div {
			margin-right: 6px;
			margin-bottom: 6px;
			cursor: pointer;
		}
	}
}
</style>
