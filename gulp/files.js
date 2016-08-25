var paths = {
  css: {
    src: './css/src/',
    dist: './css/'
  },
  js: {
    src: './js/src/',
    dist: './js/'
  },
  jshint: './',
  maps: './css/src/maps/'
}

var globs = {
  js: [
    paths.js.src + 'map.js',
    paths.js.src + 'main.js'
  ],
  js_dist: {
    original: 'app.js',
    minified: 'app.min.js'
  },
  jshint: '.jshintrc',
  css: [
    paths.css.src + 'style.css'
  ],
  css_raw: [
    paths.css.src + '*.css'
  ],
  maps: [
    'config.yml',
    'breakpoints.yml',
    'colors.yml',
    'icons.yml',
    'fonts.yml'
  ]
};

module.exports = {
  paths: paths,
  globs: globs
};
