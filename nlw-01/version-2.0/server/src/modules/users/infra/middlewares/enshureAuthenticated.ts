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

  if (!authHeader) {
    console.error('Token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    request.user = {
      id: sub,
    };

    return next();

    const { sub } = decoded as ITokenPayload;
  } catch {
    console.error('Invalid JWT Token');
  }
}
