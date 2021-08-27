import { Router } from 'express';

import multer from 'multer';
import multerConfig from '@config/upload';

import { ItemsControllers } from '../controllers/ItemsController';

const upload = multer(multerConfig);

const itemsRouter = Router();
const itemsController = new ItemsControllers();

itemsRouter.get('', itemsController.index);
itemsRouter.post('', upload.single('image'), itemsController.create);

export { itemsRouter };
