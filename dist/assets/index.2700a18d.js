import {
  E,
  d as y,
  e as m,
  f as b,
  r as d,
  o as a,
  c as _,
  a as r,
  w as p,
  g as v,
  F as V,
  h as B,
  b as F,
  i as f,
  j as I,
  u as $,
  t as x,
  k as w,
  I as D,
  _ as N,
} from "./index.bc7b5a9f.js";
const j = (o) => {
    let e = document.createElement("input");
    (e.value = o),
      document.body.appendChild(e),
      e.select(),
      document.execCommand("Copy"),
      document.body.removeChild(e),
      E.success("\u590D\u5236\u6210\u529F");
  },
  L = { class: "zxs-choose-dialog-body" },
  U = F("\u9009\u62E9\u56FE\u6807"),
  z = { class: "container" },
  M = ["onClick"],
  O = { class: "text" },
  S = y({
    __name: "index",
    props: { title: null, visible: { type: Boolean } },
    emits: ["update:visible"],
    setup(o, { emit: e }) {
      const l = o,
        t = m(l.visible),
        i = () => {
          e("update:visible", !l.visible);
        };
      b(
        () => l.visible,
        (s) => {
          t.value = s;
        }
      ),
        b(
          () => t.value,
          (s) => {
            e("update:visible", s);
          }
        );
      const u = (s) => {
        let c = `<el-text-${x(s)} />`;
        j(c), (t.value = !1);
      };
      return (s, c) => {
        const C = d("el-button"),
          h = d("el-scrollbar"),
          k = d("el-dialog");
        return (
          a(),
          _("div", L, [
            r(
              C,
              { onClick: i, type: "primary" },
              { default: p(() => [U]), _: 1 }
            ),
            r(
              k,
              {
                title: o.title,
                modelValue: t.value,
                "onUpdate:modelValue": c[0] || (c[0] = (n) => (t.value = n)),
              },
              {
                default: p(() => [
                  r(h, null, {
                    default: p(() => [
                      v("div", z, [
                        (a(!0),
                        _(
                          V,
                          null,
                          B(
                            Object.keys(D),
                            (n, g) => (
                              a(),
                              _(
                                "div",
                                {
                                  key: g,
                                  class: "icon-list",
                                  onClick: (q) => u(n),
                                },
                                [
                                  v("div", null, [
                                    (a(), f(I(`el-icon-${$(x)(n)}`))),
                                  ]),
                                  v("div", O, w(n), 1),
                                ],
                                8,
                                M
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["title", "modelValue"]
            ),
          ])
        );
      };
    },
  });
const T = N(S, [["__scopeId", "data-v-0d46e856"]]),
  G = y({
    __name: "index",
    setup(o) {
      const e = m(!1),
        l = m("\u9009\u62E9\u56FE\u6807");
      return (t, i) => (
        a(),
        f(
          T,
          {
            title: l.value,
            visible: e.value,
            "onUpdate:visible": i[0] || (i[0] = (u) => (e.value = u)),
          },
          null,
          8,
          ["title", "visible"]
        )
      );
    },
  });
export { G as default };
