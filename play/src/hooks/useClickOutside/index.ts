import { onMounted, onUnmounted, type Ref } from "vue"

/*
 * @Description:点击elementRef外层的dom后触发cb函数
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-11-12 22:04:31
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-12 22:15:05
 */
export const useClickOutside = (
  elementRef: Ref<undefined | HTMLElement>,
  cb: (e) => void
) => {
  const handler = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      //当点击的Dom：e不在elementRef时，触发函数
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        cb(e)
      }
    }
  }

  onMounted(() => {
    document.addEventListener("click", handler)
  })
  onUnmounted(() => {
    document.removeEventListener("click", handler)
  })
}
