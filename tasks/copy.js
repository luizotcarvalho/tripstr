// Copia pasta static para pasta dist
module.exports = function (gulp, options, plugins) {
    gulp.task('copy', ['clean'], function (cb) {
        return gulp.src(options.paths.static)
            .pipe(options.utils.copy(options.paths.dest));
    });
};