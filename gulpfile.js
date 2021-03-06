var config = require('./gulp/config.json'),
    files = require('./gulp/files'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    atImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
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
    sizereport = require('gulp-sizereport'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    pump = require('pump');

gulp.task('default', ['images', 'css', 'js']);

gulp.task('images', function () {
  return gulp.src(files.globs.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(files.paths.images.dist));
});

gulp.task('lint-css', function () {
  return gulp.src(files.globs.css.raw)
    .pipe(sourcemaps.init())
    .pipe(stylelint(config.stylelint));
});

gulp.task('css', ['lint-css', 'sort-css'], function () {
  var processors = [
    atImport(),
    map({ basePath: files.paths.css.maps, maps: files.globs.css.maps }),
    conditionals(),
    postcssfor(),
    postcsseach(),
    mixins(),
    compactmq(),
    nested(),
    calc(),
    simpleVars(),
    autoprefixer(config.autoprefixer),
    cssnano()
  ];

  return gulp.src(files.globs.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(files.paths.css.dist))
    .pipe(sizereport());
});

gulp.task('lint-js', function() {
  return gulp.src(files.globs.js.src)
    .pipe(jshint(files.paths.js.jshint + files.globs.js.jshint))
    .pipe(jshint.reporter(config.jshint_reporter));
});

gulp.task('js', ['lint-js'], function() {
  return gulp.src(files.globs.js.src)
    .pipe(sourcemaps.init())
    .pipe(babel(config.babel))
    .pipe(concat(files.globs.js.dist.original))
    .pipe(gulp.dest(files.paths.js.dist))
    .pipe(rename(files.globs.js.dist.minified))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(files.paths.js.dist))
    .pipe(sizereport());
});
