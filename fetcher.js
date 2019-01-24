const {
    join,
    dirname,
    basename,
    extname,
    parse: parsepath,
    sep,
    normalize,
} = require('path');
const {
    accessSync,
    constants,
    createReadStream,
} = require('fs');

const moment = require('moment');
const Promise = require('bluebird');
const url = require('url');
const UrlGlob = require('url-glob');
const del = require('del');
const fse = require('fs-extra');

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
    writeFile,
    meta,
    extract,
    xhrMock,
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
        entries = entries.filter(entry => entry && entry.request && entry.request.url)
        entries.sort((entry1, entry2) => {
            return -(entry1.request.url.length > entry2.request.url.length ? 1 : -1);
        });
        debug(entries.map((entry, index) => `${index}/${entries.length} ${entry.request.url}`).join('\n'))
        let downloadCount = 0,
            failCount = 0,
            failUrls = [],
            apiPaths = [];
        await Promise.each(entries, async(entry, index) => {
            const {
                startedDateTime,
            } = entry;
            let {
                url: _url,
            } = entry.request;
            _url = url.parse(_url);
            let rpath = decodeURIComponent(_url.pathname).substring(1);
            if (rpath.length === 0) {
                rpath = '/';
                debugwarn('%s pathname was empty : "%s" rename to / ', entry.request.url, rpath);
            }
            if (rpath.endsWith('/')) {
                rpath += 'index';
                debugwarn(`${index+1}/${entries.length} %s was a folder, rename to : %s`, rpath, rpath);
            }
            let dest = join(destpath, _url.host.replace(/:/g, '-'), rpath);
            let apidest = dest + '.api.js';
            let metadest = dest + '.harmeta.json';
            try {
                accessSync(metadest, constants.F_OK);
                const postfix = moment(new Date(startedDateTime)).format('YY-MM-DD.HH:mm:ss');
                const _dest = dest + `-(${postfix})`;
                debugwarn(`${index+1}/${entries.length} %s already exists , rename to : %s`, rpath, basename(_dest));
                dest = _dest;
                metadest = dest + '.harmeta.json';
                apidest = dest + '.api.js';
            } catch (err) {}

            try {
                mkdirp(dest);
            } catch (err) {
                debugwarn(`${index+1}/${entries.length}`, `mkdirp ${dest} fail`);
                failUrls.push(entry.request.url);
                failCount++;
                return;
            }
            try {
                const result = await extract(entry, dest);
                await meta(entry, metadest, result);
                // console.log(result);
                const success = await xhrMock(entry, result, apidest);
                if (success !== false) {
                    apiPaths.push(apidest);
                    debug(`${index+1}/${entries.length} %s API maked %s `, rpath, apidest.replace(destpath + '/', ''))
                }

                debug(`${index+1}/${entries.length}`, rpath)
                downloadCount++;
            } catch (err) {
                debugerror(`${index+1}/${entries.length}`, rpath)
                debugerror(err);
                failUrls.push(entry.request.url);
                failCount++;
            }
        });

        const newApiPaths = apiPaths.map(apiPath => {
            const path = apiPath.replace(destpath + '/', '');
            const newrpath = join('local', path);
            const newpath = join(destpath, newrpath);
            return newrpath;
        });

        debug('');
        debug('准备提取API文件');
        apiPaths.forEach((apiPath, idx) => {
            fse.copySync(apiPath, join(destpath, newApiPaths[idx]));
        });
        debug('提取API文件完成');

        const newApiPathGroups = newApiPaths.reduce((groups, path) => {
            const key = path.split(sep)[1];
            groups[key] = groups[key] || [];
            groups[key].push(path);
            return groups;
        }, {});

        // console.log(join(destpath, 'report.txt'));
        await writeFile(join(destpath, 'report.txt'), `
-------------------------------------------------------------------------------------------
成功：${downloadCount} , 失败：${failCount}
-------------------------------------------------------------------------------------------
失败的URLs:${JSON.stringify(failUrls)}
失败的URLs:
${failUrls.join('\n')}

API 生成个数:${newApiPaths.length}
-------------------------------------------------------------------------------------------
${newApiPaths.join('\n')}

对应的引用脚本为:
${Object.keys(newApiPathGroups).map(key => {
    return `
<!-- API for ${key} -->
${newApiPathGroups[key].map(path => `<script src="${path}" ></script>`).join('\n')}
`;
})}
`);
    debug('报告生成完成:report.txt');

    const rs = createReadStream(join(destpath, 'report.txt'));
    rs.pipe(process.stdout);
}

// run('./汤姆猫糖果跑酷.har').catch(err => {
//     throw err;
// });