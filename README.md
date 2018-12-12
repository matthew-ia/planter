# Planter

<img src='./pub/img/planter-logo.svg' width='200' align='middle'>

<p align='center'><i>An HTML, CSS, and JS boilerplate for creatives.</i></p>

## Overview

Planter is for folks who want to quickly get started making a website and utilize Sass and JS without a framework, while retaining the simplicity of having little-to-no setup required. It includes a straightforward project directory layout. The `pub/` directory is for your public facing files (html, assets like images, compiled CSS and JS files, etc.) The `src/` directory is for source code, such as your Sass stylesheets and JavaScript files.

In the parent directory, the `gulpfile.js` is already set up to watch the Sass and JS files in `src/` and build their respective output files to `pub/`.

Both the Sass and JS source files are examples just to get you started; they don't include code that'll break any styles or functions somewhere else in the code even if you completely replaced their contents.

(However, `_planter.scss` _does_ have styling that applies certain custom variables to global element styles.)

## Getting Started

Get started with Planter by downloading the zip (probably the best option for new projects so you can initialize your own git history.)

In `planter/`, run `npm install` to install all the dev dependencies for the project (i.e. Gulp & some Gulp utilities).

To start watching/building your source files as you work, just run `gulp` in your terminal.

That's it! Start by using the default setup and write your styles in `style.scss` and your JavaScript in `main.js`.

Feel free to add a deeper layer of organization with more directories in `js/` or `styles/` and import them into the main respective source files; don't worry the gulp task will handle it and still compile your client-side output files!

## More Info

Some extra info about Planter that might help, especially if you haven't some of the included tools like Gulp before.

### gulpfile.js

The `gulpfile` in the main directory is written in Gulp 4.x syntax and ready to go with the default file structure. It includes the core build tasks: `styles`, `js`. These tasks work to look at an entry point file and build a single `.css` or `.js` file to serve on the client side (in `/pub`).

The two watch tasks, `watchStyles` and `watchJS`, run the core build tasks anytime the source files change.

There are also some helper build tasks: `buildStyles`, `buildJS`, and `build`. The first two simply let both the core build tasks _and_ the watch tasks run in parallel. The `build` task then runs _those_ two build helper tasks run in parallel. This allows you to run a single task, `build`, to watch and build all your style and JS code. Note: `build` is set to the default task, so running just `gulp` in your terminal will get the job done.

The tasks are setup to use the `paths` object, which you would customize if you were to change the directory structure, or want to rename any input/output files.

#### Styles
The `styles` task uses the `src/styles/**/*.scss` glob as the entry point for the source. This means it's getting _all_ the `.scss` files in `src/styles/` and piping them to the sass plugin for compilation into an output `.css` file.

#### JavaScript
The `js` task uses `src/js/main.js` as the entry point by default. It uses [Browserify](http://browserify.org/) to bundle all the dependencies that stem from `main.js` into a single file, `bundle.js`, by default. [Babelify](https://github.com/babel/babelify) is also used to convert any ES6+ flavored code you write into ES5 so Browserify can make use of it (i.e. changing your `import` syntax to `require`).
