var exec     = require('child_process').exec,
    anybar   = require('anybar'),
    through2 = require('through2');

var DEFAULT_PORT = 1738;

function gulpAnyBar(color, opt) {
    opt = opt || {port: DEFAULT_PORT};

    return through2.obj(function (file, enc, cb) {
        if (file.anybar || color) {
            anybar(file.anybar || color, {port: opt.port});
        }
        this.push(file);
        cb();
    });
}

function start(opt) {
    opt = opt || {port: DEFAULT_PORT};

    exec('ANYBAR_PORT='+opt.port+' open -n /Applications/AnyBar.app')
}

function quit(opt, cb) {
    opt = opt || {port: DEFAULT_PORT};

    anybar('quit', {port: opt.port}, cb);
}

module.exports       = gulpAnyBar;
module.exports.start = start;
module.exports.quit  = quit;
