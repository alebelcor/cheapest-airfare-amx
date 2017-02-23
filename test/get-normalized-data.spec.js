'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import get from '../lib/get-normalized-data';

import fixtures from './fixtures.json';

let data;

test.beforeEach((t) => {
  data = get(fixtures);
});

test('it should throw an error when there is no availability', (t) => {
  let error;

  error = t.throws(() => {
    get({status: 'UNAVAILABLE'});
  });

  t.is(error.message, 'No availability found');

  error = t.throws(() => {
    get({_collection: []});
  });

  t.is(error.message, 'No availability found');
});

test('it should return an object', (t) => {
  t.true(isPlainObj(data));
});

test('it should have certain members', (t) => {
  t.true(data.hasOwnProperty('outbound'));
  t.true(data.hasOwnProperty('inbound'));
});
