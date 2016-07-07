'use strict';
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  scripts: 'app/scripts/**/*.js',
  scss: 'app/scss/**/*',
  html: 'app/*.html'
};

// watch files for changes and reload
gulp.task('serve', ['sass'], function () {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('sass', function () {
  return sass('app/scss/main.scss')
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream: true}));
});


gulp.task('watch', function () {
  //gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.html);
});

gulp.task('default', ['serve', 'watch', 'sass']);
