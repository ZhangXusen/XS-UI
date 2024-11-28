<!--
 * new page
 * @author: ZhangXusen
 * @since: 2022-08-10
 * index.vue
-->
<template>
  <div id="calendar"></div>
</template>

<script lang="ts" setup>
import "@fullcalendar/core/vdom" //*解决vite报错
import { Calendar, EventClickArg } from "@fullcalendar/core"
import daygridPlugin from "@fullcalendar/daygrid"
import interaction, { DateClickArg } from "@fullcalendar/interaction"
import { onMounted, PropType, ref, watch } from "vue"
import { EventItem } from "./types"

const emits = defineEmits(["dateClick", "eventClick"])
const props = defineProps({
  //语言
  local: {
    type: String,
    default: "zh-cn"
  },
  //视图模式
  initialView: {
    type: String,
    default: "dayGridMonth"
  },
  //按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: "今天",
        month: "月",
        week: "日",
        prevYear: "上一年",
        nextYear: "下一年",
        prev: "上一月",
        next: "下一月"
      }
    }
  },
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: "title",
        center: "",
        end: "prev today next"
      }
    }
  },
  footerToolbar: {
    type: Object,
    default: () => {
      return {}
    }
  },
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => [
      {
        title: "购物",
        start: "2022-8-1",
        end: "2022-8-1",
        editable: true
      },
      {
        title: "玩电脑",
        start: "2022-8-10",
        end: "2022-8-11"
      }
    ]
  },
  displayEventEnd: {
    type: Boolean,
    default: true
  },
  eventContent: {
    type: Function
  }
})
const calendar = ref<Calendar>()
const renderCalendar = () => {
  let el = document.getElementById("calendar")
  if (el) {
    calendar.value = new Calendar(el, {
      //插件
      plugins: [daygridPlugin, interaction],
      locale: props.local,
      initialView: props.initialView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      displayEventEnd: props.displayEventEnd, //是否显示事情结束时间
      eventContent: props.eventContent,
      eventSources: [
        {
          events(e, callback) {
            if (props.events) {
              callback(props.events)
            } else callback([])
          }
        }
      ],
      //日期点击事件
      dateClick(info: DateClickArg) {
        // console.log(info);
        emits("dateClick", info)
      },
      eventClick(info: EventClickArg) {
        console.log(info)
        emits("eventClick", info)
      }
    })
    calendar.value.render()
  }
}

watch(
  () => props.events,
  () => {
    renderCalendar()
  },
  { deep: true }
)
onMounted(() => {
  renderCalendar()
})
</script>

<style lang="scss" scoped>
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
