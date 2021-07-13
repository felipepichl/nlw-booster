import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from 'app/repositories/UsersRepositories';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user } = request;

  const usersReRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersReRepositories.findOne(user.id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: 'Access Unauthorized',
  });
}

export { ensureAdmin };
