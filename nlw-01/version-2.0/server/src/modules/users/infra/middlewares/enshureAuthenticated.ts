import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/authConfig';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function enshureAuthenticated(
  request: Request,
  response: Response,
  _next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;
  } catch (err) {}
}
