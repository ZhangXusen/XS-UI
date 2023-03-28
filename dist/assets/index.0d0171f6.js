import {
  d as x,
  l as v,
  o as s,
  c as r,
  u as c,
  m as p,
  n as a,
  k as C,
  g as m,
  i as d,
  p as u,
  j as i,
  t as _,
  _ as f,
  a as t,
  w as k,
  b,
} from "./index.bc7b5a9f.js";
const B = { class: "trend" },
  h = { class: "icon" },
  w = x({
    __name: "index",
    props: {
      type: { default: "up" },
      text: { default: "\u6587\u5B57" },
      color: { default: "red" },
      reverseColor: { type: Boolean, default: !1 },
      textColor: { default: "black" },
      icon: { default: "arrowup" },
    },
    setup(e) {
      const l = e,
        n = v();
      return (y, E) => (
        s(),
        r("div", B, [
          c(n).default
            ? p(y.$slots, "default", { key: 0 }, void 0, !0)
            : (s(),
              r(
                "div",
                { key: 1, class: "text", style: a({ color: l.textColor }) },
                C(e.text),
                5
              )),
          m("div", h, [
            e.type === "up"
              ? (s(),
                d(
                  i(`el-icon-${c(_)(e.icon)}`),
                  {
                    key: 0,
                    style: a({ color: l.color }),
                    class: u({ reverse: e.reverseColor }),
                  },
                  null,
                  8,
                  ["style", "class"]
                ))
              : (s(),
                d(
                  i(`el-icon-${c(_)(e.icon)}`),
                  {
                    key: 1,
                    style: a({ color: l.color }),
                    class: u({ reverse: e.reverseColor }),
                  },
                  null,
                  8,
                  ["style", "class"]
                )),
          ]),
        ])
      );
    },
  });
const o = f(w, [["__scopeId", "data-v-dbf65edb"]]),
  D = { class: "trends" },
  $ = b(" \u63D2\u69FD "),
  g = x({
    __name: "index",
    setup(e) {
      return (l, n) => (
        s(),
        r("div", D, [
          t(o, { color: "blue" }),
          t(o, {
            text: "\u4E0B\u964D",
            icon: "arrowdown",
            type: "down",
            color: "red",
          }),
          t(o, { color: "blue" }, { default: k(() => [$]), _: 1 }),
          t(o, {
            color: "red",
            text: "\u989C\u8272\u53CD\u8F6C",
            reverseColor: "",
          }),
          t(o, {
            color: "red",
            text: "\u6587\u5B57\u989C\u8272",
            "text-color": "red",
          }),
          t(o, { text: "\u81EA\u9009\u56FE\u6807", icon: "edit" }),
        ])
      );
    },
  });
const F = f(g, [["__scopeId", "data-v-f60c21c7"]]);
export { F as default };
