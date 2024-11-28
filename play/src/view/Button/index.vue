<!--
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-10 20:10:29
 * @LastEditors: 小国际
 * @LastEditTime: 2023-12-05 21:36:22
-->
<script lang="ts" setup>
import { h, onMounted, ref, watch } from "vue"
import {
  ButtonInstance,
  createMessage,
  XsButton as Button,
  XsDropdown as Dropdown,
  XsIcon as Icon,
  XsInput as Input,
  XsSelect as Select,
  XsSwitch as Switch,
  XsTooltip as Tooltip
} from "@element-plus-plus/base-components"

const buttonRef = ref<ButtonInstance | null>(null)
const menuOptions = [
  { label: "11111", key: 1 },
  { label: "22222", key: 2, disable: true },
  { label: h("b", "粗体标签"), key: 2 },
  { label: "33333", key: 3, divided: true },
  { label: "44444", key: 4 },
  { label: "55555", key: 4 }
]
onMounted(() => {
  if (buttonRef.value) {
    // console.log(buttonRef);
  }
  createMessage({
    message: "000000",
    duration: 0,
    showClose: true,
    type: "danger"
  })
  createMessage({
    message: "3秒后消失：鼠标悬浮不消失",
    duration: 3000,
    type: "success"
  })
  createMessage({
    message: "哈哈哈哈",
    duration: 0,
    type: "info"
  })
  createMessage({
    message: "哈哈哈哈",
    duration: 0,
    type: "warning"
  })
  createMessage({
    message: "哈哈哈哈",
    duration: 0,
    type: "success"
  })
  const instance = createMessage({
    message: "3秒后手动控制消失",
    duration: 0
  })
  setTimeout(() => {
    instance.destroy()
  }, 3000)
})

const InputVal = ref("")
watch(
  () => InputVal.value,
  (newVal) => {
    console.log(newVal)
  }
)
const switchVisible = ref(true)
/* select */
const select = ref("1")
const selectOption = ref([
  { label: "hello", value: "1" },
  { label: "xyz", value: "2" },
  { label: "testing", value: "3" },
  { label: "check", value: "4", disabled: true }
])

const customRender = (option) => {
  return h("div", { className: "xyz" }, [
    h("b", option.label),
    h("span", option.value)
  ])
}

const select1 = ref()

function HandlerSearch(query: string) {
  if (!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item) => {
        return {
          label: item.name,
          value: item.node_id
        }
      })
    })
}
</script>
<template>
  <div class="">
    <div style="margin-top: 10px">
      <Button ref="buttonRef" type="primary">Primary</Button>
      <Button type="info">Info</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
    </div>
    <div style="margin-top: 10px">
      <Button plain type="primary">Primary</Button>
      <Button plain type="info">Info</Button>
      <Button plain type="danger">Danger</Button>
      <Button plain type="success">Success</Button>
      <Button plain type="warning">Warning</Button>
    </div>
    <div style="margin-top: 10px">
      <Button round type="primary">Primary</Button>
      <Button round type="info">Info</Button>
      <Button round type="danger">Danger</Button>
      <Button round type="success">Success</Button>
      <Button round type="warning">Warning</Button>
    </div>
    <div style="margin-top: 10px">
      <Button disabled type="primary">Primary</Button>
      <Button disabled type="info">Info</Button>
      <Button disabled type="danger">Danger</Button>
      <Button disabled type="success">Success</Button>
      <Button disabled type="warning">Warning</Button>
    </div>
    <div style="margin-top: 10px">
      <Button size="large" type="primary">Primary</Button>
      <Button size="medium" type="primary">Primary</Button>
      <Button size="small" type="primary">Primary</Button>
    </div>

    <div style="margin-top: 10px">
      <Button rounded type="primary">圆角</Button>
      <Button circle type="primary">圆</Button>
    </div>
    <div style="margin-top: 10px">
      <Button circle icon="search" type="primary"></Button>
      <Button icon="user" size="small">用户</Button>
      <Button icon="user" size="medium">用户</Button>
      <Button icon="user" size="large">用户</Button>
    </div>
    <div style="margin-top: 10px">
      <Button :loading="true">加载</Button>
      <Button :loading="true">
        <template #loading>
          <Icon icon="search" spin></Icon>
          自定义加载按钮
        </template>
      </Button>
    </div>
  </div>
  <div class="tooltip-list" style="display: flex; gap: 20px; margin-top: 10px">
    <Tooltip content="这是一个提示" trigger="hover">
      <Button>hover</Button>
    </Tooltip>
    <Tooltip trigger="click">
      <Button>点我一下</Button>
      <template #content>
        <span>这是一个提示自定义插槽</span>
      </template>
    </Tooltip>
    <Tooltip content="这是一个提示" placement="left" trigger="hover">
      <Button>hover</Button>
    </Tooltip>
    <Tooltip content="这是一个提示" placement="right" trigger="hover">
      <Button>hover</Button>
    </Tooltip>
    <Tooltip content="这是一个提示" placement="bottom" trigger="hover">
      <Button>hover</Button>
    </Tooltip>
    <Tooltip content="这是一个提示" placement="top" trigger="hover">
      <Button>hover</Button>
    </Tooltip>
  </div>
  <div style="margin-top: 10px">
    <Dropdown :menu-options="menuOptions" placement="bottom" trigger="click">
      <Button>Dropdown</Button>
    </Dropdown>
  </div>
  <div style="margin-top: 10px">
    <Input v-model="InputVal" clearable show-password />
  </div>
  <div style="margin-top: 10px">
    <Switch v-model="switchVisible" size="large" />
    <div>modelValue:{{ switchVisible }}</div>
  </div>
  <div style="display: flex; gap: 80px; margin-top: 10px">
    <Select
      v-model="select"
      :options="selectOption"
      clearable
      placeholder="请选择..."
    ></Select>
    <Select
      v-model="select"
      :options="selectOption"
      :render-label="customRender"
      clearable
      filterable
      placeholder="请选择..."
    ></Select>

    <Select
      v-model="select1"
      :remote-method="HandlerSearch"
      clearable
      filterable
      placeholder="请选择..."
      remote
    ></Select>
  </div>
</template>

<style lang="scss" scoped>
.tooltip-list {
  display: flex;

  div {
    margin-left: 20px;
  }
}
</style>
