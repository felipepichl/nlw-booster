import express from 'express';
import path from 'path';

import multer from 'multer';
import multerConfig from '@config/upload';

import OrphanagesController from '@controllers/OrphanagesController';

const routes = express.Router();
const upload = multer(multerConfig);

const orphanagesController = new OrphanagesController();

/**
 * Static Route
 */
routes.use(
  '/uploads',
  express.static(path.resolve(__dirname, '..', '..', 'uploads')),
);

routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);
routes.post('/orphanages', upload.array('images'), orphanagesController.create);

export default routes;
