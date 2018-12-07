const gulp = require('gulp');
//const gulpStylelint = require('gulp-stylelint');
//const merge = require('merge-stream');

// Sass & Utility
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

// JS
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var paths = {
  styles: {
    src: './src/styles/**/*.scss',
    dest: './pub/css/'
  },
  js: {
    src: './src/js/**/*.js',
    dest: './pub/js/'
  }
}

function styles() {
  return gulp.src(paths.styles.src, {sourcemaps: true})
      .pipe(sass())
      .pipe(rename({
        basename: 'style'
      }))
      .pipe(gulp.dest(paths.styles.dest));
}

function js() {
  return browserify({entries: './src/js/main.js', extensions: ['.js'], debug: true})
      .transform(babelify, { presets: ['@babel/preset-env'] })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(paths.js.dest));
}

function watchStyles() {
  gulp.watch(paths.styles.src, styles);
}

function watchJS() {
  gulp.watch(paths.js.src, js);
}

//var watch = gulp.parallel(watchSass, watchJS)
var buildStyles  = gulp.parallel(styles, watchStyles);
var buildJS = gulp.parallel(js, watchJS);
var build = gulp.parallel(buildStyles, buildJS);

gulp.task(buildStyles)
gulp.task(buildJS);
gulp.task(build);
gulp.task('default', build);


// Thanks hougasian for
// https://gist.github.com/hougasian/4bcba36283b4a23bc1d4c81fcc42077b
