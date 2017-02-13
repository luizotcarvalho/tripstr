module.exports = function (gulp, options, plugins) {
	gulp.task('build', [ 'clean', 'bower','build-css','build-template-cache', 'jshint', 'build-js'], function() {
	    return gulp.src(options.paths.scripts.html.index)
	        .pipe(options.utils.cachebust.references())
	        .pipe(gulp.dest(options.paths.dest));
	});

	gulp.task('watch', function() {
	    return gulp.watch([
	    	options.paths.scripts.html.index, 
	    	options.paths.scripts.html.partials,
	    	options.paths.scripts.sass, 
	    	options.paths.scripts.js.all
	    ], ['build']);
	});

	gulp.task('dev', ['watch', 'webserver']);

	gulp.task('default', ['sprite','build', 'test']);
};