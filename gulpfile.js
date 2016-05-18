var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del');

// Styles
gulp.task('styles', function() {
      return sass('src/scss/*.scss', { style: 'expanded' })
            .pipe(autoprefixer('last 2 version'))
            .pipe(gulp.dest('dist/css'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(cssnano())
            .pipe(gulp.dest('dist/css'))
            .pipe(notify({ message: 'Scss task complete' }));
});

// Scripts
gulp.task('scripts', function() {
      return gulp.src('src/js/*.js')
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('default'))
            .pipe(concat('script.js'))
            .pipe(gulp.dest('dist/js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
            .pipe(notify({ message: 'Scripts task complete' }));
});

// Clean
gulp.task('clean', function() {
    return del(['dist/css', 'dist/js']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('src/scss/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('src/js/*.js', ['scripts']);

});