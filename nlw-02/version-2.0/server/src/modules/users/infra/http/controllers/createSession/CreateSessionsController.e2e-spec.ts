import request from 'supertest';
import { app } from '@shared/infra/http/start/app';

import { prisma } from '@shared/infra/prisma'

describe('E2E Sessions', () => {
  beforeEach(async () => {

    const result = await prisma.user.create({
      data: {
        name: 'Teste',
        username: 'felipepichl',
        email: 'test@teste.com',
        password: 'hash123',
        avatar: 'https://example.com/user_test.png',
        bio: 'A great user test',
        whatsapp: '55999998888',
      }
    });

    console.log(result);

  })

  it('should be able to create a new session', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'test@teste.com',
      password: 'hash123',
    });

    expect(responseToken.body).toHaveProperty('token');
  });
});
