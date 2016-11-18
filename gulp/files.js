var paths = {
  bower_components: {
    normalizecss: './bower_components/normalize-css/'
  },
  css: {
    src: './css/src/',
    dist: './css/dist/',
    maps: './css/src/maps/'
  },
  js: {
    src: './js/src/',
    vendor: './js/vendor/',
    dist: './js/dist/',
    jshint: './'
  },
  images: {
    src: './images/src/',
    dist: './images/dist/'
  },
}

var globs = {
  js: {
    src: [
      paths.js.src + 'map.js',
      paths.js.src + 'main.js'
    ],
    dist: {
      original: 'app.js',
      minified: 'app.min.js'
    },
    jshint: '.jshintrc'
  },
  css: {
    raw: [
      paths.css.src + '*.css'
    ],
    src: [
      paths.css.src + 'style.css'
    ],
    dist: {
      original: 'style.css',
      minified: 'style.min.css',
      temp: 'style.temp.css'
    },
    maps: [
      'config.yml',
      'bp.yml',
      'colors.yml',
      'icons.yml',
      'fonts.yml'
    ],
    normalize: paths.bower_components.normalizecss + 'normalize.css'
  },
  images: {
    src: paths.images.src + '*.*',
    dist: paths.images.dist + '*.*'
  }
};

module.exports = {
  paths: paths,
  globs: globs
};
