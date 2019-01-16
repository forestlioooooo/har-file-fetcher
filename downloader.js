const {
    createWriteStream,
} = require('fs');
const {
    dirname,
} = require('path');
var mime = require('mime-types');
const strs = require('stringstream');
const _mkdirp = require('mkdirp');
const fetch = require('node-fetch');

module.exports.mkdirp = function(path) {
    _mkdirp.sync(dirname(path));
}

module.exports.downloadTo = function(entry, dest) {
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
        fetch(url, {
            method,
            url,
            headers: _headers,
            body: text,
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

            var charset = mime.charset(response.headers.get('content-type'));
            const _dest = createWriteStream(dest);
            response.body.pipe(_dest).on('finish', function() {
                resolve();
            });
        }).catch(reject);
    });
}