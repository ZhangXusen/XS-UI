import { defineComponent as p, ref as l, onMounted as s, resolveComponent as c, openBlock as i, createBlock as m, mergeProps as u, unref as f } from "vue";
const g = /* @__PURE__ */ p({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    Animation: {
      type: Boolean,
      default: !1
    },
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(n) {
    const e = n;
    let t = l(e.percentage);
    return s(() => {
      if (e.Animation) {
        t.value = 0;
        let r = Math.ceil(e.time / e.percentage), o = setInterval(() => {
          t.value += 1, t.value >= e.percentage && clearInterval(o);
        }, r);
      }
    }), (r, o) => {
      const a = c("el-progress");
      return i(), m(a, u({ percentage: f(t) }, r.$attrs), null, 16, ["percentage"]);
    };
  }
}), _ = {
  install(n) {
    n.component("xs-progress", g);
  }
};
export {
  _ as default
};
