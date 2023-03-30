# 快速开始

本节将介绍如何在项目中使用该组件库

## 用法
<div style="padding:1em;">
     <xs-chooseIcon :title="title" v-model:visible="visible" />
</div>

### 代码示例
<script setup >
import { ref } from "vue";
const visible = ref(false);
const title = ref("选择图标");

</script>

``` js
 <xs-chooseIcon :title="title" v-model:visible="visible" />
<script setup lang="ts">
import { ref } from "vue";

const visible = ref<boolean>(false);
const title = ref<string>("选择图标");
</script>

```

