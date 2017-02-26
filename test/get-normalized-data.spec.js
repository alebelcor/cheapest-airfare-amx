'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import fn from '../lib/get-normalized-data';

import fixtures from './fixtures';

let data;

test.beforeEach(() => {
  data = fn(fixtures);
});

test('it should throw an error when there is no availability', t => {
  let error;

  error = t.throws(() => {
    fn({status: 'UNAVAILABLE'});
  });

  t.is(error.message, 'No availability found');

  error = t.throws(() => {
    fn({_collection: []});
  });

  t.is(error.message, 'No availability found');
});

test('it should return an object', t => {
  t.true(isPlainObj(data));
});

test('it should have certain members', t => {
  t.true(Object.prototype.hasOwnProperty.call(data, 'outbound'));
  t.true(Object.prototype.hasOwnProperty.call(data, 'inbound'));
});
