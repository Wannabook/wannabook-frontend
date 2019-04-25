const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('mobile', function() {
  browserSync({
    proxy: 'localhost:8080',
    open: false,
  });
});
