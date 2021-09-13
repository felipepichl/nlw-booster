import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import { enshureAuthenticated } from '@modules/users/infra/middlewares/enshureAuthenticated';

import { PointsController } from '../controllers/PointsController';

const pointRouter = Router();
const upload = multer(uploadConfig);

const pointsController = new PointsController();

pointRouter.use(enshureAuthenticated);
pointRouter.post('', upload.single('image'), pointsController.create);
pointRouter.get('', pointsController.index);
pointRouter.get('/:id', pointsController.show);

export { pointRouter };
