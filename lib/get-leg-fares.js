'use strict';

module.exports = rawLeg => {
  const rawFares = rawLeg.fares._collection;

  // Cheapest one
  const firstFare = rawFares[0];

  return [{
    total: firstFare.estimate.currency.total
  }];
};
