import {
  d as p,
  e as _,
  y as l,
  r as u,
  o as c,
  i as d,
  v as m,
  u as f,
  c as g,
  a,
  F as x,
  _ as v,
} from "./index.bc7b5a9f.js";
const r = p({
    __name: "index",
    props: {
      percentage: { type: Number, default: 0 },
      Animation: { type: Boolean, default: !1 },
      time: { type: Number, default: 3e3 },
    },
    setup(s) {
      const e = s;
      let t = _(e.percentage);
      return (
        l(() => {
          if (e.Animation) {
            t.value = 0;
            let n = Math.ceil(e.time / e.percentage),
              o = setInterval(() => {
                (t.value += 1), t.value >= e.percentage && clearInterval(o);
              }, n);
          }
        }),
        (n, o) => {
          const i = u("el-progress");
          return (
            c(),
            d(i, m({ percentage: f(t) }, n.$attrs), null, 16, ["percentage"])
          );
        }
      );
    },
  }),
  y = p({
    __name: "index",
    setup(s) {
      return (e, t) => (
        c(),
        g(
          x,
          null,
          [
            a(r, { percentage: 60, Animation: "" }),
            a(r, {
              percentage: 60,
              Animation: "",
              "text-inside": !0,
              "stroke-width": 20,
              status: "exception",
            }),
            a(r, {
              percentage: 100,
              Animation: "",
              "text-inside": !0,
              "stroke-width": 20,
              status: "exception",
              type: "dashboard",
            }),
          ],
          64
        )
      );
    },
  });
const b = v(y, [["__scopeId", "data-v-0b2f7521"]]);
export { b as default };
