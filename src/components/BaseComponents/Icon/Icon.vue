<!--
 * new page
 * @author: ZhangXusen
 * @since: 2023-10-20
 * index.vue
-->
<template>
	<i
		class="xs-icon"
		:class="{ [`xs-icon--${type}`]: type }"
		:style="customStyles"
		v-bind="$attrs">
		<font-awesome-icon v-bind="filtersProps"></font-awesome-icon>
	</i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { omit } from "lodash";
import { computed } from "vue";
import { IconProps } from "./type";

defineOptions({ name: "XsIcon", inheritAttrs: false });
const props = defineProps<IconProps>();
const filtersProps = computed(() => omit(props, ["type", "color"]));
/* 自定义color */
const customStyles = computed(() => {
	return props.color ? { color: props.color } : {};
});
</script>

<style scoped lang="scss"></style>
