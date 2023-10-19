// vite.config.ts
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros/vite";
import { defineConfig } from "vite";
export default defineConfig({
	plugins: [
		VueMacros({
			plugins: {
				vue: Vue(),
				vueJsx: VueJsx(),
			},
		}),
	],
	server: {
		port: 8080,
	},
	resolve: {
		alias: {
			"@": "",
		},
	},
});
