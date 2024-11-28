/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // 不在语句末尾添加分号
  singleQuote: false, // 使用单引号而不是双引号
  printWidth: 80, // 每行最大字符数设为120
  endOfLine: "auto", // 行尾自动处理（根据操作系统）
  tabWidth: 2, // 缩进宽度设为2个空格
  trailingComma: "none", // 不使用尾随逗号
  bracketSpacing: true, // 在对象大括号内添加空格
  jsxSingleQuote: false,
  vueIndentScriptAndStyle: false, // Vue文件中的`<script>`和`<style>`标签不特殊缩进
  htmlWhitespaceSensitivity: "ignore" // 忽略HTML中的空白敏感度
}
