module.exports = function (gulp, options, plugins) {
	gulp.task('clean', function (cb) {
	    options.utils.del(options.paths.dest, cb);
	});
};