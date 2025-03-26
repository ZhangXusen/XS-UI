export interface ITreeNode extends Required<TreeOption> {
  rawNode: TreeOption
  level: number
  children: ITreeNode[]
  isLeaf: boolean
}

// 树形控件数据源
export interface TreeOption {
  label?: string | number
  key?: string | number
  children?: TreeOption
  isLeaf: boolean
}

// 树形控件配置项
export interface TreeOptions {
  label: string
  key: string
  children: string

  [key: string]: unknown
}

//组件Props
export interface TreeProps {
  data: TreeOption[]
  options: TreeOptions
  defaultExpandKeys: string[] | number[]
}
