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

// Configure global data (passed to handlebars)
const DATA = {
  site: {
    ...config.site,
  },
  // Paths to be used in your hbs files
  assets: {
    // CSS and JS are built full build paths to the output files
    css: `${config.build.css}/${config.styles.output}`,
    js: `${config.build.js}/${config.js.output}`,
    // This is just the static directory
    // Usage: "{{@root.assets.static}}/image.png"
    static: config.build.static
  }
}

// Compile CSS using sass
function styles() {
  return gulp.src(config.styles.entry)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(
      config.styles.output
    ))
    .pipe(gulp.dest(config.build.dir));
}

// Compile JS using browserify & babel
function js() {
  return browserify({
      entries: config.js.entry, 
      debug: true
    })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    // FIX: is this next line necessary? can't just do something like:
    // `pipe(gulp.dest(config.build.dir + config.js.output))`?
    .pipe(source(config.js.output))
    .pipe(gulp.dest(config.build.dir));
}

// Compile HTML using handlebars
function html() {
  return gulp.src(config.html.entry)
    .pipe(handlebars()
      .data(DATA)
      .data(config.html.match.data)
      .partials(config.html.match.partials)
      .helpers(require('handlebars-layouts'))
      .helpers(config.html.match.helpers)
    )
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(rename((path) => {
      path.extname = '.html';
    }))
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
    config.html.match.pages,
    config.html.match.partials,
    config.html.match.helpers,
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