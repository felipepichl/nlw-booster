import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import '@shared/infra/typeorm/connection';

import uploadConfig from '@config/uploads';
import errorHandler from '@shared/errors/handler';

import routes from '../routes';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadConfig.directory));
app.use('/uploads', express.static(`${uploadConfig.directory}/items`));
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => {
  console.log('Server running in port 3333');
});
