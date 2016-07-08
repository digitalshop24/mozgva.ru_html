var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var concatcss = require('gulp-concat-css');
imagemin = require('gulp-imagemin'),

gulp.task('sass', function () {
	gulp.src('sass/main.scss')
	.pipe(plumber())
	.pipe(sass({errLogToConsole: true}))
	.pipe(gulp.dest('css'));
	
	
});
gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(concatcss('main.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css.min'));
});

gulp.task('img', function () {
  return gulp.src('img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('img.min'));
});

gulp.task('watch', function(){
  gulp.watch('sass/*.scss', ['sass']);
});
gulp.task('watchcss', function(){
  gulp.watch('css/*.css', ['css']);
});



