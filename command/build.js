const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJSX = require("@vitejs/plugin-vue-jsx");
const path = require("path");
const fs = require("fs");
const fsExtra = require("fs-extra");
//打包入口文件
const entryDir = path.resolve(__dirname, "../packages");
const outDir = path.resolve(__dirname, "../lib");

// vite基础配置
const baseConfig = defineConfig({
	configFile: false,
	publicDir: false,
	plugins: [vue(), vueJSX()],
	css: {
		// css预处理器
		preprocessorOptions: {
			scss: {
				// 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
				// 给导入的路径最后加上 ;
				additionalData: ``,
			},
		},
	},
});
//rollup配置
const rollupOptions = {
	external: ["vue", "vue-router"],
	output: {
		globals: {
			vue: "Vue",
		},
	},
};

//全量打包构建方法
const buildAll = async () => {
	await build({
		...baseConfig,
		build: {
			rollupOptions,
			lib: {
				entry: path.resolve(entryDir, "index.ts"),
				name: "element-plus-plus",
				fileName: "element-plus-plus",
				formats: ["es", "umd"],
			},
			outDir,
		},
	});
};
//单组件打包
//name:组件名称
const buildSingle = async (name) => {
	await build({
		...baseConfig,
		build: {
			rollupOptions,
			lib: {
				entry: path.resolve(entryDir, name),
				name: "index",
				fileName: "index",
				formats: ["es", "umd"],
			},
			outDir: path.resolve(outDir, name),
		},
	});
};

//每个组件生成package.json
const createPackageJson = (name) => {
	const file = `
	{
		"name":"${name}",
		"main":"index.umd.js",
		"module":"index.es.js",
		"version":"0.0.1",
		"style":"style.css"
	}`;
	//创建package.json文件
	//npm i fs-extra
	fsExtra.outputFile(
		path.resolve(outDir, `${name}/package.json`),
		file,
		"utf-8"
	);
};
const buildLib = async () => {
	await buildAll();
	console.log("全量构建完成，单独构建开始");
	//获取每个组件名称组成的数组
	if (fs.existsSync(entryDir)) {
		const components = fs.readdirSync(entryDir).filter(async (file) => {
			console.log(file);
			//组件路径
			const componentDir = path.resolve(entryDir, file);
			//是否为文件夹
			const isDir = fs.lstatSync(componentDir).isDirectory();

			return isDir && fs.readdirSync(componentDir).includes("index.ts");
		});
		//循环构建每个组件
		for (const name of components) {
			console.log("进入single");
			await buildSingle(name);
			console.log(name + "buildSingle完成");
			createPackageJson(name);
			console.log(name + "package");
		}
	} else {
		console.log("错误");
	}
};
buildLib();
