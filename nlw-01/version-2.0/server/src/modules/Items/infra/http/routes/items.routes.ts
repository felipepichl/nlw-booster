import { Router } from 'express';

import multer from 'multer';
import multerConfig from '@config/upload';

import { ItemsControllers } from '../controllers/ItemsController';

const upload = multer(multerConfig);

const userRoute = Router();
const itemsController = new ItemsControllers();

userRoute.get('', itemsController.index);
userRoute.post('', upload.single('image'), itemsController.create);

export default userRoute;
