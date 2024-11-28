<!--
 * new page
 * @author: ZhangXusen
 * @since: 2023-10-19
 * Index.vue
-->
<template>
  <div style="">
    <Collapse v-model="openItemName">
      <CollapseItem name="one" title="一">
        <div>111111111111</div>
      </CollapseItem>
      <CollapseItem name="two" title="二">
        <div>222222222</div>
      </CollapseItem>
      <CollapseItem name="three" title="三">
        <div>333333333</div>
      </CollapseItem>
    </Collapse>
  </div>
  <div style="margin-top: 50px">
    {{ openItemName }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import {
  XsCollapse as Collapse,
  XsCollapseItem as CollapseItem
} from "@element-plus-plus/base-components"

const openItemName = ref(["one"])
</script>

<style lang="scss" scoped></style>
