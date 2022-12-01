import request from 'supertest';
import { app } from '@shared/infra/http/start/app';

describe('E2E Users', () => {


  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      username: 'user_test',
      email: 'test@teste.com',
      password: 'hash123',
      whatsapp: '55999998888',
    });

    expect(response.status).toBe(201);
  });
});
