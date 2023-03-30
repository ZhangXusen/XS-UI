# 菜单
## 效果
<div style="padding:1em; border:1px solid #ccc;border-radius:10px;margin-top:20px;">
  <xs-chooseArea  @change="changeArea"></xs-chooseArea>
</div>

<script setup>
const changeArea = (val) => {
	console.log(val);
};
</script>

## 代码示例

```js

<template>
	<choose-area @change="changeArea" />
</template>
<script setup lang="ts">
const changeArea = (val: any) => {
	console.log(val);
};
</script>

<style></style>

```
