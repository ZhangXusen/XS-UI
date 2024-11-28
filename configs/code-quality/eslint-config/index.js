module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    withDefaults: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [1, "single"], // 必须使用单引号
    "no-plusplus": ["error"], // 禁止一元运算符
    "no-console": "off", // 禁止console
    "no-param-reassign": "off", // 不允许重新分配 function 参数
    "no-shadow": "off", // 禁止变量声明与外层作用域的变量同名
    "no-underscore-dangle": "off", // 禁止标识符中的悬空下划线_
    "no-restricted-syntax": "off", // 禁止指定的语法
    "no-unused-expressions": "off", // 禁止未使用的表达式
    "no-case-declarations": "off", // 禁止 case 子句中的词法声明
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off", // 要求 return 语句始终或从不指定值
    "new-cap": "off", // 要求构造函数名称以大写字母开头
    "guard-for-in": "off", // 要求 for-in 循环包含 if 语句
    "class-methods-use-this": "off", // 强制类方法使用 this
    camelcase: "off", // 强制执行驼峰命名约定
    eqeqeq: ["error"], // 必须使用 ===
    "prefer-arrow-callback": ["error"], // 回调函数必须使用箭头函数
    "object-shorthand": ["error"], // 对象属性简写
    "max-params": [0, 3] // 函数最多只能有3个参数
  }
}
