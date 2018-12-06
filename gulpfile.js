const gulp = require('gulp');
//const gulpStylelint = require('gulp-stylelint');
//const merge = require('merge-stream');

const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

var paths = {
  styles: {
    src: './src/styles/**/*.scss',
    dest: './pub/css/'
  }
}

function styles() {
  return gulp.src(paths.styles.src, {
    sourcemaps: true
  })
  .pipe(sass())
  .pipe(rename({
    basename: 'style'
  }))
  .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

var build  = gulp.parallel(styles, watch);

gulp.task(build);
gulp.task('default', build);


// Thanks hougasian for 
// https://gist.github.com/hougasian/4bcba36283b4a23bc1d4c81fcc42077b
