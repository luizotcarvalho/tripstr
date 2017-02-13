module.exports = function (gulp, options, plugins) {
	gulp.task('bower', function() {
	    return gulp.src(options.paths.bower)
	        .pipe(plugins.install());
	});
};