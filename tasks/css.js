// Compila o scss criando os maps e colocando os prefixos de navegadores
module.exports = function (gulp, options, plugins) {
	gulp.task('build-css', ['clean'], function() {
	    return gulp.src(options.paths.scripts.sass)
	        .pipe(plugins.sourcemaps.init())
	        .pipe(plugins.sass())
            .on('error', options.utils.gutil.log)
            .pipe(plugins.autoprefixer(options.autoprefixer))
	        .pipe(options.utils.cachebust.resources())
	        .pipe(plugins.sourcemaps.write(options.paths.maps))
	        .pipe(gulp.dest(options.paths.dest));
	});
};