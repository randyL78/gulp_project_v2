# gulp_project_v2

## Project 8 for Trehouse FSJS Techdegree

### Complete Rebuild of gulp build pipeline project because dependencies had too many breaking changes :(

* Aiming for exceeds

* Project uses inline source maps for CSS and JavaScript

* Please note, I felt to be more like a real world project the final index.html file should be in the dist folder, too, so please use that one when checking to see if everything worked. Thank you!

* This project uses `gulp` v4 and requires that `gulp-cli` be installed globally to be able to run the `gulp` command from the root directory. The project was designed using `gulp-cli` v2

* Available `gulp` commands:

  * `gulp clean` - Deletes 'dist' directory

  * `gulp images` - Optimizes images and places them in 'dist/content' folder

  * `gulp styles` - Compiles, concats and minifies .scss and .sass files into css and places them into the 'dist/styles` folder along with forming inline source maps.

  * `gulp scripts` - Concats and minifies .js files into a single file and places them into the 'dist/scripts` folder along with forming inline source maps.

  * `gulp serve` - Creates a local server to run files in browser

  * `gulp build` - Combines the clean, images, styles, and scripts taskes

  * `gulp` default command, Combines build task with a local server that watches for SASS changes and does a live reload.
