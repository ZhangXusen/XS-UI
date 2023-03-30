import { defineComponent as i, ref as d, resolveComponent as c, openBlock as s, createBlock as r, withCtx as l, createVNode as p, resolveDynamicComponent as f, unref as _, renderSlot as u } from "vue";
const m = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), v = /* @__PURE__ */ i({
  __name: "index",
  props: {
    icon: { default: "Bell" },
    value: { default: 0 },
    max: { default: 100 },
    isDot: { type: Boolean, default: !1 }
  },
  setup(e) {
    return d(!1), (t, o) => {
      const n = c("el-badge"), a = c("el-popover");
      return s(), r(a, {
        "popper-class": "zxs-popper",
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        reference: l(() => [
          p(n, {
            style: {},
            value: e.value,
            max: e.max,
            "is-dot": e.isDot
          }, {
            default: l(() => [
              (s(), r(f(`el-icon-${_(m)(e.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        default: l(() => [
          u(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      });
    };
  }
});
const x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, g = /* @__PURE__ */ x(v, [["__scopeId", "data-v-bda7f8a4"]]), b = {
  install(e) {
    e.component("xs-notification", g);
  }
};
export {
  b as default
};
