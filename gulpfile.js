const { series, parallel } = require('gulp');

function clean(cb) {
  // delete all files/folders in dist/ folder
}

function images(cb) {
  // optimize jpg and png files
  // copy optimized images to dist/content/
  cb();
}

function scripts(cb) {
  // concatenate, minify, and copy all of the project’s JavaScript files into an all.min.js file 
  // generate source maps for JS
  // copy all.min.js into the dist/scripts folder.
  cb();
}

function styles(cb) {
  // compile SCSS into CSS
  // concate and minify into all.min.css
  // generate source maps for CSS
  // copy all.min.css into dist/styles folder
  cb();
}

function build(cb) {
  // run clean, scripts, styles, and images tasks
    // ensure clean finishes before other tasks begin
  cb();
}

function defaultTask(cb) {
  // Watch for changes to SCSS
    // Run styles command
    // Run gulp build
     // Load webserver for project
  cb();
}


exports.build = build;
exports.clean = clean;
exports.default = defaultTask;
exports.images = images;
exports.scripts = scripts;
exports.styles = styles;
