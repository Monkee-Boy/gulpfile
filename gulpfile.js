var config = require('./gulp/config.json'),
    files = require('./gulp/files'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    sorting = require('postcss-sorting'),
    atImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    lost = require('lost'),
    conditionals = require('postcss-conditionals'),
    postcssfor = require('postcss-for'),
    postcsseach = require('postcss-each'),
    compactmq = require('postcss-compact-mq'),
    stylelint = require('gulp-stylelint'),
    calc = require('postcss-calc'),
    simpleVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    map = require('postcss-map'),
    cssstats = require('cssstats'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sizereport = require('gulp-sizereport');

gulp.task('default', ['css', 'js']);

gulp.task('lint-css', function () {
  return gulp.src(files.globs.css_raw)
    .pipe(sourcemaps.init())
    .pipe(stylelint(config.stylelint));
});

gulp.task('sort-css', function () {
  /* Having some issues with nested rules - removing for now. */
  // return gulp.src(files.globs.css_raw)
  //   .pipe(postcss([sorting(config.sorting)]))
  //   .pipe(gulp.dest(files.paths.css.src));
  return;
});

gulp.task('css', ['lint-css', 'sort-css'], function () {
  var processors = [
    map({ basePath: files.paths.maps, maps: files.globs.maps }),
    atImport(),
    conditionals(),
    postcssfor(),
    postcsseach(),
    mixins(),
    lost(),
    compactmq(),
    nested(),
    calc(),
    simpleVars(),
    autoprefixer(config.autoprefixer),
    cssnano()
  ];

  return gulp.src(files.globs.css)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(files.paths.css.dist))
    .pipe(sizereport());
});

gulp.task('lint-js', function() {
  return gulp.src(files.globs.js)
    .pipe(jshint(files.paths.jshint + files.globs.jshint))
    .pipe(jshint.reporter(config.jshint_reporter));
});

gulp.task('js', ['lint-js'], function() {
  return gulp.src(files.globs.js)
    .pipe(concat(files.globs.js_dist.original))
    .pipe(gulp.dest(files.paths.js.dist))
    .pipe(rename(files.globs.js_dist.minified))
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest(files.paths.js.dist))
    .pipe(sizereport());
});
