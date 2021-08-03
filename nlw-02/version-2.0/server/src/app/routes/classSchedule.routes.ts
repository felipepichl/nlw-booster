import { Router } from 'express';

import { CreateClassScheduleController } from '../controllers/ClassesSchedule/CreateClassScheduleController';

const createClassScheduleRouter = Router();

const createClassScheduleController = new CreateClassScheduleController();

createClassScheduleRouter.post(
  '/:class_id',
  createClassScheduleController.handle,
);

export { createClassScheduleRouter };
