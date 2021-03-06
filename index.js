/**
 * @file entry
 * @author hushicai(bluthcy@gmail.com)
 */

/* eslint-env node  */

var phpcgi = require('./src/main');

// middleware
function fn(options) {
    var documentRoot = options.documentRoot;
    var handler = options.handler;
    var phpcgiArguments = options.args;

    // middleware
    return function(req, res, next) {
        return phpcgi({
            documentRoot: documentRoot,
            handler: handler,
            args: phpcgiArguments,
            req: req,
            res: res,
            next: next
        });
    };
}

exports = module.exports = fn;
