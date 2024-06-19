const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const compileSass = () => {
	return gulp
		.src('./src/styles/*.scss')
		.pipe(
			sass({ outputStyle: 'expanded' }).on(
				'error',
				sass.logError
			)
		)
		.pipe(gulp.dest('dist/expanded'))
		.pipe(
			sass({ outputStyle: 'compressed' }).on(
				'error',
				sass.logError
			)
		)
		.pipe(gulp.dest('dist/compressed'))
}

exports.default = gulp.series(compileSass)
