<script lang="ts" setup>
import { ITreeNode, TreeOption, TreeProps } from "./types"
import { computed } from "vue"

defineOptions({ name: "XsTree" })
const props = withDefaults(defineProps<TreeProps>(), {
  data: () => [],
  options: () => {
    return {
      key: "key",
      label: "label",
      children: "value"
    }
  },
  defaultExpandKeys: () => []
})
const createOption = () => {
  return {
    getKey(node: ITreeNode) {
      return node[props.options.key]
    },
    getLabel(node: ITreeNode) {
      return node[props.options.label]
    },
    getChildren(node: ITreeNode) {
      return node[props.options.children]
    }
  }
}
const normalizeTree = (data: TreeOption[]) => {
  function traverse(data: TreeOption[], parent: ITreeNode = null) {
    return data.map((node) => {
      const children = createOption().getChildren(node) || []
      const treeNode: ITreeNode = {
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        label: createOption().getLabel(node),
        key: createOption().getKey(node),
        children: [],
        isLeaf: node.isLeaf ?? children.length === 0
      }
      if (children.length > 0) {
        treeNode[children] = traverse(children, treeNode)
      }
      return treeNode
    })
  }

  return traverse(data)
}

const treeData = computed(() => {
  return normalizeTree(props.data)
})
</script>

<template>
  <div class="xs-tree"></div>
</template>

<style lang="scss" scoped></style>
