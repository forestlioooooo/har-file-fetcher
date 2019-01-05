const {
    readFileSync
} = require('fs');

module.exports = function(harObj) {
    return harObj.log.entries || [];
}

module.exports.read = function(path) {
    const str = readFileSync(path);
    return JSON.parse(str);
}