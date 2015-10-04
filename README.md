gulp-anybar
===========

> Gulp plugin for [AnyBar.app](https://github.com/tonsky/AnyBar)

Developed by [Florian Eckerstorfer](https://florian.ec) in Vienna, Europe.

Usage
-----

There are two ways to set the AnyBar color using this plugin. If you pass the color to `anybar()` then this color will
be set. If no color is specified then the color will be read from `file.anybar` property passed to the plugin.

In the following example the AnyBar color is set to orange and `someOtherPlugin()` will set the `file.anybar` attribute
to another color. When this file is piped to the second instance of `anybar()` this color will be set. This is useful
when `someOtherPlugin()` runs, for example, tests. While the tests are running the icon is *orange* and after the tests
are finished the icon will be set to be either *red*  or *green*.

```javascript
var gulp             = require('gulp'),
    anybar           = require('gulp-anybar'),
    someOther Plugin = require('gulp-some-other-plugin');

gulp.src(srcFiles)
    .pipe(anybar('orange'))
    .pipe(someOtherPlugin())
    .pipe(anybar());
```

It is also possible to start and quit the AnyBar.app in the Gulpfile.

```javascript
gulp.task('watch', function () {
    anybar.start();

    // some watchers and stuff
});

process.on('SIGINT',function(){
    anybar.quit({}, function () {process.exit(); });
});
```
