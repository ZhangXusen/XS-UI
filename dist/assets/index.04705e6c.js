import {
  d as F,
  e as f,
  f as b,
  r as A,
  o as D,
  c as E,
  a,
  w as u,
  m,
  v as C,
  p as _,
  _ as x,
  u as h,
  b as v,
  g as k,
  E as y,
} from "./index.bc7b5a9f.js";
import { _ as w } from "./index.vue_vue_type_script_setup_true_lang.a1e5d2d9.js";
const O = F({
  __name: "index",
  props: {
    visible: { type: Boolean, default: !1 },
    options: { type: Array, required: !0 },
    onChange: { type: Function },
    beforeUpload: { type: Function },
    onPreview: { type: Function },
    onRemove: { type: Function },
    beforeRemove: { type: Function },
    onSuccess: { type: Function },
    onExceed: { type: Function },
    isScroll: { type: Boolean, default: !0 },
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const s = e,
      i = f(),
      n = f(s.visible);
    return (
      b(
        () => s.visible,
        (o) => {
          n.value = o;
        }
      ),
      b(
        () => n.value,
        (o) => {
          t("update:visible", o);
        }
      ),
      (o, c) => {
        const g = A("el-dialog");
        return (
          D(),
          E(
            "div",
            { class: _({ scroll: e.isScroll }) },
            [
              a(
                g,
                C(
                  {
                    modelValue: n.value,
                    "onUpdate:modelValue":
                      c[0] || (c[0] = (l) => (n.value = l)),
                  },
                  o.$attrs
                ),
                {
                  default: u(() => [
                    a(
                      w,
                      {
                        ref_key: "form",
                        ref: i,
                        "label-width": "100px",
                        onOnChange: e.onChange,
                        onBeforeUpload: e.beforeUpload,
                        onOnPreview: e.onPreview,
                        onOnRemove: e.onRemove,
                        onBeforeRemove: e.beforeRemove,
                        onOnSuccess: e.onSuccess,
                        onOnExceed: e.onExceed,
                        options: e.options,
                      },
                      {
                        uploadArea: u(() => [
                          m(o.$slots, "uploadArea", {}, void 0, !0),
                        ]),
                        uploadTip: u(() => [
                          m(o.$slots, "uploadTip", {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                      8,
                      [
                        "onOnChange",
                        "onBeforeUpload",
                        "onOnPreview",
                        "onOnRemove",
                        "onBeforeRemove",
                        "onOnSuccess",
                        "onOnExceed",
                        "options",
                      ]
                    ),
                  ]),
                  footer: u(() => [
                    m(o.$slots, "footer", { form: i.value }, void 0, !0),
                  ]),
                  _: 3,
                },
                16,
                ["modelValue"]
              ),
            ],
            2
          )
        );
      }
    );
  },
});
const S = x(O, [["__scopeId", "data-v-4ba5530c"]]),
  q = v("open"),
  R = v("\u53D6\u6D88"),
  $ = v("\u786E\u8BA4"),
  U = v("Click to upload"),
  V = k(
    "div",
    { style: { color: "#ccc", "font-size": "12px" } },
    " jpg/png files with a size less than 500KB. ",
    -1
  ),
  z = F({
    __name: "index",
    setup(e) {
      const t = f(!1),
        s = () => {
          t.value = !t.value;
        },
        i = [
          {
            type: "input",
            value: "",
            label: "\u7528\u6237\u540D",
            prop: "username",
            rules: [
              {
                required: !0,
                message: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "change",
              },
              {
                min: 2,
                max: 10,
                message: "\u7528\u6237\u540D\u57282-10\u4F4D\u4E4B\u95F4",
                trigger: "change",
              },
            ],
            attrs: { clearable: !0 },
          },
          {
            type: "input",
            value: "",
            label: "\u5BC6\u7801",
            prop: "password",
            rules: [
              {
                required: !0,
                message: "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "change",
              },
              {
                min: 6,
                max: 15,
                message: "\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4",
                trigger: "change",
              },
            ],
            attrs: { clearable: !0 },
          },
          {
            type: "select",
            value: "",
            placeholder: "\u8BF7\u9009\u62E9\u804C\u4F4D",
            prop: "role",
            label: "\u804C\u4F4D",
            rules: [
              {
                required: !0,
                message: "\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "change",
              },
            ],
            children: [
              { type: "option", label: "\u7ECF\u7406", value: "1" },
              { type: "option", label: "\u8463\u4E8B", value: "2" },
              { type: "option", label: "\u9AD8\u7BA1", value: "3" },
            ],
            attrs: { style: { width: "100%" } },
          },
          {
            type: "checkbox-group",
            value: [],
            label: "\u7231\u597D",
            prop: "like",
            rules: [
              {
                required: !0,
                message: "\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "change",
              },
            ],
            children: [
              { type: "checkbox", label: "\u8DB3\u7403", value: "1" },
              { type: "checkbox", label: "\u7BEE\u7403", value: "2" },
              { type: "checkbox", label: "\u6392\u7403", value: "3" },
            ],
          },
          {
            type: "radio-group",
            value: [],
            label: "\u6027\u522B",
            prop: "gender",
            rules: [
              {
                required: !0,
                message: "\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "change",
              },
            ],
            children: [
              { type: "radio", label: "\u7537", value: "1" },
              { type: "radio", label: "\u5973", value: "2" },
              { type: "radio", label: "\u4FDD\u5BC6", value: "3" },
            ],
          },
          {
            type: "upload",
            label: "\u4E0A\u4F20",
            prop: "picture",
            rules: [
              {
                required: !0,
                message: "\u6587\u4EF6\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "change",
              },
            ],
            UploadAttrs: {
              action:
                "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
              multiple: !0,
              limit: 3,
            },
          },
          {
            type: "editor",
            value: "11111111",
            prop: "desc",
            label: "\u63CF\u8FF0",
            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
            rules: [
              {
                required: !0,
                message: "\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "change",
              },
            ],
          },
        ],
        n = (l) => {
          t.value = !1;
        },
        o = (l) => {
          let p = l.validate();
          l.getFormData(),
            p((r) => {
              r
                ? y.success("\u9A8C\u8BC1\u6210\u529F")
                : y.error("\u9A8C\u8BC1\u5931\u8D25");
            });
        };
      let c = (l) => {
          console.log("success"), console.log(l);
        },
        g = (l) => {
          console.log("change"), console.log(l);
        };
      return (l, p) => {
        const r = A("el-button");
        return (
          D(),
          E("div", null, [
            a(
              r,
              { type: "primary", onClick: s },
              { default: u(() => [q]), _: 1 }
            ),
            a(
              S,
              {
                isScroll: "",
                visible: t.value,
                "onUpdate:visible": p[0] || (p[0] = (d) => (t.value = d)),
                title: "\u7F16\u8F91",
                width: "50%",
                options: i,
                "on-change": h(g),
                "on-success": h(c),
              },
              {
                footer: u((d) => [
                  a(
                    r,
                    { onClick: (B) => n(d.form) },
                    { default: u(() => [R]), _: 2 },
                    1032,
                    ["onClick"]
                  ),
                  a(
                    r,
                    { type: "primary", onClick: (B) => o(d.form) },
                    { default: u(() => [$]), _: 2 },
                    1032,
                    ["onClick"]
                  ),
                ]),
                uploadArea: u(() => [
                  a(r, { type: "primary" }, { default: u(() => [U]), _: 1 }),
                ]),
                uploadTip: u(() => [V]),
                _: 1,
              },
              8,
              ["visible", "on-change", "on-success"]
            ),
          ])
        );
      };
    },
  });
export { z as default };
