const {
    createReadStream,
    createWriteStream,
} = require('fs');
const {
    dirname,
} = require('path');
const {
    Readable,
    PassThrough,
} = require('stream');

var mime = require('mime-types');
const strs = require('stringstream');
const _mkdirp = require('mkdirp');
const fetch = require('node-fetch');
const toString = require('stream-to-string');
const readchunk = require('read-chunk');
const fileType = require('file-type');
const istextorbinary = require('istextorbinary');

const debug = require('debug')('har-file-fetcher:downloader'),
    debugwarn = require('debug')('har-file-fetcher:downloader:warn'),
    debugerror = require('debug')('har-file-fetcher:downloader:error');

const mkdirp = module.exports.mkdirp = function(path) {
    _mkdirp.sync(dirname(path));
}

module.exports.writeFile = function(dest, content) {
    return new Promise((resolve, reject) => {
        try {
            try {
                mkdirp(dest);
            } catch (err) {}
            const stream = new Readable();
            stream.on('error', reject);
            const _dest = createWriteStream(dest);
            _dest.on('error', reject);
            stream.pipe(_dest).on('finish', function() {
                resolve();
            });
            stream.push(content);
            stream.push(null);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports.meta = function(entry, dest, result) {
    return new Promise((resolve, reject) => {
        try {
            const stream = new Readable();
            const _dest = createWriteStream(dest);
            stream.pipe(_dest).on('finish', function() {
                resolve();
            });
            if (result.download === true) {
                entry['har-fetch-download'] === true;
                entry['har-fetch-download-start-date-time'] = result.startedDateTime;
            }
            stream.push(JSON.stringify(entry, null, 4));
            stream.push(null);
        } catch (err) {
            reject(err);
        }
    })
}

module.exports.xhrMock = function(entry, result, dest) {
    return new Promise(async(resolve, reject) => {
        try {
            const {
                path,
                method,
                url,
                response,
            } = result;
            const {
                status,
                headers,
                encoding,
            } = response;

            const responseTypeHeader = (headers || []).find(header => header.name.toLowerCase() === 'content-type');
            let responseType = responseTypeHeader && responseTypeHeader.value;
            if (!responseType) {
                const buffer = readchunk.sync(path, 0, fileType.minimumBytes);
                responseType = istextorbinary.isTextSync(path, buffer) && 'text/plain';
            }
            const charset = responseType ? mime.charset(responseType) : false;
            const isText = charset !== false;
            if (!isText) {
                return resolve(false);
            }
            const isjson = 'application/json' === responseType.split(';')[0];

            const rs = createReadStream(path);
            const str = await toString(rs);
            const _dest = createWriteStream(dest);
            _dest.on('error', reject);
            const stream = new PassThrough();
            stream.on('error', reject);
            stream.pipe(_dest).on('finish', () => {
                resolve();
            });
            const _method = ({
                'GET': 'get',
                'PUT': 'put',
                'POST': 'post',
                'OPTION': 'option',
                'DELETE': 'delete'
            })[method.toUpperCase()];
            const _headerstr = (headers || []).map((header, index) => {
                    return `header('${header.name}', '${header.value}')`;
                }).join('.') // 'header(\'content-type\', \'application/base64\')';
            const __headerstr = _headerstr && `resp = resp.${_headerstr};`;
            const _bodystr = !isjson ? `'${str}'` : `JSON.stringify(${str})`;
            stream.end(`
var client = window.client;
XHRMock.${_method}(
    "${url}",
    function(req, resp) {
        resp = resp.status(${status});${__headerstr}
        resp = resp.body(${_bodystr});
        return Promise.resolve(resp);
    }
);

// 请求元数据
// ${JSON.stringify(entry,null,4).replace(/\n/g,'\n// ')}
`);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.extract = function(entry, dest) {
    return new Promise((resolve, reject) => {
        const {
            response,
        } = entry;
        const {
            headers = [], content, status,
                statusText,
        } = response || {};

        if (!response || status < 200 || status >= 400 || !content || !content.text) {
            debugwarn('%s response invalid status %d(%s) , try to download it again', entry.request.url, status, statusText);
            downloadTo(entry, dest).then(resolve).catch(err => {
                debugwarn('try to download %s fail', entry.request.url);
                reject(err);
            });
            return;
        }

        let responseType = headers.find(header => header.name.toLowerCase() === 'content-type');
        const {
            mimeType,
            text,
            encoding,
        } = content || {};
        const charset = mime.charset(mimeType || responseType);

        let buf;
        const isText = charset !== false;
        if (isText) {
            buf = new Buffer(text, encoding || charset);
        } else {
            buf = new Buffer(text, encoding);
        }
        const stream = new PassThrough();
        const _dest = createWriteStream(dest, {
            encoding: charset,
        });
        stream.pipe(_dest).on('finish', function() {
            const {
                request,
            } = entry;
            resolve({
                startedDateTime: entry.startedDateTime,
                path: dest,
                method: request.method,
                url: request.url,
                requestHeaders: request.headers || [],
                response: {
                    status,
                    statusText,
                    encoding,
                    headers,
                },
            });
        });
        stream.end(buf);
    });
};

const downloadTo = module.exports.downloadTo = function(entry, dest) {
    return new Promise(function(resolve, reject) {
        const {
            request,
        } = entry;
        const {
            method,
            url,
            cookies,
            headers,
            queryString,
            postData,
        } = request || {};
        const {
            mimeType,
            text,
        } = postData || {};
        const _headers = {};
        headers.filter(header => header.name.indexOf(':') === -1).forEach(header => {
            _headers[header.name] = header.value;
        });
        delete _headers['accept-encoding'];
        const startedDateTime = new Date();
        fetch(url, {
            method,
            url,
            headers: _headers,
            body: text,
            timeout: 3000,
        }).then(response => {
            const {
                status,
                statusText,
            } = response;
            if (status < 200 || status >= 400) {
                const err = new Error(`${statusText || ''} download ${method}:${url} faild,with header:${JSON.stringify(_headers)} and body:${JSON.stringify(text)}`);
                // err.response = response;
                return reject(err);
            }

            const _dest = createWriteStream(dest);
            response.body.pipe(_dest).on('finish', function() {
                resolve({
                    download: true,
                    startedDateTime: JSON.stringify(startedDateTime),
                    path: dest,
                    method,
                    url,
                    requestHeaders: _headers,
                    response: {
                        status,
                        statusText,
                        headers: Array.from(response.headers),
                    },
                });
            });
        }).catch(reject);
    });
}