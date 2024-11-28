module.exports = {
  "*.{js,jsx,ts,tsx}": ["pnpm lint:fix", "pnpm prettier:fix"],
  "*.vue": ["pnpm lint:fix", "pnpm stylelint --fix", "pnpm prettier:fix"],
  "*.{scss,less,styl,html}": ["pnpm stylelint --fix", "pnpm prettier:fix"]
}
