'use strict';

const fetchCartId = require('./fetch-cart-id');
const fetchDetailedFares = require('./fetch-detailed-fares');

module.exports = options => {
  return fetchCartId()
    .then(cartId => fetchDetailedFares(cartId, options));
};
