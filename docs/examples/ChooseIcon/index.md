# 菜单
## 效果
<div style="padding:1em; border:1px solid #ccc;border-radius:10px;margin-top:20px;">
   <xs-chooseIcon :title="title" v-model:visible="visible" />
</div>

<script setup >
import { ref } from "vue";

const visible = ref(false);
const title = ref("选择图标");
</script>

## 代码示例

```js

<template>
	<xs-chooseIcon :title="title" v-model:visible="visible" />
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
const visible = ref<boolean>(false);
const title = ref<string>("选择图标");
</script>



```