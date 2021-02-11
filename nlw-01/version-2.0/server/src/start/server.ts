import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import '../database/connection';

import uploadConfig from '@config/uploads';
import routes from '../routes';
import errorHandler from '../errors/handler';

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
