import { app } from './app';
import request from 'supertest';

describe('hello api', () => {
  it('should send hello response back', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual("hello")
  });
});
