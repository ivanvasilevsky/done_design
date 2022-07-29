import fileInclude from "gulp-file-include";


export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber())
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@img\//g, 'assets/img/photo/'))
		.pipe(app.plugins.replace(/@i\//g, 'assets/img/icons/'))
		.pipe(app.plugins.replace(/@bg\//g, 'assets/img/bg/'))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}