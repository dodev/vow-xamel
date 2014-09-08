var vow = require('vow');
var xamel = require('xamel');

/**
 *
 * @param {String} xmlString
 * @param {Object} options
 * @returns {vow.Promise}
 */
function promisifiedParse(xmlString, options) {
    var deferred = new vow.Deferred();

    xamel.parse(xmlString, options, function (err, nodeSet) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(nodeSet);
        }
    });

    return deferred.promise();
}

module.exports = {
    parse: promisifiedParse,
    serialize: xamel.serialize
};
