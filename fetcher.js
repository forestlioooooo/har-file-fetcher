const {
    join,
    dirname,
    basename,
    extname,
} = require('path');
const Promise = require('bluebird');
const url = require('url');
const UrlGlob = require('url-glob');
const del = require('del');

const debug = require('debug')('har-file-fetcher:fetcher'),
    debugwarn = require('debug')('har-file-fetcher:fetcher:warn'),
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

const run = module.exports.run = async function(path, filterstr = '**', destpath) {
    destpath = destpath || join(dirname(path), basename(path, extname(path)));
    debug('PATH\t:', path);
    debug('FILTER\t:', filterstr);
    debug('DEST\t:', destpath);

    del.sync(join(destpath, './**'), {
        force: true,
    });
    const harObj = read(path);
    let entries = harObj.log.entries || [];
    entries = entries.filter(entry => entry && entry.request && entry.request.url && /http[s]?:\/\//.test(entry.request.url));
    entries = filter(entries, new UrlGlob(filterstr || '**'));
    let downloadCount = 0,
        failCount = 0,
        failUrls = [];
    await Promise.each(entries, async(entry, index) => {
        let {
            url: _url,
        } = entry.request;
        _url = url.parse(_url);
        let rpath = decodeURIComponent(_url.pathname).substring(1);
        if (rpath.length === 0) {
            return;
        }
        const dest = join(destpath, _url.host.replace(/:/g, '-'), rpath);
        try {
            mkdirp(dest);
        } catch (err) {
            debugwarn(`${index+1}/${entries.length}`, `mkdirp ${dest} fail`);
            failUrls.push(entry.request.url);
            failCount++;
            return;
        }
        try {
            await downloadTo(entry, dest);
            debug(`${index+1}/${entries.length}`, rpath)
            downloadCount++;
        } catch (err) {
            debugerror(`${index+1}/${entries.length}`, rpath)
            debugerror(err);
            failUrls.push(entry.request.url);
            failCount++;
        }
    });
    debug(`成功：${downloadCount} , 失败：${failCount}`);
    debug('失败的URLs:%j', failUrls);
    debug('失败的URLs:\n', '\n', failUrls.join('\n'));
}

// run('./汤姆猫糖果跑酷.har').catch(err => {
//     throw err;
// });