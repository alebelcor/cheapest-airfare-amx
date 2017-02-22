'use strict';

const getSearchDeeplink = require('./get-search-deeplink');

module.exports = function getResult(lowestTotal, options) {
  return {
    total: lowestTotal,
    source: getSearchDeeplink(options)
  };
}
