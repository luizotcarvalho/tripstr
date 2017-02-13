module.exports = function (gulp, options, plugins) {
	gulp.task('build-css', ['clean'], function() {
	    return gulp.src(options.paths.scripts.sass)
	        .pipe(plugins.sourcemaps.init())
	        .pipe(plugins.sass())
	        .pipe(options.utils.cachebust.resources())
	        .pipe(plugins.sourcemaps.write(options.paths.maps))
	        .pipe(gulp.dest(options.paths.dest));
	});
};