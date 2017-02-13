module.exports = function (gulp, options, plugins) {
	gulp.task('jshint', function() {
	    gulp.src(options.paths.scripts.js.all)
	        .pipe(plugins.jshint())
	        .pipe(plugins.jshint.reporter('default'));
	});
};