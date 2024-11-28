module.exports = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json"
      }
    }
  ],
  printWidth: 120,
  endOfLine: "auto",
  tabWidth: 2,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  vueIndentScriptAndStyle: false,
  htmlWhitespaceSensitivity: "ignore",
  wrapAttributes: true
}
