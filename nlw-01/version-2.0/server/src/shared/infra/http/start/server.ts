import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import '@shared/infra/typeorm/connection';

import uploadConfig from '@config/upload';
// import errorHandler from '@shared/errors/handler';

import { AppError } from '@shared/errors/AppError';

import routes from '../routes';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadConfig.directories.uploadsFolder));
app.use(
  '/uploads',
  express.static(`${uploadConfig.directories.uploadsFolder}/items`),
);
app.use(routes);
// app.use(errorHandler);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server running in port 3333');
});
