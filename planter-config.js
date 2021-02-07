module.exports = {
  // Global site data. Registered as handlebars data
  site: {
    title: 'My Site',
    lang: 'en',
  },
  // The paths for your build files
  build: {
    dir: './build',
    // Prefixes for your asset paths
    // An empty string '' will put the file(s) at the root of the build dir
    // A non-empty string will be used as a directory name within the build dir
    js: '',
    css: '',
    static: 'static',
  },
  styles: {
    entry: './src/styles/style.scss',
    match: './src/styles/**/*.scss',
    output: 'style.css',
    options: {
      minify: true,
    }
  },
  js: {
    entry: './src/js/main.js',
    match: './src/js/**/*.js',
    output: 'bundle.js',
    options: {
      minify: false,
      uglify: false,
    }
  },
  html: {
    entry: './src/views/*.{hbs,html}',
    match : {
      pages: './src/views/*.{hbs,html}',
      partials: './src/views/partials/**/*.hbs',
      helpers: './src/views/helpers/**/*.js',
      data: './src/data/**/*.{js,json}',
    },
    options: {
      beautify: true,
      minify: false,
    }
  },
  static: {
    match: './static/*',
  }
}