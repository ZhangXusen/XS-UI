import {
  d as m,
  e as s,
  f as p,
  r as f,
  o as c,
  c as S,
  g as i,
  a as u,
  v as o,
  i as g,
} from "./index.bc7b5a9f.js";
const v = { style: { display: "flex" } },
  y = { style: { "margin-right": "10px" } },
  h = m({
    __name: "index",
    props: {
      startPlaceholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4",
      },
      startTimeStart: { type: String, default: "08:00" },
      startTimeEnd: { type: String, default: "24:00" },
      startStep: { type: String, default: "00:30" },
      endPlaceholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",
      },
      endTimeStart: { type: String, default: "08:00" },
      endTimeEnd: { type: String, default: "24:00" },
      endStep: { type: String, default: "00:30" },
    },
    setup(e) {
      const t = s(""),
        a = s("");
      return (
        p(
          () => t.value,
          (l) => {
            l === "" && (a.value = "");
          }
        ),
        (l, n) => {
          const r = f("el-time-select");
          return (
            c(),
            S("div", v, [
              i("div", y, [
                u(
                  r,
                  o(
                    {
                      modelValue: t.value,
                      "onUpdate:modelValue":
                        n[0] || (n[0] = (d) => (t.value = d)),
                      "max-time": a.value,
                      class: "mr-4",
                      placeholder: e.startPlaceholder,
                      start: e.startTimeStart,
                      step: e.startStep,
                      end: e.startTimeEnd,
                    },
                    l.$attrs.startOptions
                  ),
                  null,
                  16,
                  [
                    "modelValue",
                    "max-time",
                    "placeholder",
                    "start",
                    "step",
                    "end",
                  ]
                ),
              ]),
              i("div", null, [
                u(
                  r,
                  o(
                    {
                      modelValue: a.value,
                      "onUpdate:modelValue":
                        n[1] || (n[1] = (d) => (a.value = d)),
                      "min-time": t.value,
                      placeholder: e.endPlaceholder,
                      start: e.endTimeStart,
                      step: e.endStep,
                      end: e.endTimeEnd,
                    },
                    l.$attrs.endOptions
                  ),
                  null,
                  16,
                  [
                    "modelValue",
                    "min-time",
                    "placeholder",
                    "start",
                    "step",
                    "end",
                  ]
                ),
              ]),
            ])
          );
        }
      );
    },
  }),
  E = m({
    __name: "index",
    setup(e) {
      const t = { size: "large" };
      return (a, l) => (c(), g(h, { startOptions: t, endOptions: t }));
    },
  });
export { E as default };
