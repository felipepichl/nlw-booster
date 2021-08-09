import { Router } from 'express';

import { CreateClassScheduleController } from '../controllers/ClassesSchedule/CreateClassScheduleController';

const createClassScheduleRouter = Router();

const createClassScheduleController = new CreateClassScheduleController();

createClassScheduleRouter.post('/', createClassScheduleController.handle);

export { createClassScheduleRouter };
