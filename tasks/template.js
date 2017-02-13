module.exports = function (gulp, options, plugins) {
	gulp.task('build-template-cache', ['clean'], function() {
	    return gulp.src(options.paths.scripts.html.partials)
	        .pipe(options.utils.ngHtml2Js({
	            moduleName: options.paths.scripts.cache.name,
	            prefix: options.paths.scripts.cache.prefix
	        }))
	        .pipe(plugins.concat(options.paths.scripts.cache.output_file))
	        .pipe(gulp.dest(options.paths.dest));
	});
};