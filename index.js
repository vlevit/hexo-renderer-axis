var stylus = require('stylus'),
  nib = require('nib'),
  axis = require('axis-css');

var getProperty = function(obj, key){
  key = key.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');

  var split = key.split('.'),
    result = obj[split[0]];

  for (var i = 1, len = split.length; i < len; i++){
    result = result[split[i]];
  }

  return result;
};

var defineConfig = function(style){
  style.define('hexo-config', function(data){
    return getProperty(hexo._themeConfig, data.val);
  });
};

var renderer = function(data, options, callback){
  var stylus_config = hexo.config.stylus || {};
  var axis_config = hexo.config.axis || {};

  stylus(data.text)
    .use(nib())
    .use(axis({implicit: !!axis_config.implicit}))
    .use(defineConfig)
    .set('filename', data.path)
    .set('compress', stylus_config.compress)
    .set('include css', true)
    .render(callback);
};

hexo.extend.renderer.register('styl', 'css', renderer);
hexo.extend.renderer.register('stylus', 'css', renderer);
