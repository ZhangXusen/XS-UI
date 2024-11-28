/** @type {import('cz-git').UserConfig }} */
module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      {
        value: "feat",
        name: "feat:     ✨  A new feature",
        emoji: ":sparkles:"
      },
      { value: "fix", name: "fix:      🐛  A bug fix", emoji: ":bug:" },
      {
        value: "docs",
        name: "docs:     📝  Documentation only changes",
        emoji: ":memo:"
      },
      {
        value: "style",
        name: "style:    💄  Changes that do not affect the meaning of the code",
        emoji: ":lipstick:"
      },
      {
        value: "refactor",
        name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature",
        emoji: ":recycle:"
      },
      {
        value: "perf",
        name: "perf:     ⚡️  A code change that improves performance",
        emoji: ":zap:"
      },
      {
        value: "test",
        name: "test:     ✅  Adding missing tests or correcting existing tests",
        emoji: ":white_check_mark:"
      },
      {
        value: "build",
        name: "build:    📦️   Changes that affect the build system or external dependencies",
        emoji: ":package:"
      },
      {
        value: "ci",
        name: "ci:       🎡  Changes to our CI configuration files and scripts",
        emoji: ":ferris_wheel:"
      },
      {
        value: "chore",
        name: "chore:    🔨  Other changes that don't modify src or test files",
        emoji: ":hammer:"
      },
      {
        value: "revert",
        name: "revert:   ⏪️  Reverts a previous commit",
        emoji: ":rewind:"
      }
    ],
    useEmoji: true,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [
      { value: "closed", name: "closed:   ISSUES has been processed" }
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
}
