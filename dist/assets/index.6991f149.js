import {
  d as c,
  s as d,
  a as n,
  v as s,
  r as o,
  x as m,
  I as f,
  F as x,
  o as p,
  c as A,
  u as h,
} from "./index.bc7b5a9f.js";
function B(t) {
  return (
    typeof t == "function" ||
    (Object.prototype.toString.call(t) === "[object Object]" && !m(t))
  );
}
const _ = c({
    props: {
      data: { type: Array, required: !0 },
      defaultActive: { type: String, default: "" },
      router: { type: Boolean, default: !1 },
    },
    setup(t, r) {
      let a = (u) =>
          u.map((e) => {
            e.i = f[e.icon];
            let i = {
              title: () =>
                n(x, null, [n(e.i, null, null), n("span", null, [e.name])]),
            };
            return e.children && e.children.length
              ? n(
                  o("el-sub-menu"),
                  { index: e.index },
                  { default: () => [a(e.children)], ...i }
                )
              : n(
                  o("el-menu-item"),
                  { index: e.index },
                  {
                    default: () => [
                      n(e.i, null, null),
                      n("span", null, [e.name]),
                    ],
                  }
                );
          }),
        l = d();
      return () => {
        let u;
        return n(
          o("el-menu"),
          s({ "default-active": t.defaultActive, router: t.router }, l),
          B((u = a(t.data))) ? u : { default: () => [u] }
        );
      };
    },
  }),
  C = { style: { width: "300px" } },
  D = c({
    __name: "index",
    setup(t) {
      const r = [
        { name: "\u5BFC\u822A1", index: "1", icon: "Document" },
        { name: "\u5BFC\u822A2", index: "2", icon: "Document" },
        {
          name: "\u5BFC\u822A3",
          index: "3",
          icon: "Document",
          children: [
            {
              name: "\u5BFC\u822A3-1",
              index: "3-1",
              icon: "Document",
              children: [
                {
                  name: "\u5BFC\u822A3-1-1",
                  index: "3-1-1",
                  icon: "Document",
                  children: [
                    {
                      name: "\u5BFC\u822A3-1-1-1",
                      index: "3-1-1-1",
                      icon: "Document",
                      children: [
                        {
                          name: "\u5BFC\u822A3-1-1-1-1",
                          index: "3-1-1-1-1",
                          icon: "Document",
                          children: [
                            {
                              name: "\u5BFC\u822A3-1-1-1-1-1",
                              index: "3-1-1-1-1-1",
                              icon: "Document",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                { name: "\u5BFC\u822A3-1-2", index: "3-1-2", icon: "Document" },
              ],
            },
          ],
        },
      ];
      return (a, l) => (
        p(), A("div", C, [n(h(_), { data: r, defaultActive: 3 })])
      );
    },
  });
export { D as default };
