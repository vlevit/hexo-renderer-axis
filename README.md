# [Stylus] renderer

Add support for [Stylus] with [axis] and [nib]

## Install

``` bash
$ npm install hexo-renderer-stylus --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
stylus:
  compress: false
axis:
  implicit: true
```

- **compress** - Compress generated CSS
- **implicit** - Do not require importing axis manually in stylus

[Stylus]: http://learnboost.github.io/stylus/
[axis]: http://roots.cx/axis/
[nib]: http://visionmedia.github.io/nib/
