import { defineComponent as f, useSlots as v, openBlock as l, createElementBlock as a, unref as n, renderSlot as m, normalizeStyle as r, toDisplayString as p, createElementVNode as x, createBlock as d, resolveDynamicComponent as i, normalizeClass as u } from "vue";
const y = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), _ = { class: "trend" }, k = { class: "icon" }, C = /* @__PURE__ */ f({
  __name: "index",
  props: {
    type: { default: "up" },
    text: { default: "\u6587\u5B57" },
    color: { default: "red" },
    reverseColor: { type: Boolean, default: !1 },
    textColor: { default: "black" },
    icon: { default: "arrowup" }
  },
  setup(e) {
    const t = e, o = v();
    return (s, c) => (l(), a("div", _, [
      n(o).default ? m(s.$slots, "default", { key: 0 }, void 0, !0) : (l(), a("div", {
        key: 1,
        class: "text",
        style: r({ color: t.textColor })
      }, p(e.text), 5)),
      x("div", k, [
        e.type === "up" ? (l(), d(i(`el-icon-${n(y)(e.icon)}`), {
          key: 0,
          style: r({ color: t.color }),
          class: u({ reverse: e.reverseColor })
        }, null, 8, ["style", "class"])) : (l(), d(i(`el-icon-${n(y)(e.icon)}`), {
          key: 1,
          style: r({ color: t.color }),
          class: u({ reverse: e.reverseColor })
        }, null, 8, ["style", "class"]))
      ])
    ]));
  }
});
const B = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, c] of t)
    o[s] = c;
  return o;
}, g = /* @__PURE__ */ B(C, [["__scopeId", "data-v-2e70a226"]]), $ = {
  install(e) {
    e.component("xs-trend", g);
  }
};
export {
  $ as default
};
