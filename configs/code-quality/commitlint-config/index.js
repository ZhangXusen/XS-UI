module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // header最大94字符
    "header-max-length": [0, "always", 94],

    // subject不能为空
    "subject-empty": [2, "never"],

    // type必须在指定范围内
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "chore",
        "ci",
        "perf",
        "refactor",
        "test",
        "build",
        "init"
      ]
    ],
    // type不能为空
    "type-empty": [2, "never"],

    // type必须小写
    "type-case": [2, "always", "lowerCase"],

    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0],
    "subject-case": [0]
  }
}
