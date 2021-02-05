const config = require('./planter-config');
const gulp = require('gulp');
const { series } = require('gulp');
const rename = require('gulp-rename');
const merge = require('merge-stream')
const del = require('del');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const browserify = require('browserify');
const babelify = require('babelify');
const handlebars = require('gulp-hb');
const beautify = require('gulp-beautify');
const browserSync = require('browser-sync').create();

// Configure site data 
const SITE_DATA = {
  site: {
    ...config.site,
    // For path resolutions based on your output paths
    assets: {
      css: config.styles.outFile,
      js: config.js.outFile,
      static: config.build.static
    }
  }
}

// Compile CSS using node-sass
function styles() {
  return gulp.src(config.styles.match)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(
      config.styles.outFile
    ))
    .pipe(gulp.dest(config.build.dir));
}

// Compile JS using browserify & babel
function js() {
  return browserify({
      entries: config.js.entryFile, 
      debug: true
    })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(source(config.js.outFile))
    .pipe(gulp.dest(config.build.dir));
}

// Compile HTML using handlebars
function html() {
  
  return gulp.src(config.html.entryFile)
    .pipe(handlebars()
      .data(SITE_DATA)
      .partials(config.html.match.partials)
      .partials(config.html.match.layouts)
      .helpers(require('handlebars-layouts'))
      .helpers(config.html.match.helpers)
      .data(config.html.match.data)
      
    )
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(rename(
      config.html.outFile
    ))
    .pipe(gulp.dest(config.build.dir));
}

function static() {
  // Copy ./static and its contents to the build path
  const static = gulp.src(['./static/*', '!./static/favicon.*'])
    .pipe(gulp.dest('./build/static/'));

  // Copy favicon files separately from the other static files
  const favicons = gulp.src('./static/favicon.*')
  .pipe(gulp.dest('./build/'));

  return merge(static, favicons);
}

function watch() {
  // Run respective build tasks once watch starts
  const options = { ignoreInitial: false };
  // Watch Styles
  gulp.watch(config.styles.match, options, styles)
    .on('change', browserSync.reload);
  // Watch JS
  gulp.watch(config.js.match, options, js)
    .on('change', browserSync.reload);
  // Watch Static (images, etc.)
  gulp.watch('./static/*', options, static)
    .on('change', browserSync.reload);
  // Watch HTML (handlebars: partials, helpers, and data)
  gulp.watch([
    config.html.match.main,
    config.html.match.partials,
    config.html.match.helpers,
    config.html.match.layouts,
    config.html.match.data,
  ], options, html).on('change', browserSync.reload);
}

function develop() {
  browserSync.init({
    server: './build'
  });
  watch();  
}

function clean() {
  return del(`${config.build.dir}/*`);
}

exports.styles = styles;
exports.js = js;
exports.html = html;
exports.static = static;
exports.build = series(styles, js, static, html);
exports.watch = watch;
exports.develop = develop;
exports.clean = clean;

exports.default = develop;