<template>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        class="mr-4"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      ></el-time-select>
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        v-bind="$attrs.endOptions"
      ></el-time-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
const props = defineProps({
  //第一框(选择开始时间)
  startPlaceholder: {
    type: String,
    default: "请选择开始时间"
  },
  startTimeStart: {
    type: String,
    default: "08:00"
  },
  startTimeEnd: {
    type: String,
    default: "24:00"
  },

  startStep: {
    type: String,
    default: "00:30"
  },
  //第二框(选择结束时间)
  endPlaceholder: {
    type: String,
    default: "请选择结束时间"
  },
  endTimeStart: {
    type: String,
    default: "08:00"
  },
  endTimeEnd: {
    type: String,
    default: "24:00"
  },
  endStep: {
    type: String,
    default: "00:30"
  }
})
const startTime = ref<string>("")
const endTime = ref<string>("")
watch(
  () => startTime.value,
  (newVal) => {
    if (newVal === "") endTime.value = ""
  }
)
</script>

<style></style>
