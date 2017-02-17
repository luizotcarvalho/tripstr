// Cacheia os templates angular no proprio js criando um serviço chamado "templates"
// Otimiza o loading time do template
module.exports = function (gulp, options, plugins) {
	gulp.task('build-template-cache', ['clean'], function() {
	    return gulp.src(options.paths.scripts.html.templates)
	        .pipe(options.utils.ngHtml2Js({
	            moduleName: options.paths.scripts.cache.name,
	            prefix: options.paths.scripts.cache.prefix
	        }))
	        .pipe(plugins.concat(options.paths.scripts.cache.output_file))
	        .pipe(gulp.dest(options.paths.dest));
	});
};