'use strict';

const getLegFares = require('./get-leg-fares');

module.exports = function getLegs(rawLegs) {
  return rawLegs.map((rawLeg) => {
    return {
      fares: getLegFares(rawLeg)
    }
  });
};
