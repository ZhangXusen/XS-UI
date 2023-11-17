/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-10-15 12:45:42
 * @LastEditors: 小国际
 * @LastEditTime: 2023-11-13 22:31:12
 */
/* eslint-env node */
module.exports = {
	plugins: [
		require("postcss-each-variables"),
		require("postcss-nested"),
		require("postcss-each")({
			plugins: {
				beforeEach: [require("postcss-for"), require("postcss-color-mix")],
			},
		}),
		require("postcss-for"),
		require("postcss-color-mix"),
	],
};
