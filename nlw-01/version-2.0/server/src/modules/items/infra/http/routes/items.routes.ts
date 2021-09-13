import { Router } from 'express';

import multer from 'multer';
import multerConfig from '@config/upload';

import { enshureAuthenticated } from '@modules/users/infra/middlewares/enshureAuthenticated';

import { ItemsControllers } from '../controllers/ItemsController';

const upload = multer(multerConfig);

const itemsRouter = Router();
const itemsController = new ItemsControllers();

itemsRouter.use(enshureAuthenticated);
itemsRouter.get('', itemsController.index);
itemsRouter.post('', upload.single('image'), itemsController.create);

export { itemsRouter };
