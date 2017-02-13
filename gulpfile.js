
var gulp = require('gulp');

var utils = {
    source: require('vinyl-source-stream'),
    buffer: require('vinyl-buffer'),
    browserify: require('browserify'),
    ngAnnotate: require('browserify-ngannotate'),
    del: require('del'),
    gutil: require('gulp-util'),
    cachebust: new require('gulp-cachebust')(),
    ngHtml2Js: require("gulp-ng-html2js")
};

var paths = {
    dest: './dist',
    maps: './maps',
    sprites: {
        images: './static/images/*.png',
        output_img: 'app.png',
        output_sass: '_app.scss'
    },
    scripts: {
        js: {
            all: '/src/js/*.js',
            app: './src/js/app.js',
            controllers: './src/js/controllers',
            services: './src/js/services',
            directives: './src/js/directives',
            output_file: 'bundle.js'
        },
        sass: './src/sass/*',
        html: {
            index: './index.html',
            partials: './src/partials/*.html'
        },
        cache: {
            name: 'appPartials',
            prefix: '/partials/',
            output_file: './templateCachePartials.js'
        }
    },
    test: {
        tests: './test/unit/*.js',
        config: 'karma.conf.js' 
    },
    bower: './bower.json'
};

require('load-gulp-tasks')(gulp, { paths: paths, utils: utils });