module.exports = {
  site: {
    title: 'My Site',
    lang: 'en',
  },
  build: {
    dir: './build',
    static: 'static',
  },
  styles: {
    match: './src/styles/**/*.scss',
    outFile: 'style.css',
    options: {
      minify: true,
    }
  },
  js: {
    entry: './src/js/main.js',
    match: './src/**/*.js',
    outFile: 'bundle.js', // name of file, needs file ext.
    options: {
      uglify: false,
      minify: false,
    }
  },
  html: {
    entry: './src/views/*.{hbs,html}',
    match : {
      main: './src/views/**/*.{hbs,html}',
      partials: './src/views/partials/**/*.hbs',
      helpers: './src/views/helpers/**/*.js',
      layouts: './src/views/layouts/**/*.hbs',
      data: './src/data/**/*.{js,json}',
    },
    options: {
      beautify: true,
    }
  }
}