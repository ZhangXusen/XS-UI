/* eslint-env node */
module.exports = {
  env: {
    browser: true, // 启用浏览器全局变量
    es2021: true // 启用 ES2021 语法
  },
  extends: [
    "eslint:recommended", // 使用 ESLint 推荐的规则
    "plugin:vue/vue3-essential", // 使用 Vue 3 的基本规则
    "plugin:@typescript-eslint/recommended", // 使用 TypeScript 的推荐规则
    "plugin:prettier/recommended" // 使用 Prettier 的推荐规则
  ],
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser"
      }
    }
  ], // 覆盖特定文件的规则
  parser: "@typescript-eslint/parser", // 使用 TypeScript 解析器
  parserOptions: {
    ecmaVersion: "latest", // 使用最新版本的 ECMAScript
    sourceType: "module" // 模块化脚本
  },
  plugins: ["vue", "@typescript-eslint", "prettier"], // 使用的插件

  rules: {
    "vue/multi-word-component-names": "off", // 关闭多单词组件名称规则
    "no-undef": "off", // 关闭未定义变量检查
    "prettier/prettier": "warn" // 使用 Prettier 规则并将其视为错误
  }
}
