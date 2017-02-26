'use strict';

import test from 'ava';
import get from '../lib/get-lowest-total';

let data = {
  outbound: [{
    fares: [{
      total: 1000
    }]
  }, {
    fares: [{
      total: 500
    }]
  }],
  inbound: [{
    fares: [{
      total: 800.1234
    }]
  }, {
    fares: [{
      total: 900
    }]
  }]
};

test('it should return the cheapest total', t => {
  t.is(get(data), 1300.12);

  delete data.inbound;
  t.is(get(data), 500);
});
