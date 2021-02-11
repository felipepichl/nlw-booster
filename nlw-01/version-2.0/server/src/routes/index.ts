import express from 'express';
import path from 'path';

import multer from 'multer';
import multerConfig from '@config/uploads';

import ItemsControllers from '@controller/ItemsController';
import PointsControllers from '@controller/PointsController';

const routes = express.Router();
const upload = multer(multerConfig);

const itemsController = new ItemsControllers();
const pointsController = new PointsControllers();

routes.get('/items', itemsController.index);
routes.post('/items', upload.single('image'), itemsController.create);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', upload.single('image'), pointsController.create);

export default routes;
