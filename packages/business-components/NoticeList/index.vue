<!--
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-03-28 20:16:21
 * @LastEditors: 小国际
 * @LastEditTime: 2023-03-28 20:26:53
-->
<template>
  <el-tabs>
    <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
      <el-scrollbar max-height="300px">
        <div
          v-for="(item1, index1) in item.content"
          :key="index1"
          class="container"
          @click="clickItem(item1, index1)"
        >
          <div v-if="item1.avatar" class="avatar">
            <el-avatar :size="33" :src="item1.avatar"></el-avatar>
          </div>
          <div class="content">
            <div v-if="item1.title" class="content-tit">
              <div>{{ item1.title }}</div>
              <el-tag v-if="item1.tag" :type="item1.tagType" size="small">
                {{ item1.tag }}
              </el-tag>
            </div>
            <div v-if="item1.desc" class="content-time">
              {{ item1.desc }}
            </div>
            <div v-if="item1.time" class="content-time">
              {{ item1.time }}
            </div>
          </div>
        </div>
        <div class="actions">
          <div
            v-for="(action, i) in actions"
            :key="i"
            class="a-item"
            @click="clickAction(action, i)"
          >
            <div v-if="action.icon" class="a-icon">
              <component :is="`el-icon-${toLine(action.icon)}`"></component>
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { ActionOptions, ListItem, ListOptions } from "./types"
import { toLine } from "@element-plus-plus/utils"

const props = defineProps({
  list: {
    type: Array as PropType<ListItem[]>,
    required: true
  },
  actions: {
    type: Array as unknown as PropType<ActionOptions>,
    default: () => []
  }
})
const emits = defineEmits(["clickItem", "clickAction"])
const clickItem = (item: ListOptions, index: number) => {
  emits("clickItem", { item, index })
}
const clickAction = (action: ActionOptions, index: number) => {
  emits("clickAction", { action, index })
}
</script>

<style lang="scss" scoped>
:deep(.el-tabs__nav) {
  display: flex;
  width: 100%;
}

:deep(.el-tabs__item) {
  display: flex;
  flex: 1;
  justify-content: center;
  text-align: center;
}

.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;

  .avatar {
    flex: 1;
  }

  &:hover {
    background-color: #e6f6ff;
  }

  .content {
    flex: 3;

    &-time {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }

    &-tit {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;

  .a-item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 50px;
    cursor: pointer;

    &:nth-child(1) {
      border-right: 1px solid #eee;
    }

    .a-icon {
      position: relative;
      top: 2px;
      margin-right: 4px;
    }
  }
}

:deep(.el-popper) {
  padding: 0;
}
</style>
