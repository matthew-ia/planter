# Config
## [**`planter-config.js`**](file)

The Planter config, `planter-config.js`, allows you to configure settings for the gulp tasks. This config allows you to customize things like the names of your entry and output file names, and change where build/watch tasks look for files if you've modified your project structure, all without needing to update the gulp tasks manually. 

```js
// Global site data. Merged with data passed into handlebars
site: {
	// This will be used as the site's title within `<head>`
	// See `src/views/partials/head.hbs`
	title: 'My Site Planter',
	// Used for `<html lang={{site.lang}}>`
	// See `src/views/partials/layout.hbs`
	lang: 'en',
}

build: {
  // The build directory
  // The is prepended on all other build path strings in this config object
  dir: './build',
  // Prefixes for your asset paths
  // An empty string '' will put the file(s) at the root of the build dir
  js: '',
  css: '',
  // A non-empty string will be used as a directory name within the build dir
  // e.g. output: ./build/static/{filename}
  static: 'static',
},

styles: {
  // Entry file for compiling Sass
  // Can be an array of strings if you want multiple entries and CSS output files
  // TODO: A glob string also works, e.g. './src/styles/*.scss'
  entry: './src/styles/style.scss',
  // Glob to watch for changes
  match: './src/styles/**/*.scss',
  // Specify the path of the output file
  // This gets placed in the directory specified by build.dir
  // TODO: Use a splat (e.g. '*.css'), to keep the original name of the entry file
  output: 'style.css',
  options: {
    // Minify output CSS. Default: { outputStyle: 'compressed' } passed to gulp-sass
    minify: { outputStyle: 'compressed' },
  }
}

js: {
  // Entry file for transpiling and bundling JS
  // Can be an array of strings if you want multiple entries and bundles
  // TODO: A glob string also works, e.g. './src/js/*.js'
  entry: './src/js/main.js',
  // Glob to watch for changes
  match: './src/js/**/*.js',
  // Specify the path of the output file
  // This gets placed in the directory specified by build.dir
  // TODO: Use a splat (e.g. '*.js'), to keep the original name of the entry file
  output: 'bundle.js'
  options: {
    // Minify options to pass to terser. Default: terser defaults
    // See terser options: https://github.com/terser/terser#minify-options
	  minify: {},  
  }
}

html: {
  // Entry file for compiling Handlebars to HTML
  // Your entry file can be .hbs or .html
  // (You could even forgo handlebars altogether)
  entry: './src/views/*.{hbs,html}',
  // Globs for watching changes to each type of handlebars file,
  // and for building the output HTML from handlebars
  match : {
    // All .hbs or .html files at the base of ./src/views is treated as a page
    pages: './src/views/*.{hbs,html}',
    // Handlebars partials
    partials: './src/views/partials/**/*.hbs',
    // Handlebars helpers
    helpers: './src/views/helpers/**/*.js',
    // Handlebars data
    // Note: by default data is expected at ./src/data rather than ./src/views/data
    data: './src/data/**/*.{js,json}',
  },
  options: {
    // Beautify HTML output. Default: { indent_size: '2' } passed to gulp-beautify
    beautify: { indent_size: '2' },
    // E.g., if you wanted to minify HTML output, you could pass options to beautify like so:
    /*
    beautify: {
      indent_size: '0',
      preserve_newlines: false,
      eol: '',
    }
    */
  },
  static: {
    // Glob for watching & copying static files
    // E.g., update this if you change ./static/ to ./assets/
    match: './static/*',
  }
}

```