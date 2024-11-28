<!--
 * new page
 * @author: ZhangXusen
 * @since: 2022-08-09
 * index.vue
-->
<template>
  <el-table
    v-loading="isLoading"
    :data="tableData"
    :element-loading-background="elementLoadingBackground"
    :element-loading-spinner="elementLoadingIcon"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :element-loading-text="elementLoadingText"
    v-bind="$attrs"
    @row-click="rowClick"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <!-- 传入自定义slot -->
      <el-table-column
        v-if="item.prop && !item.action"
        :align="item.align"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
      >
        <template #default="scope">
          <!-- 可编辑行内容 -->
          <template v-if="scope.row.rowEdit">
            <el-input v-model="scope.row[item.prop]"></el-input>
          </template>
          <!-- 默认行内容 -->
          <template v-else>
            <!-- 点击编辑后状态，确保只能同时一个编辑一个 -->
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex">
                <el-input v-model="scope.row[item.prop]"></el-input>
                <!-- 用户自定义编辑状态的√,×部分 -->
                <slot
                  v-if="$slots.editCell"
                  :scope="scope"
                  name="editCell"
                ></slot>
                <!-- 默认√×内容 -->
                <div v-else class="icons">
                  <el-icon-check
                    class="check"
                    @click.stop="check(scope)"
                  ></el-icon-check>
                  <el-icon-close
                    class="close"
                    @click.stop="close(scope)"
                  ></el-icon-close>
                </div>
              </div>
            </template>
            <!-- 正常显示状态 -->
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component
                :is="`el-icon-${toLine(editIcon)}`"
                v-if="item.editable"
                @click.stop="clickEdit(scope)"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :align="actionOptions?.align"
      :label="actionOptions?.label"
      :width="actionOptions?.width"
    >
      <template #default="scope">
        <slot v-if="scope.row.rowEdit" :scope="scope" name="editRow"></slot>
        <slot v-else :scope="scope" name="action"></slot>
      </template>
    </el-table-column>
  </el-table>
  <div
    v-if="pagination && !isLoading"
    :style="{ justifyContent: justifyContent }"
    class="pagination"
  >
    <el-pagination
      :currentPage="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { cloneDeep } from "lodash"
import { computed, onMounted, PropType, ref, watch } from "vue"
import { TableOptions } from "./types"
import { toLine } from "@element-plus-plus/utils"

let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  //加载过程配置
  elementLoadingText: {
    type: String
  },
  elementLoadingIcon: {
    type: String
  },
  elementLoadingBackground: {
    type: String
  },
  elementLoadingSvg: {
    type: String
  },
  //加载svg的配置
  elementLoadingSvgViewBox: {
    type: String
  },
  //可编辑单元格图标
  editIcon: {
    type: String,
    default: "edit"
  },
  //是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  //编辑行按钮标识
  editRowIndex: {
    type: String,
    default: ""
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => {
      return [10, 20, 30, 40]
    }
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  //是否显示分页
  pagination: {
    type: Boolean,
    default: false
  },
  // 显示分页的对齐方式
  paginationAlign: {
    type: String as PropType<"left" | "center" | "right">,
    default: "left"
  }
})

const tableOptions = computed(() =>
  props.options.filter((item) => !item.action)
)
const actionOptions = computed(() =>
  props.options.find((item) => item.action === true)
)

const isLoading = computed(() => !props.data || props.data.length === 0)

//可编辑单元格逻辑处理
const emits = defineEmits([
  "check",
  "close",
  "update:editRowIndex",
  "size-change",
  "current-change"
])

let currentEdit = ref<string>("") //当前点击的单元格

const clickEdit = (scope: any) => {
  // console.log(scope); //$index+column.id
  currentEdit.value = scope.$index + scope.column.id //每一单元格唯一标识
}
//点√
const check = (scope: any) => {
  currentEdit.value = ""
  emits("check", scope)
}
// 点×
const close = (scope: any) => {
  currentEdit.value = ""
  emits("close", scope)
}

// const clickEditCell = () => {
// 	currentEdit.value = "";
// };

//可编辑列逻辑处理

const tableData = ref<any[]>(cloneDeep(props.data)) //拷贝表格数据

const cloneEditRowIndex = ref<string>(props.editRowIndex) //拷贝标识符
watch(
  () => props.data,
  (newVal) => {
    tableData.value = cloneDeep(newVal)
    tableData.value.map((item) => {
      //rowEdit :是否可编辑的状态！
      item.rowEdit = false
    })
  },
  { deep: true }
)
//监听父组件标识
watch(
  () => props.editRowIndex, //当前点击的是编辑还是取消
  (newVal) => {
    if (newVal) {
      cloneEditRowIndex.value = newVal
    }
  }
)
onMounted(() => {
  tableData.value.map((item) => {
    // 初始化所有行不可编辑
    //rowEdit :是否可编辑的状态！
    item.rowEdit = false
  })
})

//点击每一行的事件
const rowClick = (row: any, col: any) => {
  // console.log(row);
  // console.log(col);
  //判断点击的是否为操作项
  if (col.label === actionOptions!.value.label) {
    //编辑行
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      //当前点击的按钮是做可编辑操作
      row.rowEdit = !row.rowEdit
      // 重置其他行的可编辑标识
      tableData.value.map((item) => {
        if (item !== row) item.rowEdit = false
      })
      //重置按钮标识
      if (!row.rowEdit) emits("update:editRowIndex", "")
    }
  }
}
//点击编辑图标
// const clickEdit = () => {};

//分页处理
//条数改变
const handleSizeChange = (val: number) => {
  emits("size-change", val)
}
//页数改变
const handleCurrentChange = (val: number) => {
  emits("current-change", val)
}

// 表格分页的排列方式
let justifyContent = computed(() => {
  if (props.paginationAlign === "left") return "flex-start"
  else if (props.paginationAlign === "right") return "flex-end"
  else return "center"
})
</script>

<style lang="scss" scoped>
svg {
  position: relative;
  top: 4px;
  margin-left: 6px;
}

.icons {
  display: flex;

  .check {
    color: red;
    cursor: pointer;
  }

  .close {
    color: green;
    cursor: pointer;
  }
}

.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>
