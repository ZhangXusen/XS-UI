<template>
	<el-popover
		popper-class="zxs-popper"
		placement="bottom"
		:width="300"
		trigger="click"
	>
		<template #reference>
			<el-badge style="badge" :value="value" :max="max" :is-dot="isDot">
				<component :is="`el-icon-${toLine(icon)}`"></component>
			</el-badge>
		</template>
		<template #default>
			<slot> </slot>
		</template>
	</el-popover>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { toLine } from "../../src/utils";
export interface props {
	icon?: string;
	value?: number | string;
	max?: number | string;
	isDot?: boolean;
}
const props = withDefaults(defineProps<props>(), {
	icon: "Bell",
	value: 0,
	max: 100,
	isDot: false,
});
const visible = ref(false);
</script>

<style lang="scss" scoped>
.badge {
	cursor: pointer;
}
</style>
