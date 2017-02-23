'use strict';

const getLegs = require('./get-legs');

module.exports = function getNormalizedData(data) {
  if (data.status !== 'AVAILABLE' || data._collection.length === 0) {
    throw new Error('No availability found');
  }

  return {
    outbound: getLegs(data._collection[0]._collection),
    inbound: getLegs(data._collection[1]._collection)
  };
};
