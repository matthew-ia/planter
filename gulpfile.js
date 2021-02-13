const config = require('./planter-config');
const utils = require('./planter-utils');
const gulp = require('gulp');
const { series } = require('gulp');
const merge = require('merge-stream')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const del = require('del');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const handlebars = require('gulp-hb');
const browserify = require('browserify');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const beautify = require('gulp-beautify');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

// Configure global data (passed to handlebars)
const DATA = {
  site: {
    ...config.site,
  },
  // Paths to be used in your hbs files
  assets: {
    // CSS and JS are built full build paths to the output files
    css: config.build.css === '' 
      ? `${config.styles.output}`
      : `${config.build.css}/${config.styles.output}`,
    js: config.build.js === '' 
    ? `${config.js.output}`
    : `${config.build.js}/${config.js.output}`,
    // This is just the static directory
    // Usage: "{{@root.assets.static}}/image.png"
    static: `${config.build.static}`
  }
}

// Configure build options based on `planter-config.js`
const options = {
  styles: utils.configure.css(config.styles.options),
  js: utils.configure.js(config.js.options),
  html: utils.configure.html(config.html.options),
}

// Compile CSS using sass
function styles() {
  return gulp.src(config.styles.entry)
    .pipe(sourcemaps.init())
    .pipe(sass(options.styles).on('error', sass.logError))
    .pipe(rename(
      config.styles.output
    ))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.build.dir));
}

// Compile JS using browserify & babel
function js() {
  return browserify({
      entries: config.js.entry, 
      debug: true
    })
    .transform(babelify, { presets: ['@babel/preset-env'], sourceMaps: true })
    .bundle()
    .pipe(source(config.js.output))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulpif(options.js, terser(options.js)))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.build.dir));
}

// Compile HTML using handlebars
function html() {
  let filename = '';
  return gulp.src(config.html.entry)
    .pipe(handlebars()
      .data(DATA)
      .data(config.html.match.data)
      .partials(config.html.match.partials)
      .helpers(require('handlebars-layouts'))
      .helpers(config.html.match.helpers)
    )
    .pipe(rename((path) => {
      path.extname = '.html';
    }))
    .pipe(gulpif(options.html, beautify.html(options.html)))
    .pipe(gulp.dest(config.build.dir));
}

function static() {
  // Copy ./static and its contents to the build path
  const static = gulp.src(['./static/*', '!./static/favicon.*'])
    .pipe(gulp.dest(`${config.build.dir}/${config.build.static}`));

  // Copy favicon files separately from the other static files
  const favicons = gulp.src('./static/favicon.*')
  .pipe(gulp.dest(`${config.build.dir}`));

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
    config.html.match.pages,
    config.html.match.partials,
    config.html.match.helpers,
    config.html.match.data,
  ], options, html).on('change', browserSync.reload);
}

function develop() {
  browserSync.init({
    server: './build',
    open: false,
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