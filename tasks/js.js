// Compila o js criando o bundle do brownserify, preparando o angular, gerando o maps e minificando
module.exports = function (gulp, options, plugins) {
    gulp.task('build-js', ['clean', 'build-template-cache'], function() {
        var b = options.utils.browserify({
            entries: options.paths.scripts.js.app,
            debug: true,
            shim: {
                jquery: {
                    path: '/bower_components/jquery/dist/jquery.js',
                    exports: 'jQuery'
                },
                tether: {
                    path: '/bower_components/tether/dist/js/tether.js',
                    exports: 'Tether'
                },
                bootstrap: {
                    path: '/bower_components/bootstrap/dist/js/bootstrap.js',
                    depends: {
                        jquery: 'jQuery',
                        tether: 'Tether'
                    }
                }
            },
            paths: [
                options.paths.scripts.js.api,
                options.paths.scripts.js.services,
                options.paths.scripts.js.directives
            ],
            transform: [
                options.utils.ngAnnotate
            ]
        });

        return b.bundle()
            .pipe(options.utils.source(options.paths.scripts.js.output_file))
            .pipe(options.utils.buffer())
            .pipe(options.utils.cachebust.resources())
            .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(plugins.uglify())
            .on('error', options.utils.gutil.log)
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest(options.paths.dest + '/js/'));
    });
}