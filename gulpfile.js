const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

/**
 * Customize these strings if you change your directory strucure, entry points,
 * or want to change output file names.
 */
var paths = {
  styles: {
    src: './src/styles/**/*.scss',
    dest: './pub/css/',
    output: 'style' // .css appended by sass plugin
  },
  js: {
    src: './src/js/**/*.js',
    dest: './pub/js/',
    entry: './src/js/main.js',
    output: 'bundle.js' // name of file, needs file ext.
  }
}

//Core Build tasks
function styles() {
  return gulp.src(paths.styles.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(rename({
        basename: paths.styles.output
      }))
      .pipe(gulp.dest(paths.styles.dest));
}

function js() {
  return browserify({entries: paths.js.entry, extensions: ['.js'], debug: true})
      .transform(babelify, { presets: ['@babel/preset-env'] })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(paths.js.dest));
}

// Watchers
function watchStyles() {
  gulp.watch(paths.styles.src, styles);
}

function watchJS() {
  gulp.watch(paths.js.src, js);
}

// Helper build tasks
var buildStyles  = gulp.parallel(styles, watchStyles);
var buildJS = gulp.parallel(js, watchJS);
var build = gulp.parallel(buildStyles, buildJS);

gulp.task(buildStyles)
gulp.task(buildJS);
gulp.task(build);
gulp.task('default', build);

// Thanks hougasian for
// https://gist.github.com/hougasian/4bcba36283b4a23bc1d4c81fcc42077b
