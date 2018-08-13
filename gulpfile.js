'use strict'

const { dest, parallel, src, series, watch} = require('gulp');
const concat      = require('gulp-concat');
const connect     = require('gulp-connect');
const del         = require('del');
const htmlreplace = require('gulp-html-replace');
const imagemin    = require('gulp-imagemin')
const maps        = require('gulp-sourcemaps');
const opn         = require('opn');
const rename      = require('gulp-rename');
const sass        = require('gulp-sass');
const uglify      = require('gulp-uglify');

const output = 'dist';
const port = 3030;

// delete all files/folders in dist/ folder
const clean = () =>  
  del(output)
    .then(() => console.log("Folder 'dist' and its files have been deleted"));

// copy index.html into dist folder and change script and stylesheet links    
const html = () => 
  src('index.html')
    .pipe(htmlreplace({
      'css' : 'styles/all.min.css',
      'js'  : 'scripts/all.min.js'
    }))
    .pipe(dest(output))

const icons = () =>
  src('./src/icons/*')
    .pipe(dest(output + "/icons"));

// optimize images and copy to /dist/content    
const images = () => 
  src('./src/images/*')
    .pipe(imagemin())
    .pipe(dest(output + '/content'));

// create a server with live reload capabilities    
const serve = () => {
  connect.server({
    // uncomment for final version
    root: 'dist',
    livereload: true,
    port: port
  });
  opn(`http://localhost:${port}/`);
}

const scripts = () => 
  src([
    './src/js/*.js',
    './src/js/circle/*.js'
  ])
    .pipe(maps.init())
    // concatenate js files
    .pipe(concat('all.min.js'))
    // minify js files
    .pipe(uglify())
    // generate source maps for JS
    .pipe(maps.write())
    .pipe(dest(output + "/scripts/")); 

const styles = () => 
  src('./src/sass/global.scss')
    .pipe(rename("all.min.css"))
    .pipe(maps.init())
    // compile SCSS into CSS and minify
    .pipe(sass({outputStyle: 'compressed'}))
    // generate source maps for CSS
    .pipe(maps.write())
    .pipe(dest(output + "/styles/"));

// live reload the site    
const reload = () =>
  src('./')
    .pipe(connect.reload());

// watch SASS files for changes    
const watcher = () => 
  watch("src/sass/**/*", series(styles, reload));

// Build all of the dist files, ensuring directory is empty first
const build = series(clean, parallel(html, icons, images, scripts, styles));

exports.build = build;
exports.clean = clean;
exports.default = series(build, parallel(serve, watcher));
exports.images = images;
exports.scripts = scripts;
exports.serve = serve;
exports.styles = styles;
