import { withInstall } from "@element-plus-plus/utils"
import CollapseItem from "./src/CollapseItem.vue"
import Collapse from "./src/Collapse.vue"

export * from "./src/type"

export const XsCollapse = withInstall(Collapse)
export const XsCollapseItem = withInstall(CollapseItem)
