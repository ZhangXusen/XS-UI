import { defineComponent as s, ref as i, watch as p, resolveComponent as c, openBlock as S, createElementBlock as f, createElementVNode as u, createVNode as m, mergeProps as o } from "vue";
const v = { style: { display: "flex" } }, g = { style: { "margin-right": "10px" } }, y = /* @__PURE__ */ s({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"
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
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"
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
  },
  setup(e) {
    const t = i(""), l = i("");
    return p(
      () => t.value,
      (a) => {
        a === "" && (l.value = "");
      }
    ), (a, n) => {
      const r = c("el-time-select");
      return S(), f("div", v, [
        u("div", g, [
          m(r, o({
            modelValue: t.value,
            "onUpdate:modelValue": n[0] || (n[0] = (d) => t.value = d),
            "max-time": l.value,
            class: "mr-4",
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }, a.$attrs.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        u("div", null, [
          m(r, o({
            modelValue: l.value,
            "onUpdate:modelValue": n[1] || (n[1] = (d) => l.value = d),
            "min-time": t.value,
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd
          }, a.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end"])
        ])
      ]);
    };
  }
}), h = {
  install(e) {
    e.component("xs-timePicker", y);
  }
};
export {
  h as default
};
