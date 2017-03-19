'use strict';

import test from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';  // eslint-disable-line import/no-unassigned-import
import got from 'got';

import fn from '../lib/fetch-cart-id';

let post;

test.before(() => {
  post = sinon.stub(got, 'post').resolves({
    body: {
      _meta: {
        cartId: `foo-${Math.floor(Math.random() * 1000)}`
      }
    }
  });
});

test.after(() => {
  post.restore();
});

test('it should return a promise', t => {
  t.true(typeof fn().then === 'function');
});

test('it should return the cart ID', async t => {
  const id = await fn();

  t.true(typeof id === 'string');
  t.true(id.length > 0);
});
