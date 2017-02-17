// Importa gulp
var gulp = require('gulp');

// Cria objeto com utilitários
var utils = {
    source: require('vinyl-source-stream'),
    Server: require('karma').Server,
    buffer: require('vinyl-buffer'),
    browserify: require('browserify'),
    ngAnnotate: require('browserify-ngannotate'),
    shim: require('browserify-shim'),
    del: require('del'),
    gutil: require('gulp-util'),
    copy: require('gulp-copy'),
    cachebust: new require('gulp-cachebust')(),
    ngHtml2Js: require("gulp-ng-html2js")
};

// Caminhos e arquivos usados pelas tasks
var paths = {
    dest: './dist',
    maps: './maps',
    static: './static/**',
    scripts: {
        js: {
            all: '/src/js/**/*.js',
            app: './src/js/app.js',
            api: './src/js/api',
            services: './src/js/services',
            directives: './src/js/directives',
            output_file: 'bundle.js'
        },
        sass: './src/sass/**/*.scss',
        html: {
            index: './index.html',
            templates: './src/**/*.html'
        },
        cache: {
            name: 'templates',
            prefix: '/templates/',
            output_file: './templateCache.js'
        }
    },
    test: {
        tests: './test/unit/*.js',
        config: './karma.conf.js'
    },
    bower: './bower.json'
};

// Configuração de suporte do autoprefixer
var autoprefixer = {
    browsers: ['last 2 versions'],
    cascade: false
};

require('load-gulp-tasks')(gulp, { paths: paths, utils: utils, autoprefixer: autoprefixer });