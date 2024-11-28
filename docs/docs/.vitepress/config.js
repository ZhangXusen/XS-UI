import {
  componentPreview,
  containerPreview
} from "@vitepress-demo-preview/plugin"
import { defineConfig } from "vitepress"
export default defineConfig({
  title: "XS-UI",
  description: "一个高扩展，便捷使用的二次封装化组件库",
  vite: {
    plugins: [
      // VueMacros.vite({
      // 	setupComponent: false,
      // 	setupSFC: false,
      // 	plugins: {
      // 		vueJsx: vueJsx(),
      // 	},
      // }),
    ]
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "https://cn.vitejs.dev/viteconf.svg"
      }
    ]
  ],
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  base: "/XS-UI/",
  appearance: true,
  themeConfig: {
    siteTitle: "XS-UI",
    logo: "/amazing-icon.svg",
    nav: [
      {
        text: "指南",
        link: "/guild/installation"
      },
      {
        text: "业务组件",
        link: "/examples/ChooseIcon/"
      },
      {
        text: "基础组件",
        link: "/components/ChooseIcon/"
      },
      {
        text: "链接",
        items: [
          {
            text: "My Github",
            link: "https://github.com/ZhangXusen"
          },
          {
            text: "My Blog",
            link: "https://juejin.cn/user/4836773602814"
          },
          {
            items: [
              {
                text: "Vue",
                link: "https://cn.vuejs.org/"
              },
              {
                text: "Vitepress",
                link: "https://vitepress.dev/"
              },
              {
                text: "Markdown",
                link: "https://markdown.com.cn/"
              }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ZhangXusen/XS-UI"
      }
    ],

    sidebar: {
      "/guild/": [
        {
          text: "指引",
          items: [
            {
              text: "安装",
              link: "/guild/installation"
            },
            {
              text: "快速开始",
              link: "/guild/quickstart"
            }
          ]
        }
      ],
      "/examples/": [
        {
          text: "业务组件",
          items: [
            {
              text: "图标选择器",
              link: "/examples/ChooseIcon/"
            },
            {
              text: "区域选择",
              link: "/examples/ChooseArea/"
            },
            {
              text: "城市选择",
              link: "/examples/CityPicker/"
            },
            {
              text: "趋势",
              link: "/examples/Trend/"
            },
            {
              text: "通知菜单",
              link: "/examples/Notification/"
            },
            {
              text: "导航栏",
              link: "/examples/Menus/"
            },
            {
              text: "表单",
              link: "/examples/Form/"
            },
            {
              text: "时间选择",
              link: "/examples/TimePicker/"
            },
            {
              text: "进度条",
              link: "/examples/Progress/"
            },
            {
              text: "弹出框表单",
              link: "/examples/ModalForm/"
            },
            {
              text: "表格",
              link: "/examples/Table/"
            },
            {
              text: "日历",
              link: "/examples/Calendar/"
            }
          ]
        }
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "图标选择器",
              link: "/components/ChooseIcon/"
            }
          ]
        }
      ]
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You"
    }
  }
})
