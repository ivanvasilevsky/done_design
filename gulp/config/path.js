import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = './dist';
const srcFolder = './src';

export const path = {
	build: {
		js: `${buildFolder}/assets/js/`,
		css: `${buildFolder}/assets/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/assets/img/`,
		fonts: `${buildFolder}/assets/fonts/`,
		files: `${buildFolder}/assets/`,
	},
	src: {
		js: `${srcFolder}/assets/js/app.js`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/assets/img/**/*.svg`,
		scss: `${srcFolder}/assets/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/assets/**/*.*`,
	},
	watch: {
		js: `${srcFolder}/assets/js/**/*.js`,
		scss: `${srcFolder}/assets/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		files: `${srcFolder}/assets/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}