import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../../app.ts';

test.describe('Launches API', () => {
  test('GET /launches returns 200', async () => {
    const res = await request(app).get('/launches');
    assert.equal(res.status, 200);
  });
});
