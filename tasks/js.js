module.exports = function (gulp, options, plugins) {
    gulp.task('build-js', ['clean'], function() {
        var b = options.utils.browserify({
            entries: options.paths.scripts.js.app,
            debug: true,
            paths: [
                options.paths.scripts.js.controllers, 
                options.paths.scripts.js.services, 
                options.paths.scripts.js.directives
            ],
            transform: [options.utils.ngAnnotate]
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