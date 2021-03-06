import express from 'express';
import path from 'path';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './../config/multer';

import ItemsController from '../controllers/ItemsController';
import PointsController from '../controllers/PointsController';

const routes = express.Router();
const upload = multer(multerConfig);

/**
 * Static Route
 */
routes.use('/uploads', express.static(path.resolve(__dirname, '..', '..', 'uploads')));

/**
 * Controllers
 */
const itemsController = new ItemsController();
const pointsController = new PointsController();

/**
 * Routes
 */
routes.get('/items', itemsController.index);

routes.post(
  '/points', 
  upload.single('image'), 
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }),
  pointsController.create
);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;