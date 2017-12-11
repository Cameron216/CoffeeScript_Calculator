var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('gulp-browserify');

var sassSources = [
    'components/sass/base.scss'
];

var jsSources = [
    'components/scripts/script.js'
];

var coffeeSources = [
    'components/coffee/*.coffee'
];

gulp.task('compass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            style: 'expanded'
        })
        .on('error', gutil.log))
        .pipe(gulp.dest('development/css'))
});

gulp.task('sass', function(){
    gulp.src(sassSources)
        .pipe(sass({
            style: 'expanded',
            lineNumbers: true
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('development/css'))
});

gulp.task('js', function(){
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('development/js'))
});

gulp.task('coffee', function(){
    gulp.src(coffeeSources)
        .pipe(coffee({
            bare: true
        })
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

gulp.task('default', ['compass', 'coffee', 'js']);