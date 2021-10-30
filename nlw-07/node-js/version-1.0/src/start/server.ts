import 'dotenv/config';
import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import { Server } from 'socket.io';
import http from 'http';

import { AppError } from 'app/error/AppError';

import routes from '../routes';

const app = express();
const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

app.use(express.json());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      message: `Internal server error ${err.message}`,
    });
  },
);

app.listen(3333, () => {
  console.log('Server running in port 3333');
});
