import { Router } from 'express';

import { CreateClassScheduleController } from '../controllers/ClassesSchedule/CreateClassScheduleController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createClassScheduleRouter = Router();

const createClassScheduleController = new CreateClassScheduleController();

createClassScheduleRouter.use(ensureAuthenticated);

createClassScheduleRouter.post('/', createClassScheduleController.handle);

export { createClassScheduleRouter };
