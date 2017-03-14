if (process.argv.length < 3) {
    console.log('Usage: node watch.js [mocha arguments...]');
    return;
}

var spawn = require('child_process').spawn;
var chokidar = require('chokidar');
var args = process.argv.slice(2);

var onChange = function() {
    var mocha = spawn('./node_modules/mocha/bin/_mocha', args, {stdio: "inherit"});

    mocha.on('close', function(code) {
        console.log('watching...');
    });
};

var opts = {
    ignored: /(^|[\/\\])\../,
    persistent: true
};

chokidar.watch('**/*.js', opts).on('change', onChange);
onChange();