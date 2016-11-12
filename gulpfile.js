var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    webpack = require('webpack-stream'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create(),
    del = require('del');

var wpConfig = {
    output: {
        filename: 'bundle.js'
}};

gulp.task('styles', ['cleanCSS'], function() {
      return sass('src/scss/*.scss', { style: 'expanded' })
            .pipe(autoprefixer('last 2 version'))
            .pipe(gulp.dest('dist/css'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(cssnano())
            .pipe(gulp.dest('dist/css'))
            .pipe(notify({ message: 'Styles task complete' }))
            .pipe(browserSync.stream({match: '*.css'}));
});

gulp.task('styleSync', ['styles'], function() {
    browserSync.reload();
});

gulp.task('scripts', ['cleanJS'], function() {
      return gulp.src('src/js/*.js')
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('default'))
            .pipe(webpack(wpConfig))
            .pipe(gulp.dest('dist/js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
            .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('scriptSync', ['scripts'], function() {
    browserSync.reload();
});

// Clean
gulp.task('cleanCSS', function() {
    return del(['dist/css']);
});

gulp.task('cleanJS', function() {
    return del(['dist/js']);
});

gulp.task('default', function() {
    browserSync.init({
        server: {
            //baseDir: './dist'
        },
        open: false
    });

    gulp.watch('src/scss/*.scss', ['styleSync']);
    gulp.watch('src/js/*.js', ['scriptSync']);
    gulp.watch('*.html').on('change', browserSync.reload);
})
