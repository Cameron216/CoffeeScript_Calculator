var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect');

var sassSources = [
    'components/sass/base.scss'
];

var jsSources = [
    'components/scripts/main.js',
    'components/scripts/calc.js'
];

var coffeeSources = [
    'components/coffee/*.coffee'
];

var htmlSources = [
    'development/*.html'
];

gulp.task('compass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            style: 'expanded'
        })
        .on('error', gutil.log))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('development/css'))
        .pipe(connect.reload())        
});

gulp.task('coffee', function(){
    gulp.src(coffeeSources)
        .pipe(coffee({
            bare: true
        })
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function(){
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('development/js'))
        .pipe(connect.reload())
});

gulp.task('html', function(){
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch(coffeeSources, ['coffee']);
    gulp.watch(jsSources, ['js']);
    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function(){
    connect.server({
        root: 'development/',
        livereload: true
    });
});

gulp.task('default', ['compass', 'coffee', 'js', 'html', 'connect', 'watch']);