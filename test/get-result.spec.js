'use strict';

import test from 'ava';
import moment from 'moment';
import isPlainObj from 'is-plain-obj';

import constants from '../lib/constants';
import getResult from '../lib/get-result';

const today = moment();
const options = {
  originAirport: 'MEX',
  destinationAirport: 'LAX',
  departureDate: today.add(20, 'days').format(constants.DATETIME_DATE_FORMAT),
  returnDate: today.add(25, 'days').format(constants.DATETIME_DATE_FORMAT)
};

test('it should return a result object', function (t) {
  t.true(isPlainObj(getResult(1000, options)));
});

test('it should return a result object with certain members', function (t) {
  const result = getResult(2000, options);

  t.true(result.hasOwnProperty('total'));
  t.is(typeof result.total, 'number');
  t.is(result.total, 2000);

  t.true(result.hasOwnProperty('source'));
  t.is(typeof result.source, 'string');
});
