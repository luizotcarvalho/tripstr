module.exports = function (gulp, options, plugins) {
	gulp.task('test', ['build-js'], function(done) {
	    return gulp.src(options.paths.test.tests)
	        .pipe(plugins.karma({
	            configFile: options.paths.test.config,
	            singleRun: true
	        }, function() {
	            done();
	        }))
	        .on('error', function(err) {
	            console.log('karma tests failed: ' + err);
	            throw err;
	        });
	});
};