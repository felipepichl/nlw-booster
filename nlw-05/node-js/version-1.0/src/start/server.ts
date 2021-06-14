import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import '../database';
import path from 'path';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import { AppError } from 'app/errors/AppError';
import routes from '../routes';

const app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.set('views', path.join(__dirname, '..', '..', 'public'));

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.get('/pages/client', (request, response) => {
  return response.render('html/client.html');
});

const http = createServer(app);
const io = new Server(http);

io.on('connection', (socket: Socket) => {
  console.log('Connected', socket.id);
});

app.use(express.json());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal sever error ${err.message}`,
    });
  },
);

http.listen(3333, () => {
  console.log('Server running in port 3333');
});
