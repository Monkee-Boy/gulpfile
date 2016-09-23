var paths = {
  css: {
    src: './css/src/',
    dist: './css/'
  },
  js: {
    src: './js/src/',
    vendor: './js/vendor/',
    dist: './js/'
  },
  images: {
    src: './images/src/',
    dist: './images/'
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
    'bp.yml',
    'colors.yml',
    'icons.yml',
    'fonts.yml'
  ],
  images: {
    src: paths.images.src + '*.*',
    dist: paths.images.dist + '*.*'
  }
};

module.exports = {
  paths: paths,
  globs: globs
};
