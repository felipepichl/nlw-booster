import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import { PointsController } from '../controllers/PointsController';

const userRoute = Router();
const upload = multer(uploadConfig);

const pointsController = new PointsController();

userRoute.post('', upload.single('image'), pointsController.create);
userRoute.get('', pointsController.index);
userRoute.get('/:id', pointsController.show);

export default userRoute;
