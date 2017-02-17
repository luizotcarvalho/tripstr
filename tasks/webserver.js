// Sobe um servidor na porta 9005 com livereload
module.exports = function (gulp, options, plugins) {
	gulp.task('webserver', ['watch','build'], function() {
	    gulp.src('.')
	        .pipe(plugins.webserver({
	            livereload: true,
	            directoryListing: true,
	            port: 9005,
	            open: "http://localhost:9005/dist/index.html"
	        }));
	});
};