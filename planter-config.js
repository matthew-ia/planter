module.exports = {
  site: {
    title: 'My Site',
    lang: 'en',
  },
  build: {
    dir: './build',
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
      minify: true,
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
    }
  },
  static: {
    match: './static/*',
  }
}