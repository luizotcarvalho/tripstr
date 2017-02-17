// Tasks principais da build
// Build -> Constroi todos os arquivos necessários da aplicação
// Dev -> Escuta por modificações nos arquivos e sobe um servidor na porta 9005
// Default -> Instala dependencias, builda e roda os testes
module.exports = function (gulp, options, plugins) {
	gulp.task('build', ['clean','build-css', 'copy', 'build-template-cache', 'jshint', 'build-js'], function() {
	    return gulp.src(options.paths.scripts.html.index)
	        .pipe(options.utils.cachebust.references())
	        .pipe(gulp.dest(options.paths.dest));
	});

	gulp.task('dev', ['watch', 'webserver']);

	gulp.task('default', ['bower', 'build', 'test']);
};