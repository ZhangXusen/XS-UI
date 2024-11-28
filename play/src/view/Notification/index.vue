<template>
  <Notification :max="50" :value="55">
    <template #default>
      <NoticeList
        :actions="actions"
        :list="list"
        @clickAction="handleAction"
        @clickItem="handleItem"
      ></NoticeList>
    </template>
  </Notification>
  <br />
  <br />
  <Notification :max="50" :value="10">1111</Notification>
  <br />
  <br />
  <Notification :isDot="true" :max="50" :value="55"></Notification>
  <br />
  <br />
  <Notification :max="50" :value="55" icon="ChatRound"></Notification>
</template>

<script lang="ts" setup>
import { actions, list } from "./data.ts"
import {
  XsNoticeList as NoticeList,
  XsNotification as Notification
} from "@element-plus-plus/business-components"

const handleItem = (val: any) => {
  console.log(val)
}
const handleAction = (val: any) => {
  console.log(val)
}
</script>

<style></style>
