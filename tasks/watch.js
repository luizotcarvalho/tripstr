// Observa mudanças nos arquivos
// Obs: Do jeito que está feito está extremamente ineficiente
// pois gera TODA build caso mude um scss por exemplo
// caso fosse um projeto em produção, isso teria que ser otimizado
module.exports = function (gulp, options, plugins) {
	gulp.task('watch', function() {
	    return gulp.watch([
	    	options.paths.static,
            options.paths.scripts.html.index,
            options.paths.scripts.html.templates,
            options.paths.scripts.sass,
	    	options.paths.scripts.js.all
	    ], ['build']);
	});
};