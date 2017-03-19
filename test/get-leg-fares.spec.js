'use strict';

import test from 'ava';
import fn from '../lib/get-leg-fares';

import fixtures from './fixtures';

const rawLeg = fixtures._collection[0]._collection[0];
let legFares;

test.beforeEach(() => {
  legFares = fn(rawLeg);
});

test('it should return an array', t => {
  t.true(Array.isArray(legFares));
});

test('it should return a one element array', t => {
  t.true(legFares.length === 1);
});

test('fares should have certain members', t => {
  const fare = legFares[0];

  t.true(Object.prototype.hasOwnProperty.call(fare, 'total'));
});
