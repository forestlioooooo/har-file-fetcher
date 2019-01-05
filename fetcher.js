const {
    join,
} = require('path');
const Promise = require('bluebird');
const url = require('url');
const UrlGlob = require('url-glob');
const del = require('del');

const debug = require('debug')('har-file-fetcher:fetcher'),
    debugerror = require('debug')('har-file-fetcher:fetcher:error');

const filter = module.exports.filter = function(entries = [], glob) {
    return entries.filter(entry => entry && entry.request && entry.request.url && glob.match(entry.request.url));
}

const {
    default: parse,
    read,
} = require('./parser.js');

const {
    mkdirp,
    downloadTo,
    multip: downloadMultip,
} = require('./downloader.js');

const run = module.exports.run = async function(path, filterstr = '**', destpath = './dest') {
    debug('PATH\t:', path);
    debug('FILTER\t:', filterstr);
    debug('DEST\t:', destpath);

    del.sync(join(destpath, './**'));
    const harObj = read(path);
    const entries = filter(harObj.log.entries, new UrlGlob(filterstr || '**'));
    await Promise.each(entries, async entry => {
        let {
            url: _url,
        } = entry.request;
        _url = url.parse(_url);
        let rpath = decodeURIComponent(_url.pathname).substring(1);
        if (rpath.length === 0) {
            return;
        }
        const dest = join(destpath, _url.host.replace(/:/g, '-'), rpath);
        mkdirp(dest);
        try {
            await downloadTo(entry, dest);
            debug(rpath, '\t ->> ', dest)
        } catch (err) {
            debugerror(rpath, '\t ->> ', dest, 'FAILD')
            console.error(err);
        }
    });
}

// run('./汤姆猫糖果跑酷.har').catch(err => {
//     throw err;
// });