// Utilities
function configureStyleOptions(opts) {
  if (opts.minify === false) return {};
  else return ({
    outputStyle: 'compressed',
  });
}

function configureJsOptions(opts) {
  // Default is to pass terser no options, 
  // which means it will use *its* defaults
  let options = {};
  if (opts.minify &&
    typeof opts.minify === 'object' 
    && !Array.isArray(opts.minify)) {
      options = opts.minify;
  }

  if (opts.minify === false) return false;

  return options;
}

function configureHtmlOptions(opts) {
  // Default
  let options = {
    indent_size: '2',
  };
  if (opts.beautify &&
    typeof opts.beautify === 'object' 
    && !Array.isArray(opts.beautify)) {
      options = opts.beautify;
  }

  return options;
}

module.exports = {
  configure: {
    css: configureStyleOptions,
    js: configureJsOptions,
    html: configureHtmlOptions,
  }
}