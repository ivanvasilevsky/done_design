import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
	return app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.otf`, {})
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(app.gulp.dest(`${app.path.srcFolder}/assets/fonts`))
}

export const ttfToWoff = () => {
	return app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.ttf`, {})
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
}
