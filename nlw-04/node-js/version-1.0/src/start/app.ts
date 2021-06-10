import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import createConnection from '../database';

import AppError from '../app/errors/AppError';

import routes from '../routes';

createConnection();

const app = express();

app.use(express.json());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal server error ${err.message}`,
    });
  },
);

// eslint-disable-next-line import/prefer-default-export
export { app };
