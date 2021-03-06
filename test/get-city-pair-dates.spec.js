'use strict';

import test from 'ava';
import fn from '../lib/get-city-pair-dates';

const options = {
  originAirport: 'MEX',
  destinationAirport: 'LAX',
  departureDate: '2017-01-01',
  returnDate: '2017-01-10'
};

test('it should return a string', t => {
  t.true(typeof fn(options) === 'string');
});

test('it should return a formatted string', t => {
  t.is(fn(options), 'MEX_LAX_2017-01-01.LAX_MEX_2017-01-10');
});

test('it should return a (one-way) formatted string', t => {
  delete options.returnDate;
  t.is(fn(options), 'MEX_LAX_2017-01-01');
});
