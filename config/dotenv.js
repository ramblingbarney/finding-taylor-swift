/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['AWS_BUCKET'],
    clientAllowedKeys: ['AWS_REGION'],
    clientAllowedKeys: ['AWS_IDENTITY_POOL_ID'],
    fastbootAllowedKeys: ['AWS_BUCKET', 'AWS_REGION','AWS_IDENTITY_POOL_ID'],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
