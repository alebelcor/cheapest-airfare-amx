'use strict';

import test from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import got from 'got';
import moment from 'moment';
import isPlainObj from 'is-plain-obj';

import constants from '../lib/constants';
import fetch from '../lib/fetch';
import fixtures from './fixtures.json';

const today = moment();
const options = {
  originAirport: 'MEX',
  destinationAirport: 'LAX',
  departureDate: today.add(20, 'days').format(constants.DATETIME_DATE_FORMAT),
  returnDate: today.add(25, 'days').format(constants.DATETIME_DATE_FORMAT)
};

let post;
let get;

test.before((t) => {
  post = sinon.stub(got, 'post').resolves({
    body: {
      _meta: {
        cartId: `foo-${Math.floor(Math.random() * 1000)}`
      }
    }
  });

  get = sinon.stub(got, 'get').resolves({
    body: fixtures
  });
});

test.after((t) => {
  post.restore();
  get.restore();
});

test('it should return a promise', (t) => {
  t.true(typeof fetch(options).then === 'function');
});

test('it should return an object', async (t) => {
  const data = await fetch(options);

  t.true(isPlainObj(data));
});