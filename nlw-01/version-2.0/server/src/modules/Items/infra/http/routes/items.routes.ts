import { Router } from 'express';

import multer from 'multer';
import multerConfig from '@config/upload';

import ItemsController from '../controllers/ItemsController';

const upload = multer(multerConfig);

const userRoute = Router();
const itemsController = new ItemsController();

userRoute.get('', itemsController.index);
userRoute.post('', upload.single('image'), itemsController.create);

export default userRoute;
