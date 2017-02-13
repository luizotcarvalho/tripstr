module.exports = function (gulp, options, plugins) {
	gulp.task('sprite', function () {
	    var spriteData = gulp.src(options.paths.sprites.images)
	        .pipe(plugins.spritesmith({
	            imgName: options.paths.sprites.output_img,
	            cssName: options.paths.sprites.output_sass,
	            algorithm: 'top-down',
	            padding: 5
	        }));

	    spriteData.css.pipe(gulp.dest(options.paths.dest));
	    spriteData.img.pipe(gulp.dest(options.paths.dest))
	});
};