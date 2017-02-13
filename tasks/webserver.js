module.exports = function (gulp, options, plugins) {
	gulp.task('webserver', ['watch','build'], function() {
	    gulp.src('.')
	        .pipe(plugins.webserver({
	            livereload: false,
	            directoryListing: true,
	            port: 9005,
	            open: "http://localhost:9005/dist/index.html"
	        }));
	});
};