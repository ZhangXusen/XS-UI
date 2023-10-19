<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "../../components/BaseComponents/Button/Button.vue";
import { ButtonInstance } from "../../components/BaseComponents/Button/type";
const buttonRef = ref<ButtonInstance | null>(null);
onMounted(() => {
	if (buttonRef.value) {
		console.log(buttonRef);
	}
});
</script>
<template>
	<div class="">
		<div style="margin-top: 10px">
			<Button ref="buttonRef" type="primary">Primary</Button>
			<Button type="info">Info</Button>
			<Button type="danger">Danger</Button>
			<Button type="success">Success</Button>
			<Button type="warning">Warning</Button>
			<Button type="warning">Warning</Button>
		</div>
		<div style="margin-top: 10px">
			<Button type="primary" plain>Primary</Button>
			<Button type="info" plain>Info</Button>
			<Button type="danger" plain>Danger</Button>
			<Button type="success" plain>Success</Button>
			<Button type="warning" plain>Warning</Button>
			<Button type="warning" plain>Warning</Button>
		</div>
		<div style="margin-top: 10px">
			<Button type="primary" round>Primary</Button>
			<Button type="info" round>Info</Button>
			<Button type="danger" round>Danger</Button>
			<Button type="success" round>Success</Button>
			<Button type="warning" round>Warning</Button>
			<Button type="warning" round>Warning</Button>
		</div>
		<div style="margin-top: 10px">
			<Button type="primary" size="large">Primary</Button>
			<Button type="primary" size="medium">Primary</Button>
			<Button type="primary" size="small">Primary</Button>
		</div>
		<div style="margin-top: 10px">
			<Button rounded>圆角</Button>
			<Button circle>圆</Button>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
