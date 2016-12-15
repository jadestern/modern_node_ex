/**
 * Created by koh on 2016-12-15.
 */

var crypto = require('crypto');

var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash:', output);