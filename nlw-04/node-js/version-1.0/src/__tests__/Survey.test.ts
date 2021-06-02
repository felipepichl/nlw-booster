import request from 'supertest';
import { app } from '../start/app';

import createConnection from '../database';

describe('Survey', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('should be able to create a new servey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Example',
      description: 'Description Example',
    });

    expect(response.status).toBe(201);
  });

  it('should not be able to create a new survey with same survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Example',
      description: 'Description Example',
    });

    expect(response.status).toBe(400);
  });
});
