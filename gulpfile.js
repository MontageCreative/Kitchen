const gulp = require('gulp');
const fs = require('fs');
const rm = require('gulp-rimraf');
const exec = require('child_process').exec;
const intercept = require('gulp-intercept');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const prefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-minify-css');
const browserSync = require("browser-sync");
const reload = browserSync.reload;


gulp.task('build', ['clean'], function(cb) {
  return exec('ng build --env=prod', { maxBuffer: 1024 * 500 }, function(
    err,
    stdout,
    stderr
  ) {
    cb(err);
  });
});

gulp.task('clean', ['banner', 'build', 'sass', 'style:build'], function() {
  return gulp.src('dist/*').pipe(rm());
});

gulp.task('default', ['banner'], function() {});

gulp.task('banner', function(cb) {
  gulp.src('src/assets/banner.txt').pipe(
    intercept(function(file) {
      cb(console.log(file.contents.toString()));
    })
  );
});

gulp.task('sass', function() {
  return gulp
    .src('./src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('style:build', function () {
  gulp.src("./src/styles/style.scss")
    .pipe(sourcemaps.init()) //То же самое что и с js
    .pipe(sass()) //Скомпилируем
    .pipe(prefixer()) //Добавим вендорные префиксы
    // .pipe(cssmin()) //Сожмем
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/styles/")) //И в build
    .pipe(reload({stream: true}));
});

gulp.task('watch-sass', function() {
  gulp.watch('./src/styles/**/*.scss', ['style:build']);
});
