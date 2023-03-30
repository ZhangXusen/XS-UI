import { defineComponent as I, resolveComponent as a, openBlock as t, createBlock as u, withCtx as p, createElementBlock as n, Fragment as y, renderList as m, createVNode as x, createCommentVNode as s, createElementVNode as v, toDisplayString as r, createTextVNode as V, resolveDynamicComponent as $, unref as B } from "vue";
const w = (c) => c.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), z = ["onClick"], D = {
  key: 0,
  class: "avatar"
}, E = { class: "content" }, T = {
  key: 0,
  class: "content-tit"
}, q = {
  key: 1,
  class: "content-time"
}, F = {
  key: 2,
  class: "content-time"
}, O = { class: "actions" }, S = ["onClick"], Z = {
  key: 0,
  class: "a-icon"
}, j = { class: "a-text" }, G = /* @__PURE__ */ I({
  __name: "index",
  props: {
    list: {
      type: Array,
      required: !0
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(c, { emit: i }) {
    const _ = (o, d) => {
      i("clickItem", { item: o, index: d });
    }, k = (o, d) => {
      i("clickAction", { action: o, index: d });
    };
    return (o, d) => {
      const b = a("el-avatar"), f = a("el-tag"), g = a("el-scrollbar"), C = a("el-tab-pane"), A = a("el-tabs");
      return t(), u(A, null, {
        default: p(() => [
          (t(!0), n(y, null, m(c.list, (h, L) => (t(), u(C, {
            key: L,
            label: h.title
          }, {
            default: p(() => [
              x(g, { "max-height": "300px" }, {
                default: p(() => [
                  (t(!0), n(y, null, m(h.content, (e, l) => (t(), n("div", {
                    class: "container",
                    key: l,
                    onClick: (N) => _(e, l)
                  }, [
                    e.avatar ? (t(), n("div", D, [
                      x(b, {
                        size: 33,
                        src: e.avatar
                      }, null, 8, ["src"])
                    ])) : s("", !0),
                    v("div", E, [
                      e.title ? (t(), n("div", T, [
                        v("div", null, r(e.title), 1),
                        e.tag ? (t(), u(f, {
                          key: 0,
                          size: "small",
                          type: e.tagType
                        }, {
                          default: p(() => [
                            V(r(e.tag), 1)
                          ]),
                          _: 2
                        }, 1032, ["type"])) : s("", !0)
                      ])) : s("", !0),
                      e.desc ? (t(), n("div", q, r(e.desc), 1)) : s("", !0),
                      e.time ? (t(), n("div", F, r(e.time), 1)) : s("", !0)
                    ])
                  ], 8, z))), 128)),
                  v("div", O, [
                    (t(!0), n(y, null, m(c.actions, (e, l) => (t(), n("div", {
                      class: "a-item",
                      key: l,
                      onClick: (N) => k(e, l)
                    }, [
                      e.icon ? (t(), n("div", Z, [
                        (t(), u($(`el-icon-${B(w)(e.icon)}`)))
                      ])) : s("", !0),
                      v("div", j, r(e.text), 1)
                    ], 8, S))), 128))
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      });
    };
  }
});
const H = (c, i) => {
  const _ = c.__vccOpts || c;
  for (const [k, o] of i)
    _[k] = o;
  return _;
}, J = /* @__PURE__ */ H(G, [["__scopeId", "data-v-4498b1cb"]]), M = {
  install(c) {
    c.component("xs-noticeList", J);
  }
};
export {
  M as default
};
