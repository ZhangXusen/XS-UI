# 用法
## 效果
因为表格数据需要Mock，所以只能贴上截图
![Table](/public/table.png)


## 代码示例
```js

<template>
  <Table
    pagination
    :total="total"
    paginationAlign="center"
    @size-change="sizeChange"
    @current-change="currentChange"
    :data="tableData"
    :options="options"
    elementLoadingText="加载中"
    :element-loading-icon="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0,0,0,.5)"
    @close="close"
    isEditRow
    v-model:editRawIndex="editRowIndex"
  >
    <!-- 自定义日期slot -->
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <!-- 自定义姓名插槽 -->
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>name: {{ scope.row.name }}</div>
          <div>address: {{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>
    <!-- 自定义编辑状态的√,×部分 -->
    <template #editCell>
      <div style="display: flex; margin-left: 5px; align-items: center">
        <el-button size="small">取消</el-button>
        <el-button size="small" type="primary">确定</el-button>
      </div>
    </template>

    <template #action="scope">
      <el-button type="primary" @click="edit(scope)">编辑</el-button>
      <el-button type="danger">删除</el-button>
    </template>
    <template #editRow="scope">
      <el-button type="primary" @click="sure(scope)">确认</el-button>
      <el-button type="danger">取消</el-button>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Table from "../../components/Table/index.vue";
import { TableOptions } from "../../components/Table/types";
import axios from "axios";
const tableData = ref([]);

const options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    slot: "date",
    editable: true,
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
    editable: true,
  },
  {
    label: "操作",
    align: "center",
    action: true,
    prop: "edit",
  },
];
const current = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);
const edit = (scope: any) => {
  // console.log(scope);
  editRowIndex.value = "edit"; //区分点击的是哪个按钮
};
const getData = () => {
  axios
    .post("/api/list", {
      current: current.value,
      pageSize: pageSize.value,
    })
    .then((res: any) => {
      // console.log(res.data);
      tableData.value = res.data.data.rows;
      total.value = res.data.data.total;
    });
};
onMounted(() => {
  getData();
});
const editRowIndex = ref<string>("edit");
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

//点√
const sure = (scope: any) => {
  console.log(scope);
};
// 点×
const close = (scope: any) => {
  console.log(scope);
};

const sizeChange = (val: number) => {
  pageSize.value = val;
  getData();
};
const currentChange = (val: number) => {
  current.value = val;
  getData();
};
</script>

<style scoped lang="scss">
svg {
  position: relative;
  top: 3px;
}
</style>

```

